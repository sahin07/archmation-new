"use client";

import CategoryPostsListing from "@/components/case-studies/CategoryPostsListing";
import { CASE_STUDIES_PAGE_SECTION } from "@/content/case-studies";
import { fetchGoodReadsPosts, goodReadsQueryKeys } from "@/lib/wordpress";

export default function CaseStudiesListing() {
  return (
    <CategoryPostsListing
      queryKey={goodReadsQueryKeys.all}
      fetchPosts={fetchGoodReadsPosts}
      section={CASE_STUDIES_PAGE_SECTION}
    />
  );
}
