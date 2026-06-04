export type PreviewType = "web" | "mobile" | "private";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  confidential?: boolean;
  link: string;
  linkLabel: string;
  badge?: string;
  icon?: string;
  previewType: PreviewType;
  previewUrl?: string; // URL para thum.io (web) o imagen personalizada
  size: "large" | "medium" | "small";
  accent?: string;
}

// Captura 1280px de ancho, recorta los primeros 800px (top of page), fullpage=false
const THUM = (url: string, fresh = false) =>
  `https://image.thum.io/get/${fresh ? "fresh/" : ""}noanimate/width/1280/crop/800/${url}`;

export const PROJECTS: Project[] = [
  {
    id: "ferreinnova",
    title: "FerreInnova",
    description: "Portal SaaS completo para ferreterías — gestión de inventario, punto de venta, caja, reportes y administración de clientes.",
    tags: ["React", "Node.js", "PostgreSQL", "SaaS"],
    badge: "Proyecto Estrella",
    icon: "https://landing.ferreinnova.com/logo/logo-icon-color.svg",
    previewType: "web",
    previewUrl: THUM("https://ferreinnova.com", true),
    link: "https://ferreinnova.com",
    linkLabel: "Visitar sitio →",
    size: "large",
    accent: "#111111",
  },
  {
    id: "astro-state",
    title: "Astro State",
    description: "App móvil para que astronautas realicen registros eficientes en el espacio. Ganadora del NASA Space Apps Challenge Guatemala.",
    tags: ["Flutter", "Dart", "Mobile"],
    badge: "Ganador Nacional NASA",
    icon: "https://flutter.dev/assets/flutter-logo.6ed04a8cd70b7aa540c6ec302a4e936c.svg",
    previewType: "web",
    previewUrl: THUM("https://flutterawesome.com/nasa-space-apps-project-with-flutter/"),
    link: "https://flutterawesome.com/nasa-space-apps-project-with-flutter/",
    linkLabel: "Ver proyecto →",
    size: "large",
    accent: "#0e0e0e",
  },
  {
    id: "billetesgt",
    title: "BilletesGT",
    description: "App iOS en producción para Infile S.A., disponible en el App Store de Guatemala.",
    tags: ["Confidencial"],
    confidential: true,
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/d5/e8/53/d5e8536a-c74e-ba66-654f-7f7d3a167311/AppIcon-0-0-1x_U007emarketing-0-11-0-85-220.png/400x400ia-75.webp",
    previewType: "mobile",
    link: "https://apps.apple.com/gt/app/billetesgt/id6550923490?l=en-GB",
    linkLabel: "Ver en App Store →",
    size: "medium",
    accent: "#141414",
  },
  {
    id: "filapp",
    title: "Infile FilApp",
    description: "App iOS empresarial de firma electrónica, publicada en el App Store oficial.",
    tags: ["Confidencial"],
    confidential: true,
    icon: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/10/0b/92/100b926b-d53b-bf36-d3fb-5f967ee54a87/AppIcon-1x_U007emarketing-0-8-0-0-85-220-0.png/400x400ia-75.webp",
    previewType: "mobile",
    link: "https://apps.apple.com/gt/app/infile-filapp/id6447701126?l=en-GB",
    linkLabel: "Ver en App Store →",
    size: "medium",
    accent: "#0a0a0a",
  },
  {
    id: "space-access",
    title: "Space Access",
    description: "Visualización interactiva de planetas en tiempo real con Three.js y APIs oficiales de la NASA.",
    tags: ["Three.js", "React", "NASA API"],
    icon: "https://www.spaceappschallenge.org/assets/media/images/Colorway2-Color_White3x.width-440.jpegquality-60.png",
    previewType: "web",
    previewUrl: THUM("https://www.spaceappschallenge.org/2023/find-a-team/space-access/?tab=project"),
    link: "https://www.spaceappschallenge.org/2023/find-a-team/space-access/?tab=project",
    linkLabel: "Ver proyecto →",
    size: "small",
    accent: "#111111",
  },
  {
    id: "filpro",
    title: "Filpro Infile",
    description: "Web app empresarial de gestión documental y firma electrónica en producción.",
    tags: ["Confidencial"],
    confidential: true,
    icon: "https://filpro.infile.com/assets/images/logoF/F.png",
    previewType: "web",
    previewUrl: THUM("https://filpro.infile.com/auth"),
    link: "https://filpro.infile.com/auth",
    linkLabel: "Explorar →",
    size: "medium",
    accent: "#0e0e0e",
  },
  {
    id: "control-fiscal",
    title: "Control Fiscal",
    description: "Portal web de gestión fiscal para empresas guatemaltecas — facturación electrónica, cumplimiento tributario y reportes ante la SAT.",
    tags: ["Confidencial"],
    confidential: true,
    icon: "https://infile.com/hubfs/Hero%20control%20fisc.png",
    previewType: "web",
    previewUrl: THUM("https://control-fiscal.infile.com/users/sign_in"),
    link: "https://control-fiscal.infile.com/users/sign_in",
    linkLabel: "Ver producto →",
    size: "medium",
    accent: "#0e0e0e",
  },
  {
    id: "infile-internal",
    title: "Plataforma Interna Infile",
    description: "Sistema empresarial interno con gestión avanzada de roles de usuario, permisos granulares, administración de clientes y módulos de automatización para operaciones críticas.",
    tags: ["Confidencial"],
    confidential: true,
    previewType: "private",
    link: "https://infile.com",
    linkLabel: "Ver empresa →",
    size: "medium",
    accent: "#111111",
  },
];
