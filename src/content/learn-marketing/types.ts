export type LeadCircuitModuleIcon =
  | "letter-a"
  | "dollar"
  | "letter-g"
  | "briefcase";

export type LeadCircuitModule = {
  id: number;
  title: string;
  icon: LeadCircuitModuleIcon;
  description: string;
};

export type LeadCircuitContent = {
  eyebrow: string;
  title: string;
  modules: LeadCircuitModule[];
  eligibilityTitle: string;
  eligibility: string[];
  courseDetailsTitle: string;
  courseDetails: {
    formatLabel: string;
    format: string;
    durationLabel: string;
    duration: string;
    includesLabel: string;
    includes: string;
  };
  cta: {
    label: string;
    href: string;
  };
};

export type MasterMarketingInfoCard = {
  label: string;
  body?: string;
  bullets?: string[];
};

export type MasterMarketingContent = {
  badge: string;
  title: {
    line1: string;
    line2: string;
    line3: string;
  };
  description: string;
  primaryCta: {
    label: string;
    href: string;
  };
  secondaryCta: {
    label: string;
    href: string;
  };
  card: {
    preface: string;
    titleTop: [string, string];
    titleBottom: string;
    subtitle: string;
  };
  infoCards: MasterMarketingInfoCard[];
};

export type InstructorCredential = {
  label: string;
  emphasis?: string;
};

export type InstructorContent = {
  title: string;
  credentials: InstructorCredential[];
  paragraphs: string[];
  instructor: {
    name: string;
    role: string;
    image: string;
    imageAlt: string;
  };
  cta: {
    label: string;
    href: string;
  };
};
