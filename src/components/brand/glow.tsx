import { useId } from "react";

import { cn } from "@/lib/utils";

/**
 * Elementos de luz do clima cinematográfico (referência: sites escuros com
 * arcos e eclipses luminosos). Só SVG/CSS, sem JavaScript no cliente, e
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

/** Eclipse: disco escuro com uma meia-lua de luz, girando bem devagar. */
export function Eclipse({
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
      className={cn("pointer-events-none", className)}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 400 400" className="size-full" fill="none">
        <defs>
          <radialGradient id={`${id}h`}>
            <stop offset="0" stopColor="#5E34F7" stopOpacity="0.55" />
            <stop offset="0.55" stopColor="#5E34F7" stopOpacity="0.14" />
            <stop offset="1" stopColor="#5E34F7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`${id}c`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#c9b8ff" />
            <stop offset="1" stopColor="#6E48FF" />
          </linearGradient>
          <filter id={`${id}glow`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="10" />
          </filter>
          <mask id={`${id}m`}>
            <rect width="400" height="400" fill="#fff" />
            <circle cx="218" cy="200" r="114" fill="#000" />
          </mask>
        </defs>
        <circle cx="200" cy="200" r="200" fill={`url(#${id}h)`} />
        <g className="eclipse-rot">
          <g mask={`url(#${id}m)`}>
            <circle cx="200" cy="200" r="120" fill={`url(#${id}c)`} filter={`url(#${id}glow)`} opacity="0.85" />
            <circle cx="200" cy="200" r="120" fill={`url(#${id}c)`} />
          </g>
        </g>
        <circle cx="218" cy="200" r="114" fill="#07040f" />
      </svg>
    </div>
  );
}
