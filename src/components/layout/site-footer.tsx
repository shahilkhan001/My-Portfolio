/* eslint-disable @next/next/no-html-link-for-pages -- Native anchors intentionally preserve repeated same-page hash navigation. */
import { MapPin } from "lucide-react";
import { siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-page">
      <div className="mx-auto grid w-full max-w-[1280px] gap-8 px-6 py-10 sm:grid-cols-2 sm:items-center sm:px-8 lg:px-10 lg:py-12">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[-0.02em] text-ink">
            Mohammad Shahil Khan
          </p>

          <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">
            Software Engineer &amp; Full-Stack Developer building practical web,
            Android, and AI-enabled software.
          </p>

          <p className="mt-2 flex items-start gap-2 text-sm leading-6 text-ink-subtle">
            <MapPin
              aria-hidden="true"
              className="mt-1 size-4 shrink-0 text-accent"
              strokeWidth={1.8}
            />
            <span>
              Maharajganj, Uttar Pradesh, India · Open to Remote &amp; Relocation
            </span>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted sm:justify-end">
          <a
            href="/#contact"
            className="transition-colors duration-200 hover:text-ink"
          >
            Contact
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-ink"
          >
            LinkedIn
          </a>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
