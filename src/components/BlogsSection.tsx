"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type BlogPost = {
  id: number;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  href: string;
};

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Scaling Towards Profitability",
    image:
      "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=500&h=300&fit=crop",
    category: "3D Printing",
    excerpt: "Discover how strategic positioning led to 340% revenue growth",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 2,
    title:
      "Beyond the Bag: How Archmation Engineered a 335% ROAS Increase for Chérie",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
    category: "E-Commerce",
    excerpt: "A complete case study on data-driven optimization strategies",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 3,
    title: "How We helped Sahil Machines Grow Website Traffic by 122% in 6 Months",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76d8?w=500&h=300&fit=crop",
    category: "SEO & PPC",
    excerpt: "Proven techniques for sustainable organic growth",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 4,
    title: "Real Estate Marketing Excellence: Converting Leads to Sales",
    image:
      "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=500&h=300&fit=crop",
    category: "Real Estate",
    excerpt: "Leveraging digital strategies to dominate the real estate market",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 5,
    title: "EdTech Revolution: Scaling Online Learning Platforms",
    image:
      "https://images.unsplash.com/photo-1516534975068-66c3447eae5f?w=500&h=300&fit=crop",
    category: "Education",
    excerpt: "How to reach millions of students through effective digital marketing",
    href: "https://archmation.com/our-work/",
  },
  {
    id: 6,
    title: "Manufacturing Growth: B2B Lead Generation at Scale",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=500&h=300&fit=crop",
    category: "Manufacturing",
    excerpt: "Industrial sector success stories with data-driven strategies",
    href: "https://archmation.com/our-work/",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BlogsSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -18% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-blogs__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-blogs__bg-base" aria-hidden="true" />
      <div className="archmation-blogs__bg-mesh" aria-hidden="true" />
      <div className="archmation-blogs__bg-spotlight-top" aria-hidden="true" />
      <div className="archmation-blogs__bg-spotlight-bottom" aria-hidden="true" />
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
            Blogs and Case Studies
          </motion.p>
          <motion.h2
            className="archmation-blogs__title"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={
              active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ delay: 0.2, duration: 0.8, ease: easeOut }}
          >
            Carefully Curated Reads from the Marketing World
          </motion.h2>
        </motion.header>

        <div className="archmation-blogs__grid">
          {blogPosts.map((post, index) => {
            const isHovered = hoveredId === post.id;

            return (
              <motion.article
                key={post.id}
                className="archmation-blogs__card"
                initial={{ opacity: 0, y: 50 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.15,
                  ease: easeOut,
                }}
                onMouseEnter={() => setHoveredId(post.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <motion.div
                  className="archmation-blogs__card-inner"
                  animate={{ y: isHovered ? -4 : 0 }}
                  transition={{ duration: 0.3 }}
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
                      className="archmation-blogs__badge"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        active
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
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

                    <motion.a
                      href={post.href}
                      className="archmation-blogs__read-btn"
                      initial={{ opacity: 0, y: 10 }}
                      animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05, x: 3 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="archmation-blogs__read-btn-shine" aria-hidden="true" />
                      <span className="archmation-blogs__read-btn-label">Read Article</span>
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
                    </motion.a>
                  </div>

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
          })}
        </div>

        <motion.div
          className="archmation-blogs__cta-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOut }}
        >
          <a href="https://archmation.com/our-work/" className="archmation-blogs__cta">
            View All Posts
            <ArrowRight
              className="archmation-blogs__cta-icon"
              strokeWidth={2}
              aria-hidden="true"
            />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
