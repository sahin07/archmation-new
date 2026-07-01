import type { IndustryHeroContent } from "@/content/industry-heroes/types";

export const B2B_HERO_CONTENT = {
  slug: "b2b",
  label: "B2B Marketing",
  titleBefore: "Strategic",
  titleAccent: "B2B Marketing Solutions",
  titleLine2: "for Growth",
  description:
    "We help B2B companies grow with tailored marketing and branding strategies that generate qualified leads and drive measurable results",
  ctaLabel: "Contact us",
  ctaHref: "https://archmation.com/contact/",
  features: [
    {
      icon: "🎯",
      title: "Lead Generation",
      description: "Quality B2B prospects",
    },
    {
      icon: "📊",
      title: "Account-Based Marketing",
      description: "Target decision-makers",
    },
    {
      icon: "🚀",
      title: "Brand Strategy",
      description: "Strengthen market positioning",
    },
    {
      icon: "🤝",
      title: "Pipeline Growth",
      description: "Scale revenue faster",
    },
  ],
} satisfies IndustryHeroContent;
