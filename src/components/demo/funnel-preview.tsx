"use client";

import { motion } from "motion/react";

import { BorderBeam } from "@/components/velora/border-beam";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

const stages = [
  { label: "Novos leads", value: 48, width: 100, tone: "bg-primary" },
  { label: "Em contato", value: 31, width: 64, tone: "bg-cyan-500" },
  { label: "Fechados", value: 17, width: 35, tone: "bg-emerald-500" },
];

/**
 * CRM sales funnel preview — bars fill in on scroll, staying at their
 * final width once revealed. Pure markup, no images.
 */
export function FunnelPreview({ className }: { className?: string }) {
  const reducedMotion = useReducedMotionSafe();

  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-gradient-to-r from-brand-from via-brand-via to-brand-to opacity-20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border bg-card/80 p-6 shadow-2xl backdrop-blur">
        <BorderBeam size={72} duration={8} />

        <span className="text-xs font-semibold text-muted-foreground">
          Funil de vendas · CRM
        </span>

        <div className="mt-5 space-y-5">
          {stages.map((s, i) => (
            <div key={s.label} className="grid grid-cols-[84px_1fr_28px] items-center gap-3">
              <span className="text-xs font-medium text-muted-foreground">
                {s.label}
              </span>
              <div className="h-2.5 overflow-hidden rounded-full bg-muted">
                <motion.div
                  className={cn("h-full rounded-full", s.tone)}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${s.width}%` }}
                  viewport={{ once: true }}
                  transition={
                    reducedMotion
                      ? { duration: 0 }
                      : { duration: 0.9, delay: i * 0.15, ease: "easeOut" }
                  }
                />
              </div>
              <span className="text-right text-sm font-semibold">
                {s.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
