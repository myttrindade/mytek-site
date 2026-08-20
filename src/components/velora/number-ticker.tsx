"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "motion/react";

import { cn } from "@/lib/utils";

interface NumberTickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  startValue?: number;
  /** Seconds to wait after entering the viewport */
  delay?: number;
  decimalPlaces?: number;
  prefix?: string;
  suffix?: string;
}

/**
 * Counts up every time it scrolls into view, not just the first time
 * (`once: false`) — it resets to `startValue` on exit so the count-up
 * replays on the next pass, and it always animates regardless of
 * prefers-reduced-motion since the count itself is the point.
 */
export function NumberTicker({
  value,
  startValue = 0,
  delay = 0,
  decimalPlaces = 0,
  prefix = "",
  suffix = "",
  className,
  ...props
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(startValue);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: false, margin: "0px 0px -10% 0px" });

  const format = (n: number) =>
    `${prefix}${Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimalPlaces,
      maximumFractionDigits: decimalPlaces,
    }).format(n)}${suffix}`;

  useEffect(() => {
    if (!isInView) {
      motionValue.jump(startValue);
      return;
    }
    const timeout = setTimeout(() => motionValue.set(value), delay * 1000);
    return () => clearTimeout(timeout);
  }, [isInView, motionValue, value, startValue, delay]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current) ref.current.textContent = format(latest);
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [springValue, prefix, suffix, decimalPlaces]
  );

  return (
    <span
      ref={ref}
      data-slot="number-ticker"
      className={cn("inline-block tabular-nums", className)}
      {...props}
    >
      {format(startValue)}
    </span>
  );
}
