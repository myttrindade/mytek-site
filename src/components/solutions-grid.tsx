import Link from "next/link";
import {
  ArrowUpRightIcon,
  BarChart3Icon,
  BotIcon,
  CodeXmlIcon,
  GlobeIcon,
  LayoutTemplateIcon,
  MessagesSquareIcon,
  KanbanSquareIcon,
  TrendingDownIcon,
  WalletIcon,
  WorkflowIcon,
  type LucideIcon,
} from "lucide-react";

import { Eclipse, GlowArc } from "@/components/brand/glow";
import { BlurFade } from "@/components/velora/blur-fade";
import { BorderBeam } from "@/components/velora/border-beam";
import { TiltCard } from "@/components/velora/tilt-card";
import { products, services, type Solution } from "@/lib/solutions-data";
import { cn } from "@/lib/utils";

const icons: Record<string, LucideIcon> = {
  sites: GlobeIcon,
  "landing-pages": LayoutTemplateIcon,
  crm: MessagesSquareIcon,
  "mytek-hub": KanbanSquareIcon,
  mycash: WalletIcon,
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

function GroupTitle({ title, note }: { title: string; note: string }) {
  return (
    <div className="mb-5 mt-14 flex flex-wrap items-baseline justify-between gap-2 border-b border-border pb-3 first-of-type:mt-12">
      <h3 className="font-heading text-xl font-extrabold tracking-[-0.03em]">
        {title}
      </h3>
      <span className="text-sm text-muted-foreground">{note}</span>
    </div>
  );
}

function SolutionCard({ s, i }: { s: Solution; i: number }) {
  const product = s.kind === "produto";
  return (
    <BlurFade delay={i * 0.04}>
      <TiltCard className="h-full" maxTilt={7}>
      <Link
        href={s.href}
        className={cn(
          "group relative flex h-full flex-col gap-4 rounded-2xl border p-6 transition-colors",
          product
            ? "border-primary bg-primary text-primary-foreground"
            : "border-border bg-card hover:border-primary"
        )}
      >
        {product ? (
          <BorderBeam
            size={110}
            duration={7}
            delay={i * 1.6}
            colorFrom="#C6FF00"
            colorTo="#C9B8FF"
          />
        ) : (
          <div className="absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <BorderBeam
              size={90}
              duration={5}
              delay={i * 0.7}
              colorFrom="#5E34F7"
              colorTo="#8D6BFF"
            />
          </div>
        )}
        <div className="flex items-center justify-between">
          <span
            className={cn(
              "flex size-10 items-center justify-center rounded-xl",
              product ? "bg-white/15" : "bg-primary/10 text-primary"
            )}
          >
            <SolutionIcon slug={s.slug} className="size-5" />
          </span>
          <span
            className={cn(
              "font-mono text-[11px] font-bold uppercase tracking-[0.06em]",
              product ? "text-lima" : "text-muted-foreground"
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
            product ? "text-primary-foreground/85" : "text-muted-foreground"
          )}
        >
          {s.summary}
        </p>
        <span
          className={cn(
            "mt-auto inline-flex items-center gap-1 pt-2 text-sm font-semibold",
            product ? "text-lima" : "text-primary"
          )}
        >
          Ver como funciona
          <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </span>
      </Link>
      </TiltCard>
    </BlurFade>
  );
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
              Produtos prontos e serviços sob medida
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
              Escolha pelo problema que você quer resolver agora. Dá para contratar
              uma solução ou montar o conjunto.
            </p>
          </BlurFade>
        )}

        <GroupTitle
          title="Produtos prontos"
          note="Por assinatura ou licença, configurados com você"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((s, i) => (
            <SolutionCard key={s.slug} s={s} i={i} />
          ))}
        </div>

        <GroupTitle
          title="Serviços sob medida"
          note="Escopo, prazo e preço combinados antes de começar"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <SolutionCard key={s.slug} s={s} i={i} />
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
      className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-32"
    >
      <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[90px]" />
      <Eclipse size={560} className="absolute -right-32 top-1/2 hidden -translate-y-[62%] opacity-80 md:block" />
      <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
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
