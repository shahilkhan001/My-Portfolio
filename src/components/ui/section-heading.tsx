type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`max-w-3xl ${className}`}>
      {eyebrow ? (
        <p className="mb-4 font-mono text-xs font-medium uppercase tracking-[0.16em] text-accent">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="text-3xl font-semibold tracking-[-0.035em] text-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      {description ? (
        <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted sm:text-lg sm:leading-8">
          {description}
        </p>
      ) : null}
    </div>
  );
}
