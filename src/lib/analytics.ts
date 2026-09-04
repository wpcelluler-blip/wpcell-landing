"use client";

/**
 * ANALYTICS LAYER — ringan, tanpa dependency eksternal (PRD §25).
 *
 * Event yang direkam:
 *   page_view, scroll_50, scroll_90, portfolio_view,
 *   click_whatsapp, click_maps, click_tiktok, +
 *   semua elemen dengan atribut data-track="event_name".
 *
 * Data disimpan di window.__wpcellEvents dan diteruskan ke handler yang
 * terdaftar — siap dihubungkan ke GA4/GTM atau backend/FastAPI nanti.
 */

export interface WPCellEvent {
  name: string;
  props?: Record<string, string | number | boolean>;
}

export interface WPCellRecordedEvent extends WPCellEvent {
  ts: number;
}

export type AnalyticsHandler = (event: WPCellRecordedEvent) => void;

declare global {
  interface Window {
    __wpcellEvents?: WPCellRecordedEvent[];
    __wpcellHandlers?: AnalyticsHandler[];
    dataLayer?: unknown[];
  }
}

export function track(event: WPCellEvent): void {
  if (typeof window === "undefined") return;
  const recorded: WPCellRecordedEvent = { ...event, ts: Date.now() };
  window.__wpcellEvents = window.__wpcellEvents ?? [];
  window.__wpcellEvents.push(recorded);
  window.__wpcellHandlers?.forEach((handler) => handler(recorded));
  if (process.env.NODE_ENV === "development") {
    console.debug("[wpcell-analytics]", event.name, event.props ?? {});
  }
}

/** Registrasi handler eksternal (GA4/GTM/FastAPI) untuk menerima semua event. */
export function onAnalyticsEvent(handler: AnalyticsHandler): () => void {
  if (typeof window === "undefined") return () => {};
  window.__wpcellHandlers = window.__wpcellHandlers ?? [];
  window.__wpcellHandlers.push(handler);
  return () => {
    window.__wpcellHandlers = window.__wpcellHandlers?.filter(
      (h) => h !== handler
    );
  };
}

const SCROLL_EVENTS = [
  { name: "scroll_50", threshold: 0.5 },
  { name: "scroll_90", threshold: 0.9 },
];

export function initAnalytics(): void {
  if (typeof window === "undefined") return;
  if (window.__wpcellEvents) return; // sudah diinisialisasi

  window.__wpcellEvents = [];
  window.__wpcellHandlers = [];

  track({ name: "page_view" });

  // Scroll depth: 50% & 90%
  const fired = new Set<string>();
  const onScroll = () => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    if (max <= 0) return;
    const ratio = window.scrollY / max;
    for (const ev of SCROLL_EVENTS) {
      if (ratio >= ev.threshold && !fired.has(ev.name)) {
        fired.add(ev.name);
        track({ name: ev.name });
      }
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });

  // portfolio_view — saat section #portfolio terlihat
  if ("IntersectionObserver" in window) {
    const portfolio = document.getElementById("portfolio");
    if (portfolio) {
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              track({ name: "portfolio_view" });
              io.disconnect();
              break;
            }
          }
        },
        { threshold: 0.4 }
      );
      io.observe(portfolio);
    }
  }

  // Click delegation — <a data-track="click_whatsapp" data-track-label="hero">
  document.addEventListener(
    "click",
    (e) => {
      const target = e.target as HTMLElement | null;
      const tracked = target?.closest?.("[data-track]") as HTMLElement | null;
      if (!tracked) return;
      const name = tracked.dataset.track;
      if (!name) return;
      const label = tracked.dataset.trackLabel;
      track({ name, props: label ? { label } : undefined });
    },
    { passive: true }
  );
}