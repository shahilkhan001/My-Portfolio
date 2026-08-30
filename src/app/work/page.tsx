import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";

const workDescription =
  "Selected software projects by Mohammad Shahil Khan across full-stack web development, Android, and AI-enabled applications.";

export const metadata: Metadata = {
  title: "Work",
  description: workDescription,
  alternates: {
    canonical: "/work",
  },
  openGraph: {
    title: "Work",
    description: workDescription,
    url: "/work",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work",
    description: workDescription,
    images: ["/opengraph-image"],
  },
};

export default function WorkPage() {
  return (
    <main>
      <Section tone="page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
              as="h1"
              eyebrow="Work"
              title="Selected software projects and engineering work."
              description="A broader view of projects across full-stack web development, Android, business-facing frontend work, and AI-enabled software."
            />

            <ActionLink href="/" variant="text" className="mt-8">
              Back to Home
            </ActionLink>
          </div>

          <div className="divide-y divide-border border-y border-border lg:col-span-8">
            {projects.map((project, index) => (
              <article
                key={project.slug}
                className="grid gap-6 py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 lg:py-10"
              >
                <span className="font-mono text-xs text-ink-subtle">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                    {project.eyebrow}
                  </p>

                  <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                      {project.title}
                    </h2>

                    <div className="hidden sm:block">
                      <ActionLink
                        href={`/work/${project.slug}`}
                        variant="text"
                        showArrow
                      >
                        View Project
                      </ActionLink>
                    </div>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                    {project.summary}
                  </p>

                  {project.technologies.length > 0 ? (
                    <ul
                      aria-label={`${project.title} technologies`}
                      className="mt-6 flex flex-wrap gap-2"
                    >
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="rounded-md border border-border-strong bg-accent-soft px-2.5 py-1.5 font-mono text-xs text-accent transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  <div className="mt-6 sm:hidden">
                    <ActionLink
                      href={`/work/${project.slug}`}
                      variant="text"
                      showArrow
                    >
                      View Project
                    </ActionLink>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
