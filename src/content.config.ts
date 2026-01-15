import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      co_author: z.string().optional(),
      category: z.enum([
        'API',
        'Collaboration',
        'Developer',
        'Discover',
        'Guest Blog',
        'SGID',
        'SGID Updates',
        'Surveyor',
        'TURN',
        'UGRC',
      ]),
      cover_image: image(),
      cover_image_alt: z.string(),
      date: z.coerce.date(),
      published: z.boolean().optional().default(true),
      tags: z.array(z.string()).optional(),
      title: z.string(),
    }),
});

const podcast = defineCollection({
  loader: glob({ base: './src/pages/collaboration/knowledge/podcast', pattern: '_episode-*.{md,mdx}' }),
  schema: z.object({
    episode: z.number(),
    title: z.string(),
    date: z.coerce.date(),
    audio: z.string(),
    description: z.string(),
    hosts: z.array(z.string()).optional(),
    guests: z.array(z.string()).optional(),
    published: z.boolean().optional().default(true),
  }),
});

export const collections = { blog, podcast };
