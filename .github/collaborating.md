# UGRC staff member guide

- [Issues and Pull Requests](#issues-and-pull-requests)
- [Accepting Modifications](#accepting-modifications)
- [Technologies used in the Website](#technologies-used-in-the-website)
- [Code editing](#code-editing)
  - [Adding new pages](#adding-new-astro-pages)
    - [Create the page content](#create-the-page-content)
  - [Styling a Component](#styling-a-component)
  - [Best practices when creating a Component](#best-practices-when-creating-a-component)
    - [How a new Component should look like when freshly created](#how-a-new-component-should-look-like-when-freshly-created)
  - [Best practices for Component development in general](#best-practices-for-component-development-in-general)
- [Remarks on Technologies used](#remarks-on-technologies-used)
- [Seeking additional clarification](#seeking-additional-clarification)

This document contains information for UGRC staff regarding maintaining the code, documentation, and issues of the UGRC website.

Staff should be familiar with the guidelines for new contributors in [CONTRIBUTING.md](./CONTRIBUTING.md).

## Issues and pull requests

Courtesy should always be shown to individuals submitting issues and pull requests to the UGRC website.

Staff should feel free to take full responsibility for managing issues and pull requests they feel qualified to handle, as long as this is done while being mindful of these guidelines, the opinions of other Staff and guidance of the Website Group.

Staff may **close** any issue or pull request they believe is not relevant to the future of the UGRC project.
Where this is unclear, the issue should be left open for several days for additional discussion.
Where this does not yield input from UGRC Staff or additional evidence that the issue has relevance, then the issue may be closed.
Remember that issues can always be re-opened if necessary.

> \[!IMPORTANT]\
> We recommend staff to avoid Updating/Rebasing PRs unnecessarily, since we use [GitHub Merge Queues](https://github.blog/2023-07-12-github-merge-queue-is-generally-available/)
> to merge Pull Requests, which automatically rebases and runs CI-checks against the latest base branch.

## Accepting modifications

All UGRC code and documentation modifications should be performed via GitHub pull requests.
Only the Website Team can merge their work and should do so carefully.

All pull requests must be reviewed and accepted by another staff member with sufficient expertise who can take full responsibility for the change.

Pull Requests can only be merged after all CI Checks have passed.

In some cases, it may be necessary to summon a qualified staff member to a pull request for review by @-mention.

If you are unsure about the modification and are not prepared to take full responsibility for the change, defer to another staff member.

We recommend staff follow the guidelines on the [Contributing Guide](./CONTRIBUTING.md#before-merging) for reviewing and merging Pull Requests.

## Technologies used in the website

The UGRC Website is built upon [React][] and [Astro][], the UI Rendering Engine and the Framework that builds the Website;

The Website also uses several other Open Source libraries (not limited to) listed below:

- Styling is done with [tailwindcss][].
  - Tailwind is used as our CSS Framework and the Foundation of our Design System
- [Hero Icons](https://heroicons.com/) is an SVG Icon Library used within our Codebase
- [Radix UI][] is a collection of customizable UI components
- [Shiki][] is a Syntax Highlighter used for our Code boxes
  - The syntax highlighting is done within the processing of the Markdown files with the MDX compiler as a Rehype plugin.
- [MDX][] and Markdown are used for structuring the Content of the Website
- We use [Rehype](https://github.com/rehypejs/rehype) and [Remark](https://github.com/remarkjs/remark) to extend MDX functionality

## Code Editing

### Structure of this repository

- Astro components are defined on `/src/components/`
- React components are defined on `/src/components/react`
- Astro layouts are defined on `/src/layouts`
- The global stylesheet is declared in `/src/styles/tailwind.css`
- Public files are stored on `/public`
- Files for download are store in `/src/downloads`
  - The files are then organized by pillar
- Website content is defined within `/src/pages`
  - All content is in the Astro format.
- Website blog content is defined within `/src/content/blog`
  - All content is in Markdown or MDX.
  - The top of each Markdown file is a YAML (Frontmatter) block for page-specific information passed to various templates.
- Typescript import aliases are defined in `/tsconfig.json`
- Multi-Purpose javascript functions are defined on `/src/utilities`
- Multi-Purpose TypeScript definitions are defined on `/src/types`
- Centralized data collections are defined in  `/src/data`
- Multi-Purpose Scripts are stored within `/src/scripts`
  - Such as link validation

### Adding new Astro pages

1. Create the new page content including the `Layout`, `QuickLinks`, and `BreadCrumbs` if necessary.

#### Create the page content

At the top of the Astro file, within the Frontmatter, set the `IStandardPageMetadata`.

```astro
---
import Layout from '@layouts/FullWidth.astro';

import type { IStandardPageMetadata } from '@models/types';

import QuickLinks from '@components/page/QuickLinks.astro';
import Section from '@components/page/Section.astro';

import { Image } from 'astro:assets';

import myPhoto from '@images/about/me.svg';

const page: IStandardPageMetadata = {
  pageTitle: 'Title of the page',
  pageDescription: '110-160 characters describing the page for SEO',
  section: [{ title: 'An optional section title' }],
};
---

<Layout pageTitle={page.pageTitle}>
  <QuickLinks links={page.section} slot="quick-links" />
  <Section {...page.section[0]}>
    <Image
      slot="image"
      src={myPhoto}
      loading="eager"
      alt="A gender neutral description that will be read to non sighted people"
      class="w-full max-w-[400px] rounded-2xl"
    />
    <p>Page content</p>
  </Section>
</Layout>
```

### Translating Pages

See the [Translation Guidelines](./TRANSLATION.md) for the website translation policy.

## Creating Astro Components

The UGRC Website uses [Astro][] as a Frontend Library to develop the Website.
Astro allows us to create user interfaces with a modern take on Web Development falling back to [React][] if necessary using dynamic islands.

If you're unfamiliar with React or Web Development in general, we encourage a read before taking on complex issues and tasks as this repository is **not for educational purposes** and we expect you to have a basic understanding of the technologies used.

We also recommend getting familiar with technologies such as [Astro][], [MDX][], and [tailwindcss][].

### Styling a Component

We write all Component-styles inline. It's important to mention that we use [tailwindcss][] as a CSS Framework. Hence, margins, paddings, font sizes, font weights, colors, and other sorts of styles are all provided with Tailwind.
We recommend reading [Tailwind Docs](https://tailwindcss.com/docs/preflight) to get familiar with Tailwind's styles.
We also recommend reading [this guide for setting up Tailwind on your IDE](https://tailwindcss.com/docs/editor-setup).

> \[!NOTE]\
> Tailwind is already configured for this repository. You don't need to import anything

> \[!IMPORTANT]\
> When using IDEs such as Visual Studio Code, we recommend installing the official [tailwindcss](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) Extensions.\
> These are recommended Extensions for IntelliSense, Syntax Highlighting and Error Checking when styling your Component.

### Best practices when creating a Component

- All Astro Components should be placed within the `/src/components` folder.
- Each Component should be placed, whenever possible, within a sub-folder, which we call the "Domain" of the Component
  - The domain represents where these Components belong to or where they will be used.
  - For example, Components used within Data Pages or that are part of the structure of a Data Page should be placed within `/src/components/data`
- Each component should have its file with the name of the Component
- If the Component has "sub-components" they should follow the same philosophy as the Component itself.
  - For example, if the Component `ComponentName` has a sub-component called `SubComponentName`,
    then it should be placed within `supporting/SubComponentName`

#### How a new Component should look like when freshly created

```astro
---
type Props {
  title: string;
}

const { title } = Astro.props;
---

<div>
    <slot />
</div>

```

### Best practices for Component development in general

- Only spread props `{ ... }` on the definition of the Component (Avoid having a variable named `props`)
- When importing types, use `import type { NameOfImport } from 'module'`

## Remarks on Technologies Used

The UGRC Website is a somewhat complex application and at times non-trivial solutions have been implemented to solve certain technical challenges.
Historical decision making can be largely found on past issues, conversations on Slack and GitHub discussions. However, we also wish to highlight some of the notable development decisions that we have made here.

### Why Astro?

We've found that Astro is simply versatile, hackable, stable, community-maintained and has a great ecosystem.
The reasoning goes deeper, but as a long-term Framework it is the most suitable choice.

#### What is `/public/_redirects`?

This file is responsible for defining the rewrite rules for the Website when deployed to Netlify.
It is used for defining redirects. (Such as Internal Redirects and External ones).

Redirect operations change the original URL to a new one.

#### What is `/public/_headers`?

This file is responsible for defining a standard set of headers for Netlify to respond with on every request.

#### What are Layouts?

Layouts Wrap the content of the Astro and Markdown files.
They are responsible for adding additional styling and structure surrounding the content of the files.

Layouts are defined within the `/src/layouts` folder.
They are Astro Components that receive the data for the slots or Content, which is the transformed MDX content of the Markdown file.

#### Do we use a CSS Framework?

The UGRC Website uses Tailwind as a CSS Framework for crafting our Components and styling the Website.

[tailwindcss][] is an utility-first CSS Framework. It allows us to create a Design System that is easy to maintain and extend. It also allows us to create a consistent Design Language across the Website.

#### Why we use RadixUI?

- It is a minimalistic component library broken down in individual packages for each Component
- It already handles all WAI-ARIA and Accessibility shortcuts/bindings needed for Interactive Elements
- It allows us to focus on designing interactive Components without the effort of adding all the surrounding sugar and code needed to make the Component accessibility-friendly.

### Why MDX?

MDX is an extension on Markdown that allows us to add JSX or Astro Components within Markdown.
Besides that, MDX is also a pluggable parser built on top of `unified` which supports Rehype and Remark Plugins.
MDX is becoming the standard for parsing human-content on modern web applications.

**Some of the plugins that we use include:**

- `remark-gfm`: Allows us to bring GitHub Flavoured Markdown within MDX
- `remark-headings`: Generates Metadata for Markdown Headings
  - This allows us to build the Table of Contents for each Page, for example.
- `rehype-autolink-headings`: Allows us to add Anchor Links to Markdown Headings
- `rehype-slug`: Allows us to add IDs to Markdown Headings

### Netlify

We use Netlify as our hosting provider. It is a great platform that offers an excellent CI/CD pipeline which allows us to deploy our website with ease.

It is important to mention that there are some rules on our Netlify Deployments such as:

- Netlify Deployments are triggered for all branches in open pull requests during `push` activities.

### Why we have a `.vscode` folder

The repository defines an optimized configuration for code editing. This is optional and is not required to contribute to the project. However, the settings and extensions specified help create a uniform and more efficient developer experience. This configuration is found in the `.vscode` directory:

- `extensions.json` suggests VSCode extensions that make the editor more compatible with the code. For example, a Tailwind extension creates auto-complete intellisense for tailwind styles within our components. Eslint, prettier, and editorconfig extensions read their respective config files and automatically format or lint code as written. This helps save CI feedback loops when a contribution does not meet our standards.
- `settings.json` contains some common sense defaults that aide development and enforce consistency across the codebase. For example, we want files formatted on save and we want prettier to be used as the formatter. Without these settings, new contributors may have different authoring experiences when contributing, leading to inconsistent code and CI failures. We also disable VSCode's default CSS parser so PostCSS and Tailwind syntax are respected.

Defining a `.vscode` configuration like this also aides browser-only development using [GitHub's Codespaces feature](https://github.com/features/codespaces). The web-based GUI will read these same configuration files and setup the remote development environment the same way every time.

## Seeking additional clarification

If you're unfamiliar or curious about something, we recommend opening a Discussion on this GitHub Repository.

[Astro]: https://astro.build/
[MDX]: https://mdxjs.com/
[React]: https://react.dev/
[Shiki]: https://github.com/shikijs/shiki
[tailwindcss]: https://tailwindcss.com/
[Radix UI]: https://www.radix-ui.com/
