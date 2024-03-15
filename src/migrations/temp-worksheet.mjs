import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { validateProductPageUrl } from './utilities.mjs';

const mainId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

console.log('loading main spreadsheet');
const mainSpreadsheet = new GoogleSpreadsheet(mainId, auth);
await mainSpreadsheet.loadInfo();

const tempWorksheet = mainSpreadsheet.sheetsByTitle['Temp'];

for (const row of await tempWorksheet.getRows()) {
  const url = row.get('productPage').trim();

  console.log(`validating ${row.get('displayName')}`);
  const result = await validateProductPageUrl(url);
  let newValue = result.valid || result.message;
  if (result.redirect) {
    newValue += ` | ${result.redirect}`;
  }

  let oldValue = row.get('productPageValidation');
  if (oldValue === 'TRUE') {
    oldValue = true;
  }

  if (newValue !== oldValue) {
    row.set('productPageValidation', newValue);
    console.log(`${row.get('displayName')} | updated to: ${newValue}`);
    row.save();
  }
}
