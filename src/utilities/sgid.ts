import { dataPages } from '@data/downloadMetadata';
import { ProductType, type Row } from '@models/products/sgid/types';
import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import startCase from 'lodash.startcase';

const stewardshipId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

export async function getStewardshipRecords() {
  console.log('loading stewardship spreadsheet');
  if (import.meta.env.DEV) {
    return [
      {
        id: undefined,
        displayName: 'Address Points',
        tableName: 'AddressPoints',
        category: 'base maps',
        source: ['UGRC'],
        dataType: 7,
        description: 'A muted base map great for overlaying data.',
        inActionUrl: 'https://atlas.utah.gov',
        productPageSlug: '',
        ugrcStatus: null
      },
      {
        id: undefined,
        displayName: 'Fire Restriction Areas 2012',
        tableName: 'FireRestrictionAreas2012',
        category: 'boundaries',
        source: ['UGRC'],
        dataType: 3,
        description: "NOTE: This dataset is an older dataset that we have removed from the SGID and 'shelved' in ArcGIS Online. There may (or may not) be a newer vintage of this dataset in the SGID.",
        inActionUrl: undefined,
        productPageSlug: '',
        ugrcStatus: 'static',
        hub: { title: 'utah fire restriction areas 2012' }
      },
      {
        id: undefined,
        displayName: 'Parcels Piute',
        tableName: 'Parcels_Piute',
        category: 'cadastre',
        source: ['County'],
        dataType: 3,
        description: 'Piute County parcel boundary, parcel identifier, parcel address, owner type, and county recorder contact information as required by HB113.',
        inActionUrl: 'https://parcels.utah.gov/',
        productPageSlug: 'data/cadastre/parcels/index.html',
        ugrcStatus: null,
        hub: {
          title: 'Utah Piute County Parcels',
          itemId: 'cef8a96c8f75437cb05a3dc7a610d1b0',
          organization: undefined,
          hubName: undefined
        },
        server: { layerId: 0, serviceName: 'Parcels_Piute', host: undefined },
        openSgid: 'cadastre.piute_county_parcels'
      }
    ]
  }

  const stewardshipSheet = new GoogleSpreadsheet(stewardshipId, auth);
  await stewardshipSheet.loadInfo();

  const stewardshipRows = await stewardshipSheet.sheetsByTitle['SGID Stewardship Info'].getRows();

  return stewardshipRows.map(etlRow).filter(row => row);
};

function formatCategory(category: string) {
  category = category.toLowerCase();

  if (category === 'basemap') {
    return 'base maps';
  }

  return category;
}

function getTableParts(tableName: string) {
  // count all occurrences of a period
  const parts = tableName.split('.');
  const partCount = parts.length;

  switch (partCount) {
    case 1:
      return { category: null, tableName };
    case 2:
      return { category: formatCategory(parts[0]), tableName: parts[1] };
    default:
      throw new Error(`Invalid table name ${tableName}`);
  }
}

function getUgrcStatus(deprecated?: string, refreshCycle?: string) {
  if (deprecated) {
    return 'deprecated';
  }

  if (refreshCycle?.toLowerCase() === "static") {
    return 'static';
  }

  if (refreshCycle?.toLowerCase() === "shelved") {
    return 'shelved';
  }

  return null;
}

const newData = Object.keys(dataPages).reduce((acc, key) => {
  const data = dataPages[key];
  acc[key.toLowerCase()] = data;

  return acc;
}, {});

function getHubName(url?: string, ugrcStatus?: "deprecated" | "static" | "shelved" | null) {
  if (!url) {
    return null;
  }

  const matches = /https:\/\/opendata\.gis\.utah\.gov\/datasets\/(?<slug>.*?(\/|$))/gmi.exec(url);
  if (!matches) {
    return null;
  }

  const slug = matches.groups?.slug.replaceAll('-', ' ').toLowerCase() ?? "";
  if (slug.indexOf('wmts') > -1) {
    return null;
  }

  if (slug.indexOf(':') > -1) {
    const [organization, title] = slug.split('::');

    return {
      hub: {
        title,
        organization
      }
    }
  }

  if (ugrcStatus === 'static') {
    return {
      hub: {
        title: slug,
      }
    }
  }

  const data = newData[slug];

  if (!data) {
    console.log(`No data found for ${slug}`);

    return null;
  }

  return {
    hub: {
      title: data.name,
      itemId: data.itemId,
      organization: data.externalHubOrganization,
      hubName: data.oddHubName
    },
    server: {
      layerId: data.layerId,
      serviceName: data.featureServiceId,
      host: data.featureServiceHost,
    },
    openSgid: data.openSgid
  }
}

function toProductTypeEnum(type?: string): ProductType | string | undefined {
  if (!type) {
    return type;
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

    console.log(`Invalid product type ${type}`);
  }

  return productType;
};

function etlRow(row): Row | null {
  const { category, tableName } = getTableParts(row.get('SGID Data Layer'));
  const ugrcStatus = getUgrcStatus(row.get('Deprecated'), row.get('Refresh Cycle (Days)'));

  if (['shelved', 'deprecated'].includes(ugrcStatus ?? "")) {
    return null;
  }

  return {
    id: row.get('ID'),
    displayName: startCase(tableName.replaceAll('_', ' ')),
    tableName,
    category,
    source: [row.get('Data Source')],
    dataType: toProductTypeEnum(row.get('Data Type')),
    description: row.get('Description'),
    inActionUrl: row.get('Webapp'),
    productPageSlug: row.get('Website URL'),
    ugrcStatus,
    ...getHubName(row.get('Endpoint'), ugrcStatus)
  };
}
