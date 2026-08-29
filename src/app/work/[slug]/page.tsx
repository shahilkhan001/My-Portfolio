import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";
import { projects } from "@/content/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const projectIndex = projects.findIndex((item) => item.slug === slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const previousProject =
    projectIndex > 0 ? projects[projectIndex - 1] : undefined;
  const nextProject =
    projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : undefined;

  return (
    <main>
      <Section tone="page">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <ActionLink href="/work" variant="text">
              Back to Work
            </ActionLink>

            <p className="mt-12 font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
              {project.eyebrow}
            </p>

            <h1 className="mt-5 text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              {project.title}
            </h1>

            {project.technologies.length > 0 ? (
              <ul
                aria-label={`${project.title} technologies`}
                className="mt-8 flex flex-wrap gap-2"
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
          </div>

          <div className="lg:col-span-8">
            <p className="max-w-3xl text-xl leading-9 text-ink-muted sm:text-2xl sm:leading-10">
              {project.summary}
            </p>

            <div className="mt-12 border-t border-border pt-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                Overview
              </p>

              <p className="mt-5 max-w-3xl text-base leading-8 text-ink-muted sm:text-lg">
                {project.description}
              </p>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                Highlights
              </p>

              <ul className="mt-6 grid gap-px border border-border bg-border sm:grid-cols-2">
                {project.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="bg-surface p-6 text-sm leading-7 text-ink-muted sm:p-7"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {project.links.length > 0 ? (
              <div className="mt-12 border-t border-border pt-8">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                  Links
                </p>

                <div className="mt-5 flex flex-wrap gap-5">
                  {project.links.map((link) => (
                    <ActionLink
                      key={link.href}
                      href={link.href}
                      variant="text"
                      external
                      showArrow
                    >
                      {link.label}
                    </ActionLink>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </Section>

      <Section tone="muted" className="border-t border-border">
        <nav
          aria-label="Project navigation"
          className="grid gap-8 sm:grid-cols-2"
        >
          <div>
            {previousProject ? (
              <>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  Previous Project
                </p>
                <ActionLink
                  href={`/work/${previousProject.slug}`}
                  variant="text"
                  className="mt-3 text-lg"
                >
                  {previousProject.title}
                </ActionLink>
              </>
            ) : null}
          </div>

          <div className="sm:text-right">
            {nextProject ? (
              <>
                <p className="font-mono text-xs uppercase tracking-[0.14em] text-ink-subtle">
                  Next Project
                </p>
                <ActionLink
                  href={`/work/${nextProject.slug}`}
                  variant="text"
                  showArrow
                  className="mt-3 text-lg"
                >
                  {nextProject.title}
                </ActionLink>
              </>
            ) : null}
          </div>
        </nav>
      </Section>
    </main>
  );
}
