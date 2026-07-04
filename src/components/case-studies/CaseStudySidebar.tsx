import Link from "next/link";
import {
  BLOG_ARCHIVE_PATH,
  BLOGS_BASE_PATH,
  CASE_STUDIES_ARCHIVE_PATH,
} from "@/content/case-studies";
import { BLOG_CATEGORY_ID, CASE_STUDY_CATEGORY_ID } from "@/lib/wordpress/constants";
import {
  formatPostDate,
  getPostFeaturedImage,
  getPostHref,
  getPostTitle,
} from "@/lib/wordpress/case-study-content";
import type { WordPressCategory, WordPressPost } from "@/lib/wordpress/types";

type CaseStudySidebarProps = {
  categories: WordPressCategory[];
  latestPosts: WordPressPost[];
  currentPostId: number;
};

function getCategoryHref(category: WordPressCategory): string {
  if (category.id === BLOG_CATEGORY_ID) {
    return BLOG_ARCHIVE_PATH;
  }

  if (category.id === CASE_STUDY_CATEGORY_ID) {
    return CASE_STUDIES_ARCHIVE_PATH;
  }

  return BLOGS_BASE_PATH;
}

export default function CaseStudySidebar({
  categories,
  latestPosts,
  currentPostId,
}: CaseStudySidebarProps) {
  const posts = latestPosts.filter((post) => post.id !== currentPostId);

  return (
    <aside className="case-study-sidebar" aria-label="Case study sidebar">
      <div className="case-study-sidebar__widget">
        <h2 className="case-study-sidebar__title">Popular Categories</h2>
        <ul className="case-study-sidebar__category-list">
          {categories.map((category) => (
            <li key={category.id} className="case-study-sidebar__category-item">
              <Link
                href={getCategoryHref(category)}
                className="case-study-sidebar__category-link"
              >
                <span className="case-study-sidebar__category-icon" aria-hidden="true">
                  →
                </span>
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="case-study-sidebar__widget">
        <h2 className="case-study-sidebar__title">Latest Post</h2>
        <ul className="case-study-sidebar__post-list">
          {posts.map((post) => {
            const featured = getPostFeaturedImage(post);
            const title = getPostTitle(post);

            return (
              <li key={post.id} className="case-study-sidebar__post-item">
                <Link
                  href={getPostHref(post)}
                  className="case-study-sidebar__post-link"
                >
                  <span className="case-study-sidebar__post-thumb-wrap">
                    {featured.url ? (
                      <img
                        src={featured.url}
                        alt=""
                        className="case-study-sidebar__post-thumb"
                        loading="lazy"
                      />
                    ) : (
                      <span className="case-study-sidebar__post-thumb case-study-sidebar__post-thumb--empty" />
                    )}
                  </span>
                  <span className="case-study-sidebar__post-copy">
                    <span className="case-study-sidebar__post-title">{title}</span>
                    <time
                      className="case-study-sidebar__post-date"
                      dateTime={post.date}
                    >
                      {formatPostDate(post.date)}
                    </time>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
