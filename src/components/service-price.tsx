import { ArrowRightIcon } from "lucide-react";

import { eyebrow } from "@/components/solutions-grid";
import { BlurFade } from "@/components/velora/blur-fade";
import { ShimmerButton } from "@/components/velora/shimmer-button";
import { servicoAvulso } from "@/lib/checkout";

/** "R$597 (implantação)" vira { valor: "R$597", rotulo: "implantação" }. */
function separa(texto: string) {
  const m = texto.match(/^(.*?)\s*\((.+)\)$/);
  return m ? { valor: m[1], rotulo: m[2] } : { valor: texto, rotulo: "" };
}

/**
 * Bloco "Quanto custa" das páginas de serviço. Os valores vêm de
 * `servicosAvulsos` em `src/lib/checkout.ts`: uma fonte só, a mesma da página
 * de preços.
 */
export function ServicePrice({ slug }: { slug: string }) {
  const x = servicoAvulso(slug);
  if (!x) return null;
  const umaVez = separa(x.uma_vez);
  const mensal = x.mensal ? separa(x.mensal) : null;

  return (
    <section id="quanto-custa" className="scroll-mt-24 bg-muted py-24 lg:py-28">
      <div className="mx-auto max-w-4xl px-4 lg:px-8">
        <BlurFade>
          <div className="rounded-3xl border border-primary/25 bg-card p-8 shadow-[0_24px_46px_-26px_rgba(94,52,247,0.4)] lg:p-12">
            <span className={eyebrow}>Quanto custa</span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-[-0.035em] text-balance lg:text-4xl">
              {x.nome}
              <span className="text-emphasis">.</span>
            </h2>
            <p className="mt-2 text-muted-foreground">{x.detalhe}</p>
            <dl className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                  Pago uma vez
                </dt>
                <dd className="mt-2 font-heading text-4xl font-extrabold tracking-[-0.05em] lg:text-5xl">
                  {umaVez.valor}
                </dd>
                {umaVez.rotulo && (
                  <p className="mt-1 text-sm text-muted-foreground">{umaVez.rotulo}</p>
                )}
              </div>
              <div>
                <dt className="font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-primary">
                  Mensal
                </dt>
                <dd className="mt-2 font-heading text-4xl font-extrabold tracking-[-0.05em] lg:text-5xl">
                  {mensal ? mensal.valor : "Sem mensalidade"}
                </dd>
                {mensal?.rotulo && (
                  <p className="mt-1 text-sm text-muted-foreground">{mensal.rotulo}</p>
                )}
              </div>
            </dl>
            {x.nota && <p className="mt-6 text-sm text-muted-foreground">{x.nota}</p>}
            <div className="mt-8">
              <ShimmerButton href="/contact">
                Pedir uma proposta <ArrowRightIcon className="size-4" />
              </ShimmerButton>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
