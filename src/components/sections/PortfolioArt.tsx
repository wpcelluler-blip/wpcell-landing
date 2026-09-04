import type {
  PortfolioCategory,
  PortfolioImageName,
} from "@/lib/content";

const ART_VARIANTS: Record<
  PortfolioImageName,
  { from: string; to: string; accent: string }
> = {
  iphone13: { from: "#1b2a4a", to: "#0e1830", accent: "#67e8f9" },
  galaxya52: { from: "#23314d", to: "#101a2e", accent: "#a78bfa" },
  redminote11: { from: "#17404d", to: "#0e2a33", accent: "#2dd4bf" },
  iphone11: { from: "#3a2340", to: "#221028", accent: "#f472b6" },
};

/**
 * Placeholder art generik (module). Nanti dapat diganti dengan foto asli
 * per item tanpa mengubah layout card (PRD §14 & §26).
 */
export function PortfolioArt({
  image,
  device,
  problem,
  categories,
}: {
  image: PortfolioImageName;
  device: string;
  problem: string;
  categories: PortfolioCategory[];
}) {
  const v = ART_VARIANTS[image];
  return (
    <div
      className="relative h-44 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${v.from}, ${v.to})`,
      }}
    >
      <div
        aria-hidden="true"
        className="bg-grid absolute inset-0 opacity-40"
      />
      <svg
        viewBox="0 0 200 176"
        className="absolute inset-0 h-full w-full"
        role="img"
        aria-label={`Placeholder ilustrasi ${device} — masalah ${problem}`}
      >
        {/* Circuit traces */}
        <g stroke={`${v.accent}55`} strokeWidth="1.2" fill="none">
          <path d="M20 30h24l12 20v30" />
          <path d="M180 26v28l-14 16" />
          <path d="M16 150h22l14-16v-20" />
          <path d="M184 148h-30l-10-14" />
        </g>
        <g fill={v.accent} opacity="0.7">
          <circle cx="20" cy="30" r="2.5" />
          <circle cx="180" cy="26" r="2.5" />
          <circle cx="16" cy="150" r="2.5" />
          <circle cx="184" cy="148" r="2.5" />
        </g>

        {/* Phone */}
        <g transform="translate(70 24)">
          <rect
            x="0"
            y="0"
            width="60"
            height="128"
            rx="12"
            fill="#0b1220"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="1.5"
          />
          <rect
            x="4"
            y="4"
            width="52"
            height="120"
            rx="9"
            fill="#0e1830"
          />
          <rect x="22" y="8" width="16" height="6" rx="3" fill="#0b1220" />

          {/* Motherboard chip */}
          <rect
            x="15"
            y="42"
            width="30"
            height="30"
            rx="6"
            fill={v.accent}
            opacity="0.9"
          />
          <g stroke="rgba(255,255,255,0.5)" strokeWidth="1">
            <path d="M19 44v-8M27 44v-8M35 44v-8" />
            <path d="M19 70v8M27 70v8M35 70v8" />
          </g>
          {/* status */}
          <circle cx="12" cy="98" r="3" fill="#25d366" />
          <path
            d="M18 98h2l4-6v12l4-6"
            fill="none"
            stroke="#a5f3c0"
            strokeWidth="1.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <rect
            x="36"
            y="94"
            width="16"
            height="7"
            rx="3.5"
            fill="rgba(255,255,255,0.1)"
          />
        </g>

        {/* Screwdriver deco */}
        <g stroke={v.accent} strokeWidth="2" strokeLinecap="round" opacity="0.8">
          <path d="M148 40l18 18M150 38l-6 2 8 6-2 6" />
        </g>
      </svg>
      <div className="absolute left-3 top-3 flex flex-wrap gap-1">
        {categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-white/15 bg-ink-950/60 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white/75 backdrop-blur"
          >
            {c}
          </span>
        ))}
      </div>
      <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between gap-2">
        <span className="truncate font-display text-xs font-bold text-white/90">
          {device}
        </span>
        <span className="shrink-0 text-[9px] font-medium uppercase tracking-wider text-white/60">
          {problem}
        </span>
      </div>
    </div>
  );
}