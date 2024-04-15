import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';
import rehypeExternalLinks from 'rehype-external-links';
import externalLinkConfig from './plugins/externalLinks';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: process.env.BRANCH === 'main' ? process.env.URL : process.env.DEPLOY_URL || 'https://gis.utah.gov',
  image: {
    domains: ['gis.utah.gov'],
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
    rehypePlugins: [[rehypeExternalLinks, externalLinkConfig]],
  },
});
