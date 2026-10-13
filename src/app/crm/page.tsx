import Link from "next/link";
import {
  ArrowRightIcon,
  BellRingIcon,
  CheckIcon,
  FilterIcon,
  GaugeIcon,
  MessageCircleIcon,
  RocketIcon,
  ShieldIcon,
  SparklesIcon,
} from "lucide-react";
import type { Metadata } from "next";

import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { LeadLifecycle } from "@/components/journey/lead-lifecycle";
import { StalledPanel } from "@/components/journey/stalled-panel";
import { ProductShot } from "@/components/product-shot";
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
    "O CRM da mytek avisa quando um lead para de andar no funil, centraliza o atendimento no WhatsApp e mostra o que virou venda. A partir de R$99/mês, sem fidelidade.",
  alternates: { canonical: "/crm" },
};

const trustPoints = [
  "Sem fidelidade",
  "Configuração em 10 minutos, com a gente",
  "Dados no Brasil, sob a LGPD",
  "Suporte no WhatsApp em até 4h úteis",
];

const heroStats = [
  { value: 10, suffix: " min", label: "da conversa ao funil configurado" },
  { text: "R$99/mês", label: "a partir de, no plano do CRM" },
  { text: "3 usuários", label: "incluídos no plano" },
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
    a: "Pode. O CRM funciona sozinho. Se fizer sentido depois, dá para combinar com landing page, dashboard ou automações, e a integração já vem pronta. CRM e Dashboard juntos saem a partir de R$296/mês, contra R$496/mês contratando avulso.",
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

export default function CrmPage() {
  return (
    <main className="relative">
      <ScrollProgress />
      <SiteHeader />

      {/* 1 · Capa: o que é, para quem, quanto custa */}
      <section className="dark relative overflow-hidden bg-background pt-32 pb-20 text-foreground lg:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_0%,rgba(94,52,247,0.42),transparent_70%)]"
        />
        <GridPattern
          width={56}
          height={56}
          className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]"
        />
        <div className="relative mx-auto max-w-6xl px-4 text-center lg:px-8">
          <BlurFade direction="down">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
              <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
              CRM com WhatsApp
            </span>
          </BlurFade>
          <BlurFade delay={0.12}>
            <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-[-0.04em] text-balance sm:text-5xl lg:text-6xl">
              Seu lead respondeu no Instagram.{" "}
              <span className="mt-3 block text-2xl font-medium tracking-normal text-muted-foreground sm:text-3xl lg:text-4xl">
                Sua equipe viu{" "}
                <mark className="bg-lima px-1 text-lima-foreground">
                  6 horas depois.
                </mark>
              </span>
            </h1>
          </BlurFade>
          <BlurFade delay={0.25}>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty">
              O CRM da mytek avisa quando um lead para de andar no funil e
              centraliza o WhatsApp num lugar só, para nenhuma oportunidade
              esfriar por esquecimento.
            </p>
          </BlurFade>
          <BlurFade delay={0.4}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton href="/contact">
                <RocketIcon className="size-4" />
                Falar com o time
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                <Link href="#preco">Ver preço ↓</Link>
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
              {trustPoints.map((t) => (
                <li key={t} className="flex items-center gap-1.5">
                  <CheckIcon className="size-3.5 text-lima" />
                  {t}
                </li>
              ))}
            </ul>
          </BlurFade>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-8 lg:grid-cols-4">
            {heroStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-2xl font-extrabold tracking-[-0.03em] whitespace-nowrap lg:text-3xl">
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

          <BlurFade delay={0.5}>
            <div className="mx-auto mt-14 max-w-5xl rounded-2xl shadow-[0_0_90px_-15px_rgba(110,72,255,0.7)]">
              <ProductShot shot={productShots.funil} priority className="max-w-none" />
            </div>
          </BlurFade>
        </div>
      </section>

      {/* 2 · O problema, na voz de quem sente */}
      <section id="problema" className="py-24 lg:py-28">
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
                <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-6">
                  <p className="font-heading text-lg font-bold italic leading-snug">
                    “{p.quote}”
                  </p>
                  <div className="mt-5 flex gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <p.icon className="size-4" />
                    </span>
                    <p>{p.answer}</p>
                  </div>
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

      {/* 5 · Combine, sem apresentar o que tem página própria */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <div className="flex flex-col gap-6 rounded-2xl border border-border bg-card p-6 lg:flex-row lg:items-center lg:justify-between lg:p-8">
              <div className="max-w-xl">
                <span className={eyebrow}>Quer ir além?</span>
                <p className="mt-2 font-heading text-xl font-extrabold tracking-[-0.03em]">
                  O CRM funciona sozinho e combina com o resto.
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Uma landing page que manda o lead direto para o funil, um
                  dashboard com os números e automações que ligam tudo.
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {[
                  ["Landing pages", "/solucoes/landing-pages"],
                  ["Dashboards", "/solucoes/dashboards"],
                  ["Automação n8n", "/solucoes/automacao-n8n"],
                ].map(([label, href]) => (
                  <Button key={label} asChild variant="outline" className="rounded-full">
                    <Link href={href}>{label}</Link>
                  </Button>
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
                <span className={eyebrow}>Plano do CRM</span>
                <p className="mt-3 font-heading text-5xl font-extrabold tracking-[-0.05em]">
                  R$99
                  <span className="text-lg font-semibold text-muted-foreground">
                    /mês
                  </span>
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  CRM Normal, com 3 usuários incluídos
                </p>
                <p className="mt-3 rounded-xl bg-primary/10 px-3 py-2 text-sm">
                  <strong>CRM Plus: R$220/mês.</strong> Inclui o módulo de IA
                  sobre os seus dados, com treinamento.
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
