import { whatsappHref } from "@/lib/site";
import { CtaLink } from "./ui/CtaLink";
import { WhatsAppIcon } from "./ui/icons";

/**
 * Floating WhatsApp — selalu terlihat sepanjang halaman (PRD §20),
 * fixed bottom-right. Teks berbeda untuk mobile & desktop.
 */
export function FloatingWhatsApp() {
  return (
    <CtaLink
      href={whatsappHref}
      variant="whatsapp"
      size="md"
      track="click_whatsapp"
      trackLabel="floating"
      className="fixed bottom-4 right-4 z-40 shadow-[0_10px_30px_-6px_rgba(37,211,102,0.55)] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-5 w-5" />
      <span className="sm:hidden">Konsultasi Sekarang</span>
      <span className="hidden sm:inline">WhatsApp</span>
    </CtaLink>
  );
}