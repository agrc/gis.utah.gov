import { readdirSync, readFileSync, writeFileSync } from 'fs';
import { GoogleAuth } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { basename, parse } from 'path';
import prompts from 'prompts';

const regex = /{%\s?link (?<link>.*?\.(md|html))\s?%}(?<anchor>#?.*?)(?=["|\)])/gim;

const getLookupData = async () => {
  // gcloud auth login --update-adc --enable-gdrive-access
  const adcAuth = new GoogleAuth({
    scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly', 'https://www.googleapis.com/auth/drive.readonly'],
  });

  const doc = new GoogleSpreadsheet('196e8ZYoxnq-Nk6CjvIfjKi83-sZbXNazdADiKOTyJ3g', adcAuth);
  await doc.loadInfo();

  const lookup = {
    'index.html': {
      replacement: '/',
      options: [],
    },
  };
  const sheetIds = [2, 4];
  for (const sheetId of sheetIds) {
    const sheet = doc.sheetsByIndex[sheetId];
    await sheet.loadHeaderRow(1);

    const rows = await sheet.getRows();

    let lastKey;
    for (let i = 0; i < rows.length; i++) {
      const source = rows[i].get('Current URL');
      const destination = rows[i].get('New Url');

      // https://gis.utah.gov/data/ -> data
      let key;
      const replacement = destination?.toLowerCase().trim();

      key = source
        ?.replace(/https:\/\/gis\.utah\.gov\//g, '')
        .toLowerCase()
        .trim();

      if (key?.endsWith('/')) {
        key = key.slice(0, -1);
      }

      if (key) {
        lastKey = key;
      }

      if (key && replacement) {
        if (replacement) {
          lookup[key] = {
            replacement: replacement,
            options: [],
          };
        }
      } else if (key && !replacement) {
        key = lastKey;
        lookup[key] = {
          replacement: null,
          options: [],
        };
      } else if (!key && replacement) {
        lookup[lastKey].options.push(replacement);
      }
    }
  }
  console.log(`gathered ${Object.keys(lookup).length} pages from the data pages sheet.`);
  return lookup;
};

const parsePagesForLinks = async (lookup) => {
  const ignoreFolders = [
    '.astro',
    '.github',
    '.git',
    '.vscode',
    'dist',
    'downloads',
    'node_modules',
    'src/migrations',
    'src/layouts',
    'src/images',
    'src/components',
    'images',
    'opendata',
    'plugins',
    'public',
    'search',
    'components',
    'data',
    'styles',
    'utilities',
  ];
  const includeFiles = ['.md', '.html', '.astro', '.mdx'];

  const filenames = readdirSync('../../', { recursive: true });

  for (const filename of filenames) {
    const { dir, ext } = parse(filename);

    if (dir === '') {
      continue;
    }

    if (ignoreFolders.some((folder) => dir.startsWith(folder)) || !includeFiles.includes(ext)) {
      continue;
    }

    let matches;

    let file = readFileSync(`../../${filename}`, 'utf8');
    let changed = false;
    while ((matches = regex.exec(file)) !== null) {
      let link = matches.groups.link;
      let lastSlashIndex = link.lastIndexOf('/');
      if (lastSlashIndex !== -1) {
        link = link.substring(0, lastSlashIndex);
      }

      let replacement;
      if (link === '_posts') {
        replacement = `/blog/${basename(matches.groups.link, '.md')}`;
      } else if (!(link in lookup)) {
        console.error(`${link} not found in lookup`);

        continue;
      } else {
        replacement = lookup[link].replacement;
        if (lookup[link].replacement === null) {
          if (lookup[link].options.length === 0) {
            console.error(`no replacement options for ${link}`);
            continue;
          }

          const contextLength = 200;
          const response = await prompts({
            type: 'select',
            name: 'replacement',
            message: `Select a replacement for "${link}" in ${filename}. Context: \n\n${file.substring(matches.index - contextLength, matches.index + contextLength)}\n\n`,
            choices: lookup[link].options.map((option) => ({ title: option, value: option })),
          });

          if (response.replacement) {
            replacement = response.replacement;
          } else {
            console.error(`no replacement selected for ${link}`);

            continue;
          }
          replacement = lookup[link].options[0];
        }
      }

      file = file.replace(matches[0], replacement);
      changed = true;
    }

    if (changed) {
      // console.log(`writing changes to ${filename}`);
      writeFileSync(`../../${filename}`, file);
    }
  }
};

const lookup = await getLookupData();
await parsePagesForLinks(lookup);
