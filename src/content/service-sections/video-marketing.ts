import {
  Camera,
  Clapperboard,
  MapPin,
  Palette,
  Play,
  type LucideIcon,
} from "lucide-react";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const videoMarketingFeatures: Feature[] = [
  { icon: MapPin, label: "Multi-city Presence" },
  { icon: Camera, label: "State-of-the-art Cameras" },
  { icon: Palette, label: "Adobe Creative Suite Workflow" },
  { icon: Clapperboard, label: "Different Video Formats" },
  { icon: Play, label: "Digital First Approach" },
];

export const VIDEO_MARKETING_DEVELOPMENT_CONTENT: DevelopmentSectionContent = {
  title: "We have generated 10M+ Views on Youtube",
  description:
    "We work closely with you to understand your brand's values, personality, and unique selling points. This collaborative process allows us to develop moving visuals that authentically represent your brand's needs,",
  secondaryDescription:
    "Partner with us and unleash the full potential of your brand through the magic of video marketing and SEO!",
  benefits: [
    "Engaging Storytelling",
    "High Impact Visuals",
    "Clear Call to Actions",
    "Channel Based Shooting",
    "Distribution in Different Formats",
    "Full Spectrum Production",
  ],
  features: videoMarketingFeatures,
  ctaLabel: "Download Brochure",
};
