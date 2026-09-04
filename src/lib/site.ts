/**
 * SITE INFORMATION — single source of truth untuk informasi bisnis WP CELLULER.
 *
 * Seluruh halaman membaca data bisnis dari file ini (modular & centralized).
 * Nanti, data ini dapat diganti dengan fetch dari backend/FastAPI tanpa
 * mengubah struktur komponen di halaman.
 */

export const site = {
  brand: "WP CELLULER",
  tagline: "Your best partner repair mobile phone",
  established: 2014,
  city: "Wonogiri",
  region: "Jawa Tengah",
  country: "ID",
  address:
    "Jalan Kenanga 3, Pokoh, Wonoboyo, Kel. Wonoboyo, Kec. Wonogiri",
  addressShort: "Pokoh, Wonoboyo, Wonogiri, Jawa Tengah",
  phoneDisplay: "081128758580",
  phoneE164: "+6281128758580",
  whatsappNumber: "6281128758580",
  whatsappMessage:
    "Halo WP CELLULER, saya ingin konsultasi mengenai masalah HP saya.",
  tiktokHandle: "@wpcelluler",
  tiktokUrl: "https://www.tiktok.com/@wpcelluler",
  hoursDisplay: "09.00–21.00",
  hoursIso: "09:00-21:00",
  openDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
  // Google Maps: gunakan link place resmi jika user sudah memberikan URL-nya.
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "WP CELLULER Jalan Kenanga 3, Pokoh, Wonoboyo, Wonogiri, Jawa Tengah"
  )}`,
  mapsEmbedUrl: `https://www.google.com/maps?q=${encodeURIComponent(
    "Jalan Kenanga 3, Pokoh, Wonoboyo, Wonogiri, Jawa Tengah"
  )}&output=embed&z=16`,
  // TODO: ganti dengan domain final saat website sudah online.
  url: "https://wpcelluler.id",
  locale: "id_ID",
} as const;

/** Link WhatsApp dengan pre-filled message. */
export const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  site.whatsappMessage
)}`;

/** Navigasi utama (anchor ke section). */
export const navLinks = [
  { label: "Home", href: "#beranda" },
  { label: "Layanan", href: "#layanan" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Tentang Kami", href: "#tentang" },
  { label: "FAQ", href: "#faq" },
  { label: "Kontak", href: "#kontak" },
] as const;