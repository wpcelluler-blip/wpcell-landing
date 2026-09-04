import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";
import { HeroVisual } from "./HeroVisual";

const trustItems = [
  "Trusted Since 2014",
  "Android & iOS",
  "All Brand",
  "Servis • Sparepart • Aksesoris",
];

export function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-40"
    >
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute -top-32 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute bottom-0 right-0 h-[380px] w-[380px] rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <Container className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-border bg-surface-2 px-3.5 py-1.5 text-xs font-semibold tracking-wide text-accent">
              <Icon name="wrench" className="h-3.5 w-3.5" />
              Trusted Since {site.established} — {site.city}
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-balance font-display text-4xl font-bold tracking-tight leading-[1.06] text-foreground sm:text-5xl md:text-6xl">
              Your Best Partner for{" "}
              <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
                Mobile Phone Repair
              </span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Servis smartphone Android &amp; iOS dengan pengalaman sejak{" "}
              {site.established}. WP CELLULER membantu menangani berbagai
              kebutuhan perbaikan smartphone, sparepart, dan aksesoris.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <CtaLink
                href={whatsappHref}
                variant="whatsapp"
                size="lg"
                track="click_whatsapp"
                trackLabel="hero"
              >
                <WhatsAppIcon className="h-[18px] w-[18px]" />
                Konsultasi via WhatsApp
              </CtaLink>
              <CtaLink href="#layanan" variant="outline" size="lg">
                Lihat Layanan
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2.5 text-sm font-medium text-muted">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-accent" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="hidden lg:block">
          <HeroVisual />
        </Reveal>
      </Container>
    </section>
  );
}