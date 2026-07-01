import type { IndustrySlug } from "@/content/industries";
import type { IndustryServicesContent } from "@/content/industry-services/types";
import { B2B_SERVICES_CONTENT } from "@/content/industry-services/b2b";
import { MANUFACTURING_SERVICES_CONTENT } from "@/content/industry-services/manufacturing";
import { REAL_ESTATE_SERVICES_CONTENT } from "@/content/industry-services/real-estate";

export function getIndustryServicesContent(
  slug: IndustrySlug,
): IndustryServicesContent | null {
  switch (slug) {
    case "b2b":
      return B2B_SERVICES_CONTENT;
    case "real-estate":
      return REAL_ESTATE_SERVICES_CONTENT;
    case "manufacturing":
      return MANUFACTURING_SERVICES_CONTENT;
    default:
      return null;
  }
}
