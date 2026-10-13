import Link from "next/link";
import {
  ArrowRightIcon,
  BadgeCheckIcon,
  BoxIcon,
  CheckIcon,
  RulerIcon,
  RocketIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { Card3D } from "@/components/brand/card-3d";
import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { eyebrow } from "@/components/solutions-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import {
  checkoutGroups,
  checkoutHref,
  type CheckoutPlan,
} from "@/lib/checkout";
import { siteConfig } from "@/lib/site-config";

const pricingTitle = "Preços · mytek — CRM a partir de R$99/mês, sem fidelidade";
const pricingDescription =
  "Preços dos produtos prontos da mytek: CRM a partir de R$99/mês, Dashboard a partir de R$397/mês, Landing Page a partir de R$999 e sites a partir de R$1.500. Projetos sob medida têm o valor combinado antes de começar.";

export const metadata: Metadata = {
  // `title.absolute` ignora o template "%s · mytek" do layout.
  title: { absolute: pricingTitle },
  description: pricingDescription,
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: pricingTitle,
    description: pricingDescription,
    url: "/pricing",
  },
  twitter: { title: pricingTitle, description: pricingDescription },
};

/** Os preços vêm do checkout: uma fonte só para o valor que o cliente lê. */
const group = (slug: string) =>
  checkoutGroups.find((g) => g.slug === slug)?.plans ?? [];
const crm = group("crm");
const dashboard = group("dashboard");
const combos = group("combos");
const churn = group("churn");
const landing = group("landing-page");

const readyList = [
  "CRM com WhatsApp",
  "Dashboard",
  "Landing page",
  "Sites (a partir de R$1.500)",
  "Previsão de churn",
];
const customList = [
  "Agentes de IA",
  "Automação com n8n",
  "Sistemas sob medida",
  "Mytek Hub e MyCash (sob demonstração)",
];

/** Cartão de plano: o destaque (featured) é roxo; os demais, brancos. */
function PlanCard({
  plan,
  featured = false,
  badge,
  label,
  cta = "Quero este",
  href,
}: {
  plan: CheckoutPlan;
  featured?: boolean;
  badge?: string;
  label: string;
  cta?: string;
  href?: string;
}) {
  return (
    <div className="h-full [perspective:1200px]">
      <Card3D
        className="h-full"
        maxTilt={8}
        glare={featured ? "rgba(255,255,255,0.28)" : "rgba(94,52,247,0.14)"}
      >
        <div
          style={{ transformStyle: "preserve-3d" }}
          className={
            "relative flex h-full flex-col rounded-3xl border p-8 " +
            (featured
              ? "border-white/20 bg-gradient-to-br from-[#7A57FF] via-[#5E34F7] to-[#4220C9] text-white shadow-[0_34px_60px_-22px_rgba(60,30,170,0.7)]"
              : "border-border bg-card shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)]")
          }
        >
          {badge && (
            <span className="absolute -top-3 left-8 rounded-full bg-lima px-3 py-1 text-[11px] font-bold text-lima-foreground">
              {badge}
            </span>
          )}
          <span
            className={
              "font-mono text-[11px] font-bold uppercase tracking-[0.06em] " +
              (featured ? "text-lima" : "text-primary")
            }
          >
            {label}
          </span>
          <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em] [transform:translateZ(24px)]">
            {plan.name}
          </h3>
          <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.05em] [transform:translateZ(34px)]">
            {plan.price}
            {plan.unit && (
              <span className="text-lg font-semibold opacity-70">{plan.unit}</span>
            )}
          </p>
          {plan.tagline && (
            <p
              className={
                "mt-2 text-sm " + (featured ? "text-white/80" : "text-muted-foreground")
              }
            >
              {plan.tagline}
            </p>
          )}
          <ul className="mt-6 flex-1 space-y-3 text-sm">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span
                  className={
                    "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full " +
                    (featured
                      ? "bg-lima text-lima-foreground"
                      : "bg-primary text-primary-foreground")
                  }
                >
                  <CheckIcon className="size-3" />
                </span>
                {f}
              </li>
            ))}
          </ul>
          {plan.note && (
            <p className="mt-4 text-xs text-muted-foreground">{plan.note}</p>
          )}
          <Button
            asChild
            size="lg"
            className={
              "mt-8 w-full rounded-full " +
              (featured ? "bg-lima text-lima-foreground hover:bg-lima/90" : "")
            }
          >
            <a href={href ?? checkoutHref(plan.slug)}>
              {cta} <ArrowRightIcon className="size-4" />
            </a>
          </Button>
        </div>
      </Card3D>
    </div>
  );
}

