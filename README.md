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
   `pnpm install`
1. Start the website
   `pnpm start`
1. Browse to `localhost:4321`

### Search during local development

Site search is powered by [Pagefind](https://pagefind.app/), whose index is generated at the end of `astro build`. The dev server cannot produce the index on its own, so search returns a 404 in `pnpm start` until an index exists.

To enable the search modal locally:

1. Run `pnpm build` once. The post-build hook writes the index to `dist/pagefind/` and mirrors it into `public/pagefind/` (gitignored) so the dev server can serve it.
1. Run `pnpm start` as usual. The search modal now loads `/pagefind/pagefind.js` and returns results.
1. Re-run `pnpm build` whenever content changes if you need the local index refreshed.

## Technology reference

- [Astro docs](https://docs.astro.build/en/getting-started/)
- [GitHub markdown spec](https://github.github.com/gfm/)
- [tailwindcss docs](https://tailwindcss.com/docs)

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
  [link text](/pillar/level-1/page/)
  [link text](/pillar/level-1/page/#to-anchor)
  ```

- astro

  ```astro
  <a href="/pillar/level-1/page/">link text</a>
  <a href="/pillar/level-1/page/#to-anchor>link text</a>
  ```

### link to blog post

- markdown

  ```mdx
  [link text](/blog/2016-05-26-file-name/)
  [link text](/blog/2016-05-26-file-name/#to-anchor/)
  ```

- astro

  ```astro
  <a href="{/blog/2016-05-26-file-name/">link text</a>
  <a href="{/blog/2016-05-26-file-name/#to-anchor">link text</a>
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

All images should have lowercase file names with words separated by hyphens, AKA kebab case. e.g.: `my-gis-day.png`.

Illustrations can be from [storyset](https://storyset.com/cuate) using the Cuate style.

Images should be organized into their pillar folder. e.g.: `/src/images/pillar-documentation/*`.

When you create a new blog post using the issue template, a folder for images will be automatically created in `/src/images/pillar-blog/{blog-slug}/`. This folder will include a .placeholder file.

Aliases for these paths are available in the [tsconfig](./tsconfig.json) and are the suggested way to import assets. e.g.: `@images/blog/{blog-slug}` is equivalent to `/src/images/pillar-blog/{blog-slug}/`.

If you wish to change the default cover card or social sharing image for the content, you will need to update the `cover_image` property with an image having an aspect ratio of 1200x630 pixels.

In order to insert an image into the body of your content, please include these lines of code at the top:

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

You should place this line of code in the spot where you want the image to appear in the content:

- astro

```astro

  <Image src={photo} alt="text describing the image to a non sighted person" />
  ```

When editing blog posts created by the issue template, remember to delete the placeholder file after you have uploaded your images or when you decide you are not going to include images. The placeholder file should not be merged with the blog post.

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

Contacts are managed in a [typescript file](./src/data/contacts.ts). At the top of your content, please include the following line of code:

- markdown

  ```mdx
  ---
  ---

  import import Contacts from '@components/page/Contacts.astro';
  ```

- astro

  ```astro
  ---
  import import Contacts from '@components/page/Contacts.astro';
  ```

In line with the text where you want the contact to appear, include this line of code:

- markdown

  ```mdx
  ---
  ---
  <Contacts contactKey="ugrc" subject={frontmatter.title} />
  ```

- astro

  ```astro
  ---
  <Contacts contactKey="ugrc" subject={frontmatter.title} />
  ```

The contactKey should match the key found in the typescript file.

## Adding a new data page

Each dataset documented on this site has its own page under `src/pages/products/sgid/`. Pages are organized into category folders (for example `elevation`, `energy`, `society`).

### 1. Copy the template

The easiest way to start is to copy the annotated template:

`src/pages/products/sgid/example/_normal-data-page.astro`

Copy that file into the correct category folder and rename it to match your dataset, using lowercase words separated by hyphens (for example `src/pages/products/sgid/energy/coal-deposits.astro`).

> [!NOTE]
> The template filename starts with `_`, which keeps it from being published as a real page. Your new file should **not** start with `_`.

The template includes comments throughout explaining each part. The steps below highlight the most important things to update.

### 2. Fill in the page information

Near the top of the file, find the block that starts with `export const metadata`. Update each field with information about your dataset:

- **`pageTitle`** — The exact title of the dataset in ArcGIS Online / Hub (for example `Utah Coal Deposits`). This must match exactly, including capitalization, because it is used to connect download links and is checked against the SGID Index.
- **`pageDescription`** — A one- to three-sentence description that appears in dataset lists.
- **`stewards`** — The organization(s) responsible for the data (for example `['UGRC']`).
- **`type`** — The geometry type of the dataset: `ProductType.POINT`, `ProductType.POLYLINE`, `ProductType.POLYGON`, `ProductType.RASTER`, or `ProductType.TABLE`.
- **`category`** — The primary category for the dataset (for example `SgidCategory.ENERGY`). Look at the existing folders under `src/pages/products/sgid/` for available category names.
- **`secondaryCategory`** *(optional)* — A second category if the dataset belongs to two groups.

Also update the `updateHistory` list with the dates and descriptions of past updates, newest first.

### 3. Add the download information

Open `src/data/downloadMetadata.ts` and add an entry for the dataset. The entry label must exactly match the `pageTitle` you set above. Fill in:

- **`itemId`** — The unique ID of the ArcGIS Online item (visible in the item's URL on arcgis.com).
- **`featureServiceId`** — The name of the hosted feature service (visible in the [services list](https://services1.arcgis.com/99lidPhWCzftIe9K/ArcGIS/rest/services)).
- **`openSgid`** — The `schema.table_name` of the dataset in the Open SGID database (for example `energy.coal_deposits`). Leave this out if the dataset is not in the Open SGID.
- **`layerId`** — Almost always `0`. Check the feature service endpoint to confirm.

If the dataset is listed in the [SGID Index Google Sheet](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=1024261148), the `hubName` column value must match `pageTitle` exactly and the `productPage` column must point to the new page's URL path.

### 4. Write the page content

The template is divided into named sections. Replace the placeholder text in each section with real content for your dataset:

| Section | What goes here |
|---------|----------------|
| `summary` | A short intro (1–2 paragraphs) shown at the top of the page |
| `downloads` | Download links — use `HubDownloads` for Hub-hosted data or `DirectDownloads` for other links |
| `description` | Longer description, schema notes, coordinate system, contact information, etc. |
| `update-history` | Driven automatically by the `updateHistory` list you filled in above |
| `disclaimer` | A dataset-specific legal disclaimer; delete the section to use the site default |
| `more-resources` | Links to related external resources |
| `you-might-also-like` | Links to related pages on this site |

For contact information, use the `Contacts` component inside the `description` section (see `src/pages/products/sgid/elevation/500-foot-contours.astro` for an example). Contact keys are defined in `src/data/contacts.ts`.

If the dataset has an associated web application, uncomment the `application` field near the top of the file — this adds a _"See the data in action"_ button to the page.

### 5. How the page gets listed

Once the file is in the correct folder with a valid title and category, it will automatically appear in the category index the next time the site builds. No additional registration is needed.

### 6. Open a pull request

Once you have created the page file and updated `downloadMetadata.ts`, open a pull request on GitHub. Automated checks will run and flag any issues.

### SGID Index Validation

The data that powers the [SGID Index search page](https://gis.utah.gov/data/sgid-index/) comes from a [Google Sheet](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=1024261148). Fresh data is scraped from the sheet each time the website is built in Netlify.

The data is validated using a [NodeJS script](./scripts/validate-sgid-index.mjs) which is [scheduled to run nightly via GitHub Actions](.github/workflows/schedule.sgid-index-validation.yml). If there are validation errors, the script opens a new GitHub issue with a comment displaying the errors. If there is an existing issue already open, the output comment is updated. If there are no errors, the issue will be closed. The validation script can also be triggered manually by adding a new issue comment that begins with the following text: `/validate-sgid-index`.

Rows that have `indexStatus` set to `removed` or `draft` are skipped.

The validation scripts performs the following checks:

- Validates that `openSgidTableName` is a valid table name in the Open SGID database.
- Validates that `productPage` is a valid path relative to <https://gis.utah.gov/> or an external URL.
- Adds a new guid value for `id` if it is empty.
- Validates the `itemId` is a valid AGOL item and auto-populates the following fields:
  - `hubName`
  - `hubOrganization`
  - `serverHost`
  - `serverServiceName`
  - `serverLayerId`
- Checks for duplicates values between rows for the following fields:
  - `openSgidTableName`
  - `itemId`
  - `id`
  - `displayName`
- Validates that the values in the spreadsheet match the corresponding values in the [download metadata file](./src/data/downloadMetadata.ts).
- Checks that there is a value in either `productPage` or `itemId`.
- Validates that `inActionUrl` is a valid URL if it is populated.

## Attribution

This project was developed with the assistance of [GitHub Copilot](https://github.com/features/copilot).
