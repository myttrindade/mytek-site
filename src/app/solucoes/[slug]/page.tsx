import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRightIcon, CheckIcon } from "lucide-react";
import type { Metadata } from "next";

import { BrandGlyph, GlowArc } from "@/components/brand/glow";
import { HubVideo } from "@/components/brand/hub-video";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { SolutionIcon, eyebrow } from "@/components/solutions-grid";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { TiltCard } from "@/components/velora/tilt-card";
import { hubDemo } from "@/lib/site-config";
import { detailSolutions, getSolution } from "@/lib/solutions-data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  // landing-pages, sites, dashboards e agentes-de-ia têm página própria.
  return detailSolutions
    .filter(
      (s) => ![
        "landing-pages",
        "sites",
        "dashboards",
        "agentes-de-ia",
        "automacao-n8n",
        "previsao-de-churn",
        "sistemas-sob-medida",
      ].includes(s.slug)
    )
    .map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.problem} ${s.summary}`,
    alternates: { canonical: `/solucoes/${s.slug}` },
  };
}

export default async function SolutionPage({ params }: Props) {
  const { slug } = await params;
  const s = getSolution(slug);
  if (!s) notFound();

  // Sem vídeo de demonstração, "Como funciona" faz a faixa escura do meio.
  const escuroNoMeio = !(s.slug === "mytek-hub" && hubDemo.src);

  const others = detailSolutions.filter((o) => o.slug !== s.slug).slice(0, 4);

  return (
    <>
      <SiteHeader />
      <main>
        {/* Capa da solução */}
        <section className="dark relative overflow-hidden bg-background pt-28 pb-12 text-foreground lg:pt-28 lg:pb-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_20%_0%,rgba(94,52,247,0.4),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <nav className="font-mono text-xs text-muted-foreground">
              <Link href="/#solucoes" className="hover:text-foreground">
                soluções
              </Link>{" "}
              / {s.title.toLowerCase()}
            </nav>
            <div className="mt-4 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/20 text-lima">
                <SolutionIcon slug={s.slug} className="size-6" />
              </span>
              <span className="font-mono text-xs font-bold uppercase tracking-[0.06em] text-lima">
                {s.tag}
              </span>
            </div>
            <h1 className="mt-4 max-w-3xl text-3xl font-extrabold tracking-[-0.04em] text-balance sm:text-4xl lg:text-[2.5rem]">
              {s.headline}
            </h1>
            <p className="mt-3 max-w-2xl text-base font-medium text-lima">
              {s.problem}
            </p>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              {s.intro}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <ShimmerButton href="/contact">
                {s.kind === "produto" ? "Pedir uma demonstração" : "Pedir um orçamento"} <ArrowRightIcon className="size-4" />
              </ShimmerButton>
              <Button variant="ghost" size="lg" asChild>
                {s.slug === "mytek-hub" ? (
                  <a href="#demonstracao">Ver o Hub funcionando ↓</a>
                ) : (
                  <a href="#como-funciona">Como funciona ↓</a>
                )}
              </Button>
            </div>
          </div>
          <BrandGlyph size={420} className="absolute -right-8 top-24 hidden opacity-90 lg:block" />
          <GlowArc direction="down" className="absolute inset-x-0 bottom-0 h-[70px]" />
        </section>

        {/* O que está incluso */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 lg:grid-cols-[1fr_1.3fr] lg:px-8">
            <div>
              <span className={eyebrow}>O que está incluso</span>
              <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
                O que você recebe
              </h2>
            </div>
            <ul className="grid gap-3">
              {s.includes.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card p-4"
                >
                  <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <CheckIcon className="size-3" />
                  </span>
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Vídeo do sistema (só o MyHub) */}
        {s.slug === "mytek-hub" && hubDemo.src && (
          <section id="demonstracao" className="dark relative overflow-hidden bg-background py-24 text-foreground lg:py-28">
            <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
            <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
              <span className={eyebrow}>Demonstração</span>
              <h2 className="mt-3 max-w-2xl text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
                Veja o Hub funcionando
                <span className="text-emphasis">.</span>
              </h2>
              <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
                Uma gravação do sistema real. Clique num capítulo para ir
                direto àquela parte.
              </p>
              <div className="mt-10">
                <HubVideo src={hubDemo.src} poster={hubDemo.poster} />
              </div>
            </div>
          </section>
        )}

        {/* Como funciona */}
        <section
          id="como-funciona"
          className={
            escuroNoMeio
              ? "dark relative overflow-hidden bg-background py-20 text-foreground lg:py-24"
              : "bg-muted py-20 lg:py-24"
          }
        >
          {escuroNoMeio && (
            <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          )}
          <div className="relative mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Como funciona</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Em {s.steps.length} etapas, sem surpresa
            </h2>
            <ol className="mt-10 grid gap-6 md:grid-cols-3">
              {s.steps.map(([title, body], i) => (
                <li key={title} className="border-t-2 border-primary pt-4">
                  <span
                    className={
                      "font-mono text-sm font-bold " +
                      (escuroNoMeio ? "text-lima" : "text-primary")
                    }
                  >
                    0{i + 1}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-bold">{title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Perguntas */}
        <section className="py-20 lg:py-24">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] lg:text-4xl">
              Perguntas sobre {s.title.toLowerCase()}
            </h2>
            <Accordion type="single" collapsible className="mt-8">
              {s.faq.map((f) => (
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

        {/* CTA */}
        <section className="dark relative overflow-hidden bg-background py-24 text-foreground">
          <GlowArc direction="up" className="absolute inset-x-0 top-0 h-[80px]" />
          <BrandGlyph still size={520} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.22]" />
          <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
            <h2 className="text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-5xl">
              Vamos conversar sobre{" "}
              <span className="text-lima">{s.title.toLowerCase()}</span>?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Conte o que trava a sua operação. A gente responde no WhatsApp em
              até 4h úteis, com um caminho e um preço.
            </p>
            <div className="mt-8 flex justify-center">
              <ShimmerButton
                href="/contact"
                className="h-14 bg-lima px-10 text-base text-lima-foreground"
              >
                Falar com o time <ArrowRightIcon className="size-4" />
              </ShimmerButton>
            </div>
          </div>
        </section>

        {/* Outras soluções */}
        <section className="py-16">
          <div className="mx-auto max-w-6xl px-4 lg:px-8">
            <span className={eyebrow}>Outras soluções</span>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {others.map((o) => (
                <TiltCard key={o.slug} className="h-full" maxTilt={7}>
                  <Link
                    href={o.href}
                    className="block h-full rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary"
                  >
                    <b className="font-heading">{o.title}</b>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {o.problem}
                    </p>
                  </Link>
                </TiltCard>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
