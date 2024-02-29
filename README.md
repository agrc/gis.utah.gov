# gis.utah.gov

This is the repository for the [UGRC agency website](https://gis.utah.gov).

![Static Badge](https://img.shields.io/badge/built%20with-astro-brightgreen) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fgis.utah.gov) ![GitHub License](https://img.shields.io/github/license/agrc/gis.utah.gov)<br />
![GitHub Issues or Pull Requests](https://img.shields.io/github/issues/agrc/gis.utah.gov) ![GitHub Issues or Pull Requests](https://img.shields.io/github/issues-pr/agrc/gis.utah.gov) ![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/agrc/gis.utah.gov/main)
<br />
[![Netlify Status](https://api.netlify.com/api/v1/badges/29158e9e-9b1c-4d85-995b-a3ca444ff187/deploy-status)](https://app.netlify.com/sites/gis-utah-gov/deploys) ![W3C Validation](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fgis.utah.gov) ![Mozilla HTTP Observatory Grade](https://img.shields.io/mozilla-observatory/grade/gis.utah.gov)

Read [about our new website](https://gis.utah.gov/about-our-new-v6-website-in-ghpages).
[Contribute](https://gis.utah.gov/about/contributing/) content or typos.
License: [MIT](/LICENSE).

## Local Development

### Prerequisites

- Node.js - v18.14.1 or higher
- Text editor - We recommend VS Code
- Terminal - Astro is accessed through its command-line interface (CLI).

### Steps

1. Clone this repository
   `git clone https://github.com/agrc/gis.utah.gov.git`
1. Install the dependencies
   `npm install`
1. Start the website
   `npm start`
1. browse to `localhost:4321`

## Technology reference

- [Astro docs](https://docs.astro.build/en/getting-started/)
- [tailwindcss docs](https://tailwindcss.com/docs)
- [Post/Page Template creator](https://agrc.github.io/templater/) - Quickly bootstrap the frontmatter for a new post or page.

## Syntax conventions

```mdx
_italic_
**bold**
_**bold italic**_

- list
```

```astro
---
import BulletedList from '@components/page/BulletedList.astro';
import NumberedList from '@components/page/NumberedList.astro';
import DefinitionListItem from '@components/page/DefinitionListItem.astro';
---

<em>italic</em> or <span class="italic">italic</span>
<strong>bold</strong> or <span class="font-bold">bold</span>
<strong><em>bold and italic</em></strong> or <span class="italic font-bold">bold and italic</span>

<BulletedList>
  <li>list item</li>
</BulletedList>

<NumberedList>
  <li>list item</li>
</NumberedList>

<dl>
  <DefinitionListItem title="Word">Definition</DefinitionListItem>
</dl>
```

### link to page

- markdown

  ```mdx
  [link text](/pillar/level-1/page)
  [link text](/pillar/level-1/page#to-anchor)
  ```

- astro

  ```astro
  <a href="/pillar/level-1/page">link text</a>
  <a href="/pillar/level-1/page#to-anchor>link text</a>
  ```

### link to blog post

- markdown

  ```mdx
  [link text](/blog/2016-05-26-file-name)
  [link text](/blog/2016-05-26-file-name#to-anchor)
  ```

- astro

  ```astro
  <a href="{/blog/2016-05-26-file-name">link text</a>
  <a href="{/blog/2016-05-26-file-name#to-anchor">link text</a>
  ```

### external link

- markdown

  ```mdx
  [link text](http://external.website.location)
  [link text](http://external.website.location#to-anchor)
  ```

- astro

  ```astro
  ---
  import ExternalLink from '@components/page/ExternalLink.astro';
  ---

  <ExternalLink href="https://url.com">link text</ExternalLink>
  <ExternalLink href="https://url.com#to-anchor">link text</ExternalLink>
  ```

### image link to an image

- markdown

  ```mdx
  [![displayed image alt text](../../relative/path/to/image.jpg)](![link to alt text](/path/to/item))
  ```

### images

- markdown

  ```mdx
  ![alt text](../../relative/path/to/image.jpg)
  ```

- astro

  ```astro
  ---
  import { Image } from 'astro:assets';
  import photo from '@images/pillar/image.phg';
  ---

  <Image src={photo} alt="text describing the image to a non sighted person" />
  ```

### font matter

- `title: Title` - the title of the content
- `author.display_name: Full Name` - The author of the content
- `author.email: email@address` - The author email
- `date: 2018-02-13` - the date the content was created
- `tags:` a list of tags
- `categories: Featured|Developer|SGID Blog|GPS-surveyor|Guestblog`
- `published: true|false`

### contact information

> [!IMPORTANT]
> Please do not put email addresses directly into content.

Contacts are managed in a [typescript file](./src/data/contacts.ts).

- markdown

  ```mdx
  ---
  ---

  import import Contacts from '@components/page/Contacts.astro';

  <Contacts contactKey="ugrc" subject={frontmatter.title} />
  ```

- astro

  ```astro
  ---
  import import Contacts from '@components/page/Contacts.astro';
  ---

  <Contacts contactKey="ugrc" subject={frontmatter.title} />
  ```
