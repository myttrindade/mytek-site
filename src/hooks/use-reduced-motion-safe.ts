"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(callback: () => void) {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot() {
  return false;
}

/**
 * Hydration-safe reduced-motion read.
 *
 * `matchMedia` isn't available during SSR, so the server snapshot is always
 * `false`. `useSyncExternalStore` keeps that same value on the client's
 * first paint and only switches to the real preference after hydration
 * commits, avoiding the mismatch a plain `useEffect` + `setState` would
 * cause if it rendered synchronously.
 */
export function useReducedMotionSafe(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
