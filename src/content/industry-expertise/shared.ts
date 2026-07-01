import type { IndustryExpertiseContent } from "@/content/industry-expertise/types";

const SHARED_SKILLS = [
  { name: "SEO", percentage: 85, icon: "📊" },
  { name: "BRANDING", percentage: 75, icon: "🎨" },
  { name: "WEB PERFORMANCE", percentage: 95, icon: "⚡" },
  { name: "GOOGLE ADS PPC", percentage: 60, icon: "💰" },
] as const;

const SHARED_CTA = {
  ctaTitle: "Marketing to Keep your Business Ahead!",
  ctaDescription:
    "Our customized marketing strategies have consistently driven growth, increased brand visibility, and generated high-quality leads, ensuring you stay ahead of the competition.",
  ctaLabel: "ENQUIRE NOW",
  ctaHref: "https://archmation.com/contact/",
} as const;

export const REAL_ESTATE_EXPERTISE_CONTENT = {
  slug: "real-estate",
  titleBefore: "Driven to",
  titleAccent: "Boost",
  titleAfter: "Your Business!",
  description:
    "With 10+ years of cumulative experience, we offer a full range of marketing services designed to get you noticed in a crowded marketplace.",
  skills: [...SHARED_SKILLS],
  stats: [
    { number: "400+", label: "LEADS GENERATED" },
    { number: "75+", label: "PROPERTIES SOLD" },
    { number: "150Cr+", label: "IN SALES IN 2024" },
  ],
  ...SHARED_CTA,
} satisfies IndustryExpertiseContent;

export const B2B_EXPERTISE_CONTENT = {
  slug: "b2b",
  titleBefore: "What We Do",
  titleAccent: "",
  titleAfter: "",
  description:
    "Your success is of utmost importance to us. Our personalized support and strategic insights, ensures you achieve outstanding results and sustained growth.",
  skills: [
    { name: "LEAD GENERATION", percentage: 87, icon: "🧲" },
    { name: "BRAND POSITIONING", percentage: 75, icon: "🎯" },
    { name: "CONTENT MARKETING", percentage: 76, icon: "📝" },
    { name: "DATA-DRIVEN INSIGHTS", percentage: 74, icon: "📊" },
  ],
  stats: [
    { number: "1,500+", label: "LEADS GENERATED" },
    { number: "5,000+", label: "WEBSITE TRAFFIC PER MONTH" },
    { number: "2.5Cr+", label: "AVERAGE SALES PER MONTH" },
  ],
  ctaTitle: "Our game-changing process",
  ctaDescription:
    "Whether it's boosting brand awareness or generating leads, our transparent approach ensures you're always informed and confident in the outcomes.",
  ctaLabel: "ENQUIRE NOW",
  ctaHref: "https://archmation.com/contact/",
} satisfies IndustryExpertiseContent;

export const MANUFACTURING_EXPERTISE_CONTENT = {
  slug: "manufacturing",
  titleBefore: "No cookie-cutter approaches",
  titleAccent: "",
  titleAfter: "",
  description:
    "With experience in the manufacturing sector, we understand your business like no other agency",
  skills: [
    { name: "SEO", percentage: 85, icon: "📊" },
    { name: "BRANDING", percentage: 75, icon: "🎨" },
    { name: "WEBSITE PERFORMANCE", percentage: 95, icon: "⚡" },
    { name: "GOOGLE ADS PPC", percentage: 60, icon: "💰" },
  ],
  stats: [
    { number: "100+", label: "LEADS GENERATED PER MONTH" },
    { number: "1,000+", label: "AVERAGE TRAFFIC PER MONTH" },
    { number: "15Cr+", label: "SALES IN 8 MONTHS" },
  ],
  ctaTitle: "Let's Talk About Growing Your Business",
  ctaDescription:
    "Our data-driven strategies have helped our clients increase their market share and grow their revenue",
  ctaLabel: "REQUEST DEMO",
  ctaHref: "https://archmation.com/contact/",
} satisfies IndustryExpertiseContent;
