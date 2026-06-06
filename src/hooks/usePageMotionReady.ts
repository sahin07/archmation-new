"use client";

import { useEffect, useState } from "react";

function isLoaderComplete(): boolean {
  if (typeof document === "undefined") return false;

  const loader = document.getElementById("loader-wrap");
  const fullSite = document.getElementById("fullSite");

  return (
    loader?.classList.contains("hidden") === true ||
    fullSite?.classList.contains("slideInUp") === true
  );
}

/** Wait until legacy app.js reveals #fullSite before scroll animations run. */
export function usePageMotionReady(): boolean {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (isLoaderComplete()) {
      const id = window.requestAnimationFrame(() => setReady(true));
      return () => window.cancelAnimationFrame(id);
    }

    const observer = new MutationObserver(() => {
      if (!isLoaderComplete()) return;
      observer.disconnect();
      window.requestAnimationFrame(() => setReady(true));
    });

    const loader = document.getElementById("loader-wrap");
    const fullSite = document.getElementById("fullSite");

    for (const node of [loader, fullSite]) {
      if (node) {
        observer.observe(node, {
          attributes: true,
          attributeFilter: ["class"],
        });
      }
    }

    const fallback = window.setTimeout(() => setReady(true), 4000);

    return () => {
      observer.disconnect();
      window.clearTimeout(fallback);
    };
  }, []);

  return ready;
}
