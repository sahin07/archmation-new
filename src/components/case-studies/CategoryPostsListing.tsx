"use client";

import { useQuery } from "@tanstack/react-query";
import BlogsSection from "@/components/BlogsSection";
import { mapWordPressPostToCard } from "@/lib/wordpress";
import type { WordPressPost } from "@/lib/wordpress/types";

type PostsListingSection = {
  eyebrow: string;
  title: string;
  readCtaLabel?: string;
};

type CategoryPostsListingProps = {
  queryKey: readonly unknown[];
  fetchPosts: () => Promise<WordPressPost[]>;
  section: PostsListingSection;
};

export default function CategoryPostsListing({
  queryKey,
  fetchPosts,
  section,
}: CategoryPostsListingProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: async () => {
      const posts = await fetchPosts();
      return posts.map(mapWordPressPostToCard);
    },
  });

  return (
    <BlogsSection
      posts={data}
      isLoading={isLoading}
      isError={isError}
      showViewAllCta={false}
      section={section}
      readCtaLabel={section.readCtaLabel}
    />
  );
}
