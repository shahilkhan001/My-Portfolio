import type { Metadata } from "next";
import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected software projects by Mohammad Shahil Khan across full-stack web development, Android, and AI-enabled applications.",
};

export default function WorkPage() {
  return (
    <main>
      <Section tone="page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeading
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
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                    {project.eyebrow}
                  </p>

                  <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
                    <h2 className="text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                      {project.title}
                    </h2>

                    <ActionLink
                      href={`/work/${project.slug}`}
                      variant="text"
                      showArrow
                    >
                      View Project
                    </ActionLink>
                  </div>

                  <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
                    {project.summary}
                  </p>

                  {project.technologies.length > 0 ? (
                    <ul
                      aria-label={`${project.title} technologies`}
                      className="mt-6 flex flex-wrap gap-x-4 gap-y-2"
                    >
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="font-mono text-xs text-ink-subtle"
                        >
                          {technology}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </main>
  );
}
