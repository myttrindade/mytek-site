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

import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { BlurFade } from "@/components/velora/blur-fade";
import { TiltCard } from "@/components/velora/tilt-card";
import { Card3D } from "@/components/brand/card-3d";
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

const slab =
  "shadow-[1px_1px_0_#4a22d6,2px_2px_0_#4a22d6,3px_3px_0_#4a22d6,4px_4px_0_#3d1bb0,5px_5px_0_#3d1bb0,6px_6px_0_#3d1bb0,7px_7px_0_#321694,8px_8px_0_#321694,0_34px_50px_-14px_rgba(60,30,170,0.55)]";

const z = (n: number) => `[transform:translateZ(${n}px)]`;

function ProductCard({ s, i }: { s: Solution; i: number }) {
  // Os três produtos ficam levemente girados, como um leque.
  const rest = [-7, 0, 7][i] ?? 0;
  return (
    <BlurFade delay={i * 0.06}>
      <div className="h-full [perspective:1200px]">
        <Card3D className="h-full" maxTilt={13} restTilt={rest}>
          <Link
            href={s.href}
            style={{ transformStyle: "preserve-3d" }}
            className={cn(
              "group relative flex h-full flex-col gap-4 rounded-3xl border border-white/20 bg-gradient-to-br from-[#7A57FF] via-[#5E34F7] to-[#4220C9] p-7 text-primary-foreground",
              slab
            )}
          >
            <div className="flex items-center justify-between">
              <span
                className={cn(
                  "flex size-12 items-center justify-center rounded-2xl bg-white/15 ring-1 ring-white/25",
                  z(46)
                )}
              >
                <SolutionIcon slug={s.slug} className="size-6" />
              </span>
              <span
                className={cn(
                  "font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-lima",
                  z(30)
                )}
              >
                {s.tag}
              </span>
            </div>
            <h3
              className={cn(
                "font-heading text-2xl font-extrabold tracking-[-0.03em]",
                z(36)
              )}
            >
              {s.title}
            </h3>
            <p className={cn("text-sm font-semibold", z(24))}>{s.problem}</p>
            <p className={cn("text-sm text-primary-foreground/85", z(16))}>
              {s.summary}
            </p>
            <span
              className={cn(
                "mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-lima",
                z(30)
              )}
            >
              Ver como funciona
              <ArrowUpRightIcon className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </span>
          </Link>
        </Card3D>
      </div>
    </BlurFade>
  );
}

function ServiceCard({ s, i }: { s: Solution; i: number }) {
  const n = String(i + 1).padStart(2, "0");
  return (
    <BlurFade delay={i * 0.04}>
      <TiltCard className="h-full" maxTilt={6}>
        <Link
          href={s.href}
          className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-[#F4F1FF] p-6 transition-all duration-300 hover:border-primary/60 hover:shadow-[0_26px_60px_-24px_rgba(94,52,247,0.5)]"
        >
          {/* número grande, só como textura */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-5 -right-1 select-none font-heading text-[92px] font-extrabold leading-none tracking-[-0.06em] text-primary/[0.07] transition-colors duration-300 group-hover:text-primary/[0.14]"
          >
            {n}
          </span>
          {/* brilho no canto, aparece no hover */}
          <span
            aria-hidden
            className="pointer-events-none absolute -right-16 -top-16 size-44 rounded-full bg-primary/25 opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
          />
          <div className="relative flex items-start justify-between">
            <span className="flex size-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7A57FF] to-[#4A22D6] text-white shadow-[0_10px_24px_-8px_rgba(94,52,247,0.7)] ring-1 ring-white/30 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
              <SolutionIcon slug={s.slug} className="size-6" />
            </span>
            <span className="rounded-full border border-primary/20 bg-primary/[0.07] px-2.5 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.07em] text-primary">
              {s.tag}
            </span>
          </div>
          <h3 className="relative mt-5 font-heading text-xl font-extrabold tracking-[-0.03em]">
            {s.title}
          </h3>
          <p className="relative mt-2 text-sm font-semibold leading-snug">
            {s.problem}
          </p>
          <p className="relative mt-2 text-sm text-muted-foreground">
            {s.summary}
          </p>
          <span className="relative mt-auto flex items-center justify-between border-t border-border/80 pt-4 text-sm font-bold text-primary">
            Ver como funciona
            <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRightIcon className="size-4" />
            </span>
          </span>
        </Link>
      </TiltCard>
    </BlurFade>
  );
}

function ContactCard({ i }: { i: number }) {
  return (
    <BlurFade delay={i * 0.04}>
      <TiltCard className="h-full" maxTilt={6}>
        <Link
          href="/contact"
          className="dark group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-[#1b0f36] to-[#0F0819] p-6 text-foreground"
        >
          <span
            aria-hidden
            className="pointer-events-none absolute -right-10 -top-10 size-48 rounded-full bg-primary/40 blur-3xl"
          />
          <span className="relative font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-lima">
            Outro problema?
          </span>
          <p className="relative font-heading text-2xl font-extrabold leading-tight tracking-[-0.03em]">
            Não achou o que precisa? A gente desenha com você
            <span className="text-lima">.</span>
          </p>
          <span className="relative inline-flex items-center gap-2 text-sm font-bold text-lima">
            Falar com o time
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
            <ProductCard key={s.slug} s={s} i={i} />
          ))}
        </div>

        <GroupTitle
          title="Serviços sob medida"
          note="Escopo, prazo e preço combinados antes de começar"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <ServiceCard key={s.slug} s={s} i={i} />
          ))}
          <ContactCard i={services.length} />
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
      <BrandGlyph size={520} className="absolute -right-16 top-1/2 hidden -translate-y-1/2 opacity-90 md:block" />
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
