import assert from 'assert';
import { describe, it } from 'node:test';
import { validateOpenDataUrl, validateProductPageUrl } from './utilities.mjs';

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

describe('validateProductPageUrl', () => {
  const tests = [
    ['https://google.com', true],
    ['https://abadurl.hello', false],
    ['https://gis.utah.gov/badpath', false],
    ['https://opendata.gis.utah.gov/datasets/utah::utah-blm-monuments-and-ncas', true],
    ['https://data.wfrc.org/datasets/access-to-opportunities-work-related-taz-based/about', false],
    ['https://data-uplan.opendata.arcgis.com/', true],
    ['https://data.wfrc.org/datasets/access-to-opportunities-work-related-taz-based', false],
    ['shelved', false],
    ['https://rideuta.maps.arcgis.com/apps/opsdashboard/index.html#/43fc692872714c418a83343f481c2e99', true],
  ];

  for (const test of tests) {
    it(`should return ${test[1]} for ${test[0]}`, async () => {
      const result = await validateProductPageUrl(test[0]);
      assert.equal(result.valid, test[1]);
    });
  }
});
