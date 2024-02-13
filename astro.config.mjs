import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';

import react from '@astrojs/react';
import metaTags from 'astro-meta-tags';

// https://astro.build/config
export default defineConfig({
  site: 'https://gis.utah.gov',
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
        'astro:build:done': ({ logger }) => {
          execSync('npx pagefind --site dist', {
            stdio: [process.stdin, process.stdout, process.stderr],
          });
        },
      },
    },
    metaTags(),
  ],
});
