import Link from "next/link";
import {
  BrainCircuitIcon,
  BrushCleaningIcon,
  CheckIcon,
  DatabaseIcon,
  FlaskConicalIcon,
  LayoutDashboardIcon,
  MousePointerClickIcon,
  RocketIcon,
  SlidersHorizontalIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { Card3D } from "@/components/brand/card-3d";
import { ia, recursos, serve } from "@/components/brand/exemplo-painel";
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

const resumo =
  "Um painel que junta as vendas de todas as lojas e canais, mostra o lucro de verdade e usa inteligência artificial para prever, avisar e sugerir.";

export const metadata: Metadata = {
  title: "Painel de gestão sob medida",
  description: `Exemplo de projeto sob medida para uma rede de farmácias, com dados fictícios. ${resumo}`,
  alternates: { canonical: "/solucoes/painel-de-gestao" },
};

const flow = [
  { icon: DatabaseIcon, title: "Seus dados", body: "Vendas, lojas e produtos que hoje vivem em planilhas e sistemas separados." },
  { icon: BrushCleaningIcon, title: "Dados arrumados", body: "Repetidos e incompletos são corrigidos, e o que não serve fica separado com um relatório." },
  { icon: LayoutDashboardIcon, title: "Painel claro", body: "Vendas, lucro e lojas numa tela, com filtros e gráficos que respondem uns aos outros." },
  { icon: BrainCircuitIcon, title: "IA que ajuda", body: "Previsões, avisos e sugestões para decidir com antecedência." },
] as const;

const incluso = [
  "Levantamento do que você precisa acompanhar, combinado antes de começar",
  "Junção e limpeza dos dados de todas as lojas e canais",
  "Painel com filtros e gráficos que se conversam",
  "Previsão de vendas, avisos de dias fora do normal e sugestões de venda junto",
  "Treinamento da equipe para usar o painel",
  "Ajustes depois da entrega, conforme o uso mostra o que melhorar",
] as const;

const faq = [
  {
    q: "Este painel é de um cliente real?",
    a: "Não. É um exemplo que montamos com lojas, vendas e clientes inventados, só para mostrar como um projeto sob medida pode ficar.",
  },
  {
    q: "Meu negócio não é farmácia. Serve?",
    a: "Serve. O ramo muda o que entra no painel, mas a ideia é a mesma: juntar os dados, mostrar o que sobra de verdade e ajudar a decidir. Contamos como seria para o seu caso.",
  },
  {
    q: "Quanto custa e quanto tempo leva?",
    a: "Depende do que entra no painel e de como estão os seus dados hoje. Depois da conversa inicial, você recebe o caminho, o prazo e o preço antes de qualquer compromisso.",
  },
  {
    q: "A inteligência artificial decide por mim?",
    a: "Não. Ela entrega uma estimativa, um aviso ou uma sugestão, com o motivo. Quem decide é você e a sua equipe.",
  },
  {
    q: "Os resultados mostrados valem para a minha empresa?",
    a: "Os números do teste vêm dos dados fictícios do exemplo. Com os seus dados, a gente treina e avalia antes de prometer qualquer resultado, e diz logo se o histórico ainda não basta.",
  },
] as const;

export default function PainelPage() {
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
                /{" "}
                <Link href="/solucoes/sistemas-sob-medida" className="hover:text-foreground">
                  sistemas sob medida
                </Link>{" "}
                / painel de gestão
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Sob medida + IA
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Todas as lojas numa tela, e o que fazer a seguir{" "}
                  <span className="text-lima">sem planilha.</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="mt-4 max-w-xl text-base text-muted-foreground text-pretty">
                  {resumo} Este é um exemplo feito para uma rede de farmácias,
                  com dados fictícios.
                </p>
              </BlurFade>
              <BlurFade delay={0.35}>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ShimmerButton href="/contact">
                    <RocketIcon className="size-4" />
                    Pedir um orçamento
                  </ShimmerButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="#exemplo">Ver o painel funcionando ↓</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="lg:[zoom:0.8]">
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
                      painel.suaempresa.com.br
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/brand/painel-varejo/poster.jpg"
                    alt="Painel de gestão de exemplo: previsão de vendas semanais com faixa de erro"
                    width={1280}
                    height={720}
                    className="h-auto w-full"
                  />
                </div>
                <div className="hero-float-a absolute -bottom-1 -left-4 hidden w-[190px] sm:block">
                  <div
                    className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
                    style={{ rotate: "-2deg" }}
                  >
                    <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
                      <FlaskConicalIcon className="size-3.5 text-lima" />
                      Dados fictícios
                    </div>
                    <p className="mt-1 text-xs text-white/70">Nada aqui é de um cliente real.</p>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Dos dados à decisão */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Dos dados à decisão</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                De planilhas espalhadas a um painel que ajuda a decidir
                <span className="text-emphasis">.</span>
              </h2>
              <ol className="mt-6 grid max-w-3xl gap-3">
                {serve.map((t, i) => (
                  <li key={t} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary font-mono text-[11px] font-extrabold text-primary-foreground">
                      {i + 1}
                    </span>
                    {t}
                  </li>
                ))}
              </ol>
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

        {/* 3 · O que o painel faz */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que o painel faz</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Seis coisas que o dono da rede passa a saber
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-muted-foreground">
                Cada projeto sob medida muda o que entra. Este é só um exemplo.
              </p>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {recursos.map((r, i) => (
                <BlurFade key={r.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={10} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <r.icon className="size-6" />
                        </span>
                        <span className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary">
                          {r.tag}
                        </span>
                        <h3 className="mt-1 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {r.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {r.body}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Exemplo funcionando */}
        <section
          id="exemplo"
          className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28"
        >
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
            <span className={eyebrow}>Exemplo funcionando</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              O painel em uso, em 40 segundos
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Gravação do painel de exemplo, com lojas, vendas e clientes
              inventados.
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
                Painel de exemplo, com dados fictícios.
              </figcaption>
            </figure>
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-5 backdrop-blur-sm">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/25 text-lima">
                <MousePointerClickIcon className="size-5" />
              </span>
              <p className="text-sm text-white/75">
                <span className="font-heading font-bold text-white">Como se usa: </span>
                clicou em qualquer gráfico, todos os outros passam a mostrar só
                aquilo. Clicou em &ldquo;Pix&rdquo;, tudo mostra só as vendas
                pagas no Pix.
              </p>
            </div>
          </div>
        </section>

        {/* 5 · Inteligência artificial */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Inteligência artificial no painel</span>
              <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                O painel aprende com o histórico da própria rede
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Usamos aprendizado de máquina, um tipo de inteligência artificial
                que estuda o que já aconteceu nas vendas para reconhecer
                padrões. Ele não decide nada sozinho: entrega uma estimativa, um
                aviso ou uma sugestão, e quem decide é você.
              </p>
            </BlurFade>
            <div className="mt-12 grid gap-4 lg:grid-cols-3">
              {ia.map((m, i) => (
                <BlurFade key={m.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={8} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <m.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {m.title}
                        </h3>
                        <dl className="mt-4 flex flex-1 flex-col gap-3 text-sm">
                          {m.partes.map(([k, v], j) => (
                            <div
                              key={k}
                              className={
                                j === 2
                                  ? "mt-auto rounded-xl border border-primary/25 bg-primary/[0.07] p-3"
                                  : ""
                              }
                            >
                              <dt className="font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary">
                                {k}
                              </dt>
                              <dd className="mt-1 text-muted-foreground">{v}</dd>
                            </div>
                          ))}
                        </dl>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · O que esperar */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade>
              <div className="rounded-3xl border border-primary/25 bg-primary/[0.06] p-8 lg:p-10">
                <span className={eyebrow}>O que esperar</span>
                <h2 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.03em] text-balance lg:text-3xl">
                  Estimativas para ajudar, não garantias
                </h2>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "Os números do teste vêm de dados fictícios, em que sabíamos de antemão o que tinha sido plantado.",
                    "Com os dados da sua empresa, a gente treina e avalia antes de prometer qualquer resultado.",
                    "Se o seu histórico ainda não bastar, a gente diz antes de começar.",
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

        {/* 7 · O que está incluso e perguntas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Dos dados ao painel na mão da equipe
                <span className="text-emphasis">.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {incluso.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="size-3" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 flex items-start gap-2 text-sm text-muted-foreground">
                <SlidersHorizontalIcon className="mt-0.5 size-4 shrink-0 text-primary" />
                Prazo e preço são combinados com você antes de começar.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
                Perguntas frequentes
              </h2>
              <Accordion type="single" collapsible className="mt-6">
                {faq.map((f) => (
                  <AccordionItem key={f.q} value={f.q}>
                    <AccordionTrigger className="text-left text-base">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
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
              Quer um painel{" "}
              <span className="text-lima">feito para o seu negócio?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte o que você precisa acompanhar. A gente responde no WhatsApp
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
