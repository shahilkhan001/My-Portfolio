import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionTone = "page" | "surface" | "muted" | "dark";
type SectionSpacing = "default" | "compact" | "tight" | "detail";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  tone?: SectionTone;
  spacing?: SectionSpacing;
  containerClassName?: string;
};

const toneClasses: Record<SectionTone, string> = {
  page: "bg-page text-ink",
  surface: "bg-surface text-ink",
  muted: "bg-surface-muted text-ink",
  dark: "bg-surface-dark text-ink-inverse",
};

const spacingClasses: Record<SectionSpacing, string> = {
  default: "py-20 sm:py-24 lg:py-32",
  compact: "py-14 sm:py-16 lg:py-20",
  tight: "py-8 sm:py-10 lg:py-12",
  detail: "pt-20 pb-14 sm:pt-24 sm:pb-16 lg:pt-32 lg:pb-20",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "page",
  spacing = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={`${spacingClasses[spacing]} ${toneClasses[tone]} ${className}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
