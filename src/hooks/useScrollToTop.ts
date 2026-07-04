"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Keep route changes pinned to the top (listing pages often leave a deep scrollY). */
export function useScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const resetScroll = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    resetScroll();
    const raf = window.requestAnimationFrame(resetScroll);
    const timeout = window.setTimeout(resetScroll, 0);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [pathname]);
}
