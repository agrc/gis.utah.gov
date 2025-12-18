import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { buildDuplicateIndex, duplicateFieldConfig, setFieldNames } from './utilities.mjs';

function makeRow(fields) {
  return {
    get: (k) => (k in fields ? fields[k] : undefined),
  };
}

describe('SGID duplicate lookup mappers (integration)', () => {
  // configure field names used by utilities.getFieldName
  setFieldNames({
    indexStatus: 'indexStatus',
    itemId: 'itemId',
    serverLayerId: 'serverLayerId',
    id: 'id',
    displayName: 'displayName',
    openSgidTableName: 'openSgidTableName',
  });
  it('does not flag unique composite keys as duplicates', () => {
    const rows = [
      makeRow({ itemId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', serverLayerId: '0', indexStatus: 'live' }),
      makeRow({ itemId: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', serverLayerId: '1', indexStatus: 'live' }),
    ];

    const reverse = buildDuplicateIndex(rows, duplicateFieldConfig);

    // composite keys differ, so there are no duplicates
    assert.equal(reverse.size, 0);
  });

  it('uses plain itemId when serverLayerId is empty', () => {
    const rows = [
      makeRow({ itemId: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', serverLayerId: '', indexStatus: 'live' }),
      makeRow({ itemId: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb', serverLayerId: '', indexStatus: 'live' }),
    ];

    const reverse = buildDuplicateIndex(rows, duplicateFieldConfig);

    // both rows are duplicates of the same key; reverse index contains both rows
    assert.equal(reverse.size, 2);
    for (const arr of reverse.values()) {
      assert.equal(arr.length, 1);
      assert.equal(arr[0].field, 'itemId');
      assert.equal(arr[0].count, 2);
      assert.equal(arr[0].value, 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb');
    }
  });

  it('skips non-live rows', () => {
    const rows = [
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'draft' }),
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'removed' }),
      makeRow({ itemId: 'c', serverLayerId: '0', indexStatus: 'live' }),
    ];

    const reverse = buildDuplicateIndex(rows, duplicateFieldConfig);

    // only one row is live, so no duplicates should be recorded
    assert.equal(reverse.size, 0);
  });
});
