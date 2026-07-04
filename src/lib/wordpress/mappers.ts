import type { CaseStudyPost } from "@/content/case-studies";
import { BLOGS_BASE_PATH } from "@/content/case-studies";
import type { WordPressPost } from "@/lib/wordpress/types";
import { decodeWordPressHtml, stripWordPressHtml } from "@/lib/wordpress/utils";

function getFeaturedImage(post: WordPressPost): string {
  const media = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;
  return media ?? "/images/homepage.jpg";
}

function getPrimaryCategory(post: WordPressPost): {
  name: string;
  slug: string;
} {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  const category = terms.find((term) => term.taxonomy === "category");

  return {
    name: category?.name ?? "Case Study",
    slug: category?.slug ?? "case-study",
  };
}

export function mapWordPressPostToCard(post: WordPressPost): CaseStudyPost {
  const category = getPrimaryCategory(post);

  return {
    id: post.id,
    title: decodeWordPressHtml(post.title.rendered),
    image: getFeaturedImage(post),
    category: category.name,
    categorySlug: category.slug,
    excerpt: stripWordPressHtml(post.excerpt.rendered),
    href: `${BLOGS_BASE_PATH}/${post.slug}`,
  };
}
