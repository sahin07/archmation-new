export type EdtechHeroIcon = {
  id: number;
  icon: string;
  label: string;
  gradient:
    | "teal"
    | "green"
    | "cyan"
    | "teal-green"
    | "emerald"
    | "blue"
    | "mint"
    | "ocean";
  floatVariant: 0 | 1 | 2;
  delay: string;
};

export const EDTECH_HERO_CONTENT = {
  label: "EdTech Solutions",
  titleBefore: "Step into the world of",
  titleAccent: "Blended Learning!",
  description:
    "At Archmation, we provide innovative e-learning solutions, personalized tutoring platforms, and advanced educational software.",
  secondaryDescription:
    "Our expert team enhances educational experiences and drives academic success through cutting-edge technology",
  ctaLabel: "Let's Talk",
  ctaHref: "https://archmation.com/contact/",
  educationIcons: [
    {
      id: 1,
      icon: "📚",
      label: "Learning",
      gradient: "teal",
      floatVariant: 0,
      delay: "0s",
    },
    {
      id: 2,
      icon: "🎓",
      label: "Graduation",
      gradient: "green",
      floatVariant: 1,
      delay: "0.2s",
    },
    {
      id: 3,
      icon: "💡",
      label: "Ideas",
      gradient: "cyan",
      floatVariant: 2,
      delay: "0.4s",
    },
    {
      id: 4,
      icon: "📊",
      label: "Analytics",
      gradient: "teal-green",
      floatVariant: 0,
      delay: "0.6s",
    },
    {
      id: 5,
      icon: "✏️",
      label: "Writing",
      gradient: "emerald",
      floatVariant: 1,
      delay: "0.8s",
    },
    {
      id: 6,
      icon: "🖥️",
      label: "Technology",
      gradient: "blue",
      floatVariant: 2,
      delay: "1s",
    },
    {
      id: 7,
      icon: "🏆",
      label: "Achievement",
      gradient: "mint",
      floatVariant: 0,
      delay: "1.2s",
    },
    {
      id: 8,
      icon: "🔬",
      label: "Research",
      gradient: "ocean",
      floatVariant: 1,
      delay: "1.4s",
    },
  ] satisfies EdtechHeroIcon[],
};
