"use client";

import { type RefObject, useEffect, useMemo, useState } from "react";
import { useInView } from "motion/react";
import { usePageMotionReady } from "@/hooks/usePageMotionReady";

type SectionRevealOptions = {
  amount?: number;
  margin?: string;
  once?: boolean;
  /** Wait after in-view before returning active (ms) */
  delay?: number;
};

export function useSectionReveal<T extends Element>(
  ref: RefObject<T | null>,
  {
    amount = 0.12,
    margin = "0px 0px -5% 0px",
    once = true,
    delay = 0,
  }: SectionRevealOptions = {},
) {
  const motionReady = usePageMotionReady();
  const inView = useInView(ref, {
    once,
    amount,
    margin: margin as `${number}px ${number}px ${number}px ${number}px`,
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [delayedActive, setDelayedActive] = useState(false);

  const shouldReveal = motionReady && (inView || prefersReducedMotion);

  useEffect(() => {
    if (delay <= 0) return;

    if (!shouldReveal) {
      if (!once) setDelayedActive(false);
      return;
    }

    if (prefersReducedMotion) {
      setDelayedActive(true);
      return;
    }

    const timer = window.setTimeout(() => setDelayedActive(true), delay);
    return () => window.clearTimeout(timer);
  }, [shouldReveal, delay, prefersReducedMotion, once]);

  if (delay <= 0) {
    return shouldReveal;
  }

  return delayedActive;
}
