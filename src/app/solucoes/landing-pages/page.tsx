import Link from "next/link";
import {
  ArrowRightIcon,
  CheckIcon,
  GlobeIcon,
  MousePointerClickIcon,
  RocketIcon,
  SmartphoneIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
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
import { checkoutGroups, checkoutHref } from "@/lib/checkout";
import { getSolution } from "@/lib/solutions-data";

const sol = getSolution("landing-pages")!;

export const metadata: Metadata = {
  title: "Landing pages",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/landing-pages" },
};

/** Preços e itens vêm do checkout: uma fonte só para o valor que o cliente lê. */
const plans =
  checkoutGroups.find((g) => g.slug === "landing-page")?.plans ?? [];

const chain = [
  { icon: MousePointerClickIcon, title: "Visitante", body: "Chega pelo anúncio, Instagram ou Google." },
  { icon: GlobeIcon, title: "Landing page", body: "Uma oferta, uma ação, sem distração." },
  { icon: UsersIcon, title: "Lead no funil", body: "O formulário cai direto no CRM, com a origem." },
  { icon: TrophyIcon, title: "Venda", body: "O vendedor é avisado e a conversa começa." },
] as const;

const perks = [
  { icon: ZapIcon, title: "Carrega rápido", body: "Leve e rápida, porque página lenta perde visitante antes de ele ler." },
  { icon: SmartphoneIcon, title: "Boa no celular", body: "Pensada primeiro para quem chega pelo telefone." },
  { icon: UsersIcon, title: "Ligada ao funil", body: "Cada contato vira lead no CRM, sem planilha no meio." },
  { icon: GlobeIcon, title: "Com a sua marca", body: "Cores, tom e identidade da sua empresa, não um modelo repetido." },
] as const;

/** Janela de navegador com uma landing page de exemplo e um celular na frente. */
function LpHeroVisual() {
  const chip =
    "rounded-2xl border border-white/12 bg-[#170E2A]/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md";
  return (
    <div className="relative mx-auto w-full max-w-[600px] pb-10 pt-6">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.5),transparent_65%)]"
      />

      {/* navegador */}
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-[#0F0819] shadow-[0_30px_90px_-20px_rgba(110,72,255,0.7)]">
        <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="size-2.5 rounded-full bg-white/25" />
          <span className="ml-3 flex-1 rounded-md bg-white/[0.06] px-3 py-1 font-mono text-[10px] text-white/50">
            suaempresa.com.br
          </span>
        </div>
        <div className="grid gap-5 bg-gradient-to-br from-[#2a1760] to-[#0F0819] p-6 sm:grid-cols-[1.1fr_1fr]">
          <div>
            <div className="flex gap-1.5">
              <span className="h-1.5 w-10 rounded-full bg-white/25" />
              <span className="h-1.5 w-6 rounded-full bg-white/15" />
              <span className="h-1.5 w-6 rounded-full bg-white/15" />
            </div>
            <p className="mt-6 font-heading text-2xl font-extrabold leading-[1.05] tracking-[-0.04em] text-white">
              Sua oferta,
              <br />
              em uma frase<span className="text-lima">.</span>
            </p>
            <div className="mt-3 space-y-1.5">
              <span className="block h-1.5 w-full rounded-full bg-white/20" />
              <span className="block h-1.5 w-4/5 rounded-full bg-white/15" />
              <span className="block h-1.5 w-3/5 rounded-full bg-white/15" />
            </div>
            <span className="mt-5 inline-flex rounded-full bg-lima px-4 py-1.5 text-[11px] font-bold text-lima-foreground">
              Quero saber mais
            </span>
          </div>
          <div className="rounded-xl border border-white/12 bg-white/[0.06] p-4">
            <p className="text-[11px] font-semibold text-white">Fale com a gente</p>
            {["Nome", "WhatsApp", "E-mail"].map((f) => (
              <div
                key={f}
                className="mt-2 rounded-md border border-white/12 bg-black/25 px-2.5 py-1.5 text-[10px] text-white/45"
              >
                {f}
              </div>
            ))}
            <div className="mt-3 rounded-md bg-[#5E34F7] py-1.5 text-center text-[10px] font-bold text-white">
              Enviar
            </div>
          </div>
        </div>
      </div>

      {/* celular na frente */}
      <div className="hero-float-c absolute -bottom-2 right-2 hidden w-[132px] sm:block lg:-right-4">
        <div className="rounded-[1.6rem] border-2 border-white/25 bg-[#0F0819] p-2 shadow-[0_26px_60px_-18px_rgba(0,0,0,0.8)]">
          <div className="rounded-[1.1rem] bg-gradient-to-b from-[#2a1760] to-[#0F0819] p-3">
            <span className="mx-auto block h-1 w-8 rounded-full bg-white/25" />
            <p className="mt-3 font-heading text-[13px] font-extrabold leading-tight tracking-[-0.03em] text-white">
              Sua oferta, em uma frase<span className="text-lima">.</span>
            </p>
            <span className="mt-2 block h-1 w-4/5 rounded-full bg-white/20" />
            <span className="mt-1 block h-1 w-3/5 rounded-full bg-white/15" />
            <span className="mt-3 block rounded-full bg-lima py-1 text-center text-[8px] font-bold text-lima-foreground">
              Quero saber mais
            </span>
          </div>
        </div>
      </div>

      {/* aviso: lead no funil */}
      <div className="hero-float-a absolute -left-3 top-24 hidden w-[200px] sm:block">
        <div className={`${chip} p-3`} style={{ rotate: "-2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <UsersIcon className="size-3.5 text-lima" />
            Lead novo
          </div>
          <p className="mt-1 text-sm font-semibold text-white">Marcos Lima</p>
          <p className="text-xs text-white/60">origem: landing page · entrou no funil</p>
        </div>
      </div>
    </div>
  );
}

export default function LandingPagesPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 · Capa */}
        <section className="dark relative overflow-hidden bg-background pt-28 pb-20 text-foreground lg:pt-32">
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
                / landing pages
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Captura
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl xl:text-[3.4rem]">
                  Uma página com um objetivo só:{" "}
                  <span className="text-lima">transformar visitante em contato.</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
                  {sol.intro}
                </p>
              </BlurFade>
              <BlurFade delay={0.35}>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                  <ShimmerButton href="/contact">
                    <RocketIcon className="size-4" />
                    Pedir um orçamento
                  </ShimmerButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="#planos">Ver planos ↓</a>
                  </Button>
                </div>
                <div className="mt-6 inline-flex items-baseline gap-2 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                    a partir de
                  </span>
                  <span className="font-heading text-3xl font-extrabold tracking-[-0.04em] text-lima">
                    R$999
                  </span>
                  <span className="text-sm text-muted-foreground">
                    pagamento único
                  </span>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3}>
              <LpHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Do clique ao funil */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Como entra o lead</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                A página é a porta de entrada do seu funil
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Quem preenche o formulário já nasce como card no funil, com a
                origem registrada. Sem exportar planilha, sem digitar de novo.
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
                        (i === 1
                          ? "bg-gradient-to-br from-[#7A57FF] to-[#4A22D6]"
                          : i === 3
                            ? "bg-lima text-lima-foreground"
                            : "bg-gradient-to-br from-[#6E48FF] to-[#5E34F7]")
                      }
                    >
                      <c.icon className="size-6" />
                    </span>
                    <span className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-extrabold">
                      {c.title}
                    </h3>
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
                Feita para converter, não só para ficar bonita
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

        {/* 4 · Planos */}
        <section id="planos" className="py-24 lg:py-28">
          <div className="mx-auto max-w-5xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Planos</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Pague uma vez. A página é sua
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Sem mensalidade. O primeiro mês inclui até 5 ajustes sem custo,
                e quem já é cliente de CRM ou Dashboard tem 20% de desconto: Essencial por R$799,20 e Sob Medida por R$1.437,60.
              </p>
            </BlurFade>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {plans.map((plan, i) => {
                const featured = i === plans.length - 1;
                return (
                  <BlurFade key={plan.slug} delay={i * 0.1}>
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
                          {featured && (
                            <span className="absolute -top-3 left-8 rounded-full bg-lima px-3 py-1 text-[11px] font-bold text-lima-foreground">
                              Mais completa
                            </span>
                          )}
                          <span
                            className={
                              "font-mono text-[11px] font-bold uppercase tracking-[0.06em] " +
                              (featured ? "text-lima" : "text-primary")
                            }
                          >
                            Pagamento único
                          </span>
                          <h3 className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em] [transform:translateZ(24px)]">
                            {plan.name}
                          </h3>
                          <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.05em] [transform:translateZ(34px)]">
                            {plan.price}
                          </p>
                          {plan.tagline && (
                            <p
                              className={
                                "mt-2 text-sm " +
                                (featured ? "text-white/80" : "text-muted-foreground")
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
                            <p className="mt-4 text-xs text-muted-foreground">
                              {plan.note}
                            </p>
                          )}
                          <Button
                            asChild
                            size="lg"
                            className={
                              "mt-8 w-full rounded-full " +
                              (featured ? "bg-lima text-lima-foreground hover:bg-lima/90" : "")
                            }
                          >
                            <a href={checkoutHref(plan.slug)}>
                              Quero este <ArrowRightIcon className="size-4" />
                            </a>
                          </Button>
                        </div>
                      </Card3D>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
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
              Perguntas sobre landing pages
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
              Pronto para captar mais{" "}
              <span className="text-lima">contatos?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte a sua oferta e a gente responde no WhatsApp em até 4h
              úteis, com prazo e preço.
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
