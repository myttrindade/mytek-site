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
  servicosAvulsos,
  type CheckoutPlan,
} from "@/lib/checkout";
import { siteConfig } from "@/lib/site-config";

const pricingTitle = "Preços da mytek · CRM, Landing page e serviços com valor";
const pricingDescription =
  "Valores da mytek: CRM Simples, CRM com IA e CRM + Churn (implantação + mensalidade, sem fidelidade), Landing page em valor único e serviços como site, dashboard, agente de IA e automação. O que é sob medida tem o valor combinado antes de começar.";

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
const landing = group("landing-page");

const readyList = [
  "CRM Simples: R$247 de implantação + R$137/mês",
  "CRM com IA: R$447 de implantação + R$297/mês",
  "CRM + Churn: R$447 de implantação + R$397/mês",
  "Landing page: R$777, valor único",
];
const customList = [
  "Sistemas sob medida",
  "MyHub e MyCash (sob demonstração)",
  "Qualquer projeto fora dos valores desta página",
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
    q: "O que tem valor fixo e o que é sob medida?",
    a: "Os CRMs, a Landing page e os serviços da tabela (site, ajustes em site, agente de IA, automação, dashboard e previsão de churn) têm valor definido nesta página. Sistemas sob medida e o MyHub e o MyCash são sob consulta: a gente entende o seu caso e combina escopo, prazo e valor antes de começar.",
  },
  {
    q: "O que é a implantação?",
    a: "É o valor pago uma vez só para a mytek configurar tudo para o seu negócio e deixar o serviço funcionando. Depois dela, você paga só a mensalidade, sem fidelidade. Nos pacotes de CRM com IA e CRM + Churn, a implantação é a mesma (R$447).",
  },
  {
    q: "A Landing page é cobrada todo mês?",
    a: "Não. A Landing page tem valor único, de R$777, pago uma vez. A página é sua. A manutenção mensal, de R$67, é opcional.",
  },
  {
    q: "Qual a diferença entre os três CRMs?",
    a: "O CRM Simples tem CRM com WhatsApp para até 3 usuários. O CRM com IA acrescenta o agente de IA no atendimento. O CRM + Churn acrescenta ainda a previsão de churn, que avisa quais clientes estão para sair, a tempo de agir.",
  },
  {
    q: "Tem fidelidade?",
    a: "Não. Nos planos mensais você pode cancelar quando quiser.",
  },
  {
    q: "E se eu precisar de algo fora desta página?",
    a: "A gente monta orçamento sob medida. Um sistema, uma integração ou um fluxo que não cabe nos valores acima: é só descrever no formulário de contato que respondemos com escopo e valor.",
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
  { grupo: "Landing page", planos: landing, mensal: false },
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
  ["Landing page", "#landing-page"],
  ["Outros serviços", "#servicos"],
  ["Sob medida", "#sob-medida"],
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
                <span className="text-lima">serviços.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.2}>
              <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
                Os valores dos CRMs, da Landing page e dos serviços da
                mytek. Os CRMs têm uma implantação, paga uma vez, e uma
                mensalidade sem fidelidade. O que é sob medida tem o valor
                combinado com você antes de começar.
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
                    Pacotes
                  </h2>
                  <p className="mt-1 text-sm text-white/80">
                    Valor fechado, aqui nesta página.
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
                    Valor combinado antes de começar.
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
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHead
              tag="CRM"
              title="CRM com WhatsApp"
              note="Três jeitos de ter o CRM. Todos têm uma implantação, paga uma vez, e uma mensalidade sem fidelidade."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {crm.map((p, i) => {
                const featured = i === crm.length - 1;
                return (
                  <BlurFade key={p.slug} delay={i * 0.1}>
                    <PlanCard
                      plan={p}
                      featured={featured}
                      badge={featured ? "Com previsão de churn" : undefined}
                      label="Implantação + mensal"
                    />
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </section>

        {/* 4 · Landing page */}
        <section id="landing-page" className="scroll-mt-24 bg-muted py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHead
              tag="Landing page"
              title="Landing page"
              note="Valor único: você paga uma vez e a página é sua. A manutenção mensal é opcional."
            />
            <div className="mx-auto mt-12 max-w-md">
              {landing.map((p) => (
                <BlurFade key={p.slug}>
                  <PlanCard plan={p} label="Valor único" />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Outros servicos */}
        <section id="servicos" className="scroll-mt-24 py-20 lg:py-24">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <SectionHead
              tag="Outros serviços"
              title="Sites, dados, IA e automação"
              note="Valores de cada serviço. Para sistemas sob medida, o orçamento vem depois de uma conversa."
            />
            <BlurFade delay={0.1}>
              <div className="mt-10 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_28px_54px_-28px_rgba(94,52,247,0.45)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="bg-primary text-primary-foreground">
                        <th className="p-4 font-heading font-extrabold">Serviço</th>
                        <th className="p-4 font-heading font-extrabold">Detalhe</th>
                        <th className="p-4 font-heading font-extrabold">Pago uma vez</th>
                        <th className="p-4 font-heading font-extrabold">Mensal</th>
                      </tr>
                    </thead>
                    <tbody>
                      {servicosAvulsos.map((x) => (
                        <tr key={x.slug} className="border-t border-border align-top">
                          <th className="p-4 font-semibold">
                            <Link href={x.href} className="hover:text-primary">
                              {x.nome}
                            </Link>
                          </th>
                          <td className="p-4 text-muted-foreground">
                            {x.detalhe}
                            {x.nota && <span className="block text-xs">{x.nota}</span>}
                          </td>
                          <td className="whitespace-nowrap p-4 font-semibold">{x.uma_vez}</td>
                          <td className="whitespace-nowrap p-4 font-semibold">
                            {x.mensal ?? "sem mensalidade"}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t border-border align-top">
                        <th className="p-4 font-semibold">
                          <Link href="/solucoes/mytek-hub" className="hover:text-primary">
                            MyHub e MyCash
                          </Link>
                        </th>
                        <td className="p-4 text-muted-foreground">
                          Produtos próprios da mytek
                          <span className="block text-xs">Sob demonstração.</span>
                        </td>
                        <td className="whitespace-nowrap p-4 font-semibold">Sob consulta</td>
                        <td className="whitespace-nowrap p-4 font-semibold">Sob consulta</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 8 · Sob medida */}
        <section id="sob-medida" className="dark relative scroll-mt-24 overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-4xl px-4 text-center lg:px-8">
            <span className={eyebrow}>Sob medida</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              O que é sob medida tem valor combinado
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              Sistemas feitos para o seu processo e qualquer coisa fora dos
              valores acima. A gente entende o seu caso e responde com
              escopo, prazo e preço antes de qualquer trabalho começar.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {["Sites", "Dashboards", "Agentes de IA", "Automação com n8n", "Sistemas sob medida"].map((c, i) => (
                <Link
                  key={c}
                  href={
                    ["/solucoes/sites", "/solucoes/dashboards", "/solucoes/agentes-de-ia", "/solucoes/automacao-n8n", "/solucoes/sistemas-sob-medida"][i]
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
