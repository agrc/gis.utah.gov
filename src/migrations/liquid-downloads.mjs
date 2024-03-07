import {
  appendFileSync,
  copyFileSync,
  existsSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  renameSync,
  writeFileSync,
} from 'fs';
import matter from 'gray-matter';
import { basename, dirname, join } from 'path';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);

const regex = /{%\s?link (downloads\/.*)\s?%}/gim;
const migratedFiles = new Set();
const convertToMdx = new Set();

for (const filename of filenames) {
  let file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
  const { data: frontMatter } = matter(file);

  let matches;
  let changed = false;

  if (frontMatter.published === false) {
    console.log('Skipping unpublished post:', filename);
    continue;
  }

  while ((matches = regex.exec(file)) !== null) {
    console.log(`${filename}: ${matches[0]}`);
    // find the image from the old site
    const oldPath = join('..', '..', matches[1].trim());

    if (!existsSync(oldPath)) {
      changed = true;

      file = file.replace(matches[0], 'deleted');

      continue;
    }

    changed = true;

    convertToMdx.add(`${blogPostFolder}/${filename}`);
    const assetName = basename(matches[1].trim());

    const folderName = basename(filename, '.md');
    const newPath = join('..', 'downloads', 'pillar-blog', folderName, assetName.toLowerCase());

    console.log(oldPath, newPath);

    mkdirSync(dirname(newPath), { recursive: true });

    if (!existsSync(newPath)) {
      copyFileSync(oldPath, newPath);
      migratedFiles.add(oldPath);
    }

    // update the file path in the markdown

    const relativeToBlogPostPath = join('..', newPath);
    file = file.replace(matches[0], relativeToBlogPostPath);
  }

  if (changed) {
    writeFileSync(`${blogPostFolder}/${filename}`, file);
  }
}

mkdirSync('./log/', { recursive: true });
migratedFiles.forEach((path) => appendFileSync('./log/blog-migration-downloads.log', path + '\n'));
convertToMdx.forEach((path) => renameSync(path, `${path}x`));

process.exit(0);
