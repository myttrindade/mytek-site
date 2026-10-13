import Link from "next/link";
import {
  BookOpenIcon,
  BotIcon,
  CalendarCheckIcon,
  CheckIcon,
  ClipboardListIcon,
  MessageCircleIcon,
  RocketIcon,
  ShieldCheckIcon,
  UserRoundIcon,
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

const sol = getSolution("agentes-de-ia")!;

export const metadata: Metadata = {
  title: "Agentes de IA",
  description: `${sol.problem} ${sol.summary}`,
  alternates: { canonical: "/solucoes/agentes-de-ia" },
};

const does = [
  { icon: MessageCircleIcon, title: "Atende na hora", body: "Responde as perguntas que se repetem todo dia, a qualquer hora, no WhatsApp e no site." },
  { icon: CalendarCheckIcon, title: "Qualifica e agenda", body: "Descobre o que o cliente quer e já reserva o horário." },
  { icon: BookOpenIcon, title: "Fala o que a sua empresa fala", body: "Responde com base nos documentos e nas regras que você cadastrou." },
  { icon: UserRoundIcon, title: "Chama uma pessoa", body: "Quando não sabe ou o caso é sensível, passa a conversa para a equipe." },
] as const;

const flow = [
  { icon: MessageCircleIcon, title: "O cliente chama", body: "Pelo WhatsApp ou pelo site, a qualquer hora." },
  { icon: BookOpenIcon, title: "O agente consulta", body: "Procura a resposta na base da sua empresa." },
  { icon: CalendarCheckIcon, title: "Responde ou agenda", body: "Tira a dúvida, qualifica ou reserva o horário." },
  { icon: UserRoundIcon, title: "Uma pessoa assume", body: "Se for preciso, a equipe continua a conversa." },
] as const;

const compare = [
  ["Como responde", "Menu fixo de opções", "Conversa em linguagem natural"],
  ["Se a pergunta foge do script", "Trava ou repete o menu", "Entende, ou passa para uma pessoa"],
  ["De onde vem a resposta", "Fluxo montado à mão", "Da base de conhecimento da empresa"],
] as const;

const control = [
  { icon: ShieldCheckIcon, title: "Só responde o que foi cadastrado", body: "Dentro das regras e dos documentos da sua empresa." },
  { icon: UserRoundIcon, title: "Passa para uma pessoa", body: "Quando não sabe, o caso é sensível ou o cliente pede." },
  { icon: ClipboardListIcon, title: "Conversas registradas", body: "A equipe revisa o que o agente respondeu e ajusta." },
] as const;

/** Conversa de exemplo no WhatsApp: ilustrativa, sem dados de cliente real. */
function ChatHeroVisual() {
  const bubble = "max-w-[88%] rounded-2xl px-3.5 py-2.5 text-xs leading-snug";
  return (
    <div className="relative mx-auto w-full max-w-[460px] pb-10 pt-6">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.5),transparent_65%)]"
      />
      <div className="relative overflow-hidden rounded-[2rem] border-2 border-white/20 bg-[#0F0819] shadow-[0_30px_90px_-20px_rgba(110,72,255,0.7)]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.05] px-5 py-3.5">
          <span className="flex size-9 items-center justify-center rounded-full bg-[#5E34F7] text-white">
            <BotIcon className="size-5" />
          </span>
          <div className="leading-tight">
            <p className="text-sm font-bold text-white">Atendimento</p>
            <p className="flex items-center gap-1.5 text-[11px] text-white/55">
              <span className="size-1.5 rounded-full bg-lima" />
              online agora
            </p>
          </div>
          <span className="ml-auto rounded-full bg-lima/15 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-lima">
            agente de IA
          </span>
        </div>
        <div className="space-y-3 bg-gradient-to-b from-[#1a0f33] to-[#0F0819] p-5">
          <p className={`${bubble} bg-white/10 text-white`}>
            Oi! Vocês atendem no sábado?
          </p>
          <p className={`${bubble} ml-auto bg-[#5E34F7] text-white`}>
            Atendemos sim, das 9h às 13h. Quer reservar um horário?
          </p>
          <p className={`${bubble} bg-white/10 text-white`}>Quero às 10h.</p>
          <p className={`${bubble} ml-auto bg-[#5E34F7] text-white`}>
            Pronto! Reservei sábado, às 10h. Te mando a confirmação por aqui.
          </p>
          <div className="ml-auto flex w-fit items-center gap-2 rounded-xl border border-lima/40 bg-lima/[0.08] px-3 py-2 text-[11px] font-semibold text-lima">
            <CalendarCheckIcon className="size-3.5" />
            Agendado: sábado, 10h
          </div>
          <p className="pt-1 text-center text-[10px] text-white/35">
            Conversa de exemplo, para ilustrar.
          </p>
        </div>
      </div>

      <div className="hero-float-a absolute -left-4 top-24 hidden w-[190px] sm:block">
        <div
          className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
          style={{ rotate: "-2deg" }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <BookOpenIcon className="size-3.5 text-lima" />
            Consultou a base
          </div>
          <p className="mt-1 text-xs text-white/70">Horários e regras da empresa.</p>
        </div>
      </div>
      <div className="hero-float-c absolute -right-4 bottom-2 hidden w-[210px] sm:block">
        <div
          className="rounded-2xl border border-white/12 bg-[#170E2A]/90 p-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md"
          style={{ rotate: "2deg" }}
        >
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <UserRoundIcon className="size-3.5 text-lima" />
            Passa para a equipe
          </div>
          <p className="mt-1 text-xs text-white/70">Quando é um caso que pede uma pessoa.</p>
        </div>
      </div>
    </div>
  );
}

