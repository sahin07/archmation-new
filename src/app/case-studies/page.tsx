import type { Metadata } from "next";
import CaseStudiesArchivePageSection from "@/components/case-studies/CaseStudiesArchivePageSection";

export const metadata: Metadata = {
  title: "Get the Latest Buzz | Archmation Studios",
  description:
    "Insights, articles, and case studies from Archmation Studios — scaling, ROAS, SEO, real estate, EdTech, and manufacturing success stories.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Get the Latest Buzz | Archmation Studios",
    description:
      "Insights, articles, and case studies from the marketing world.",
    url: "https://archmation.com/case-studies",
  },
};

export default function CaseStudiesArchivePage() {
  return <CaseStudiesArchivePageSection />;
}
