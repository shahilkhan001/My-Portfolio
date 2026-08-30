import { profile } from "@/content/profile";

export const siteConfig = {
  name: profile.name,
  headline: profile.headline,
  title: `${profile.name} — Software Engineer`,
  socialTitle: `${profile.name} — ${profile.headline}`,
  description:
    "Portfolio of Mohammad Shahil Khan, a software engineer and full-stack developer building practical web, Android, and AI-enabled software.",
  url: "https://shahilkhan-dev.vercel.app",
  locale: "en_IN",
  email: profile.email,
  links: {
    github: profile.github,
    linkedin: profile.linkedin,
  },
} as const;
