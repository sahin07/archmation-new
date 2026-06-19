import { BookOpen, MessageCircle, RefreshCw, Rocket } from "lucide-react";
import type { HowItWorksSectionContent } from "@/components/services/HowItWorksSection";

export const EDTECH_HOW_IT_WORKS_CONTENT: HowItWorksSectionContent = {
  label: "How it Works",
  title: "Get Results with our 4 Step Onboarding",
  steps: [
    {
      num: "01",
      icon: MessageCircle,
      title: "Free Consultation",
      desc: "Brainstorm and understand your pain points in your academic business",
    },
    {
      num: "02",
      icon: BookOpen,
      title: "Choose Methodology",
      desc: "Understand learning management systems and content pipelines",
    },
    {
      num: "03",
      icon: Rocket,
      title: "Implement Recommendations",
      desc: "Develop actionable recommendations based on methodology",
    },
    {
      num: "04",
      icon: RefreshCw,
      title: "Constantly Update",
      desc: "As and when new data sets arrive, constantly check and optimise your pedagogy and systems",
    },
  ],
};
