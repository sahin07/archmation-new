export type SeoHeroIcon = {
  id: number;
  icon: string;
  label: string;
  gradient:
    | "orange"
    | "red"
    | "rose"
    | "gray"
    | "cyan"
    | "yellow"
    | "blue"
    | "indigo";
  floatVariant: 0 | 1 | 2;
  delay: string;
};

export const SEO_HERO_CONTENT = {
  label: "Search Engine Optimization",
  titleAccent: "Boost your online visibility",
  titleAfter: "with our SEO expertise",
  description:
    "We specialize in search engine optimization, keyword research, and on-page and off-page SEO to drive organic traffic and improve your search rankings.",
  secondaryDescription:
    "Partner with us and unlock your website's potential with strategic SEO tactics.",
  ctaLabel: "Let's Optimize",
  ctaHref: "https://archmation.com/contact/",
  seoIcons: [
    {
      id: 1,
      icon: "🚀",
      label: "Growth",
      gradient: "orange",
      floatVariant: 0,
      delay: "0s",
    },
    {
      id: 2,
      icon: "⏱️",
      label: "Speed",
      gradient: "red",
      floatVariant: 1,
      delay: "0.1s",
    },
    {
      id: 3,
      icon: "📢",
      label: "Marketing",
      gradient: "orange",
      floatVariant: 2,
      delay: "0.2s",
    },
    {
      id: 4,
      icon: "🎯",
      label: "Target",
      gradient: "red",
      floatVariant: 0,
      delay: "0.3s",
    },
    {
      id: 5,
      icon: "💬",
      label: "Engagement",
      gradient: "rose",
      floatVariant: 1,
      delay: "0.4s",
    },
    {
      id: 6,
      icon: "⚙️",
      label: "Settings",
      gradient: "gray",
      floatVariant: 2,
      delay: "0.5s",
    },
    {
      id: 7,
      icon: "🔍",
      label: "Search",
      gradient: "cyan",
      floatVariant: 0,
      delay: "0.6s",
    },
    {
      id: 8,
      icon: "💰",
      label: "Revenue",
      gradient: "yellow",
      floatVariant: 1,
      delay: "0.7s",
    },
    {
      id: 9,
      icon: "📊",
      label: "Analytics",
      gradient: "blue",
      floatVariant: 2,
      delay: "0.8s",
    },
    {
      id: 10,
      icon: "🔗",
      label: "Links",
      gradient: "indigo",
      floatVariant: 0,
      delay: "0.9s",
    },
  ] satisfies SeoHeroIcon[],
};
