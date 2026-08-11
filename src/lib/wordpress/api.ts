import axios from "axios";
import {
  FALLBACK_CATEGORIES,
  getFallbackPostBySlug,
  getFallbackPosts,
  getFallbackSlugs,
} from "@/content/fallback-posts";
import {
  BLOG_CATEGORY_ID,
  CASE_STUDY_CATEGORY_ID,
  WORDPRESS_API_BASE,
} from "@/lib/wordpress/constants";
import type { WordPressCategory, WordPressPost } from "@/lib/wordpress/types";

export const wpApi = axios.create({
  baseURL: WORDPRESS_API_BASE,
  timeout: 15000,
  headers: {
    Accept: "application/json",
    "User-Agent":
      "Mozilla/5.0 (compatible; ArchmationNext/1.0; +https://archmation.com)",
  },
});

const blogListParams = {
  categories: BLOG_CATEGORY_ID,
  _embed: true,
  per_page: 100,
  orderby: "date",
  order: "desc",
} as const;

const caseStudyListParams = {
  categories: CASE_STUDY_CATEGORY_ID,
  _embed: true,
  per_page: 100,
  orderby: "date",
  order: "desc",
} as const;

const goodReadsListParams = {
  _embed: true,
  per_page: 100,
  orderby: "date",
  order: "desc",
} as const;

function orFallback(
  posts: WordPressPost[],
  kind: "all" | "blog" | "case-study" = "all",
): WordPressPost[] {
  return posts.length > 0 ? posts : getFallbackPosts(kind);
}

export async function fetchBlogPosts(): Promise<WordPressPost[]> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: blogListParams,
    });
    return orFallback(data, "blog");
  } catch {
    return getFallbackPosts("blog");
  }
}

export async function fetchGoodReadsPosts(): Promise<WordPressPost[]> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: goodReadsListParams,
    });
    return orFallback(data, "all");
  } catch {
    return getFallbackPosts("all");
  }
}

export async function fetchCaseStudyPosts(): Promise<WordPressPost[]> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: caseStudyListParams,
    });
    return orFallback(data, "case-study");
  } catch {
    return getFallbackPosts("case-study");
  }
}

export async function fetchCaseStudyBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: {
        slug,
        categories: CASE_STUDY_CATEGORY_ID,
        _embed: true,
      },
    });

    return data[0] ?? getFallbackPostBySlug(slug);
  } catch {
    return getFallbackPostBySlug(slug);
  }
}

export async function fetchPostBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: {
        slug,
        _embed: true,
      },
    });

    return data[0] ?? getFallbackPostBySlug(slug);
  } catch {
    return getFallbackPostBySlug(slug);
  }
}

export async function fetchLatestPosts(limit = 6): Promise<WordPressPost[]> {
  try {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: {
        _embed: true,
        per_page: limit,
        orderby: "date",
        order: "desc",
      },
    });

    return orFallback(data, "all").slice(0, limit);
  } catch {
    return getFallbackPosts("all").slice(0, limit);
  }
}

export async function fetchPopularCategories(): Promise<WordPressCategory[]> {
  try {
    const { data } = await wpApi.get<WordPressCategory[]>("/categories", {
      params: {
        per_page: 100,
        orderby: "count",
        order: "desc",
        hide_empty: true,
      },
    });

    return data.length > 0 ? data : FALLBACK_CATEGORIES;
  } catch {
    return FALLBACK_CATEGORIES;
  }
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  try {
    const { data } = await wpApi.get<Array<{ slug: string }>>("/posts", {
      params: {
        per_page: 100,
        _fields: "slug",
        orderby: "date",
        order: "desc",
      },
    });

    const slugs = data.map((item) => item.slug).filter(Boolean);
    return slugs.length > 0 ? slugs : getFallbackSlugs();
  } catch {
    return getFallbackSlugs();
  }
}

export async function fetchCaseStudySlugs(): Promise<string[]> {
  try {
    const { data } = await wpApi.get<Array<{ slug: string }>>("/posts", {
      params: {
        categories: CASE_STUDY_CATEGORY_ID,
        per_page: 100,
        _fields: "slug",
      },
    });

    const slugs = data.map((item) => item.slug).filter(Boolean);
    return slugs.length > 0
      ? slugs
      : getFallbackPosts("case-study").map((item) => item.slug);
  } catch {
    return getFallbackPosts("case-study").map((item) => item.slug);
  }
}

export const blogArchiveQueryKeys = {
  all: ["blog-archive"] as const,
};

export const caseStudyArchiveQueryKeys = {
  all: ["case-study-archive"] as const,
};

export const homeBlogsQueryKeys = {
  all: ["home-blogs"] as const,
};

export const goodReadsQueryKeys = {
  all: ["good-reads"] as const,
  detail: (slug: string) => ["good-reads", slug] as const,
};

/** @deprecated Use goodReadsQueryKeys */
export const caseStudyQueryKeys = goodReadsQueryKeys;
