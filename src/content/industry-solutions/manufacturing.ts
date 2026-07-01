import type { IndustrySolutionsContent } from "@/content/industry-solutions/types";

export const MANUFACTURING_SOLUTIONS_CONTENT = {
  slug: "manufacturing",
  title: "Ready to take your marketing to the next level?",
  intro: [
    {
      text: "Get in touch with us today to discuss how we can help your business grow",
    },
  ],
  ctaLabel: "Contact us",
  ctaHref: "https://archmation.com/contact/",
  solutions: [
    {
      id: 1,
      icon: "⚙️",
      title: "Strategy Development",
      description:
        "Our market research and strategic planning sets the foundation for sustained growth that delivers measurable results.",
    },
    {
      id: 2,
      icon: "📝",
      title: "Content Creation",
      description:
        "We work on industry-specific design and content customized to resonate with your audience and drive meaningful engagement.",
    },
    {
      id: 3,
      icon: "📈",
      title: "Proven Results",
      description:
        "Our data-driven strategies have helped our clients increase their market share and grow their revenue",
    },
    {
      id: 4,
      icon: "📊",
      title: "Tracking and Optimization",
      description:
        "Our data-driven tracking and advanced analytics helps us deliver consistent and impactful results throughout.",
    },
  ],
} satisfies IndustrySolutionsContent;
