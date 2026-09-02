import { NumberTicker } from "@/components/velora/number-ticker";
import { cn } from "@/lib/utils";

/**
 * "Quantas oportunidades estão paradas agora?" — o argumento do lead parado
 * mostrado como painel, não como frase.
 *
 * Os números são **demonstrativos** e a legenda diz isso. Não são média de
 * cliente, não são resultado da mytek e não são extraídos de lugar nenhum:
 * servem para mostrar o formato da informação que a plataforma entrega. Sem
 * a ressalva, "R$ 18.400 em oportunidades" seria lido como um resultado que
 * a empresa promete recuperar.
 */

/**
 * Os números contam para cima quando a seção entra na tela. É movimento com
 * função: o Radar existe para mostrar um número subindo enquanto ninguém
 * age, e a animação encena exatamente isso.
 *
 * O `NumberTicker` serve o valor final no HTML e só encena depois — o zero
 * nunca chega ao HTML exportado, e quem tem movimento reduzido lê o número
 * parado no valor certo.
 */
const metrics = [
  { value: 12, label: "leads parados", tone: "stalled" as const },
  { value: 18400, prefix: "R$ ", label: "em oportunidades", tone: "money" as const },
  { value: 5, label: "aguardando follow-up", tone: "neutral" as const },
  { value: 3, label: "sem contato há +48h", tone: "stalled" as const },
];

const toneStyles = {
  stalled: "text-destructive",
  money: "text-foreground",
  neutral: "text-foreground",
};

export function StalledPanel({ className }: { className?: string }) {
  return (
    <figure className={cn("", className)}>
      <div className="rounded-2xl border border-destructive/25 bg-destructive/[0.03] p-6 sm:p-8">
        <div className="flex items-center gap-2">
          <span
            aria-hidden="true"
            className="animate-alert-pulse size-2 rounded-full bg-destructive"
          />
          <span className="text-xs font-semibold tracking-wider text-muted-foreground uppercase">
            Radar · oportunidades paradas
          </span>
        </div>

        <dl className="mt-6 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {metrics.map((m, i) => (
            <div key={m.label}>
              <dd
                className={cn(
                  "text-3xl font-semibold tracking-tight tabular-nums lg:text-4xl",
                  toneStyles[m.tone]
                )}
              >
                <NumberTicker
                  value={m.value}
                  prefix={m.prefix ?? ""}
                  delay={i * 0.12}
                />
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground text-balance">
                {m.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>
      <figcaption className="mt-3 text-[11px] text-muted-foreground">
        Números demonstrativos, para ilustrar o formato do Radar.
      </figcaption>
    </figure>
  );
}
