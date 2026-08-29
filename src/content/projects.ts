import type { Project } from "@/content/types";

export const projects = [
  {
    slug: "tourist-safety",
    title: "Tourist Safety",
    eyebrow: "Full-Stack Web Application",
    summary:
      "A safety-focused web application with location-aware features, SOS workflows, real-time communication, and authenticated access.",
    description:
      "Tourist Safety brings together GPS-based functionality, emergency-oriented workflows, real-time updates, and user authentication in a full-stack application.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Socket.IO",
      "JWT",
    ],
    featured: true,
    links: [
      {
        label: "Live Site",
        href: "https://touristsafty.netlify.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/shahilkhan001/Tourist-Safety",
      },
    ],
    highlights: [
      "Location-aware functionality using GPS",
      "SOS-oriented safety workflow",
      "Real-time communication with Socket.IO",
      "Authenticated application access using JWT",
    ],
  },
  {
    slug: "bharat-bhraman",
    title: "Bharat Bhraman",
    eyebrow: "Android Application",
    summary:
      "An Android travel application built with Kotlin, Firebase, and Gemini API integration.",
    description:
      "Bharat Bhraman is an Android application focused on travel exploration, combining native Android development with Firebase services and AI-enabled functionality through the Gemini API.",
    technologies: ["Kotlin", "Android", "Firebase", "Gemini API"],
    featured: true,
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=dev.shahil.bharatbhraman&pcampaignid=web_share",
      },
      {
        label: "GitHub",
        href: "https://github.com/shahilkhan001/Bharat-Bhraman",
      },
    ],
    highlights: [
      "Native Android development with Kotlin",
      "Firebase-backed application functionality",
      "Gemini API integration",
      "Published on Google Play",
    ],
  },
  {
    slug: "fitzone",
    title: "FitZone",
    eyebrow: "Business Website",
    summary:
      "A fitness-focused business website demonstrating frontend implementation and practical website delivery.",
    description:
      "FitZone is an independent business-style website project used to demonstrate practical frontend development and presentation for a fitness-oriented brand.",
    technologies: [],
    featured: true,
    links: [
      {
        label: "Live Site",
        href: "https://fitzon-fitness.vercel.app/",
      },
      {
        label: "GitHub",
        href: "https://github.com/shahilkhan001/fitzon-fitness-website",
      },
    ],
    highlights: [
      "Business-oriented website structure",
      "Responsive frontend implementation",
      "Independent portfolio project",
    ],
  },
  {
    slug: "geoai-smart-explorer",
    title: "GeoAI Smart Explorer",
    eyebrow: "AI-Enabled Web Project",
    summary:
      "An AI-enabled geography exploration project evolved from an earlier Geography Explorer application.",
    description:
      "GeoAI Smart Explorer develops the earlier Geography Explorer concept into a broader AI-enabled exploration experience.",
    technologies: [],
    featured: false,
    links: [],
    highlights: [
      "Evolution of the earlier Geography Explorer project",
      "Geography-focused exploration experience",
      "AI-enabled project direction",
    ],
  },
  {
    slug: "utilmonitor",
    title: "UtilMonitor",
    eyebrow: "Software Project",
    summary:
      "An earlier software project retained as supporting evidence of hands-on application development.",
    description:
      "UtilMonitor is part of the supporting project archive and represents earlier practical software development work.",
    technologies: [],
    featured: false,
    links: [],
    highlights: [
      "Earlier hands-on software project",
      "Supporting portfolio work",
    ],
  },
] as const satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
