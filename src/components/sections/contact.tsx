import { ActionLink } from "@/components/ui/action-link";
import { ContactForm } from "@/components/sections/contact-form";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <Section id="contact" tone="dark" spacing="compact" className="scroll-mt-[4.5rem]">
      <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Contact
          </p>

          <h2 className="mt-4 max-w-2xl text-4xl font-semibold tracking-[-0.045em] text-ink-inverse sm:text-5xl lg:text-5xl">
            Let&apos;s talk about the work that needs to be built.
          </h2>

          <p className="mt-4 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
            {profile.availability}
          </p>

          <div className="mt-8 border-t border-border-dark pt-6">
            <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
              Prefer direct contact?
            </p>

            <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">
              Reach me directly through any of these channels.
            </p>

            <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3">
              <ActionLink
                href={`mailto:${profile.email}`}
                variant="text"
                className="text-ink-inverse hover:text-accent"
              >
                Email
              </ActionLink>

              <ActionLink
                href={profile.linkedin}
                variant="text"
                external
                showArrow
                className="text-ink-inverse hover:text-accent"
              >
                LinkedIn
              </ActionLink>

              <ActionLink
                href={profile.github}
                variant="text"
                external
                showArrow
                className="text-ink-inverse hover:text-accent"
              >
                GitHub
              </ActionLink>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 lg:border-l lg:border-border-dark lg:pl-12">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Send a message
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">
            Share a little context about the opportunity, project, or technical
            work you&apos;d like to discuss.
          </p>

          <div className="mt-7 border-t border-border-dark pt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </Section>
  );
}
