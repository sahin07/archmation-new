import { BLOGS_BASE_PATH } from "@/content/case-studies";
import type { WordPressEmbeddedTerm, WordPressPost } from "@/lib/wordpress/types";
import { decodeWordPressHtml, stripWordPressHtml } from "@/lib/wordpress/utils";

export type CaseStudyMetaField = {
  label: string;
  valueHtml: string;
};

export type ParsedCaseStudyContent = {
  meta: CaseStudyMetaField[];
  bodyHtml: string;
};

const META_LABELS = ["Client", "Timeline", "Objective"] as const;
const META_DISPLAY_LABELS = new Set<string>(["Client", "Timeline"]);

function extractMetaField(
  html: string,
  label: (typeof META_LABELS)[number],
): { field: CaseStudyMetaField; html: string } | null {
  const regex = new RegExp(
    `<p>\\s*<strong>${label}:\\s*</strong>\\s*(.*?)</p>`,
    "is",
  );
  const match = html.match(regex);

  if (!match) {
    return null;
  }

  return {
    field: {
      label,
      valueHtml: match[1].trim(),
    },
    html: html.replace(match[0], ""),
  };
}

export function parseCaseStudyContent(html: string): ParsedCaseStudyContent {
  let remaining = html;
  const meta: CaseStudyMetaField[] = [];

  for (const label of META_LABELS) {
    const extracted = extractMetaField(remaining, label);
    if (!extracted) {
      continue;
    }

    remaining = extracted.html;
    if (META_DISPLAY_LABELS.has(label)) {
      meta.push(extracted.field);
    }
  }

  return {
    meta,
    bodyHtml: remaining.trim(),
  };
}

export function getPostTags(post: WordPressPost): WordPressEmbeddedTerm[] {
  const terms = post._embedded?.["wp:term"]?.flat() ?? [];
  return terms.filter((term) => term.taxonomy === "post_tag");
}

export function formatPostTagsLine(post: WordPressPost): string {
  return getPostTags(post)
    .map((tag) => decodeWordPressHtml(tag.name))
    .join(", ");
}

export function formatPostDate(date: string): string {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getPostFeaturedImage(post: WordPressPost) {
  const media = post._embedded?.["wp:featuredmedia"]?.[0];
  return {
    url: media?.source_url ?? null,
    alt: media?.alt_text || decodeWordPressHtml(post.title.rendered),
  };
}

export function getPostHref(post: WordPressPost): string {
  return `${BLOGS_BASE_PATH}/${post.slug}`;
}

export function getPostTitle(post: WordPressPost): string {
  return decodeWordPressHtml(post.title.rendered);
}

export function getPostExcerpt(post: WordPressPost): string {
  return stripWordPressHtml(post.excerpt.rendered);
}
