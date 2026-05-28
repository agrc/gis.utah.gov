# GitHub Copilot Instructions

This is the **UGRC (Utah Geospatial Resource Center)** website at [gis.utah.gov](https://gis.utah.gov) — a static site serving Utah's GIS community with data, documentation, and blog content.

## Tech Stack

- **Framework**: [Astro](https://astro.build) with MDX, React islands, and Tailwind CSS
- **Content**: Astro Content Collections — blog posts in `src/content/blog/`, podcast episodes in `src/pages/collaboration/knowledge/podcast/`
- **Components**: Astro components in `src/components/`, React components in `src/components/react/`
- **Styling**: Tailwind CSS utility classes; base styles in `src/styles/`
- **Testing**: Vitest (`npm test`)
- **Deployment**: Netlify

## Project Conventions

### Commits

- Follow [Conventional Commits](https://www.conventionalcommits.org/) (e.g., `feat:`, `fix:`, `chore:`, `docs:`)
- Commit messages must start with a capital letter and must **not** end with a period
- Commits should be signed

### Code Style

- TypeScript is used throughout; run `npm run ts-check` to validate types
- Run `npm run format` (Prettier) before committing
- Comment only code that genuinely needs clarification; avoid redundant comments

### Styling

- Shared UGRC color tokens for Utah Design System overrides are defined in `tailwind.config.mjs`
- Tailwind emits the `.utah-design-system` CSS variable overrides, so update the shared tokens there instead of creating separate override files
- Import `@utahdts/utah-design-system-header/css` before `src/styles/tailwind.css` so the generated overrides load after the UDS defaults

### Content

Blog posts live in `src/content/blog/` as `.md` or `.mdx` files. Each post requires:

```yaml
author: string
category: API | Collaboration | Developer | Discover | Guest Blog | SGID | SGID Updates | Surveyor | TURN | UGRC
cover_image: (image reference)
cover_image_alt: string
date: YYYY-MM-DD
title: string
published: boolean # optional, defaults to true
tags: string[] # optional
```

### Pages

- Astro pages live in `src/pages/`
- New content pages follow the pattern in `.github/collaborating.md`
- Data download pages are in `src/downloads/`

## Key Concepts

- **SGID** (State Geographic Information Database): Utah's authoritative GIS data repository — many pages and blog posts reference SGID data layers
- **TURN GPS**: Utah Reference Network GPS — a statewide high-accuracy GPS network
- The site uses the Utah Design System (UDS) header/footer via `<UtahHeader>` component

## Scripts

```bash
npm start        # local dev server at http://localhost:4321/
npm run build    # production build
npm run format   # fix formatting
npm run ts-check # TypeScript check
npm test         # run Vitest tests
```

## After Every Code Change

After making any code change, always run these three commands and validate that they do not return any errors. If they do, fix the errors before committing your code. This ensures that your code adheres to the project's formatting, type safety, and testing standards.

```bash
npm run format   # fix formatting
npm run ts-check # check for type errors
npm test         # run tests
```

## Keeping These Instructions Up to Date

When you discover something new about this codebase — a pattern, constraint, convention, or useful context — that would help future interactions, propose an update to this file (`.github/copilot-instructions.md`) as part of your response.
