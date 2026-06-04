export type Lang = "en" | "es";

export const t = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      stack: "Stack",
      github: "GitHub",
    },
    hero: {
      available: "Available for work",
      line1: "Web & Mobile",
      line2: "Developer.",
      subtitle1: "Bryan España — Guatemala",
      subtitle2: "UVG · Infile S.A. · NASA Space Apps ◎",
      cta: "View Projects ↓",
      ctaGithub: "GitHub →",
      scroll: "Scroll",
    },
    about: {
      label: "About me",
      title1: "Hi, I'm",
      title2: "Bryan España.",
      stats: [
        { value: "4+", label: "Years of experience" },
        { value: "3", label: "Years at Infile S.A." },
        { value: "2×", label: "NASA Space Apps" },
        { value: "∞", label: "Dedication" },
      ],
      p1: "With over 4 years immersed in software development, I have built a solid career that combines technical rigor with a product-oriented vision. During the last 3 years I have been part of the Infile S.A. team, where I have contributed to the development of mobile and web applications now in production, used by thousands of people.",
      p2: "My greatest passion is mobile development — especially with Flutter — although I equally enjoy building modern web interfaces and robust backend systems. I have participated in multiple hackathons, including two editions of the NASA Space Apps Challenge, from which I emerged as the national winner with Astro State.",
      p3: "I am currently studying Computer Science Engineering at Universidad del Valle de Guatemala. I care about code quality, user experience, and the real impact of the final product.",
      github: "View GitHub →",
    },
    projects: {
      label: "Projects",
      title1: "Real work,",
      title2: "in production.",
    },
    stack: {
      label: "Stack",
      title1: "Tools",
      title2: "I master.",
      categories: [
        { label: "Frontend", level: 93, highlight: false, skills: ["HTML/CSS", "TypeScript", "JavaScript", "React", "Angular", "Ruby on Rails", "Next.js"] },
        { label: "Mobile", level: 96, highlight: true, skills: ["Flutter ★", "Dart", "iOS", "Android", "Kotlin", "React Native", "Swift"] },
        { label: "Backend", level: 88, highlight: false, skills: ["Node.js", "Express.js", "Firebase", "Java", "Ruby", "GraphQL"] },
        { label: "Databases", level: 90, highlight: false, skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Firebase Firestore", "Redis", "SQLite"] },
      ],
    },
    footer: {
      copy: "© 2025 Bryan España. Built with Next.js + GSAP.",
    },
  },
  es: {
    nav: {
      about: "Sobre mí",
      projects: "Proyectos",
      stack: "Stack",
      github: "GitHub",
    },
    hero: {
      available: "Disponible para trabajar",
      line1: "Web & Mobile",
      line2: "Developer.",
      subtitle1: "Bryan España — Guatemala",
      subtitle2: "UVG · Infile S.A. · NASA Space Apps ◎",
      cta: "Ver Proyectos ↓",
      ctaGithub: "GitHub →",
      scroll: "Scroll",
    },
    about: {
      label: "Sobre mí",
      title1: "Hola, soy",
      title2: "Bryan España.",
      stats: [
        { value: "4+", label: "Años de experiencia" },
        { value: "3", label: "Años en Infile S.A." },
        { value: "2×", label: "NASA Space Apps" },
        { value: "∞", label: "Dedicación" },
      ],
      p1: "Con más de 4 años inmerso en el desarrollo de software, he construido una trayectoria sólida que combina rigor técnico con una visión orientada al producto. Durante los últimos 3 años he formado parte del equipo de Infile S.A., donde he contribuido al desarrollo de aplicaciones móviles y web hoy en producción, utilizadas por miles de personas.",
      p2: "Mi mayor pasión es el desarrollo móvil — especialmente con Flutter — aunque disfruto igual de construir interfaces web modernas y sistemas backend robustos. He participado en múltiples hackathons, incluyendo dos ediciones del NASA Space Apps Challenge, de las cuales salí ganador nacional con Astro State.",
      p3: "Actualmente curso Ingeniería en Ciencias de la Computación en la Universidad del Valle de Guatemala. Me importa la calidad del código, la experiencia del usuario y el impacto real del producto final.",
      github: "Ver GitHub →",
    },
    projects: {
      label: "Proyectos",
      title1: "Trabajo real,",
      title2: "en producción.",
    },
    stack: {
      label: "Stack",
      title1: "Herramientas",
      title2: "que domino.",
      categories: [
        { label: "Frontend", level: 93, highlight: false, skills: ["HTML/CSS", "TypeScript", "JavaScript", "React", "Angular", "Ruby on Rails", "Next.js"] },
        { label: "Mobile", level: 96, highlight: true, skills: ["Flutter ★", "Dart", "iOS", "Android", "Kotlin", "React Native", "Swift"] },
        { label: "Backend", level: 88, highlight: false, skills: ["Node.js", "Express.js", "Firebase", "Java", "Ruby", "GraphQL"] },
        { label: "Bases de datos", level: 90, highlight: false, skills: ["PostgreSQL", "MySQL", "MongoDB", "Neo4j", "Firebase Firestore", "Redis", "SQLite"] },
      ],
    },
    footer: {
      copy: "© 2025 Bryan España. Hecho con Next.js + GSAP.",
    },
  },
} as const;
