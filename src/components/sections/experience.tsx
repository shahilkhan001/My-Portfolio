import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { experiences } from "@/content/experience";

export function ExperienceSection() {
  return (
    <Section id="experience" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Experience"
            title="Technical work beyond personal projects."
            description="Task-based engineering and evaluation work involving real repositories, validation workflows, and implementation review."
            className="[&_h2]:text-ink-inverse [&_p:last-child]:text-zinc-400"
          />
        </div>

        <div className="lg:col-span-8">
          {experiences.map((experience) => (
            <article
              key={`${experience.organization}-${experience.role}`}
              className="border-y border-border-dark py-8 sm:py-10"
            >
              <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-start">
                <div>
                  <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
                    {experience.organization}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-ink-inverse sm:text-3xl">
                    {experience.role}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-zinc-400">
                    {experience.arrangement}
                  </p>
                </div>

                <p className="font-mono text-xs text-zinc-500">
                  {experience.period}
                </p>
              </div>

              <p className="mt-8 max-w-3xl text-base leading-7 text-zinc-300 sm:text-lg sm:leading-8">
                {experience.summary}
              </p>

              <ul className="mt-8 grid gap-4 border-t border-border-dark pt-6 sm:grid-cols-3">
                {experience.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-sm leading-6 text-zinc-400"
                  >
                    {highlight}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
