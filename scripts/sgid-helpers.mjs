export const duplicateLookupsConfig = {
  openSgidTableName: (row, getFieldName) =>
    row.get(getFieldName ? getFieldName('openSgidTableName') : 'openSgidTableName'),
  itemId: (row, getFieldName) => {
    const item = row.get(getFieldName ? getFieldName('itemId') : 'itemId');
    if (!item) {
      return '';
    }
    const layer = row.get(getFieldName ? getFieldName('serverLayerId') : 'serverLayerId');
    return layer !== undefined && layer !== '' ? `${item}_${layer}` : item;
  },
  id: (row, getFieldName) => row.get(getFieldName ? getFieldName('id') : 'id'),
  displayName: (row, getFieldName) => row.get(getFieldName ? getFieldName('displayName') : 'displayName'),
};

export function buildDuplicateLookups(rows, config = duplicateLookupsConfig, getFieldName) {
  const duplicateLookups = {};

  for (const field in config) {
    duplicateLookups[field] = {};
  }

  for (const field in duplicateLookups) {
    const mapper = config[field];

    for (const row of rows) {
      if ((row.get(getFieldName ? getFieldName('indexStatus') : 'indexStatus') ?? '').toLowerCase() !== 'live') {
        continue; // skip rows that are not live
      }

      const value = mapper ? mapper(row, getFieldName) : row.get(getFieldName ? getFieldName(field) : field);
      if (!value) {
        continue;
      }

      const key = value;
      if (duplicateLookups[field][key]) {
        duplicateLookups[field][key].push(row);
      } else {
        duplicateLookups[field][key] = [row];
      }
    }
  }

  return duplicateLookups;
}
