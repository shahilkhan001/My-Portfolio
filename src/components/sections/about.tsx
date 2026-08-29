import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { education } from "@/content/education";
import { profile } from "@/content/profile";

export function AboutSection() {
  return (
    <Section id="about" tone="surface">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="About"
            title="Software engineering shaped by hands-on building."
            description="A broad foundation across full-stack web development, Android applications, and practical AI-enabled integrations."
          />
        </div>

        <div className="lg:col-span-8">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="space-y-5">
                {profile.about.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-ink-muted sm:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="mt-8 border-t border-border pt-6">
                <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
                  Location
                </p>
                <p className="mt-3 text-sm leading-6 text-ink-muted">
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="border-t border-border pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
              <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
                Education
              </p>

              {education.map((item) => (
                <article key={`${item.institution}-${item.period}`} className="mt-6">
                  <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink">
                    {item.qualification}
                  </h3>

                  <p className="mt-2 text-base font-medium text-ink">
                    {item.field}
                  </p>

                  <p className="mt-4 text-sm leading-6 text-ink-muted">
                    {item.institution}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 font-mono text-xs text-ink-subtle">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                  </div>

                  {item.details ? (
                    <ul className="mt-6 space-y-3 border-t border-border pt-5">
                      {item.details.map((detail) => (
                        <li
                          key={detail}
                          className="text-sm leading-6 text-ink-muted"
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
