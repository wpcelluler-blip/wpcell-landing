import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.brand} — Servis HP Wonogiri`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #fbfdff 0%, #ffffff 100%)",
          color: "#0f2447",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 76,
              height: 76,
              borderRadius: 20,
              background: "linear-gradient(135deg, #2563eb, #1e50c8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontWeight: 800,
              fontSize: 44,
            }}
          >
            W
          </div>
          <div style={{ fontSize: 60, fontWeight: 700, display: "flex" }}>
            WP&nbsp;
            <span style={{ color: "#2563eb" }}>CELLULER</span>
          </div>
        </div>
        <div
          style={{
            marginTop: 22,
            fontSize: 30,
            color: "#5b7090",
            display: "flex",
          }}
        >
          Servis HP Wonogiri — Android &amp; iOS · Since 2014
        </div>
      </div>
    ),
    { ...size }
  );
}