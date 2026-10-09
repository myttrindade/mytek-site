import { cn } from "@/lib/utils";

/** Geometria do M do brand book (monolinha grossa, corte reto). */
const M_PATH =
  "M12,92 V38 A19,19 0 0 1 50,38 V92 M50,38 A19,19 0 0 1 88,38 V92";

const ROTATIONS = [0, -90, 180, 90];

type MePatternProps = {
  cols?: number;
  rows?: number;
  /** Índices (linha*cols+coluna) destacados em lima, o "módulo ativo". */
  highlight?: number[];
  /** Cor dos módulos comuns. */
  tone?: string;
  className?: string;
};

/**
 * Pattern fechado do brand book: o M repetido e girado em passos de 90°.
 * Determinístico (sem Math.random) para não quebrar a hidratação.
 * Posicione dentro de um contêiner `relative overflow-hidden`.
 */
export function MePattern({
  cols = 12,
  rows = 8,
  highlight = [],
  tone = "#2A1D52",
  className,
}: MePatternProps) {
  const cells = Array.from({ length: cols * rows }, (_, i) => {
    const r = Math.floor(i / cols);
    const c = i % cols;
    return (r * 7 + c * 13 + r * c) % 4;
  });
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
    >
      <div
        className="grid size-full gap-3 p-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {cells.map((k, i) => (
          <svg
            key={i}
            viewBox="0 0 100 100"
            className="aspect-square w-full"
            fill="none"
            stroke={highlight.includes(i) ? "#C6FF00" : tone}
            strokeWidth="20"
          >
            <g transform={`rotate(${ROTATIONS[k]} 50 50)`}>
              <path d={M_PATH} />
            </g>
          </svg>
        ))}
      </div>
    </div>
  );
}
