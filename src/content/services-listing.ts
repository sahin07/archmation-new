import type { ServiceSlug } from "@/content/services";
import { SERVICE_SLUGS } from "@/content/services";

export type ServicesListingCard = {
  slug: ServiceSlug;
  title: string;
  description: string;
};

export const SERVICES_LISTING_CARDS: readonly ServicesListingCard[] = [
  {
    slug: "web-tech-solutions",
    title: "Web/Tech Solutions",
    description:
      "We craft websites, apps, and tech solutions that not only look stunning but also function seamlessly to enhance user experience and drive engagement",
  },
  {
    slug: "video-marketing",
    title: "Video Marketing",
    description:
      "We combine the best of performance-driven Video marketing to highlight your brand's legacy and also generate ROI",
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Maximize your online presence and reach your target audience effectively through our strategic Google and Meta Ads services",
  },
  {
    slug: "seo",
    title: "Search Engine Optimization",
    description:
      "We help your website to rank higher on search engine results pages, helping you reach more potential customers with our website SEO services",
  },
  {
    slug: "branding-design",
    title: "Branding & Design",
    description:
      "We can help craft a memorable brand identity that reflects your values and resonates with your target audience",
  },
  {
    slug: "edtech",
    title: "Education",
    description:
      "With our 8+ years of experience in powering EdTechs, Schools and Coaching Centres, you can boost your Education Business",
  },
] as const;

/** Preserve canonical service order even if content array is edited */
export const ORDERED_SERVICES_LISTING_CARDS = SERVICE_SLUGS.map((slug) => {
  const card = SERVICES_LISTING_CARDS.find((item) => item.slug === slug);
  if (!card) {
    throw new Error(`Missing services listing content for slug: ${slug}`);
  }
  return card;
});
