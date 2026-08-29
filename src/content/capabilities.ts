import type { Capability } from "@/content/types";

export const capabilities = [
  {
    title: "Full-Stack Engineering",
    description:
      "Building end-to-end web applications across frontend interfaces, server-side logic, APIs, authentication, and data persistence.",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "REST APIs",
      "MongoDB",
      "Authentication",
    ],
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive, accessible interfaces with attention to structure, interaction, usability, and maintainable component systems.",
    skills: [
      "TypeScript",
      "JavaScript",
      "React",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility",
    ],
  },
  {
    title: "Android Development",
    description:
      "Developing native Android applications and integrating backend services and external APIs into mobile experiences.",
    skills: [
      "Kotlin",
      "Java",
      "Android Studio",
      "Firebase",
      "API Integration",
    ],
  },
  {
    title: "AI & API Integration",
    description:
      "Adding practical AI-enabled features and third-party services to applications through API-based integrations.",
    skills: [
      "Gemini API",
      "REST APIs",
      "JSON",
      "External Service Integration",
      "AI-Enabled Features",
    ],
  },
  {
    title: "Engineering Workflow",
    description:
      "Working with source control, command-line tooling, repository workflows, validation, and modern development environments.",
    skills: [
      "Git",
      "GitHub",
      "Git Bash",
      "VS Code",
      "Docker",
      "CLI Workflows",
      "Testing & Validation",
    ],
  },
] as const satisfies readonly Capability[];
