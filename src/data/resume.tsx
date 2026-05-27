import { Icons } from "@/components/icons";
import { House, Library } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Astro } from "@/components/ui/svgs/astro";

export const DATA = {
  name: "Sabah Rahal",
  initials: "SR",
  url: "https://sabahrahal.com",
  location: "Madrid, Spain",
  locationLink: "https://www.google.com/maps/place/madrid+spain",
  description:
    "Front-End Developer with 3+ years of experience building modular and scalable web apps. React, TypeScript & AI-enhanced workflows.",
  summary:
    "Front-End developer with 3+ years building modular and scalable web applications. Currently at [SADE Consultoría Técnica](#work), delivering projects across multiple sectors with React and TypeScript in agile environments. Experienced in [microfrontend architectures and testing](#work). Applying generative AI, agents, and automation workflows to accelerate the development cycle.",
  avatarUrl: "/picofme.webp",
  ogImage: "/og_image.png",
  sections: {
    about: { order: 1, enabled: true, heading: "About" },
    work: { order: 2, enabled: true, heading: "Work Experience", presentLabel: "Present" },
    education: { order: 3, enabled: true, heading: "Education" },
    skills: { order: 4, enabled: true, heading: "Skills" },
    projects: {
      order: 5, enabled: true,
      label: "My Projects",
      heading: "Check out my latest work",
      text: "I've worked on a variety of projects, from landing pages to complex full-stack web applications. Here are a few of my favorites.",
    },
    hackathons: {
      order: 7, enabled: false,
      label: "Hackathons",
      heading: "I like building things",
      text: "During my time in university, I attended {count}+ hackathons. People from around the country would come together and build incredible things in 2-3 days. It was eye-opening to see the endless possibilities brought to life by a group of motivated and passionate individuals.",
    },
    photos: {
      order: 6, enabled: true,
      heading: "My Recent Travels",
    },
    contact: {
      order: 8, enabled: true,
      label: "Contact",
      heading: "Get in Touch",
      text: "Want to chat? Feel free to reach out via LinkedIn or email and I'll get back to you as soon as possible.",
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
    { name: "React", icon: ReactLight },
    { name: "TypeScript", icon: Typescript },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Astro", icon: Astro },
    { name: "Tailwind CSS", icon: Icons.tailwindcss },
    { name: "Node.js", icon: Nodejs },
    { name: "Postgres", icon: Postgresql },
  ],
  navbar: [
    { href: "/", icon: House, label: "Home" },
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
        url: "https://linkedin.com/in/sabahrahal",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:sabahrahal1998@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SADE Consultoría Técnica",
      href: "https://www.sade.es",
      badges: [],
      location: "Madrid, Spain",
      title: "Front-End Developer",
      logoUrl: "https://avatar.vercel.sh/sade-consultoria?size=40",
      start: "October 2023",
      end: undefined,
      description:
        "Building modular web applications with React, TypeScript, Redux, Zustand and Vite across multiple industry sectors under Scrum methodology. Developed SADE UI, an internal component library based on Shadcn and Storybook, improving visual consistency and reducing future implementation time. Delivered an insurance contracting platform using microfrontend architecture (Module Federation). Integrated AI solutions with Claude Code and n8n, reducing development time by 30%. Contributed to CI/CD pipelines with Azure DevOps and SonarQube.",
    },
    {
      company: "Freelance",
      href: "https://sabahrahal.com",
      badges: ["Personal project"],
      location: "Madrid, Spain",
      title: "Front-End Developer",
      logoUrl: "/picofme.webp",
      start: "October 2023",
      end: undefined,
      description:
        "Built Papayita, a full-stack web platform with independent frontends for customers and admins (Next.js 16, React 19). State managed with TanStack Query and Zustand; UI with Shadcn, Tailwind, and Framer Motion. Interactive maps via Leaflet and Google Maps API. Backend in NestJS and Prisma (PostgreSQL), real-time with Socket.io, storage on AWS S3, and auth with Passport + JWT. Deployed on Railway. Also developed responsive landing pages and Mobile First sites for SMBs using Next.js, Astro, and Tailwind with SEO best practices.",
    },
    {
      company: "CardTec",
      href: "https://cardtec.com",
      badges: [],
      location: "Caracas, Venezuela",
      title: "Front-End Developer Intern",
      logoUrl: "https://avatar.vercel.sh/cardtec?size=40",
      start: "December 2022",
      end: "April 2023",
      description:
        "Maintained and developed SPA components with React for a mobile top-up platform. Implemented responsive layouts and resolved bugs. Worked under Scrum methodology including sprint planning and daily standups.",
    },
  ],
  education: [
    {
      school: "4Geeks Academy",
      href: "https://4geeksacademy.com",
      degree: "Full Stack Developer",
      logoUrl: "https://www.google.com/s2/favicons?domain=4geeksacademy.com&sz=128",
      start: "2022",
      end: "2022",
    },
    {
      school: "Universidad De Margarita",
      href: "https://unimar.edu.ve",
      degree: "Bachelor of Business Administration",
      logoUrl: "https://avatar.vercel.sh/unimar?size=40",
      start: "2014",
      end: "2020",
    },
  ],
  projects: [
    {
      title: "Papayita",
      href: "https://sabahrahal.com",
      dates: "October 2023 - Present",
      active: true,
      description:
        "Full-stack web platform with independent frontends for customers and admins. Built with Next.js 16, React 19, TanStack Query, Zustand, Shadcn, Tailwind, and Framer Motion. Features interactive maps, real-time updates via Socket.io, backend in NestJS and Prisma (PostgreSQL), file storage on AWS S3, and auth with Passport + JWT. Deployed on Railway with separate environments.",
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
      links: [],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;
