import type { IndustryServicesContent } from "@/content/industry-services/types";

export const REAL_ESTATE_SERVICES_CONTENT = {
  slug: "real-estate",
  title: "Boost your Real Estate Business with us",
  intro: [
    { text: "Whether you're an " },
    { text: "agent", variant: "bold" },
    { text: ", " },
    { text: "broker", variant: "bold" },
    { text: ", or " },
    { text: "developer", variant: "bold" },
    { text: ", we're here to help you attract " },
    { text: "more leads", variant: "accent" },
    { text: ", close " },
    { text: "more deals", variant: "accent" },
    { text: ", and grow your " },
    { text: "brand", variant: "accent" },
    { text: "." },
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
      icon: "🔍",
      title: "SEO & Google Ads",
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
      icon: "🤝",
      title: "Sales Solutions",
      description:
        "We help you track and nurture leads through every stage, from initial contact to final sale, ensuring no opportunity is missed. Streamline your sales now!",
    },
  ],
} satisfies IndustryServicesContent;
