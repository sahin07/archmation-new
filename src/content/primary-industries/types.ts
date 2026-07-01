export type PrimaryIndustryIconKey =
  | "real-estate"
  | "ed-tech"
  | "manufacturing"
  | "fmcg"
  | "web3"
  | "logistics"
  | "automotive"
  | "e-commerce";

export type PrimaryHighlightIconKey =
  | "brands"
  | "ad-spends"
  | "revenue"
  | "unicorns"
  | "events";

export type PrimaryIndustryItem = {
  icon: PrimaryIndustryIconKey;
  label: string;
  href?: string;
};

export type PrimaryHighlightItem = {
  icon: PrimaryHighlightIconKey;
  value: string;
  label: string;
};

export type PrimaryIndustriesContent = {
  title: string;
  highlightsTitle: string;
  industries: PrimaryIndustryItem[];
  highlights: PrimaryHighlightItem[];
  cta: {
    label: string;
    href: string;
    openInNewTab?: boolean;
  };
};
