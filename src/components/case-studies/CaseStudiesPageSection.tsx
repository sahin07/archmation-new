"use client";

import CaseStudiesListing from "@/components/case-studies/CaseStudiesListing";

export default function CaseStudiesPageSection() {
  return (
    <section
      id="accueilBlogs"
      className="archmation-blogs sectionPaddingBottom"
      aria-label="Good Reads — insights, articles, and case studies"
    >
      <CaseStudiesListing />
    </section>
  );
}
