/**
 * Single source of truth for external URLs. Override at build time with
 * NEXT_PUBLIC_SITE_URL / NEXT_PUBLIC_GITHUB_URL when the real domain and
 * repo are wired up.
 */
export const siteConfig = {
  name: "mytek",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mytek.app"
  ).replace(/\/$/, ""),
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/myttrindade/mytek-site",
  tagline: "Dashboards, landing pages e CRM numa plataforma só",
  description:
    "mytek reúne as ferramentas que seu negócio precisa pra atrair cliente, acompanhar resultado e organizar venda, tudo num só lugar. Contrate separado ou combine e economize.",
} as const;
