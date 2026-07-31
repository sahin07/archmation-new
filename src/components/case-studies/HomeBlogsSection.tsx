"use client";

import CategoryPostsListing from "@/components/case-studies/CategoryPostsListing";
import QueryProvider from "@/components/case-studies/QueryProvider";
import { CASE_STUDIES_SECTION } from "@/content/case-studies";
import { fetchLatestPosts, homeBlogsQueryKeys } from "@/lib/wordpress";

const HOME_BLOGS_LIMIT = 6;

export default function HomeBlogsSection() {
  return (
    <QueryProvider>
      <CategoryPostsListing
        queryKey={homeBlogsQueryKeys.all}
        fetchPosts={() => fetchLatestPosts(HOME_BLOGS_LIMIT)}
        section={CASE_STUDIES_SECTION}
        showViewAllCta
      />
    </QueryProvider>
  );
}
