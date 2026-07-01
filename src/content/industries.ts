export const INDUSTRY_SLUGS = ["b2b", "real-estate", "manufacturing"] as const;

export type IndustrySlug = (typeof INDUSTRY_SLUGS)[number];

export type IndustryNavItem = {
  slug: IndustrySlug;
  label: string;
  menuItemId: string;
};

export const INDUSTRY_NAV: readonly IndustryNavItem[] = [
  {
    slug: "b2b",
    label: "B2B",
    menuItemId: "menu-item-2001",
  },
  {
    slug: "real-estate",
    label: "Real Estate",
    menuItemId: "menu-item-2002",
  },
  {
    slug: "manufacturing",
    label: "Manufacturing",
    menuItemId: "menu-item-2003",
  },
] as const;

export const INDUSTRY_BASE_PATH = "/our-industries";

export const INDUSTRIES_MENU_ITEM_ID = "menu-item-2000";

export function getIndustryHref(slug: IndustrySlug): string {
  return `${INDUSTRY_BASE_PATH}/${slug}`;
}

export const INDUSTRIES_MENU_HREF = getIndustryHref(INDUSTRY_SLUGS[0]);

export function isIndustrySlug(slug: string): slug is IndustrySlug {
  return INDUSTRY_SLUGS.includes(slug as IndustrySlug);
}

export function buildIndustrySubmenuHtml(): string {
  return INDUSTRY_NAV.map(
    ({ slug, label, menuItemId }) =>
      `<li id="${menuItemId}" class="menu-item menu-item-type-post_type menu-item-object-page ${menuItemId}"><a href="${getIndustryHref(slug)}"><span>${label}</span></a></li>`,
  ).join("\n");
}

export function injectIndustryNavLinks(html: string): string {
  const submenuStart = "<!-- @industryNavSubmenu -->";
  const submenuEnd = "<!-- @industryNavSubmenuEnd -->";
  const startIdx = html.indexOf(submenuStart);
  const endIdx = html.indexOf(submenuEnd);

  if (startIdx === -1 || endIdx === -1 || endIdx <= startIdx) {
    return html;
  }

  const submenu = `<ul class="sub-menu">\n${buildIndustrySubmenuHtml()}\n</ul>`;

  let result =
    html.slice(0, startIdx + submenuStart.length) +
    "\n" +
    submenu +
    "\n" +
    html.slice(endIdx);

  result = result.replace(
    new RegExp(
      `(<li id="${INDUSTRIES_MENU_ITEM_ID}"[^>]*><a href=")[^"]*(" aria-haspopup="true")`,
    ),
    `$1${INDUSTRIES_MENU_HREF}$2`,
  );

  return result;
}
