/**
 * Single source of truth for external URLs. The default below must always
 * match a domain that actually resolves to this deployment — it feeds the
 * sitemap, robots.txt, canonical tags, and Open Graph URLs. Override at
 * build time with NEXT_PUBLIC_SITE_URL once a custom domain is connected.
 */
export const siteConfig = {
  name: "mytek",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mytek-site.pages.dev"
  ).replace(/\/$/, ""),
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/myttrindade/mytek-site",
  tagline: "Dashboards, landing pages e CRM numa plataforma só",
  description:
    "mytek reúne as ferramentas que seu negócio precisa pra atrair cliente, acompanhar resultado e organizar venda, tudo num só lugar. Contrate separado ou combine e economize.",
} as const;
