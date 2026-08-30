import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <main>
      <Section tone="page">
        <div className="grid min-h-[58vh] items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
              404
            </p>
          </div>

          <div className="lg:col-span-8">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-ink sm:text-5xl lg:text-6xl">
              This page could not be found.
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-8 text-ink-muted sm:text-lg">
              The link may be outdated, or the page may have moved. You can
              return home or continue exploring the project work.
            </p>

            <div className="mt-8 flex flex-wrap gap-5">
              <ActionLink href="/" variant="primary">
                Back to Home
              </ActionLink>

              <ActionLink href="/work" variant="text" showArrow>
                View Work
              </ActionLink>
            </div>
          </div>
        </div>
      </Section>
    </main>
  );
}
