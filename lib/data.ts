export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  confidential?: boolean;
  link: string;
  linkLabel: string;
  badge?: string;
  size: "large" | "medium" | "small";
  accent?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "ferreinnova",
    title: "FerreInnova",
    description:
      "Portal SaaS completo para ferreterías — gestión de inventario, punto de venta, caja, reportes y administración de clientes. Diseñado para digitalizar el negocio ferretero de principio a fin.",
    tags: ["React", "Node.js", "PostgreSQL", "SaaS"],
    badge: "Proyecto Estrella",
    link: "https://ferreinnova.com",
    linkLabel: "Visitar sitio →",
    size: "large",
    accent: "#0d1a0d",
  },
  {
    id: "astro-state",
    title: "Astro State",
    description:
      "App móvil para que astronautas realicen registros eficientes en el espacio. Ganadora del NASA Space Apps Challenge Guatemala.",
    tags: ["Flutter", "Dart", "Mobile"],
    link: "https://flutterawesome.com/nasa-space-apps-project-with-flutter/",
    linkLabel: "Ver proyecto →",
    badge: "Ganador Nacional NASA",
    size: "large",
    accent: "#1a1a2e",
  },
  {
    id: "billetesgt",
    title: "BilletesGT",
    description: "App iOS en producción para Infile S.A., disponible en el App Store de Guatemala.",
    tags: ["Confidencial"],
    confidential: true,
    link: "https://apps.apple.com/gt/app/billetesgt/id6550923490?l=en-GB",
    linkLabel: "Ver en App Store →",
    size: "medium",
    accent: "#0a0a1a",
  },
  {
    id: "filapp",
    title: "Infile FilApp",
    description: "App iOS empresarial de firma electrónica, publicada en el App Store oficial.",
    tags: ["Confidencial"],
    confidential: true,
    link: "https://apps.apple.com/gt/app/infile-filapp/id6447701126?l=en-GB",
    linkLabel: "Ver en App Store →",
    size: "medium",
    accent: "#0d1117",
  },
  {
    id: "space-access",
    title: "Space Access",
    description:
      "Visualización interactiva de planetas en tiempo real con Three.js y APIs oficiales de la NASA.",
    tags: ["Three.js", "React", "NASA API"],
    link: "https://www.spaceappschallenge.org/2023/find-a-team/space-access/?tab=project",
    linkLabel: "Ver proyecto →",
    size: "small",
    accent: "#050510",
  },
  {
    id: "filpro",
    title: "Filpro Infile",
    description: "Web app empresarial de gestión documental y firma electrónica en producción.",
    tags: ["Confidencial"],
    confidential: true,
    link: "https://filpro.infile.com/auth",
    linkLabel: "Explorar →",
    size: "medium",
    accent: "#0a0f1a",
  },
];
