export type WebTechHeroAppIcon = {
  id: number;
  icon: string;
  gradient: "blue" | "orange" | "yellow" | "purple" | "pink" | "violet" | "green" | "indigo";
  floatVariant: 0 | 1 | 2;
  delay: string;
};

export type WebTechHeroStat = {
  label: string;
  value: string;
};

export const WEB_TECH_HERO_CONTENT = {
  label: "Website and Tech Solutions",
  titleBefore: "AI Powered Web and App",
  titleAccent: "Development",
  description:
    "We specialize in custom web design, responsive development, and SEO-friendly websites crafted to enhance your business.",
  secondaryDescription:
    "Our expert team offers professional web solutions, including website maintenance and optimization.",
  ctaLabel: "Connect Now",
  ctaHref: "https://archmation.com/contact/",
  stats: [
    { label: "Projects", value: "500+" },
    { label: "Clients", value: "200+" },
    { label: "Success Rate", value: "98%" },
  ] satisfies WebTechHeroStat[],
  appIcons: [
    { id: 1, icon: "🌐", gradient: "blue", floatVariant: 0, delay: "0s" },
    { id: 2, icon: "⚡", gradient: "orange", floatVariant: 1, delay: "0.1s" },
    { id: 3, icon: "🎨", gradient: "yellow", floatVariant: 2, delay: "0.2s" },
    { id: 4, icon: "🛒", gradient: "purple", floatVariant: 0, delay: "0.3s" },
    { id: 5, icon: "✈️", gradient: "pink", floatVariant: 1, delay: "0.4s" },
    { id: 6, icon: "👤", gradient: "violet", floatVariant: 2, delay: "0.5s" },
    { id: 7, icon: "📊", gradient: "green", floatVariant: 0, delay: "0.6s" },
    { id: 8, icon: "🔧", gradient: "indigo", floatVariant: 1, delay: "0.7s" },
  ] satisfies WebTechHeroAppIcon[],
};
