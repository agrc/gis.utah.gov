import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { validateOpenDataUrl, validateOpenSgidTableName, validateUrl } from './utilities.mjs';

describe('validateUrl', () => {
  it('handles a valid url', async () => {
    const result = await validateUrl('https://www.google.com');
    assert(result.valid);
  });

  it('handles a redirected url', async () => {
    const result = await validateUrl('https://google.com');
    assert(result.valid);
    assert.equal(result.redirect, 'https://www.google.com/');
  });

  it('handles a 404 url', async () => {
    const result = await validateUrl('https://www.google.com/404');
    assert(!result.valid);
    assert.match(result.message, /404/);
  });

  it('handles a bad url', async () => {
    const result = await validateUrl('notAUrl');
    assert(!result.valid);
    assert.match(result.message, /invalid url/);
  });

  it('handles a timed out request', async () => {
    const result = await validateUrl('https://abadurl.hello');
    assert(!result.valid);
    assert.match(result.message, /failed request/);
  });
});

describe('validateOpenSgidTableName', () => {
  it('handles a valid table', async () => {
    const result = await validateOpenSgidTableName('county_boundaries', 'boundaries');
    assert(result.valid);
  });

  it('handles an invalid table', async () => {
    const result = await validateOpenSgidTableName('bad_table', 'boundaries');
    assert(!result.valid);
    assert.match(result.message, /table/);
  });

  it('handles an invalid schema', async () => {
    const result = await validateOpenSgidTableName('county_boundaries', 'schema');
    assert(!result.valid);
    assert.match(result.message, /schema/);
  });
});

describe('validateOpenDataUrl', () => {
  const tests = [
    ['https://opendata.gis.utah.gov/datasets/utah::utah-blm-monuments-and-ncas', true],
    ['https://data.wfrc.org/datasets/access-to-opportunities-work-related-taz-based/about', false],
    ['https://opendata.gis.utah.gov/datasets/utahDNR::utah-geochronology', true],
    ['https://data-uplan.opendata.arcgis.com/datasets/functional-class-alrs', false],
  ];

  for (const test of tests) {
    it(`should return ${test[1]} for ${test[0]}`, async () => {
      const result = await validateOpenDataUrl(test[0]);
      assert.equal(result.valid, test[1]);
    });
  }
});
