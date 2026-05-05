import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getHubDatasetMetadata, hasLocalProductPage } from './utilities.mjs';

describe('hasLocalProductPage', () => {
  it('detects SGID product pages that exist in the repository', async () => {
    const result = await hasLocalProductPage('https://gis.utah.gov/products/sgid/society/blm-field-offices/');

    assert.equal(result, true);
  });

  it('returns false when the product page does not exist locally', async () => {
    const result = await hasLocalProductPage('https://gis.utah.gov/products/sgid/society/does-not-exist/');

    assert.equal(result, false);
  });
});

describe('getHubDatasetMetadata', () => {
  it('uses the dataset layer endpoint when it is available', async () => {
    const requests = [];
    const metadata = await getHubDatasetMetadata('abc123', 4, async (url) => {
      requests.push(url);

      return {
        data: {
          attributes: {
            name: 'Example dataset',
            slug: 'utah::example-dataset',
            url: 'https://services.example.com/arcgis/rest/services/Example/FeatureServer/4',
          },
        },
      };
    });

    assert.equal(metadata.source, 'hub');
    assert.equal(metadata.attributes.name, 'Example dataset');
    assert.deepEqual(requests, ['https://opendata.arcgis.com/api/v3/datasets/abc123_4']);
  });

  it('falls back to the plain dataset endpoint when the layer endpoint is missing', async () => {
    const requests = [];
    const metadata = await getHubDatasetMetadata('abc123', 4, async (url) => {
      requests.push(url);

      if (url.endsWith('_4')) {
        throw new Error('404 Not Found');
      }

      return {
        data: {
          attributes: {
            name: 'Example dataset',
            slug: 'utah::example-dataset',
            url: 'https://services.example.com/arcgis/rest/services/Example/FeatureServer/0',
          },
        },
      };
    });

    assert.equal(metadata.source, 'hub');
    assert.equal(metadata.attributes.url, 'https://services.example.com/arcgis/rest/services/Example/FeatureServer/0');
    assert.deepEqual(requests, [
      'https://opendata.arcgis.com/api/v3/datasets/abc123_4',
      'https://opendata.arcgis.com/api/v3/datasets/abc123',
    ]);
  });

  it('falls back to the ArcGIS item endpoint when open data dataset lookups fail', async () => {
    const requests = [];
    const metadata = await getHubDatasetMetadata('abc123', 0, async (url) => {
      requests.push(url);

      if (url.startsWith('https://opendata.arcgis.com/')) {
        throw new Error('404 Not Found');
      }

      return {
        title: 'Example item',
        url: 'https://services.example.com/arcgis/rest/services/Example/MapServer',
      };
    });

    assert.equal(metadata.source, 'agol');
    assert.equal(metadata.attributes.name, 'Example item');
    assert.equal(metadata.attributes.url, 'https://services.example.com/arcgis/rest/services/Example/MapServer');
    assert.deepEqual(requests, [
      'https://opendata.arcgis.com/api/v3/datasets/abc123_0',
      'https://opendata.arcgis.com/api/v3/datasets/abc123',
      'https://www.arcgis.com/sharing/rest/content/items/abc123',
    ]);
  });
});
