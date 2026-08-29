import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredProjects } from "@/content/projects";

export function SelectedWork() {
  return (
    <Section id="work" tone="surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Selected Work"
            title="Projects built around real product and engineering problems."
            description="A focused selection across full-stack web development, Android, and practical business-facing software."
          />
        </div>

        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.slug}
              className="grid gap-6 py-8 first:pt-0 last:pb-0 sm:grid-cols-[auto_1fr] sm:gap-8 lg:py-10"
            >
              <span className="font-mono text-xs text-ink-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink sm:text-3xl">
                      {project.title}
                    </h3>
                  </div>

                  <ActionLink
                    href={`/work/${project.slug}`}
                    variant="text"
                    showArrow
                  >
                    Case Study
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
  );
}
