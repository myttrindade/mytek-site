"use client";

import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface BorderBeamProps {
  className?: string;
  /** Size of the beam in px */
  size?: number;
  /** Seconds for one full loop */
  duration?: number;
  /** Seconds of delay before starting */
  delay?: number;
  reverse?: boolean;
  colorFrom?: string;
  colorTo?: string;
}

/**
 * Animated beam that travels around the border of its nearest
 * positioned ancestor. Parent needs `position: relative` and a border.
 * Always animates, regardless of prefers-reduced-motion: it's the
 * signature detail on the CRM/Dashboard/Landing Page previews.
 */
export function BorderBeam({
  className,
  size = 64,
  duration = 6,
  delay = 0,
  reverse = false,
  colorFrom = "var(--brand-from)",
  colorTo = "var(--brand-to)",
}: BorderBeamProps) {
  return (
    <div
      aria-hidden
      data-slot="border-beam"
      className="pointer-events-none absolute inset-0 rounded-[inherit] border border-transparent [mask-clip:padding-box,border-box] [mask-composite:intersect] [mask-image:linear-gradient(transparent,transparent),linear-gradient(#000,#000)]"
    >
      <motion.div
        className={cn(
          "absolute aspect-square bg-gradient-to-l from-(--beam-from) via-(--beam-to) to-transparent",
          className
        )}
        style={
          {
            width: size,
            offsetPath: `rect(0 auto auto 0 round ${size}px)`,
            "--beam-from": colorFrom,
            "--beam-to": colorTo,
          } as React.CSSProperties
        }
        initial={{ offsetDistance: reverse ? "100%" : "0%" }}
        animate={{ offsetDistance: reverse ? "0%" : "100%" }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration,
          delay: -delay,
        }}
      />
    </div>
  );
}
