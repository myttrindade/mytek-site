import Link from "next/link";
import { ArrowRightIcon, CheckIcon, RocketIcon } from "lucide-react";
import type { Metadata } from "next";

import { HeroVisual } from "@/components/brand/hero-visual";
import { MeMarquee, MeTyping } from "@/components/brand/me-motion";
import { ProductShot } from "@/components/product-shot";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { Process, Solutions, eyebrow } from "@/components/solutions-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { productShots } from "@/lib/site-config";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const quickLinks = [
  ["Sites", "/solucoes/sites"],
  ["Landing pages", "/solucoes/landing-pages"],
  ["CRM", "/crm"],
  ["Mytek Hub", "/solucoes/mytek-hub"],
  ["MyCash", "/solucoes/mycash"],
  ["Dashboards", "/solucoes/dashboards"],
  ["Agentes de IA", "/solucoes/agentes-de-ia"],
  ["Automação n8n", "/solucoes/automacao-n8n"],
  ["Previsão de churn", "/solucoes/previsao-de-churn"],
] as const;

const ways = [
  {
    tag: "Produto pronto",
    title: "CRM, Mytek Hub e MyCash",
    price: "CRM a partir de R$197/mês",
    points: [
      "Prontos para usar, configurados junto com você",
      "CRM sem fidelidade: cancele quando quiser",
      "Hub e MyCash: peça uma demonstração e receba a proposta",
    ],
    cta: ["Ver os produtos", "/#solucoes"],
  },
  {
    tag: "Projeto sob medida",
    title: "Sites, IA, automação, dados e sistemas",
    price: "escopo e preço antes de começar",
    points: [
      "Conversa curta para entender o problema",
      "Proposta com prazo, entrega e valor fechados",
      "Acompanhamento depois da entrega",
    ],
    cta: ["Pedir um orçamento", "/contact"],
  },
] as const;

const faqs = [
  {
    q: "A mytek vende só CRM?",
    a: "Não. Temos três sistemas próprios, o CRM com WhatsApp, o Mytek Hub (organização do time) e o MyCash (finanças pessoais), e também criamos sites, landing pages, dashboards, agentes de IA, automações com n8n, modelos de previsão de churn e sistemas sob medida.",
  },
  {
    q: "Como funciona o preço?",
    a: "O CRM tem preço público, a partir de R$197/mês e sem fidelidade. Para o Mytek Hub e o MyCash, você pede uma demonstração e recebe a proposta. Os demais serviços são projetos: depois de uma conversa curta, você recebe escopo, prazo e valor fechados antes de qualquer trabalho começar.",
  },
  {
    q: "Preciso ter equipe técnica?",
    a: "Não. A gente cuida da parte técnica e explica cada entrega em linguagem de negócio. Você só precisa contar como a sua operação funciona hoje.",
  },
  {
    q: "Posso contratar mais de uma solução?",
    a: "Pode, e faz sentido: a landing page alimenta o CRM, o CRM alimenta o dashboard, a automação liga tudo. Quem junta soluções ganha a integração já pronta.",
  },
  {
    q: "A mytek é uma empresa nova?",
    a: "É. Estamos no primeiro ano de operação e não escondemos isso. Somos uma empresa registrada, com CNPJ e contrato, e os dados ficam em servidores no Brasil sob a LGPD.",
  },
  {
    q: "Como é o suporte?",
    a: "Direto no WhatsApp, sem central de tickets, com resposta em até 4h úteis.",
  },
] as const;

