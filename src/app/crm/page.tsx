import Link from "next/link";
import {
  ArrowRightIcon,
  BarChart3Icon,
  BellRingIcon,
  CheckIcon,
  FilterIcon,
  GaugeIcon,
  LayoutTemplateIcon,
  MessageCircleIcon,
  RocketIcon,
  ShieldIcon,
  SparklesIcon,
  WorkflowIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { LeadLifecycle } from "@/components/journey/lead-lifecycle";
import { StalledPanel } from "@/components/journey/stalled-panel";
import { ProductShot } from "@/components/product-shot";
import { Card3D } from "@/components/brand/card-3d";
import { TiltCard } from "@/components/velora/tilt-card";
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
import { NumberTicker } from "@/components/velora/number-ticker";
import { ScrollProgress } from "@/components/velora/scroll-progress";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { productShots } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "CRM com WhatsApp e alerta de lead parado",
  description:
    "O CRM da mytek avisa quando um lead para de andar no funil, centraliza o atendimento no WhatsApp e mostra o que virou venda. A partir de R$137/mês, mais implantação de R$247, sem fidelidade.",
  alternates: { canonical: "/crm" },
};

const trustPoints = [
  "Sem fidelidade",
  "Configuração em 10 minutos, com a gente",
  "Dados no Brasil, sob a LGPD",
  "Suporte no WhatsApp em até 4h úteis",
];

const heroStats = [
  { value: 10, suffix: " min", label: "para deixar o CRM pronto: a gente configura com você" },
  { text: "R$137/mês", label: "no CRM Simples, mais R$247 de implantação" },
  { text: "3 usuários", label: "da sua equipe, incluídos no plano" },
  { text: "Sem fidelidade", label: "cancele quando quiser" },
] as const;

/** Falas genéricas do setor, não depoimentos: sem nome nem empresa. */
const pains = [
  {
    quote: "Respondi esse cliente semana passada e esqueci de voltar.",
    answer:
      "O alerta lembra por você: quando um negócio para de andar numa etapa, o responsável é avisado antes de a oportunidade esfriar.",
    icon: BellRingIcon,
  },
  {
    quote:
      "Cliente chama no Instagram, no WhatsApp e no site, e a equipe se perde.",
    answer:
      "Todo lead entra no mesmo funil, com a conversa e a ficha do negócio na mesma tela.",
    icon: FilterIcon,
  },
  {
    quote: "O vendedor saiu e levou o histórico dos clientes com ele.",
    answer:
      "Conversas e negociações ficam na plataforma, que é da empresa, com acesso controlado por usuário.",
    icon: ShieldIcon,
  },
] as const;

const features = [
  {
    icon: MessageCircleIcon,
    title: "WhatsApp com contexto",
    body: "Converse com o lead sem perder o histórico do negócio nem trocar de aba.",
  },
  {
    icon: FilterIcon,
    title: "Funil que a equipe entende",
    body: "Cada etapa com responsável, valor e última interação. Arraste e solte entre as etapas.",
  },
  {
    icon: GaugeIcon,
    title: "Origem das vendas",
    body: "Veja quais canais realmente geram venda, sem montar planilha.",
  },
  {
    icon: ShieldIcon,
    title: "Cada um vê o que deve",
    body: "Você define o que administrador e vendedor enxergam.",
  },
  {
    icon: SparklesIcon,
    title: "IA sobre os seus dados",
    body: "No plano Plus, pergunte em português e a IA responde sobre a sua base.",
  },
] as const;

const planPoints = [
  "Funil visual com WhatsApp e alerta de lead parado",
  "3 usuários incluídos no plano",
  "Configuração feita junto com você",
  "Suporte direto no WhatsApp, sem central de tickets",
  "Sem fidelidade: cancele quando quiser",
];

