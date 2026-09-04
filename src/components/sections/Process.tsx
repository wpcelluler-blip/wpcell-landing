import { processSteps } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Process() {
  return (
    <section id="proses" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Proses Servis"
          title="Simple. Transparent. Professional."
          description="Lima langkah yang dijalankan untuk setiap perangkat yang ditangani WP CELLULER."
        />
        <ol className="mt-12 grid gap-5 md:grid-cols-5">
          {processSteps.map((step, i) => (
            <Reveal key={step.number} delay={i * 80} className="h-full">
              <li className="relative h-full rounded-3xl border border-border bg-surface p-6 transition hover:border-accent/40">
                <p className="font-display text-sm font-bold uppercase tracking-[0.2em] text-accent">
                  Step {step.number}
                </p>
                <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-muted">
                  {step.description}
                </p>
                {i < processSteps.length - 1 ? (
                  <span
                    aria-hidden="true"
                    className="absolute -right-4 top-1/2 hidden h-px w-8 -translate-y-1/2 bg-gradient-to-r from-border to-transparent md:block"
                  />
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}