import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
	loader: glob({
		base: "./src/content/blog",
		pattern: "**/*.{md,mdx}",
		generateId: ({ data }) => `${data.lang}/${data.slug}`,
	}),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		publishDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		lang: z.enum(["es", "en"]),
		slug: z.string(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		translationKey: z.string().optional(),
	}),
});

export const collections = { blog };
