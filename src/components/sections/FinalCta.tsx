import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="bg-grid absolute inset-0 opacity-60" />
        <div className="absolute left-1/2 top-1/2 h-[380px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-[120px]" />
      </div>

      <Container className="text-center">
        <Reveal>
          <h2 className="mx-auto max-w-2xl text-balance font-display text-3xl font-bold tracking-tight leading-tight text-foreground sm:text-4xl md:text-5xl">
            Your Phone Deserves the{" "}
            <span className="bg-gradient-to-r from-accent to-sky-400 bg-clip-text text-transparent">
              Right Solution.
            </span>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-muted sm:text-lg">
            Konsultasikan masalah smartphone Anda dengan WP CELLULER.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <CtaLink
              href={whatsappHref}
              variant="whatsapp"
              size="lg"
              track="click_whatsapp"
              trackLabel="final_cta"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Konsultasi via WhatsApp
            </CtaLink>
            <CtaLink
              href={site.mapsUrl}
              variant="outline"
              size="lg"
              track="click_maps"
              trackLabel="final_cta"
            >
              <Icon name="map" className="h-[18px] w-[18px]" />
              Kunjungi Toko
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}