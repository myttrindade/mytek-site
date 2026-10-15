import Link from "next/link";
import {
  ArrowRightIcon,
  BarChart3Icon,
  DatabaseIcon,
  FilterIcon,
  RefreshCwIcon,
  RocketIcon,
  TrophyIcon,
  UsersIcon,
  WorkflowIcon,
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
import { getSolution } from "@/lib/solutions-data";

const sol = getSolution("dashboards")!;

export const metadata: Metadata = {
  title: "Dashboards",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/dashboards" },
};

/** Preços e itens vêm do checkout: uma fonte só para o valor que o cliente lê. */

const chain = [
  { icon: DatabaseIcon, title: "Suas fontes", body: "Planilhas, CRM, sistemas e bancos de dados." },
  { icon: WorkflowIcon, title: "Conexão e tratamento", body: "A gente liga as fontes e organiza os dados." },
  { icon: BarChart3Icon, title: "Painel", body: "Indicadores claros, que qualquer pessoa entende." },
  { icon: TrophyIcon, title: "Decisão", body: "Você age no que importa, sem esperar relatório." },
] as const;

const perks = [
  { icon: FilterIcon, title: "Indicadores sob medida", body: "Definidos junto com você, não painéis genéricos." },
  { icon: DatabaseIcon, title: "Conectado às suas fontes", body: "Planilhas, CRM, bancos de dados e outras ferramentas." },
  { icon: RefreshCwIcon, title: "Atualiza sozinho", body: "Os números se renovam, sem ninguém montar relatório." },
  { icon: UsersIcon, title: "A equipe entende", body: "Do dono ao vendedor, sem precisar de treinamento longo." },
] as const;

/** Painel de exemplo: números e gráficos fictícios, avisados na própria arte. */
function DashboardHeroVisual() {
  const bars = [38, 52, 44, 66, 58, 74, 62, 86, 70, 92, 80, 98];
  return (
    <div className="relative mx-auto w-full max-w-[620px] pb-10 pt-6">
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
            painel.suaempresa.com.br
          </span>
        </div>
        <div className="space-y-3 bg-gradient-to-br from-[#2a1760] to-[#0F0819] p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              ["Faturamento", "R$ 2,34 Mi"],
              ["Resultado", "R$ 732 Mil"],
              ["Margem", "31,3%"],
            ].map(([l, v], i) => (
              <div key={l} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
                <p className="font-mono text-[9px] font-bold uppercase tracking-[0.07em] text-white/50">
                  {l}
                </p>
                <p
                  className={
                    "mt-1 font-heading text-lg font-extrabold tracking-[-0.04em] " +
                    (i === 0 ? "text-lima" : "text-white")
                  }
                >
                  {v}
                </p>
              </div>
            ))}
          </div>
          <div className="grid gap-3 sm:grid-cols-[1.5fr_1fr]">
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-[10px] font-semibold text-white/80">Evolução do faturamento</p>
              <div className="mt-3 flex h-24 items-end gap-1.5">
                {bars.map((h, i) => (
                  <span
                    key={i}
                    className={
                      "flex-1 rounded-t " +
                      (i === bars.length - 1 ? "bg-lima" : "bg-gradient-to-t from-[#5E34F7] to-[#8D6BFF]")
                    }
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-[10px] font-semibold text-white/80">Por categoria</p>
              <div className="mt-3 space-y-2.5">
                {[88, 64, 46, 30].map((w, i) => (
                  <div key={i} className="h-2 rounded-full bg-white/10">
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-[#5E34F7] to-[#8D6BFF]"
                      style={{ width: `${w}%` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <p className="text-[10px] text-white/40">Dados de exemplo, para ilustrar o painel.</p>
        </div>
      </div>

      <div className="hero-float-a absolute -left-3 top-24 hidden w-[190px] sm:block">
        <div
          className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
          style={{ rotate: "-2deg" }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <RefreshCwIcon className="size-3.5 text-lima" />
            Atualizado
          </div>
          <p className="mt-1 text-xs text-white/70">Os números se renovam sozinhos.</p>
        </div>
      </div>
      <div className="hero-float-c absolute -bottom-2 right-0 hidden w-[200px] sm:block">
        <div
          className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
          style={{ rotate: "2deg" }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <DatabaseIcon className="size-3.5 text-lima" />
            Suas fontes
          </div>
          <p className="mt-1 text-xs text-white/70">Planilhas, CRM e bancos, num painel só.</p>
        </div>
      </div>
    </div>
  );
}

export default function DashboardsPage() {
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
            <div>
              <nav className="font-mono text-xs text-muted-foreground">
                <Link href="/#solucoes" className="hover:text-foreground">
                  soluções
                </Link>{" "}
                / dashboards
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Dados
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Os números do seu negócio num lugar só,{" "}
                  <span className="text-lima">sem montar planilha.</span>
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
              <DashboardHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Do dado à decisão */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Do dado à decisão</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Dashboard bom responde pergunta, não enfeita
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                A gente parte do que você precisa decidir e liga as fontes que
                respondem isso.
              </p>
            </BlurFade>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-4">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
              />
              {chain.map((c, i) => (
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
                Um painel que a equipe realmente usa
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
              Veja um dashboard funcionando
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Um painel de performance comercial em Power BI, com páginas,
              filtros por período, vendedor e unidade, tabelas, mapa de calor
              e metas.
            </p>
            <figure className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0F0819] shadow-[0_40px_100px_-30px_rgba(110,72,255,0.7)]">
                <video
                  src="/brand/dashboards/demo.mp4"
                  poster="/brand/dashboards/poster.jpg"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="aspect-video w-full bg-black"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
                Dashboard de Performance Comercial em Power BI, com dados de
                exemplo.
              </figcaption>
            </figure>
          </div>
        </section>

        {/* 5 · Quanto custa */}
        <section id="planos" className="py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <BlurFade>
              <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)] lg:p-12">
                <span className={eyebrow}>Quanto custa</span>
                <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                  Orçamento sob medida
                  <span className="text-emphasis">.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                  O valor depende das fontes de dados que a gente vai conectar
                  e dos painéis que você precisa. Depois de uma conversa curta,
                  você recebe escopo, prazo e valor antes de qualquer trabalho
                  começar.
                </p>
                <div className="mt-8">
                  <ShimmerButton href="/contact">
                    Pedir um orçamento <ArrowRightIcon className="size-4" />
                  </ShimmerButton>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 6 · Como funciona */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Como funciona</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] lg:text-5xl">
              Em {sol.steps.length} etapas, sem surpresa
              <span className="text-emphasis">.</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {sol.steps.map(([title, body], i) => (
                <li key={title} className="border-t-2 border-primary pt-4">
                  <span className="font-mono text-sm font-bold text-primary">0{i + 1}</span>
                  <h3 className="mt-2 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 7 · Perguntas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre dashboards
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
              Pronto para ver os números{" "}
              <span className="text-lima">sem esforço?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte o que você precisa acompanhar. A gente responde no WhatsApp
              em até 4h úteis, com prazo e preço.
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
