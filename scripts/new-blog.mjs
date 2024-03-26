import fs from 'fs';

// e.g. node scripts/new-blog.mjs "Blog Title"

const title = process.argv[2];
const date = new Date().toISOString().split('T')[0];
const slug = `${date}-${title.toLowerCase().replace(/\s+/g, '-')}`;
const filePath = `../src/content/blog/${slug}.mdx`;
const folderPath = `../src/images/pillar-blog/${slug}`;

const data = `---
title: ${title}
author: Steve Gourley
description: 100-160 character description of the blog post
date: ${new Date().toISOString()}
category: UGRC
tags:
  - website
cover_image: /src/images/pillar-blog/default-social-card.png
cover_image_alt: ugrc social card
---

import { Image } from 'astro:assets';

import myImage from \`@images/blog/${slug}/image.png\`;

My blog post content starts here.

<Image src={myImage} loading="eager" alt="A sample image" />
`;

fs.writeFileSync(filePath, data, 'utf-8');
fs.mkdirSync(folderPath);
