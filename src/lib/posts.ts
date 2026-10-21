import { getCollection, type CollectionEntry } from "astro:content";

import type { Lang } from "../data/site";

export type BlogPost = CollectionEntry<"blog">;

export async function getPosts(lang?: Lang, limit?: number) {
	const posts = await getCollection("blog", ({ data }) => {
		return !data.draft && (lang ? data.lang === lang : true);
	});

	const sorted = posts.sort((a, b) => {
		return b.data.publishDate.getTime() - a.data.publishDate.getTime();
	});

	return typeof limit === "number" ? sorted.slice(0, limit) : sorted;
}

export async function getTranslation(post: BlogPost) {
	if (!post.data.translationKey) {
		return undefined;
	}

	const posts = await getPosts();
	return posts.find((candidate) => {
		return (
			candidate.id !== post.id &&
			candidate.data.translationKey === post.data.translationKey
		);
	});
}

export function postUrl(post: BlogPost) {
	return `/${post.data.lang}/blog/${post.data.slug}/`;
}

export function formatDate(date: Date, lang: Lang) {
	return new Intl.DateTimeFormat(lang === "es" ? "es-CL" : "en", {
		year: "numeric",
		month: "long",
		day: "numeric",
		timeZone: "UTC",
	}).format(date);
}
