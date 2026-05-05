import { access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import axiosRetry from 'axios-retry';
import * as changeCase from 'change-case';
import { GoogleAuth, auth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import knex from 'knex';
import ky from 'ky';
import random from 'lodash/random.js';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sitePageExtensions = ['.astro', '.md', '.mdx'];

export async function validateUrl(url) {
  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return {
      valid: false,
      message: `invalid url: ${error.message}`,
    };
  }

  let response;
  try {
    response = await ky(url, {
      throwHttpErrors: false,
      redirect: 'manual',
      timeout: 15000,
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36',
      },
    });
  } catch (error) {
    return {
      valid: false,
      message: `failed request with error: ${error.message}`,
    };
  }

  if (!response.ok) {
    if ([301, 302].includes(response.status)) {
      let redirect = response.headers.get('location');
      if (redirect.startsWith('/')) {
        redirect = new URL(redirect, url).href;
      }

      return {
        redirect: `${redirect}${parsedUrl.hash}${parsedUrl.search}`,
        ...(await validateUrl(`${redirect}`)),
      };
    }

    return {
      valid: false,
      message: `failed request with status: ${response.statusText} (${response.status})`,
    };
  }

  return {
    valid: true,
  };
}

export async function hasLocalProductPage(url, root = repoRoot) {
  let parsedUrl;

  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return false;
  }

  if (parsedUrl.hostname !== 'gis.utah.gov' || !parsedUrl.pathname.startsWith('/products/')) {
    return false;
  }

  const trimmedPath = parsedUrl.pathname.replace(/\/$/, '');
  const basePath = path.join(root, 'src/pages', trimmedPath);
  const candidates = [
    ...sitePageExtensions.map((extension) => `${basePath}${extension}`),
    ...sitePageExtensions.map((extension) => path.join(basePath, `index${extension}`)),
  ];

  for (const candidate of candidates) {
    try {
      await access(candidate);

      return true;
    } catch (error) {
      // ignore missing candidates
    }
  }

  return false;
}

async function requestJson(url, options) {
  return ky(url, options).json();
}

function normalizeHubMetadata(data, source = 'hub') {
  return {
    source,
    attributes: data?.data?.attributes ?? {},
  };
}

export async function getHubDatasetMetadata(itemId, layerId = 0, jsonRequest = requestJson) {
  const requestOptions = {
    retry: {
      limit: 10,
      retryOnTimeout: true,
    },
    timeout: 60000,
  };

  try {
    const hubData = await jsonRequest(`https://opendata.arcgis.com/api/v3/datasets/${itemId}_${layerId}`, requestOptions);

    return normalizeHubMetadata(hubData);
  } catch (layerError) {
    try {
      const hubData = await jsonRequest(`https://opendata.arcgis.com/api/v3/datasets/${itemId}`, requestOptions);

      return normalizeHubMetadata(hubData);
    } catch (datasetError) {
      const agolItem = await jsonRequest(`https://www.arcgis.com/sharing/rest/content/items/${itemId}`, {
        ...requestOptions,
        searchParams: { f: 'json' },
      });

      if (agolItem?.error) {
        throw new Error(
          `ArcGIS item lookup failed after dataset lookup failed: ${datasetError.message}. ` +
            `ArcGIS item error: ${agolItem.error.message} (${agolItem.error.code})`,
        );
      }

      return normalizeHubMetadata(
        {
          data: {
            attributes: {
              name: agolItem.title,
              url: agolItem.url,
            },
          },
        },
        'agol',
      );
    }
  }
}

let dbClient;
export async function validateOpenSgidTableName(table, schema) {
  if (!dbClient) {
    dbClient = knex({
      client: 'postgres',
      connection: {
        host: 'opensgid.ugrc.utah.gov',
        user: 'agrc',
        password: 'agrc',
        port: 5432,
        database: 'opensgid',
      },
    });
  }

  const errors = [];

  const tableResult = await dbClient.raw(`SELECT 1 FROM information_schema.tables WHERE table_name = '${table}'`);
  const tableFound = tableResult.rows.length === 1;
  if (!tableFound) {
    errors.push(`"${schema}.${table}" Open SGID table not found`);
  }

  const schemaResult = await dbClient.raw(`SELECT 1 FROM information_schema.schemata WHERE schema_name = '${schema}'`);
  const schemaFound = schemaResult.rows.length === 1;
  if (!schemaFound) {
    errors.push(`"${schema}.${table}" Open SGID schema not found`);
  }

  if (errors.length > 0) {
    return {
      valid: false,
      message: errors.join(','),
    };
  }

  return {
    valid: true,
  };
}

export async function closeDbClient() {
  if (dbClient) {
    try {
      await dbClient.destroy();
    } catch (e) {
      // ignore destroy errors in cleanup
    }
    dbClient = null;
  }
}

