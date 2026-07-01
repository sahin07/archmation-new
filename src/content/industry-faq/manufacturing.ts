import type { IndustryFAQContent } from "@/content/industry-faq/types";

export const MANUFACTURING_FAQ_CONTENT = {
  slug: "manufacturing",
  eyebrow: "Manufacturing FAQs",
  titleBefore: "Frequently Asked",
  titleAccent: "Questions",
  lede:
    "Find out how we help manufacturers reach industrial buyers, strengthen their digital presence, and grow revenue.",
  ctaLabel: "Contact Us",
  ctaHref: "https://archmation.com/contact/",
  items: [
    {
      id: 1,
      question: "What marketing works best for manufacturers?",
      answer:
        "B2B-focused strategies including SEO, technical content, Google Ads, and LinkedIn campaigns work well. We tailor approaches to your products, buyers, and sales cycle.",
      icon: "factory",
    },
    {
      id: 2,
      question: "Can you help us reach industrial buyers?",
      answer:
        "Yes. We target procurement managers, distributors, and decision-makers through search optimization, industry-specific content, and paid campaigns that speak to technical buyers.",
      icon: "users",
    },
    {
      id: 3,
      question: "Do you create technical and product content?",
      answer:
        "We produce blogs, brochures, product pages, case studies, and video content designed for manufacturing audiences — helping you demonstrate expertise and build trust.",
      icon: "wrench",
    },
    {
      id: 4,
      question: "How do you improve our online visibility?",
      answer:
        "Through SEO, website optimization, and targeted advertising we help manufacturers rank for industry keywords and appear where buyers are searching for solutions.",
      icon: "search",
    },
    {
      id: 5,
      question: "What results have you delivered for manufacturers?",
      answer:
        "Our manufacturing clients have seen significant growth in leads, website traffic, and sales — including 100+ leads per month and multi-crore revenue increases within months of engagement.",
      icon: "trending-up",
    },
  ],
} satisfies IndustryFAQContent;
