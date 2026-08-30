import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { certifications } from "@/content/certifications";

export function CertificationsSection() {
  return (
    <Section
      id="certifications"
      tone="muted"
      spacing="compact"
      className="scroll-mt-[4.5rem] border-t border-border"
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
            Certifications
          </p>

          <h2 className="mt-4 max-w-md text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            Selected credentials supporting my software development foundation.
          </h2>

          <p className="mt-5 max-w-md text-base leading-7 text-ink-muted">
            Focused coursework across Android development, Kotlin, C++,
            algorithms, and core programming concepts.
          </p>
        </div>

        <div className="divide-y divide-border border-y border-border lg:col-span-8">
          {certifications.map((certification, index) => (
            <article
              key={certification.title}
              className="grid gap-4 py-5 sm:grid-cols-[2.5rem_1fr_auto] sm:items-center sm:gap-6 lg:py-6"
            >
              <span className="font-mono text-xs text-ink-subtle">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div>
                <h3 className="text-lg font-semibold tracking-[-0.025em] text-ink sm:text-xl">
                  {certification.title}
                </h3>

                <p className="mt-2 font-mono text-xs text-ink-subtle">
                  {certification.issuer} · {certification.date}
                </p>
              </div>

              <a
                href={certification.credentialUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex min-h-11 items-center gap-2 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-accent sm:justify-self-end"
              >
                View Credential
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4"
                  strokeWidth={1.8}
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
