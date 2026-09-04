"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";
import { whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-20 py-20 md:py-28">
      <Container className="max-w-3xl">
        <SectionHeading
          eyebrow="FAQ"
          title="Pertanyaan yang Sering Diajukan"
        />
        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => {
            const open = openIndex === i;
            return (
              <div
                key={f.question}
                className={`rounded-2xl border transition-colors ${
                  open
                    ? "border-accent/40 bg-surface-2"
                    : "border-border bg-surface"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(open ? null : i)}
                    aria-expanded={open}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-trigger-${i}`}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left"
                  >
                    <span className="text-sm font-semibold text-foreground sm:text-base">
                      {f.question}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-transform duration-300 ${
                        open
                          ? "rotate-45 border-accent/50 text-accent"
                          : "border-border text-foreground/60"
                      }`}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-4 w-4"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                      >
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  hidden={!open}
                >
                  <p className="px-5 pb-5 text-sm leading-6 text-muted">
                    {f.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Punya pertanyaan lain?{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-track="click_whatsapp"
            data-track-label="faq"
            className="font-semibold text-accent transition hover:text-accent-hover"
          >
            Tanyakan langsung via WhatsApp
          </a>
        </p>
      </Container>
    </section>
  );
}