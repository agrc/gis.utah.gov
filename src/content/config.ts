import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    author: z.object({
      display_name: z.string(),
    }),
    category: z.string(),
    cover_image: z.string(),
    cover_image_alt: z.string(),
    date: z.coerce.date(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = { blog };
