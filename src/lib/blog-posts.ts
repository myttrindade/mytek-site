export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateISO: string;
  category: string;
  readingTime: string;
}

/** Listing metadata for /blog. The content lives in src/app/blog/(posts)/<slug>/page.mdx */
export const blogPosts: BlogPost[] = [
  {
    slug: "introducing-velora-ui",
    title: "Por que viramos três produtos, não um CRM genérico",
    excerpt:
      "CRM, Landing Page e Dashboard resolvem problemas diferentes. Por isso não empacotamos tudo num produto só. Você contrata o que precisa, quando precisa, e paga menos quando combina.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Novidades",
    readingTime: "4 min de leitura",
  },
  {
    slug: "animations-with-receipts",
    title: "A automação que vende sozinha: o alerta de lead sem resposta",
    excerpt:
      "Cliente manda mensagem, ninguém responde a tempo, ele fecha com a concorrência. Construímos uma automação pra resolver exatamente essa dor, nenhuma outra.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Produto",
    readingTime: "3 min de leitura",
  },
  {
    slug: "retheme-in-one-token-block",
    title: "'Visitantes do site' não paga conta. Vendas sim.",
    excerpt:
      "Por que o Dashboard da mytek abre com vendas, leads e satisfação, não com um número de tráfego que ninguém usa pra decidir nada.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Produto",
    readingTime: "3 min de leitura",
  },
];
