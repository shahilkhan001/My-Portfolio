import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { capabilities } from "@/content/capabilities";

export function CapabilitiesSection() {
  return (
    <Section id="capabilities" tone="page">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <SectionHeading
            eyebrow="Capabilities"
            title="A practical engineering toolkit across web, mobile, and integrations."
            description="The technologies and workflows I use to move from interface work through backend logic, mobile development, and external service integration."
          />
        </div>

        <div className="border-t border-border lg:col-span-8">
          {capabilities.map((capability, index) => (
            <article
              key={capability.title}
              className="grid gap-6 border-b border-border py-8 sm:grid-cols-[3rem_1fr] sm:gap-8 lg:py-10"
            >
              <span className="font-mono text-xs text-ink-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                  {capability.title}
                </h3>

                <p className="mt-4 max-w-2xl text-base leading-7 text-ink-muted">
                  {capability.description}
                </p>

                <ul
                  aria-label={`${capability.title} skills`}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {capability.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border-strong bg-accent-soft px-2.5 py-1.5 font-mono text-xs text-accent transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-white"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
