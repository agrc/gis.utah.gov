import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import knex from 'knex';
import ky from 'ky';
import startCase from 'lodash.startcase';
import { v4 as uuid } from 'uuid';

const mainId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';
const schemaId = '1P7HC-Y7ptpIMoBVGeZY70v2CQA3fEz1SenbWG-SL4oQ';
const conversionId = '196e8ZYoxnq-Nk6CjvIfjKi83-sZbXNazdADiKOTyJ3g';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

console.log('loading schema spreadsheet');
const schemaSpreadsheet = new GoogleSpreadsheet(schemaId, auth);
await schemaSpreadsheet.loadInfo();

console.log('loading main spreadsheet');
const mainSpreadsheet = new GoogleSpreadsheet(mainId, auth);
await mainSpreadsheet.loadInfo();

const conversionSpreadsheet = new GoogleSpreadsheet(conversionId, auth);
await conversionSpreadsheet.loadInfo();

const sgidIndexWorksheet = mainSpreadsheet.sheetsByTitle['SGID Index'];

async function clear() {
  await sgidIndexWorksheet.clear();
}

async function getSchema() {
  console.log('parsing schema');
  const worksheet = schemaSpreadsheet.sheetsByTitle['Main'];
  const schema = (await worksheet.getRows()).map((row) => row.toObject());

  return schema;
}

async function processStewardship() {
  console.log('loading stewardship spreadsheet');
  const stewardshipSheet = new GoogleSpreadsheet(mainId, auth);
  await stewardshipSheet.loadInfo();

  const rows = await stewardshipSheet.sheetsByTitle['SGID Stewardship Info'].getRows();

  console.log('etl-ing');

  let newRows = [];
  for (const row of rows) {
    const newRow = await etlRow(row);

    if (newRow) {
      newRows.push(newRow);
    }

    if (newRows.length === 10) {
      await sgidIndexWorksheet.addRows(newRows);

      newRows = [];
    }
  }

  if (newRows.length > 0) {
    await sgidIndexWorksheet.addRows(newRows);
  }
}

function getUgrcStatus(deprecated, refreshCycle) {
  if (deprecated) {
    return 'deprecated';
  }

  if (refreshCycle?.toLowerCase() === 'static') {
    return 'static';
  }

  if (refreshCycle?.toLowerCase() === 'shelved') {
    return 'shelved';
  }

  return null;
}

async function getAgolData(itemId, displayName) {
  if (!itemId) {
    return {};
  }

  const request = await ky(`https://opendata.arcgis.com/api/v3/datasets/${itemId}_0`);

  if (!request.ok) {
    console.log(await request.text());
    console.log(request.statusText);

    return {};
  }

  const response = await request.json();

  const { name, slug, url } = response.data.attributes;
  // https://services1.arcgis.com/99lidPhWCzftIe9K/arcgis/rest/services/WildfirePerimeters/FeatureServer/0
  // https://gis.trustlands.utah.gov/mapping/rest/services/Land_Ownership/FeatureServer/0
  const [serverHost, rest] = url.split('/rest/services/');
  const [serverServiceName, serverLayerId] = rest.split('/FeatureServer/');

  return {
    hubName: name !== displayName ? name : null,
    hubOrganization: slug.split('::')[0],
    serverHost,
    serverServiceName,
    serverLayerId,
  };
}

function toProductTypeEnum(type) {
  if (!type) {
    return type;
  }

  const ProductTypes = [
    'TABLE',
    'POINT',
    'POLYLINE',
    'POLYGON',
    'WEB_SERVICE',
    'WEB_MAP',
    'DESKTOP_APPLICATION',
    'DISCOVER_SERVICE',
    'ELEVATION_RASTER',
    'IMAGERY_RASTER',
  ];
  const parsedType = type.toUpperCase().replaceAll('-', '_');
  const found = ProductTypes.includes(parsedType);

  if (!found) {
    if (type.toLowerCase() == 'basemap') {
      return 'DISCOVER_SERVICE';
    }

    if (type.toLowerCase() == 'raster') {
      return 'ELEVATION_RASTER';
    }

    if (type.toLowerCase() == 'elevation') {
      return 'ELEVATION_RASTER';
    }

    console.log(`Invalid product type ${type}`);
  }

  return parsedType;
}

function getOpenSgidTableName(category, displayName) {
  return `${category}.${displayName.toLowerCase().replace('utah ', '').replaceAll(' ', '_')}`;
}

function formatCategory(category) {
  category = category.toLowerCase();

  if (category === 'basemap') {
    return 'base maps';
  }

  return category;
}

