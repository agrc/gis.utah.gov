import { appendFileSync, readdirSync, readFileSync, writeFileSync } from 'fs';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);
const regex = /{%\s?link _posts\/(.*)\.md\s?%}/gm;
const empty = '';

for (const filename of filenames) {
  let file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');

  let matches;
  let changed = false;

  while ((matches = regex.exec(file)) !== null) {
    changed = true;

    console.log(`${filename}: ${matches[0]}`);

    appendFileSync('./blog-migration.log', `${filename} : ${matches[0]} : /blog/${matches[1]}\n`);

    file = file.replace(matches[0], `/blog/${matches[1]}`);
  }

  if (changed) {
    writeFileSync(`${blogPostFolder}/${filename}`, file);
  }
}
