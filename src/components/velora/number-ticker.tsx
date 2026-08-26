"use client";

import { useEffect, useRef, useState } from "react";

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

const DURATION_MS = 900;

/**
 * Counts up when it scrolls into view — but the **final** value is what gets
 * rendered on the server and on the first client pass. O zero só aparece no
 * instante em que a animação de fato começa.
 *
 * Isso é deliberado: como o site é `output: "export"`, o HTML que o
 * Cloudflare serve é o que o Google, o preview de link e quem está com JS
 * lento enxergam. Inicializar em `startValue` fazia esse HTML dizer
 * "R$0/mês CRM a partir de", contradizendo o preço real.
 *
 * Respeita `prefers-reduced-motion`: nesse caso o número simplesmente fica
 * parado no valor certo, que já é o estado inicial.
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
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    let timeout: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const run = () => {
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / DURATION_MS, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(startValue + (value - startValue) * eased);
            if (p < 1) frame = requestAnimationFrame(tick);
          };
          setDisplay(startValue);
          frame = requestAnimationFrame(tick);
        };

        if (delay > 0) timeout = setTimeout(run, delay * 1000);
        else run();
      },
      { threshold: 0.4 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (frame) cancelAnimationFrame(frame);
      if (timeout) clearTimeout(timeout);
    };
  }, [value, startValue, delay]);

  const formatted = `${prefix}${Intl.NumberFormat("en-US", {
    minimumFractionDigits: decimalPlaces,
    maximumFractionDigits: decimalPlaces,
  }).format(display)}${suffix}`;

  return (
    <span
      ref={ref}
      data-slot="number-ticker"
      className={cn("inline-block tabular-nums", className)}
      {...props}
    >
      {formatted}
    </span>
  );
}
