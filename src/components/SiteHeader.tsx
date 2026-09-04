"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { navLinks, site, whatsappHref } from "@/lib/site";
import { Container } from "./ui/Container";
import { CtaLink } from "./ui/CtaLink";
import { WhatsAppIcon } from "./ui/icons";
import { ThemeToggle } from "./ui/ThemeToggle";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <div
        className={`transition-all duration-300 ${
          scrolled || open
            ? "border-b border-border bg-background/90 shadow-lg shadow-black/10 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <Container className="flex h-16 items-center justify-between gap-4 md:h-[72px]">
          {/* Logo */}
          <a
            href="#beranda"
            className="flex items-center gap-3"
            aria-label={`${site.brand} — kembali ke beranda`}
          >
            <Image
              src="/logo.jpeg"
              alt={`Logo ${site.brand}`}
              width={40}
              height={40}
              priority
              className="h-10 w-10 shrink-0 rounded-xl object-cover shadow-[0_0_16px_-4px_rgba(34,211,238,0.6)]"
            />
            <span className="flex flex-col leading-none">
              <span className="font-display text-[17px] font-bold tracking-tight text-foreground">
                WP <span className="text-accent">CELLULER</span>
              </span>
              <span className="mt-1 text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
                Repair • Since {site.established}
              </span>
            </span>
          </a>

          {/* Nav desktop */}
          <nav
            className="hidden items-center gap-1 md:flex"
            aria-label="Navigasi utama"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-foreground/70 transition hover:bg-surface-2 hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Theme toggle desktop */}
          <div className="hidden md:block">
            <ThemeToggle />
          </div>

          {/* CTA desktop */}
          <CtaLink
            href={whatsappHref}
            variant="whatsapp"
            size="sm"
            track="click_whatsapp"
            trackLabel="header"
            className="hidden md:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </CtaLink>

          {/* Toggle mobile */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-foreground transition hover:bg-surface-2 md:hidden"
          >
            <span className="sr-only">{open ? "Tutup menu" : "Buka menu"}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" aria-hidden="true">
              {open ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </Container>

        {/* Menu mobile */}
        {open && (
          <div
            id="mobile-menu"
            className="border-t border-border bg-background/95 backdrop-blur-md md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-foreground/85 transition hover:bg-surface-2 hover:text-accent"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-2 flex items-center justify-between gap-3 rounded-xl border border-border px-3.5 py-2.5">
                <span className="text-sm font-medium text-foreground/75">
                  Mode tampilan
                </span>
                <ThemeToggle />
              </div>
              <CtaLink
                href={whatsappHref}
                variant="whatsapp"
                size="md"
                track="click_whatsapp"
                trackLabel="mobile_menu"
                className="mt-2"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Konsultasi via WhatsApp
              </CtaLink>
            </Container>
          </div>
        )}
      </div>
    </header>
  );
}