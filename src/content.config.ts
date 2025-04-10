import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      author: z.string(),
      co_author: z.string().optional(),
      category: z.string(),
      cover_image: image(),
      cover_image_alt: z.string(),
      date: z.coerce.date(),
      published: z.boolean().optional().default(true),
      tags: z.array(z.string()).optional(),
      title: z.string(),
    }),
});

export const collections = { blog };
