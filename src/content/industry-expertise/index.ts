import type { IndustrySlug } from "@/content/industries";
import type { IndustryExpertiseContent } from "@/content/industry-expertise/types";
import {
  B2B_EXPERTISE_CONTENT,
  MANUFACTURING_EXPERTISE_CONTENT,
  REAL_ESTATE_EXPERTISE_CONTENT,
} from "@/content/industry-expertise/shared";

export function getIndustryExpertiseContent(
  slug: IndustrySlug,
): IndustryExpertiseContent {
  switch (slug) {
    case "b2b":
      return B2B_EXPERTISE_CONTENT;
    case "real-estate":
      return REAL_ESTATE_EXPERTISE_CONTENT;
    case "manufacturing":
      return MANUFACTURING_EXPERTISE_CONTENT;
  }
}
