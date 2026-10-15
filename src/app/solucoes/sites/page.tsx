import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  ClockIcon,
  GlobeIcon,
  LayersIcon,
  MessageCircleIcon,
  PlugIcon,
  RocketIcon,
  SearchIcon,
  ShieldCheckIcon,
  SmartphoneIcon,
  SparklesIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { Card3D } from "@/components/brand/card-3d";
import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { eyebrow } from "@/components/solutions-grid";
import { SolutionsCompare } from "@/components/solutions-compare";
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

const sol = getSolution("sites")!;

export const metadata: Metadata = {
  title: "Sites",
  description:
    "Sites institucionais rápidos, bons no celular e no Google, com a cara da sua marca. R$1.697, valor único.",
  alternates: { canonical: "/solucoes/sites" },
};

const benefits = [
  { icon: ShieldCheckIcon, title: "Passa confiança", body: "Quem pesquisa a sua empresa encontra um site profissional, não um perfil solto." },
  { icon: LayersIcon, title: "Explica o que você vende", body: "A estrutura parte do que o seu cliente quer saber antes de comprar." },
  { icon: SearchIcon, title: "Pronto para o Google", body: "Textos, títulos e estrutura pensados para ser encontrado nas buscas." },
  { icon: MessageCircleIcon, title: "Leva ao WhatsApp", body: "Botão e formulário ligados à sua operação, para o visitante chamar." },
] as const;

const factors = [
  { icon: LayersIcon, title: "Tamanho do site", body: "Quantas páginas e seções ele precisa ter." },
  { icon: SparklesIcon, title: "Identidade e textos", body: "Se você já tem marca e conteúdo, ou se a gente cria junto." },
  { icon: PlugIcon, title: "Integrações", body: "WhatsApp, formulários, CRM e outras ferramentas que você já usa." },
  { icon: ClockIcon, title: "Prazo", body: "Quando o site precisa estar no ar." },
] as const;

