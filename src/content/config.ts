import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    // author: z.object({
    //   display_name: z.string(),
    // }),
    // tags: z.array(z.string()).optional(),
    title: z.string(),
    // description: z.string().optional(),
    // Transform string to Date object
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    published: z.boolean().optional().default(true),
    lastUpdated: z.date().optional(),
    estimatedReadTime: z.string().optional(),
    // categories: z.array(z.string()).optional(),
  }),
});

export const collections = { blog };
