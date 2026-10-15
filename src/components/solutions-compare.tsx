import Link from "next/link";
import { ArrowRightIcon, GlobeIcon, LayoutTemplateIcon } from "lucide-react";

import { BlurFade } from "@/components/velora/blur-fade";
import { eyebrow } from "@/components/solutions-grid";
import { cn } from "@/lib/utils";

const rows = [
  ["Objetivo", "Apresentar a empresa e passar confiança", "Conseguir o contato do visitante"],
  ["Tamanho", "Várias páginas: início, serviços, sobre, contato", "Uma página só, com uma oferta"],
  ["O visitante chega", "Procurando a empresa no Google ou por indicação", "Vindo de um anúncio ou do Instagram"],
  ["Ação esperada", "Explorar e, se quiser, chamar", "Preencher o formulário ou chamar"],
  ["Valor", "Sob orçamento", "R$777 (valor único)"],
] as const;

/**
 * Quadro curto "landing page ou site?". Aparece nas duas páginas; `current`
 * marca a coluna da página em que a pessoa está.
 */
export function SolutionsCompare({ current }: { current: "site" | "lp" }) {
  const cols = [
    { id: "site", title: "Site", icon: GlobeIcon, href: "/solucoes/sites" },
    { id: "lp", title: "Landing page", icon: LayoutTemplateIcon, href: "/solucoes/landing-pages" },
  ] as const;
  const other = current === "site" ? cols[1] : cols[0];

  return (
    <BlurFade>
      <div className="mt-16 overflow-hidden rounded-3xl border border-primary/20 bg-card shadow-[0_28px_54px_-28px_rgba(94,52,247,0.45)]">
        <div className="px-6 pt-6 lg:px-8 lg:pt-8">
          <span className={eyebrow}>Landing page ou site?</span>
          <p className="mt-2 max-w-2xl font-heading text-xl font-extrabold tracking-[-0.03em] text-balance lg:text-2xl">
            Parecem iguais, mas servem para coisas diferentes.
          </p>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[620px] border-collapse text-left text-sm">
            <thead>
              <tr>
                <th className="w-[18%] p-4 lg:pl-8" />
                {cols.map((c) => (
                  <th
                    key={c.id}
                    className={cn(
                      "p-4 align-bottom",
                      current === c.id ? "bg-primary text-primary-foreground" : "bg-muted"
                    )}
                  >
                    <span className="flex items-center gap-2 font-heading text-base font-extrabold">
                      <c.icon className="size-4" />
                      {c.title}
                      {current === c.id && (
                        <span className="rounded-full bg-lima px-2 py-0.5 font-mono text-[9px] font-bold uppercase tracking-[0.06em] text-lima-foreground">
                          você está aqui
                        </span>
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map(([label, site, lp]) => (
                <tr key={label} className="border-t border-border">
                  <th className="p-4 font-mono text-[11px] font-bold uppercase tracking-[0.06em] text-muted-foreground lg:pl-8">
                    {label}
                  </th>
                  {[site, lp].map((v, i) => (
                    <td
                      key={i}
                      className={cn(
                        "p-4",
                        (i === 0 ? "site" : "lp") === current
                          ? "bg-primary/[0.06] font-semibold"
                          : "text-muted-foreground"
                      )}
                    >
                      {v}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border bg-muted/60 px-6 py-4 text-sm lg:px-8">
          <p className="text-muted-foreground">
            <strong className="text-foreground">Dá para ter os dois:</strong> o
            site apresenta a empresa e a landing page capta contatos de uma
            campanha.
          </p>
          <Link
            href={other.href}
            className="inline-flex items-center gap-1.5 font-bold text-primary hover:underline"
          >
            Ver {other.title.toLowerCase()}s
            <ArrowRightIcon className="size-4" />
          </Link>
        </div>
      </div>
    </BlurFade>
  );
}