function getTableParts(tableName) {
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

function replaceUrl(url) {
  // data/cadastre/plss/index.html -> data/cadastre/plss
  if (!url || url === 'N/A') {
    return null;
  }

  if (url.startsWith('https://')) {
    return url;
  }

  url = url.slice(0, url.lastIndexOf('/'));

  if (url in urlMigration) {
    return urlMigration[url].replacement;
  }

  console.log(`No replacement found for ${url}`);
}

async function etlRow(row) {
  const { category, tableName } = getTableParts(row.get('SGID Data Layer'));
  const ugrcStatus = getUgrcStatus(row.get('Deprecated'), row.get('Refresh Cycle (Days)'));

  if (['shelved', 'deprecated'].includes(ugrcStatus ?? '')) {
    return null;
  }

  const agolItemTableEntry = agolItems[`${category.toUpperCase()}.${tableName}`];
  const hasValidAgolId =
    agolItemTableEntry?.AGOL_ITEM_ID.length === 32 && agolItemTableEntry?.AGOL_ITEM_ID.indexOf(' ') === -1;
  const itemId = hasValidAgolId ? agolItemTableEntry.AGOL_ITEM_ID : null;
  const agolData = await getAgolData(itemId);
  const displayName = startCase(tableName.replaceAll('_', ' '));

  return {
    id: uuid(),
    displayName,
    tableName: tableName,
    description: row.get('Description'),
    category,
    ugrcStatus: ugrcStatus,
    inActionUrl: row.get('Webapp'),
    productPagePath: replaceUrl(row.get('Website URL')),
    storageType: hasValidAgolId ? 'internal' : null,
    datasetSource: row.get('Data Source'),
    datasetContactName: row.get('Agency Contact Name'),
    datasetContactEmail: row.get('Agency Contact Email'),
    ugrcSteward: row.get('SGID Coordination (UGRC point person)'),
    refreshCycle: row.get('Refresh Cycle (Days)'),
    productType: toProductTypeEnum(agolItemTableEntry?.GEOMETRY_TYPE || row.get('Data Type')),
    itemId,
    ...agolData,
    openSGIDtableName: !!agolItemTableEntry ? getOpenSgidTableName(category, displayName) : null,
    openSGID: !!agolItemTableEntry,
    arcGisOnline: true,
  };
}

async function getAGOLItemsTable() {
  console.log('getting agol items');
  const db = knex({
    client: 'mssql',
    connection: {
      host: 'internal.agrc.utah.gov',
      userName: 'internal',
      password: 'internal',
    },
  });

  const items = await db('SGID.META.AGOLITEMS').select('*');

  return items.reduce((acc, item) => {
    // SGID.ENERGY.Something
    const key = item.TABLENAME.split('.').slice(1).join('.');

    acc[key] = item;

    return acc;
  }, {});
}

async function initializeWorksheet(schema) {
  console.log('initializing worksheet');

  await sgidIndexWorksheet.resize({ frozenColumnCount: 2, frozenRowCount: 1, rowCount: 2, columnCount: schema.length });

  await sgidIndexWorksheet.setHeaderRow(schema.map((row) => row['Field']));
}

const getLookupData = async (doc) => {
  const lookup = {
    'index.html': {
      replacement: '/',
      options: [],
    },
  };
  const sheetIds = [2, 4];
  for (const sheetId of sheetIds) {
    const sheet = doc.sheetsByIndex[sheetId];
    await sheet.loadHeaderRow(1);

    const rows = await sheet.getRows();

    let lastKey;
    for (let i = 0; i < rows.length; i++) {
      const source = rows[i].get('Current URL');
      const destination = rows[i].get('New Url');

      // https://gis.utah.gov/data/ -> data
      let key;
      const replacement = destination?.toLowerCase().trim();

      key = source
        ?.replace(/https:\/\/gis\.utah\.gov\//g, '')
        .toLowerCase()
        .trim();

      if (key?.endsWith('/')) {
        key = key.slice(0, -1);
      }

      if (key) {
        lastKey = key;
      }

      if (key && replacement) {
        if (replacement) {
          lookup[key] = {
            replacement: replacement,
            options: [],
          };
        }
      } else if (key && !replacement) {
        key = lastKey;
        lookup[key] = {
          replacement: null,
          options: [],
        };
      } else if (!key && replacement) {
        lookup[lastKey].options.push(replacement);
      }
    }
  }
  console.log(`gathered ${Object.keys(lookup).length} pages from the data pages sheet.`);
  return lookup;
};

await clear();
const schema = await getSchema();
await initializeWorksheet(schema);

const agolItems = await getAGOLItemsTable();
const urlMigration = await getLookupData(conversionSpreadsheet);

await processStewardship();

process.exit(0);