const faqs = [
  {
    q: "Posso contratar só o CRM?",
    a: "Pode. O CRM funciona sozinho. Se fizer sentido depois, dá para combinar com landing page, dashboard ou automações, e a integração já vem pronta.",
  },
  {
    q: "Serve para qualquer tipo de negócio?",
    a: "Serve para qualquer negócio que receba lead por WhatsApp, Instagram ou formulário e precise acompanhar o que acontece depois: comércio, serviço, clínica, escritório, distribuidora. Se a sua venda é 100% automática, sem conversa no meio, provavelmente não é para você.",
  },
  {
    q: "Preciso de equipe técnica para configurar?",
    a: "Não. A configuração leva cerca de 10 minutos e a gente faz junto com você. O funil já vem com etapas padrão, que você usa do jeito que está ou renomeia arrastando, e conectar o WhatsApp é escanear um QR Code.",
  },
  {
    q: "Tem teste gratuito?",
    a: "Não por enquanto, mas também não há fidelidade: você paga o primeiro mês, testa com os seus dados e cancela quando quiser. Se quiser ver a plataforma antes, a gente faz uma demonstração ao vivo no WhatsApp.",
  },
  {
    q: "Tem fidelidade? E se eu cancelar, perco meus dados?",
    a: "Não há fidelidade nem multa: o plano é mês a mês e o cancelamento é feito pelo WhatsApp do suporte. Os dados são seus: é só pedir e a gente entrega a sua base de leads, clientes e histórico, inclusive nos 30 dias após o cancelamento.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const check = (
  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
    <CheckIcon className="size-3" />
  </span>
);

/**
 * Visual da capa do CRM: o funil real numa janela com brilho, e três cartões
 * flutuando por cima (alerta de lead parado, mensagem do WhatsApp e valor em
 * jogo). Os números dos cartões são de exemplo, como o print.
 */
function CrmHeroVisual() {
  const card =
    "rounded-2xl border border-white/12 bg-[#170E2A]/90 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.75)] backdrop-blur-md";
  return (
    <div className="relative mx-auto w-full max-w-[700px] pb-6 pt-8 lg:pl-4">
      <div
        aria-hidden
        className="absolute -inset-6 rounded-full bg-[radial-gradient(circle,rgba(94,52,247,0.5),transparent_65%)]"
      />
      <TiltCard maxTilt={4} className="relative">
        <div className="rounded-3xl border border-white/15 bg-white/[0.06] p-2 shadow-[0_30px_90px_-20px_rgba(110,72,255,0.7)] backdrop-blur">
          <ProductShot
            shot={productShots.funil}
            priority
            beam={false}
            caption=""
            className="max-w-none [&>div]:rounded-2xl"
          />
        </div>
      </TiltCard>

      {/* alerta de lead parado */}
      <div className="hero-float-a absolute left-0 top-0 hidden w-[230px] sm:block lg:-left-2">
        <div className={`${card} p-3.5`} style={{ rotate: "-2deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <BellRingIcon className="size-3.5 text-lima" />
            Lead parado
          </div>
          <p className="mt-1.5 text-sm font-semibold text-white">
            Carla Mendes · 2 dias sem resposta
          </p>
          <p className="mt-0.5 text-xs text-white/60">
            Alerta enviado ao vendedor
          </p>
        </div>
      </div>

      {/* valor em jogo */}
      <div className="hero-float-b absolute -right-2 top-14 hidden w-[170px] sm:block">
        <div className={`${card} p-3.5`} style={{ rotate: "2.2deg" }}>
          <p className="font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            Em jogo
          </p>
          <p className="mt-1 font-heading text-2xl font-extrabold tracking-[-0.04em] text-lima">
            R$ 18.400
          </p>
          <p className="text-xs text-white/60">12 leads parados</p>
        </div>
      </div>

      {/* mensagem do WhatsApp */}
      <div className="hero-float-c absolute bottom-0 right-4 hidden w-[250px] sm:block lg:right-8">
        <div className={`${card} p-3.5`} style={{ rotate: "-1.6deg" }}>
          <div className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.08em] text-white/60">
            <MessageCircleIcon className="size-3.5 text-lima" />
            WhatsApp
          </div>
          <p className="mt-1.5 rounded-xl rounded-bl-sm bg-white/10 px-3 py-2 text-xs text-white">
            Consigo fechar ainda hoje?
          </p>
          <p className="mt-1.5 ml-auto w-fit rounded-xl rounded-br-sm bg-[#5E34F7] px-3 py-2 text-xs text-white">
            Consegue sim, te mando a proposta.
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CrmPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <SiteHeader />

      {/* 1 · Capa: o que é, para quem, quanto custa */}
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
        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <BlurFade direction="down">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                CRM com WhatsApp
              </span>
            </BlurFade>
            <BlurFade delay={0.12}>
              <h1 className="mt-4 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em] text-balance sm:text-4xl xl:text-[2.5rem]">
                Seu lead respondeu no Instagram.{" "}
                <span className="mt-2 block text-xl font-medium tracking-normal text-muted-foreground sm:text-2xl xl:text-3xl">
                  Sua equipe viu{" "}
                  <mark className="bg-lima px-1 text-lima-foreground">
                    6 horas depois.
                  </mark>
                </span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.25}>
              <p className="mt-4 max-w-xl text-base text-muted-foreground text-pretty">
                O CRM da mytek avisa quando um lead para de andar no funil e
                centraliza o WhatsApp num lugar só, para nenhuma oportunidade
                esfriar por esquecimento.
              </p>
            </BlurFade>
            <BlurFade delay={0.4}>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <ShimmerButton href="/contact">
                  <RocketIcon className="size-4" />
                  Falar com o time
                </ShimmerButton>
                <Button variant="ghost" size="lg" asChild>
                  <Link href="#preco">Ver preço ↓</Link>
                </Button>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} className="lg:[zoom:0.72]">
            <CrmHeroVisual />
          </BlurFade>
        </div>

        <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
      </section>

      {/* faixa de fatos logo abaixo da capa */}
      <section className="bg-background py-10">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <ul className="mb-6 flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
            {trustPoints.map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckIcon className="size-3.5 shrink-0 text-primary" />
                {t}
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-primary/20 bg-primary/15 shadow-[0_24px_46px_-28px_rgba(94,52,247,0.45)] lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col gap-1 bg-gradient-to-b from-white to-[#F4F1FF] px-6 py-5"
              >
                <span className="font-heading text-2xl font-extrabold tracking-[-0.03em] whitespace-nowrap text-primary lg:text-3xl">
                  {"value" in stat ? (
                    <NumberTicker value={stat.value} suffix={stat.suffix} />
                  ) : (
                    stat.text
                  )}
                </span>
                <span className="text-sm text-muted-foreground text-balance">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2 · O problema, na voz de quem sente */}
      <section id="problema" className="bg-muted py-24 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <span className={eyebrow}>O problema</span>
            <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Você já ouviu isso na sua empresa
              <span className="text-emphasis">?</span>
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Se alguma dessas frases parece familiar, o problema não é falta de
              lead. É o que acontece depois que ele chega.
            </p>
          </BlurFade>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {pains.map((p, i) => (
              <BlurFade key={p.quote} delay={i * 0.08}>
                <div className="h-full [perspective:1200px]">
                  <Card3D
                    className="h-full"
                    maxTilt={11}
                    glare="rgba(94,52,247,0.16)"
                  >
                    <div
                      style={{ transformStyle: "preserve-3d" }}
                      className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/25 bg-gradient-to-b from-white via-white to-[#EFEAFF] p-7 shadow-[0_28px_54px_-26px_rgba(94,52,247,0.55)] transition-shadow duration-300 group-hover/3d:shadow-[1px_1px_0_#e2dbff,2px_2px_0_#e2dbff,3px_3px_0_#d3c8ff,4px_4px_0_#d3c8ff,5px_5px_0_#c2b4ff,6px_6px_0_#c2b4ff,7px_7px_0_#b3a2ff,8px_8px_0_#b3a2ff,0_34px_52px_-16px_rgba(94,52,247,0.5)]"
                    >
                      {/* faixa de cor no topo */}
                      <span
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#5E34F7] via-[#8D6BFF] to-[#C6FF00]"
                      />
                      {/* aspas grandes ao fundo */}
                      <span
                        aria-hidden
                        className="pointer-events-none absolute -right-1 -top-3 select-none font-heading text-[130px] font-extrabold leading-none text-primary/[0.08]"
                      >
                        ”
                      </span>
                      <div className="relative flex items-center gap-3 [transform:translateZ(46px)]">
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] ring-1 ring-white/40">
                          <p.icon className="size-6" />
                        </span>
                      </div>
                      <p className="relative mt-5 font-heading text-xl font-extrabold leading-snug tracking-[-0.02em] [transform:translateZ(34px)] lg:text-[1.35rem]">
                        “{p.quote}”
                      </p>
                      <div className="relative mt-6 border-t border-primary/15 pt-5 [transform:translateZ(20px)]">
                        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary">
                          Como o CRM resolve
                        </span>
                        <p className="mt-2 text-sm font-medium text-foreground/80">
                          {p.answer}
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

      {/* 3 · O diferencial: lead parado */}
      <section
        id="lead-parado"
        className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28"
      >
        <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
        <div className="relative mx-auto max-w-5xl px-4 lg:px-8">
          <BlurFade>
            <span className={eyebrow}>O que nenhum CRM comum faz</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Seu lead não deveria{" "}
              <span className="text-emphasis">precisar lembrar de você</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground text-pretty">
              Todo CRM registra o que já aconteceu. O da mytek olha para o que
              parou de acontecer: quando uma oportunidade trava numa etapa, o
              responsável é avisado antes de ela esfriar.
            </p>
          </BlurFade>
          <BlurFade delay={0.15}>
            <LeadLifecycle className="mt-12" />
          </BlurFade>
          <BlurFade delay={0.3}>
            <h3 className="mt-16 text-2xl font-extrabold tracking-[-0.03em] text-balance lg:text-3xl">
              Quantas oportunidades estão paradas agora?
            </h3>
            <StalledPanel className="mt-6" />
          </BlurFade>
        </div>
      </section>

      {/* 4 · O que tem dentro */}
      <section id="recursos" className="bg-muted py-24 lg:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 lg:grid-cols-[1fr_1.15fr] lg:px-8">
          <BlurFade>
            <span className={eyebrow}>O que você tem</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
              Tudo o que a equipe usa, num lugar só
              <span className="text-emphasis">.</span>
            </h2>
            <ul className="mt-8 space-y-5">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <f.icon className="size-5" />
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-bold">{f.title}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">{f.body}</p>
                  </div>
                </li>
              ))}
            </ul>
          </BlurFade>
          <BlurFade delay={0.15}>
            <ProductShot shot={productShots.inbox} className="max-w-none" />
          </BlurFade>
        </div>
      </section>

      {/* 5 · Combine: o CRM sozinho já resolve, e liga com o resto */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="dark relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#5E34F7] via-[#4A22D6] to-[#1b0f36] p-8 text-foreground shadow-[0_40px_90px_-30px_rgba(94,52,247,0.75)] lg:p-12">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-24 -top-24 size-[420px] rounded-full bg-[radial-gradient(circle,rgba(198,255,0,0.28),transparent_65%)]"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-32 -left-20 size-[380px] rounded-full bg-[radial-gradient(circle,rgba(141,107,255,0.45),transparent_65%)]"
              />
              <div className="relative max-w-2xl">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-lima">
                  Quer ir além?
                </span>
                <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance text-white lg:text-5xl">
                  O CRM funciona sozinho e{" "}
                  <span className="text-lima">combina com o resto.</span>
                </h2>
                <p className="mt-4 text-lg text-white/80">
                  Quem junta soluções ganha a integração já pronta: o lead
                  nasce na landing page, entra no funil, vira número no
                  dashboard e as tarefas chatas se resolvem sozinhas.
                </p>
              </div>
              <div className="relative mt-10 grid gap-4 md:grid-cols-3">
                {[
                  {
                    icon: LayoutTemplateIcon,
                    title: "Landing pages",
                    body: "Capte contatos que já nascem como lead no funil.",
                    meta: "R$777, valor único",
                    href: "/solucoes/landing-pages",
                  },
                  {
                    icon: BarChart3Icon,
                    title: "Dashboards",
                    body: "Veja vendas e atendimento em tempo real, sem planilha.",
                    meta: "sob medida",
                    href: "/solucoes/dashboards",
                  },
                  {
                    icon: WorkflowIcon,
                    title: "Automação n8n",
                    body: "Ligue o CRM às outras ferramentas da sua empresa.",
                    meta: "sob medida",
                    href: "/solucoes/automacao-n8n",
                  },
                ].map((c) => (
                  <TiltCard key={c.title} className="h-full" maxTilt={7}>
                    <Link
                      href={c.href}
                      className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/[0.08] p-6 backdrop-blur-md transition-colors hover:border-lima/60 hover:bg-white/[0.13]"
                    >
                      <span className="flex size-12 items-center justify-center rounded-2xl bg-lima text-lima-foreground shadow-[0_12px_28px_-10px_rgba(198,255,0,0.6)]">
                        <c.icon className="size-6" />
                      </span>
                      <h3 className="mt-5 font-heading text-xl font-extrabold tracking-[-0.02em] text-white">
                        {c.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-white/75">
                        {c.body}
                      </p>
                      <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-4 text-sm">
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-white/60">
                          {c.meta}
                        </span>
                        <span className="flex size-8 items-center justify-center rounded-full bg-white text-[#4A22D6] transition-transform group-hover:translate-x-1">
                          <ArrowRightIcon className="size-4" />
                        </span>
                      </div>
                    </Link>
                  </TiltCard>
                ))}
              </div>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 6 · Preço */}
      <section id="preco" className="bg-muted py-24 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 lg:px-8">
          <BlurFade>
            <div className="grid gap-8 rounded-3xl border border-primary/30 bg-card p-8 shadow-xl shadow-primary/10 lg:grid-cols-[1fr_1.1fr] lg:p-10">
              <div className="flex flex-col">
                <span className={eyebrow}>Planos do CRM</span>
                <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.05em]">
                  R$137
                  <span className="text-lg font-semibold text-muted-foreground">
                    /mês
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  CRM Simples: mais R$247 de implantação, paga uma vez só.
                  CRM com WhatsApp para até 3 usuários.
                </p>
                <p className="mt-3 rounded-xl bg-primary/10 px-3 py-2 text-sm">
                  <strong>CRM com IA: R$297/mês.</strong> Acrescenta o agente
                  de IA no atendimento.
                </p>
                <p className="mt-2 rounded-xl bg-primary/10 px-3 py-2 text-sm">
                  <strong>CRM + Churn: R$397/mês.</strong> Acrescenta a
                  previsão de churn, que avisa quais clientes estão para sair.
                  Nos dois, implantação de R$447.
                </p>
                <div className="mt-auto flex flex-col gap-3 pt-8">
                  <Button asChild size="lg" className="rounded-full">
                    <Link href="/contact">
                      Falar com o time <ArrowRightIcon className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild variant="ghost" className="rounded-full">
                    <Link href="/pricing">Ver todos os planos e valores</Link>
                  </Button>
                </div>
              </div>
              <ul className="space-y-3 text-sm">
                {planPoints.map((p) => (
                  <li key={p} className="flex items-start gap-3">
                    {check}
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 7 · Perguntas */}
      <section id="faq" className="py-24 lg:py-28">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
            Perguntas sobre o CRM
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

      {/* 8 · Chamada final */}
      <section className="dark relative overflow-hidden bg-background py-28 text-foreground lg:py-32">
        <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
        <BrandGlyph
          still
          size={520}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
        />
        <div className="relative mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-balance lg:text-5xl">
            Pare de perder lead por{" "}
            <span className="text-emphasis">esquecimento.</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
            Fale com o time e veja o CRM funcionando com a rotina da sua
            empresa.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ShimmerButton href="/contact" className="h-14 px-10 text-base">
              <RocketIcon className="size-5" />
              Falar com o time
            </ShimmerButton>
            <Button variant="ghost" size="lg" asChild>
              <Link href="/pricing">Ver preços</Link>
            </Button>
          </div>
          <p className="mt-5 text-sm text-muted-foreground">
            Sem fidelidade · resposta no WhatsApp em até 4h úteis
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
