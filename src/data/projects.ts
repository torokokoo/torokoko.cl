import type { Lang } from "./site";

export interface ProjectCopy {
	platform: string;
	shortDescription: string;
	overview: string;
	role: string;
	status: string;
	featuresTitle: string;
	features: string[];
	architectureTitle: string;
	architecture: string;
	stackTitle: string;
	stack: string[];
}

export interface Project {
	slug: string;
	name: string;
	mark: string;
	tags: string[];
	copy: Record<Lang, ProjectCopy>;
}

export const projects: Project[] = [
	{
		slug: "pulseboard",
		name: "Pulseboard",
		mark: "PB",
		tags: ["Web app", "TypeScript", "Node.js", "PostgreSQL", "GCP"],
		copy: {
			en: {
				platform: "Web platform",
				shortDescription:
					"A monitoring workspace for small teams that need a clear view of operational health.",
				overview:
					"Pulseboard is a dummy product placeholder for a cloud-based operations dashboard. It brings service checks, incidents, and team notes into one focused workspace.",
				role: "Backend architecture, API design, data modeling",
				status: "Concept placeholder",
				featuresTitle: "core modules",
				features: [
					"Live service health overview with configurable checks",
					"Incident timeline with ownership and status transitions",
					"Team notes and lightweight operational runbooks",
					"Role-based access for operators and viewers",
				],
				architectureTitle: "architecture",
				architecture:
					"A Node.js API exposes a REST interface backed by PostgreSQL. Background workers process scheduled checks, while a small React client consumes the API and presents status changes in near real time.",
				stackTitle: "technology stack",
				stack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "Google Cloud Platform"],
			},
			es: {
				platform: "Plataforma web",
				shortDescription:
					"Un espacio de monitoreo para equipos pequeños que necesitan una vista clara del estado operacional.",
				overview:
					"Pulseboard es una aplicación dummy de referencia para un dashboard operacional en la nube. Reúne chequeos de servicios, incidentes y notas de equipo en un solo espacio.",
				role: "Arquitectura backend, diseño de API y modelado de datos",
				status: "Placeholder conceptual",
				featuresTitle: "módulos principales",
				features: [
					"Vista de salud de servicios con chequeos configurables",
					"Línea de tiempo de incidentes con responsables y estados",
					"Notas de equipo y runbooks operacionales livianos",
					"Acceso basado en roles para operadores y observadores",
				],
				architectureTitle: "arquitectura",
				architecture:
					"Una API en Node.js expone una interfaz REST respaldada por PostgreSQL. Workers procesan chequeos programados y un cliente React consume la API para presentar cambios de estado casi en tiempo real.",
				stackTitle: "stack tecnológico",
				stack: ["TypeScript", "Node.js", "React", "PostgreSQL", "Docker", "Google Cloud Platform"],
			},
		},
	},
];

export function getProject(slug: string) {
	return projects.find((project) => project.slug === slug);
}
