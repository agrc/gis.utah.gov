import { readFileSync } from 'fs';
import { globSync } from 'glob';
import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { parse } from 'node-html-parser';
import { v4 as uuid } from 'uuid';

const mainId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

console.log('loading main spreadsheet');
const mainSpreadsheet = new GoogleSpreadsheet(mainId, auth);
await mainSpreadsheet.loadInfo();

const tempWorksheet = mainSpreadsheet.sheetsByTitle['Temp'];

console.log('clearing temp worksheet');
await tempWorksheet.clear();

console.log('adding header');
await tempWorksheet.setHeaderRow([
  'id',
  'displayName',
  'productType',
  'datasetSource',
  'productPagePath',
  'description',
  'sourcePage',
]);

console.log('crawling category index files');
const categoryIndexFiles = globSync('../../data/*/index.html', {
  ignore: ['../../data/sgid-index/**', '../../data/sgid-blog/**'],
});

function cleanText(text) {
  return text
    .trim()
    .replaceAll('\n', ' ')
    .replaceAll(/ {2,}/g, ' ')
    .replaceAll(/For more information {%.*%}/g, '');
}

let newRows = [];
for (const filename of categoryIndexFiles) {
  console.log('parsing', filename);
  const html = readFileSync(filename, 'utf8');

  const root = parse(html);

  const table = root.querySelector('tbody');

  if (!table) {
    console.log('no table found');
    continue;
  }

  for (const row of table.querySelectorAll('tr')) {
    const cells = row.querySelectorAll('td');

    let startCell = 0;
    if (filename === '../../data/planning/index.html') {
      startCell = 1;
    }
    const productPagePath = cells[startCell].querySelector('a').getAttribute('href').trim();

    if (productPagePath.startsWith('/') || productPagePath.startsWith('{%')) {
      console.log('skipping', productPagePath);
      continue;
    }

    const displayName = cleanText(cells[startCell].text);
    const productType = cleanText(cells[startCell + 1].text);
    const datasetSource = cleanText(cells[startCell + 2].text);
    const description = cleanText(cells[startCell + 3].text);

    newRows.push({
      id: uuid(),
      displayName,
      productType,
      datasetSource,
      productPagePath,
      description,
      sourcePage: filename,
    });

    if (newRows.length === 10) {
      await tempWorksheet.addRows(newRows);
      newRows = [];
    }
  }
}

if (newRows.length > 0) {
  await tempWorksheet.addRows(newRows);
}

process.exit(0);
