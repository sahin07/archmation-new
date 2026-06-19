"use client";

function initMobileServiceDropdown(root: ParentNode) {
  const mobileMq = window.matchMedia("(max-width: 1159px)");
  const dropdownItems = root.querySelectorAll<HTMLLIElement>(
    "#header-menu li.menu-item-has-children",
  );

  const cleanups: (() => void)[] = [];

  const onDropdownClick = (event: Event) => {
    if (!mobileMq.matches) return;

    const link = event.currentTarget as HTMLAnchorElement;
    const item = link.closest("li.menu-item-has-children");
    if (!item) return;

    event.preventDefault();
    const isOpen = item.classList.toggle("is-open");
    link.setAttribute("aria-expanded", isOpen ? "true" : "false");

    dropdownItems.forEach((other) => {
      if (other !== item) {
        other.classList.remove("is-open");
        other.querySelector("a")?.setAttribute("aria-expanded", "false");
      }
    });
  };

  dropdownItems.forEach((item) => {
    const link = item.querySelector("a");
    if (!link) return;
    link.addEventListener("click", onDropdownClick);
    cleanups.push(() => link.removeEventListener("click", onDropdownClick));
  });

  return () => cleanups.forEach((cleanup) => cleanup());
}

function initNavicon(root: ParentNode) {
  const navicon = root.querySelector<HTMLElement>("#navicon");
  const overlay = root.querySelector<HTMLElement>(".overlayHeaderMenu");
  if (!navicon || !overlay) return undefined;

  const onNaviconClick = () => {
    navicon.classList.toggle("open");
    overlay.classList.toggle("open");
    document.body.classList.toggle("menu-open");
  };

  navicon.addEventListener("click", onNaviconClick);
  return () => {
    navicon.removeEventListener("click", onNaviconClick);
    navicon.classList.remove("open");
    overlay.classList.remove("open");
    document.body.classList.remove("menu-open");
  };
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

export function initHeaderNav(host: ParentNode) {
  const cleanupDropdown = initMobileServiceDropdown(host);
  const cleanupNavicon = initNavicon(host);

  return () => {
    cleanupDropdown?.();
    cleanupNavicon?.();
  };
}

/** @deprecated Use initHeaderNav inside an effect after header HTML is mounted */
export function useHeaderNav(host: HTMLElement | null) {
  // kept for compatibility if imported elsewhere
  void host;
}
