import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import knex from 'knex';

const stewardshipId = '11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ';
const schemaId = '1P7HC-Y7ptpIMoBVGeZY70v2CQA3fEz1SenbWG-SL4oQ';
const sgidIndexId = '133rAJyjnC2Tda_5VoY4QJ1gWaAGwhylFQJrdp4ORyMU';

const auth = new GoogleAuth({
  scopes: ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'],
});

console.log('loading schema spreadsheet');
const schemaSheet = new GoogleSpreadsheet(schemaId, auth);
await schemaSheet.loadInfo();

console.log('loading sgid index spreadsheet');
const sgidIndexSheet = new GoogleSpreadsheet(sgidIndexId, auth);
await sgidIndexSheet.loadInfo();

async function clear() {
  for (const sheet of sgidIndexSheet.sheetsByIndex) {
    console.log(`deleting ${sheet.title}`);
    await sheet.delete();
  }
}

async function getSchema() {
  console.log('parsing schema');
  const schemaSheet = schemaSheet.sheetsByTitle['Schema'];
  const schema = (await schemaSheet.getRows()).map((row) => row.toObject());

  return schema;
}

async function createSchema() {
  console.log('creating schema');

  throw new Error('not implemented');
}

async function processStewardship() {
  console.log('loading stewardship spreadsheet');
  const stewardshipSheet = new GoogleSpreadsheet(stewardshipId, auth);
  await stewardshipSheet.loadInfo();

  const stewardshipRows = await stewardshipSheet.sheetsByTitle['SGID Stewardship Info'].getRows();

  for (const row of stewardshipRows) {
    console.log(row.get('SGID Data Layer'));
  }
}

async function getAGOLItemsTable() {
  console.log('getting agol items');
  const db = knex({
    client: 'mssql',
    connection: {
      host: 'internal.agrc.utah.gov',
      userName: 'internal',
      password: 'internal',
    },
  });

  const items = await db('SGID.META.AGOLITEMS').select('*');

  return items.reduce((acc, item) => {
    // SGID.ENERGY.Something
    const key = item.TABLENAME.split('.').slice(1).join('.');

    acc[key] = item;

    return acc;
  }, {});
}

await clear();
const schema = await getSchema();
await createSchema();
await createWorksheets();
// const agolItems = await getAGOLItemsTable();
// await processStewardship();

process.exit(0);
