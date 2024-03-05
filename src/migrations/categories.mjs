import { readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { stringify } from 'yaml';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);
const uncategorized = 'Uncategorized';

for (const filename of filenames) {
  // console.log(`Processing ${filename}`);
  const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
  const { data: frontMatter, content } = matter(file);

  if (!frontMatter.category && frontMatter.categories) {
    const categories = frontMatter.categories.filter((c) => c !== 'Featured');

    frontMatter.category = categories.length ? categories[0] : uncategorized;

    if (frontMatter.category === uncategorized && filename.match(/statewide-roads-data-layer/)) {
      frontMatter.category = 'SGID Blog';
    }

    if (frontMatter.category === uncategorized) {
      console.log(filename);
      console.log(`${frontMatter.categories.join(', ')} => ${frontMatter.category}`);
    }

    delete frontMatter.categories;
  } else {
    frontMatter.category = uncategorized;
  }

  const newFileContent = `---\n${stringify(frontMatter)}---\n${content}`;

  // console.log(newFileContent);

  writeFileSync(`${blogPostFolder}/${filename}`, newFileContent);
}

process.exit(0);
