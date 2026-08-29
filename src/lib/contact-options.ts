export const contactReasons = [
  "job",
  "freelance",
  "contract",
  "other",
] as const;

export type ContactReason = (typeof contactReasons)[number];

export const contactReasonLabels: Record<ContactReason, string> = {
  job: "Job / Professional Opportunity",
  freelance: "Freelance Project",
  contract: "Technical Contract Work",
  other: "Other",
};
