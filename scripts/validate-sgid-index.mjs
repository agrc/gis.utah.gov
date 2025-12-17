import jsonToMarkdown from 'json-to-markdown-table';
import ky from 'ky';
import ProgressBar from 'progress';
import * as tsImport from 'ts-import';
import { v4 as uuid } from 'uuid';
import {
  buildDuplicateIndex,
  getFieldName,
  getSheet,
  isLive,
  isOurs,
  recordError,
  setFieldNames,
  shouldBeInAgol,
  slugify,
  toBoolean,
  trimFields,
  validateOpenDataUrl,
  validateOpenSgidTableName,
  validateUrl,
} from './utilities.mjs';

const downloadMetadata = await tsImport.load('../src/data/downloadMetadata.ts');

const ourWebSite = 'https://gis.utah.gov';
let duplicateReverseIndex = new Map();
const errors = [];

const worksheet = await getSheet();

setFieldNames({
  displayName: 'displayName',
  hubName: 'hubName',
  id: 'id',
  inActionUrl: 'inActionUrl',
  itemId: 'itemId',
  openSgid: 'openSgid',
  openSgidTableName: 'openSgidTableName',
  productPage: 'productPage',
  refreshCycle: 'refreshCycle',
  serverLayerId: 'serverLayerId',
  indexStatus: 'indexStatus',
  hostedBy: 'hostedBy',
  correctedSlug: 'correctedSlug',
  hubOrganization: 'hubOrganization',
  serverHost: 'serverHost',
  serverServiceName: 'serverServiceName',
  hubName: 'hubName',
  arcGisOnline: 'arcGisOnline',
});

async function createIdGuid(row) {
  const cellValue = row.get(getFieldName('id'));

  if (!cellValue) {
    console.log(`created item id for ${row.get(getFieldName('displayName'))}`);
    row.set(getFieldName('id'), uuid());

    return true;
  }
}

async function validateOpenSgid(row) {
  if (!toBoolean(row.get(getFieldName('openSgid')))) {
    return;
  }

  const cellValue = row.get(getFieldName('openSgidTableName'));
  if (!cellValue) {
    recordError(errors, 'openSgidTableName is empty', row);

    return;
  }

  const [schema, tableName] = cellValue.split('.');
  const result = await validateOpenSgidTableName(tableName, schema);

  if (!result.valid) {
    recordError(errors, result.message, row);
  }
}

async function validateProductPage(row) {
  const cellValue = row.get(getFieldName('productPage'));

  // productPage is optional
  if (!cellValue || !isLive(row, true)) {
    return;
  }

  const url = cellValue.startsWith('/') ? `${ourWebSite}${cellValue}` : cellValue;

  let result = await validateUrl(url);

  if (result.valid && /\/datasets\//.test(url)) {
    result = await validateOpenDataUrl(url);
  }

  if (!result.valid) {
    recordError(errors, `productPage: ${result.message}`, row);
  }
}

async function validateInActionUrl(row) {
  const url = row.get(getFieldName('inActionUrl'));

  // inActionUrl is optional
  if (!url || !isLive(row, true)) {
    return;
  }

  let result = await validateUrl(url);

  if (result.valid && /\/datasets\//.test(url)) {
    result = await validateOpenDataUrl(url);
  }

  if (!result.valid) {
    recordError(errors, `inActionUrl: ${result.message}`, row);
  }
}

