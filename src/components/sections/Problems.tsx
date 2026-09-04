import { problems } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon, WhatsAppIcon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Problems() {
  return (
    <section id="masalah" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Masalah Umum"
          title="HP Bermasalah? Kami Bantu Cari Solusinya."
          description="Masalah umum yang sering ditangani teknisi WP CELLULER. Tidak menemukan masalah Anda? Konsultasikan langsung."
        />
        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {problems.map((p, i) => (
            <Reveal key={p.id} delay={(i % 4) * 60} className="h-full">
              <div className="flex h-full items-center gap-3 rounded-2xl border border-border bg-surface px-4 py-3.5 transition hover:border-accent/40 hover:bg-surface-2">
                <Icon name={p.icon} className="h-5 w-5 shrink-0 text-accent" />
                <span className="text-sm font-medium text-foreground/85">
                  {p.title}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <div className="mt-10 text-center">
            <CtaLink
              href={whatsappHref}
              variant="whatsapp"
              size="lg"
              track="click_whatsapp"
              trackLabel="problems"
            >
              <WhatsAppIcon className="h-[18px] w-[18px]" />
              Tanyakan Masalah HP Anda
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}