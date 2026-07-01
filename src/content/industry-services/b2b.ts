import type { IndustryServicesContent } from "@/content/industry-services/types";

export const B2B_SERVICES_CONTENT = {
  slug: "b2b",
  title: "We focus on driving growth and achieving your business goals",
  intro: [
    {
      text: "Our digital marketing solutions—SEO, PPC, email marketing, and social media—amplify your reach and create meaningful interactions with your clients.",
    },
  ],
  services: [
    {
      id: 1,
      icon: "🌐",
      title: "Web Design",
      description:
        "A well-designed website serves as the pillar of your online presence. It enhances user experience and acts as a focal point for digital marketing",
    },
    {
      id: 2,
      icon: "🧲",
      title: "Lead Generation",
      description:
        "SEO boosts organic traffic by optimizing your website's content, while Google Ads drives traffic and lead gen with targeted paid advertising",
    },
    {
      id: 3,
      icon: "📝",
      title: "Content Marketing",
      description:
        "We create valuable and industry-focused content for your target audience. From blogs to video content, brochures and more strategies designed for your business",
    },
    {
      id: 4,
      icon: "💼",
      title: "Sales Solutions",
      description:
        "We help you track and nurture leads through every stage, from initial contact to final sale, ensuring no opportunity is missed",
    },
  ],
} satisfies IndustryServicesContent;
