import {
  BLOGS_BASE_PATH,
  CASE_STUDIES_ARCHIVE_PATH,
  GOOD_READS_MENU_ITEM_ID,
} from "@/content/case-studies";
import {
  INDUSTRIES_MENU_ITEM_ID,
  INDUSTRY_BASE_PATH,
  INDUSTRY_NAV,
  isIndustrySlug,
} from "@/content/industries";
import {
  SERVICE_BASE_PATH,
  SERVICE_NAV,
  isServiceSlug,
} from "@/content/services";

const HOME_ITEM_ID = "menu-item-19";
const ABOUT_ITEM_ID = "menu-item-20";
const CONTACT_ITEM_ID = "menu-item-21";
const LEARN_ITEM_ID = "menu-item-2024";
const SERVICES_ITEM_ID = "menu-item-22";

const ACTIVE_ITEM_CLASSES = ["current-menu-item", "current_page_item"] as const;
const ACTIVE_ANCESTOR_CLASSES = [
  "current-menu-ancestor",
  "current_page_parent",
  "current-page-ancestor",
] as const;

function clearMenuActiveState(menu: Element) {
  menu.querySelectorAll("li").forEach((li) => {
    li.classList.remove(
      ...ACTIVE_ITEM_CLASSES,
      ...ACTIVE_ANCESTOR_CLASSES,
      "menu-item-home",
      "is-open",
    );
    li.querySelector("a")?.removeAttribute("aria-current");
    if (li.classList.contains("menu-item-has-children")) {
      li.querySelector("a")?.setAttribute("aria-expanded", "false");
    }
  });
}

function markItemActive(li: Element | null) {
  if (!li) return;
  li.classList.add(...ACTIVE_ITEM_CLASSES);
  li.querySelector("a")?.setAttribute("aria-current", "page");
}

function markItemAncestor(li: Element | null) {
  if (!li) return;
  li.classList.add(...ACTIVE_ANCESTOR_CLASSES);
}

function normalizePathname(pathname: string): string {
  const path = pathname.split("?")[0]?.split("#")[0] ?? pathname;
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }
  return path || "/";
}

function syncServiceNavActive(menu: Element, normalizedPath: string) {
  const services = menu.querySelector(`#${SERVICES_ITEM_ID}`);
  markItemAncestor(services);

  const slug = normalizedPath
    .slice(SERVICE_BASE_PATH.length + 1)
    .split("/")[0];
  if (slug && isServiceSlug(slug)) {
    const navItem = SERVICE_NAV.find((item) => item.slug === slug);
    const child = navItem
      ? menu.querySelector(`#${navItem.menuItemId}`)
      : null;
    markItemActive(child);
  }
}

function syncIndustryNavActive(menu: Element, normalizedPath: string) {
  const industries = menu.querySelector(`#${INDUSTRIES_MENU_ITEM_ID}`);
  markItemAncestor(industries);

  const slug = normalizedPath
    .slice(INDUSTRY_BASE_PATH.length + 1)
    .split("/")[0];
  if (slug && isIndustrySlug(slug)) {
    const navItem = INDUSTRY_NAV.find((item) => item.slug === slug);
    const child = navItem
      ? menu.querySelector(`#${navItem.menuItemId}`)
      : null;
    markItemActive(child);
  }
}

/** Sync WordPress-style active classes on #header-menu from the current pathname. */
export function syncHeaderNavActive(root: ParentNode, pathname: string) {
  const menu = root.querySelector("#header-menu");
  if (!menu) return;

  const normalizedPath = normalizePathname(pathname);

  clearMenuActiveState(menu);

  if (normalizedPath === "/") {
    const home = menu.querySelector(`#${HOME_ITEM_ID}`);
    home?.classList.add("menu-item-home", ...ACTIVE_ITEM_CLASSES);
    home?.querySelector("a")?.setAttribute("aria-current", "page");
    return;
  }

  if (normalizedPath.startsWith(SERVICE_BASE_PATH)) {
    syncServiceNavActive(menu, normalizedPath);
    return;
  }

  if (normalizedPath.startsWith(INDUSTRY_BASE_PATH)) {
    syncIndustryNavActive(menu, normalizedPath);
    return;
  }

  if (normalizedPath === "/about-us") {
    markItemActive(menu.querySelector(`#${ABOUT_ITEM_ID}`));
    return;
  }

  if (normalizedPath === "/contact-us") {
    markItemActive(menu.querySelector(`#${CONTACT_ITEM_ID}`));
    return;
  }

  if (normalizedPath === "/learn-marketing") {
    markItemActive(menu.querySelector(`#${LEARN_ITEM_ID}`));
    return;
  }

  if (
    normalizedPath === CASE_STUDIES_ARCHIVE_PATH ||
    normalizedPath.startsWith(`${BLOGS_BASE_PATH}/`)
  ) {
    markItemActive(menu.querySelector(`#${GOOD_READS_MENU_ITEM_ID}`));
  }
}
