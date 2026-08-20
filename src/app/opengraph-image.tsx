import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site-config";

// Prerender the PNG at build time so it ships as a static asset (output: export).
export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.name} · ${siteConfig.tagline}`;

// Branded social card. Self-contained (next/og default font, no network) so
// it renders at build time and every shared link previews on-brand.
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
          background:
            "radial-gradient(1200px 630px at 100% 0%, #1e3a8a 0%, #0a0a0a 55%)",
          color: "white",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "16px",
              background: "linear-gradient(135deg, #3b82f6, #38bdf8)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            M
          </div>
          <span style={{ fontSize: "34px", fontWeight: 600 }}>
            {siteConfig.name}
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: "76px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: "900px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            Dashboards, landing pages e&nbsp;
            <span style={{ color: "#60a5fa" }}>CRM numa plataforma só.</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#a1a1aa",
              maxWidth: "820px",
              lineHeight: 1.3,
            }}
          >
            Atraia cliente, acompanhe resultado e organize venda, tudo num
            só lugar.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            fontSize: "26px",
            color: "#d4d4d8",
          }}
        >
          <span>Funil pronto</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>Automação de WhatsApp</span>
          <span style={{ color: "#3f3f46" }}>•</span>
          <span>CRM a partir de R$129/mês</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
