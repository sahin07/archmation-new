export type IndustryFAQIcon =
  | "bar-chart"
  | "building"
  | "factory"
  | "globe"
  | "home"
  | "megaphone"
  | "rocket"
  | "search"
  | "target"
  | "trending-up"
  | "users"
  | "wrench";

export type IndustryFAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: IndustryFAQIcon;
};

export type IndustryFAQContent = {
  slug: string;
  eyebrow: string;
  titleBefore: string;
  titleAccent: string;
  lede: string;
  ctaLabel: string;
  ctaHref: string;
  items: IndustryFAQItem[];
};
