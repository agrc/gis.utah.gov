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
    // categories: z.array(z.string()).optional(),
  }),
});

const sgid = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    secondaryCategory: z.string().optional(),
    stewards: z.array(z.string()).optional(),
    application: z.string().url().optional(),
    lastUpdate: z.string(),
    type: z.string().optional(),
    hub: z.object({}).optional(),
    downloads: z.array(z.object({})).optional()
  })
});

export const collections = { blog, sgid };
