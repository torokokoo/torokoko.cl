export const languages = {
	es: {
		label: "Español",
		shortLabel: "ES",
		homePath: "/es/",
		blogPath: "/es/blog/",
	},
	en: {
		label: "English",
		shortLabel: "EN",
		homePath: "/",
		blogPath: "/en/blog/",
	},
} as const;

export type Lang = keyof typeof languages;

export const profile = {
	name: "Diego Toro",
	handle: "torokoko",
	email: "diego@torokoko.cl",
	location: "Santiago, Chile",
	role: "Backend software engineer & cybersecurity enthusiast",
	portrait: "/me.webp",
	resumeEs: "/resume_es.pdf",
	social: {
		linkedin: "https://www.linkedin.com/in/torokoko/",
		github: "https://github.com/torokokoo",
	},
};

export const homeCopy = {
	es: {
		metaTitle: "Diego Toro",
		metaDescription:
			"Página personal de Diego Toro, backend software engineer y entusiasta de ciberseguridad en Santiago, Chile.",
		windowTitle: "diego-toro.ini",
		marquee:
			"Sitio personal de Diego Toro * backend software engineer * cybersecurity enthusiast * abierto a conversar",
		eyebrow: "archivo personal / version 95",
		headline: "hola, soy Diego Toro",
		intro:
			"Backend software engineer y entusiasta de ciberseguridad basado en Santiago, Chile. Me gusta construir sistemas claros, mantener las cosas simples y mirar el software con mentalidad defensiva.",
		availability: "Open to work, conversemos.",
		aboutTitle: "system profile",
		aboutItems: [
			["role", profile.role],
			["base", profile.location],
			["mode", "backend, seguridad, aprendizaje continuo"],
			["status", "disponible para oportunidades"],
		],
		connectTitle: "links.zip",
		blogTitle: "últimas notas",
		blogCta: "ver todo el blog",
		noPosts: "Aún no hay posts publicados.",
		resumeLabel: "CV en español",
		emailLabel: "email",
	},
	en: {
		metaTitle: "Diego Toro",
		metaDescription:
			"Personal website for Diego Toro, backend software engineer and cybersecurity enthusiast in Santiago, Chile.",
		windowTitle: "diego-toro.ini",
		marquee:
			"Personal website of Diego Toro * backend software engineer * cybersecurity enthusiast * open to connect",
		eyebrow: "personal archive / version 95",
		headline: "hello, i'm Diego Toro",
		intro:
			"Backend software engineer and cybersecurity enthusiast based in Santiago, Chile. I like building clear systems, keeping things simple, and looking at software with a defensive mindset.",
		availability: "Open to work, let's connect.",
		aboutTitle: "system profile",
		aboutItems: [
			["role", profile.role],
			["base", profile.location],
			["mode", "backend, security, continuous learning"],
			["status", "available for opportunities"],
		],
		connectTitle: "links.zip",
		blogTitle: "latest notes",
		blogCta: "read the blog",
		noPosts: "No posts published yet.",
		resumeLabel: "resume in Spanish",
		emailLabel: "email",
	},
} as const;

export const blogCopy = {
	es: {
		metaTitle: "Blog",
		metaDescription: "Notas de Diego Toro sobre software, backend y ciberseguridad.",
		windowTitle: "blog-index.html",
		heading: "blog",
		intro:
			"Notas sueltas sobre software, backend, ciberseguridad y lo que vaya apareciendo en el laboratorio.",
		backHome: "volver al inicio",
		empty: "Todavía no hay posts publicados.",
		readMore: "leer nota",
		allPosts: "todas las notas",
		languageFallback: "No hay traducción directa para esta nota.",
	},
	en: {
		metaTitle: "Blog",
		metaDescription: "Notes from Diego Toro about software, backend, and cybersecurity.",
		windowTitle: "blog-index.html",
		heading: "blog",
		intro:
			"Loose notes about software, backend, cybersecurity, and whatever shows up in the lab.",
		backHome: "back home",
		empty: "No posts published yet.",
		readMore: "read note",
		allPosts: "all notes",
		languageFallback: "There is no direct translation for this note.",
	},
} as const;

export function isLang(value: string | undefined): value is Lang {
	return value === "es" || value === "en";
}

export function otherLang(lang: Lang): Lang {
	return lang === "es" ? "en" : "es";
}
