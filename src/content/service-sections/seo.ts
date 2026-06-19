import {
  Bot,
  RefreshCw,
  SearchCheck,
  Settings2,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const seoFeatures: Feature[] = [
  { icon: Settings2, label: "Latest Tools" },
  { icon: Bot, label: "AI Assisted Strategies" },
  { icon: SearchCheck, label: "High Performing Keywords" },
  { icon: RefreshCw, label: "Continuous Updation" },
  { icon: TrendingUp, label: "Google Trends Ready" },
];

export const SEO_DEVELOPMENT_CONTENT: DevelopmentSectionContent = {
  title: "Lets boost your visibility and drive organic traffic",
  description:
    "Our team of SEO experts is dedicated to optimizing your website's visibility, driving organic traffic, and boosting your search engine rankings.",
  secondaryDescription:
    "From comprehensive keyword research and on-page optimization to strategic link building and content creation, we employ cutting-edge SEO techniques to ensure your website stands out in the competitive digital landscape.",
  benefits: [
    "Targeted Keyword Research",
    "Technical Optimization",
    "Strategic Link Building",
    "Content Optimization",
    "Performance Tracking",
    "On-Page SEO Enhancements",
    "Off-Page SEO Strategies",
    "Local SEO Optimization",
  ],
  features: seoFeatures,
  ctaLabel: "Download Brochure",
};
