import { cn } from "@/lib/utils";

/** Geometria do M do brand book (monolinha grossa, corte reto). */
const M_PATH =
  "M12,92 V38 A19,19 0 0 1 50,38 V92 M50,38 A19,19 0 0 1 88,38 V92";
const ROTATIONS = [0, -90, 180, 90];

function Glyph({
  k,
  color,
  className,
  style,
}: {
  k: number;
  color: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      stroke={color}
      strokeWidth="20"
      aria-hidden
      className={className}
      style={style}
    >
      <g transform={`rotate(${ROTATIONS[k % 4]} 50 50)`}>
        <path d={M_PATH} />
      </g>
    </svg>
  );
}

const edgeFade =
  "[mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]";

/**
 * Faixa de pattern "correndo": duas linhas de M girados em sentidos opostos
 * (o "padrão infinito" do brand book). Ocupa só uma faixa, não a página.
 */
export function MeMarquee({
  rows = 2,
  duration = 46,
  tone = "#3A2A75",
  accent = "#C6FF00",
  className,
}: {
  rows?: number;
  /** Segundos para a fileira dar uma volta. Menor = mais rápido. */
  duration?: number;
  tone?: string;
  accent?: string;
  className?: string;
}) {
  const count = 14;
  return (
    <div
      aria-hidden
      className={cn("flex flex-col gap-4 overflow-hidden", edgeFade, className)}
    >
      {Array.from({ length: rows }, (_, r) => (
        <div
          key={r}
          className="me-marquee-row flex w-max gap-5"
          style={{
            animationDirection: r % 2 ? "reverse" : "normal",
            animationDuration: `${duration + r * 8}s`,
          }}
        >
          {Array.from({ length: count * 2 }, (_, i) => {
            const n = i % count;
            const hot = (n * 5 + r * 3) % 9 === 0;
            return (
              <Glyph
                key={i}
                k={(n + r) % 4}
                color={hot ? accent : tone}
                className="size-12 shrink-0"
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

/**
 * Linha que "digita": os M aparecem em sequência e o cursor lima pisca no
 * fim, em laço. Só CSS, sem JavaScript.
 */
export function MeTyping({
  count = 12,
  tone = "#6E48FF",
  className,
}: {
  count?: number;
  tone?: string;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={cn("flex items-center justify-center gap-4", className)}
    >
      {Array.from({ length: count }, (_, i) => (
        <Glyph
          key={i}
          k={(i * 3 + 1) % 4}
          color={tone}
          className="me-type size-10 shrink-0"
          style={{ animationDelay: `${i * 0.28}s` }}
        />
      ))}
      <span className="me-cursor h-10 w-3 shrink-0 rounded-[2px] bg-lima" />
    </div>
  );
}
