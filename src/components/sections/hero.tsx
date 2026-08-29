import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="border-b border-border bg-page">
      <Container className="grid min-h-[calc(100svh-4.5rem)] items-center gap-16 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-9 xl:col-span-8">
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            <span>{profile.name}</span>
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
            <span>{profile.location}</span>
          </div>

          <h1 className="max-w-5xl text-5xl font-semibold tracking-[-0.055em] text-ink sm:text-6xl lg:text-7xl xl:text-[5.5rem] xl:leading-[0.98]">
            {profile.headline}
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-8 text-ink-muted sm:text-2xl sm:leading-9">
            {profile.supportingLine}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink href="/#work">
              View Selected Work
            </ActionLink>

            <ActionLink href="/#contact" variant="secondary">
              Contact
            </ActionLink>

            <ActionLink
              href={profile.github}
              variant="text"
              external
              showArrow
            >
              GitHub
            </ActionLink>
          </div>
        </div>

        <aside className="border-t border-border pt-6 lg:col-span-3 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0 xl:col-start-10">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-ink-subtle">
            Current focus
          </p>
          <p className="mt-4 text-sm leading-7 text-ink-muted">
            {profile.availability}
          </p>
        </aside>
      </Container>
    </section>
  );
}
