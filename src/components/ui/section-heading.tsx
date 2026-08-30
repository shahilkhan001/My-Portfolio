type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  as?: "h1" | "h2";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
  as: Heading = "h2",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <Heading className="text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl">
        {title}
      </Heading>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
