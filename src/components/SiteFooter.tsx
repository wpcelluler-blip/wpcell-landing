import Image from "next/image";
import { navLinks, site, whatsappHref } from "@/lib/site";
import { Container } from "./ui/Container";
import { Icon } from "./ui/icons";

const serviceLinks = [
  { label: "Servis Smartphone", href: "#layanan" },
  { label: "Sparepart", href: "#layanan" },
  { label: "Aksesoris", href: "#layanan" },
];

export function SiteFooter() {
  return (
    <footer className="relative border-t border-white/5 bg-ink-950">
      <Container className="grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <a href="#beranda" className="flex items-center gap-3" aria-label={`${site.brand} — kembali ke beranda`}>
            <Image
              src="/logo.jpeg"
              alt={`Logo ${site.brand}`}
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-lg object-cover"
            />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              WP <span className="text-cyan-300">CELLULER</span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-300/80">
            {site.tagline}. Trusted since {site.established}.
          </p>
          <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
            Android • iOS • All Brand
          </p>
          <p className="mt-2 text-sm font-medium text-slate-300/80">
            {serviceLinks.map((s) => s.label).join(" • ")}
          </p>
        </div>

        {/* Navigasi */}
        <nav aria-label="Navigasi footer">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Navigasi
          </h3>
          <ul className="mt-4 space-y-2.5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-slate-300/80 transition hover:text-cyan-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Kontak */}
        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-white">
            Kontak
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-slate-300/80">
            <li className="flex gap-2.5">
              <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{site.city}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <span>{site.hoursDisplay}</span>
            </li>
            <li className="flex gap-2.5">
              <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_whatsapp"
                data-track-label="footer"
                className="transition hover:text-cyan-300"
              >
                {site.phoneDisplay}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Icon name="message" className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
              <a
                href={site.tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-track="click_tiktok"
                data-track-label="footer"
                className="transition hover:text-cyan-300"
              >
                TikTok {site.tiktokHandle}
              </a>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/5">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-slate-400 sm:flex-row">
          <p>© 2026 {site.brand}. All rights reserved.</p>
          <p className="font-medium">Servis • Sparepart • Aksesoris — {site.city}</p>
        </Container>
      </div>
    </footer>
  );
}