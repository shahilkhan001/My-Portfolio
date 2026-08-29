import type { AnchorHTMLAttributes, ReactNode } from "react";
import Link, { type LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";

type ActionVariant = "primary" | "secondary" | "text";

type ActionLinkProps = LinkProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    children: ReactNode;
    variant?: ActionVariant;
    external?: boolean;
    showArrow?: boolean;
  };

const variantClasses: Record<ActionVariant, string> = {
  primary:
    "bg-ink text-ink-inverse hover:bg-accent focus-visible:outline-accent",
  secondary:
    "border border-border-strong bg-transparent text-ink hover:border-ink hover:bg-surface",
  text: "text-ink hover:text-accent",
};

export function ActionLink({
  children,
  className = "",
  variant = "primary",
  external = false,
  showArrow = false,
  href,
  ...props
}: ActionLinkProps) {
  const sharedClasses =
    variant === "text"
      ? "inline-flex min-h-11 items-center gap-2 font-medium transition-colors duration-200"
      : "inline-flex min-h-11 items-center justify-center gap-2 rounded-md px-5 py-2.5 font-medium transition-colors duration-200";

  const classes = `${sharedClasses} ${variantClasses[variant]} ${className}`;
  const content = (
    <>
      <span>{children}</span>
      {showArrow ? (
        <ArrowUpRight aria-hidden="true" className="size-4" strokeWidth={1.8} />
      ) : null}
    </>
  );

  if (typeof href === "string" && href.startsWith("/#")) {
    return (
      <a className={classes} href={href} {...props}>
        {content}
      </a>
    );
  }

  return (
    <Link
      className={classes}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      {...props}
    >
      {content}
    </Link>
  );
}
