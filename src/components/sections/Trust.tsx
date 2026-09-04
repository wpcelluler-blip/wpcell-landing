import { site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

const TARGET_YEAR = 2026;
const YEARS = TARGET_YEAR - site.established;

export function Trust() {
  return (
    <section
      aria-labelledby="trust-heading"
      className="border-y border-border bg-alt py-16 md:py-20"
    >
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <Reveal>
          <div className="max-w-lg">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              Kepercayaan
            </p>
            <h2
              id="trust-heading"
              className="mt-3 text-balance font-display text-3xl font-bold tracking-tight leading-tight text-foreground sm:text-4xl"
            >
              Trusted Since {site.established}
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Berpengalaman melayani kebutuhan smartphone masyarakat{" "}
              {site.city} sejak {site.established}.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-border bg-surface p-8 text-center shadow-xl shadow-black/5">
            <p className="font-display text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              <span className="text-accent">{site.established}</span>
              <span className="mx-3 inline-block text-2xl text-muted sm:text-3xl">
                →
              </span>
              {TARGET_YEAR}
            </p>
            <div className="mx-auto mt-6 h-px w-16 bg-gradient-to-r from-transparent via-accent/60 to-transparent" />
            <p className="mt-6 font-display text-xl font-bold uppercase tracking-[0.18em] text-foreground">
              {YEARS}+ Years
            </p>
            <p className="mt-1 text-sm font-medium uppercase tracking-[0.3em] text-muted">
              of experience
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}