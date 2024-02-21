import { readdirSync, readFileSync, writeFileSync } from 'fs';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);
const regex = /{:.+}/gm;
const empty = '';

for (const filename of filenames) {
  const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');

  const matches = [...file.matchAll(regex)];

  if (matches.length > 0) {
    console.log(`${filename}: ${matches.length}`);
    const noKramdown = file.replace(regex, empty);

    writeFileSync(`${blogPostFolder}/${filename}`, noKramdown);
  }
}