export async function validateOpenDataUrl(url) {
  const domainToOrg = {
    'data.wfrc.org': 'wfrc',
    'opendata.gis.utah.gov': 'utah',
    'data-uplan.opendata.arcgis.com': 'uplan',
    'dwr-data-utahdnr.hub.arcgis.com': 'utahDNR',
  };

  const match = /https:\/\/.*?\/datasets\/((?<org>.*)::)?(?<slug>.*?)(\/|$)/.exec(url);
  const slug = match.groups.slug;
  let org = match.groups.org;

  const domain = new URL(url).hostname;
  if (!Object.keys(domainToOrg).includes(domain)) {
    throw new Error(`Unknown domain: ${domain}`);
  }

  if (!org) {
    org = domainToOrg[domain];
  }
  const openDataQuery = 'https://opendata.arcgis.com/api/v3/datasets';

  let response;
  try {
    response = await ky(openDataQuery, {
      searchParams: {
        'fields[datasets]': 'slug,boundary,extent,recordCount,searchDescription,statistics',
        'filter[slug]': `${org}::${slug}`,
      },
    }).json();
  } catch (error) {
    return {
      valid: false,
      message: `request error: ${error.message}`,
    };
  }

  if (response.data.length === 0) {
    return {
      valid: false,
      message: 'open data item not found',
    };
  }

  return {
    valid: true,
    data: response.data[0],
    message: 'valid open data url',
  };
}

export function slugify(name) {
  return changeCase.kebabCase(name.toLowerCase().replace(/'/g, ''));
}

export function getFieldName(name) {
  const fieldName = fieldNames[name];

  if (!fieldName) {
    throw new Error(`field name "${name}" not found`);
  }

  return fieldName;
}

export function recordError(errors, message, row) {
  errors.push({
    displayName: row.get(getFieldName('displayName')),
    id: row.get(getFieldName('id')),
    Error: message,
  });
}

export function toBoolean(value) {
  return value === 'TRUE';
}

let fieldNames = {};
export function setFieldNames(names) {
  fieldNames = names;
}

export function trimFields(row) {
  let changed = false;

  for (const field in fieldNames) {
    const cellValue = row.get(getFieldName(field));
    if (cellValue && cellValue.trim() !== cellValue) {
      console.log(
        `cell trim update ${field}: "${cellValue}" != "${cellValue.trim()}" in ${row.get(getFieldName('displayName'))}`,
      );
      row.set(getFieldName(field), cellValue.trim());
      changed = true;
    }
  }

  return changed;
}

export function normalizeValue(v) {
  return v === undefined || v === null ? '' : v.toString();
}

export const duplicateFieldConfig = {
  openSgidTableName: (row, getFieldName) => row.get(getFieldName('openSgidTableName')),
  itemId: (row, getFieldName) => {
    const item = row.get(getFieldName('itemId'));

    if (!item) {
      return '';
    }

    const layer = row.get(getFieldName('serverLayerId'));

    return layer !== undefined && layer !== '' ? `${item}_${layer}` : item;
  },
  id: (row, getFieldName) => row.get(getFieldName('id')),
  displayName: (row, getFieldName) => row.get(getFieldName('displayName')),
};

export function buildDuplicateIndex(rows, config = duplicateFieldConfig) {
  // Build a flat key map `field::value -> [rows]`, then create a reverse index
  // mapping each row -> [{field, value, count}]. This avoids a Map-of-Maps
  // when callers only need the reverse index.
  const keyMap = new Map();

  for (const field of Object.keys(config)) {
    const mapper = config[field];

    for (const row of rows) {
      if ((row.get(getFieldName('indexStatus')) ?? '').toLowerCase() !== 'live') {
        continue; // skip rows that are not live
      }

      const value = mapper ? mapper(row, getFieldName) : row.get(getFieldName(field));
      if (!value) {
        continue;
      }

      const key = `${field}::${value}`;
      const arr = keyMap.get(key) || [];

      arr.push(row);
      keyMap.set(key, arr);
    }
  }

  const reverseIndex = new Map();
  for (const [key, rowsArr] of keyMap.entries()) {
    if (rowsArr.length <= 1) {
      continue;
    }

    const splitAt = key.indexOf('::');
    const field = key.slice(0, splitAt);
    const value = key.slice(splitAt + 2);

    for (const r of rowsArr) {
      const list = reverseIndex.get(r) || [];
      list.push({ field, value, count: rowsArr.length });
      reverseIndex.set(r, list);
    }
  }

  return reverseIndex;
}

export function configureRetries(client) {
  axiosRetry(client, {
    retries: 7,
    retryDelay: (retryCount) => {
      const randomNumberMS = random(1000, 8000);
      return Math.min(4 ** retryCount + randomNumberMS, 20000);
    },
    retryCondition: (error) => error.response.status === 429,
  });
}

export async function getSheet(spreadsheetId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ') {
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

  configureRetries(spreadsheet.sheetsApi);
  configureRetries(spreadsheet.driveApi);

  await spreadsheet.loadInfo();

  return spreadsheet.sheetsByTitle['SGID Index'];
}

export function isOurs(row) {
  const hostedBy = row.get(getFieldName('hostedBy')) ?? '';

  return hostedBy.toLowerCase() === 'ugrc';
}

export function isLive(row, includeDraft = false) {
  const indexStatus = (row.get(getFieldName('indexStatus')) ?? '').toLowerCase();

  if (includeDraft) {
    return indexStatus === 'live' || indexStatus === 'draft';
  }

  return indexStatus === 'live';
}

export function shouldBeInAgol(row) {
  const arcgisOnline = row.get(getFieldName('arcGisOnline')) ?? '';

  return arcgisOnline.toLowerCase() === 'true';
}
