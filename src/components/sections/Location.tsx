import { site, whatsappHref } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CtaLink } from "@/components/ui/CtaLink";
import { Icon } from "@/components/ui/icons";
import { Reveal } from "@/components/ui/Reveal";

export function Location() {
  return (
    <section
      id="kontak"
      className="scroll-mt-20 border-y border-border bg-alt py-20 md:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Lokasi"
          title="Visit WP CELLULER"
          description={`Temukan toko kami di ${site.city}, ${site.region}.`}
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="flex h-full flex-col rounded-3xl border border-border bg-surface p-7">
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <Icon name="map" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="leading-6 text-foreground/85">{site.address}</span>
                </li>
                <li className="flex gap-3">
                  <Icon name="clock" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <span className="leading-6 text-foreground/85">
                    Open: <span className="font-semibold text-foreground">{site.hoursDisplay}</span>
                  </span>
                </li>
                <li className="flex gap-3">
                  <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_whatsapp"
                    data-track-label="location_phone"
                    className="leading-6 text-foreground/85 transition hover:text-accent"
                  >
                    {site.phoneDisplay}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Icon name="message" className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <a
                    href={site.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-track="click_tiktok"
                    data-track-label="location"
                    className="leading-6 text-foreground/85 transition hover:text-accent"
                  >
                    TikTok {site.tiktokHandle}
                  </a>
                </li>
              </ul>
              <CtaLink
                href={site.mapsUrl}
                variant="outline"
                size="md"
                className="mt-7 self-start"
                track="click_maps"
                trackLabel="location"
              >
                <Icon name="map" className="h-4 w-4" />
                Buka Google Maps
              </CtaLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="h-full overflow-hidden rounded-3xl border border-border bg-surface">
              <iframe
                src={site.mapsEmbedUrl}
                title="Lokasi WP CELLULER di Google Maps"
                className="h-full min-h-[340px] w-full"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}