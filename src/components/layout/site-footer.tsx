import Link from "next/link";
import { Container } from "@/components/ui/container";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-page">
      <Container className="grid gap-8 py-10 sm:grid-cols-2 sm:items-end lg:py-12">
        <div>
          <p className="font-mono text-sm font-semibold tracking-[-0.02em] text-ink">
            Mohammad Shahil Khan
          </p>
          <p className="mt-2 max-w-md text-sm leading-6 text-ink-muted">
            Software Engineer &amp; Full-Stack Developer building practical web,
            Android, and AI-enabled software.
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-ink-muted sm:justify-end">
          <Link
            href="/#work"
            className="transition-colors duration-200 hover:text-ink"
          >
            Work
          </Link>
          <Link
            href="/#contact"
            className="transition-colors duration-200 hover:text-ink"
          >
            Contact
          </Link>
          <a
            href="https://github.com/shahilkhan001"
            target="_blank"
            rel="noreferrer"
            className="transition-colors duration-200 hover:text-ink"
          >
            GitHub
          </a>
        </div>
      </Container>
    </footer>
  );
}
