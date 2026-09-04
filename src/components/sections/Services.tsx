import { services } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Services() {
  return (
    <section id="layanan" className="scroll-mt-20 py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Layanan"
          title="Everything Your Phone Needs"
          description="Tiga layanan utama WP CELLULER: servis, sparepart, dan aksesoris untuk perangkat Android maupun iOS."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={i * 90} className="h-full">
              <article className="group h-full rounded-3xl border border-border bg-surface p-7 transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:bg-surface-2">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent transition group-hover:bg-accent/20">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <CtaLink
              href={whatsappHref}
              variant="primary"
              size="lg"
              track="click_whatsapp"
              trackLabel="services"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Konsultasikan Kebutuhan Anda
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}