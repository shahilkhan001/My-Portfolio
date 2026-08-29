import type { Experience } from "@/content/types";

export const experiences = [
  {
    organization: "Project Dynamo",
    role: "AI & Software Evaluation",
    arrangement: "Remote task-based contract work",
    period: "2026",
    summary:
      "Task-based technical evaluation work involving software repositories, implementation review, validation, and AI-assisted engineering workflows.",
    highlights: [
      "Reviewed and worked with software repositories across technical task categories",
      "Evaluated implementation behavior against task requirements and validation checks",
      "Used Git, GitHub, command-line tooling, and local development environments throughout task execution",
    ],
  },
] as const satisfies readonly Experience[];
