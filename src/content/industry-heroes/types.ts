export type IndustryHeroFeature = {
  icon: string;
  title: string;
  description: string;
};

export type IndustryHeroContent = {
  slug: string;
  label: string;
  titleBefore: string;
  titleAccent: string;
  titleLine2: string;
  description: string;
  ctaLabel: string;
  ctaHref: string;
  features: IndustryHeroFeature[];
};
