import { GoogleAuth, auth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import jsonToMarkdown from 'json-to-markdown-table';
import ky from 'ky';
import ProgressBar from 'progress';
import * as tsImport from 'ts-import';
import { v4 as uuid } from 'uuid';
import { validateOpenDataUrl, validateOpenSgidTableName, validateUrl } from './utilities.mjs';

const downloadMetadata = await tsImport.load('../data/downloadMetadata.ts');

const spreadsheetId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';
const ourWebSite = 'https://gis-utah.netlify.app';

const scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];
let client;
if (process.env.GITHUB_ACTIONS) {
  console.log('using ci credentials');
  client = auth.fromJSON(JSON.parse(process.env.GOOGLE_PRIVATE_KEY));
  client.scopes = scopes;
} else {
  client = new GoogleAuth({
    scopes,
  });
}

console.log('loading spreadsheet');
const spreadsheet = new GoogleSpreadsheet(spreadsheetId, client);
await spreadsheet.loadInfo();
const worksheet = spreadsheet.sheetsByTitle['SGID Index'];

const fieldNames = {
  displayName: 'displayName',
  hubName: 'hubName',
  id: 'id',
  itemId: 'itemId',
  openSgid: 'openSgid',
  openSgidTableName: 'openSgidTableName',
  productPage: 'productPage',
  serverLayerId: 'serverLayerId',
  ugrcStatus: 'ugrcStatus',
};

function getFieldName(name) {
  const fieldName = fieldNames[name];

  if (!fieldName) {
    throw new Error(`field name "${name}" not found`);
  }

  return fieldName;
}

const errors = [];
function recordError(message, row) {
  errors.push({
    displayName: row.get(getFieldName('displayName')),
    id: row.get(getFieldName('id')),
    Error: message,
  });
}

function toBoolean(value) {
  return value === 'TRUE';
}

async function openSGIDTableName(row) {
  if (!toBoolean(row.get(getFieldName('openSgid')))) {
    return;
  }

  const cellValue = row.get(getFieldName('openSgidTableName'));
  if (!cellValue) {
    recordError('openSgidTableName is empty', row);
    return;
  }

  const [schema, tableName] = cellValue.split('.');
  const result = await validateOpenSgidTableName(tableName, schema);

  if (!result.valid) {
    recordError(result.message, row);
  }
}

function trimFields(row) {
  let changed = false;

  for (const field in fieldNames) {
    const cellValue = row.get(getFieldName(field));
    if (cellValue && cellValue.trim() !== cellValue) {
      row.set(getFieldName(field), cellValue.trim());
      changed = true;
    }
  }

  return changed;
}

async function productPage(row) {
  const cellValue = row.get(getFieldName('productPage'));

  if (!cellValue) {
    // productPage is not a required field
    return;
  }

  const url = cellValue.startsWith('/') ? `${ourWebSite}${cellValue}` : cellValue;

  let result = await validateUrl(url);

  if (result.valid && /\/datasets\//.test(url)) {
    result = await validateOpenDataUrl(url);
  }

  if (!result.valid) {
    recordError(`productPage: ${result.message}`, row);
  }
}

async function idGuid(row) {
  const cellValue = row.get(getFieldName('id'));

  if (!cellValue) {
    row.set('id', uuid());

    return true;
  }
}

