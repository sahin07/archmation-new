"use client";

const MOBILE_NAV_MQ = "(max-width: 1159px)";

function getDropdownItems(root: ParentNode) {
  return root.querySelectorAll<HTMLLIElement>(
    "#header-menu li.menu-item-has-children",
  );
}

export function closeServiceDropdowns(root: ParentNode) {
  getDropdownItems(root).forEach((item) => {
    item.classList.remove("is-open");
    item.querySelector("a")?.setAttribute("aria-expanded", "false");
  });
}

/** Clear legacy app.js inline styles that force every mobile submenu open. */
export function resetMobileSubmenuInlineStyles(root: ParentNode) {
  root
    .querySelectorAll<HTMLElement>("#header-menu li.menu-item-has-children > ul.sub-menu")
    .forEach((submenu) => {
      submenu.style.removeProperty("display");
      submenu.style.removeProperty("visibility");
    });
}

export function closeMobileNavOverlay(root: ParentNode) {
  const navicon = root.querySelector<HTMLElement>("#navicon");
  const overlay = root.querySelector<HTMLElement>(".overlayHeaderMenu");
  navicon?.classList.remove("open");
  overlay?.classList.remove("open");
  overlay?.classList.remove("close");
  document.body.classList.remove("menu-open");
  resetMobileSubmenuInlineStyles(root);
  closeServiceDropdowns(root);
}

export function closeAllHeaderMenus(root: ParentNode) {
  closeServiceDropdowns(root);
  closeMobileNavOverlay(root);
}

function initMobileServiceDropdown(root: ParentNode) {
  const mobileMq = window.matchMedia(MOBILE_NAV_MQ);
  const dropdownItems = getDropdownItems(root);
  const cleanups: (() => void)[] = [];

  const onDropdownClick = (event: Event) => {
    if (!mobileMq.matches) return;

    const link = event.currentTarget as HTMLAnchorElement;
    const item = link.closest("li.menu-item-has-children");
    if (!item) return;

    event.preventDefault();
    event.stopPropagation();

    // Clear legacy inline display:block so CSS .is-open can control visibility.
    resetMobileSubmenuInlineStyles(root);

    const isOpen = item.classList.toggle("is-open");
    link.setAttribute("aria-expanded", isOpen ? "true" : "false");

    dropdownItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("is-open");
        other.querySelector("a")?.setAttribute("aria-expanded", "false");
      }
    });

    // Drop sticky focus so caret doesn't stay flipped after close on mobile.
    if (!isOpen) {
      link.blur();
    }
  };

  const onDocumentClick = (event: MouseEvent) => {
    const target = event.target as Element | null;
    if (!target) return;
    if (target.closest("#header-menu li.menu-item-has-children")) return;
    closeServiceDropdowns(root);
  };

  const onSubmenuLinkClick = () => {
    closeAllHeaderMenus(root);
  };

  dropdownItems.forEach((item) => {
    const link = item.querySelector("a");
    if (!link) return;
    link.addEventListener("click", onDropdownClick);
    cleanups.push(() => link.removeEventListener("click", onDropdownClick));
  });

  root.querySelectorAll<HTMLAnchorElement>(
    "#header-menu li.menu-item-has-children ul.sub-menu a",
  ).forEach((link) => {
    link.addEventListener("click", onSubmenuLinkClick);
    cleanups.push(() => link.removeEventListener("click", onSubmenuLinkClick));
  });

  root.querySelectorAll<HTMLAnchorElement>(
    "#header-menu > li:not(.menu-item-has-children) > a",
  ).forEach((link) => {
    link.addEventListener("click", onSubmenuLinkClick);
    cleanups.push(() => link.removeEventListener("click", onSubmenuLinkClick));
  });

  document.addEventListener("click", onDocumentClick);
  cleanups.push(() => document.removeEventListener("click", onDocumentClick));

  return () => cleanups.forEach((cleanup) => cleanup());
}

function setMobileNavOpen(
  navicon: HTMLElement,
  overlay: HTMLElement,
  open: boolean,
) {
  navicon.classList.toggle("open", open);
  overlay.classList.toggle("open", open);
  if (open) {
    overlay.classList.remove("close");
  } else {
    overlay.classList.remove("close");
    resetMobileSubmenuInlineStyles(overlay);
    closeServiceDropdowns(overlay);
  }
  document.body.classList.toggle("menu-open", open);

  const nav = overlay.querySelector<HTMLElement>("#navSite");
  nav?.classList.toggle("height-transition-hidden", !open);
}

