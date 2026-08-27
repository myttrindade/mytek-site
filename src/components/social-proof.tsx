import { BlurFade } from "@/components/velora/blur-fade";
import {
  aggregateStats,
  clientLogos,
  hasSocialProof,
  testimonials,
} from "@/lib/social-proof";
import { cn } from "@/lib/utils";

/**
 * Prova social — pronta para receber, hoje invisível.
 *
 * Se `src/lib/social-proof.ts` estiver vazio, este componente **não renderiza
 * nada**: nem título, nem grade cinza, nem "em breve". Uma seção vazia com
 * moldura anuncia que a empresa não tem cliente; a ausência total simplesmente
 * não conta essa história.
 *
 * Cada sub-bloco também aparece de forma independente. Se você conseguir um
 * depoimento antes dos logos, a seção sobe só com o depoimento.
 */
export function SocialProof({ className }: { className?: string }) {
  if (!hasSocialProof) return null;

  return (
    <section
      id="clientes"
      className={cn("relative border-y border-border/40 py-20", className)}
    >
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        {clientLogos.length > 0 && (
          <BlurFade>
            <p className="text-center text-sm text-muted-foreground">
              Empresas que já estão usando a mytek
            </p>
            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
              {clientLogos.map((logo) => (
                <li key={logo.name}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="h-7 w-auto opacity-60 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                </li>
              ))}
            </ul>
          </BlurFade>
        )}

        {aggregateStats.length > 0 && (
          <BlurFade delay={0.1}>
            <dl
              className={cn(
                "mx-auto grid max-w-4xl gap-8 text-center sm:grid-cols-2 lg:grid-cols-4",
                clientLogos.length > 0 && "mt-16"
              )}
            >
              {aggregateStats.map((s) => (
                <div key={s.label}>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight tabular-nums">
                    {s.value}
                  </dd>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {s.label}
                  </p>
                </div>
              ))}
            </dl>
          </BlurFade>
        )}

        {testimonials.length > 0 && (
          <BlurFade delay={0.15}>
            <div
              className={cn(
                "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
                (clientLogos.length > 0 || aggregateStats.length > 0) && "mt-16"
              )}
            >
              {testimonials.map((t) => (
                <figure
                  key={t.name}
                  className="rounded-2xl border bg-card p-6"
                >
                  <blockquote className="text-sm text-card-foreground text-pretty">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-5 border-t border-border/60 pt-4">
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {t.role} · {t.company}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </BlurFade>
        )}
      </div>
    </section>
  );
}
