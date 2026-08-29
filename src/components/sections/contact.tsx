import { ActionLink } from "@/components/ui/action-link";
import { Section } from "@/components/ui/section";
import { profile } from "@/content/profile";

export function ContactSection() {
  return (
    <Section id="contact" tone="dark">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-accent">
            Contact
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.045em] text-ink-inverse sm:text-5xl lg:text-6xl">
            Let&apos;s talk about the work that needs to be built.
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            {profile.availability}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <ActionLink
              href={`mailto:${profile.email}`}
              className="bg-ink-inverse text-ink hover:bg-accent hover:text-white"
            >
              Email Me
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
          </div>
        </div>

        <div className="lg:col-span-5 lg:border-l lg:border-border-dark lg:pl-10">
          <p className="font-mono text-xs font-medium uppercase tracking-[0.14em] text-zinc-500">
            Direct
          </p>

          <dl className="mt-6 divide-y divide-border-dark border-y border-border-dark">
            <div className="py-5">
              <dt className="font-mono text-xs text-zinc-500">Email</dt>
              <dd className="mt-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-sm text-zinc-300 transition-colors duration-200 hover:text-white"
                >
                  {profile.email}
                </a>
              </dd>
            </div>

            <div className="py-5">
              <dt className="font-mono text-xs text-zinc-500">LinkedIn</dt>
              <dd className="mt-2">
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 transition-colors duration-200 hover:text-white"
                >
                  Mohammad Shahil Khan
                </a>
              </dd>
            </div>

            <div className="py-5">
              <dt className="font-mono text-xs text-zinc-500">GitHub</dt>
              <dd className="mt-2">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-zinc-300 transition-colors duration-200 hover:text-white"
                >
                  shahilkhan001
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </Section>
  );
}
