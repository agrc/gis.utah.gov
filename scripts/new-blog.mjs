import { Octokit } from '@octokit/rest';
import matter from 'gray-matter';
import capitalize from 'lodash.capitalize';
import fs from 'node:fs';

const defaultText = (slug) => `
{/* remove if not using images
import { Image } from 'astro:assets'; */}

{/* remove if not using an image
import myImage from '@images/blog/${slug}/image.png'; */}

My blog post content starts here.

{/* remove if not using an image
<Image src={myImage} loading="eager" alt="A sample image" /> */}
`;

export const getDataFromIssue = (body) => {
  const parts = body.split('### ');

  return {
    author: parts[1].substring(parts[1].indexOf('\n') + 1).trim(),
    title: parts[2].substring(parts[2].indexOf('\n') + 1).trim(),
    description: parts[3].substring(parts[3].indexOf('\n') + 1).trim(),
    category: parts[4].substring(parts[4].indexOf('\n') + 1).trim(),
  };
};

export const createNewBlogPost = (slug, blog, date) => {
  const frontmatter = matter.stringify(defaultText(slug), {
    title: capitalize(blog.title),
    author: blog.author,
    description: blog.description,
    date,
    category: blog.category,
    cover_image: '/src/images/pillar-blog/default-social-card.png',
    cover_image_alt: 'ugrc social card',
  });

  const filePath = `../src/content/blog/${slug}.mdx`;
  const folderPath = `../src/images/pillar-blog/${slug}`;

  fs.writeFileSync(filePath, frontmatter, 'utf-8');
  fs.mkdirSync(folderPath);
  fs.writeFileSync(
    `${folderPath}/.placeholder`,
    `The purpose of this file is to create a temporary folder place holder since git does not preserve empty folders.

1. Delete this file if there will be no blog post images since the folder has no purpose.
2. Delete this file after adding images since git will preserve the folder and this file has no purpose.

This file should not be merged into main.
`,
    'utf-8',
  );
};

if (process.env.NODE_ENV !== 'test') {
  const issueNumber = process.argv[2];

  if (!issueNumber) {
    console.error('Missing an issue number');
    process.exit(1);
  }

  const octokit = new Octokit();
  const issue = await octokit.rest.issues.get({
    owner: 'agrc',
    repo: 'gis.utah.gov',
    issue_number: issueNumber,
  });

  if (!issue.data.body.includes('<!-- bot = {"type":"blog-post"} -->')) {
    console.debug('This issue does not contain the correct metadata');
    process.exit(0);
  }

  const blog = getDataFromIssue(issue.data.body);

  const date = new Date().toISOString();
  const noTime = date.split('T')[0];

  const slug = `${noTime}-${blog.title.toLowerCase().replace(/\s+/g, '-')}`;

  createNewBlogPost(slug, blog, date);
}
