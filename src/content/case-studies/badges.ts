export function getCategoryBadgeClass(categorySlug: string): string {
  switch (categorySlug) {
    case "blog":
      return "archmation-blogs__badge--blog";
    case "case-study":
      return "archmation-blogs__badge--case-study";
    default:
      return "archmation-blogs__badge--default";
  }
}

export function resolveCategorySlug(
  category: string,
  categorySlug?: string,
): string {
  if (categorySlug) {
    return categorySlug;
  }

  const normalized = category.trim().toLowerCase();
  if (normalized === "blog") {
    return "blog";
  }
  if (normalized === "case study") {
    return "case-study";
  }

  return "default";
}
