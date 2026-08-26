/**
 * Single source of truth for external URLs. The default below must always
 * match a domain that actually resolves to this deployment — it feeds the
 * sitemap, robots.txt, canonical tags, and Open Graph URLs. Override at
 * build time with NEXT_PUBLIC_SITE_URL once a custom domain is connected.
 */
export const siteConfig = {
  name: "mytek",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mytek.com.br"
  ).replace(/\/$/, ""),
  github:
    process.env.NEXT_PUBLIC_GITHUB_URL ??
    "https://github.com/myttrindade/mytek-site",
  /**
   * Alimenta o title padrão, o OG e a imagem de compartilhamento. Mantém a
   * palavra "CRM" na frente porque é o termo que as pessoas de fato buscam,
   * mesmo com o gancho da página sendo o alerta de lead parado — e acompanha
   * o H1 da home, senão o Google mostra uma promessa e a página entrega
   * outra.
   */
  tagline: "CRM com WhatsApp, alerta de lead parado e dashboard em tempo real",
  description:
    "A mytek avisa quando um lead para de andar no funil, centraliza o atendimento no WhatsApp e mostra o que virou venda. A partir de R$197/mês, sem fidelidade.",
} as const;
