import { cn } from "@/lib/utils";

const M_PATH =
  "M12,92 V38 A19,19 0 0 1 50,38 V92 M50,38 A19,19 0 0 1 88,38 V92";

const LAYERS = 18;

/**
 * Símbolo M/E extrudado em 3D só com CSS: camadas empilhadas em translateZ,
 * girando devagar. Sem biblioteca, então não pesa no carregamento.
 * A face da frente é lima (o "módulo ativo" do brand book).
 */
export function Me3D({ size = 150, className }: { size?: number; className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("me3d", className)}
      style={{ width: size, height: size }}
    >
      <div className="me3d-stage">
        {Array.from({ length: LAYERS }, (_, i) => {
          const front = i === LAYERS - 1;
          const t = i / (LAYERS - 1);
          return (
            <svg
              key={i}
              viewBox="0 0 100 100"
              className="absolute inset-0 size-full"
              style={{ transform: `translateZ(${(i - LAYERS / 2) * (size / 60)}px)` }}
              fill="none"
              stroke={front ? "#C6FF00" : `hsl(${255 + t * 8} 90% ${34 + t * 22}%)`}
              strokeWidth="20"
            >
              <path d={M_PATH} />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
