export type AboutTextHighlight = "strong" | "soft";

export type AboutTextSegment = {
  text: string;
  highlight?: AboutTextHighlight;
};

export type AboutParagraph = {
  variant: "primary" | "muted";
  segments: AboutTextSegment[];
};

export type AboutWhoContent = {
  label: string;
  title: string;
  titleAccent: string;
  paragraphs: AboutParagraph[];
  image: {
    src: string;
    alt: string;
  };
  imageQuoteLines: string[];
  badgeText: string;
  cta: {
    label: string;
    href: string;
  };
};
