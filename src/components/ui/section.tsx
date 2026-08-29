import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Container } from "@/components/ui/container";

type SectionTone = "page" | "surface" | "muted" | "dark";

type SectionProps = ComponentPropsWithoutRef<"section"> & {
  children: ReactNode;
  tone?: SectionTone;
  containerClassName?: string;
};

const toneClasses: Record<SectionTone, string> = {
  page: "bg-page text-ink",
  surface: "bg-surface text-ink",
  muted: "bg-surface-muted text-ink",
  dark: "bg-surface-dark text-ink-inverse",
};

export function Section({
  children,
  className = "",
  containerClassName = "",
  tone = "page",
  ...props
}: SectionProps) {
  return (
    <section
      className={`py-20 sm:py-24 lg:py-32 ${toneClasses[tone]} ${className}`}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
