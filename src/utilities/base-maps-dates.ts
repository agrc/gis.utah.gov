import { GoogleAuth, auth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const sheetId = '1XnncmhWrIjntlaMfQnMrlcCTyl9e2i-ztbvqryQYXDc';

const scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

let client;
if (import.meta.env.PROD) {
  console.log('using ci credentials');
  client = auth.fromJSON(JSON.parse(import.meta.env.GOOGLE_PRIVATE_KEY));
  client.scopes = scopes;
} else {
  client = new GoogleAuth({
    scopes,
  });
}

const sheet = new GoogleSpreadsheet(sheetId, client);
await sheet.loadInfo();
const worksheet = sheet.sheetsByIndex[0];
await worksheet.loadCells('A1:F7');

const dates = {
  Terrain: '',
  Lite: '',
  Overlay: '',
  AddressPoints: '',
  Hillshade: '',
  Topo: '',
  UtahPLSS: '',
  StatewideParcels: '',
};
let currentRow = 0;
let currentColumn = 0;
while (currentRow < worksheet.rowCount) {
  const cell = worksheet.getCell(currentRow, currentColumn);
  if (typeof cell.value === 'string' && Object.keys(dates).includes(cell.value)) {
    dates[cell.value] = worksheet.getCell(currentRow + 1, currentColumn).formattedValue;
  }
  if (currentColumn === worksheet.columnCount - 1) {
    currentColumn = 0;
    currentRow++;
  } else {
    currentColumn++;
  }
}

export default dates;