async function itemId(row) {
  const cellValue = row.get(getFieldName('itemId'));
  let layerId = row.get(getFieldName('serverLayerId'));
  if (!layerId) {
    layerId = 0;
  }

  if (!cellValue) {
    // TODO: internal datasets _should_ have an itemId
    // also, check for deprecated and openSgid/arcGisOnline field values
    // itemId is not a required field
    return;
  }

  if (cellValue.length !== 32 || cellValue.indexOf(' ') !== -1) {
    recordError('itemId is not a valid AGOL item id', row);
    return;
  }

  let hubData;
  try {
    hubData = await ky(`https://opendata.arcgis.com/api/v3/datasets/${cellValue}_${layerId}`).json();
  } catch (error) {
    recordError(`itemId hub request error: ${error.message}`, row);
    return;
  }
  const serviceParts = hubData.data.attributes.url.split('/rest/services/');

  const newData = {
    hubName: hubData.data.attributes.name,
    hubOrganization: hubData.data.attributes.slug.split('::')[0],
    serverHost: serviceParts[0],
    serverServiceName: serviceParts[1].split(/\/(FeatureServer|MapServer)\//)[0],
    serverLayerId: layerId,
  };

  let changed = false;
  for (const field in newData) {
    if (row.get(field) !== newData[field]) {
      row.set(field, newData[field]);
      changed = true;
    }
  }

  return changed;
}

async function duplicates(row) {
  for (const field in duplicateLookups) {
    const value = row.get(field);
    if (!value) {
      continue;
    }

    if (duplicateLookups[field][value]?.length > 1) {
      recordError(`duplicate ${field}: "${value}" found`, row);
    }
  }
}

async function downloadMetadataCheck(row) {
  const name = row.get(getFieldName('hubName'));
  const metadata = downloadMetadata.dataPages[name];

  if (!metadata || metadata.featureServiceId === null) {
    return;
  }

  const metadataChecks = [
    // sgid index field, metadata field
    ['itemId', 'itemId'],
    ['hubName', 'name'],
    ['serverServiceName', 'featureServiceId'],
    ['openSgidTableName', 'openSgid'],
    ['serverLayerId', 'layerId'],
  ];

  for (const [sgidIndexField, metadataField] of metadataChecks) {
    const sgidIndexValue = row.get(sgidIndexField).toString();
    const metadataValue = metadata[metadataField].toString();

    if (sgidIndexValue !== metadataValue) {
      recordError(
        `downloadMetadata(${name}): "${metadataField}" does not match SGID Index column "${sgidIndexField}"`,
        row,
      );
    }
  }
}

const duplicateLookups = {
  openSgidTableName: {},
  itemId: {},
  id: {},
  displayName: {},
};
function buildDuplicateLookups(rows) {
  console.log('building duplicate lookups');

  for (const field in duplicateLookups) {
    for (const row of rows) {
      const value = row.get(field);
      if (!value) {
        continue;
      }

      if (duplicateLookups[field][value]) {
        duplicateLookups[field][value].push(row);
      } else {
        duplicateLookups[field][value] = [row];
      }
    }
  }
}

const checks = [
  // these functions must return a promise
  openSGIDTableName,
  productPage,
  idGuid,
  itemId,
  duplicates,
  downloadMetadataCheck,
];

const rows = await worksheet.getRows();
buildDuplicateLookups(rows);

let updatedRowsCount = 0;
console.log(`checking ${rows.length} rows`);
const progressBar = new ProgressBar(':bar :percent ETA: :etas ', { total: rows.length });
const skipStatuses = ['deprecated', 'shelved'];
for (const row of rows) {
  progressBar.tick();

  if (skipStatuses.includes(row.get(getFieldName('ugrcStatus'))?.toLowerCase())) {
    continue;
  }

  let changed;
  try {
    changed = trimFields(row); // we want trim to run first

    const checksChanged = (await Promise.all(checks.map((check) => check(row)))).some((result) => result);

    changed = changed || checksChanged;
  } catch (error) {
    recordError(error.message, row);
  }

  if (changed) {
    await row.save();
    updatedRowsCount++;
  }
}

if (errors.length > 0) {
  errors.sort((a, b) => a.displayName.localeCompare(b.displayName));
  console.error(jsonToMarkdown(errors, ['displayName', 'id', 'Error']));
  console.log(`\ntotal errors: ${errors.length}`);
  console.log(`updated ${updatedRowsCount} rows`);
  process.exit(1);
}

console.log('All rows validated successfully');
console.log(`updated ${updatedRowsCount} rows`);
process.exit(0);
