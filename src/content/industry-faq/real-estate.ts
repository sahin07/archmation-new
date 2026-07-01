import type { IndustryFAQContent } from "@/content/industry-faq/types";

export const REAL_ESTATE_FAQ_CONTENT = {
  slug: "real-estate",
  eyebrow: "Real Estate FAQs",
  titleBefore: "Frequently Asked",
  titleAccent: "Questions",
  lede:
    "Learn how we help developers, brokers, and property brands generate leads, build visibility, and close more deals online.",
  ctaLabel: "Contact Us",
  ctaHref: "https://archmation.com/contact/",
  items: [
    {
      id: 1,
      question: "How do you market real estate projects?",
      answer:
        "We build integrated campaigns across SEO, Google Ads, social media, and content marketing — designed to showcase properties, capture buyer intent, and drive qualified enquiries.",
      icon: "home",
    },
    {
      id: 2,
      question: "Can you help us generate property leads?",
      answer:
        "Absolutely. We create landing pages, run targeted ad campaigns, and optimize your website to convert visitors into leads. Our clients have generated hundreds of qualified property enquiries.",
      icon: "target",
    },
    {
      id: 3,
      question: "What digital channels work best for real estate?",
      answer:
        "Google Search and Meta ads are highly effective for property marketing. We also leverage SEO, video content, and email nurturing to keep prospects engaged throughout long buying cycles.",
      icon: "megaphone",
    },
    {
      id: 4,
      question: "Do you handle branding for real estate developers?",
      answer:
        "Yes. From logo design and brand identity to brochures, signage, and digital assets — we help developers present a premium, trustworthy brand that resonates with buyers.",
      icon: "building",
    },
    {
      id: 5,
      question: "How do you measure ROI on real estate campaigns?",
      answer:
        "We track cost per lead, conversion rates, website traffic, and campaign attribution. Regular reporting keeps you informed on what's working and where to optimize spend.",
      icon: "bar-chart",
    },
  ],
} satisfies IndustryFAQContent;