function SectionHead({
  tag,
  title,
  note,
}: {
  tag: string;
  title: string;
  note?: string;
}) {
  return (
    <BlurFade>
      <span className={eyebrow}>{tag}</span>
      <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
        {title}
        <span className="text-emphasis">.</span>
      </h2>
      {note && <p className="mt-3 max-w-2xl text-muted-foreground">{note}</p>}
    </BlurFade>
  );
}

const faqs = [
  {
    q: "O que tem preço fixo e o que é sob medida?",
    a: "Os produtos prontos têm preço fixo, aqui na página: CRM, Dashboard, Landing Page, sites (a partir de R$1.500) e previsão de churn. Tudo o que é sob medida, como agentes de IA, automações e sistemas, tem o valor combinado com você antes de começar.",
  },
  {
    q: "Preciso ter CRM pra contratar o Dashboard?",
    a: "Não. O Dashboard avulso custa R$397/mês e funciona sozinho, conectado às suas fontes de dados. Se você já é cliente de CRM, ele entra como add-on por R$197/mês, porque os dados já estão dentro da plataforma e o trabalho de integração não se repete.",
  },
  {
    q: "A Landing Page é cobrada todo mês?",
    a: "Não. É pagamento único: R$999 na Essencial e R$1.797 na Sob Medida. A página é sua e continua no ar sem mensalidade. O que é opcional e mensal é a manutenção depois do primeiro mês, a partir de R$297/mês, pra quem quer alterações recorrentes.",
  },
  {
    q: "Qual a diferença entre o CRM Normal e o Plus?",
    a: "O Plus adiciona o módulo Conhecimento com IA, que responde perguntas sobre a sua própria base, e inclui a previsão de churn. Como a IA depende de como a sua empresa organiza a informação, o plano inclui uma sessão de treinamento com a gente antes de liberar o acesso. O resto (funil, WhatsApp, 3 usuários) é igual nos dois.",
  },
  {
    q: "Como funciona a manutenção gratuita?",
    a: "Contratando Landing Page ou Dashboard, o primeiro mês inclui até 5 solicitações de ajuste sem custo: trocar texto, imagem, campo de formulário, métrica do painel. Depois desse mês, você escolhe entre suporte mensal a partir de R$297 ou pedidos avulsos, sem obrigação de contratar nada.",
  },
  {
    q: "E se eu precisar de algo fora desses planos?",
    a: "A gente monta orçamento sob medida. Integração com um sistema que você já usa, painel com uma métrica específica, fluxo de venda que não cabe no funil padrão: é só descrever no formulário de contato que respondemos com escopo e valor.",
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
 * Um `Product` por plano, com o `Offer` correspondente. O preço é parseado das
 * mesmas strings que a página exibe (uma fonte só). `UnitPriceSpecification`
 * distingue a mensalidade do pagamento único da Landing Page.
 */
const paraNumero = (preco: string) =>
  Number(preco.replace(/[^\d,]/g, "").replace(",", "."));

const produtosJsonLd = [
  { grupo: "CRM", planos: crm, mensal: true },
  { grupo: "Dashboard", planos: dashboard, mensal: true },
  { grupo: "Previsão de churn", planos: churn, mensal: true },
  { grupo: "Landing Page", planos: landing, mensal: false },
].flatMap(({ grupo, planos, mensal }) =>
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

const anchors = [
  ["CRM", "#crm"],
  ["Dashboard", "#dashboard"],
  ["Combos", "#combos"],
  ["Landing page", "#landing-page"],
  ["Sites", "#sites"],
  ["Previsão de churn", "#churn"],
] as const;

export default function PricingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 · Capa */}
        <section className="dark relative overflow-hidden bg-background pt-28 pb-16 text-foreground lg:pt-36 lg:pb-20">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_0%,rgba(94,52,247,0.45),transparent_70%)]"
          />
          <GridPattern
            width={56}
            height={56}
            className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_50%_20%,black,transparent)]"
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
            <BlurFade delay={0.05}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                Preços
              </span>
            </BlurFade>
            <BlurFade delay={0.12}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
                Preços dos nossos{" "}
                <span className="text-lima">produtos prontos.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
                Aqui estão só os valores dos sistemas que já vêm prontos. O que
                é sob medida tem o valor combinado com você, por fora, antes
                de começar.
              </p>
            </BlurFade>
            <BlurFade delay={0.3}>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {anchors.map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-sm font-semibold text-white/85 transition-colors hover:border-lima hover:text-lima"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Pronto x sob medida */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <div className="grid gap-5 md:grid-cols-2">
              <BlurFade>
                <div className="h-full rounded-3xl border border-primary/30 bg-gradient-to-br from-[#7A57FF] via-[#5E34F7] to-[#4220C9] p-8 text-white shadow-[0_34px_60px_-26px_rgba(60,30,170,0.7)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/30">
                    <BoxIcon className="size-6" />
                  </span>
                  <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                    Produtos prontos
                  </h2>
                  <p className="mt-1 text-sm text-white/80">
                    Preço fixo, aqui nesta página.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {readyList.map((i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <BadgeCheckIcon className="size-4 shrink-0 text-lima" />
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
              </BlurFade>
              <BlurFade delay={0.1}>
                <div className="dark h-full rounded-3xl border border-white/12 bg-gradient-to-br from-[#1b0f36] to-[#0F0819] p-8 text-foreground shadow-[0_34px_60px_-30px_rgba(94,52,247,0.55)]">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-lima text-lima-foreground">
                    <RulerIcon className="size-6" />
                  </span>
                  <h2 className="mt-5 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                    Sob medida
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Valor combinado por fora, antes de começar.
                  </p>
                  <ul className="mt-5 space-y-2.5 text-sm">
                    {customList.map((i) => (
                      <li key={i} className="flex items-center gap-2.5">
                        <CheckIcon className="size-4 shrink-0 text-lima" />
                        {i}
                      </li>
                    ))}
                  </ul>
                  <Button asChild variant="outline" className="mt-6 rounded-full border-white/25 bg-white/[0.06] text-white hover:bg-white/15">
                    <Link href="/contact">
                      Pedir um orçamento <ArrowRightIcon className="size-4" />
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            </div>
          </div>
        </section>

        {/* 3 · CRM */}
        <section id="crm" className="scroll-mt-24 pb-20 lg:pb-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <SectionHead
              tag="CRM"
              title="CRM com WhatsApp"
              note="Assinatura mensal, sem fidelidade. Funil, WhatsApp e alerta de lead parado."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {crm.map((p, i) => (
                <BlurFade key={p.slug} delay={i * 0.1}>
                  <PlanCard
                    plan={p}
                    featured={i === crm.length - 1}
                    badge={i === crm.length - 1 ? "Com IA e previsão de churn" : undefined}
                    label="Assinatura mensal"
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Dashboard */}
        <section id="dashboard" className="scroll-mt-24 bg-muted py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <SectionHead
              tag="Dashboard"
              title="Dashboard"
              note="Painéis e relatórios do seu negócio. Funciona sozinho, mesmo sem o CRM."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {dashboard.map((p, i) => (
                <BlurFade key={p.slug} delay={i * 0.1}>
                  <PlanCard
                    plan={p}
                    featured={i === dashboard.length - 1}
                    badge={i === dashboard.length - 1 ? "Com suporte" : undefined}
                    label="Assinatura mensal"
                  />
                </BlurFade>
              ))}
            </div>
            <BlurFade delay={0.15}>
              <div className="mt-8 rounded-2xl border border-primary/25 bg-card p-6 text-sm shadow-[0_18px_36px_-26px_rgba(94,52,247,0.45)]">
                <p>
                  <strong>Já é cliente do CRM?</strong> Adicione o Dashboard por{" "}
                  <strong>+R$197/mês</strong> (sem suporte) ou{" "}
                  <strong>+R$347/mês</strong> (com suporte).
                </p>
                <p className="mt-2 text-muted-foreground">
                  No avulso, a gente conecta o Dashboard às suas fontes de
                  dados e mantém essa integração. Como add-on do CRM, os dados
                  já estão dentro da plataforma e esse trabalho não se repete.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 5 · Combos */}
        <section id="combos" className="scroll-mt-24 py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <SectionHead
              tag="Combos"
              title="CRM + Dashboard juntos"
              note="Contratando os dois, o preço de cada um já sai menor do que avulso."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {combos.map((c, i) => (
                <BlurFade key={c.slug} delay={i * 0.06}>
                  <div
                    className={
                      "relative flex h-full items-center justify-between gap-4 rounded-2xl border p-5 transition-transform hover:-translate-y-0.5 " +
                      (i === 0
                        ? "border-primary/50 bg-primary/[0.06] shadow-[0_18px_36px_-22px_rgba(94,52,247,0.5)]"
                        : "border-border bg-card")
                    }
                  >
                    {i === 0 && (
                      <span className="absolute -top-2.5 left-5 rounded-full bg-primary px-2.5 py-0.5 text-[11px] font-bold text-primary-foreground">
                        Recomendado para começar
                      </span>
                    )}
                    <div>
                      <p className="text-sm font-semibold">{c.name}</p>
                      <p className="mt-0.5 text-xs text-muted-foreground">
                        {c.features[0]}
                      </p>
                    </div>
                    <p className="shrink-0 font-heading text-2xl font-extrabold tracking-[-0.04em]">
                      {c.price}
                      <span className="text-sm font-semibold text-muted-foreground">
                        {c.unit}
                      </span>
                    </p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · Landing page */}
        <section id="landing-page" className="scroll-mt-24 bg-muted py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <SectionHead
              tag="Landing page"
              title="Landing page"
              note="Pagamento único, sem mensalidade. O primeiro mês inclui até 5 ajustes sem custo, e quem já é cliente de CRM ou Dashboard tem 20% de desconto: Essencial por R$799,20 e Sob Medida por R$1.437,60."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {landing.map((p, i) => (
                <BlurFade key={p.slug} delay={i * 0.1}>
                  <PlanCard
                    plan={p}
                    featured={i === landing.length - 1}
                    badge={i === landing.length - 1 ? "Mais completa" : undefined}
                    label="Pagamento único"
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 7 · Sites e previsão de churn */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-5xl gap-6 px-4 md:grid-cols-2 lg:px-8">
            <BlurFade>
              <div id="sites" className="scroll-mt-24 h-full rounded-3xl border border-border bg-card p-8 shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)]">
                <span className={eyebrow}>Sites</span>
                <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                  Sites institucionais
                </h2>
                <p className="mt-3 text-sm text-muted-foreground">a partir de</p>
                <p className="font-heading text-5xl font-extrabold tracking-[-0.05em]">
                  R$1.500
                </p>
                <p className="mt-3 text-sm text-muted-foreground">
                  O valor final depende do tamanho do site, dos textos, das
                  integrações e do prazo, e fica combinado na proposta.
                </p>
                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href="/solucoes/sites">
                    Ver sites <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
            <BlurFade delay={0.1}>
              <div id="churn" className="scroll-mt-24 h-full rounded-3xl border border-primary/40 bg-primary/[0.06] p-8 shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)]">
                <span className={eyebrow}>Previsão de churn</span>
                <h2 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                  Previsão de churn avulsa
                </h2>
                <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.05em]">
                  R$397
                  <span className="text-lg font-semibold text-muted-foreground">/mês</span>
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  mais R$497 de implantação, pagos uma vez só
                </p>
                <p className="mt-3 text-sm">
                  Também vem incluída no <strong>CRM Plus</strong>, por R$297/mês.
                </p>
                <Button asChild variant="outline" className="mt-6 rounded-full">
                  <Link href="/solucoes/previsao-de-churn">
                    Ver previsão de churn <ArrowRightIcon className="size-4" />
                  </Link>
                </Button>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 8 · Sob medida */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
            <span className={eyebrow}>Sob medida</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              O que é sob medida tem valor combinado
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Agentes de IA, automações, sistemas e qualquer coisa fora dos
              planos acima. A gente entende o seu caso e responde com escopo,
              prazo e preço antes de qualquer trabalho começar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Agentes de IA", "Automação com n8n", "Sistemas sob medida"].map((c, i) => (
                <Link
                  key={c}
                  href={
                    ["/solucoes/agentes-de-ia", "/solucoes/automacao-n8n", "/solucoes/sistemas-sob-medida"][i]
                  }
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-semibold text-white/85 transition-colors hover:border-lima hover:text-lima"
                >
                  {c}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex justify-center">
              <ShimmerButton href="/contact" className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
                Pedir um orçamento
              </ShimmerButton>
            </div>
          </div>
        </section>

        {/* 9 · Perguntas */}
        <section className="py-24 lg:py-28">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(produtosJsonLd) }}
          />
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Dúvidas sobre o preço
            </h2>
            <Accordion type="single" collapsible className="mt-8">
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
          </div>
        </section>

        <section className="dark relative overflow-hidden bg-background py-24 text-foreground">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <BrandGlyph
            still
            size={460}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.2]"
          />
          <div className="relative mx-auto max-w-2xl px-4 text-center">
            <h2 className="text-3xl font-extrabold tracking-[-0.04em] text-balance lg:text-4xl">
              Ficou em dúvida por onde começar?
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
              Fale com o time. A gente responde no WhatsApp em até 4h úteis.
            </p>
            <div className="mt-7 flex justify-center">
              <ShimmerButton href="/contact" className="h-12 px-8">
                Falar com o time
              </ShimmerButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