/** Janela de navegador com um site de exemplo e um celular na frente. */
function SiteHeroVisual() {
  const chip =
    "rounded-2xl border border-white/12 bg-[#170E2A]/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md";
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
            suaempresa.com.br
          </span>
        </div>
        <div className="bg-gradient-to-br from-[#2a1760] to-[#0F0819] p-6">
          {/* menu do site */}
          <div className="flex items-center justify-between">
            <span className="font-heading text-sm font-extrabold tracking-[-0.04em] text-white">
              sua marca<span className="text-lima">.</span>
            </span>
            <div className="flex items-center gap-3">
              {["Início", "Serviços", "Sobre", "Contato"].map((m) => (
                <span key={m} className="text-[10px] text-white/55">
                  {m}
                </span>
              ))}
              <span className="rounded-full bg-lima px-3 py-1 text-[10px] font-bold text-lima-foreground">
                Falar agora
              </span>
            </div>
          </div>
          {/* chamada principal */}
          <div className="mt-8 max-w-[300px]">
            <p className="font-heading text-3xl font-extrabold leading-[1.02] tracking-[-0.04em] text-white">
              Sua empresa, bem apresentada<span className="text-lima">.</span>
            </p>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-full rounded-full bg-white/20" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
            </div>
            <div className="mt-5 flex gap-2">
              <span className="rounded-full bg-[#5E34F7] px-4 py-1.5 text-[11px] font-bold text-white">
                Pedir orçamento
              </span>
              <span className="rounded-full border border-white/20 px-4 py-1.5 text-[11px] font-semibold text-white/80">
                Ver serviços
              </span>
            </div>
          </div>
          {/* seções */}
          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Serviços", "Sobre nós", "Contato"].map((t) => (
              <div
                key={t}
                className="rounded-xl border border-white/10 bg-white/[0.05] p-3"
              >
                <span className="block size-6 rounded-lg bg-[#5E34F7]/60" />
                <p className="mt-2 text-[11px] font-semibold text-white">{t}</p>
                <span className="mt-1.5 block h-1 w-4/5 rounded-full bg-white/15" />
                <span className="mt-1 block h-1 w-3/5 rounded-full bg-white/10" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* celular */}
      <div className="hero-float-c absolute -bottom-3 right-2 hidden w-[132px] sm:block lg:-right-5">
        <div className="rounded-[1.6rem] border-2 border-white/25 bg-[#0F0819] p-2 shadow-[0_26px_60px_-18px_rgba(0,0,0,0.8)]">
          <div className="rounded-[1.1rem] bg-gradient-to-b from-[#2a1760] to-[#0F0819] p-3">
            <span className="mx-auto block h-1 w-8 rounded-full bg-white/25" />
            <p className="mt-3 font-heading text-[13px] font-extrabold leading-tight tracking-[-0.03em] text-white">
              Sua empresa, bem apresentada<span className="text-lima">.</span>
            </p>
            <span className="mt-2 block h-1 w-4/5 rounded-full bg-white/20" />
            <span className="mt-3 block rounded-full bg-lima py-1 text-center text-[8px] font-bold text-lima-foreground">
              Falar agora
            </span>
            <span className="mt-3 block h-8 rounded-lg bg-white/[0.07]" />
          </div>
        </div>
      </div>

      {/* avisos */}
      <div className="hero-float-a absolute -left-3 top-28 hidden w-[190px] sm:block">
        <div className={`${chip} p-3`} style={{ rotate: "-2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <SmartphoneIcon className="size-3.5 text-lima" />
            Boa no celular
          </div>
          <p className="mt-1 text-xs text-white/70">Pensada primeiro para quem chega pelo telefone.</p>
        </div>
      </div>
      <div className="hero-float-b absolute -right-3 top-2 hidden w-[170px] sm:block">
        <div className={`${chip} p-3`} style={{ rotate: "2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <SearchIcon className="size-3.5 text-lima" />
            Pronto para o Google
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SitesPage() {
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
                / sites
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Presença
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Um site que explica o que você vende e{" "}
                  <span className="text-lima">leva o visitante a chamar.</span>
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
                    <a href="#valor">Quanto custa ↓</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="lg:[zoom:0.72]">
              <SiteHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · O que um bom site faz */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Para que serve</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Um site feito para vender, não só para existir
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, i) => (
                <BlurFade key={b.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={10} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <b.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {b.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {b.body}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
            <SolutionsCompare current="site" />
          </div>
        </section>

        {/* 3 · O que está incluso */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Do primeiro rascunho ao site no ar
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 text-muted-foreground">
                A gente cuida da parte técnica e explica cada entrega em
                linguagem de negócio.
              </p>
            </BlurFade>
            <ul className="grid gap-3">
              {sol.includes.map((item, i) => (
                <BlurFade key={item} delay={i * 0.05}>
                  <li className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 shadow-[0_14px_30px_-22px_rgba(94,52,247,0.45)]">
                    <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <CheckIcon className="size-3.5" />
                    </span>
                    <span className="text-sm font-medium">{item}</span>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </div>
        </section>

        {/* 4 · Valor */}
        <section id="valor" className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <div className="dark relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#5E34F7] via-[#4A22D6] to-[#1b0f36] p-8 text-foreground shadow-[0_40px_90px_-30px_rgba(94,52,247,0.75)] lg:p-12">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(198,255,0,0.26),transparent_65%)]"
                />
                <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-lima">
                      Quanto custa
                    </span>
                    <p className="mt-3 font-heading text-6xl font-extrabold tracking-[-0.05em] text-white">
                      R$1.697
                    </p>
                    <p className="mt-1 text-sm text-white/75">valor único, pago uma vez</p>
                    <p className="mt-3 max-w-sm text-white/80">
                      Manutenção opcional: R$87/mês. Ajustes em um site que já
                      existe (domínio, logo, imagens e até 1 página nova):
                      R$500. O que fugir do escopo é combinado na proposta,
                      antes de qualquer trabalho começar.
                    </p>
                    <div className="mt-8">
                      <ShimmerButton
                        href="/contact"
                        className="bg-lima text-lima-foreground"
                      >
                        Pedir um orçamento <ArrowRightIcon className="size-4" />
                      </ShimmerButton>
                    </div>
                  </div>
                  <div>
                    <p className="font-heading text-lg font-extrabold text-white">
                      O que muda o valor
                    </p>
                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {factors.map((f) => (
                        <div
                          key={f.title}
                          className="rounded-2xl border border-white/15 bg-white/[0.08] p-4 backdrop-blur-md"
                        >
                          <span className="flex size-9 items-center justify-center rounded-xl bg-lima text-lima-foreground">
                            <f.icon className="size-4.5" />
                          </span>
                          <p className="mt-3 text-sm font-bold text-white">{f.title}</p>
                          <p className="mt-1 text-xs text-white/70">{f.body}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>
        </section>

        {/* 5 · Como funciona */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Como funciona</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] lg:text-5xl">
              Em {sol.steps.length} etapas, sem surpresa
              <span className="text-emphasis">.</span>
            </h2>
            <ol className="mt-12 grid gap-6 md:grid-cols-3">
              {sol.steps.map(([title, body], i) => (
                <li key={title} className="border-t-2 border-primary pt-4">
                  <span className="font-mono text-sm font-bold text-lima">0{i + 1}</span>
                  <h3 className="mt-2 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* 6 · Perguntas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre sites
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
              Pronto para ter um site que{" "}
              <span className="text-lima">trabalha por você?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte sobre o seu negócio e a gente responde no WhatsApp em até
              4h úteis, com prazo e preço.
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
