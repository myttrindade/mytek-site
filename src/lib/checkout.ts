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
      "CRM com WhatsApp e agente de IA. A implantação é paga uma vez, e a mensalidade não tem fidelidade.",
    plans: [
      {
        slug: "crm",
        name: "CRM",
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
    billing: "Implantação",
    description:
      "Você paga a implantação uma vez e a página é sua. A manutenção mensal é opcional.",
    plans: [
      {
        slug: "landing-page",
        name: "Landing page",
        price: "R$777",
        unit: null,
        tagline: "Implantação, paga uma vez só.",
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