export default function AgentesPage() {
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
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div>
              <nav className="font-mono text-xs text-muted-foreground">
                <Link href="/#solucoes" className="hover:text-foreground">
                  soluções
                </Link>{" "}
                / agentes de ia
              </nav>
              <BlurFade delay={0.08}>
                <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                  <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                  IA
                </span>
              </BlurFade>
              <BlurFade delay={0.15}>
                <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                  Atendimento que responde na hora,{" "}
                  <span className="text-lima">com a sua equipe no controle.</span>
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
                    <a href="#conversa">Como uma conversa funciona ↓</a>
                  </Button>
                </div>
              </BlurFade>
            </div>
            <BlurFade delay={0.3} className="lg:[zoom:0.72]">
              <ChatHeroVisual />
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · O que o agente faz */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que o agente faz</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Tira do time o que se repete, e deixa as conversas que importam
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {does.map((d, i) => (
                <BlurFade key={d.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={10} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-6 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          <d.icon className="size-6" />
                        </span>
                        <h3 className="mt-5 font-heading text-lg font-extrabold [transform:translateZ(28px)]">
                          {d.title}
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground [transform:translateZ(16px)]">
                          {d.body}
                        </p>
                      </div>
                    </Card3D>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 3 · Como uma conversa funciona */}
        <section id="conversa" className="bg-muted py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Como uma conversa funciona</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Do primeiro &ldquo;oi&rdquo; ao horário reservado
                <span className="text-emphasis">.</span>
              </h2>
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
                        "relative z-10 flex size-14 items-center justify-center rounded-2xl text-white shadow-[0_14px_30px_-10px_rgba(94,52,247,0.7)] ring-4 ring-muted " +
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

        {/* 4 · Chatbot comum x agente de IA */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-4xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Chatbot comum ou agente de IA?</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Não é aquele robô de menu
                <span className="text-emphasis">.</span>
              </h2>
              <div className="mt-8 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_28px_54px_-28px_rgba(94,52,247,0.45)]">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[560px] border-collapse text-left text-sm">
                    <thead>
                      <tr>
                        <th className="w-[28%] p-4" />
                        <th className="bg-muted p-4 font-heading font-extrabold">
                          <span className="flex items-center gap-2">
                            <XIcon className="size-4 text-muted-foreground" />
                            Chatbot comum
                          </span>
                        </th>
                        <th className="bg-primary p-4 font-heading font-extrabold text-primary-foreground">
                          <span className="flex items-center gap-2">
                            <CheckIcon className="size-4 text-lima" />
                            Agente de IA
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
            </BlurFade>
          </div>
        </section>

        {/* 5 · Você no controle */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Você no controle</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Um atendente novo, com regras claras
              <span className="text-emphasis">.</span>
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {control.map((c) => (
                <div
                  key={c.title}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-lima text-lima-foreground shadow-[0_12px_28px_-10px_rgba(198,255,0,0.6)]">
                    <c.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-heading text-lg font-extrabold text-white">{c.title}</h3>
                  <p className="mt-2 text-sm text-white/70">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 6 · O que está incluso e etapas */}
        <section className="bg-muted py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[1fr_1.1fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                Do mapeamento à operação
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
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre agentes de IA
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
              Quer um atendimento que não{" "}
              <span className="text-lima">fecha às 18h?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte o que o seu cliente mais pergunta. A gente responde no
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
