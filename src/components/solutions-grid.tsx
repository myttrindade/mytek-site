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
  type LucideIcon,
} from "lucide-react";

import { BlurFade } from "@/components/velora/blur-fade";
import { solutions } from "@/lib/solutions-data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  sites: GlobeIcon,
  "landing-pages": LayoutTemplateIcon,
  crm: MessagesSquareIcon,
  dashboards: BarChart3Icon,
  "agentes-de-ia": BotIcon,
  "automacao-n8n": WorkflowIcon,
  "previsao-de-churn": TrendingDownIcon,
  "sistemas-sob-medida": CodeXmlIcon,
};

export const eyebrow =
  "font-mono text-xs font-bold uppercase tracking-[0.06em] text-emphasis";

export function SolutionIcon({
  slug,
  className,
}: {
  slug: string;
  className?: string;
}) {
  const Icon = icons[slug] ?? CodeXmlIcon;
  return <Icon className={className} />;
}

/** Grade de soluções: aparece na home e na página /solucoes. */
export function Solutions({
  id = "solucoes",
  showHeading = true,
}: {
  id?: string;
  showHeading?: boolean;
}) {
  return (
    <section id={id} className="relative py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {showHeading && (
          <BlurFade>
            <span className={eyebrow}>O que fazemos</span>
            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Oito soluções, um só time
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Contrate uma solução ou monte o conjunto. Escolha pelo problema
              que você quer resolver agora.
            </p>
          </BlurFade>
        )}

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <BlurFade key={s.slug} delay={i * 0.04}>
              <Link
                href={s.href}
                className={cn(
                  "group flex h-full flex-col gap-4 rounded-2xl border p-6 transition-all hover:-translate-y-1",
                  s.highlight
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary"
                )}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "flex size-10 items-center justify-center rounded-xl",
                      s.highlight ? "bg-white/15" : "bg-primary/10 text-primary"
                    )}
                  >
                    <SolutionIcon slug={s.slug} className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "font-mono text-[11px] font-bold uppercase tracking-[0.06em]",
                      s.highlight ? "text-lima" : "text-muted-foreground"
                    )}
                  >
                    {s.tag}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold tracking-[-0.02em]">
                  {s.title}
                </h3>
                <p className="text-sm font-medium">{s.problem}</p>
                <p
                  className={cn(
                    "text-sm",
                    s.highlight
                      ? "text-primary-foreground/85"
                      : "text-muted-foreground"
                  )}
                >
                  {s.summary}
                </p>
                <span
                  className={cn(
                    "mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold",
                    s.highlight ? "text-lima" : "text-primary"
                  )}
                >
                  Ver como funciona
                  <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}

const steps = [
  ["01", "Entender o problema", "Conversa curta para mapear onde a operação trava. A tecnologia vem depois."],
  ["02", "Desenhar a solução", "Escopo, prazo e preço combinados antes de qualquer linha de código."],
  ["03", "Construir e integrar", "Entrega em etapas, ligada ao WhatsApp, ao CRM e às ferramentas que você já usa."],
  ["04", "Acompanhar", "Suporte direto no WhatsApp e ajustes conforme o uso mostra o que melhorar."],
] as const;

/** Faixa escura "como trabalhamos". */
export function Process() {
  return (
    <section
      id="processo"
      className="dark relative bg-background py-24 text-foreground lg:py-28"
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
