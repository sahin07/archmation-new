import { Compass, Megaphone, TrendingUp, Zap } from "lucide-react";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";

export const PERFORMANCE_MARKETING_HOW_IT_WORKS_CONTENT: HowItWorksSectionContent =
  {
    label: "How it Works",
    title: "Our Simple 4-Way Performance Framework",
    steps: [
      {
        num: "01",
        icon: Compass,
        title: "Strategy Consultation",
        desc: "Let's kick things off with a deep dive into your business goals and who you're trying to reach",
      },
      {
        num: "02",
        icon: Megaphone,
        title: "Campaign Design",
        desc: "We'll put our digital marketing expertise to work, tailoring campaigns across platforms for maximum impact",
      },
      {
        num: "03",
        icon: Zap,
        title: "Testing & Execution",
        desc: "Sit back as we handle the launch and execution of your campaigns, ensuring they hit the mark",
      },
      {
        num: "04",
        icon: TrendingUp,
        title: "Optimization & Support",
        desc: "We're here for the long haul, providing ongoing optimization and support to keep your campaigns on track for success",
      },
    ],
  };
