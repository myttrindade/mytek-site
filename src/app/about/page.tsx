import type { Metadata } from "next";
import Link from "next/link";
import {
  CodeXmlIcon,
  GlobeIcon,
  LayersIcon,
  LinkIcon,
  MessageCircleIcon,
  RocketIcon,
  ShieldCheckIcon,
  TagIcon,
} from "lucide-react";

import { Card3D } from "@/components/brand/card-3d";
import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { eyebrow } from "@/components/solutions-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { GridPattern } from "@/components/velora/grid-pattern";
import { ShimmerButton } from "@/components/velora/shimmer-button";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A mytek faz software e IA para empresas de qualquer segmento: produtos prontos, sites e projetos sob medida, com preço e prazo combinados antes de começar.",
  alternates: { canonical: "/about" },
};

const areas = [
  {
    icon: <LayersIcon className="size-6" />,
    title: "Produtos prontos",
    body: "Para começar rápido, com preço fixo por mês.",
    items: [
      ["CRM com WhatsApp", "/crm"],
      ["My Hub", "/solucoes/mytek-hub"],
      ["My Cash", "/solucoes/mycash"],
      ["Dashboards", "/solucoes/dashboards"],
    ],
  },
  {
    icon: <GlobeIcon className="size-6" />,
    title: "Presença digital",
    body: "Para ser encontrado e transformar visita em conversa.",
    items: [
      ["Sites", "/solucoes/sites"],
      ["Landing pages", "/solucoes/landing-pages"],
    ],
  },
  {
    icon: <CodeXmlIcon className="size-6" />,
    title: "IA e sob medida",
    body: "Quando nenhuma ferramenta pronta encaixa no seu processo.",
    items: [
      ["Agentes de IA", "/solucoes/agentes-de-ia"],
      ["Automação com n8n", "/solucoes/automacao-n8n"],
      ["Previsão de churn", "/solucoes/previsao-de-churn"],
      ["Sistemas sob medida", "/solucoes/sistemas-sob-medida"],
    ],
  },
] as const;

const purposes = [
  ["Organizar a operação", "Tarefas, dados e processos num lugar só, em vez de espalhados em planilhas e mensagens."],
  ["Atender melhor", "Respostas rápidas e acompanhamento do cliente, a qualquer hora."],
  ["Automatizar o repetitivo", "O que se faz igual todo dia passa a rodar sozinho, e a equipe cuida do que exige gente."],
] as const;

const principles = [
  {
    icon: <MessageCircleIcon className="size-6" />,
    title: "Conversa direta",
    body: "Atendimento pelo WhatsApp, com resposta em até 4h úteis. Sem central de tickets nem burocracia.",
  },
  {
    icon: <TagIcon className="size-6" />,
    title: "Preço e prazo antes de começar",
    body: "Produtos prontos têm preço fixo. O que é sob medida vem com escopo, prazo e valor combinados antes do primeiro dia.",
  },
  {
    icon: <ShieldCheckIcon className="size-6" />,
    title: "Honestidade sobre o que a tecnologia faz",
    body: "A gente diz o que a IA resolve e o que ela não resolve, e não promete resultado que não pode garantir.",
  },
  {
    icon: <LinkIcon className="size-6" />,
    title: "Tudo conectado, não colado",
    body: "O que a gente entrega conversa entre si, sem exportar planilha nem copiar e colar entre sistemas.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* 1 · Capa */}
        <section className="dark relative overflow-hidden bg-background pt-28 pb-24 text-foreground lg:pt-36">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_80%_20%,rgba(94,52,247,0.4),transparent_70%),radial-gradient(ellipse_50%_50%_at_0%_100%,rgba(94,52,247,0.2),transparent_70%)]"
          />
          <GridPattern
            width={56}
            height={56}
            className="fill-transparent stroke-white/[0.06] [mask-image:radial-gradient(ellipse_70%_70%_at_60%_30%,black,transparent)]"
          />
          <BrandGlyph
            size={420}
            className="absolute -right-24 top-1/2 hidden -translate-y-1/2 opacity-60 lg:block"
          />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade delay={0.08}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-[0.06em]">
                <span className="size-2 rounded-full bg-lima shadow-[0_0_0_4px_rgba(198,255,0,0.2)]" />
                Sobre
              </span>
            </BlurFade>
            <BlurFade delay={0.15}>
              <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-[-0.04em] text-balance sm:text-5xl xl:text-[3.6rem]">
                A tecnologia que faz a sua empresa{" "}
                <span className="text-lima">trabalhar melhor.</span>
              </h1>
            </BlurFade>
            <BlurFade delay={0.25}>
              <p className="mt-5 max-w-xl text-lg text-muted-foreground text-pretty">
                A mytek é uma empresa de tecnologia. Criamos sistemas, sites,
                automações e agentes de IA para empresas de qualquer segmento
                e tamanho, prontos para usar ou feitos sob medida.
              </p>
            </BlurFade>
          </div>
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* 2 · Quem somos */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Para que serve</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Menos trabalho repetido, mais tempo para o que importa
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <ul className="divide-y divide-border">
              {purposes.map(([title, body], i) => (
                <BlurFade key={title} delay={i * 0.08}>
                  <li className="py-5 first:pt-0">
                    <h3 className="font-heading text-xl font-extrabold">{title}</h3>
                    <p className="mt-1 text-muted-foreground">{body}</p>
                  </li>
                </BlurFade>
              ))}
            </ul>
          </div>
        </section>

        {/* 3 · O que fazemos */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <div className="relative mx-auto max-w-6xl px-4 pt-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>O que fazemos</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Três frentes, uma equipe só
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {areas.map((a, i) => (
                <BlurFade key={a.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-white/15 bg-white/[0.06] p-6 backdrop-blur-md">
                    <span className="flex size-12 items-center justify-center rounded-2xl bg-lima text-lima-foreground shadow-[0_12px_28px_-10px_rgba(198,255,0,0.6)]">
                      {a.icon}
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-extrabold text-white">
                      {a.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/70">{a.body}</p>
                    <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-sm">
                      {a.items.map(([label, href]) => (
                        <li key={href}>
                          <Link
                            href={href}
                            className="text-white/85 transition-colors hover:text-lima"
                          >
                            {label} →
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>

        {/* 4 · Como trabalhamos */}
        <section className="py-24 lg:py-28">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <BlurFade>
              <span className={eyebrow}>Como trabalhamos</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                O que você pode esperar da gente
                <span className="text-emphasis">.</span>
              </h2>
            </BlurFade>
            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              {principles.map((p, i) => (
                <BlurFade key={p.title} delay={i * 0.06}>
                  <div className="h-full [perspective:1200px]">
                    <Card3D className="h-full" maxTilt={8} glare="rgba(94,52,247,0.14)">
                      <div
                        style={{ transformStyle: "preserve-3d" }}
                        className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-b from-white to-[#EFEAFF] p-7 shadow-[0_24px_46px_-24px_rgba(94,52,247,0.5)]"
                      >
                        <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_12px_26px_-10px_rgba(94,52,247,0.8)] [transform:translateZ(40px)]">
                          {p.icon}
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

        {/* 5 · Chamada final */}
        <section className="dark relative overflow-hidden bg-background py-28 text-foreground">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <BrandGlyph
            still
            size={520}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22]"
          />
          <div className="relative mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-4xl font-extrabold tracking-[-0.04em] text-balance lg:text-5xl">
              Vamos conversar sobre o{" "}
              <span className="text-lima">seu negócio?</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
              Conte como a sua empresa funciona hoje e o que você gostaria de resolver. A
              gente responde no WhatsApp em até 4h úteis.
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
