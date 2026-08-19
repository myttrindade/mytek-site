"use client";

import { useRef, type Ref } from "react";
import {
  CalendarIcon,
  CreditCardIcon,
  MailIcon,
  MessageCircleIcon,
  PhoneIcon,
  Share2Icon,
  UsersIcon,
} from "lucide-react";

import { AnimatedBeam } from "@/components/velora/animated-beam";
import { cn } from "@/lib/utils";

function Node({
  ref,
  className,
  tone,
  children,
}: {
  ref?: Ref<HTMLDivElement>;
  className?: string;
  tone?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-14 items-center justify-center rounded-full border-2 bg-card shadow-md [&_svg]:size-6",
        tone,
        className
      )}
    >
      {children}
    </div>
  );
}

/**
 * Six service nodes beaming into a central hub — the classic
 * integrations diagram, built from <AnimatedBeam />.
 */
export function IntegrationsBeam({ className }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const left1 = useRef<HTMLDivElement>(null);
  const left2 = useRef<HTMLDivElement>(null);
  const left3 = useRef<HTMLDivElement>(null);
  const right1 = useRef<HTMLDivElement>(null);
  const right2 = useRef<HTMLDivElement>(null);
  const right3 = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-96 w-full items-center justify-between px-2 sm:px-8",
        className
      )}
    >
      <div className="flex h-full flex-col justify-between py-6">
        <Node ref={left1} tone="border-blue-500/30 bg-blue-500/10 shadow-blue-500/10">
          <Share2Icon className="text-blue-600 dark:text-blue-400" />
        </Node>
        <Node ref={left2} tone="border-violet-500/30 bg-violet-500/10 shadow-violet-500/10">
          <PhoneIcon className="text-violet-600 dark:text-violet-400" />
        </Node>
        <Node ref={left3} tone="border-amber-500/30 bg-amber-500/10 shadow-amber-500/10">
          <CalendarIcon className="text-amber-600 dark:text-amber-400" />
        </Node>
      </div>

      <Node
        ref={centerRef}
        className="size-18 border-primary/40 bg-primary/10 shadow-primary/20 [&_svg]:size-8"
      >
        <MessageCircleIcon className="text-primary" />
      </Node>

      <div className="flex h-full flex-col justify-between py-6">
        <Node ref={right1} tone="border-rose-500/30 bg-rose-500/10 shadow-rose-500/10">
          <MailIcon className="text-rose-600 dark:text-rose-400" />
        </Node>
        <Node ref={right2} tone="border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/10">
          <CreditCardIcon className="text-emerald-600 dark:text-emerald-400" />
        </Node>
        <Node ref={right3} tone="border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10">
          <UsersIcon className="text-cyan-600 dark:text-cyan-400" />
        </Node>
      </div>

      <AnimatedBeam containerRef={containerRef} fromRef={left1} toRef={centerRef} curvature={-60} />
      <AnimatedBeam containerRef={containerRef} fromRef={left2} toRef={centerRef} delay={1} />
      <AnimatedBeam containerRef={containerRef} fromRef={left3} toRef={centerRef} curvature={60} delay={2} />
      <AnimatedBeam containerRef={containerRef} fromRef={right1} toRef={centerRef} curvature={-60} reverse delay={0.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={right2} toRef={centerRef} reverse delay={1.5} />
      <AnimatedBeam containerRef={containerRef} fromRef={right3} toRef={centerRef} curvature={60} reverse delay={2.5} />
    </div>
  );
}
