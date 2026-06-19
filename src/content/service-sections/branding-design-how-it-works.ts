import { Lightbulb, MessageCircle, Palette, Rocket } from "lucide-react";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";

export const BRANDING_DESIGN_HOW_IT_WORKS_CONTENT: HowItWorksSectionContent = {
  label: "How it Works",
  title: "Craft Your Brand in Just 4 Simple Steps!",
  steps: [
    {
      num: "01",
      icon: MessageCircle,
      title: "Detailed Consult",
      desc: "Begin with an engaging discussion where we uncover your brand's essence and aspirations",
    },
    {
      num: "02",
      icon: Lightbulb,
      title: "Brand Vision and Mission",
      desc: "Our team delves deep into market research, defining your target audience and identifying unique brand attributes",
    },
    {
      num: "03",
      icon: Palette,
      title: "Ideation & Iterations",
      desc: "Through collaborative feedback loops, we refine and enhance your brand elements to ensure they resonate with your audience",
    },
    {
      num: "04",
      icon: Rocket,
      title: "Final Delivery",
      desc: "Experience the excitement of launching your brand identity across platforms, ensuring a memorable debut",
    },
  ],
};
