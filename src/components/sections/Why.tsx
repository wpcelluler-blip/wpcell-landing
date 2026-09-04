import { whyPoints } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Why() {
  return (
    <section
      id="kenapa"
      className="border-y border-border bg-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading eyebrow="Keunggulan" title="Why WP CELLULER?" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyPoints.map((w, i) => (
            <Reveal key={w.id} delay={(i % 3) * 80} className="h-full">
              <article className="relative h-full overflow-hidden rounded-3xl border border-border bg-surface p-6 transition hover:border-accent/40">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-1 -top-5 font-display text-[84px] font-bold leading-none text-foreground/[0.045]"
                >
                  {w.number}
                </span>
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon name={w.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-foreground">
                  <span className="mr-2 text-accent">{w.number}</span>
                  {w.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {w.description}
                </p>
              </article>
            </Reveal>
          ))}

          {/* Kartu CTA penutup grid (6 item terisi penuh) */}
          <Reveal delay={160} className="h-full">
            <article className="flex h-full flex-col justify-between rounded-3xl border border-wa/25 bg-wa/[0.07] p-6">
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  Butuh bantuan sekarang?
                </p>
                <p className="mt-2 text-sm leading-6 text-muted">
                  Ceritakan masalah HP Anda, kami bantu carikan solusinya.
                </p>
              </div>
              <CtaLink
                href={whatsappHref}
                variant="whatsapp"
                size="md"
                className="mt-5 self-start"
                track="click_whatsapp"
                trackLabel="why"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Konsultasi via WhatsApp
              </CtaLink>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}