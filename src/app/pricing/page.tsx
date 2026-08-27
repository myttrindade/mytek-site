import type { Metadata } from "next";
import { CheckIcon, GiftIcon, Wand2Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { FounderProgram } from "@/components/founder-program";
import { checkoutHref } from "@/lib/checkout";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const pricingTitle = "Preço · mytek — CRM a partir de R$197/mês, sem fidelidade";
const pricingDescription =
  "CRM a partir de R$197/mês, Dashboard a partir de R$397/mês e Landing Page a partir de R$1.497 (pagamento único). Combine os módulos e pague menos.";

export const metadata: Metadata = {
  // `title.absolute` ignora o template "%s · mytek" do layout — sem ele o
  // title sairia "Preço · mytek — ... · mytek".
  title: { absolute: pricingTitle },
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  // Sem isto a página herdava o OG genérico da home, e quem compartilhava o
  // link dos planos anunciava outra coisa.
  openGraph: {
    title: pricingTitle,
    description: pricingDescription,
    url: "/pricing",
  },
  twitter: {
    title: pricingTitle,
    description: pricingDescription,
  },
};

// `slug` casa com os planos de src/lib/checkout.ts: é o que leva o botão ao
// checkout certo. Ao renomear um plano aqui, renomeie lá também.
const crmPlans = [
  {
    name: "CRM Normal",
    slug: "crm-normal",
    price: "R$197",
    unit: "/mês",
    highlight: false,
    features: ["Até 3 membros do time", "Funil de vendas visual (Kanban)", "Atendimento via WhatsApp"],
  },
  {
    name: "CRM Plus",
    slug: "crm-plus",
    price: "R$367",
    unit: "/mês",
    highlight: true,
    features: [
      "Até 3 membros do time",
      "Módulo Conhecimento com IA",
      "Sessão de treinamento incluída",
    ],
  },
];

const dashboardPlans = [
  {
    name: "Dashboard Avulso",
    slug: "dashboard-avulso",
    price: "R$397",
    unit: "/mês",
    highlight: false,
    // Os bullets descrevem o que o plano tem. A ausência de suporte fica na
    // tabela comparativa acima — bullet em negativo vende contra o produto.
    features: [
      "Painéis personalizáveis",
      "Relatórios exportáveis",
      "Suporte opcional a partir de +R$300/mês",
    ],
  },
  {
    name: "Dashboard Avulso + Suporte",
    slug: "dashboard-suporte",
    price: "R$697",
    unit: "/mês",
    highlight: true,
    features: [
      "Painéis personalizáveis",
      "Relatórios exportáveis",
      "Suporte incluso (até 5 solicitações/mês)",
    ],
  },
];

const landingPagePlans = [
  {
    name: "Landing Page Essencial",
    slug: "lp-essencial",
    price: "R$1.497",
    highlight: false,
    features: [
      "Template customizado",
      "1 integração",
      "Textos por sua conta (ou contrate a Completa)",
    ],
  },
  {
    name: "Landing Page Completa",
    slug: "lp-completa",
    price: "R$2.997",
    highlight: true,
    features: [
      "Design sob medida",
      "Copy profissional",
      "Integração com CRM/e-mail",
      "SEO básico",
    ],
  },
];

/**
 * Quatro combos com preços parecidos deixam a escolha por conta do visitante,
 * e quem não sabe escolher não escolhe. `featured` marca o ponto de entrada
 * que a gente recomenda — o mais barato dos quatro.
 *
 * `featured` é recomendação, não estatística: enquanto forem 2 clientes, dizer
 * "o mais escolhido" seria inventar um dado. Quando houver base para afirmar,
 * é só trocar o rótulo em FEATURED_LABEL.
 */
const FEATURED_LABEL = "Recomendado para começar";

const combos = [
  { label: "CRM Normal + Dashboard sem suporte", price: "R$394/mês", featured: true },
  { label: "CRM Normal + Dashboard com suporte", price: "R$544/mês", featured: false },
  { label: "CRM Plus + Dashboard sem suporte", price: "R$564/mês", featured: false },
  { label: "CRM Plus + Dashboard com suporte", price: "R$714/mês", featured: false },
];

/**
 * A primeira frase de cada resposta já é a resposta direta — é o formato que
 * o Google puxa para featured snippet. Ao editar, mantenha a resposta na
 * abertura e o detalhe depois.
 */
const faqs = [
  {
    q: "Preciso ter CRM pra contratar o Dashboard?",
    a: "Não. O Dashboard avulso custa R$397/mês e funciona sozinho, conectado às suas fontes de dados. Se você já é cliente de CRM, ele entra como add-on por R$197/mês, porque os dados já estão dentro da plataforma e o trabalho de integração não se repete.",
  },
  {
    q: "A Landing Page é cobrada todo mês?",
    a: "Não. É pagamento único: R$1.497 na Essencial e R$2.997 na Completa. A página é sua e continua no ar sem mensalidade. O que é opcional e mensal é a manutenção depois do primeiro mês, a partir de R$297/mês, pra quem quer alterações recorrentes.",
  },
  {
    q: "Qual a diferença entre o CRM Normal e o Plus?",
    a: "O Plus adiciona o módulo Conhecimento com IA, que responde perguntas sobre a sua própria base — histórico de clientes, negociações, atendimentos — em vez de você garimpar isso no funil. Como ele depende de como a sua empresa organiza a informação, o plano inclui uma sessão de treinamento com a gente antes de liberar o acesso. O resto (funil, WhatsApp, 3 usuários) é igual nos dois.",
  },
  {
    q: "Como funciona a manutenção gratuita?",
    a: "Contratando Landing Page ou Dashboard, o primeiro mês inclui até 5 solicitações de ajuste sem custo: trocar texto, imagem, campo de formulário, métrica do painel. Depois desse mês, você escolhe entre suporte mensal a partir de R$297 ou pedidos avulsos, sem obrigação de contratar nada.",
  },
  {
    q: "E se eu precisar de algo fora desses planos?",
    a: "A gente monta orçamento sob medida. Integração com um sistema que você já usa, painel com uma métrica específica, fluxo de venda que não cabe no funil padrão — é só descrever no formulário de contato que respondemos com escopo e valor.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

/**
 * Um `Product` por plano, com o `Offer` correspondente.
 *
 * O preço vem parseado das mesmas strings que a página exibe, e não de uma
 * segunda lista de números: duas fontes divergiriam na primeira mudança de
 * tabela, e aí o Google anunciaria um preço que a página não pratica.
 *
 * `UnitPriceSpecification` com `billingDuration` distingue a mensalidade do
 * pagamento único da Landing Page — sem isso os R$1.497 apareceriam como se
 * fossem por mês.
 */
const paraNumero = (preco: string) =>
  Number(preco.replace(/[^\d,]/g, "").replace(",", "."));

const planosParaJsonLd = [
  { grupo: "CRM", planos: crmPlans, mensal: true },
  { grupo: "Dashboard", planos: dashboardPlans, mensal: true },
  { grupo: "Landing Page", planos: landingPagePlans, mensal: false },
];

const produtosJsonLd = planosParaJsonLd.flatMap(({ grupo, planos, mensal }) =>
  planos.map((plano) => ({
    "@context": "https://schema.org",
    "@type": "Product",
    name: `mytek ${plano.name}`,
    category: grupo,
    brand: { "@type": "Brand", name: "mytek" },
    description: plano.features.join(" · "),
    offers: {
      "@type": "Offer",
      url: `${siteConfig.url}/pricing`,
      priceCurrency: "BRL",
      price: paraNumero(plano.price),
      availability: "https://schema.org/InStock",
      ...(mensal && {
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          priceCurrency: "BRL",
          price: paraNumero(plano.price),
          billingDuration: 1,
          billingIncrement: 1,
          unitCode: "MON",
        },
      }),
    },
  }))
);

export default function PricingPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Planos"
        title="Escolha por onde começar"
        description="Cada módulo funciona separado, ou combine CRM e Dashboard com preço especial."
      />

      {/* Comparison Table */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="overflow-x-auto rounded-2xl border bg-card">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="p-4 text-left font-semibold text-foreground">Recurso</th>
                    <th className="p-4 text-center font-semibold text-foreground">CRM</th>
                    <th className="p-4 text-center font-semibold text-foreground">Landing Page</th>
                    <th className="p-4 text-center font-semibold text-foreground">Dashboard</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  <tr>
                    <td className="p-4 font-medium">Funil de vendas visual</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Atendimento via WhatsApp</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Painéis personalizáveis</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Relatórios em tempo real</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Página pronta para converter</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Módulo de IA (Plus)</td>
                    <td className="p-4 text-center"><CheckIcon className="mx-auto size-5 text-green-500" /></td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">-</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Suporte incluso</td>
                    <td className="p-4 text-center">-</td>
                    <td className="p-4 text-center">Mês 1 grátis</td>
                    <td className="p-4 text-center">Opcional (+suporte)</td>
                  </tr>
                  <tr className="bg-primary/5">
                    <td className="p-4 font-semibold">Preço inicial</td>
                    <td className="p-4 text-center font-semibold">R$197/mês</td>
                    <td className="p-4 text-center font-semibold">R$1.497</td>
                    <td className="p-4 text-center font-semibold">R$397/mês</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Renovação</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">Mensal</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">Único</td>
                    <td className="p-4 text-center text-sm text-muted-foreground">Mensal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="mt-6 text-center text-sm text-muted-foreground">
              💡 <strong>Dica:</strong> Combine CRM + Dashboard e pague menos. Veja as opções de combo abaixo.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Promo banner */}
      <section className="pb-4">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex items-start gap-3 rounded-2xl border bg-primary/5 p-5 text-sm text-muted-foreground">
              <GiftIcon className="mt-0.5 size-5 shrink-0 text-primary" />
              <p>
                Contratando Landing Page ou Dashboard, você ganha{" "}
                <strong className="text-card-foreground">
                  1 mês de manutenção grátis
                </strong>{" "}
                (até 5 solicitações). Depois, converte para suporte mensal ou
                manutenção avulsa a partir de R$297/mês.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* CRM */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">CRM</h2>
              <p className="text-sm text-muted-foreground">
                Mensal · funil de vendas, atendimento e organização de clientes
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {crmPlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7",
                    plan.highlight && "border-primary/40"
                  )}
                >
                  {plan.highlight && <BorderBeam size={72} duration={8} />}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                        Com IA
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.unit}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className="mt-6 w-full rounded-full"
                    asChild
                  >
                    <a href={checkoutHref(plan.slug)}>Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">Dashboard</h2>
              <p className="text-sm text-muted-foreground">
                Mensal · painéis e relatórios em tempo real
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {dashboardPlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7",
                    plan.highlight && "border-primary/40"
                  )}
                >
                  {plan.highlight && <BorderBeam size={72} duration={8} />}
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.highlight && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                        Com suporte
                      </span>
                    )}
                  </div>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                    <span className="text-base font-normal text-muted-foreground">
                      {plan.unit}
                    </span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className="mt-6 w-full rounded-full"
                    asChild
                  >
                    <a href={checkoutHref(plan.slug)}>Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.15}>
            <p className="mt-6 text-sm text-muted-foreground">
              Já é cliente CRM? Adicione o Dashboard por{" "}
              <strong className="text-card-foreground">+R$197/mês</strong> (sem
              suporte) ou <strong className="text-card-foreground">+R$347/mês</strong>{" "}
              (com suporte): valor extra sobre a mensalidade do CRM Normal
              ou Plus.
            </p>
          </BlurFade>
          {/*
            Sem esta nota, R$397 avulso contra R$197 como add-on parecia preço
            arbitrário — metade do valor pela mesma coisa. Confirmado com o
            time em 26/08/2026: a diferença é o trabalho de conectar e manter
            a integração com as fontes de dados do cliente, que não existe
            quando os dados já estão dentro da plataforma.
          */}
          <BlurFade delay={0.2}>
            <p className="mt-3 text-sm text-muted-foreground">
              <strong className="text-card-foreground">
                Por que o avulso custa mais?
              </strong>{" "}
              No avulso, a gente conecta o Dashboard às suas fontes de dados e
              mantém essa integração. Como add-on do CRM, os dados já estão
              dentro da plataforma e esse trabalho não se repete.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Landing Page */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">Landing Page</h2>
              <p className="text-sm text-muted-foreground">
                Pagamento único · página pronta para conversão
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {landingPagePlans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.1} className="h-full">
                <div
                  className={cn(
                    "relative flex h-full flex-col overflow-hidden rounded-2xl border bg-card p-7",
                    plan.highlight && "border-primary/40"
                  )}
                >
                  {plan.highlight && <BorderBeam size={72} duration={8} />}
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                      Pagamento único
                    </span>
                    {plan.highlight && (
                      <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[11px] font-medium text-primary">
                        Mais completa
                      </span>
                    )}
                  </div>
                  <h3 className="mt-3 text-lg font-semibold">{plan.name}</h3>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">
                    {plan.price}
                  </p>
                  <ul className="mt-6 flex-1 space-y-2.5 text-sm">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                          <CheckIcon className="size-3" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={plan.highlight ? "default" : "outline"}
                    className="mt-6 w-full rounded-full"
                    asChild
                  >
                    <a href={checkoutHref(plan.slug)}>Quero este</a>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
          <BlurFade delay={0.15}>
            <p className="mt-6 text-sm text-muted-foreground">
              Cliente ativo de CRM ou Dashboard tem{" "}
              <strong className="text-card-foreground">20% de desconto</strong>:
              Essencial por R$1.197 e Completa por R$2.397.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Combos */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-xl font-semibold tracking-tight">
                Combine CRM + Dashboard
              </h2>
              <p className="text-sm text-muted-foreground">
                Economize contratando o Dashboard como add-on do seu CRM
              </p>
            </div>
          </BlurFade>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {combos.map((c, i) => (
              <BlurFade key={c.label} delay={i * 0.06}>
                <div
                  className={cn(
                    "relative flex h-full items-center justify-between gap-4 rounded-2xl border bg-card p-5 transition-transform hover:-translate-y-0.5",
                    c.featured && "border-primary/40 shadow-lg shadow-primary/5"
                  )}
                >
                  {c.featured && (
                    <span className="absolute -top-2.5 left-5 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-semibold text-primary-foreground">
                      ⭐ {FEATURED_LABEL}
                    </span>
                  )}
                  <span
                    className={cn(
                      "text-sm",
                      c.featured
                        ? "font-medium text-card-foreground"
                        : "text-muted-foreground"
                    )}
                  >
                    {c.label}
                  </span>
                  <span className="shrink-0 text-lg font-semibold tracking-tight">
                    {c.price}
                  </span>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Custom quote */}
      <section className="pb-20">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-wrap items-center justify-between gap-6 rounded-2xl border border-primary/20 bg-primary/5 p-8">
              <div className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <Wand2Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-semibold">Não achou o que precisa?</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Se seu negócio precisa de algo fora desses planos,
                    montamos um orçamento sob medida pra você.
                  </p>
                </div>
              </div>
              <Button className="shrink-0 rounded-full" asChild>
                <a href="/contact">Pedir orçamento personalizado</a>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Programa fundador — mesmo componente e mesma contagem de vagas
          da home. Antes esta página tinha uma redação própria e um "2 de 5"
          escrito à mão, que dessincronizariam na primeira venda. */}
      <FounderProgram className="pb-24" />

      {/* FAQ */}
      <section className="pb-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(produtosJsonLd) }}
        />
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              Dúvidas sobre o preço
            </h2>
            <Accordion type="single" collapsible className="mt-10">
              {faqs.map((faq) => (
                <AccordionItem key={faq.q} value={faq.q}>
                  <AccordionTrigger className="text-left text-base">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
