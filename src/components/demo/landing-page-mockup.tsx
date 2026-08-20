"use client";

import { motion } from "motion/react";

import { BorderBeam } from "@/components/velora/border-beam";
import { NumberTicker } from "@/components/velora/number-ticker";
import { cn } from "@/lib/utils";

const AREA_PATH =
  "M0,90 L40,75 L80,80 L120,55 L160,60 L200,35 L240,40 L300,10 L300,110 L0,110 Z";
const LINE_PATH = "M0,90 L40,75 L80,80 L120,55 L160,60 L200,35 L240,40 L300,10";
/** Approximate length of LINE_PATH, precomputed to avoid a DOM measurement. */
const LINE_LENGTH = 420;

/**
 * Landing page performance preview — conversion KPIs plus a line chart
 * that draws itself in on scroll. Pure markup, no images.
 */
export function LandingPageMockup({ className }: { className?: string }) {
  return (
    <div className={cn("relative mx-auto w-full max-w-md", className)}>
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-gradient-to-r from-brand-from via-brand-via to-brand-to opacity-20 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border bg-card/80 p-6 shadow-2xl backdrop-blur">
        <BorderBeam size={72} duration={9} />

        <span className="text-xs font-semibold text-muted-foreground">
          Desempenho · Landing Page
        </span>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-border/60 bg-background/40 p-3">
            <p className="text-lg font-semibold tracking-tight lg:text-xl">
              <NumberTicker value={18} suffix="%" />
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Taxa de conversão
            </p>
          </div>
          <div className="rounded-xl border border-border/60 bg-background/40 p-3">
            <p className="text-lg font-semibold tracking-tight lg:text-xl">
              <NumberTicker value={1240} />
            </p>
            <p className="mt-1 text-[11px] text-muted-foreground">
              Visitas na semana
            </p>
          </div>
        </div>

        <div className="mt-4 h-28">
          <svg viewBox="0 0 300 110" className="size-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="lpGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity=".35" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d={AREA_PATH}
              fill="url(#lpGrad)"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.9 }}
            />
            <motion.path
              d={LINE_PATH}
              fill="none"
              stroke="var(--primary)"
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 1.3, ease: "easeInOut" }}
              style={{ strokeDasharray: LINE_LENGTH }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
