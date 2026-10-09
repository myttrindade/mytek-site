import { SYMBOL_PATH } from "@/components/brand/symbol";
import { cn } from "@/lib/utils";

const LAYERS = 18;

/**
 * Símbolo oficial extrudado em 3D só com CSS: camadas empilhadas em
 * translateZ, girando devagar. Sem biblioteca. A face da frente é lima.
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
              viewBox="-6.5 28 120 120"
              className="absolute inset-0 size-full"
              style={{ transform: `translateZ(${(i - LAYERS / 2) * (size / 60)}px)` }}
              fill={front ? "#C6FF00" : `hsl(${255 + t * 8} 90% ${34 + t * 22}%)`}
            >
              <path d={SYMBOL_PATH} />
            </svg>
          );
        })}
      </div>
    </div>
  );
}
