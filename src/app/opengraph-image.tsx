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
            "radial-gradient(1200px 630px at 100% 0%, #4A22D6 0%, #0F0819 55%)",
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
              background: "#5E34F7",
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
            <span style={{ color: "#C6FF00" }}>CRM numa plataforma só.</span>
          </div>
          <div
            style={{
              fontSize: "32px",
              color: "#A79FC9",
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
            color: "#EDEBFF",
          }}
        >
          <span>Funil pronto</span>
          <span style={{ color: "#6E48FF" }}>•</span>
          <span>Automação de WhatsApp</span>
          <span style={{ color: "#6E48FF" }}>•</span>
          <span>CRM a partir de R$137/mês</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
