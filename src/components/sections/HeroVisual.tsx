import { site } from "@/lib/site";
import { WhatsAppIcon } from "@/components/ui/icons";

export function HeroVisual() {
  return (
    <div className="relative mx-auto max-w-[500px]">
      <svg
        viewBox="0 0 520 600"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustrasi motherboard smartphone dengan status servis aktif"
      >
        <defs>
          <linearGradient id="screenGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0e1830" />
            <stop offset="100%" stopColor="#122a4a" />
          </linearGradient>
          <linearGradient id="chipGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
          <radialGradient id="glow" cx="50%" cy="45%" r="55%">
            <stop offset="0%" stopColor="rgba(34,211,238,0.16)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </radialGradient>
          <pattern id="grid" width="28" height="28" patternUnits="userSpaceOnUse">
            <path
              d="M28 0H0V28"
              fill="none"
              stroke="rgba(148,163,184,0.10)"
              strokeWidth="1"
            />
          </pattern>
        </defs>

        <rect x="0" y="0" width="520" height="600" rx="40" fill="url(#glow)" />
        <rect
          x="40"
          y="40"
          width="440"
          height="520"
          rx="24"
          fill="url(#grid)"
          opacity="0.6"
        />

        {/* Circuit traces */}
        <g stroke="rgba(34,211,238,0.35)" strokeWidth="1.5" fill="none">
          <path d="M70 130h60l30 40v120l-20 20" />
          <path d="M450 90v50l-30 30" />
          <path d="M90 500h50l30-30" />
          <path d="M430 480h-50l-20-30" />
        </g>
        <g fill="#22d3ee">
          <circle cx="70" cy="130" r="4" />
          <circle cx="450" cy="90" r="4" />
          <circle cx="90" cy="500" r="4" />
          <circle cx="430" cy="480" r="4" />
        </g>

        {/* Phone */}
        <g transform="translate(160 70)">
          <rect
            x="0"
            y="0"
            width="200"
            height="400"
            rx="30"
            fill="#0b1220"
            stroke="rgba(255,255,255,0.14)"
            strokeWidth="2"
          />
          <rect
            x="10"
            y="10"
            width="180"
            height="380"
            rx="22"
            fill="url(#screenGrad)"
          />
          <rect x="70" y="18" width="60" height="14" rx="7" fill="#0b1220" />

          {/* Screen content */}
          <text
            x="105"
            y="70"
            textAnchor="middle"
            fontFamily="Space Grotesk, sans-serif"
            fontSize="11"
            fontWeight="600"
            letterSpacing="2"
            fill="#8fa3bf"
          >
            SERVICE STATUS
          </text>
          <circle cx="60" cy="66" r="4" fill="#25d366" />
          <text x="70" y="70" fontSize="11" fontWeight="600" fill="#a5f3c0">
            Active
          </text>

          {/* Motherboard chip */}
          <rect
            x="30"
            y="100"
            width="150"
            height="150"
            rx="16"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
          />
          <rect x="60" y="130" width="90" height="90" rx="14" fill="url(#chipGrad)" />
          <g stroke="rgba(255,255,255,0.35)" strokeWidth="1.2">
            <path d="M70 134v-16M82 134v-16M94 134v-16M106 134v-16M118 134v-16M130 134v-16M142 134v-16" />
            <path d="M70 216v16M82 216v16M94 216v16M106 216v16M118 216v16M130 216v16M142 216v16" />
          </g>
          <path d="M105 130v-20" stroke="#22d3ee" strokeWidth="1.5" />
          <circle cx="105" cy="104" r="3.5" fill="#22d3ee" />

          {/* Steps */}
          <g fontFamily="Space Grotesk, sans-serif" fontSize="11" fontWeight="600">
            <rect x="40" y="282" width="80" height="26" rx="13" fill="rgba(34,211,238,0.14)" />
            <text x="80" y="299" textAnchor="middle" fill="#67e8f9">
              Diagnosis
            </text>
            <rect x="128" y="282" width="60" height="26" rx="13" fill="rgba(255,255,255,0.06)" />
            <text x="158" y="299" textAnchor="middle" fill="#8fa3bf">
              Testing
            </text>
          </g>
        </g>
      </svg>

      {/* Floating cards */}
      <div className="absolute left-0 top-6 rounded-2xl border border-border bg-surface/85 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
          Since {site.established}
        </p>
        <p className="font-display text-2xl font-bold text-foreground">
          12+ <span className="text-sm font-medium text-muted">Years</span>
        </p>
      </div>
      <div className="absolute -right-1 bottom-20 flex items-center gap-2.5 rounded-2xl border border-border bg-surface/85 px-4 py-3 shadow-xl shadow-black/10 backdrop-blur">
        <WhatsAppIcon className="h-5 w-5 text-wa" />
        <span className="text-sm font-semibold text-foreground">
          Konsultasi <span className="text-accent">WhatsApp</span>
        </span>
      </div>
      <div className="absolute -bottom-2 left-6 inline-flex items-center gap-2 rounded-full border border-wa/30 bg-wa/10 px-3.5 py-1.5 text-xs font-semibold text-wa">
        <span className="h-1.5 w-1.5 rounded-full bg-wa" />
        Android &amp; iOS
      </div>
    </div>
  );
}