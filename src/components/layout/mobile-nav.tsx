"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls="mobile-navigation"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setOpen((current) => !current)}
        className="inline-flex size-11 items-center justify-center rounded-md border border-border-strong text-ink transition-colors duration-200 hover:bg-surface-muted"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" strokeWidth={1.8} />
        ) : (
          <Menu aria-hidden="true" className="size-5" strokeWidth={1.8} />
        )}
      </button>

      {open ? (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-page"
        >
          <div className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <div className="grid">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="border-b border-border py-3 text-sm font-medium text-ink-muted transition-colors duration-200 last:border-b-0 hover:text-ink"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="https://github.com/shahilkhan001"
                target="_blank"
                rel="noreferrer"
                onClick={closeMenu}
                className="pt-3 text-sm font-medium text-ink-muted transition-colors duration-200 hover:text-ink"
              >
                GitHub
              </a>
            </div>
          </div>
        </nav>
      ) : null}
    </div>
  );
}
