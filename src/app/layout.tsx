import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";
import { allStructuredData, faqJsonLd } from "@/lib/structured-data";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Analytics } from "@/components/Analytics";

// Display heading: Sora — premium & professional untuk bisnis teknologi
const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  display: "swap",
});

// Body text: Inter — bersih & sangat mudah dibaca
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const PAGE_TITLE = "WP CELLULER | Servis HP Wonogiri – Android & iOS";
const PAGE_DESCRIPTION =
  "WP CELLULER melayani servis smartphone Android & iOS, sparepart dan aksesoris di Wonogiri. Terpercaya sejak 2014. Konsultasi melalui WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: PAGE_TITLE,
    template: `%s | ${site.brand}`,
  },
  description: PAGE_DESCRIPTION,
  keywords: [
    "servis HP Wonogiri",
    "servis iPhone Wonogiri",
    "servis Android Wonogiri",
    "tempat servis HP Wonogiri",
    "servis smartphone Wonogiri",
    "teknisi HP Wonogiri",
    "WP CELLULER Wonogiri",
    "servis motherboard HP Wonogiri",
    "sparepart HP Wonogiri",
    "aksesoris HP Wonogiri",
  ],
  applicationName: site.brand,
  authors: [{ name: site.brand }],
  creator: site.brand,
  icons: {
    icon: "/favicon.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: site.url,
    siteName: site.brand,
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

// Anti-FOUC: set kelas tema sebelum paint. Default = LIGHT.
// Tema tersimpan di localStorage "wpcell-theme" ("dark" / "light").
const THEME_SCRIPT = `(function(){try{var s=localStorage.getItem("wpcell-theme");var dark=s? s==="dark" : false;var el=document.documentElement;if(dark){el.classList.add("dark")}else{el.classList.remove("dark")}el.style.colorScheme=dark?"dark":"light"}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const structuredData = [...allStructuredData(), faqJsonLd()];
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className={`${sora.variable} ${inter.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <a
          href="#beranda"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Lewati ke konten utama
        </a>
        {structuredData.map((ld, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
          />
        ))}
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <Analytics />
      </body>
    </html>
  );
}
