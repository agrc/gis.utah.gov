import { appendFileSync } from 'fs';
import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const analyticsId = '196e8ZYoxnq-Nk6CjvIfjKi83-sZbXNazdADiKOTyJ3g';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

console.log('loading analytics spreadsheet');
const mainSpreadsheet = new GoogleSpreadsheet(analyticsId, auth);
await mainSpreadsheet.loadInfo();

const worksheets = ['pillar pages', 'data pages'];

async function processWorksheet(worksheetName) {
  const worksheet = mainSpreadsheet.sheetsByTitle[worksheetName];

  for (const row of await worksheet.getRows()) {
    const currentUrl = row.get('Current URL');
    const to = row.get('New Url');

    if (!to) {
      throw new Error(`No new URL for ${currentUrl}`);
    }

    const from = currentUrl.replace('https://gis.utah.gov', '');

    const firstPadding = ' '.repeat(150 - from.length);
    const lastPadding = ' '.repeat(150 - to.length);

    if (from === to || !from) {
      continue;
    }

    appendFileSync('../../public/_redirects', `${from}${firstPadding}${to}${lastPadding}301\n`);
  }
}

for (const worksheetName of worksheets) {
  console.log(`processing ${worksheetName}`);
  await processWorksheet(worksheetName);
}

process.exit(0);
