"use client";

import CategoryPostsListing from "@/components/case-studies/CategoryPostsListing";
import { BLOG_ARCHIVE_SECTION } from "@/content/case-studies";
import { blogArchiveQueryKeys, fetchBlogPosts } from "@/lib/wordpress";

export default function BlogArchiveListing() {
  return (
    <CategoryPostsListing
      queryKey={blogArchiveQueryKeys.all}
      fetchPosts={fetchBlogPosts}
      section={BLOG_ARCHIVE_SECTION}
    />
  );
}
