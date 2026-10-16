import Link from "next/link";
import {
  BellRingIcon,
  CalendarCheckIcon,
  CheckIcon,
  ClipboardListIcon,
  FolderPlusIcon,
  ShoppingCartIcon,
  MailIcon,
  MessageCircleIcon,
  RocketIcon,
  UsersIcon,
  WorkflowIcon,
  ZapIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { Card3D } from "@/components/brand/card-3d";
import { FlowShowcase } from "@/components/brand/flow-showcase";
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

const sol = getSolution("automacao-n8n")!;

export const metadata: Metadata = {
  title: "Automação com n8n",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/automacao-n8n" },
};

const examples = [
  { icon: ShoppingCartIcon, tag: "Loja", title: "Pedido novo, tudo andando", body: "O pedido avisa o cliente, baixa o estoque e prepara a nota." },
  { icon: CalendarCheckIcon, tag: "Clínica", title: "Menos faltas na agenda", body: "Lembrete e confirmação de consulta, no WhatsApp, sem ninguém ligar." },
  { icon: FolderPlusIcon, tag: "Escritório", title: "Contrato assinado, pasta pronta", body: "Cria a pasta do cliente, avisa a equipe e gera a cobrança." },
  { icon: MessageCircleIcon, tag: "Restaurante", title: "Pedido do WhatsApp na cozinha", body: "O pedido chega organizado, sem copiar mensagem." },
  { icon: UsersIcon, tag: "Educação", title: "Matrícula com boas-vindas", body: "Libera o acesso e manda as instruções de início." },
  { icon: MailIcon, tag: "Qualquer negócio", title: "Relatório pronto por e-mail", body: "Os números do dia chegam sozinhos, na hora que você combinar." },
] as const;

const how = [
  { icon: ZapIcon, tag: "Quando", title: "Algo acontece", body: "Chega um lead, uma venda fecha, um horário é marcado." },
  { icon: WorkflowIcon, tag: "Se", title: "For o caso", body: "O fluxo confere as condições que você definiu." },
  { icon: CheckIcon, tag: "Então", title: "Faça isso", body: "Envia a mensagem, cria o registro, avisa a pessoa certa." },
] as const;

const why = [
  { title: "Fluxos visuais", body: "Dá para ver e entender cada passo, em vez de um código escondido." },
  { title: "Liga as ferramentas que você já usa", body: "WhatsApp, CRM, planilhas, e-mail e outros sistemas, sem trocar nada." },
  { title: "Roda onde você preferir", body: "Em servidor próprio ou na nuvem, conforme o seu controle de dados." },
] as const;

export default function AutomacaoPage() {
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
                / automação sob medida
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  Sob medida
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Automação sob medida,{" "}
                  <span className="text-lima">para qualquer negócio.</span>
                </h1>
              </BlurFade>
              <BlurFade delay={0.25}>
                <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
                  Se uma tarefa se repete na sua operação, dá para automatizar:
                  a gente liga as suas ferramentas e desenha o fluxo do jeito
                  que o seu negócio funciona. Loja, clínica, escritório,
                  restaurante, escola. Não existe fluxo pronto: o seu é feito
                  para você.
                </p>
              </BlurFade>
              <BlurFade delay={0.35}>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <ShimmerButton href="/contact">
                    <RocketIcon className="size-4" />
                    Pedir um orçamento
                  </ShimmerButton>
                  <Button variant="ghost" size="lg" asChild>
                    <a href="#exemplos">Ver o que dá para automatizar ↓</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="lg:[zoom:0.72]">
              <FlowShowcase />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Exemplos */}
        <section id="exemplos" className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Para qualquer negócio</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Se a sua equipe repete, dá para automatizar
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Alguns exemplos por segmento. O seu fluxo pode ser outro: a
                gente começa pelo que mais consome tempo.
              </p>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {examples.map((e, i) => (
                <BlurFade key={e.title} delay={i * 0.05}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={9} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full gap-4 overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <e.icon className="size-6" />
                        </span>
                        <div>
                          <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary [transform:translateZ(30px)]">
                            {e.tag}
                          </span>
                          <h3 className="mt-2 font-heading text-lg font-extrabold [transform:translateZ(26px)]">
                            {e.title}
                          </h3>
                          <p className="mt-1.5 text-sm text-muted-foreground [transform:translateZ(14px)]">
                            {e.body}
                          </p>
                        </div>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 3 · Como um fluxo funciona */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Como um fluxo funciona</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Quando acontece, se for o caso, então faz
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <ol className="relative mt-14 grid gap-6 md:grid-cols-3">
              <span
                aria-hidden
                className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent md:block"
              />
              {how.map((c, i) => (
                <BlurFade key={c.title} delay={i * 0.08}>
                  <li className="relative flex flex-col items-center text-center md:items-start md:text-left">
                    <span
                      className={
                        "relative z-10 flex size-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_-10px_rgba(94,52,247,0.7)] ring-4 ring-muted " +
                        (i === 2
                          ? "bg-lima text-lima-foreground"
                          : "bg-gradient-to-br from-[#6E48FF] to-[#5E34F7]")
                      }
                    >
                      <c.icon className="size-6" />
                    </span>
                    <span className="mt-4 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                      {c.tag}
                    </span>
                    <h3 className="mt-1 font-heading text-lg font-extrabold">{c.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{c.body}</p>
                  </li>
                </BlurFade>
              ))}
            </ol>
          </div>
        </section>

        {/* 4 · Por que n8n */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Por que n8n</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Flexível, visual e do seu jeito
              <span className="text-emphasis">.</span>
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {why.map((w) => (
                <div
                  key={w.title}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md"
                >
                  <span className="flex size-10 items-center justify-center rounded-xl bg-lima text-lima-foreground">
                    <CheckIcon className="size-5" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-extrabold text-white">{w.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{w.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5 · O que está incluso e etapas */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Do diagnóstico ao fluxo rodando
                <span className="text-emphasis">.</span>
              </h2>
              <ul className="mt-8 space-y-3">
                {sol.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      <ClipboardListIcon className="size-3" />
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


        {/* 6 · Perguntas */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre automação
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
              Qual tarefa chata a gente tira do{" "}
              <span className="text-lima">seu time primeiro?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte o que a sua equipe repete todo dia. A gente responde no
              WhatsApp em até 4h úteis, com prazo e preço.
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
