import type { IndustryServicesContent } from "@/content/industry-services/types";

export const MANUFACTURING_SERVICES_CONTENT = {
  slug: "manufacturing",
  title: "A Marketing Partner for your Manufacturing Business",
  intro: [
    {
      text: "With deep industry insights and a results-driven approach, we create customized marketing solutions that resonate with your target audience and generate measurable growth",
    },
  ],
  services: [
    {
      id: 1,
      icon: "🌐",
      title: "Web Design",
      description:
        "A well-designed website serves as the pillar of your online presence. It enhances user experience and acts as a focal point for digital marketing.",
    },
    {
      id: 2,
      icon: "🧲",
      title: "Lead Generation",
      description:
        "SEO boosts organic traffic by optimizing your website's content, while Google Ads drives immediate traffic with targeted paid advertising",
    },
    {
      id: 3,
      icon: "📝",
      title: "Content Marketing",
      description:
        "We create valuable and industry-focused content for your target audience. From blogs to video content, brochures and more strategies designed for your business.",
    },
    {
      id: 4,
      icon: "🎯",
      title: "B2B Marketing Strategies",
      description:
        "Developing strategies that connect with decision-makers in your industry",
    },
  ],
} satisfies IndustryServicesContent;
