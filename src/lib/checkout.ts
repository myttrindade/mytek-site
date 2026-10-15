/**
 * Links de pagamento do Mercado Pago, um por plano.
 *
 * O site é estático (`output: "export"`), então ele não cria cobrança nem
 * processa cartão. Cada botão leva ao checkout hospedado pelo Mercado Pago,
 * que cuida de cartão, Pix, boleto e da recorrência das assinaturas.
 *
 * Nada aqui é segredo: link de pagamento é público por natureza. Chave de
 * API do Mercado Pago NÃO entra neste arquivo nem em nenhum outro do site —
 * o código é estático e vai inteiro para o navegador do visitante.
 *
 * `url: ""` significa que o link ainda não foi criado no painel. A página
 * detecta e oferece o caminho de contato, em vez de um botão que não leva a
 * lugar nenhum. Enquanto nenhum link existir, a página fica fora do sitemap
 * e do rodapé.
 *
 * O preço abaixo é só o que o cliente lê antes de clicar; quem cobra de fato
 * é o link do Mercado Pago. Ao mudar um valor, mude nos três lugares: aqui,
 * no link do Mercado Pago e em `src/app/pricing/page.tsx`.
 *
 * Tabela de preços de outubro/2026: só os três pacotes (Landing page, CRM e
 * CRM + Churn) são públicos. Os serviços avulsos da tabela são de uso interno,
 * para montar propostas, e não aparecem no site. Parcelas no cartão e plano
 * anual também ficam de fora por enquanto.
 */

export type CheckoutPlan = {
  slug: string;
  name: string;
  price: string;
  /** `null` para pagamento único. */
  unit: string | null;
  features: string[];
  /** Frase curta sob o preço (opcional). */
  tagline?: string;
  /** Observação sob a lista de itens (opcional). */
  note?: string;
  /** Link de pagamento do Mercado Pago. Vazio enquanto não for criado. */
  url: string;
};

export type CheckoutGroup = {
  slug: string;
  title: string;
  billing: string;
  description: string;
  plans: CheckoutPlan[];
};

export const checkoutGroups: CheckoutGroup[] = [
  {
    slug: "crm",
    title: "CRM com WhatsApp",
    billing: "Implantação + mensalidade",
    description:
      "Do CRM mais simples ao CRM com agente de IA e previsão de churn. A implantação é paga uma vez, e a mensalidade não tem fidelidade.",
    plans: [
      {
        slug: "crm-simples",
        name: "CRM Simples",
        price: "R$137",
        unit: "/mês",
        tagline: "Mais R$247 de implantação, paga uma vez só.",
        features: [
          "CRM com WhatsApp",
          "Até 3 usuários",
          "Funil de vendas visual (Kanban)",
          "Usuário extra: R$34/mês",
        ],
        url: "",
      },
      {
        slug: "crm",
        name: "CRM com IA",
        price: "R$297",
        unit: "/mês",
        tagline: "Mais R$447 de implantação, paga uma vez só.",
        features: [
          "CRM com WhatsApp",
          "Agente de IA no atendimento",
          "Funil de vendas visual (Kanban)",
          "Sem fidelidade no plano mensal",
        ],
        url: "",
      },
      {
        slug: "crm-churn",
        name: "CRM + Churn",
        price: "R$397",
        unit: "/mês",
        tagline: "Mais R$447 de implantação, paga uma vez só.",
        features: [
          "CRM com WhatsApp",
          "Agente de IA no atendimento",
          "Previsão de churn: avisa quais clientes estão para sair",
          "Sem fidelidade no plano mensal",
        ],
        url: "",
      },
    ],
  },
  {
    slug: "landing-page",
    title: "Landing page",
    billing: "Valor único",
    description:
      "Você paga um valor único e a página é sua. A manutenção mensal é opcional.",
    plans: [
      {
        slug: "landing-page",
        name: "Landing page",
        price: "R$777",
        unit: null,
        tagline: "Valor único, pago uma vez só.",
        features: [
          "Página profissional",
          "Perfil no Google",
          "Botão direto para o WhatsApp",
          "1 rodada de revisão",
        ],
        note: "Manutenção opcional: R$67/mês.",
        url: "",
      },
    ],
  },
];

