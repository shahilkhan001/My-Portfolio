import Image from "next/image";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { profile } from "@/content/profile";
import { profilePhoto } from "@/lib/profile-photo";

const heroDisplay = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["600"],
  display: "swap",
});

export function Hero() {
  return (
    <section id="top" className="border-b border-border bg-page">
      <Container className="grid min-h-[calc(100svh-4.5rem)] items-center gap-16 py-20 lg:grid-cols-12 lg:py-28">
        <div className="lg:col-span-9 xl:col-span-8">
          <div className="mb-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.14em] text-ink-muted">
            <span>{profile.name}</span>
            <span aria-hidden="true" className="text-border-strong">
              /
            </span>
            <span>{profile.location}</span>
          </div>

          <h1
            className={`${heroDisplay.className} max-w-5xl text-[2.75rem] font-semibold leading-[1.03] tracking-[-0.04em] text-ink sm:text-[3.5rem] lg:text-[4.25rem] xl:text-[4.75rem] xl:leading-[1]`}
          >
            <span className="block">Software Engineer &amp;</span>
            <span className="block">Full-Stack Developer</span>
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
          <div className="mb-7 w-36 overflow-hidden rounded-sm sm:w-40 lg:w-full lg:max-w-[168px]">
            <div className="relative aspect-square">
              <Image
                src={profilePhoto.src}
                alt={profilePhoto.alt}
                fill
                unoptimized
                sizes="180px"
                className="object-cover object-top"
              />
            </div>
          </div>

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
