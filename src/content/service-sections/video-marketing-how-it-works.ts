import { ClipboardList, Scissors, Share2, Video } from "lucide-react";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";

export const VIDEO_MARKETING_HOW_IT_WORKS_CONTENT: HowItWorksSectionContent = {
  label: "How it Works",
  title: "From Script to Screen in 4 Easy Steps",
  steps: [
    {
      num: "01",
      icon: ClipboardList,
      title: "Pre-production",
      desc: "Plan and prepare for the video shoot by defining objectives",
    },
    {
      num: "02",
      icon: Video,
      title: "Production",
      desc: "Execute the planned shoot, capturing video footage according to the storyboard and script",
    },
    {
      num: "03",
      icon: Scissors,
      title: "Post-production",
      desc: "Edit and enhance the raw footage to create a polished final product",
    },
    {
      num: "04",
      icon: Share2,
      title: "Distribution",
      desc: "Once the video is finalized, it is ready for distribution in appropriate platforms such as websites, social media channels",
    },
  ],
};
