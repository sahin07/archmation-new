import {
  Compass,
  Palette,
  PenLine,
  Rocket,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const brandingDesignFeatures: Feature[] = [
  { icon: Sparkles, label: "Sparkling Consult" },
  { icon: Compass, label: "Enlightening Exploration" },
  { icon: Palette, label: "Craft & Creation" },
  { icon: PenLine, label: "Tweaks & Touch-ups" },
  { icon: Rocket, label: "Grand Reveals" },
];

export const BRANDING_DESIGN_DEVELOPMENT_CONTENT: DevelopmentSectionContent = {
  title: "Our Midas Touch",
  description:
    "Your secret sauce for killer brand identities that pack a punch! We mix strategic smarts with creative flair to make your brand shine bright and score big wins. Let's team up and make magic happen!",
  secondaryDescription:
    "Transform your business with the best branding company and design company in Bangalore",
  benefits: [
    "Feature Differentiation",
    "Audience Engagement Strategies",
    "Conversion Optimization",
    "Scalable Brand Growth",
    "Real-time Brand Monitoring",
    "Brand Store Optimization (BSO)",
    "Cost-Effective Brand Development",
    "Resource Management Excellence",
  ],
  features: brandingDesignFeatures,
  ctaLabel: "Download Brochure",
};
