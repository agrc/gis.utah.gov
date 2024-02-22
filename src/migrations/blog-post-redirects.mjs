import { appendFileSync, readdirSync } from 'fs';
import { basename } from 'path';

const blogPostFolder = '../content/blog';
const filePaths = readdirSync(blogPostFolder);

for (const filePath of filePaths) {
  const filename = basename(filePath).split('.')[0];
  // e.g. 2015-11-30-a-very-important-blog-post
  const nameWithoutDate = filename.split('-').slice(3).join('-');

  console.log(filename, nameWithoutDate);

  const from = `/${nameWithoutDate}/`;
  const to = `/blog/${filename}/`;

  const firstPadding = ' '.repeat(150 - from.length);
  const lastPadding = ' '.repeat(150 - to.length);

  appendFileSync('../../public/_redirects', `${from}${firstPadding}${to}${lastPadding}301\n`);

  // break;
}

process.exit(0);
