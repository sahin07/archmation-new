export type IndustryServicesIntroPart = {
  text: string;
  variant?: "default" | "bold" | "accent";
};

export type IndustryServiceItem = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type IndustryServicesContent = {
  slug: string;
  title: string;
  intro: IndustryServicesIntroPart[];
  services: IndustryServiceItem[];
};
