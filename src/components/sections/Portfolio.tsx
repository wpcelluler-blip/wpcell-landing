"use client";

import { useMemo, useState } from "react";
import {
  portfolio,
  portfolioFilters,
  type PortfolioCategory,
  type PortfolioItem,
} from "@/lib/content";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Icon } from "@/components/ui/icons";
import { PortfolioArt } from "./PortfolioArt";

const FILTER_LABELS: Record<string, string> = {
  all: "ALL",
  ios: "iOS",
  android: "ANDROID",
  hardware: "HARDWARE",
  software: "SOFTWARE",
};

export function Portfolio() {
  const [active, setActive] = useState<"all" | PortfolioCategory>("all");

  const items = useMemo(
    () =>
      active === "all"
        ? portfolio
        : portfolio.filter((p) => p.categories.includes(active)),
    [active]
  );

  return (
    <section
      id="portfolio"
      className="border-y border-border bg-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Portfolio"
          title="Our Work"
          description="Beberapa pekerjaan servis yang telah ditangani WP CELLULER."
        />

        {/* Filter */}
        <div
          className="mt-10 flex flex-wrap justify-center gap-2"
          role="group"
          aria-label="Filter portfolio"
        >
          {portfolioFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              aria-pressed={active === f}
              className={`rounded-full border px-4 py-2 font-display text-xs font-bold tracking-wider transition ${
                active === f
                  ? "border-accent/60 bg-accent-soft text-accent"
                  : "border-border bg-surface text-foreground/60 hover:text-foreground"
              }`}
            >
              {FILTER_LABELS[f]}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted">
          Gambar &amp; data portfolio menggunakan placeholder — dapat diganti
          dengan foto asli tanpa mengubah struktur halaman.
        </p>
      </Container>
    </section>
  );
}

function PortfolioCard({ item }: { item: PortfolioItem }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-border bg-surface transition duration-300 hover:-translate-y-1 hover:border-accent/40">
      <PortfolioArt
        image={item.image}
        device={item.device}
        problem={item.problem}
        categories={item.categories}
      />
      <div className="p-5">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base font-semibold text-foreground">
            {item.device}
          </h3>
          <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-wa/30 bg-wa/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-wa">
            <Icon name="check" className="h-3 w-3" />
            {item.status}
          </span>
        </div>
        <p className="mt-1 text-xs uppercase tracking-wider text-muted">
          {item.problem}
        </p>
        <div className="mt-3 flex items-center gap-2 border-t border-border pt-3">
          <Icon name="wrench" className="h-4 w-4 shrink-0 text-accent" />
          <p className="text-sm font-medium text-foreground/85">{item.solution}</p>
        </div>
      </div>
    </article>
  );
}