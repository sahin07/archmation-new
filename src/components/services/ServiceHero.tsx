import type { ServiceSlug } from "@/content/services";
import PerformanceMarketingHero from "@/components/services/heroes/PerformanceMarketingHero";
import SeoHero from "@/components/services/heroes/SeoHero";
import BrandingDesignHero from "@/components/services/heroes/BrandingDesignHero";
import VideoMarketingHero from "@/components/services/heroes/VideoMarketingHero";
import EdtechHero from "@/components/services/heroes/EdtechHero";
import WebTechSolutionsHero from "@/components/services/heroes/WebTechSolutionsHero";

type ServiceHeroProps = {
  slug: ServiceSlug;
};

/** Renders the service-specific hero for the current slug (not shared). */
export default function ServiceHero({ slug }: ServiceHeroProps) {
  switch (slug) {
    case "web-tech-solutions":
      return <WebTechSolutionsHero />;
    case "video-marketing":
      return <VideoMarketingHero />;
    case "performance-marketing":
      return <PerformanceMarketingHero />;
    case "seo":
      return <SeoHero />;
    case "branding-design":
      return <BrandingDesignHero />;
    case "edtech":
      return <EdtechHero />;
    default:
      return null;
  }
}
