export const SERVICE_SLUGS = [
  "web-tech-solutions",
  "video-marketing",
  "performance-marketing",
  "seo",
  "branding-design",
  "edtech",
] as const;

export type ServiceSlug = (typeof SERVICE_SLUGS)[number];

export type ServiceNavItem = {
  slug: ServiceSlug;
  label: string;
  menuItemId: string;
};

/** Single source of truth for header dropdown + internal service links */
export const SERVICE_NAV: readonly ServiceNavItem[] = [
  {
    slug: "web-tech-solutions",
    label: "Website and Tech Solutions",
    menuItemId: "menu-item-324",
  },
  {
    slug: "video-marketing",
    label: "Video Marketing",
    menuItemId: "menu-item-325",
  },
  {
    slug: "performance-marketing",
    label: "Performance Marketing",
    menuItemId: "menu-item-326",
  },
  {
    slug: "seo",
    label: "Search Engine Optimization",
    menuItemId: "menu-item-328",
  },
  {
    slug: "branding-design",
    label: "Branding & Design",
    menuItemId: "menu-item-1187",
  },
  {
    slug: "edtech",
    label: "EdTech Solutions",
    menuItemId: "menu-item-1423",
  },
] as const;

export const SERVICE_BASE_PATH = "/our-services";

export function getServiceHref(slug: ServiceSlug): string {
  return `${SERVICE_BASE_PATH}/${slug}`;
}

/** Parent "Our Services" menu link */
export const SERVICES_MENU_HREF = SERVICE_BASE_PATH;

export function isServiceSlug(slug: string): slug is ServiceSlug {
  return SERVICE_SLUGS.includes(slug as ServiceSlug);
}

export function buildServiceSubmenuHtml(): string {
  return SERVICE_NAV.map(
    ({ slug, label, menuItemId }) =>
      `<li id="${menuItemId}" class="menu-item menu-item-type-post_type menu-item-object-page ${menuItemId}"><a href="${getServiceHref(slug)}"><span>${label.replace("&", "&amp;")}</span></a></li>`,
  ).join("\n");
}

export function injectServiceNavLinks(html: string): string {
  const submenuStart = "<!-- @serviceNavSubmenu -->";
  const submenuEnd = "<!-- @serviceNavSubmenuEnd -->";
  const startIdx = html.indexOf(submenuStart);
  const endIdx = html.indexOf(submenuEnd);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    throw new Error(
      "home-body.html must contain @serviceNavSubmenu markers for dynamic service links.",
    );
  }

  const submenu = `<ul class="sub-menu">\n${buildServiceSubmenuHtml()}\n</ul>`;

  let result =
    html.slice(0, startIdx + submenuStart.length) +
    "\n" +
    submenu +
    "\n" +
    html.slice(endIdx);

  result = result.replace(
    /(<li id="menu-item-22"[^>]*><a href=")[^"]*(" aria-haspopup="true")/,
    `$1${SERVICES_MENU_HREF}$2`,
  );

  return result;
}
