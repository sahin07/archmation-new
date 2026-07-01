import type { MasterMarketingContent } from "./types";

export const MASTER_MARKETING_CONTENT: MasterMarketingContent = {
  badge: "WELCOME TO THE LEAD CIRCUIT",
  title: {
    line1: "Master",
    line2: "Marketing",
    line3: "That Actually Works",
  },
  description:
    "A practical, no-fluff course built for execution, not just theory.",
  primaryCta: {
    label: "CHAT AND BOOK SLOT",
    href: "/contact-us",
  },
  secondaryCta: {
    label: "DOWNLOAD BROCHURE",
    href: "#",
  },
  card: {
    preface: "YOU'RE",
    titleTop: ["THE", "LEAD"],
    titleBottom: "CIRCUIT",
    subtitle: "Marketing Insights For Tomorrow",
  },
  infoCards: [
    {
      label: "WHY THIS COURSE?",
      body: "Marketing today is overloaded with noise. Endless tactics, changing platforms, and recycled advice that rarely translates to results.",
    },
    {
      label: "REAL-WORLD FOCUS",
      body: "This course is built from real-world experience — focused on helping you run smarter campaigns and build systems that scale.",
    },
    {
      label: "FOR YOU IF",
      bullets: [
        "Ads run, conversions weak",
        "Content exists, no pipeline",
        "Marketing feels scattered",
      ],
    },
  ],
};
