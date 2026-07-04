export type WordPressRenderedField = {
  rendered: string;
};

export type WordPressYoastHeadJson = {
  title?: string;
  description?: string;
  canonical?: string;
  og_title?: string;
  og_description?: string;
  og_url?: string;
  og_image?: Array<{ url: string }>;
  twitter_title?: string;
  twitter_description?: string;
  robots?: {
    index?: string;
    follow?: string;
  };
};

export type WordPressEmbeddedTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy: string;
};

export type WordPressFeaturedMedia = {
  source_url: string;
  alt_text?: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  modified: string;
  link: string;
  title: WordPressRenderedField;
  excerpt: WordPressRenderedField;
  content: WordPressRenderedField;
  categories: number[];
  tags?: number[];
  yoast_head_json?: WordPressYoastHeadJson;
  _embedded?: {
    "wp:featuredmedia"?: WordPressFeaturedMedia[];
    "wp:term"?: WordPressEmbeddedTerm[][];
  };
};

export type WordPressCategory = {
  id: number;
  name: string;
  slug: string;
  count: number;
  link: string;
};
