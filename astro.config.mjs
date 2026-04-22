import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';
import { cpSync, rmSync } from 'fs';
import rehypeExternalLinks from 'rehype-external-links';
import remarkCodeTitles from 'remark-code-titles';

import externalLinkConfig from './plugins/externalLinks';

// https://astro.build/config
export default defineConfig({
  site: process.env.BRANCH === 'main' ? process.env.URL : process.env.DEPLOY_URL || 'https://gis.utah.gov',
  image: {
    domains: ['gis.utah.gov'],
  },
  build: {
    assets: '_assets',
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    {
      name: 'pagefind',
      hooks: {
        'astro:build:done': () => {
          execSync('npx pagefind --site dist', {
            stdio: [process.stdin, process.stdout, process.stderr],
          });
          // Mirror the generated index into public/pagefind so `astro dev` can
          // serve it locally after a one-time `npm run build`. This folder is
          // gitignored; production deploys consume dist/pagefind directly.
          try {
            rmSync('public/pagefind', { recursive: true, force: true });
            cpSync('dist/pagefind', 'public/pagefind', { recursive: true });
          } catch (error) {
            console.warn('Unable to mirror pagefind index into public/pagefind:', error);
          }
        },
      },
    },
    metaTags(),
    partytown({
      config: {
        debug: true,
        forward: [
          'dataLayer.push',
          'analytics.track',
          'analytics.identify',
          'analytics.group',
          'analytics.reset',
          'analytics.user',
          'analytics.alias',
        ],
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      theme: 'github-dark-high-contrast',
    },
    rehypePlugins: [[rehypeExternalLinks, externalLinkConfig]],
    remarkPlugins: [remarkCodeTitles],
  },
});
