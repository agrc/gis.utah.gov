import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

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
    metaTags(),
  ],
});