export default function Home() {
  return (
    <main className="relative">
      <ScrollProgress />
      <SiteHeader />

      {/* Capa */}
      <section className="dark relative overflow-hidden bg-background pt-32 pb-0 text-foreground lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_78%_20%,rgba(94,52,247,0.38),transparent_70%),radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(94,52,247,0.2),transparent_70%)]"
        />
        <GridPattern
          width={56}
          height={56}
          className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_60%_30%,black,transparent)]"
        />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.05fr_1fr] lg:px-8">
          <div>
            <BlurFade delay={0} direction="down">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                Software e IA
              </span>
            </BlurFade>
            <BlurFade delay={0.12}>
              <h1 className="mt-6 text-5xl font-extrabold leading-[0.98] tracking-[-0.045em] text-balance sm:text-6xl lg:text-7xl">
                Transformamos complexidade em{" "}
                <span className="text-lima">sistema.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.25}>
              <p className="mt-6 max-w-xl text-lg text-muted-foreground">
                Software e IA para negócios que vendem por conversa. Sistemas
                próprios de CRM, equipe e finanças, mais sites, dashboards,
                agentes de IA, automações e previsão de churn, para resolver
                problemas reais e não colecionar ferramentas.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <ShimmerButton href="/contact">
                  <RocketIcon className="size-4" />
                  Falar com o time
                </ShimmerButton>
                <Button variant="ghost" size="lg" asChild>
                  <a href="#solucoes">Ver soluções ↓</a>
                </Button>
              </div>
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
                {[
                  "Resposta no WhatsApp em até 4h úteis",
                  "Dados no Brasil, sob a LGPD",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-1.5">
                    <CheckIcon className="size-3.5 text-lima" />
                    {t}
                  </li>
                ))}
              </ul>
            </BlurFade>
            <BlurFade delay={0.55}>
              <div className="mt-8 flex flex-wrap gap-2">
                {quickLinks.map(([label, href]) => (
                  <Link
                    key={label}
                    href={href}
                    className="rounded-full border border-white/12 px-3 py-1 text-xs font-medium text-white/80 transition-colors hover:border-lima hover:text-lima"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3}>
            <HeroVisual />
          </BlurFade>
        </div>

        <MeMarquee className="relative mt-24 pb-12" />
      </section>

      <Solutions />

      {/* Dois jeitos de contratar */}
      <section className="bg-muted py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className={eyebrow}>Como contratar</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Dois jeitos de trabalhar com a mytek
              <span className="text-emphasis">.</span>
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {ways.map((w, i) => (
              <BlurFade key={w.title} delay={i * 0.1}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-8">
                  <span className={eyebrow}>{w.tag}</span>
                  <h3 className="mt-3 font-heading text-2xl font-extrabold tracking-[-0.03em]">
                    {w.title}
                  </h3>
                  <p className="mt-1 font-mono text-sm font-bold text-primary">
                    {w.price}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {w.points.map((p) => (
                      <li key={p} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                          <CheckIcon className="size-3" />
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 w-fit" size="lg">
                    <Link href={w.cta[1]}>
                      {w.cta[0]} <ArrowRightIcon className="size-4" />
                    </Link>
                  </Button>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <Process />

      {/* CRM em destaque */}
      <section id="crm" className="py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.2fr] lg:px-8">
          <BlurFade>
            <span className={eyebrow}>Produto em destaque</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              CRM: nenhum lead esquecido no caminho
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Todo CRM registra o que já aconteceu. O da mytek olha para o que
              parou de acontecer: quando uma oportunidade trava numa etapa, o
              responsável é avisado antes de ela esfriar.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              {[
                "Alerta de lead parado, direto no vendedor",
                "WhatsApp e histórico na mesma tela do negócio",
                "Funil visual e dashboard de origem das vendas",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/crm">
                  Conhecer o CRM <ArrowRightIcon className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/pricing">Ver preços</Link>
              </Button>
            </div>
          </BlurFade>
          <BlurFade delay={0.15}>
            <ProductShot shot={productShots.funil} className="max-w-none" />
          </BlurFade>
        </div>
      </section>

      {/* Perguntas */}
      <section id="faq" className="bg-muted py-24 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <span className={eyebrow}>Perguntas frequentes</span>
          <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
            O que mais perguntam antes de contratar
          </h2>
          <Accordion type="single" collapsible className="mt-8">
            {faqs.map((f) => (
              <AccordionItem key={f.q} value={f.q}>
                <AccordionTrigger className="text-left text-base">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground lg:py-28">
        <MeTyping className="absolute inset-x-0 top-10 opacity-60" />
        <div className="relative mx-auto max-w-4xl px-4 pt-10 text-center lg:px-8">
          <BlurFade>
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-balance lg:text-6xl">
              Qual problema da sua operação a gente resolve{" "}
              <span className="text-lima">primeiro?</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-primary-foreground/85">
              Conte como o seu processo funciona hoje. A gente responde no
              WhatsApp com um caminho e um preço.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <ShimmerButton
                href="/contact"
                className="h-14 bg-lima px-10 text-base text-lima-foreground"
              >
                <RocketIcon className="size-5" />
                Falar com o time
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                <Link href="/pricing">Ver preços</Link>
              </Button>
            </div>
            <p className="mt-5 text-sm text-primary-foreground/75">
              Sem fidelidade nos produtos por assinatura · resposta em até 4h
              úteis
            </p>
          </BlurFade>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
