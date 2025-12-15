import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildDuplicateLookups, duplicateLookupsConfig } from './sgid-helpers.mjs';

function makeRow(fields) {
  return {
    get: (k) => (k in fields ? fields[k] : undefined),
  };
}

describe('SGID duplicate lookup mappers (integration)', () => {
  it('creates composite keys when serverLayerId exists', () => {
    const rows = [
      makeRow({ itemId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', serverLayerId: '0', indexStatus: 'live' }),
      makeRow({ itemId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', serverLayerId: '1', indexStatus: 'live' }),
    ];

    const lookups = buildDuplicateLookups(rows, duplicateLookupsConfig);

    assert.ok(lookups.itemId['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_0']);
    assert.ok(lookups.itemId['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_1']);
    assert.equal(lookups.itemId['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_0'].length, 1);
    assert.equal(lookups.itemId['aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa_1'].length, 1);
  });

  it('uses plain itemId when serverLayerId is empty', () => {
    const rows = [
      makeRow({ itemId: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', serverLayerId: '', indexStatus: 'live' }),
      makeRow({ itemId: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', serverLayerId: '', indexStatus: 'live' }),
    ];

    const lookups = buildDuplicateLookups(rows, duplicateLookupsConfig);

    assert.ok(lookups.itemId['bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb']);
    assert.equal(lookups.itemId['bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'].length, 2);
  });

  it('skips non-live rows', () => {
    const rows = [
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'draft' }),
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'removed' }),
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'live' }),
    ];

    const lookups = buildDuplicateLookups(rows, duplicateLookupsConfig);
    assert.equal(Object.keys(lookups.itemId).length, 1);
    assert.equal(lookups.itemId['c_0'].length, 1);
  });
});
