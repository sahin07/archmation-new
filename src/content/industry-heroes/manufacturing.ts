import type { IndustryHeroContent } from "@/content/industry-heroes/types";

export const MANUFACTURING_HERO_CONTENT = {
  slug: "manufacturing",
  label: "Manufacturing Marketing",
  titleBefore: "Engineer Your",
  titleAccent: "Manufacturing Business",
  titleLine2: "with Us!",
  description:
    "We deliver strategic marketing solutions that drive results for the manufacturing industry",
  ctaLabel: "Contact us",
  ctaHref: "https://archmation.com/contact/",
  features: [
    {
      icon: "🏭",
      title: "Industrial Marketing",
      description: "Reach key buyers",
    },
    {
      icon: "⚙️",
      title: "Brand Strategy",
      description: "Position your capabilities",
    },
    {
      icon: "📈",
      title: "Lead Generation",
      description: "Fill your sales pipeline",
    },
    {
      icon: "🌐",
      title: "Digital Presence",
      description: "Showcase your expertise",
    },
  ],
} satisfies IndustryHeroContent;
