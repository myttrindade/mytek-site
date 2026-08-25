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
    slug: "crm-para-pme-nao-perder-leads",
    title: "CRM para PME: Como nao perder mais leads que valem dinheiro",
    excerpt:
      "Pequenas empresas perdem clientes porque levam 2 dias pra responder. Veja como um CRM simples recupera leads perdidos e venda mais.",
    date: "25 de agosto de 2026",
    dateISO: "2026-08-25",
    category: "Produto",
    readingTime: "5 min de leitura",
  },
  {
    slug: "dashboard-venda-mais-vendo-dados",
    title: "Dashboard: Venda mais quando voce ve os dados em tempo real",
    excerpt:
      "Empresas que veem leads, vendas e satisfacao em tempo real reagem 3x mais rapido. Saiba por que numeros vivos vendem mais que relatorios de ontem.",
    date: "25 de agosto de 2026",
    dateISO: "2026-08-25",
    category: "Produto",
    readingTime: "6 min de leitura",
  },
  {
    slug: "por-que-tres-produtos",
    title: "Por que viramos tres produtos, nao um CRM generico",
    excerpt:
      "CRM, Landing Page e Dashboard resolvem problemas diferentes. Por isso nao empacotamos tudo num produto so. Voce contrata o que precisa, quando precisa, e paga menos quando combina.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Novidades",
    readingTime: "4 min de leitura",
  },
  {
    slug: "alerta-de-lead-sem-resposta",
    title: "A automacao que vende sozinha: o alerta de lead sem resposta",
    excerpt:
      "Cliente manda mensagem, ninguem responde a tempo, ele fecha com a concorrencia. Construimos uma automacao pra resolver exatamente essa dor, nenhuma outra.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Produto",
    readingTime: "3 min de leitura",
  },
  {
    slug: "metricas-que-importam-no-dashboard",
    title: "Visitantes do site nao paga conta. Vendas sim.",
    excerpt:
      "Por que o Dashboard da mytek abre com vendas, leads e satisfacao, nao com um numero de trafego que ninguem usa pra decidir nada.",
    date: "16 de julho de 2026",
    dateISO: "2026-07-16",
    category: "Produto",
    readingTime: "3 min de leitura",
  },
];
