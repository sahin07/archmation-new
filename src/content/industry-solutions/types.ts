export type IndustrySolutionsIntroPart = {
  text: string;
  variant?: "default" | "bold";
};

export type IndustrySolutionItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type IndustrySolutionsContent = {
  slug: string;
  title: string;
  intro: IndustrySolutionsIntroPart[];
  ctaLabel: string;
  ctaHref: string;
  solutions: IndustrySolutionItem[];
};
