import type { AboutWhoContent } from "./types";

export const ABOUT_WHO_ARE_WE_CONTENT: AboutWhoContent = {
  label: "Who we are",
  title: "Digital Transformation",
  titleAccent: "Specialists",
  paragraphs: [
    {
      variant: "primary",
      segments: [
        {
          text: "We specialize in creating powerful digital marketing strategies tailored to your business needs. As one of the leading digital marketing companies in ",
        },
        { text: "Bangalore", highlight: "strong" },
        {
          text: ", we leverage cutting-edge technologies and proven methodologies to drive your business growth.",
        },
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
    href: "#accueilIndustries",
  },
};
