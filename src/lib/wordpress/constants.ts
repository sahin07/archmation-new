const DEFAULT_WORDPRESS_API_URL = "https://archmation.com/wp-json/wp/v2";

export const WORDPRESS_API_BASE =
  process.env.NEXT_PUBLIC_WORDPRESS_API_URL ??
  process.env.WORDPRESS_API_URL ??
  DEFAULT_WORDPRESS_API_URL;

/** WordPress category: Blog */
export const BLOG_CATEGORY_ID = 1;

/** WordPress category: Case Study */
export const CASE_STUDY_CATEGORY_ID = 24;

export const CASE_STUDIES_REVALIDATE_SECONDS = 300;
