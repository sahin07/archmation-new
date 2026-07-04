import { unstable_cache } from "next/cache";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOGS_BASE_PATH } from "@/content/case-studies";
import CaseStudyArticle from "@/components/case-studies/CaseStudyArticle";
import {
  fetchLatestPosts,
  fetchPopularCategories,
  fetchPostBySlug,
  fetchAllPostSlugs,
} from "@/lib/wordpress";
import { decodeWordPressHtml } from "@/lib/wordpress/utils";

export const revalidate = 300;

const getSidebarData = unstable_cache(
  async () => {
    const [latestPosts, categories] = await Promise.all([
      fetchLatestPosts(6),
      fetchPopularCategories(),
    ]);

    return { latestPosts, categories };
  },
  ["case-study-sidebar-data"],
  { revalidate: 300 },
);

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const slugs = await fetchAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Case Study Not Found | Archmation Studios",
    };
  }

  const yoast = post.yoast_head_json;
  const fallbackTitle = decodeWordPressHtml(post.title.rendered);
  const canonical = `${BLOGS_BASE_PATH}/${slug}`;

  return {
    title: yoast?.title ?? `${fallbackTitle} | Archmation Studios`,
    description: yoast?.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: yoast?.og_title ?? fallbackTitle,
      description: yoast?.og_description ?? yoast?.description,
      url: `https://archmation.com${canonical}`,
      images: yoast?.og_image?.[0]?.url
        ? [{ url: yoast.og_image[0].url }]
        : undefined,
    },
    twitter: {
      title: yoast?.twitter_title ?? yoast?.og_title ?? fallbackTitle,
      description:
        yoast?.twitter_description ??
        yoast?.og_description ??
        yoast?.description,
    },
    robots:
      yoast?.robots?.index === "noindex"
        ? { index: false, follow: yoast.robots.follow !== "nofollow" }
        : undefined,
  };
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const [post, sidebar] = await Promise.all([
    fetchPostBySlug(slug),
    getSidebarData(),
  ]);

  if (!post) {
    notFound();
  }

  return (
    <CaseStudyArticle
      post={post}
      latestPosts={sidebar.latestPosts}
      categories={sidebar.categories}
    />
  );
}
