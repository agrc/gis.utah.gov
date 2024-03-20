import { readFileSync, readdirSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { stringify } from 'yaml';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);

for (const filename of filenames) {
  const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
  const { data: frontMatter, content } = matter(file);

  frontMatter.author = frontMatter.author.display_name;
  if (frontMatter.author.match(/.* and .*/)) {
    const authors = frontMatter.author.split(' and ');
    frontMatter.author = authors[0].trim();
    frontMatter.co_author = authors[1].trim();
  }

  const expectedProps = ['title', 'date', 'author', 'tags', 'category', 'cover_image', 'cover_image_alt'];

  if (!expectedProps.every((prop) => Object.keys(frontMatter).includes(prop))) {
    console.error(
      `Missing front matter properties in ${filename}: ${expectedProps.filter((prop) => !Object.keys(frontMatter).includes(prop)).join(', ')}`,
    );
  }

  const newFileContent = `---\n${stringify({
    title: frontMatter.title,
    published: frontMatter.published === undefined ? undefined : false,
    author: frontMatter.author,
    co_author: frontMatter.co_author,
    date: frontMatter.date,
    category: frontMatter.category,
    tags: frontMatter.tags,
    cover_image: frontMatter.cover_image,
    cover_image_alt: frontMatter.cover_image_alt,
  })}---\n${content}`;

  writeFileSync(`${blogPostFolder}/${filename}`, newFileContent);
}

process.exit(0);
