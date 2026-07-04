"use client";

import CaseStudiesArchiveListing from "@/components/case-studies/CaseStudiesArchiveListing";

export default function CaseStudiesArchivePageSection() {
  return (
    <section
      id="accueilBlogs"
      className="archmation-blogs sectionPaddingBottom"
      aria-label="Good Reads — case studies and insights"
    >
      <CaseStudiesArchiveListing />
    </section>
  );
}
