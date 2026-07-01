import type { IndustrySlug } from "@/content/industries";
import type { IndustrySolutionsContent } from "@/content/industry-solutions/types";
import { B2B_SOLUTIONS_CONTENT, REAL_ESTATE_SOLUTIONS_CONTENT } from "@/content/industry-solutions/shared";
import { MANUFACTURING_SOLUTIONS_CONTENT } from "@/content/industry-solutions/manufacturing";

export function getIndustrySolutionsContent(
  slug: IndustrySlug,
): IndustrySolutionsContent {
  switch (slug) {
    case "b2b":
      return B2B_SOLUTIONS_CONTENT;
    case "real-estate":
      return REAL_ESTATE_SOLUTIONS_CONTENT;
    case "manufacturing":
      return MANUFACTURING_SOLUTIONS_CONTENT;
  }
}
