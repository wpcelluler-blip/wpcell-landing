import { allBrandNote, brands, platforms } from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Specialization() {
  return (
    <section
      id="spesialisasi"
      className="border-y border-border bg-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Spesialisasi"
          title="Android & iOS. All Brand."
          description="Menangani berbagai perangkat smartphone Android maupun iOS dari berbagai brand."
        />
        <div className="mx-auto mt-12 grid max-w-3xl gap-5 sm:grid-cols-2">
          {platforms.map((p, i) => (
            <Reveal key={p.id} delay={i * 90} className="h-full">
              <div className="flex h-full items-start gap-4 rounded-3xl border border-border bg-surface p-6 transition hover:border-accent/40">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                  <Icon name={p.icon} className="h-6 w-6" />
                </span>
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {p.label}
                  </h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{p.note}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-2.5">
            {brands.map((brand) => (
              <span
                key={brand}
                className="rounded-full border border-border bg-surface px-4 py-2 font-display text-xs font-bold tracking-wider text-foreground/75 transition hover:border-accent/40 hover:text-accent"
              >
                {brand}
              </span>
            ))}
            <span className="rounded-full border border-accent/40 bg-accent-soft px-4 py-2 font-display text-xs font-bold tracking-wider text-accent">
              {allBrandNote}
            </span>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}