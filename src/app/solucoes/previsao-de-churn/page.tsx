import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  CheckIcon,
  DatabaseIcon,
  FileSpreadsheetIcon,
  ListOrderedIcon,
  RocketIcon,
  SearchCheckIcon,
  TargetIcon,
  TrendingDownIcon,
  UsersIcon,
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
import { checkoutHref } from "@/lib/checkout";
import { getSolution } from "@/lib/solutions-data";

const sol = getSolution("previsao-de-churn")!;

export const metadata: Metadata = {
  title: "Previsão de churn",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/previsao-de-churn" },
};

const flow = [
  { icon: FileSpreadsheetIcon, title: "Seus clientes", body: "Uma planilha do CRM ou do banco, um cliente por linha." },
  { icon: DatabaseIcon, title: "Modelo treinado", body: "Aprende com o histórico de quem ficou e de quem saiu." },
  { icon: ListOrderedIcon, title: "Lista por risco", body: "Do maior para o menor risco, com o motivo de cada um." },
  { icon: UsersIcon, title: "Sua equipe age", body: "Aborda primeiro quem vale mais a pena." },
] as const;

const perks = [
  { icon: ListOrderedIcon, title: "Quem tem mais risco", body: "Uma lista ordenada, pronta para a equipe de retenção trabalhar." },
  { icon: SearchCheckIcon, title: "Por que cada um pode sair", body: "O principal motivo de cada previsão, para a conversa ser certeira." },
  { icon: TargetIcon, title: "Quem vale abordar", body: "Pesa o custo da oferta contra o que se preserva ao reter o cliente." },
  { icon: TrendingDownIcon, title: "Simule antes de ofertar", body: "Teste o efeito de uma mudança, como migrar do plano mensal para o anual." },
] as const;

/** Lista de prioridade de contato: clientes fictícios, avisados na própria arte. */
function ChurnHeroVisual() {
  const rows = [
    { name: "Cliente A", tag: "alto", pct: 93, why: "contrato mensal · 1 mês de casa", tone: "#FF5D73" },
    { name: "Cliente B", tag: "médio", pct: 47, why: "sem suporte técnico", tone: "#FFB020" },
    { name: "Cliente C", tag: "baixo", pct: 4, why: "contrato de 2 anos · 5 anos de casa", tone: "#2BD38A" },
  ];
  return (
    <div className="relative mx-auto w-full max-w-[520px] pb-10 pt-6">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.5),transparent_65%)]"
      />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0F0819] shadow-[0_30px_90px_-20px_rgba(110,72,255,0.7)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/50">
            retencao.suaempresa.com.br
          </span>
        </div>
        <div className="space-y-3 bg-gradient-to-br from-[#2a1760] to-[#0F0819] p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/50">
                Prioridade de contato
              </p>
              <p className="mt-1 font-heading text-lg font-extrabold tracking-[-0.03em] text-white">
                3 clientes para hoje
              </p>
            </div>
            <span className="rounded-full bg-lima px-3 py-1 text-[10px] font-bold text-lima-foreground">
              ordenado por risco
            </span>
          </div>
          {rows.map((r) => (
            <div
              key={r.name}
              className="rounded-xl border border-white/10 bg-white/[0.06] p-3.5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <p className="flex items-center gap-2 text-sm font-bold text-white">
                    {r.name}
                    <span
                      className="rounded-full px-2 py-0.5 text-[9px] font-bold uppercase"
                      style={{ background: `${r.tone}26`, color: r.tone }}
                    >
                      {r.tag}
                    </span>
                  </p>
                  <p className="mt-0.5 truncate text-[11px] text-white/55">{r.why}</p>
                </div>
                <span
                  className="font-heading text-2xl font-extrabold tracking-[-0.04em]"
                  style={{ color: r.tone }}
                >
                  {r.pct}%
                </span>
              </div>
              <div className="mt-2.5 h-1.5 rounded-full bg-white/10">
                <span
                  className="block h-full rounded-full"
                  style={{ width: `${r.pct}%`, background: r.tone }}
                />
              </div>
            </div>
          ))}
          <p className="text-[10px] text-white/40">
            Clientes fictícios, para ilustrar a lista.
          </p>
        </div>
      </div>
      <div className="hero-float-a absolute -bottom-1 -left-5 hidden w-[170px] sm:block">
        <div
          className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
          style={{ rotate: "-2deg" }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <SearchCheckIcon className="size-3.5 text-lima" />
            Mostra o motivo
          </div>
          <p className="mt-1 text-xs text-white/70">De cada previsão.</p>
        </div>
      </div>
    </div>
  );
}

