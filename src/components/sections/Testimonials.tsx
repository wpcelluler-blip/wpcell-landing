import { testimonials } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Testimonials() {
  return (
    <section
      id="testimoni"
      className="py-20 md:py-28"
      aria-labelledby="testimoni-heading"
    >
      <Container>
        <SectionHeading
          eyebrow="Testimoni"
          title="Trusted by Our Customers"
          description="Pengalaman pelanggan setelah menggunakan layanan WP CELLULER."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 90} className="h-full">
              <figure className="flex h-full flex-col rounded-3xl border border-dashed border-border bg-surface p-6">
                {t.placeholder ? (
                  <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-amber-300/30 bg-amber-300/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-300">
                    Placeholder — ganti dengan testimoni asli
                  </span>
                ) : null}
                <div
                  className="mt-4 flex gap-1 text-lg text-accent"
                  role="img"
                  aria-label={`Rating ${t.rating} dari 5 bintang`}
                >
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="mt-3 flex-1 text-sm leading-6 text-foreground/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-border pt-4">
                  <p className="font-display text-sm font-semibold text-foreground">
                    {t.name}
                  </p>
                  <p className="mt-0.5 text-xs text-muted">{t.service}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}