/**
 * Serviços avulsos da tabela de outubro/2026, agora públicos. Na Landing page
 * e no Site, a mensalidade é manutenção opcional; nos demais, é mensalidade do
 * serviço. Parcelas no cartão e plano anual seguem fora do site.
 */
export type ServicoAvulso = {
  slug: string;
  nome: string;
  detalhe: string;
  /** O que se paga uma vez (com a natureza: valor único ou implantação). */
  uma_vez: string;
  /** Mensalidade, ou null quando não há. */
  mensal: string | null;
  /** Observação curta (opcional). */
  nota?: string;
  href: string;
};

export const servicosAvulsos: ServicoAvulso[] = [
  {
    slug: "sites",
    nome: "Site institucional",
    detalhe: "Várias páginas: sobre, serviços, equipe e contato",
    uma_vez: "R$1.697 (valor único)",
    mensal: "R$87/mês (manutenção opcional)",
    href: "/solucoes/sites",
  },
  {
    slug: "ajustes-site",
    nome: "Ajustes em site existente",
    detalhe: "Domínio, logo, imagens e até 1 página nova",
    uma_vez: "R$500 (valor único)",
    mensal: null,
    nota: "1 rodada de revisão inclusa.",
    href: "/solucoes/sites",
  },
  {
    slug: "agentes-de-ia",
    nome: "Agente de IA",
    detalhe: "Até 800 conversas por mês",
    uma_vez: "R$597 (implantação)",
    mensal: "R$297/mês",
    nota: "R$0,30 por conversa extra.",
    href: "/solucoes/agentes-de-ia",
  },
  {
    slug: "automacao-n8n",
    nome: "Automação (n8n)",
    detalhe: "Valor por fluxo",
    uma_vez: "R$347 (implantação)",
    mensal: "R$77/mês",
    nota: "Preço por fluxo.",
    href: "/solucoes/automacao-n8n",
  },
  {
    slug: "dashboards",
    nome: "Dashboard",
    detalhe: "Dashboard com os números do negócio",
    uma_vez: "R$397 (implantação)",
    mensal: "R$217/mês",
    href: "/solucoes/dashboards",
  },
  {
    slug: "previsao-de-churn",
    nome: "Previsão de churn avulsa",
    detalhe: "Avisa quais clientes estão com risco de cancelar. Para quem já tem CRM",
    uma_vez: "R$397 (implantação)",
    mensal: "R$147/mês",
    href: "/solucoes/previsao-de-churn",
  },
  {
    slug: "sistemas-sob-medida",
    nome: "Sistema sob medida",
    detalhe: "Desenvolvido para o processo do cliente",
    uma_vez: "Sob consulta",
    mensal: "Sob consulta",
    nota: "Orçamento depois de uma conversa.",
    href: "/solucoes/sistemas-sob-medida",
  },
];

export const servicoAvulso = (slug: string) =>
  servicosAvulsos.find((x) => x.slug === slug);

/**
 * Verdadeiro assim que ao menos um link de pagamento for preenchido. Controla
 * se a página aparece no sitemap e no rodapé — sem isso, o site divulgaria um
 * checkout que ainda não cobra nada.
 */
export const hasCheckoutLinks = checkoutGroups.some((group) =>
  group.plans.some((plan) => plan.url !== "")
);

/**
 * Link de valor aberto do Mercado Pago: a tela pede que o cliente digite
 * quanto vai pagar.
 *
 * Serve SÓ para orçamento combinado antes, onde o valor varia por definição.
 * Não use nos planos: o cliente poderia digitar qualquer quantia, o
 * pagamento não identifica o que foi comprado e não há recorrência — os
 * planos mensais precisam de assinatura, não de link avulso.
 */
export const valorCombinadoUrl = "https://link.mercadopago.com.br/mytek";

/**
 * Destino do botão de um plano na página de preços.
 *
 * Enquanto não houver link de pagamento, continua indo direto ao contato:
 * mandar para um checkout que ainda não cobra nada só colocaria um clique a
 * mais antes do mesmo formulário. Assim que o primeiro link for preenchido,
 * todos os botões passam a levar ao plano correspondente sozinhos.
 */
export function checkoutHref(planSlug: string): string {
  return hasCheckoutLinks ? `/pagamento#${planSlug}` : "/contact";
}
