import type { AnchorHTMLAttributes, ReactNode } from "react";

type CtaVariant = "primary" | "whatsapp" | "outline" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background";

const variants: Record<CtaVariant, string> = {
  primary:
    "bg-accent text-white hover:bg-accent-hover hover:shadow-[0_8px_24px_-6px_rgba(37,99,235,0.5)]",
  whatsapp:
    "bg-wa text-white hover:brightness-110 hover:shadow-[0_0_28px_-6px_rgba(37,211,102,0.55)]",
  outline:
    "border border-border text-foreground hover:border-accent/70 hover:text-accent",
  ghost: "text-foreground/70 hover:text-foreground",
};

const sizes = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-12 px-7 text-[15px]",
};

export interface CtaLinkProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "href"> {
  variant?: CtaVariant;
  size?: keyof typeof sizes;
  className?: string;
  /** Nama event analytics (di-set via data-track). */
  track?: string;
  trackLabel?: string;
  href?: string;
  children: ReactNode;
}

export function CtaLink({
  variant = "primary",
  size = "md",
  className = "",
  track,
  trackLabel,
  href,
  children,
  target,
  rel,
  ...rest
}: CtaLinkProps) {
  const external = href ? /^https?:\/\//.test(href) : false;
  return (
    <a
      href={href}
      target={external ? target ?? "_blank" : target}
      rel={external ? rel ?? "noopener noreferrer" : rel}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      data-track={track}
      data-track-label={trackLabel}
      {...rest}
    >
      {children}
    </a>
  );
}