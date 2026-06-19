export type BrandingDesignHeroIcon = {
  id: number;
  icon: string;
  label: string;
  gradient:
    | "purple"
    | "blue"
    | "green"
    | "yellow"
    | "rose"
    | "indigo"
    | "cyan"
    | "orange";
  floatVariant: 0 | 1 | 2;
  delay: string;
};

export const BRANDING_DESIGN_HERO_CONTENT = {
  label: "Branding & Design",
  titleBefore: "Write your own",
  titleAccent: "Brand's Story",
  description:
    "Our expert team excels in brand strategy, logo design, creative branding, graphic design, web design, visual identity, corporate branding, packaging design, advertising design, and brand development",
  secondaryDescription:
    "We've successfully crafted brand identities for over 20 clients across diverse industries, including AdTech, EdTech, Web-3, FMCG, and more",
  ctaLabel: "Let's Dive In",
  ctaHref: "https://archmation.com/contact/",
  monitorTagline: "Engaging you with Creative Design",
  designIcons: [
    {
      id: 1,
      icon: "🎨",
      label: "Palette",
      gradient: "purple",
      floatVariant: 0,
      delay: "0s",
    },
    {
      id: 2,
      icon: "✏️",
      label: "Sketch",
      gradient: "blue",
      floatVariant: 1,
      delay: "0.1s",
    },
    {
      id: 3,
      icon: "🖼️",
      label: "Frame",
      gradient: "green",
      floatVariant: 2,
      delay: "0.2s",
    },
    {
      id: 4,
      icon: "🎭",
      label: "Identity",
      gradient: "yellow",
      floatVariant: 0,
      delay: "0.3s",
    },
    {
      id: 5,
      icon: "✨",
      label: "Spark",
      gradient: "rose",
      floatVariant: 1,
      delay: "0.4s",
    },
    {
      id: 6,
      icon: "🖌️",
      label: "Brush",
      gradient: "indigo",
      floatVariant: 2,
      delay: "0.5s",
    },
    {
      id: 7,
      icon: "💎",
      label: "Premium",
      gradient: "cyan",
      floatVariant: 0,
      delay: "0.6s",
    },
    {
      id: 8,
      icon: "🌈",
      label: "Color",
      gradient: "orange",
      floatVariant: 1,
      delay: "0.7s",
    },
  ] satisfies BrandingDesignHeroIcon[],
};
