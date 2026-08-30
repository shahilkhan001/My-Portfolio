/* eslint-disable @next/next/no-html-link-for-pages -- Native homepage anchors intentionally preserve repeat-scroll behavior. */
import { ActionLink } from "@/components/ui/action-link";
import { Container } from "@/components/ui/container";
import { MobileNav } from "@/components/layout/mobile-nav";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export function SiteHeader() {
  return (
    <header className="relative sticky top-0 z-50 border-b border-border bg-page">
      <Container className="flex min-h-18 items-center justify-between gap-6">
        <a
          href="/#top"
          className="shrink-0 font-mono text-sm font-semibold tracking-[-0.02em] text-ink"
          aria-label="Mohammad Shahil Khan — Home"
        >
          MSK
        </a>

        <nav
          aria-label="Primary navigation"
          className="hidden items-center gap-7 lg:flex"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href="https://github.com/shahilkhan001"
            target="_blank"
            rel="noreferrer"
            className="hidden min-h-11 items-center rounded-md px-3 text-sm font-medium text-ink-muted transition-colors duration-200 hover:bg-surface-muted hover:text-ink lg:inline-flex"
          >
            GitHub
          </a>

          <ActionLink
            href="/resume"
            variant="text"
            className="hidden px-2 lg:inline-flex"
          >
            Resume
          </ActionLink>

          <MobileNav />

          <ActionLink href="/#contact" variant="secondary">
            Contact
          </ActionLink>
        </div>
      </Container>
    </header>
  );
}
