import type { PrimaryIndustriesContent } from "./types";

export const PRIMARY_INDUSTRIES_SHARED_CONTENT: PrimaryIndustriesContent = {
  title: "Our Primary Industries",
  highlightsTitle: "Key Highlights",
  industries: [
    { icon: "real-estate", label: "Real Estate" },
    { icon: "ed-tech", label: "Ed-Tech" },
    { icon: "manufacturing", label: "Manufacturing" },
    { icon: "fmcg", label: "FMCG" },
    { icon: "web3", label: "Web-3 and Blockchain" },
    { icon: "logistics", label: "Logistics" },
    { icon: "automotive", label: "Automotive" },
    { icon: "e-commerce", label: "E-Commerce" },
  ],
  highlights: [
    { icon: "brands", value: "30+", label: "Brands Worked With" },
    { icon: "ad-spends", value: "20cr+", label: "in Ad Spends" },
    { icon: "revenue", value: "1100cr+", label: "in Revenue Generated" },
    { icon: "unicorns", value: "", label: "Worked with Top Unicorns" },
    { icon: "events", value: "10+", label: "Events Covered" },
  ],
  cta: {
    label: "Download Brochure",
    href: "https://archmation.com/contact/",
    openInNewTab: true,
  },
};
