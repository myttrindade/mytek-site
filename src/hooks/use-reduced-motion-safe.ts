"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

/**
 * Hydration-safe replacement for Motion's `useReducedMotion()`.
 *
 * The raw hook reads `matchMedia` synchronously on the client but returns
 * `null` on the server, so components that branch their JSX on its value
 * render different markup during SSR vs. the client's first paint whenever
 * a visitor actually has reduced motion enabled — a hydration mismatch.
 *
 * This mirrors the server's `false` on the client's first render too, then
 * syncs to the real preference in an effect (after hydration commits, where
 * a state change is safe).
 */
export function useReducedMotionSafe(): boolean {
  const prefersReducedMotion = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    setReducedMotion(!!prefersReducedMotion);
  }, [prefersReducedMotion]);

  return reducedMotion;
}
