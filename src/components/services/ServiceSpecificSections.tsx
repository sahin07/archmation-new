import type { ServiceSlug } from "@/content/services";
import {
  LONG_FORM_VIDEO_GALLERY_CONTENT,
  SHORT_FORM_VIDEO_GALLERY_CONTENT,
} from "@/content/video-gallery";
import ServiceVideoGallerySection from "@/components/services/ServiceVideoGallerySection";
import BrandingPortfolioSection from "@/components/services/BrandingPortfolioSection";
import GraphicDesignPortfolioSection from "@/components/services/GraphicDesignPortfolioSection";

type ServiceSpecificSectionsProps = {
  slug: ServiceSlug;
};

/** Service-only sections before shared blocks (not shared across all service pages). */
export default function ServiceSpecificSections({
  slug,
}: ServiceSpecificSectionsProps) {
  switch (slug) {
    case "video-marketing":
      return (
        <ServiceVideoGallerySection content={SHORT_FORM_VIDEO_GALLERY_CONTENT} />
      );
    default:
      return null;
  }
}

/** Long-form gallery after development on video-marketing only. */
export function ServiceVideoMarketingLongFormSection({
  slug,
}: ServiceSpecificSectionsProps) {
  if (slug !== "video-marketing") {
    return null;
  }

  return (
    <ServiceVideoGallerySection content={LONG_FORM_VIDEO_GALLERY_CONTENT} />
  );
}

/** Branding portfolio grids before How It Works on branding-design only. */
export function ServiceBrandingPortfolioSection({
  slug,
}: ServiceSpecificSectionsProps) {
  if (slug !== "branding-design") {
    return null;
  }

  return (
    <>
      <BrandingPortfolioSection />
      <GraphicDesignPortfolioSection />
    </>
  );
}
