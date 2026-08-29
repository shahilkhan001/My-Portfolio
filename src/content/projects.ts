import type { Project } from "@/content/types";

export const projects = [
  {
    slug: "tourist-safety",
    title: "Tourist Safety",
    eyebrow: "Full-Stack Web Application",
    summary:
      "A safety-focused web application with location-aware features, SOS workflows, real-time communication, and authenticated access.",
    description:
      "Tourist Safety is a full-stack safety platform designed around location-aware assistance and emergency response. It combines GPS-based tracking, SOS workflows, real-time admin-user communication through Socket.IO, and JWT-based authentication, with MongoDB supporting application data and live synchronization.",
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
        href: "https://github.com/shahilkhan001/Tourist-Safety-Application",
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
      "Bharat Bhraman is a native Android tourism application that combines travel exploration with AI-enabled features through the Gemini API. The app uses Firebase for authentication and cloud-backed functionality, includes biometric security and multilingual tourism features, and was published on Google Play.",
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
      "A responsive fitness business website built with React and Tailwind CSS, featuring structured sections for programs, pricing, testimonials, and contact flows.",
    description:
      "FitZone is an independently deployed, client-style fitness website built to demonstrate practical business-facing frontend development. It uses reusable React components, responsive layouts, smooth section navigation, and structured content for programs, pricing, testimonials, and contact.",

    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Vercel"],
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
    eyebrow: "Android Application",
    summary:
      "An Android geography learning application built with Kotlin, Google Maps API, and Firebase for interactive maps, location search, authentication, quizzes, and score tracking.",
    description:
      "GeoAI Smart Explorer is an Android application for interactive geographical learning and exploration. It integrates Google Maps API for live maps, location search, and multiple map views, while Firebase supports authentication and quiz and score-tracking workflows.",

    technologies: ["Kotlin", "Android SDK", "Google Maps API", "Firebase"],
    featured: false,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shahilkhan001/GeoAI-Smart-Explorer",
      },
    ],
    highlights: [
      "Interactive geographical learning with Google Maps",
      "Location search and multiple map views",
      "Firebase-backed authentication",
      "Quiz and score tracking",
    ],
  },
  {
    slug: "utilmonitor",
    title: "UtilMonitor",
    eyebrow: "Android Application",
    summary:
      "An Android utility-tracking application built with Kotlin and Firebase for real-time usage updates, cloud-backed data, and simple consumption analytics.",
    description:
      "UtilMonitor is an Android application focused on tracking utility consumption through a clean mobile interface. It uses Firebase for cloud-backed storage and real-time synchronization, with a simple analytics dashboard for reviewing changing usage data.",

    technologies: ["Kotlin", "Android Studio", "Firebase"],
    featured: false,
    links: [
      {
        label: "GitHub",
        href: "https://github.com/shahilkhan001/UtilMonitor",
      },
    ],
    highlights: [
      "Real-time utility data synchronization",
      "Cloud-backed storage with Firebase",
      "Usage analytics dashboard",
      "Responsive Android interface",
    ],
  },
] as const satisfies readonly Project[];

export const featuredProjects = projects.filter((project) => project.featured);

export type ProjectSlug = (typeof projects)[number]["slug"];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
