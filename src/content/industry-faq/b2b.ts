import type { IndustryFAQContent } from "@/content/industry-faq/types";

export const B2B_FAQ_CONTENT = {
  slug: "b2b",
  eyebrow: "B2B FAQs",
  titleBefore: "Frequently Asked",
  titleAccent: "Questions",
  lede:
    "Get answers about our B2B marketing services, lead generation approach, and how we help you reach decision-makers.",
  ctaLabel: "Contact Us",
  ctaHref: "https://archmation.com/contact/",
  items: [
    {
      id: 1,
      question: "What B2B marketing services do you offer?",
      answer:
        "We offer strategy development, content creation, lead generation, account-based marketing, SEO, PPC, and sales enablement — all tailored for B2B companies looking to grow pipeline and revenue.",
      icon: "globe",
    },
    {
      id: 2,
      question: "How do you generate qualified B2B leads?",
      answer:
        "We combine targeted content, SEO, paid campaigns, and outreach strategies to attract decision-makers. Every tactic is built around your ideal customer profile and sales cycle.",
      icon: "target",
    },
    {
      id: 3,
      question: "What is account-based marketing and do you offer it?",
      answer:
        "Account-based marketing (ABM) focuses on high-value accounts rather than broad audiences. We identify key accounts, create personalized campaigns, and align marketing with your sales team for better conversion.",
      icon: "users",
    },
    {
      id: 4,
      question: "How long before we see measurable results?",
      answer:
        "Paid campaigns can deliver leads within weeks. SEO and content strategies typically show meaningful traction in 3–6 months. We set clear KPIs upfront and report progress transparently.",
      icon: "trending-up",
    },
    {
      id: 5,
      question: "Do you work alongside our internal sales team?",
      answer:
        "Yes. We collaborate closely with sales to ensure leads are qualified, nurtured, and handed off effectively. Our goal is to support your pipeline — not replace your team.",
      icon: "rocket",
    },
  ],
} satisfies IndustryFAQContent;
