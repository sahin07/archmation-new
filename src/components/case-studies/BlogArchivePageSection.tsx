"use client";

import BlogArchiveListing from "@/components/case-studies/BlogArchiveListing";

export default function BlogArchivePageSection() {
  return (
    <section
      id="accueilBlogs"
      className="archmation-blogs sectionPaddingBottom"
      aria-label="Blog — marketing insights and articles"
    >
      <BlogArchiveListing />
    </section>
  );
}
