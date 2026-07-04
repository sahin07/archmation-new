"use client";

import CategoryPostsListing from "@/components/case-studies/CategoryPostsListing";
import { CASE_STUDIES_PAGE_SECTION } from "@/content/case-studies";
import {
  caseStudyArchiveQueryKeys,
  fetchCaseStudyPosts,
} from "@/lib/wordpress";

export default function CaseStudiesArchiveListing() {
  return (
    <CategoryPostsListing
      queryKey={caseStudyArchiveQueryKeys.all}
      fetchPosts={fetchCaseStudyPosts}
      section={CASE_STUDIES_PAGE_SECTION}
    />
  );
}
