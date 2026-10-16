import Link from "next/link";
import {
  ArrowUpRightIcon,
  BoxesIcon,
  CheckIcon,
  CircleDashedIcon,
  CodeXmlIcon,
  FileSpreadsheetIcon,
  KanbanSquareIcon,
  LayoutDashboardIcon,
  LayersIcon,
  PlugIcon,
  RocketIcon,
  RulerIcon,
  TrendingDownIcon,
  UserRoundIcon,
  WalletIcon,
  WrenchIcon,
  XIcon,
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

const sol = getSolution("sistemas-sob-medida")!;

export const metadata: Metadata = {
  title: "Sistemas sob medida",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/sistemas-sob-medida" },
};

const signs = [
  { icon: FileSpreadsheetIcon, title: "A planilha virou um monstro", body: "Ninguém mais entende, e um erro de digitação custa caro." },
  { icon: BoxesIcon, title: "A ferramenta pronta não encaixa", body: "Você adapta o seu processo ao software, e não o contrário." },
  { icon: UserRoundIcon, title: "O processo mora na cabeça de alguém", body: "Quando essa pessoa falta, tudo para." },
  { icon: PlugIcon, title: "Vários sistemas que não conversam", body: "Os dados ficam espalhados e a equipe refaz o trabalho." },
] as const;

const journey = [
  { title: "Escopo", body: "Mapeamos o processo e combinamos o que entra, o prazo e o preço." },
  { title: "Desenho", body: "Você vê como o sistema vai funcionar antes de construir." },
  { title: "Construção em etapas", body: "Entregas curtas, que você testa e comenta pelo caminho." },
  { title: "Lançamento", body: "O sistema entra no ar, e a equipe aprende a usar." },
  { title: "Evolução", body: "Seguimos junto, ajustando conforme o uso mostra o que melhorar." },
] as const;

const built = [
  { icon: LayoutDashboardIcon, title: "Painel de gestão", body: "Vendas, lucro e lojas numa tela, com previsão, avisos e sugestões feitos por inteligência artificial. Exemplo com dados fictícios.", href: "/solucoes/painel-de-gestao", cta: "Ver o painel" },
  { icon: KanbanSquareIcon, title: "MyHub", body: "Tarefas, progresso, pedido do líder e chat da equipe no mesmo lugar.", href: "/solucoes/mytek-hub", cta: "Ver o Hub" },
  { icon: WalletIcon, title: "MyCash", body: "O financeiro da empresa organizado: contas, cartões, orçamento e metas.", href: "/solucoes/mycash", cta: "Ver o MyCash" },
  { icon: TrendingDownIcon, title: "Previsão de churn", body: "Lista de clientes por risco de sair, com o motivo de cada um.", href: "/solucoes/previsao-de-churn", cta: "Ver o app" },
  { icon: LayersIcon, title: "Previsão de demanda", body: "Prevê as vendas dos próximos dias e recomenda quanto produzir.", href: "https://myttrindade.github.io/portfolio/", cta: "Ver no portfólio", external: true },
] as const;

const compare = [
  ["Encaixe", "Você adapta o processo ao software", "O software nasce do seu processo"],
  ["O que vem junto", "Recursos que você talvez nunca use", "Só o que a sua operação precisa"],
  ["Crescer depois", "Limitado pelo que o fornecedor oferece", "Evolui conforme o seu negócio muda"],
] as const;

/** App de exemplo: menu, tabela com status e avisos. Ilustrativo, sem dados reais. */
function SystemHeroVisual() {
  const rows = [
    ["Pedido 1042", "Em análise", "#FFB020"],
    ["Pedido 1041", "Aprovado", "#8D6BFF"],
    ["Pedido 1040", "Entregue", "#2BD38A"],
    ["Pedido 1039", "Aprovado", "#8D6BFF"],
  ] as const;
  const chip =
    "rounded-2xl border border-white/12 bg-[#170E2A]/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md";
  return (
    <div className="relative mx-auto w-full max-w-[580px] pb-10 pt-6">
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
            sistema.suaempresa.com.br
          </span>
        </div>
        <div className="grid grid-cols-[140px_1fr] bg-gradient-to-br from-[#2a1760] to-[#0F0819]">
          <div className="space-y-1.5 border-r border-white/10 bg-white/[0.03] p-3">
            <span className="mb-3 flex items-center gap-2 font-heading text-sm font-extrabold tracking-[-0.03em] text-white">
              <span className="flex size-6 items-center justify-center rounded-lg bg-[#5E34F7]">
                <CodeXmlIcon className="size-3.5" />
              </span>
              seu app
            </span>
            {["Início", "Pedidos", "Clientes", "Relatórios", "Ajustes"].map((m, i) => (
              <span
                key={m}
                className={
                  "block rounded-lg px-2.5 py-1.5 text-[11px] font-semibold " +
                  (i === 1 ? "bg-[#5E34F7] text-white" : "text-white/55")
                }
              >
                {m}
              </span>
            ))}
          </div>
          <div className="p-4">
            <div className="flex items-center justify-between">
              <p className="font-heading text-base font-extrabold tracking-[-0.03em] text-white">
                Pedidos
              </p>
              <span className="rounded-full bg-lima px-3 py-1 text-[10px] font-bold text-lima-foreground">
                + Novo pedido
              </span>
            </div>
            <div className="mt-3 space-y-2">
              {rows.map(([n, st, c]) => (
                <div
                  key={n}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-white/[0.05] px-3 py-2.5"
                >
                  <span className="text-[11px] font-semibold text-white">{n}</span>
                  <span
                    className="rounded-full px-2 py-0.5 text-[9px] font-bold"
                    style={{ background: `${c}26`, color: c }}
                  >
                    {st}
                  </span>
                </div>
              ))}
            </div>
            <p className="mt-3 text-[10px] text-white/35">
              Sistema de exemplo, para ilustrar.
            </p>
          </div>
        </div>
      </div>

      <div className="hero-float-a absolute -left-4 top-28 hidden w-[180px] sm:block">
        <div className={`${chip} p-3`} style={{ rotate: "-2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <RulerIcon className="size-3.5 text-lima" />
            Seu processo
          </div>
          <p className="mt-1 text-xs text-white/70">O sistema nasce dele.</p>
        </div>
      </div>
      <div className="hero-float-c absolute -right-3 bottom-1 hidden w-[190px] sm:block">
        <div className={`${chip} p-3`} style={{ rotate: "2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <CircleDashedIcon className="size-3.5 text-lima" />
            Entrega em etapas
          </div>
          <p className="mt-1 text-xs text-white/70">Você testa enquanto constrói.</p>
        </div>
      </div>
    </div>
  );
}

export default function SistemasPage() {
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
                / sistemas sob medida
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Software
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Software feito para o jeito que a sua empresa{" "}
                  <span className="text-lima">trabalha.</span>
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
              <SystemHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Sinais */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Quando faz sentido</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Quando nenhuma ferramenta pronta resolve
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {signs.map((s, i) => (
                <BlurFade key={s.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={10} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <s.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {s.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {s.body}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 3 · Do desenho à entrega */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Do desenho à entrega</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Em etapas, para você ver funcionando desde cedo
              <span className="text-emphasis">.</span>
            </h2>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-5">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-transparent via-white/25 to-transparent md:block"
              />
              {journey.map((j, i) => (
                <li key={j.title} className="relative">
                  <span
                    className={
                      "relative z-10 flex size-14 items-center justify-center rounded-2xl font-heading text-lg font-extrabold ring-4 ring-background " +
                      (i === journey.length - 1
                        ? "bg-lima text-lima-foreground"
                        : "bg-gradient-to-br from-[#6E48FF] to-[#5E34F7] text-white")
                    }
                  >
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-heading text-lg font-bold text-white">{j.title}</h3>
                  <p className="mt-1 text-sm text-white/65">{j.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 4 · O que já construímos */}
        <section id="exemplos" className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que já construímos</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Sistemas que a gente desenhou e colocou no ar
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
              {built.map((b, i) => (
                <BlurFade key={b.title} delay={i * 0.06} className={i < 3 ? "lg:col-span-2" : "lg:col-span-3"}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={9} glare="rgba(94,52,247,0.14)">
                      <Link
                        href={b.href}
                        {...("external" in b ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                        style={{ transformStyle: "preserve-3d" }}
                        className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-card p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.45)] transition-colors hover:border-primary/60"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <b.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {b.title}
                        </h3>
                        <p className="mt-2 flex-1 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {b.body}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-1 text-sm font-bold text-primary">
                          {b.cta}
                          <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </Link>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 4b · Exemplo de projeto */}
        <section
          id="exemplo"
          className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28"
        >
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
            <span className={eyebrow}>Exemplo de projeto</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Um painel de gestão para uma rede de farmácias
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Junta as vendas de todas as lojas e canais, mostra o lucro de
              verdade e usa inteligência artificial para prever as vendas,
              avisar quando algo foge do normal e sugerir o que vender junto.
            </p>
            <figure className="mt-10">
              <div className="overflow-hidden rounded-2xl border border-white/12 bg-[#0F0819] shadow-[0_40px_100px_-30px_rgba(110,72,255,0.7)]">
                <video
                  src="/brand/painel-varejo/demo.mp4"
                  poster="/brand/painel-varejo/poster.jpg"
                  controls
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  aria-label="Gravação do painel de gestão para uma rede de farmácias: vendas, lucro, lojas, previsões, avisos e simulador"
                  className="aspect-video w-full bg-black"
                />
              </div>
              <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
                Painel de exemplo, com lojas, vendas e clientes fictícios.
              </figcaption>
            </figure>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                ["Previsão de vendas", "Estima quanto cada semana seguinte deve vender, com margem de erro."],
                ["Aviso de dia fora do normal", "Lista os dias suspeitos de cada loja, com o motivo."],
                ["Sugestão de venda junto", "Mostra o que costuma ser comprado junto, para montar ofertas."],
              ].map(([t, b]) => (
                <li key={t} className="rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
                  <p className="font-heading text-base font-extrabold text-white">{t}</p>
                  <p className="mt-1 text-sm text-white/70">{b}</p>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button asChild variant="outline" className="rounded-full border-white/25 bg-white/[0.06] text-white hover:bg-white/15">
                <Link href="/solucoes/painel-de-gestao">
                  Ver o painel em detalhe
                  <ArrowUpRightIcon className="size-4" />
                </Link>
              </Button>
              <p className="max-w-md text-xs text-muted-foreground">
                É um exemplo com dados inventados. Num projeto de verdade, o
                painel nasce dos dados do seu negócio.
              </p>
            </div>
          </div>
        </section>

        {/* 5 · Sob medida x pronto */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Sob medida ou ferramenta pronta?</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                A pergunta é quem se adapta a quem
                <span className="text-emphasis">.</span>
              </h2>
              <div className="mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_28px_54px_-28px_rgba(94,52,247,0.45)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr>
                        <th className="w-[24%] p-4" />
                        <th className="bg-muted p-4 font-heading font-extrabold">
                          <span className="flex items-center gap-2">
                            <XIcon className="size-4 text-muted-foreground" />
                            Ferramenta pronta
                          </span>
                        </th>
                        <th className="bg-primary p-4 font-heading font-extrabold text-primary-foreground">
                          <span className="flex items-center gap-2">
                            <CheckIcon className="size-4 text-lima" />
                            Sistema sob medida
                          </span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {compare.map(([label, a, b]) => (
                        <tr key={label} className="border-t border-border">
                          <th className="p-4 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                            {label}
                          </th>
                          <td className="p-4 text-muted-foreground">{a}</td>
                          <td className="bg-primary/[0.06] p-4 font-semibold">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                <WrenchIcon className="mr-1.5 inline size-4 text-primary" />
                Nem sempre vale construir. Se uma ferramenta pronta resolve, a
                gente diz.
              </p>
            </BlurFade>
          </div>
        </section>

        {/* 6 · O que está incluso e perguntas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Do levantamento ao suporte depois
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
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
                Perguntas frequentes
              </h2>
              <Accordion type="single" collapsible className="mt-6">
                {sol.faq.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* 7 · Chamada final */}
        <section className="dark relative overflow-hidden bg-background py-28 text-foreground">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <BrandGlyph
            still
            size={520}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-balance lg:text-5xl">
              Qual processo da sua empresa pede um{" "}
              <span className="text-lima">sistema próprio?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte como o trabalho acontece hoje. A gente responde no WhatsApp
              em até 4h úteis, com um caminho, prazo e preço.
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
