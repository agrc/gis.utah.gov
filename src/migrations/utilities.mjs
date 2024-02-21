import { readdirSync, readFileSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { stringify } from 'yaml';

export function updateBlogPosts(update) {
  const blogPostFolder = '../content/blog';
  const filenames = readdirSync(blogPostFolder);

  for (const filename of filenames) {
    // console.log(`Processing ${filename}`);
    const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
    const { data: frontMatter, content } = matter(file);

    const updates = update(frontMatter, content);

    const newFileContent = `---\n${stringify(updates.frontMatter)}---\n${updates.content}`;

    writeFileSync(`${blogPostFolder}/${filename}`, newFileContent);
  }
}
