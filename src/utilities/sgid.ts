import { ProductType, type Row } from '@models/products/sgid/types';
import { GoogleAuth, auth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const stewardshipId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';

const scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

let client = new GoogleAuth({
  scopes
});

if (import.meta.env.PROD) {
  let client = auth.fromJSON(JSON.parse(import.meta.env.GOOGLE_PRIVATE_KEY));
  client.scopes = scopes;
}

export async function getStewardshipRecords() {
  if (!import.meta.env.DEV) {
    return [
      {
        id: '94f9ac4c-ba32-4aa0-a2d1-48092325de6b',
        displayName: 'Address Points',
        tableName: 'AddressPoints',
        category: 'base maps',
        ugrcStatus: '',
        source: undefined,
        dataType: 7,
        description: 'A muted basemap great for overlaying data.',
        inActionUrl: undefined,
        productPagePath: '',
        hub: {
          title: 'Address Points',
          itemId: '',
          organization: '',
          hubName: ''
        },
        server: { layerId: '', serviceName: '', host: '' },
        openSgid: ''
      },
      {
        id: '415ca7b6-a55a-49b0-a1e7-8d483a24056b',
        displayName: 'Habitat Bonetailed Chub',
        tableName: 'Habitat_BonetailedChub',
        category: 'bioscience',
        ugrcStatus: '',
        source: undefined,
        dataType: 3,
        description: 'Bonetailed chub habitat identified by the Dept. of Wildlife Resources.',
        inActionUrl: undefined,
        productPagePath: 'https://dwr-data-utahdnr.hub.arcgis.com/search?collection=dataset&q=habitat',
        hub: {
          title: 'Habitat Bonetailed Chub',
          itemId: '',
          organization: '',
          hubName: ''
        },
        server: { layerId: '', serviceName: '', host: '' },
        openSgid: ''
      },
      {
        id: 'c3fd2184-b420-4842-ba47-d522ba428bb2',
        displayName: 'Parcels Carbon',
        tableName: 'Parcels_Carbon',
        category: 'cadastre',
        ugrcStatus: '',
        source: undefined,
        dataType: 3,
        description: 'Carbon County parcel boundary, parcel identifier, parcel address, owner type, and county recorder contact information as required by HB113.',
        inActionUrl: undefined,
        productPagePath: '/products/sgid/cadastre/parcels',
        hub: {
          title: 'Parcels Carbon',
          itemId: '6bab6b394b4749ae9f404953670bbd24',
          organization: 'utah',
          hubName: 'Utah Carbon County Parcels'
        },
        server: {
          layerId: '0',
          serviceName: 'Parcels_Carbon',
          host: 'https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis'
        },
        openSgid: 'cadastre.parcels_carbon'
      }
    ]
  }

  const stewardshipSheet = new GoogleSpreadsheet(stewardshipId, client);
  await stewardshipSheet.loadInfo();

  const stewardshipRows = await stewardshipSheet.sheetsByTitle['SGID Index'].getRows();

  return stewardshipRows.map(etlRow).filter(row => row);
};

function toProductTypeEnum(type?: string): ProductType | undefined {
  if (!type) {
    console.warn('No product type');

    return undefined;
  }

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
};

function etlRow(row): Row | null {

  if (['shelved', 'deprecated'].includes(row.get('ugrcStatus') ?? "")) {
    return null;
  }

  return {
    id: row.get('id'),
    displayName: row.get('displayName'),
    tableName: row.get('tableName'),
    category: row.get('category'),
    ugrcStatus: row.get('ugrcStatus'),
    source: row.get('dataSources'),
    dataType: toProductTypeEnum(row.get('productType')) ? toProductTypeEnum(row.get('productType')) : console.log(row.get('displayName')),
    description: row.get('description'),
    inActionUrl: row.get('Webapp'),
    productPagePath: row.get('productPagePath'),
    hub: {
      title: row.get('displayName'),
      itemId: row.get('itemId'),
      organization: row.get('hubOrganization'),
      hubName: row.get('hubName')
    },
    server: {
      layerId: row.get('serverLayerId'),
      serviceName: row.get('serverServiceName'),
      host: row.get('serverHost'),
    },
    openSgid: row.get('openSGIDtableName')
  };
}
