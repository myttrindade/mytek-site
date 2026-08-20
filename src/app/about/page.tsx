import type { Metadata } from "next";
import {
  LinkIcon,
  MessageCircleIcon,
  TagIcon,
  ZapIcon,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHeader } from "@/components/page-header";
import { BlurFade } from "@/components/velora/blur-fade";
import { NumberTicker } from "@/components/velora/number-ticker";
import { SpotlightCard } from "@/components/velora/spotlight-card";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "mytek reúne CRM, Landing Page e Dashboard numa plataforma só, pra negócio que precisa dos três, sem juntar ferramentas diferentes e torcer pra elas conversarem entre si.",
};

const principles = [
  {
    icon: <LinkIcon className="size-6" />,
    title: "Tudo conectado, não colado",
    body: "Lead cai no funil, funil alimenta o dashboard, sem exportar planilha, sem copiar e colar entre sistemas diferentes.",
  },
  {
    icon: <ZapIcon className="size-6" />,
    title: "Simples de configurar",
    body: "Implantação em minutos, sem depender de equipe técnica. Interface pensada pra quem não é do TI.",
  },
  {
    icon: <TagIcon className="size-6" />,
    title: "Preço por módulo",
    body: "Contrate só o que precisa. Combine CRM e Dashboard e o preço de cada um já sai menor.",
  },
  {
    icon: <MessageCircleIcon className="size-6" />,
    title: "Suporte de verdade",
    body: "Atendimento direto pelo WhatsApp, sem central de tickets nem burocracia.",
  },
];

const stats = [
  { value: 180, suffix: "+", label: "Negócios usando a mytek" },
  { value: 18, suffix: "%", label: "Taxa média de conversão" },
  { value: 96, suffix: "%", label: "Satisfação média" },
  { value: 10, suffix: " min", label: "Pra configurar" },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <SiteHeader />

      <PageHeader
        eyebrow="Sobre"
        title={
          <>
            Não são ferramentas soltas.{" "}
            <span className="text-primary">É uma plataforma só.</span>
          </>
        }
        description="mytek nasce como CRM, Landing Page e Dashboard integrados, pra quem precisa dos três, sem juntar quatro fornecedores diferentes e torcer pra eles conversarem entre si."
      />

      {/* Story */}
      <section className="pb-20">
        <div className="mx-auto max-w-3xl space-y-5 px-4 text-muted-foreground lg:px-8">
          <BlurFade>
            <p className="leading-7">
              A dor é comum: lead manda mensagem no Instagram ou WhatsApp,
              ninguém responde a tempo, ele fecha com a concorrência. CRMs
              genéricos são pesados, pensados pra time de vendas dedicado.
              A landing page vem de uma agência, o dashboard de outra
              ferramenta, e nenhuma conversa com a outra.
            </p>
          </BlurFade>
          <BlurFade delay={0.1}>
            <p className="leading-7">
              mytek existe pra resolver isso numa plataforma só. Por isso o
              produto virou três: <strong className="text-foreground">CRM</strong> (funil visual,
              atendimento e histórico de WhatsApp), <strong className="text-foreground">Landing Page</strong>{" "}
              (página pronta, conectada ao funil) e <strong className="text-foreground">Dashboard</strong>{" "}
              (vendas, leads e atendimento em tempo real). Três produtos, um
              funil só, separados ou juntos, no seu ritmo.
            </p>
          </BlurFade>
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-border/40 py-14">
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-8 px-4 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <BlurFade key={stat.label} delay={i * 0.08}>
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-4xl font-semibold tracking-tight">
                  <NumberTicker value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-muted-foreground">
                  {stat.label}
                </span>
              </div>
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Principles */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-4 lg:px-8">
          <BlurFade>
            <h2 className="text-center text-3xl font-semibold tracking-tight">
              No que a gente foca
            </h2>
          </BlurFade>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {principles.map((p, i) => (
              <BlurFade key={p.title} delay={i * 0.1}>
                <SpotlightCard className="h-full p-8">
                  <div className="mb-4 w-fit rounded-xl bg-primary/10 p-3 text-primary">
                    {p.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
                </SpotlightCard>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
