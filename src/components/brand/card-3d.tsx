"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  /** Inclinação máxima ao passar o mouse, em graus. */
  maxTilt?: number;
  /** Giro em repouso (eixo Y, em graus): dá volume mesmo sem o mouse. */
  restTilt?: number;
  /** Cor do brilho que desliza pela superfície (use um tom escuro em cartão claro). */
  glare?: string;
}

/**
 * Cartão em 3D de verdade: fica levemente girado em repouso, acompanha o mouse
 * com perspectiva forte e tem um brilho que desliza pela superfície. Os filhos
 * podem usar `translateZ` (ex.: `[transform:translateZ(36px)]`) para flutuar
 * acima do cartão.
 */
export function Card3D({
  children,
  className,
  maxTilt = 14,
  restTilt = 0,
  glare = "rgba(255,255,255,0.3)",
}: Card3DProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(restTilt);
  const sx = useSpring(rotateX, { stiffness: 160, damping: 16 });
  const sy = useSpring(rotateY, { stiffness: 160, damping: 16 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    rotateY.set((px - 0.5) * maxTilt * 2);
    rotateX.set(-(py - 0.5) * maxTilt * 2);
    el.style.setProperty("--gx", `${px * 100}%`);
    el.style.setProperty("--gy", `${py * 100}%`);
  };

  const onLeave = () => {
    rotateX.set(0);
    rotateY.set(restTilt);
  };

  return (
    <motion.div
      ref={ref}
      data-slot="card-3d"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        rotateX: sx,
        rotateY: sy,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={cn("group/3d relative will-change-transform", className)}
    >
      {children}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover/3d:opacity-100"
        style={{
          background:
            `radial-gradient(circle at var(--gx, 50%) var(--gy, 0%), ${glare}, transparent 55%)`,
        }}
      />
    </motion.div>
  );
}
