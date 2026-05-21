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

SGID product data pages live under `src/pages/products/sgid/<category>/`, where `<category>` is the kebab-case name of one of the `SgidCategory` enum values defined in `src/types/types.ts` (for example `energy`, `society`, `elevation`).

### 1. Create the page file

Copy the annotated template at `src/pages/products/sgid/example/_normal-data-page.astro` into the appropriate category folder and rename it using kebab-case to match the dataset (for example `src/pages/products/sgid/energy/coal.astro`).

> [!NOTE]
> Files whose names begin with `_` are excluded from the auto-generated category index, so the `_normal-data-page.astro` template is never published.

### 2. Set the `metadata` export

Every data page must export a `metadata` constant of type `IMetadata`. The `[category].astro` route reads this export to auto-populate the category index page, so it must be accurate.

```astro
---
import type { IMetadata, IPageMetadata } from '@models/types';
import { ProductType, SgidCategory } from '@models/types';

export const metadata: IMetadata = {
  pageTitle: 'Utah Coal Deposits',           // Must match the ArcGIS Online / Hub item title — this value is used as the key into downloadMetadata.ts and is cross-checked by the SGID Index validator
  pageDescription: `Areas of coal deposits in Utah as defined in 1988.`,
  stewards: ['UGRC'],                        // One or more data steward abbreviations
  type: ProductType.POLYGON,                 // ProductType enum: POINT | POLYLINE | POLYGON | RASTER | TABLE
  category: SgidCategory.ENERGY,             // Primary SgidCategory enum value
  // secondaryCategory: SgidCategory.ENVIRONMENT, // optional — appears in a second category index
};
---
```

### 3. Assemble the `page` object and render with `DataPage`

Spread `metadata` into an `IPageMetadata` object to add runtime-only fields, then pass the whole object to the `DataPage` layout:

```astro
---
import Layout from '@layouts/DataPage.astro';
import { dataPages } from '@data/downloadMetadata';

const page: IPageMetadata = {
  ...metadata,
  updateHistory: ['1988'],   // Newest entry first; index 0 is shown under the page title
  hub: {
    // Spreads the Hub item ID, feature service details, and Open SGID table name
    // from downloadMetadata.ts into the page object. The key must equal metadata.pageTitle.
    ...dataPages[metadata.pageTitle],
  },
};
---

<Layout {...page} subTitle={page.updateHistory[0]}>
  <Metadata slot="metadata" {...page} />
  …
</Layout>
```

### 4. Wire downloads in `downloadMetadata.ts`

Add an entry to `src/data/downloadMetadata.ts` whose **key exactly matches `metadata.pageTitle`** (and the Hub item title in ArcGIS Online):

```ts
'Utah Coal Deposits': {
  itemId: '<ArcGIS Online item GUID>',
  name: 'Utah Coal Deposits',
  featureServiceId: 'CoalDeposits',   // Name of the feature service at services1.arcgis.com
  openSgid: 'energy.coal_deposits',   // schema.table_name in the Open SGID (omit or set undefined if not in Open SGID)
  layerId: 0,                          // Usually 0; verify against the feature service endpoint
},
```

The SGID Index validation script checks that values in the Google Sheet match this file, so keep them in sync.

### 5. Build the page body

Use the named slots provided by `DataPage`:

| Slot | Component | Purpose |
|------|-----------|---------|
| `metadata` | `<Metadata>` | Renders the sidebar card with type, stewards, and category |
| `summary` | `<Fragment>` | 1–2 paragraph intro visible above the fold |
| `downloads` | `<Section>` + `<HubDownloads>` or `<DirectDownloads>` | Download links |
| `description` | `<Fragment>` | Extended description, schema notes, and contacts |
| `update-history` | `<UpdateHistory>` | Changelog rendered from `page.updateHistory` |
| `disclaimer` | `<Disclaimer>` | Dataset-specific legal disclaimer (omit for the default) |
| `more-resources` | `<Section>` + `<GridForMoreResources>` | Related external links |
| `you-might-also-like` | `<Section>` + `<GridForYouMightLike>` | Links to sibling pages |

For contact information, import `<Contacts>` and place it inside the `description` slot (see `src/pages/products/sgid/elevation/500-foot-contours.astro` for an example). Contact keys are defined in `src/data/contacts.ts`.

If the dataset has an associated web application, add the optional `application` property to `page` — this renders a _"See the data in action"_ button under the summary.

### 6. Category index auto-discovery

No manual registration is needed. `src/pages/products/sgid/[category].astro` uses `import.meta.glob` to scan every `.astro` file under `src/pages/products/sgid/` and groups them by `metadata.category` (and `metadata.secondaryCategory` when present). As long as `metadata` is exported correctly and the file does **not** start with `_`, it will appear automatically in the category index the next time the site is built.

### 7. Validate your changes

After adding the page and its `downloadMetadata.ts` entry, run the following to check for issues before opening a PR:

- `npm run ts-check` — verifies TypeScript types across the project
- `npm test` — runs the Vitest test suite
- `npm start` — starts the local dev server so you can preview the page at `http://localhost:4321/products/sgid/<category>/<page-slug>/`
- Confirm the new page appears on the category index at `http://localhost:4321/products/sgid/<category>/`

If the dataset is referenced in the [SGID Index Google Sheet](https://docs.google.com/spreadsheets/d/11ASS7LnxgpnD0jN4utzklREgMf1pcvYjcXcIcESHweQ/edit#gid=1024261148), ensure the `productPage` column points to the new page path. Also ensure the `hubName` value in the sheet matches `metadata.pageTitle` exactly so the nightly validation script does not flag a mismatch.

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
