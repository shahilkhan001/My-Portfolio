import type { Education } from "@/content/types";

export const education = [
  {
    institution: "Lovely Professional University",
    qualification: "Bachelor of Technology",
    field: "Computer Science and Engineering",
    period: "2022 — 2026",
    location: "Punjab, India",
    details: [
      "Engineering minor: Cyber Security",
      "Open minor: Android App Development",
      "Completed July 2026",
    ],
  },
] as const satisfies readonly Education[];
