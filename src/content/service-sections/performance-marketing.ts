import {
  Activity,
  BarChart3,
  Sparkles,
  Split,
  Target,
  type LucideIcon,
} from "lucide-react";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const performanceMarketingFeatures: Feature[] = [
  { icon: Target, label: "Targeted Advertising" },
  { icon: Activity, label: "Conversion Tracking" },
  { icon: Sparkles, label: "Dynamic Ad Creatives" },
  { icon: Split, label: "A/B Testing" },
  { icon: BarChart3, label: "Performance Analytics" },
];

export const PERFORMANCE_MARKETING_DEVELOPMENT_CONTENT: DevelopmentSectionContent =
  {
    title: "Partner with us for effective Google PPC advertising",
    description:
      "Let's take your brand to new heights with digital marketing strategies that deliver real results. At Archmation Studios, we blend smart audience targeting with optimization techniques to fuel your brand's growth in the digital world.",
    secondaryDescription:
      "We have worked with High Ticket Clients in Real Estate, Healthcare, Manufacturing, EdTech and more to deliver cutting-edge results in terms of lead generation and ROI",
    benefits: [
      "Strategic Campaign Optimization",
      "Targeted Audience Segmentation",
      "Conversion Rate Enhancement",
      "Scalable Growth Strategies",
      "Real-time Performance Monitoring",
      "Effective App Store Optimization (ASO)",
      "Optimized Ad-Spends & Bidding",
      "Proven Track Record",
    ],
    features: performanceMarketingFeatures,
    ctaLabel: "Download Brochure",
  };
