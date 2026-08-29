export type ExternalLink = {
  label: string;
  href: string;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  technologies: readonly string[];
  featured: boolean;
  links: readonly ExternalLink[];
  highlights: readonly string[];
};

export type Experience = {
  organization: string;
  role: string;
  arrangement: string;
  period: string;
  summary: string;
  highlights: readonly string[];
};

export type Capability = {
  title: string;
  description: string;
  skills: readonly string[];
};

export type Service = {
  title: string;
  description: string;
};

export type Education = {
  institution: string;
  qualification: string;
  field: string;
  period: string;
  location: string;
  details?: readonly string[];
};

export type Profile = {
  name: string;
  headline: string;
  supportingLine: string;
  location: string;
  availability: string;
  about: readonly string[];
  email?: string;
  github: string;
  linkedin?: string;
};
