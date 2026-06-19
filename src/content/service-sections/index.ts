import type { ServiceSlug } from "@/content/services";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";
import type { TimelyDeliverySectionContent } from "@/components/services/TimelyDeliverySection";
import { VIDEO_MARKETING_DEVELOPMENT_CONTENT } from "@/content/service-sections/video-marketing";
import { PERFORMANCE_MARKETING_DEVELOPMENT_CONTENT } from "@/content/service-sections/performance-marketing";
import { SEO_DEVELOPMENT_CONTENT } from "@/content/service-sections/seo";
import { BRANDING_DESIGN_DEVELOPMENT_CONTENT } from "@/content/service-sections/branding-design";
import { EDTECH_DEVELOPMENT_CONTENT } from "@/content/service-sections/edtech";
import { EDTECH_HOW_IT_WORKS_CONTENT } from "@/content/service-sections/edtech-how-it-works";
import { EDTECH_TIMELY_DELIVERY_CONTENT } from "@/content/service-sections/edtech-timely-delivery";
import { BRANDING_DESIGN_HOW_IT_WORKS_CONTENT } from "@/content/service-sections/branding-design-how-it-works";
import { BRANDING_DESIGN_TIMELY_DELIVERY_CONTENT } from "@/content/service-sections/branding-design-timely-delivery";
import { VIDEO_MARKETING_HOW_IT_WORKS_CONTENT } from "@/content/service-sections/video-marketing-how-it-works";
import { PERFORMANCE_MARKETING_HOW_IT_WORKS_CONTENT } from "@/content/service-sections/performance-marketing-how-it-works";
import { PERFORMANCE_MARKETING_TIMELY_DELIVERY_CONTENT } from "@/content/service-sections/performance-marketing-timely-delivery";
import { SEO_HOW_IT_WORKS_CONTENT } from "@/content/service-sections/seo-how-it-works";
import { SEO_TIMELY_DELIVERY_CONTENT } from "@/content/service-sections/seo-timely-delivery";

export function getDevelopmentSectionContent(
  slug: ServiceSlug,
): Partial<DevelopmentSectionContent> | undefined {
  switch (slug) {
    case "video-marketing":
      return VIDEO_MARKETING_DEVELOPMENT_CONTENT;
    case "performance-marketing":
      return PERFORMANCE_MARKETING_DEVELOPMENT_CONTENT;
    case "seo":
      return SEO_DEVELOPMENT_CONTENT;
    case "branding-design":
      return BRANDING_DESIGN_DEVELOPMENT_CONTENT;
    case "edtech":
      return EDTECH_DEVELOPMENT_CONTENT;
    default:
      return undefined;
  }
}

export function getHowItWorksSectionContent(
  slug: ServiceSlug,
): HowItWorksSectionContent | undefined {
  switch (slug) {
    case "video-marketing":
      return VIDEO_MARKETING_HOW_IT_WORKS_CONTENT;
    case "performance-marketing":
      return PERFORMANCE_MARKETING_HOW_IT_WORKS_CONTENT;
    case "seo":
      return SEO_HOW_IT_WORKS_CONTENT;
    case "branding-design":
      return BRANDING_DESIGN_HOW_IT_WORKS_CONTENT;
    case "edtech":
      return EDTECH_HOW_IT_WORKS_CONTENT;
    default:
      return undefined;
  }
}

export function getTimelyDeliverySectionContent(
  slug: ServiceSlug,
): TimelyDeliverySectionContent | undefined {
  switch (slug) {
    case "performance-marketing":
      return PERFORMANCE_MARKETING_TIMELY_DELIVERY_CONTENT;
    case "seo":
      return SEO_TIMELY_DELIVERY_CONTENT;
    case "branding-design":
      return BRANDING_DESIGN_TIMELY_DELIVERY_CONTENT;
    case "edtech":
      return EDTECH_TIMELY_DELIVERY_CONTENT;
    default:
      return undefined;
  }
}
