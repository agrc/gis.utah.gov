/*
To test this script locally, authenticate with your Google account using the Application Default Credentials.

`gcloud auth application-default login`

Then run:

`export BASE_MAPS_DATES_USE_ADC=true && node src/utilities/base-maps-dates.ts`
*/
import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';

const sheetId = '1XnncmhWrIjntlaMfQnMrlcCTyl9e2i-ztbvqryQYXDc';
const loadedRange = 'A1:F7';
const loadedRowCount = 7;
const loadedColumnCount = 6;

const scopes = ['https://www.googleapis.com/auth/spreadsheets', 'https://www.googleapis.com/auth/drive'];

const dates = {
  Terrain: 'May 1999',
  Lite: 'Jun 1999',
  Overlay: 'Jun 1999',
  AddressPoints: 'Apr 1999',
  Hillshade: '1999',
  Topo: 'Jun 1999',
  PLSS: 'Jul 1999',
  StatewideParcels: 'Aug 1999',
  LiteBase: 'Jun 1999', // assuming that the labels service is cached at the same time
  OutdoorsBase: 'Jun 1999', // assuming that the labels service is cached at the same time
};

type BaseMapDateKey = keyof typeof dates;

const dateKeys = new Set<BaseMapDateKey>(Object.keys(dates) as BaseMapDateKey[]);

function isBaseMapDateKey(value: unknown): value is BaseMapDateKey {
  return typeof value === 'string' && dateKeys.has(value as BaseMapDateKey);
}

function createGoogleAuth() {
  if (import.meta.env?.NETLIFY) {
    console.log('using ci credentials');

    return new GoogleAuth({
      credentials: JSON.parse(import.meta.env.GOOGLE_PRIVATE_KEY),
      scopes,
    });
  }

  return new GoogleAuth({ scopes });
}

async function loadDates() {
  const client = createGoogleAuth();
  const sheet = new GoogleSpreadsheet(sheetId, client);
  await sheet.loadInfo();
  const worksheet = sheet.sheetsByIndex[0];
  await worksheet.loadCells(loadedRange);

  let currentRow = 0;
  let currentColumn = 0;
  while (currentRow < loadedRowCount) {
    const cell = worksheet.getCell(currentRow, currentColumn);
    if (isBaseMapDateKey(cell.value)) {
      dates[cell.value] = worksheet.getCell(currentRow + 1, currentColumn).formattedValue ?? '';
    }
    if (currentColumn === loadedColumnCount - 1) {
      currentColumn = 0;
      currentRow++;
    } else {
      currentColumn++;
    }
  }

  if (process.env.BASE_MAPS_DATES_USE_ADC === 'true') {
    console.log(dates);
  }
}

if (import.meta?.env?.NETLIFY || process.env.BASE_MAPS_DATES_USE_ADC === 'true') {
  await loadDates();
}

export default dates;
