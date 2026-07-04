import CaseStudySidebar from "@/components/case-studies/CaseStudySidebar";
import {
  formatPostDate,
  formatPostTagsLine,
  getPostFeaturedImage,
  getPostTitle,
  parseCaseStudyContent,
} from "@/lib/wordpress/case-study-content";
import type { WordPressCategory, WordPressPost } from "@/lib/wordpress/types";
import "@/components/case-studies/case-study-detail.css";

type CaseStudyArticleProps = {
  post: WordPressPost;
  categories: WordPressCategory[];
  latestPosts: WordPressPost[];
};

export default function CaseStudyArticle({
  post,
  categories,
  latestPosts,
}: CaseStudyArticleProps) {
  const title = getPostTitle(post);
  const tagsLine = formatPostTagsLine(post);
  const featured = getPostFeaturedImage(post);
  const { meta, bodyHtml } = parseCaseStudyContent(post.content.rendered);

  return (
    <article className="case-study-article sectionPaddingBottom">
      <div className="case-study-article__shell">
        <header className="case-study-article__hero">
          {tagsLine ? (
            <p className="case-study-article__tags">{tagsLine}</p>
          ) : null}
          <h1 className="case-study-article__title">{title}</h1>
          <time className="case-study-article__date" dateTime={post.date}>
            {formatPostDate(post.date)}
          </time>
        </header>

        <div className="case-study-article__layout">
          <div className="case-study-article__main">
            {featured.url ? (
              <figure className="case-study-article__figure">
                <img
                  src={featured.url}
                  alt={featured.alt}
                  className="case-study-article__image"
                />
              </figure>
            ) : null}

            {meta.length > 0 ? (
              <div className="case-study-article__meta">
                {meta.map((field) => (
                  <p key={field.label} className="case-study-article__meta-row">
                    <strong className="case-study-article__meta-label">
                      {field.label}:
                    </strong>{" "}
                    <span
                      className="case-study-article__meta-value"
                      dangerouslySetInnerHTML={{ __html: field.valueHtml }}
                    />
                  </p>
                ))}
              </div>
            ) : null}

            <div
              className="case-study-article__content"
              dangerouslySetInnerHTML={{ __html: bodyHtml }}
            />
          </div>

          <CaseStudySidebar
            categories={categories}
            latestPosts={latestPosts}
            currentPostId={post.id}
          />
        </div>
      </div>
    </article>
  );
}
