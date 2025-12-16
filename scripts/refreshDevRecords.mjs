#!/usr/bin/env node
import fs from 'fs/promises';
import { getSheet, setFieldNames } from './utilities.mjs';

// configure field names to match the SGID Index worksheet
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
  serverServiceName: 'serverServiceName',
  serverHost: 'serverHost',
  indexStatus: 'indexStatus',
  hostedBy: 'hostedBy',
  hubOrganization: 'hubOrganization',
  correctedSlug: 'correctedSlug',
});

async function main() {
  const worksheet = await getSheet();
  const rows = await worksheet.getRows();

  // Reimplement ETL logic locally to avoid TS path-alias resolution issues
  function toProductTypeEnum(type) {
    if (!type) return null;
    const productType = type.toUpperCase().replaceAll('-', '_');

    // Map to numeric ProductType enum values from src/types/types.ts
    const map = {
      TABLE: 0,
      POINT: 1,
      POLYLINE: 2,
      POLYGON: 3,
      ALL_GEOMETRIES: 4,
      WEB_SERVICE: 5,
      WEB_MAP: 6,
      DESKTOP_APPLICATION: 7,
      DISCOVER_SERVICE: 8,
      BASEMAP: 8,
      RASTER: 9,
      ELEVATION: 9,
      IMAGERY_RASTER: 10,
      GPS_NETWORK: 11,
      DASHBOARD: 12,
    };

    return Object.prototype.hasOwnProperty.call(map, productType) ? map[productType] : null;
  }

  function etlRowLocal(row) {
    if ((row.get('indexStatus') ?? '') !== 'live') {
      return null;
    }

    try {
      return {
        id: row.get('id'),
        displayName: row.get('displayName'),
        tableName: row.get('tableName'),
        category: row.get('category'),
        indexStatus: row.get('indexStatus'),
        refreshCycle: row.get('refreshCycle'),
        source:
          row
            .get('dataSource')
            ?.split(',')
            .map((s) => s.trim())
            .filter((s) => s !== '') ?? [],
        dataType: toProductTypeEnum(row.get('productType')),
        description: row.get('description'),
        inActionUrl: row.get('inActionUrl'),
        productPage: row.get('productPage'),
        hub: {
          title: row.get('displayName'),
          itemId: row.get('itemId'),
          organization: row.get('hubOrganization'),
          hubName: row.get('hubName')?.replace(/[()]/g, ''),
          correctedSlug: row.get('correctedSlug'),
        },
        server: {
          layerId: Number(row.get('serverLayerId')),
          serviceName: row.get('serverServiceName'),
          host: row.get('serverHost'),
        },
        openSgid: row.get('openSGIDtableName') || '',
      };
    } catch (e) {
      return null;
    }
  }

  const records = rows.map((row) => etlRowLocal(row)).filter((r) => r !== null);

  const outPath = 'src/utilities/devRecords.json';
  await fs.writeFile(outPath, JSON.stringify(records, null, 2) + '\n', 'utf8');
  console.log(`wrote ${records.length} records to ${outPath}`);
}

if (import.meta.url === `file://${process.argv[1]}` || process.argv[1].endsWith('refreshDevRecords.mjs')) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
