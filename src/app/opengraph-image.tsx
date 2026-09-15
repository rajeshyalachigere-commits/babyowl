import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${site.name} — ${site.tagline}`;

/** Social sharing card, generated at build time. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "linear-gradient(135deg, #fbf6ec 0%, #d8ecef 100%)",
          color: "#0e3037",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <div
            style={{
              width: 96,
              height: 108,
              borderRadius: 48,
              background: "#17515c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                background: "#fffdf8",
              }}
            />
            <div
              style={{
                width: 30,
                height: 30,
                borderRadius: 15,
                background: "#fffdf8",
              }}
            />
          </div>
          <div
            style={{
              fontSize: 64,
              fontWeight: 800,
              letterSpacing: "0.14em",
              color: "#123f48",
            }}
          >
            {site.name}
          </div>
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 60,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 900,
          }}
        >
          {site.tagline}
        </div>
        <div
          style={{
            marginTop: 28,
            fontSize: 30,
            color: "#2f818f",
            maxWidth: 860,
          }}
        >
          Infants · Toddlers · Preschool — small groups, low ratios, daily
          updates for parents.
        </div>
      </div>
    ),
    size,
  );
}
