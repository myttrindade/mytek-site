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
 */

export type CheckoutPlan = {
  slug: string;
  name: string;
  price: string;
  /** `null` para pagamento único. */
  unit: string | null;
  features: string[];
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
    title: "CRM",
    billing: "Assinatura mensal",
    description:
      "Funil de vendas visual e atendimento por WhatsApp. Três usuários inclusos nos dois planos.",
    plans: [
      {
        slug: "crm-normal",
        name: "CRM Normal",
        price: "R$129",
        unit: "/mês",
        features: [
          "3 usuários incluídos",
          "Funil de vendas visual (Kanban)",
          "Atendimento via WhatsApp",
        ],
        url: "",
      },
      {
        slug: "crm-plus",
        name: "CRM Plus",
        price: "R$249",
        unit: "/mês",
        features: [
          "3 usuários incluídos",
          "Módulo Conhecimento com IA",
          "Treinamento obrigatório incluído",
        ],
        url: "",
      },
    ],
  },
  {
    slug: "dashboard",
    title: "Dashboard",
    billing: "Assinatura mensal",
    description:
      "Painéis e relatórios do seu negócio. Funciona sozinho, mesmo sem o CRM da mytek.",
    plans: [
      {
        slug: "dashboard-avulso",
        name: "Dashboard Avulso",
        price: "R$199",
        unit: "/mês",
        features: [
          "Painéis personalizáveis",
          "Relatórios exportáveis",
          "Sem suporte incluso",
        ],
        url: "",
      },
      {
        slug: "dashboard-suporte",
        name: "Dashboard Avulso + Suporte",
        price: "R$399",
        unit: "/mês",
        features: [
          "Painéis personalizáveis",
          "Relatórios exportáveis",
          "Suporte incluso",
        ],
        url: "",
      },
    ],
  },
  {
    slug: "combos",
    title: "CRM + Dashboard",
    billing: "Assinatura mensal",
    description:
      "Contratando os dois juntos, o preço de cada um já sai menor do que avulso.",
    plans: [
      {
        slug: "combo-normal-sem-suporte",
        name: "CRM Normal + Dashboard sem suporte",
        price: "R$228",
        unit: "/mês",
        features: ["Economia de R$100/mês"],
        url: "",
      },
      {
        slug: "combo-normal-com-suporte",
        name: "CRM Normal + Dashboard com suporte",
        price: "R$328",
        unit: "/mês",
        features: ["Economia de R$200/mês"],
        url: "",
      },
      {
        slug: "combo-plus-sem-suporte",
        name: "CRM Plus + Dashboard sem suporte",
        price: "R$348",
        unit: "/mês",
        features: ["Economia de R$100/mês"],
        url: "",
      },
      {
        slug: "combo-plus-com-suporte",
        name: "CRM Plus + Dashboard com suporte",
        price: "R$448",
        unit: "/mês",
        features: ["Economia de R$200/mês"],
        url: "",
      },
    ],
  },
  {
    slug: "landing-page",
    title: "Landing Page",
    billing: "Pagamento único",
    description:
      "Você paga uma vez pela página pronta. Cliente ativo de CRM ou Dashboard tem 20% de desconto — peça o link com desconto pelo contato.",
    plans: [
      {
        slug: "lp-essencial",
        name: "Landing Page Essencial",
        price: "R$899",
        unit: null,
        features: ["Template customizado", "1 integração", "Sem copy profissional"],
        url: "",
      },
      {
        slug: "lp-completa",
        name: "Landing Page Completa",
        price: "R$1.799",
        unit: null,
        features: [
          "Design sob medida",
          "Copy profissional",
          "Integração com CRM/e-mail",
          "SEO básico",
        ],
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
