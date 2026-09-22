import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#101720",
          padding: "72px 80px",
          color: "#f7f4ed",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg
            width="64"
            height="64"
            viewBox="0 0 40 40"
            fill="none"
            stroke="#a8834f"
            strokeWidth={1.8}
            strokeLinejoin="round"
          >
            <path d="M7 12 L11.5 5.5 L20 10 L28.5 5.5 L33 12 V21.5 A13 13 0 0 1 7 21.5 Z" />
            <circle cx="14.8" cy="18.6" r="3.6" />
            <circle cx="25.2" cy="18.6" r="3.6" />
            <path d="M20 21.2 L21.3 24 L20 26.4 L18.7 24 Z" />
          </svg>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 10,
              color: "#f7f4ed",
            }}
          >
            {site.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 74,
              lineHeight: 1.08,
              color: "#f7f4ed",
              maxWidth: 900,
            }}
          >
            Family capital, with nowhere else to be.
          </div>
          <div style={{ width: 96, height: 2, background: "#a8834f", marginTop: 36 }} />
          <div
            style={{
              fontSize: 28,
              lineHeight: 1.45,
              color: "#a7b0bd",
              marginTop: 34,
              maxWidth: 860,
            }}
          >
            A family and friends partnership backing childcare franchises and
            the real estate we develop into shop locations.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
