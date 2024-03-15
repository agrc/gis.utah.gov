import { ProductType, type StewardshipRecord } from '@models/products/sgid/types';
import { GoogleAuth, auth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const stewardshipId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';

const scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

let client;

console.log('\nbuilding sgid index. configuration: ', import.meta.env.MODE);

if (import.meta.env.NETLIFY) {
  console.log('using ci credentials');
  client = auth.fromJSON(JSON.parse(import.meta.env.GOOGLE_PRIVATE_KEY));
  client.scopes = scopes;
} else {
  client = new GoogleAuth({
    scopes,
  });
}

export async function getStewardshipRecords(): Promise<StewardshipRecord[]> {
  if (import.meta.env.DEV) {
    return (await import('./devRecords.json')).default as unknown as StewardshipRecord[];
  }

  const stewardshipSheet = new GoogleSpreadsheet(stewardshipId, client);
  await stewardshipSheet.loadInfo();

  const stewardshipRows = await stewardshipSheet.sheetsByTitle['SGID Index'].getRows();

  return stewardshipRows.map(etlRow).filter((row) => row) as StewardshipRecord[];
}

function toProductTypeEnum(type: string): ProductType {
  const productType = ProductType[type.toUpperCase().replaceAll('-', '_') as keyof typeof ProductType];

  if (!productType) {
    if (type.toLowerCase() == 'basemap') {
      return ProductType.DISCOVER_SERVICE;
    }

    if (type.toLowerCase() == 'raster') {
      return ProductType.ELEVATION_RASTER;
    }

    if (type.toLowerCase() == 'elevation') {
      return ProductType.ELEVATION_RASTER;
    }

    console.warn(`Invalid product type ${type}`);
  }

  return productType;
}

function etlRow(row): StewardshipRecord | null {
  if (['shelved', 'deprecated'].includes(row.get('ugrcStatus') ?? '')) {
    return null;
  }

  return {
    id: row.get('id'),
    displayName: row.get('displayName'),
    tableName: row.get('tableName'),
    category: row.get('category'),
    ugrcStatus: row.get('ugrcStatus'),
    source: row.get('datasetSource'),
    dataType: toProductTypeEnum(row.get('productType')),
    description: row.get('description'),
    inActionUrl: row.get('inActionUrl'),
    productPage: row.get('productPage'),
    hub: {
      title: row.get('displayName'),
      itemId: row.get('itemId'),
      organization: row.get('hubOrganization'),
      hubName: row.get('hubName'),
    },
    server: {
      layerId: row.get('serverLayerId'),
      serviceName: row.get('serverServiceName'),
      host: row.get('serverHost'),
    },
    openSgid: row.get('openSGIDtableName'),
  };
}
