(function () {
  "use strict";

  if (window.__archmationLoaderFinish) return;
  window.__archmationLoaderFinish = true;

  function getPct() {
    var el = document.getElementById("percentage-text");
    if (!el) return 0;
    return parseInt(String(el.textContent).replace(/\D/g, ""), 10) || 0;
  }

  function isLoaderVisible() {
    var loader = document.getElementById("loader-wrap");
    if (!loader || !loader.isConnected) return false;
    if (
      loader.classList.contains("hidden") ||
      loader.classList.contains("fadeOutLoader")
    ) {
      return false;
    }
    return (
      getComputedStyle(loader).display !== "none" && loader.offsetParent !== null
    );
  }

  function finishLoader() {
    if (window.__archmationSkipLoader) {
      window.__archmationSkipLoader();
      return;
    }

    var bar = document.getElementById("progress-bar");
    var pct = document.getElementById("percentage-text");
    var loader = document.getElementById("loader-wrap");
    var fullSite = document.getElementById("fullSite");
    var loading = document.getElementById("loading");

    if (bar) bar.style.width = "100%";
    if (pct) pct.textContent = "100%";
    if (loader) loader.className = "hidden";
    if (fullSite) fullSite.className = "slideInUp";
    if (loading) loading.className = "fadeOut";
  }

  function nudgeMissedImages() {
    if (typeof window.__archmationNudgeLoaderImages === "function") {
      window.__archmationNudgeLoaderImages();
    }
  }

  function forceIfStillStuck() {
    if (isLoaderVisible()) finishLoader();
  }

  function armFallbacks() {
    var stuckTimer = null;

    function scheduleStuckFallback() {
      if (stuckTimer) window.clearTimeout(stuckTimer);
      if (!isLoaderVisible() || getPct() < 90) return;
      stuckTimer = window.setTimeout(forceIfStillStuck, 2500);
    }

    var pctEl = document.getElementById("percentage-text");
    if (pctEl) {
      new MutationObserver(scheduleStuckFallback).observe(pctEl, {
        childList: true,
        characterData: true,
        subtree: true,
      });
    }

    window.addEventListener(
      "load",
      function () {
        nudgeMissedImages();
        window.setTimeout(function () {
          nudgeMissedImages();
          scheduleStuckFallback();
        }, 400);
      },
      { once: true },
    );

    window.setTimeout(forceIfStillStuck, 12000);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", armFallbacks);
  } else {
    armFallbacks();
  }

  nudgeMissedImages();
})();
