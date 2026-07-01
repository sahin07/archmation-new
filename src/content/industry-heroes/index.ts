import type { IndustrySlug } from "@/content/industries";
import type { IndustryHeroContent } from "@/content/industry-heroes/types";
import { B2B_HERO_CONTENT } from "@/content/industry-heroes/b2b";
import { MANUFACTURING_HERO_CONTENT } from "@/content/industry-heroes/manufacturing";
import { REAL_ESTATE_HERO_CONTENT } from "@/content/industry-heroes/real-estate";

export function getIndustryHeroContent(
  slug: IndustrySlug,
): IndustryHeroContent {
  switch (slug) {
    case "b2b":
      return B2B_HERO_CONTENT;
    case "real-estate":
      return REAL_ESTATE_HERO_CONTENT;
    case "manufacturing":
      return MANUFACTURING_HERO_CONTENT;
  }
}
