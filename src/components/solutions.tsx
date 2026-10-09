import Link from "next/link";
import {
  ArrowUpRightIcon,
  BarChart3Icon,
  BotIcon,
  CodeXmlIcon,
  GlobeIcon,
  LayoutTemplateIcon,
  MessagesSquareIcon,
  TrendingDownIcon,
  WorkflowIcon,
} from "lucide-react";

import { BlurFade } from "@/components/velora/blur-fade";

/**
 * Catálogo da mytek. A ordem segue o brand book (CRM, IA, dados, software):
 * cada item abre pelo problema do cliente, e só depois diz a tecnologia.
 *
 * Preço só aparece onde já é público (CRM). Os demais são sob orçamento.
 */
const solutions = [
  {
    icon: GlobeIcon,
    tag: "Presença",
    title: "Sites",
    problem: "Seu site não passa confiança nem explica o que você vende.",
    body: "Sites institucionais rápidos, bons no celular e no Google, com a cara da sua marca.",
    href: "/contact",
  },
  {
    icon: LayoutTemplateIcon,
    tag: "Captura",
    title: "Landing pages",
    problem: "O visitante chega, olha e vai embora sem deixar contato.",
    body: "Páginas feitas para converter, com formulário ligado direto ao seu funil de vendas.",
    href: "/#captura",
  },
  {
    icon: MessagesSquareIcon,
    tag: "Produto",
    title: "CRM com WhatsApp",
    problem: "O lead respondeu e ninguém voltou.",
    body: "Funil, atendimento no WhatsApp e alerta de lead parado. A partir de R$197/mês, sem fidelidade.",
    href: "/#produtos",
    highlight: true,
  },
  {
    icon: BarChart3Icon,
    tag: "Dados",
    title: "Dashboards",
    problem: "Você descobre o resultado do mês só no fim do mês.",
    body: "Painéis de vendas, atendimento e operação que a equipe entende sem pedir relatório.",
    href: "/#dashboard",
  },
  {
    icon: BotIcon,
    tag: "IA",
    title: "Agentes de IA",
    problem: "O cliente chama fora do horário e fica sem resposta.",
    body: "Agentes que atendem, qualificam e agendam, com a sua base como fonte e a sua equipe no controle.",
    href: "/contact",
  },
  {
    icon: WorkflowIcon,
    tag: "Automação",
    title: "Automação com n8n",
    problem: "Sua equipe copia dado de um sistema para o outro todo dia.",
    body: "Fluxos que ligam as suas ferramentas e tiram do time o trabalho repetitivo.",
    href: "/contact",
  },
  {
    icon: TrendingDownIcon,
    tag: "Machine learning",
    title: "Previsão de churn",
    problem: "O cliente cancela e você só fica sabendo depois.",
    body: "Modelo treinado com o seu histórico que aponta quem tem risco de sair, a tempo de agir.",
    href: "/contact",
  },
  {
    icon: CodeXmlIcon,
    tag: "Software",
    title: "Sistemas sob medida",
    problem: "Nenhuma ferramenta pronta encaixa no seu processo.",
    body: "Software feito para a sua operação, do desenho à entrega, com acompanhamento depois.",
    href: "/contact",
  },
] as const;

const steps = [
  ["01", "Entender o problema", "Conversa curta para mapear onde a operação trava. A tecnologia vem depois."],
  ["02", "Desenhar a solução", "Escopo, prazo e preço combinados antes de qualquer linha de código."],
  ["03", "Construir e integrar", "Entrega em etapas, ligada ao WhatsApp, ao CRM e às ferramentas que você já usa."],
  ["04", "Acompanhar", "Suporte direto no WhatsApp e ajustes conforme o uso mostra o que melhorar."],
] as const;

const eyebrow =
  "font-mono text-xs font-bold uppercase tracking-[0.06em] text-emphasis";

export function Solutions() {
  return (
    <section id="solucoes" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <BlurFade>
          <span className={eyebrow}>Soluções</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
            Software e IA para negócios que vendem por conversa
            <span className="text-emphasis">.</span>
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Do site que atrai ao agente que atende, da automação que poupa
            tempo ao modelo que prevê quem vai sair. Contrate uma solução ou
            monte o conjunto.
          </p>
        </BlurFade>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => {
            const highlight = "highlight" in s && s.highlight;
            return (
              <BlurFade key={s.title} delay={i * 0.05}>
                <Link
                  href={s.href}
                  className={
                    "group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors " +
                    (highlight
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card hover:border-primary")
                  }
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={
                        "flex size-10 items-center justify-center rounded-xl " +
                        (highlight ? "bg-white/15" : "bg-primary/15 text-primary")
                      }
                    >
                      <s.icon className="size-5" />
                    </span>
                    <span
                      className={
                        "font-mono text-[11px] font-bold uppercase tracking-[0.06em] " +
                        (highlight ? "text-lima" : "text-muted-foreground")
                      }
                    >
                      {s.tag}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold tracking-[-0.02em]">
                    {s.title}
                  </h3>
                  <p
                    className={
                      "text-sm font-medium " +
                      (highlight ? "text-primary-foreground" : "text-foreground")
                    }
                  >
                    {s.problem}
                  </p>
                  <p
                    className={
                      "text-sm " +
                      (highlight
                        ? "text-primary-foreground/85"
                        : "text-muted-foreground")
                    }
                  >
                    {s.body}
                  </p>
                  <span
                    className={
                      "mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold " +
                      (highlight ? "text-lima" : "text-primary")
                    }
                  >
                    {s.href === "/contact" ? "Conversar sobre isso" : "Saber mais"}
                    <ArrowUpRightIcon className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function Process() {
  return (
    <section
      id="processo"
      className="dark relative bg-background py-24 text-foreground lg:py-32"
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <BlurFade>
          <span className={eyebrow}>Como trabalhamos</span>
          <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
            Transformamos complexidade em{" "}
            <span className="text-emphasis">sistema.</span>
          </h2>
        </BlurFade>
        <ol className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map(([n, title, body]) => (
            <li key={n} className="border-t-2 border-primary pt-4">
              <span className="font-mono text-sm font-bold text-lima">{n}</span>
              <h3 className="mt-2 font-heading text-lg font-bold">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Faixa que separa as soluções gerais do aprofundamento no CRM. */
export function ProductDivider() {
  return (
    <div className="mx-auto max-w-6xl px-4 pt-24 lg:px-8">
      <div className="rounded-2xl border border-border bg-card p-6 lg:flex lg:items-center lg:justify-between lg:p-8">
        <div>
          <span className={eyebrow}>Produto em destaque</span>
          <p className="mt-2 font-heading text-2xl font-extrabold tracking-[-0.03em]">
            CRM mytek: nenhum lead esquecido no caminho.
          </p>
        </div>
        <p className="mt-3 max-w-md text-sm text-muted-foreground lg:mt-0">
          Nossa solução por assinatura. As demais são projetos sob medida e
          podem ser combinadas com ela.
        </p>
      </div>
    </div>
  );
}
