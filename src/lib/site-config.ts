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

/**
 * Capturas de tela do produto.
 *
 * São telas do CRM real em operação (confirmado com o time em 27/08/2026),
 * com dados de demonstração fictícios dentro. Por isso cada uma é publicada
 * com a legenda "Dados de exemplo" — os números que aparecem nelas (taxa de
 * resposta, conversão, receita no funil) seriam lidos como resultado da
 * plataforma se ficassem sem ressalva, que é o mesmo problema das métricas
 * inventadas que este site já teve.
 *
 * Enquanto `src` for `null`, a peça correspondente **não renderiza nada** —
 * nem moldura, nem legenda, nem espaço reservado. Uma caixa tracejada
 * dizendo "espaço reservado" comunica site inacabado, e isso é pior do que
 * não ter imagem.
 *
 * TODO(imagem): salvar os PNGs em /public/brand/produto/ e apontar cada `src`.
 * Conferir `size` com as dimensões reais do arquivo — o `next/image` precisa
 * delas para reservar o espaço e não causar layout shift.
 */
export type ProductShot = {
  src: string | null;
  alt: string;
  size: { width: number; height: number };
};

export const productShots = {
  /** Primeira dobra: o funil, porque é onde o alerta de lead parado aparece. */
  funil: {
    src: "/brand/produto/funil-kanban.png",
    alt: "Funil de vendas em Kanban da mytek: colunas Novo lead, Qualificando, Proposta, Negociação e Fechado, com cards mostrando valor do negócio e etiquetas de Radar e follow-up",
    size: { width: 2880, height: 1800 },
  },
  /** Atendimento: a conversa com o histórico e a ficha do negócio ao lado. */
  inbox: {
    src: "/brand/produto/inbox-whatsapp.png",
    alt: "Caixa de entrada da mytek: conversa de WhatsApp com o lead à esquerda, histórico no centro e ficha do negócio à direita, com funil, etapa, valor e origem",
    size: { width: 2880, height: 1800 },
  },
  /** Dashboard: leads por dia, funil e atividade recente. */
  dashboard: {
    src: "/brand/produto/dashboard.png",
    alt: "Visão geral da mytek: indicadores de leads do dia, taxa de resposta e conversão, gráfico de leads por dia e feed de atividade recente da equipe",
    size: { width: 2880, height: 1800 },
  },
} satisfies Record<string, ProductShot>;

export const hasProductShots = Object.values(productShots).some(
  (s) => s.src !== null
);
