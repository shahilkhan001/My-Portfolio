import type { Service } from "@/content/types";

export const services = [
  {
    title: "Full-Stack Web Development",
    description:
      "End-to-end web application development covering responsive interfaces, server-side functionality, APIs, authentication, and data integration.",
  },
  {
    title: "Frontend & Business Websites",
    description:
      "Responsive websites and frontend experiences for practical business, portfolio, and product-focused use cases.",
  },
  {
    title: "Android Development",
    description:
      "Native Android application development with Kotlin or Java, including Firebase and external API integration where appropriate.",
  },
  {
    title: "AI & API Integration",
    description:
      "Practical integration of AI-enabled features and third-party APIs into existing or new applications.",
  },
] as const satisfies readonly Service[];
