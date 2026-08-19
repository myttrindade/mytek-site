"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

interface FloatStatChipProps {
  value: string;
  label: string;
  className?: string;
  /** Seconds for one bob cycle */
  duration?: number;
  delay?: number;
}

/**
 * Small floating stat badge, gently bobbing up and down — the "balões
 * flutuantes" from the CRM hero. Purely decorative (aria-hidden).
 */
export function FloatStatChip({
  value,
  label,
  className,
  duration = 5,
  delay = 0,
}: FloatStatChipProps) {
  const reducedMotion = useReducedMotionSafe();
  return (
    <motion.div
      aria-hidden
      className={cn(
        "absolute z-10 flex items-center gap-2 rounded-xl border bg-card/95 px-4 py-2.5 shadow-lg backdrop-blur",
        className
      )}
      animate={reducedMotion ? undefined : { y: [0, -10, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeInOut" }}
    >
      <span className="font-display text-lg font-semibold text-primary">
        {value}
      </span>
      <span className="text-[11px] leading-tight text-muted-foreground">
        {label}
      </span>
    </motion.div>
  );
}
