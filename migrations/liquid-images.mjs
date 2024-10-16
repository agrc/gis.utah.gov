import { appendFileSync, copyFileSync, existsSync, mkdirSync, readFileSync, readdirSync, writeFileSync } from 'fs';
import { basename, dirname, join } from 'path';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);
const regex = /{%\s?link (.*?\.(png|jpg))\s?%}/gim;
const migratedFiles = new Set();

for (const filename of filenames) {
  let file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');

  let matches;
  let changed = false;

  while ((matches = regex.exec(file)) !== null) {
    console.log(`${filename}: ${matches[0]}`);
    // find the image from the old site
    const oldPath = join('..', '..', matches[1]);
    if (!existsSync(oldPath)) {
      file = file.replace(matches[0], '/images/404.png');
      writeFileSync(`${blogPostFolder}/${filename}`, file);

      continue;
    }

    changed = true;
    const imageName = basename(matches[1]);

    // move it to the new site images folder creating a folder based on filename
    // remove file path and extension from filename using fs

    const folderName = basename(filename, '.md');
    const newPath = join('..', 'images', 'pillar-blog', folderName, imageName.toLowerCase());

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
migratedFiles.forEach((path) => appendFileSync('./log/blog-migration-deleted-images.log', path + '\n'));

process.exit(0);
