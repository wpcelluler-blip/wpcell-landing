/**
 * STRUCTURED DATA — JSON-LD untuk SEO (PRD §22).
 * LocalBusiness, Organization, WebSite, dan FAQPage.
 */
import { site, whatsappHref } from "./site";
import { faqs } from "./content";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    url: site.url,
    slogan: site.tagline,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: site.phoneE164,
        contactType: "customer service",
        areaServed: site.city,
      },
    ],
    sameAs: [site.tiktokUrl],
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ElectronicsStore"],
    name: site.brand,
    description:
      "WP CELLULER melayani servis smartphone Android & iOS, sparepart dan aksesoris di Wonogiri. Terpercaya sejak 2014.",
    url: site.url,
    telephone: site.phoneE164,
    image: `${site.url}/icon.svg`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: site.city,
      addressRegion: site.region,
      addressCountry: site.country,
    },
    openingHours: `${site.openDays.join(",")} ${site.hoursIso}`,
    sameAs: [site.tiktokUrl, whatsappHref],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: site.url,
    inLanguage: "id",
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export const allStructuredData = () => [
  organizationJsonLd(),
  localBusinessJsonLd(),
  websiteJsonLd(),
];