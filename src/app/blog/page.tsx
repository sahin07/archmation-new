import type { Metadata } from "next";
import BlogArchivePageSection from "@/components/case-studies/BlogArchivePageSection";

export const metadata: Metadata = {
  title: "Blog | Archmation Studios",
  description:
    "Marketing insights, digital strategy, SEO, social commerce, and performance marketing articles from Archmation Studios.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Archmation Studios",
    description:
      "Marketing insights and digital strategy articles from Archmation Studios.",
    url: "https://archmation.com/blog",
  },
};

export default function BlogArchivePage() {
  return <BlogArchivePageSection />;
}
