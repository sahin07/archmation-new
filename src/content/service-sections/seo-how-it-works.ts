import { Layout, Link2, MessageCircle, SearchCheck } from "lucide-react";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";

export const SEO_HOW_IT_WORKS_CONTENT: HowItWorksSectionContent = {
  label: "How it Works",
  title: "Rank in Just 4 Easy Steps!",
  steps: [
    {
      num: "01",
      icon: MessageCircle,
      title: "Discuss",
      desc: "Plan and prepare for SEO results for a time period",
    },
    {
      num: "02",
      icon: SearchCheck,
      title: "Keyword Research and Analysis",
      desc: "Conduct thorough keyword research to identify relevant search terms and phrases that your target audience is using",
    },
    {
      num: "03",
      icon: Layout,
      title: "On-Page Optimization",
      desc: "Implement on-page SEO techniques to optimize your website's content and structure for search engines",
    },
    {
      num: "04",
      icon: Link2,
      title: "Off-Page Optimization and Link Building",
      desc: "Develop a strategic link building strategy to acquire high-quality backlinks from reputable websites in your industry",
    },
  ],
};
