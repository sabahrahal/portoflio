import { Icons } from "@/components/icons";
import { Globe, House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Astro } from "@/components/ui/svgs/astro";
import {
  SiJavascript,
  SiVite,
  SiTanstack,
  SiRedux,
  SiSass,
  SiMui,
  SiShadcnui,
  SiStorybook,
  SiJest,
  SiVitest,
  SiTestinglibrary,
  SiClaude,
  SiN8n,
} from "@icons-pack/react-simple-icons";

export const DATA = {
  name: "Sabah Rahal",
  initials: "SR",
  url: "https://sabahrahal.com",
  location: "Madrid, España",
  locationLink: "https://www.google.com/maps/place/madrid+spain",
  description:
    "Desarrollador Front-End con más de 3 años de experiencia construyendo aplicaciones web modulares y escalables con React y TypeScript, potenciado con herramientas de desarrollo con IA.",
  summary:
    "Actualmente en [SADE Consultoría Técnica](https://www.grupo-sade.com/), construyendo soluciones en múltiples sectores en entornos ágiles. Con experiencia en arquitecturas de microfrontends y testing. Aplicando herramientas de desarrollo con IA bajo metodología Spec-Driven Development para acelerar el ciclo de desarrollo.",
  avatarUrl: "/picofme.webp",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "Sobre mí" },
    work: { order: 2, enabled: true, heading: "Experiencia Laboral", presentLabel: "Presente" },
    education: { order: 3, enabled: true, heading: "Educación" },
    skills: { order: 4, enabled: true, heading: "Habilidades" },
    projects: {
      order: 5, enabled: true,
      label: "Laboratorio",
      heading: "Lo que he construido",
      text: "Una selección de proyectos que reflejan mi forma de construir y pensar.",
    },
    hackathons: {
      order: 9, enabled: false,
      label: "Hackathons",
      heading: "Me gusta construir cosas",
      text: "Durante mi tiempo en la universidad, participé en {count}+ hackathons. Personas de todo el país se reunían para construir cosas increíbles en 2-3 días. Fue revelador ver las infinitas posibilidades que trae a la vida un grupo de personas motivadas y apasionadas.",
    },
    photos: {
      order: 6, enabled: false,
      heading: "Mis Viajes Recientes",
    },
    blog: {
      order: 7, enabled: true,
      heading: "Artículos",
      linkLabel: "Ver todos",
    },
    contact: {
      order: 10, enabled: true,
      label: "Contacto",
      heading: "Ponte en Contacto",
      text: "¿Quieres hablar? No dudes en contactarme por LinkedIn o email y te responderé lo antes posible.",
    },
  },
  photos: [
    { src: "/photos/photo1.jpg", alt: "Photo 1" },
    { src: "/photos/photo2.jpg", alt: "Photo 2" },
    { src: "/photos/photo3.jpg", alt: "Photo 3" },
    { src: "/photos/photo4.jpg", alt: "Photo 4" },
    { src: "/photos/photo5.jpg", alt: "Photo 5" },
    { src: "/photos/photo6.jpg", alt: "Photo 6" },
    { src: "/photos/photo7.jpg", alt: "Photo 7" },
    { src: "/photos/photo8.jpg", alt: "Photo 8" },
    { src: "/photos/photo9.jpg", alt: "Photo 9" },
  ],
  skills: [
    { name: "React", icon: ReactLight, color: "#61DAFB" },
    { name: "TypeScript", icon: Typescript, color: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Next.js", icon: NextjsIconDark, color: "#000000" },
    { name: "Astro", icon: Astro, color: "#BC52EE" },
    { name: "Vite", icon: SiVite, color: "#9135FF" },
    { name: "Module Federation" },
    { name: "TanStack", icon: SiTanstack, color: "#000000" },
    { name: "Redux", icon: SiRedux, color: "#764ABC" },
    { name: "Zustand" },
    { name: "Tailwind", icon: Icons.tailwindcss, color: "#06B6D4" },
    { name: "Sass", icon: SiSass, color: "#CC6699" },
    { name: "MUI", icon: SiMui, color: "#007FFF" },
    { name: "ShadCn", icon: SiShadcnui, color: "#000000" },
    { name: "Storybook", icon: SiStorybook, color: "#FF4785" },
    { name: "Jest", icon: SiJest, color: "#C21325" },
    { name: "Vitest", icon: SiVitest, color: "#00FF74" },
    { name: "React Testing Library", icon: SiTestinglibrary, color: "#E33332" },
    { name: "Claude Code", icon: SiClaude, color: "#D97757" },
    { name: "OpenCode" },
    { name: "OpenSpec" },
    { name: "n8n", icon: SiN8n, color: "#EA4B71" },
    { name: "MCP" },
  ],
  navbar: [
    { href: "/", icon: House, label: "Inicio" },
    { href: "/blog", icon: Library, label: "Blog" },
  ],
  contact: {
    email: "sabahrahal1998@gmail.com",
    tel: "+34682803579",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/sabahrahal",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sabah-rahal/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Enviar Email",
        url: "mailto:sabahrahal1998@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SADE Consultoría Técnica",
      href: "https://www.grupo-sade.com/",
      badges: [],
      location: "Madrid, España",
      title: "Front-End Developer",
      logoUrl: "https://www.grupo-sade.com/image/layout_set_logo?img_id=138609&t=1779440665172",
      start: "Octubre 2023",
      end: undefined,
      description:
        "Construcción de aplicaciones web modulares con React, TypeScript, Redux, Zustand y Vite en proyectos de distintos sectores (hotelero, viajes, energético) bajo metodología Scrum. Por iniciativa propia desarrollé SADE UI, una librería de componentes interna basada en Shadcn y Storybook, aportando uniformidad visual y reduciendo el tiempo de implementación en futuros proyectos. Desarrollé una plataforma de contratación de seguros con arquitectura de microfrontends (Module Federation), layouts reutilizables y un componente Wizard para pasos anidados, adoptado en toda la aplicación. Optimicé el flujo del ciclo de desarrollo con Claude Code, Opencode y agentes bajo metodología Spec-Driven Development, reduciendo el tiempo de desarrollo en un 30%. Contribuí a pipelines CI/CD con Azure DevOps y SonarQube.",
    },
    {
      company: "Freelance",
      href: "",
      badges: [],
      location: "Madrid, España",
      title: "Front-End Developer",
      logoUrl: "/picofme.webp",
      start: "Abril 2023",
      end: "Octubre 2023",
      description:
        "Desarrollo de landing pages, blogs y sitios responsivos Mobile First para PYMEs con TypeScript, Next.js, Astro y Tailwind, aplicando prácticas SEO. Desarrollo de Papayita, plataforma web full-stack propia en producción con frontales independientes para clientes y administradores (Next.js 16, React 19). Estado con TanStack Query y Zustand, UI con Shadcn, Tailwind y Framer Motion, mapas interactivos con Leaflet y Google Maps API. Backend en NestJS y Prisma (PostgreSQL), tiempo real con Socket.io, almacenamiento en AWS S3 y autenticación con Passport + JWT. Despliegue en Railway con entornos separados. Desarrollo acelerado con Claude Code, Opencode y agentes de IA.",
    },
    {
      company: "CardTech",
      href: "",
      badges: ["Pasante"],
      location: "Caracas, Venezuela",
      title: "Front-End Developer",
      logoUrl: "https://media.licdn.com/dms/image/v2/D4E0BAQH1KfF41UooxA/company-logo_200_200/company-logo_200_200/0/1686153076158/cardtechcorp_logo?e=2147483647&v=beta&t=NWiF2HwppZaCeUKvNU-CnprROUY6HLzrV5n96pVbE18",
      start: "Diciembre 2022",
      end: "Abril 2023",
      description:
        "Mantenimiento y desarrollo de componentes SPA con React para una plataforma de recargas de telefonía móvil. Maquetación responsiva y resolución de bugs en entorno ágil bajo metodología Scrum.",
    },
  ],
  education: [
    {
      school: "4Geeks Academy",
      href: "https://4geeksacademy.com",
      degree: "Desarrollador Full Stack",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_NApT35W-2Ghuoc2INZFCREowZC7b99XBnw&s",
      start: "2022",
      end: "2022",
    },
    {
      school: "Universidad De Margarita",
      href: "https://unimar.edu.ve",
      degree: "Licenciatura en Administración de Empresas",
      logoUrl: "https://pbs.twimg.com/profile_images/1395031933818712064/n1tSHsDR_400x400.jpg",
      start: "2014",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Papayita.app",
      href: "https://descubre.papayita.app/",
      dates: "Abril 2026 - Presente",
      active: true,
      description:
        "Proyecto propio en producción, construido desde cero en todas sus fases, desde la definición de producto hasta el despliegue. Una solución para el día a día del vendedor venezolano: tienda online propia, inventario en tiempo real, personalización, mapas y tasa BCV integrada. Desarrollado con Claude Code, OpenCode y agentes bajo metodología Spec-Driven Development.",
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "TanStack Query",
        "Zustand",
        "Shadcn UI",
        "Tailwind CSS",
        "Framer Motion",
        "Socket.io",
        "AWS S3",
      ],
      links: [
        {
          type: "Website",
          href: "https://descubre.papayita.app/",
          icon: <Globe className="h-3 w-3" />,
        },
      ],
      image: "",
      video: "https://res.cloudinary.com/dlt5xvflv/video/upload/q_auto:eco,f_auto/v1779923516/users/papayita-demo_mwa8s8.mp4",
    },
  ],
  hackathons: [],
} as const;
