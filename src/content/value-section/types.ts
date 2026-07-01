export type ValueCardIconKey = "vision" | "mission";

export type ValueCardContent = {
  icon: ValueCardIconKey;
  label: string;
  title: string;
  description: string;
  linkLabel: string;
  linkHref?: string;
};

export type ValueSectionContent = {
  label: string;
  title: string;
  titleAccent: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  cards: ValueCardContent[];
};
