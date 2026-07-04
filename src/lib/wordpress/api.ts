import axios from "axios";
import {
  BLOG_CATEGORY_ID,
  CASE_STUDY_CATEGORY_ID,
  WORDPRESS_API_BASE,
} from "@/lib/wordpress/constants";
import type { WordPressCategory, WordPressPost } from "@/lib/wordpress/types";

export const wpApi = axios.create({
  baseURL: WORDPRESS_API_BASE,
  headers: {
    Accept: "application/json",
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

export async function fetchBlogPosts(): Promise<WordPressPost[]> {
  const { data } = await wpApi.get<WordPressPost[]>("/posts", {
    params: blogListParams,
  });
  return data;
}

export async function fetchGoodReadsPosts(): Promise<WordPressPost[]> {
  const { data } = await wpApi.get<WordPressPost[]>("/posts", {
    params: goodReadsListParams,
  });
  return data;
}

export async function fetchCaseStudyPosts(): Promise<WordPressPost[]> {
  const { data } = await wpApi.get<WordPressPost[]>("/posts", {
    params: caseStudyListParams,
  });
  return data;
}

export async function fetchCaseStudyBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  const { data } = await wpApi.get<WordPressPost[]>("/posts", {
    params: {
      slug,
      categories: CASE_STUDY_CATEGORY_ID,
      _embed: true,
    },
  });

  return data[0] ?? null;
}

export async function fetchPostBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  const { data } = await wpApi.get<WordPressPost[]>("/posts", {
    params: {
      slug,
      _embed: true,
    },
  });

  return data[0] ?? null;
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

    return data;
  } catch {
    const { data } = await wpApi.get<WordPressPost[]>("/posts", {
      params: goodReadsListParams,
    });

    return data.slice(0, limit);
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

    return data;
  } catch {
    return [
      { id: 1, name: "Blog", slug: "blog", count: 0, link: "" },
      {
        id: CASE_STUDY_CATEGORY_ID,
        name: "Case Study",
        slug: "case-study",
        count: 0,
        link: "",
      },
    ];
  }
}

export async function fetchAllPostSlugs(): Promise<string[]> {
  const { data } = await wpApi.get<Array<{ slug: string }>>("/posts", {
    params: {
      per_page: 100,
      _fields: "slug",
      orderby: "date",
      order: "desc",
    },
  });

  return data.map((post) => post.slug);
}

export async function fetchCaseStudySlugs(): Promise<string[]> {
  const { data } = await wpApi.get<Array<{ slug: string }>>("/posts", {
    params: {
      categories: CASE_STUDY_CATEGORY_ID,
      per_page: 100,
      _fields: "slug",
    },
  });

  return data.map((post) => post.slug);
}

export const blogArchiveQueryKeys = {
  all: ["blog-archive"] as const,
};

export const caseStudyArchiveQueryKeys = {
  all: ["case-study-archive"] as const,
};

export const goodReadsQueryKeys = {
  all: ["good-reads"] as const,
  detail: (slug: string) => ["good-reads", slug] as const,
};

/** @deprecated Use goodReadsQueryKeys */
export const caseStudyQueryKeys = goodReadsQueryKeys;
