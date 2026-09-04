import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  const center = align === "center";
  return (
    <div className={`max-w-2xl ${center ? "mx-auto text-center" : "text-left"} ${className}`}>
      {eyebrow ? (
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-balance font-display text-3xl font-bold tracking-tight leading-[1.12] text-foreground sm:text-4xl md:text-[2.6rem]">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-7 text-muted sm:text-lg">{description}</p>
      ) : null}
    </div>
  );
}