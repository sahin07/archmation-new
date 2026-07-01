import type { IndustryHeroContent } from "@/content/industry-heroes/types";

export const REAL_ESTATE_HERO_CONTENT = {
  slug: "real-estate",
  label: "Real Estate Marketing",
  titleBefore: "Strategic",
  titleAccent: "Real Estate Marketing Solutions",
  titleLine2: "for Growth",
  description:
    "We help real estate professionals grow with tailored marketing and branding strategies that attract qualified buyers and drive property sales",
  ctaLabel: "Contact us",
  ctaHref: "https://archmation.com/contact/",
  features: [
    {
      icon: "🔑",
      title: "Lead Generation",
      description: "Qualified property leads",
    },
    {
      icon: "📊",
      title: "Market Positioning",
      description: "Stand out in your market",
    },
    {
      icon: "🎯",
      title: "Digital Campaigns",
      description: "Reach serious buyers",
    },
    {
      icon: "🌟",
      title: "Content Marketing",
      description: "Showcase your portfolio",
    },
  ],
} satisfies IndustryHeroContent;
