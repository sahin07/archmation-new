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
  showViewAllCta?: boolean;
};

export default function CategoryPostsListing({
  queryKey,
  fetchPosts,
  section,
  showViewAllCta = false,
}: CategoryPostsListingProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey,
    queryFn: async () => {
      const posts = await fetchPosts();
      return posts.map(mapWordPressPostToCard);
    },
    staleTime: 60_000,
    // Avoid hanging on skeleton forever if the network is slow.
    retry: 1,
  });

  return (
    <BlogsSection
      posts={data}
      // Keep fallback cards visible while fetching — don't blank the section.
      isLoading={isLoading && !data}
      isError={isError}
      showViewAllCta={showViewAllCta}
      section={section}
      readCtaLabel={section.readCtaLabel}
    />
  );
}
