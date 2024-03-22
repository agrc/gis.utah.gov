import knex from 'knex';
import ky from 'ky';

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

let dbClient;
export async function validateOpenSgidTableName(table, schema) {
  if (!dbClient) {
    dbClient = knex({
      client: 'postgres',
      connection: {
        host: 'opensgid.agrc.utah.gov',
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
