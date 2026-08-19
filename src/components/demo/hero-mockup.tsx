"use client";

import { motion } from "motion/react";
import {
  BarChart3Icon,
  CalendarIcon,
  LayoutDashboardIcon,
  MessageCircleIcon,
  SettingsIcon,
  TrendingUpIcon,
} from "lucide-react";

import { BorderBeam } from "@/components/velora/border-beam";
import { BrowserMockup } from "@/components/velora/browser-mockup";
import { NumberTicker } from "@/components/velora/number-ticker";
import { cn } from "@/lib/utils";
import { useReducedMotionSafe } from "@/hooks/use-reduced-motion-safe";

const navItems = [
  { icon: LayoutDashboardIcon, label: "Visão geral", active: true },
  { icon: MessageCircleIcon, label: "Leads" },
  { icon: CalendarIcon, label: "Agenda" },
  { icon: BarChart3Icon, label: "Pulse" },
  { icon: SettingsIcon, label: "Config" },
];

const stats = [
  { label: "Vendas no mês", value: 48.2, prefix: "R$", change: "+12%", suffix: "k", decimals: 1 },
  { label: "Novos leads", value: 312, prefix: "", change: "+18%" },
  { label: "Satisfação", value: 96, prefix: "", change: "+4%", suffix: "%" },
];

const bars = [38, 62, 48, 74, 56, 88, 66, 92, 60, 78, 84, 98];

/**
 * Fake Pulse dashboard inside a browser frame — pure markup,
 * no images. Gives the hero a product to look at.
 */
export function HeroMockup({ className }: { className?: string }) {
  const reducedMotion = useReducedMotionSafe();

  return (
    <div className={cn("relative mx-auto w-full max-w-5xl", className)}>
      {/* Glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-[2rem] bg-gradient-to-r from-brand-from via-brand-via to-brand-to opacity-20 blur-3xl"
      />

      <BrowserMockup url="mytek.app/pulse" className="relative">
        <BorderBeam size={96} duration={10} />

        <div className="flex">
          {/* Sidebar */}
          <aside className="hidden w-44 flex-col gap-1 border-r border-border/60 p-3 md:flex">
            {navItems.map((item) => (
              <span
                key={item.label}
                className={cn(
                  "flex items-center gap-2 rounded-lg px-3 py-2 text-xs",
                  item.active
                    ? "bg-primary/10 font-medium text-primary"
                    : "text-muted-foreground"
                )}
              >
                <item.icon className="size-3.5" />
                {item.label}
              </span>
            ))}
          </aside>

          {/* Main */}
          <div className="flex-1 p-4 lg:p-6">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold">Visão geral</span>
              <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                Últimos 30 dias
              </span>
            </div>

            {/* Stat cards */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-xl border border-border/60 bg-background/40 p-3 lg:p-4"
                >
                  <p className="text-[11px] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-base font-semibold lg:text-xl">
                    <NumberTicker
                      value={stat.value}
                      prefix={stat.prefix}
                      suffix={stat.suffix ?? ""}
                      decimalPlaces={stat.decimals ?? 0}
                    />
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-[11px] text-emerald-500">
                    <TrendingUpIcon className="size-3" />
                    {stat.change}
                  </span>
                </div>
              ))}
            </div>

            {/* Bar chart */}
            <div className="mt-3 rounded-xl border border-border/60 bg-background/40 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs font-medium">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75 motion-reduce:hidden" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-emerald-500" />
                  </span>
                  Vendas mensais
                </span>
                <span className="text-[11px] text-muted-foreground">2026</span>
              </div>
              <div className="flex h-32 items-end gap-2 lg:h-40">
                {bars.map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{ scaleY: 0 }}
                    animate={
                      reducedMotion
                        ? { scaleY: 1 }
                        : { scaleY: [0, 1, 0.9, 1, 0.94, 1] }
                    }
                    transition={
                      reducedMotion
                        ? { duration: 0 }
                        : {
                            duration: 3,
                            times: [0, 0.16, 0.45, 0.6, 0.85, 1],
                            repeat: Infinity,
                            repeatDelay: 1.2,
                            delay: 0.3 + i * 0.08,
                            ease: "easeInOut",
                          }
                    }
                    className="flex-1 origin-bottom rounded-t-sm bg-gradient-to-t from-brand-from to-brand-via"
                    style={{ height: `${height}%`, opacity: 0.5 + height / 200 }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </BrowserMockup>
    </div>
  );
}
