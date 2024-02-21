import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    author: z.object({
      display_name: z.string(),
    }),
    // description: z.string().optional(),
    categories: z.array(z.string()).optional(),
    date: z.coerce.date(),
    estimatedReadTime: z.string().optional(),
    lastUpdated: z.date().optional(),
    published: z.boolean().optional().default(true),
    tags: z.array(z.string()).optional(),
    title: z.string(),
  }),
});

export const collections = { blog };
