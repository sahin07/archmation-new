export type PerformanceHeroAnalyticsIcon = {
  id: number;
  icon: string;
  label: string;
  gradient:
    | "orange"
    | "blue"
    | "red"
    | "green"
    | "purple"
    | "rose"
    | "yellow"
    | "indigo";
  floatVariant: 0 | 1 | 2;
  delay: string;
};

export const PERFORMANCE_MARKETING_HERO_CONTENT = {
  label: "Performance Marketing",
  titleBefore: "Unlock the",
  titleAccent: "Digital",
  titleAfter: "Realm",
  description:
    "We specialize in creating and managing effective Google Ads campaigns to generate quality B2B leads and enhance your online presence. Our expert team offers Google PPC advertising, lead generation solutions, and more.",
  secondaryDescription:
    "From Facebook to Instagram, LinkedIn, and beyond, we'll make sure you generate leads from every corner.",
  ctaLabel: "Let's Go!",
  ctaHref: "https://archmation.com/contact/",
  analyticsIcons: [
    {
      id: 1,
      icon: "📊",
      label: "Analytics",
      gradient: "orange",
      floatVariant: 0,
      delay: "0s",
    },
    {
      id: 2,
      icon: "📈",
      label: "Growth",
      gradient: "blue",
      floatVariant: 1,
      delay: "0.2s",
    },
    {
      id: 3,
      icon: "🎯",
      label: "Target",
      gradient: "red",
      floatVariant: 2,
      delay: "0.4s",
    },
    {
      id: 4,
      icon: "💰",
      label: "Revenue",
      gradient: "green",
      floatVariant: 0,
      delay: "0.6s",
    },
    {
      id: 5,
      icon: "📱",
      label: "Social",
      gradient: "purple",
      floatVariant: 1,
      delay: "0.8s",
    },
    {
      id: 6,
      icon: "🔔",
      label: "Alerts",
      gradient: "rose",
      floatVariant: 2,
      delay: "1s",
    },
    {
      id: 7,
      icon: "⚡",
      label: "Performance",
      gradient: "yellow",
      floatVariant: 0,
      delay: "1.2s",
    },
    {
      id: 8,
      icon: "🎨",
      label: "Creative",
      gradient: "indigo",
      floatVariant: 1,
      delay: "1.4s",
    },
  ] satisfies PerformanceHeroAnalyticsIcon[],
};