function initNavicon(root: ParentNode) {
  const navicon = root.querySelector<HTMLElement>("#navicon");
  const overlay = root.querySelector<HTMLElement>(".overlayHeaderMenu");
  if (!navicon || !overlay) return undefined;

  // Prefer our toggle only — legacy app.js also binds and double-toggles.
  unbindLegacyNaviconHandler();

  const onNaviconClick = (event: Event) => {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    const nextOpen = !overlay.classList.contains("open");
    setMobileNavOpen(navicon, overlay, nextOpen);
  };

  navicon.addEventListener("click", onNaviconClick, true);
  return () => {
    navicon.removeEventListener("click", onNaviconClick, true);
    setMobileNavOpen(navicon, overlay, false);
  };
}

/** Legacy app.js also binds #navicon and forces mobile submenus open. */
export function unbindLegacyNaviconHandler() {
  const jq = (
    window as Window & {
      jQuery?: (
        selector: string,
      ) => {
        off: (events: string) => unknown;
      };
    }
  ).jQuery;
  if (!jq) return;
  jq("#navicon").off("click");
  // Stop legacy hover / mobile "show all submenus" behavior from fighting our toggle.
  jq("#navSite #header-menu li").off("mouseenter mouseleave mouseover mouseout");
  jq("#header-menu .sub-menu a").off("click");
}

type HeaderScrollOptions = {
  /** Non-home pages: keep the compact header (never expand to the tall hero size). */
  compactDefault?: boolean;
  threshold?: number;
};

function getHeader(root: ParentNode): HTMLElement | null {
  return (
    root.querySelector<HTMLElement>("#headerSite") ??
    document.getElementById("headerSite")
  );
}

/** Same scroll shrink as legacy app.js — adds/removes `.small` on #headerSite. */
export function initHeaderScroll(
  host: ParentNode,
  { compactDefault = false, threshold = 50 }: HeaderScrollOptions = {},
) {
  const header = getHeader(host);
  if (!header) return undefined;

  if (compactDefault) {
    header.classList.add("small");
  }

    const sync = () => {
    const scrolled = window.scrollY > threshold;

    if (scrolled || compactDefault) {
      header.classList.add("small");
    } else {
      header.classList.remove("small");
    }

    header.classList.toggle("is-scrolled", scrolled);

    if (compactDefault) {
      document.body.classList.toggle("is-header-scrolled", scrolled);
    }
  };

  window.scrollTo(0, 0);
  sync();
  window.addEventListener("scroll", sync, { passive: true });
  window.addEventListener("resize", sync, { passive: true });

  return () => {
    window.removeEventListener("scroll", sync);
    window.removeEventListener("resize", sync);
    if (compactDefault) {
      header.classList.remove("small");
      document.body.classList.remove("is-header-scrolled");
    }
    header.classList.remove("is-scrolled");
  };
}

function initHeroScrollDown(root: ParentNode) {
  const links = root.querySelectorAll<HTMLAnchorElement>("a.scroll-down-circle");
  const cleanups: (() => void)[] = [];

  const onClick = (event: Event) => {
    const link = event.currentTarget as HTMLAnchorElement;
    const href = link.getAttribute("href");
    if (!href?.startsWith("#")) return;

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    const targetId = href.slice(1);
    const target =
      document.getElementById(targetId) ??
      root.querySelector<HTMLElement>(`#${CSS.escape(targetId)}`);
    if (!target) return;

    const header = document.querySelector<HTMLElement>("#headerSite");
    const offset = Number(link.dataset.offset ?? "30");
    const headerHeight = header?.offsetHeight ?? 0;
    const top =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      offset;

    window.scrollTo({ top: Math.max(0, top), behavior: "smooth" });
  };

  links.forEach((link) => {
    link.addEventListener("click", onClick, true);
    cleanups.push(() => link.removeEventListener("click", onClick, true));
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

export function initHeaderNav(host: ParentNode) {
  resetMobileSubmenuInlineStyles(host);
  unbindLegacyNaviconHandler();
  const cleanupDropdown = initMobileServiceDropdown(host);
  const cleanupNavicon = initNavicon(host);
  const cleanupHeroScroll = initHeroScrollDown(host);

  // If legacy app.js re-binds after us (async script load), unbind again shortly.
  const rebindGuard = window.setTimeout(() => {
    unbindLegacyNaviconHandler();
    resetMobileSubmenuInlineStyles(host);
  }, 0);
  const rebindGuardLate = window.setTimeout(() => {
    unbindLegacyNaviconHandler();
    resetMobileSubmenuInlineStyles(host);
  }, 500);

  return () => {
    window.clearTimeout(rebindGuard);
    window.clearTimeout(rebindGuardLate);
    cleanupDropdown?.();
    cleanupNavicon?.();
    cleanupHeroScroll?.();
  };
}

/** @deprecated Use initHeaderNav inside an effect after header HTML is mounted */
export function useHeaderNav(host: HTMLElement | null) {
  void host;
}
