import type { IndustrySlug } from "@/content/industries";
import type { IndustryFAQContent } from "@/content/industry-faq/types";
import { B2B_FAQ_CONTENT } from "@/content/industry-faq/b2b";
import { MANUFACTURING_FAQ_CONTENT } from "@/content/industry-faq/manufacturing";
import { REAL_ESTATE_FAQ_CONTENT } from "@/content/industry-faq/real-estate";

export function getIndustryFAQContent(slug: IndustrySlug): IndustryFAQContent {
  switch (slug) {
    case "b2b":
      return B2B_FAQ_CONTENT;
    case "real-estate":
      return REAL_ESTATE_FAQ_CONTENT;
    case "manufacturing":
      return MANUFACTURING_FAQ_CONTENT;
  }
}

export type {
  IndustryFAQContent,
  IndustryFAQIcon,
  IndustryFAQItem,
} from "@/content/industry-faq/types";
