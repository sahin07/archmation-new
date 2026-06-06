(function () {
  "use strict";

  if (window.__archmationLegacyCompat) return;
  window.__archmationLegacyCompat = true;

  var LOADER_IDS = new Set([
    "progress-bar",
    "percentage-text",
    "loading-center",
    "loading",
    "loader-wrap",
    "loader",
  ]);

  function createLoaderStub() {
    var styleStore = { width: "100%" };
    var stub = {
      style: styleStore,
      textContent: "100%",
      className: "",
      classList: {
        add: function () {},
        remove: function () {},
        contains: function () {
          return false;
        },
      },
      addEventListener: function () {},
      removeEventListener: function () {},
      remove: function () {},
      offsetHeight: 0,
      offsetWidth: 0,
    };
    return stub;
  }

  var loaderStub = createLoaderStub();
  var nativeGetElementById = document.getElementById.bind(document);

  document.getElementById = function (id) {
    var element = nativeGetElementById(id);
    if (element || !LOADER_IDS.has(id)) {
      return element;
    }
    return loaderStub;
  };

  window.__archmationSkipLoader = function () {
    var bar = nativeGetElementById("progress-bar");
    var pct = nativeGetElementById("percentage-text");
    var loader = nativeGetElementById("loader-wrap");
    var fullSite = nativeGetElementById("fullSite");
    var loading = nativeGetElementById("loading");

    if (bar) bar.style.width = "100%";
    if (pct) pct.textContent = "100%";
    if (loader) loader.className = "hidden";
    if (fullSite) fullSite.className = "slideInUp";
    if (loading) loading.className = "fadeOut";
  };

  /** Images that 404 before app.js attaches listeners never fire load/error. */
  window.__archmationNudgeLoaderImages = function () {
    Array.from(document.images).forEach(function (img) {
      if (!img.complete) return;
      if (img.naturalHeight !== 0) return;
      try {
        img.dispatchEvent(new Event("error"));
      } catch (e) {
        /* ignore */
      }
    });
  };
})();
