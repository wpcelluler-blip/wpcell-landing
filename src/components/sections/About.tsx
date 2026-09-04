import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

const highlights = [
  "Servis, sparepart & aksesoris dalam satu tempat",
  "Spesialisasi Android & iOS",
  "Melayani berbagai brand",
];

export function About() {
  return (
    <section id="tentang" className="scroll-mt-20 py-20 md:py-28">
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <AboutVisual />
        </Reveal>
        <Reveal delay={120}>
          <div className="max-w-xl">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Tentang Kami
            </p>
            <h2 className="mt-3 text-balance font-display text-3xl font-bold tracking-tight leading-tight text-foreground sm:text-4xl">
              More Than a Repair Shop
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Sejak {site.established}, WP CELLULER hadir sebagai partner
              masyarakat {site.city} untuk berbagai kebutuhan smartphone. Kami
              melayani servis, sparepart, dan aksesoris untuk perangkat
              Android maupun iOS.
            </p>
            <ul className="mt-6 space-y-2.5">
              {highlights.map((h) => (
                <li key={h} className="flex items-start gap-2.5 text-sm text-foreground/85">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>
            <CtaLink
              href={whatsappHref}
              variant="primary"
              size="lg"
              className="mt-8"
              track="click_whatsapp"
              trackLabel="about"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Hubungi WP CELLULER
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}

function AboutVisual() {
  return (
    <div className="relative mx-auto max-w-lg">
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-3xl border border-border bg-grid opacity-60"
      />
      <div
        aria-hidden="true"
        className="absolute -right-10 -top-10 -z-10 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl"
      />
      <svg
        viewBox="0 0 520 420"
        className="h-auto w-full"
        role="img"
        aria-label="Ilustrasi peralatan dan komponen servis smartphone"
      >
        <defs>
          <linearGradient id="aboard" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#16233c" />
            <stop offset="100%" stopColor="#0e1830" />
          </linearGradient>
          <linearGradient id="acenter" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0e7490" />
          </linearGradient>
        </defs>

        {/* Board */}
        <rect
          x="60"
          y="60"
          width="400"
          height="300"
          rx="24"
          fill="url(#aboard)"
          stroke="rgba(255,255,255,0.12)"
        />
        <g stroke="rgba(148,163,184,0.25)" strokeWidth="1.2" fill="none">
          <path d="M90 120h60M150 130v60M250 240h60M280 120v40" />
          <path d="M120 320h50M400 300v-40M380 200h40" />
        </g>

        {/* Big chip */}
        <rect x="200" y="160" width="120" height="100" rx="14" fill="url(#acenter)" />
        <g stroke="rgba(255,255,255,0.5)" strokeWidth="1.2">
          <path d="M214 166v-12M232 166v-12M250 166v-12M268 166v-12M286 166v-12M304 166v-12" />
          <path d="M214 254v12M232 254v12M250 254v12M268 254v12M286 254v12M304 254v12" />
        </g>
        <rect x="236" y="196" width="48" height="34" rx="4" fill="#0b1220" opacity="0.85" />

        {/* Label */}
        <text
          x="260"
          y="326"
          textAnchor="middle"
          fontFamily="Space Grotesk, sans-serif"
          fontSize="12"
          fontWeight="600"
          letterSpacing="2"
          fill="#8fa3bf"
        >
          DIAGNOSTIC BOARD
        </text>

        {/* Tools */}
        <g stroke="#94a3b8" strokeWidth="3" strokeLinecap="round">
          <path d="M96 258l40-40M100 256l-8 4 8-6 8 8 4-8" />
        </g>
        <g stroke="#25d366" strokeWidth="2.5" strokeLinecap="round">
          <path d="M420 220l-24 8M418 224l-6-8 2 14" />
        </g>
      </svg>
    </div>
  );
}