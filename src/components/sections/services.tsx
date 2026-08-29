import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { services } from "@/content/services";

export function ServicesSection() {
  return (
    <Section id="services" tone="muted">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:sticky lg:top-24 lg:col-span-4 lg:self-start">
          <SectionHeading
            eyebrow="Services"
            title="Selected ways I can contribute beyond a full-time role."
            description="Practical development support across web, Android, and API-driven software without turning the portfolio into a sales storefront."
          />
        </div>

        <div className="grid gap-px overflow-hidden border border-border bg-border sm:grid-cols-2 lg:col-span-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="bg-surface p-7 sm:p-8 lg:p-10"
            >
              <p className="font-mono text-xs text-ink-subtle">
                {String(index + 1).padStart(2, "0")}
              </p>

              <h3 className="mt-6 text-xl font-semibold tracking-[-0.025em] text-ink sm:text-2xl">
                {service.title}
              </h3>

              <p className="mt-4 text-base leading-7 text-ink-muted">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