export default function ChurnPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 · Capa */}
        <section className="dark relative overflow-hidden bg-background pt-24 pb-12 text-foreground lg:pt-28 lg:pb-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(94,52,247,0.4),transparent_70%),radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(94,52,247,0.2),transparent_70%)]"
          />
          <GridPattern
            width={56}
            height={56}
            className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_60%_30%,black,transparent)]"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1fr_1fr] lg:px-8">
            <div>
              <nav className="font-mono text-xs text-muted-foreground">
                <Link href="/#solucoes" className="hover:text-foreground">
                  soluções
                </Link>{" "}
                / previsão de churn
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Machine learning
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Saiba quais clientes têm risco de sair{" "}
                  <span className="text-lima">antes que eles saiam.</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="mt-4 max-w-xl text-base text-muted-foreground text-pretty">
                  {sol.intro}
                </p>
              </BlurFade>
              <BlurFade delay={0.35}>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ShimmerButton href="/contact">
                    <RocketIcon className="size-4" />
                    Pedir um orçamento
                  </ShimmerButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="#exemplo">Ver um exemplo ↓</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="lg:[zoom:0.72]">
              <ChurnHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Como funciona na prática */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Da planilha à ação</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Do histórico dos seus clientes a quem abordar hoje
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Oferecer desconto para todo mundo não resolve: o desconto dado
                a quem não ia sair consome o ganho. A pergunta é em quem
                investir a oferta.
              </p>
            </BlurFade>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
              />
              {flow.map((c, i) => (
                <BlurFade key={c.title} delay={i * 0.08}>
                  <li className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    <span
                      className={
                        "relative z-10 flex size-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_-10px_rgba(94,52,247,0.7)] ring-4 ring-background " +
                        (i === 3
                          ? "bg-lima text-lima-foreground"
                          : "bg-gradient-to-br from-[#6E48FF] to-[#5E34F7]")
                      }
                    >
                      <c.icon className="size-6" />
                    </span>
                    <span className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-extrabold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                  </li>
                </BlurFade>
              ))}
            </ol>
          </div>
        </section>

        {/* 3 · O que você recebe */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que você recebe</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Uma lista para agir, não um relatório para guardar
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {perks.map((p, i) => (
                <BlurFade key={p.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={10} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <p.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {p.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {p.body}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Exemplo real */}
        <section
          id="exemplo"
          className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28"
        >
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
            <span className={eyebrow}>Exemplo real</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Um app de previsão de churn funcionando
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Um aplicativo que construímos: você envia a planilha dos
              clientes e recebe a lista ordenada por risco, com o motivo e a
              recomendação de abordar ou não.
            </p>
            <figure className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0F0819] shadow-[0_40px_100px_-30px_rgba(110,72,255,0.7)]">
                <Image
                  src="/brand/churn/app.jpg"
                  alt="Aplicativo de previsão de churn: lista de clientes ordenada por risco de cancelamento, com o motivo de cada previsão"
                  width={1200}
                  height={750}
                  className="h-auto w-full"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
                Aplicativo de previsão de churn, com clientes fictícios.
              </figcaption>
            </figure>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="outline" className="rounded-full border-white/25 bg-white/[0.06] text-white hover:bg-white/15">
                <a
                  href="https://previsao-churn.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Testar o app de exemplo
                  <ArrowUpRightIcon className="size-4" />
                </a>
              </Button>
              <p className="max-w-md text-xs text-muted-foreground">
                O app de exemplo usa uma base de clientes fictícios e pode
                levar cerca de 1 minuto para abrir na primeira vez.
              </p>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Quanto custa</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Avulsa ou junto com o CRM
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Nos dois, a implantação é paga uma vez e depois vem a
                mensalidade, sem fidelidade.
              </p>
            </BlurFade>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {[
                {
                  tag: "Avulsa",
                  name: "Previsão de churn",
                  note: "Para quem já tem CRM. Implantação paga uma vez e depois a mensalidade.",
                  items: [
                    "Análise e preparação do seu histórico de clientes",
                    "Modelo treinado e avaliado com os seus dados",
                    "Lista de clientes em risco, com o motivo de cada um",
                    "Reavaliação do modelo conforme entram dados novos",
                  ],
                  cta: "Pedir uma proposta",
                  href: "/contact",
                  featured: false,
                },
                {
                  tag: "Pacote CRM + Churn",
                  name: "CRM + Churn",
                  note: "Junto com o CRM e o agente de IA. Implantação paga uma vez e depois a mensalidade.",
                  items: [
                    "CRM com WhatsApp e agente de IA",
                    "Previsão de churn: avisa quais clientes estão para sair",
                    "Sem fidelidade no plano mensal",
                  ],
                  cta: "Quero o CRM + Churn",
                  href: checkoutHref("crm-churn"),
                  featured: true,
                },
              ].map((plan, i) => (
                <BlurFade key={plan.name} delay={i * 0.1}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D
                      className="h-full"
                      maxTilt={8}
                      glare={plan.featured ? "rgba(255,255,255,0.28)" : "rgba(94,52,247,0.14)"}
                    >
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className={
                          "relative flex h-full flex-col rounded-3xl border p-8 " +
                          (plan.featured
                            ? "border-white/20 bg-gradient-to-br from-[#7A57FF] via-[#5E34F7] to-[#4220C9] text-white shadow-[0_34px_60px_-22px_rgba(60,30,170,0.7)]"
                            : "border-border bg-card shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)]")
                        }
                      >
                        <span
                          className={
                            "font-mono text-[11px] font-bold uppercase tracking-[0.06em] " +
                            (plan.featured ? "text-lima" : "text-primary")
                          }
                        >
                          {plan.tag}
                        </span>
                        <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em] [transform:translateZ(24px)]">
                          {plan.name}
                        </h3>
                        <p
                          className={
                            "mt-3 text-sm " +
                            (plan.featured ? "text-white/80" : "text-muted-foreground")
                          }
                        >
                          {plan.note}{" "}
                          <Link href="/pricing" className="font-semibold underline underline-offset-4">
                            Ver valores na página de preços
                          </Link>
                          .
                        </p>
                        <ul className="mt-6 flex-1 space-y-3 text-sm">
                          {plan.items.map((f) => (
                            <li key={f} className="flex items-start gap-3">
                              <span
                                className={
                                  "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full " +
                                  (plan.featured
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
                        <Button
                          asChild
                          size="lg"
                          className={
                            "mt-8 w-full rounded-full " +
                            (plan.featured ? "bg-lima text-lima-foreground hover:bg-lima/90" : "")
                          }
                        >
                          <a href={plan.href}>
                            {plan.cta} <ArrowRightIcon className="size-4" />
                          </a>
                        </Button>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · Honestidade sobre o que o modelo e */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade>
              <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 lg:p-10">
                <span className={eyebrow}>O que esperar</span>
                <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.03em] text-balance lg:text-3xl">
                  Uma estimativa de risco, não uma garantia
                </h2>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "O modelo estima a probabilidade de cada cliente sair e ajuda a priorizar a ação. Ele não garante quem vai sair.",
                    "O exemplo foi construído e testado com uma base pública. Com os dados da sua empresa, a gente treina e avalia o modelo antes de prometer qualquer coisa.",
                    "Se os seus dados ainda não bastam, a gente diz antes de começar.",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-3">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                        <CheckIcon className="size-3" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 6 · O que está incluso e etapas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Dos dados à lista na mão da equipe
                <span className="text-emphasis">.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {sol.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <ol className="grid gap-6">
              {sol.steps.map(([title, body], i) => (
                <li key={title} className="border-t-2 border-primary pt-4">
                  <span className="font-mono text-sm font-bold text-primary">0{i + 1}</span>
                  <h3 className="mt-1 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7 · Perguntas */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre previsão de churn
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {sol.faq.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* 8 · Chamada final */}
        <section className="dark relative overflow-hidden bg-background py-28 text-foreground">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <BrandGlyph
            still
            size={520}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-balance lg:text-5xl">
              Quer saber quem pode sair{" "}
              <span className="text-lima">antes de perder?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte como é a sua base de clientes. A gente responde no
              WhatsApp em até 4h úteis e diz se os dados já bastam.
            </p>
            <div className="mt-8 flex justify-center">
              <ShimmerButton href="/contact" className="h-14 px-10 text-base">
                <RocketIcon className="size-5" />
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
