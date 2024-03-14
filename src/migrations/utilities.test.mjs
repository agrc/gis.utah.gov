import assert from 'assert';
import { describe, it } from 'node:test';
import { validateOpenDataUrl } from './utilities.mjs';

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
