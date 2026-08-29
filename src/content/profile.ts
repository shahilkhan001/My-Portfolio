import type { Profile } from "@/content/types";

export const profile = {
  name: "Mohammad Shahil Khan",
  headline: "Software Engineer & Full-Stack Developer",
  supportingLine:
    "Building practical web, Android, and AI-enabled software.",
  location: "India · Open to Remote & Relocation",
  availability:
    "Open to software engineering opportunities, technical contract work, and selected freelance projects.",
  about: [
    "I build practical software across full-stack web development, Android applications, and AI-enabled integrations, with an emphasis on solving real product and engineering problems.",
    "My work spans end-to-end web applications, native Android development, API integrations, and technical evaluation work across software repositories and engineering workflows.",
  ],
  email: "mdshahilkhan59@gmail.com",
  github: "https://github.com/shahilkhan001",
  linkedin: "https://www.linkedin.com/in/mohammad-shahil-khan/",
} as const satisfies Profile;
