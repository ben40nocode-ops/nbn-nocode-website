import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "NBN IA — Automatisation & Agents IA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#ffffff",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Top accent */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "40px" }}>
          <div style={{ width: "40px", height: "4px", background: "#e8632a", borderRadius: "2px" }} />
          <span style={{ fontSize: "18px", color: "#e8632a", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
            Spécialiste Claude AI & Automatisation
          </span>
        </div>

        {/* Headline */}
        <div style={{ fontSize: "68px", fontWeight: 900, color: "#111111", lineHeight: 1.1, marginBottom: "32px", maxWidth: "900px" }}>
          Vos process tournent.{" "}
          <span style={{ color: "#e8632a" }}>Même quand vous dormez.</span>
        </div>

        {/* Sub */}
        <div style={{ fontSize: "26px", color: "#6b7280", maxWidth: "700px", lineHeight: 1.5, marginBottom: "48px" }}>
          Automatisation & agents IA pour PME — Bordeaux · Royan · Arcachon
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", borderTop: "2px solid #f3f4f6", paddingTop: "32px" }}>
          <span style={{ fontSize: "28px", fontWeight: 900, color: "#111111", letterSpacing: "-0.02em" }}>
            NBN IA
          </span>
          <span style={{ fontSize: "20px", color: "#9ca3af" }}>nbn-ia.fr</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
