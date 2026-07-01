export type IndustryExpertiseSkill = {
  name: string;
  percentage: number;
  icon: string;
};

export type IndustryExpertiseStat = {
  number: string;
  label: string;
};

export type IndustryExpertiseContent = {
  slug: string;
  titleBefore: string;
  titleAccent: string;
  titleAfter: string;
  description: string;
  skills: IndustryExpertiseSkill[];
  stats: IndustryExpertiseStat[];
  ctaTitle: string;
  ctaDescription: string;
  ctaLabel: string;
  ctaHref: string;
};
