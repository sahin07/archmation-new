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

const MOBILE_MQ = "(max-width: 1023px)";

/**
 * On mobile, sections are often taller than the viewport.
 * A high `amount` (e.g. 0.35) can never be reached → content stays opacity 0.
 */
function useMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const sync = () => setIsMobile(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isMobile;
}

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
  const isMobile = useMobileViewport();

  const resolvedAmount = isMobile ? Math.min(amount, 0.08) : amount;
  const resolvedMargin = isMobile ? "0px 0px -5% 0px" : margin;
  const resolvedDelay = isMobile ? Math.min(delay, 120) : delay;

  const inView = useInView(ref, {
    once,
    amount: resolvedAmount,
    margin: resolvedMargin as `${number}px ${number}px ${number}px ${number}px`,
  });

  const prefersReducedMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  const [delayedActive, setDelayedActive] = useState(false);

  const shouldReveal = motionReady && (inView || prefersReducedMotion);

  useEffect(() => {
    if (resolvedDelay <= 0) {
      setDelayedActive(shouldReveal);
      return;
    }

    if (!shouldReveal) {
      if (!once) setDelayedActive(false);
      return;
    }

    if (prefersReducedMotion) {
      setDelayedActive(true);
      return;
    }

    const timer = window.setTimeout(() => setDelayedActive(true), resolvedDelay);
    return () => window.clearTimeout(timer);
  }, [shouldReveal, resolvedDelay, prefersReducedMotion, once]);

  if (resolvedDelay <= 0) {
    return shouldReveal;
  }

  return delayedActive;
}