async function validateItemIdAndCreateHubMetadata(row) {
  const cellValue = row.get(getFieldName('itemId'));
  let layerId = row.get(getFieldName('serverLayerId'));

  if (!layerId) {
    layerId = 0;
  }

  // itemId is sometimes optional
  if (!cellValue) {
    // TODO: check for deprecated and openSgid/arcGisOnline field values

    if (isOurs(row) && isLive(row, true) && shouldBeInAgol(row)) {
      recordError(errors, 'Data is live and itemId is empty', row);

      return;
    }

    return;
  }

  if (cellValue.length !== 32 || cellValue.indexOf(' ') !== -1) {
    recordError(errors, 'itemId is not a valid AGOL item id', row);

    return;
  }

  let hubData;
  let serviceParts;
  let changed = false;

  try {
    hubData = await ky(`https://opendata.arcgis.com/api/v3/datasets/${cellValue}_${layerId}`).json();
    serviceParts = hubData.data.attributes.url.split('/rest/services/');
  } catch (error) {
    try {
      // maybe this is something other than a feature service such as a WMTS base map service
      hubData = await ky(`https://opendata.arcgis.com/api/v3/datasets/${cellValue}`).json();
    } catch (error) {
      recordError(errors, `itemId hub request error: ${error.message}`, row);

      return;
    }
  }

  const orgLookup = {
    'Utah DNR Online Maps': 'utahDNR',
    'Utah Automated Geographic Reference Center (AGRC)': 'utah',
    'Wasatch Front Regional Council': 'wfrc',
    'UPlan Map Center': 'uplan',
    'Utah Department of Environmental Quality': 'utahdeq',
    'Utah SHPO': 'UtahSHPO',
  };

  const fullSlug = hubData.data.attributes.slug || '';
  const slugParts = fullSlug.split('::');
  const org = slugParts.length > 1 ? slugParts[0] : undefined;
  let slug = slugParts.length > 1 ? slugParts[1] : slugParts[0] || '';

  const correctSlug = slugify(hubData.data.attributes.name);
  if (slug !== correctSlug) {
    if (isOurs(row)) {
      recordError(
        errors,
        `Hub slug "${slug}" does not match "${correctSlug}". ` +
          `We own this item, temporarily rename it in ArcGIS Hub. Then change it back to drop the suffix.`,
        row,
      );

      // set to empty string so the field is not updated
      slug = '';
    }
  } else {
    // set to empty string so the field is not updated
    slug = '';
  }

  const orgName = org || orgLookup[hubData.data.attributes.organization];

  if (!orgName) {
    recordError(
      errors,
      `No hubOrganization could be found! slug: "${slug}" organization: "${hubData.data.attributes.organization}"`,
      row,
    );
  }

  const newData = {
    hubName: hubData.data.attributes.name.replace(/[()]/g, ''),
    hubOrganization: orgName,
    serverHost: serviceParts && serviceParts[0],
    serverServiceName: serviceParts && serviceParts[1].split(/\/(FeatureServer|MapServer)\//)[0],
    serverLayerId: serviceParts && layerId,
    correctedSlug: slug,
  };

  for (const field in newData) {
    const current = row.get(getFieldName(field));
    const updated = newData[field];

    // If updated is undefined we don't want to treat that as an intentional update
    if (updated === undefined) {
      continue;
    }

    const normalize = (v) => (v === undefined || v === null ? '' : v.toString());

    if (normalize(current) !== normalize(updated)) {
      console.log(`${field} update for in ${row.get('displayName')}. changing "${current}" to "${updated}"`);

      row.set(field, updated);
      changed = true;
    }
  }

  return changed;
}

async function validateUniqueness(row) {
  const entries = duplicateReverseIndex.get(row);
  if (!entries) {
    return;
  }

  const msgs = entries.map(({ field, value }) => `${field}: "${value}"`);
  recordError(errors, `duplicates: ${msgs.join(', ')}`, row);
}

async function validateDownloadMetadata(row) {
  const name = row.get(getFieldName('hubName'));
  const metadata = downloadMetadata.dataPages[name];

  if (!metadata || metadata.featureServiceId === undefined) {
    return;
  }

  const metadataChecks = [
    // sgid index field, metadata field
    ['itemId', 'itemId'],
    ['hubName', 'name'],
    ['serverServiceName', 'featureServiceId'],
    ['serverLayerId', 'layerId'],
  ];

  if (row.get(getFieldName('openSgid')).toLowerCase() === 'true') {
    metadataChecks.push(['openSgidTableName', 'openSgid']);
  }

  for (const [sgidIndexField, metadataField] of metadataChecks) {
    const sgidIndexValue = row.get(sgidIndexField)?.toString();
    const metadataValue = metadata[metadataField]?.toString();

    if (sgidIndexValue !== metadataValue) {
      // depending how this field was set it may be an empty string or undefined
      if (sgidIndexField === 'openSgidTableName' && sgidIndexValue === '' && metadataValue === undefined) {
        continue;
      }

      recordError(
        errors,
        `downloadMetadata(${name}): "Website download and SGID Index mismatch for ${metadataField}" and "${sgidIndexField}". ${metadataValue} != ${sgidIndexValue}`,
        row,
      );
    }
  }
}

async function validateProductPageOrItemId(row) {
  if (!row.get(getFieldName('productPage')) && !row.get(getFieldName('itemId'))) {
    recordError(errors, `No "${getFieldName('productPage')}" or "${getFieldName('itemId')}"`, row);
  }
}

const checks = [
  // these functions must return a promise
  createIdGuid,
  validateItemIdAndCreateHubMetadata,
  validateUniqueness,
  validateProductPageOrItemId,
  validateProductPage,
  validateInActionUrl,
  validateDownloadMetadata,
  validateOpenSgid,
];

async function main() {
  const rows = await worksheet.getRows();
  duplicateReverseIndex = buildDuplicateIndex(rows);

  // useful for debugging specific rows
  let testId;
  try {
    testId = process.argv[2];
  } catch (error) {
    // ignore
  }

  let updatedRowsCount = 0;
  console.log(`checking ${rows.length} rows`);
  const progressBar = new ProgressBar(':bar :percent ETA: :etas ', { total: rows.length });
  const skipStatuses = ['removed', 'draft'];
  for (const row of rows) {
    progressBar.tick();

    if (testId && row.get(getFieldName('id')) !== testId) {
      continue;
    }

    if (skipStatuses.includes(row.get(getFieldName('indexStatus'))?.toLowerCase())) {
      continue;
    }

    let changed;
    try {
      changed = trimFields(row); // we want trim to run first

      const checksChanged = (await Promise.all(checks.map((check) => check(row)))).some((result) => result);

      changed = changed || checksChanged;
    } catch (error) {
      recordError(errors, `message: ${error.message} stack: ${error.stack.replaceAll('\n', '<br/>')}`, row);
    }

    if (changed) {
      try {
        await row.save();
        updatedRowsCount++;
      } catch (error) {
        recordError(errors, `save error: ${error.message}`, row);
      }
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
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('validate-sgid-index.mjs')) {
  main()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error(err);
      process.exit(1);
    });
}
