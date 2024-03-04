import { readFileSync, readdirSync, writeFileSync } from 'fs';
import matter from 'gray-matter';
import { fromMarkdown } from 'mdast-util-from-markdown';
import { mdxFromMarkdown } from 'mdast-util-mdx';
import { mdxjs } from 'micromark-extension-mdxjs';
import { find } from 'unist-util-find';
import { stringify } from 'yaml';

const blogPostFolder = '../content/blog';
const filenames = readdirSync(blogPostFolder);

for (const filename of filenames) {
  const file = readFileSync(`${blogPostFolder}/${filename}`, 'utf8');
  const { data: frontMatter, content } = matter(file);

  const fileType = filename.split('.').pop();
  const options = fileType === 'mdx' ? { extensions: [mdxjs()], mdastExtensions: [mdxFromMarkdown()] } : null;

  const parsedMarkdown = fromMarkdown(file, options);

  const imageNode = find(parsedMarkdown, (node) => {
    return node.type === 'image' && node.url.startsWith('../../images');
  });

  let coverImage = '/src/images/pillar-blog/default-social-card.png';
  let alt = 'ugrc social card';
  if (imageNode) {
    coverImage = imageNode.url.replace('../../images', '/src/images');
    alt = imageNode.alt;
  }
  frontMatter.cover_image = coverImage;
  frontMatter.cover_image_alt = alt;

  const newFileContent = `---\n${stringify(frontMatter)}---\n${content}`;

  writeFileSync(`${blogPostFolder}/${filename}`, newFileContent);
}

process.exit(0);
