
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const docs = defineCollection({
  loader: glob({
    base: "./src/content/docs",
    pattern: "**/*.{md,mdx}",
  }),

  schema: z.object({
    title: z.string(),
    description: z.string(),
    order: z.number().default(0),
    category: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  docs,
};
