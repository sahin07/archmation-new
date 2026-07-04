"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { CaseStudyPost } from "@/content/case-studies";
import {
  getCategoryBadgeClass,
  resolveCategorySlug,
} from "@/content/case-studies/badges";
import {
  CASE_STUDIES_SECTION,
  CASE_STUDY_POSTS,
} from "@/content/case-studies";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/case-studies/blog-card-badges.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const LOADING_PLACEHOLDER_COUNT = 6;

type BlogsSectionHeader = {
  eyebrow: string;
  title: string;
  readCtaLabel?: string;
};

type BlogsSectionProps = {
  showViewAllCta?: boolean;
  section?: BlogsSectionHeader;
  posts?: CaseStudyPost[];
  isLoading?: boolean;
  isError?: boolean;
  readCtaLabel?: string;
};

function CardLink({
  href,
  className,
  ariaLabel,
  children,
}: {
  href: string;
  className: string;
  ariaLabel: string;
  children: React.ReactNode;
}) {
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel} scroll>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={className} aria-label={ariaLabel}>
      {children}
    </a>
  );
}

function BlogCard({
  post,
  index,
  active,
  readCtaLabel,
}: {
  post: CaseStudyPost;
  index: number;
  active: boolean;
  readCtaLabel: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const badgeClass = getCategoryBadgeClass(
    resolveCategorySlug(post.category, post.categorySlug),
  );

  return (
    <motion.article
      className="archmation-blogs__card"
      initial={{ opacity: 0, y: 50 }}
      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{
        duration: 0.8,
        delay: 0.2 + index * 0.15,
        ease: easeOut,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="archmation-blogs__card-inner"
        animate={{ y: isHovered ? -4 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <CardLink
          href={post.href}
          className="archmation-blogs__card-link"
          ariaLabel={`Read article: ${post.title}`}
        >
          <div className="archmation-blogs__media">
            <img
              src={post.image}
              alt={post.title}
              className="archmation-blogs__image"
              loading="lazy"
            />
            <motion.div
              className="archmation-blogs__media-overlay"
              animate={{ opacity: isHovered ? 0.4 : 0.2 }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            />
            <motion.span
              className={`archmation-blogs__badge ${badgeClass}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              {post.category}
            </motion.span>
            <motion.div
              className="archmation-blogs__indicator"
              animate={{
                opacity: isHovered ? 1 : 0,
                scale: isHovered ? 1 : 0.8,
              }}
              transition={{ duration: 0.3 }}
              aria-hidden="true"
            >
              <motion.div
                className="archmation-blogs__indicator-btn"
                animate={{ rotate: isHovered ? 45 : 0 }}
                transition={{ duration: 0.4 }}
              >
                <ArrowUpRight
                  className="archmation-blogs__indicator-icon"
                  strokeWidth={1.5}
                />
              </motion.div>
            </motion.div>
          </div>

          <div className="archmation-blogs__body">
            <div className="archmation-blogs__copy">
              <h3 className="archmation-blogs__card-title">{post.title}</h3>
              <p className="archmation-blogs__excerpt">{post.excerpt}</p>
            </div>

            <motion.span
              className="archmation-blogs__read-btn"
              initial={{ opacity: 0, y: 10 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              aria-hidden="true"
            >
              <span
                className="archmation-blogs__read-btn-shine"
                aria-hidden="true"
              />
              <span className="archmation-blogs__read-btn-label">
                {readCtaLabel}
              </span>
              <motion.span
                className="archmation-blogs__read-btn-icon-wrap"
                animate={{
                  x: isHovered ? 3 : 0,
                  y: isHovered ? -3 : 0,
                }}
                transition={{ duration: 0.3 }}
              >
                <ArrowUpRight
                  className="archmation-blogs__read-btn-icon"
                  strokeWidth={2}
                />
              </motion.span>
            </motion.span>
          </div>
        </CardLink>

        <motion.div
          className="archmation-blogs__corner-glow"
          animate={{
            opacity: isHovered ? 1 : 0.5,
            scale: isHovered ? 1.2 : 1,
          }}
          transition={{ duration: 0.5 }}
          aria-hidden="true"
        />
      </motion.div>
    </motion.article>
  );
}

function LoadingCard() {
  return (
    <article
      className="archmation-blogs__card archmation-blogs__card--loading"
      aria-hidden="true"
    >
      <div className="archmation-blogs__card-inner">
        <div className="archmation-blogs__media archmation-blogs__skeleton" />
        <div className="archmation-blogs__body">
          <div className="archmation-blogs__copy">
            <div className="archmation-blogs__skeleton archmation-blogs__skeleton--title" />
            <div className="archmation-blogs__skeleton archmation-blogs__skeleton--line" />
            <div className="archmation-blogs__skeleton archmation-blogs__skeleton--line archmation-blogs__skeleton--line-short" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function BlogsSection({
  showViewAllCta = true,
  section = CASE_STUDIES_SECTION,
  posts,
  isLoading = false,
  isError = false,
  readCtaLabel,
}: BlogsSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -18% 0px",
    delay: 500,
  });

  const displayPosts = posts ?? CASE_STUDY_POSTS;
  const ctaLabel =
    readCtaLabel ??
    section.readCtaLabel ??
    CASE_STUDIES_SECTION.readCtaLabel;

  return (
    <div
      ref={rootRef}
      className={`archmation-blogs__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-blogs__bg-base" aria-hidden="true" />
      <div className="archmation-blogs__bg-mesh" aria-hidden="true" />
      <div className="archmation-blogs__bg-spotlight-top" aria-hidden="true" />
      <div
        className="archmation-blogs__bg-spotlight-bottom"
        aria-hidden="true"
      />
      <div className="archmation-blogs__bg-grid" aria-hidden="true" />

      <div className="archmation-blogs__inner">
        <motion.header
          className="archmation-blogs__header"
          initial={{ opacity: 0, y: -30 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <motion.p
            className="archmation-blogs__eyebrow"
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            {section.eyebrow}
          </motion.p>
          <motion.h2
            className="archmation-blogs__title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
          >
            {section.title}
          </motion.h2>
        </motion.header>

        {isError ? (
          <p className="archmation-blogs__status" role="alert">
            Unable to load posts right now. Please try again later.
          </p>
        ) : null}

        <div className="archmation-blogs__grid">
          {isLoading
            ? Array.from({ length: LOADING_PLACEHOLDER_COUNT }, (_, index) => (
                <LoadingCard key={`loading-${index}`} />
              ))
            : displayPosts.map((post, index) => (
                <BlogCard
                  key={post.id}
                  post={post}
                  index={index}
                  active={active}
                  readCtaLabel={ctaLabel}
                />
              ))}
        </div>

        {showViewAllCta ? (
          <motion.div
            className="archmation-blogs__cta-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
          >
            <a
              href={CASE_STUDIES_SECTION.viewAllHref}
              className="archmation-blogs__cta"
            >
              {CASE_STUDIES_SECTION.viewAllLabel}
              <ArrowRight
                className="archmation-blogs__cta-icon"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
