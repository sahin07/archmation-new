import type { AboutWhoContent } from "@/content/about/types";

export const HOME_ABOUT_CONTENT: AboutWhoContent = {
  label: "Who Are We",
  title: "Pioneers of a",
  titleAccent: "Digital Future",
  paragraphs: [
    {
      variant: "primary",
      segments: [
        {
          text: "Our leads generation services offer you increased number of targeted and qualified leads in ",
        },
        { text: "B2B", highlight: "strong" },
        { text: " and " },
        { text: "B2C", highlight: "strong" },
        {
          text: " markets. We serve as your first step to get closer to the customer, based on the interest or inquiry of the products/services shown by them.",
        },
      ],
    },
    {
      variant: "muted",
      segments: [
        { text: "We provide " },
        { text: "pay per lead services", highlight: "soft" },
        { text: ", " },
        { text: "video marketing", highlight: "soft" },
        { text: ", " },
        { text: "SEO", highlight: "soft" },
        { text: " and " },
        { text: "design services", highlight: "soft" },
        { text: " to help in growth of online businesses." },
      ],
    },
  ],
  image: {
    src: "/images/homepage.jpg",
    alt: "Archmation team at an event",
  },
  imageQuoteLines: ["To look", "without fear"],
  badgeText: "Digital Growth, Delivered. • Digital Growth, Delivered. •",
  cta: {
    label: "Discover More",
    href: "/about-us",
  },
};
