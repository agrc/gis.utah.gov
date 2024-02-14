import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import metaTags from 'astro-meta-tags';
import { defineConfig } from 'astro/config';
import { execSync } from 'child_process';
import rehypeExternalLinks from 'rehype-external-links';
import externalLinkConfig from './plugins/externalLinks';

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
  markdown: {
    rehypePlugins: [[rehypeExternalLinks, externalLinkConfig]],
  },
});
