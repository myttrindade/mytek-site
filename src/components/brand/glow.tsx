import { useId } from "react";

import { SYMBOL_PATH } from "@/components/brand/symbol";
import { cn } from "@/lib/utils";

/**
 * Elementos de luz do clima cinematográfico (referência: sites escuros com
 * arcos e formas luminosas). Só SVG/CSS, sem JavaScript no cliente, e
 * decorativos: `aria-hidden`, sem capturar clique.
 */

/** Arco de luz que cruza a largura da seção, como um horizonte brilhante. */
export function GlowArc({
  direction = "up",
  className,
}: {
  /** "up": arco para cima (topo da seção). "down": sorriso (base da seção). */
  direction?: "up" | "down";
  className?: string;
}) {
  const id = useId();
  const d =
    direction === "up" ? "M-40 190 Q600 -70 1240 190" : "M-40 10 Q600 270 1240 10";
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 200"
      preserveAspectRatio="none"
      className={cn("glow-pulse pointer-events-none h-[120px] w-full", className)}
      fill="none"
    >
      <defs>
        <linearGradient id={`${id}g`} x1="0" x2="1200" y1="0" y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6E48FF" stopOpacity="0" />
          <stop offset="0.3" stopColor="#8D6BFF" />
          <stop offset="0.5" stopColor="#ffffff" />
          <stop offset="0.7" stopColor="#8D6BFF" />
          <stop offset="1" stopColor="#6E48FF" stopOpacity="0" />
        </linearGradient>
        <filter id={`${id}b1`} x="-10%" y="-80%" width="120%" height="260%">
          <feGaussianBlur stdDeviation="16" />
        </filter>
        <filter id={`${id}b2`} x="-10%" y="-80%" width="120%" height="260%">
          <feGaussianBlur stdDeviation="4" />
        </filter>
      </defs>
      <path d={d} stroke={`url(#${id}g)`} strokeWidth="26" opacity="0.5" filter={`url(#${id}b1)`} />
      <path d={d} stroke={`url(#${id}g)`} strokeWidth="8" opacity="0.9" filter={`url(#${id}b2)`} />
      <path d={d} stroke={`url(#${id}g)`} strokeWidth="2" />
    </svg>
  );
}

/**
 * O símbolo da marca em grande escala: preenchimento roxo translúcido, contorno
 * de luz e um reflexo que cruza de tempos em tempos. Ocupa espaço e dá
 * identidade às seções escuras sem inventar um desenho que não seja da mytek.
 */
export function BrandGlyph({
  size = 460,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const id = useId();
  return (
    <div
      aria-hidden
      className={cn("glyph-float pointer-events-none", className)}
      style={{ width: size, height: (size * 77) / 83 }}
    >
      <svg viewBox="8 45 91 85" className="size-full overflow-visible" fill="none">
        <defs>
          <linearGradient id={`${id}f`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#6E48FF" stopOpacity="0.6" />
            <stop offset="1" stopColor="#5E34F7" stopOpacity="0.06" />
          </linearGradient>
          <linearGradient id={`${id}s`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.55" stopColor="#8D6BFF" />
            <stop offset="1" stopColor="#5E34F7" stopOpacity="0.5" />
          </linearGradient>
          <filter id={`${id}b`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur stdDeviation="3.2" />
          </filter>
          <linearGradient
            id={`${id}h`}
            gradientUnits="userSpaceOnUse"
            x1="-30"
            y1="0"
            x2="10"
            y2="0"
          >
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="0 0; 150 0; 150 0"
              keyTimes="0; 0.4; 1"
              dur="7s"
              begin="0.8s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>
        <path d={SYMBOL_PATH} fill={`url(#${id}f)`} />
        <path
          d={SYMBOL_PATH}
          stroke={`url(#${id}s)`}
          strokeWidth="2.6"
          strokeLinejoin="round"
          filter={`url(#${id}b)`}
          opacity="0.9"
        />
        <path
          d={SYMBOL_PATH}
          stroke={`url(#${id}s)`}
          strokeWidth="0.7"
          strokeLinejoin="round"
        />
        <path d={SYMBOL_PATH} fill={`url(#${id}h)`} />
      </svg>
    </div>
  );
}
