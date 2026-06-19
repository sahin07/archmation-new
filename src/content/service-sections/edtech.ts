import { Cpu, PlayCircle, Users, type LucideIcon } from "lucide-react";
import type { DevelopmentSectionContent } from "@/components/services/DevelopmentSection";

type Feature = {
  icon: LucideIcon;
  label: string;
};

const edtechFeatures: Feature[] = [
  { icon: Cpu, label: "Smart Tech Incorporation" },
  { icon: PlayCircle, label: "Interactive Multimedia Content" },
  { icon: Users, label: "Community Engagement" },
];

export const EDTECH_DEVELOPMENT_CONTENT: DevelopmentSectionContent = {
  title: "The Two Pronged Edge",
  description:
    "We help you realise both short term and long term goals for your institution by combining High Performance Marketing and Blended Learning",
  secondaryDescription:
    "From decoding student preferences to anticipating industry dynamics, our team employs state-of-the-art tech and marketing solutions. A website, LMS, Social Media Marketing for Admissions, you name it and we are ready with a manuscript. Partner with us for the best digital education solutions, including online learning platforms, virtual classrooms, and interactive learning tools.",
  benefits: [
    "Video Marketing",
    "Performance Marketing",
    "Social Media Marketing",
    "Strategic Guidance",
    "Smart board integrations",
    "Educator Transformation Plans",
    "AI assisted learning simulations and doubt solving",
    "Community management for students",
  ],
  features: edtechFeatures,
  ctaLabel: "Download Brochure",
};
