"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { IndustrySolutionsContent } from "@/content/industry-solutions/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/industry-solutions.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

type IndustrySolutionsSectionProps = {
  content: IndustrySolutionsContent;
};

export default function IndustrySolutionsSection({
  content,
}: IndustrySolutionsSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const { slug, title, intro, ctaLabel, ctaHref, solutions } = content;
  const titleId = `archmation-industry-solutions-title-${slug}`;

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-solutions archmation-industry-solutions--${slug}${active ? " is-inview" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="archmation-industry-solutions__bg" aria-hidden="true">
        <div className="archmation-industry-solutions__bg-gradient" />
        <div className="archmation-industry-solutions__bg-grid" />
        <div className="archmation-industry-solutions__glow archmation-industry-solutions__glow--tr" />
        <div className="archmation-industry-solutions__glow archmation-industry-solutions__glow--bl" />
      </div>

      <div className="archmation-industry-solutions__inner">
        <div className="archmation-industry-solutions__header">
          <motion.div
            className="archmation-industry-solutions__headline"
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 1, ease: easeOut }}
          >
            <h2 id={titleId} className="archmation-industry-solutions__title">
              {title}
            </h2>
          </motion.div>

          <motion.div
            className="archmation-industry-solutions__intro-block"
            initial={{ opacity: 0, x: 40 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 1, ease: easeOut, delay: 0.2 }}
          >
            <p className="archmation-industry-solutions__intro">
              {intro.map((part, index) => (
                <span
                  key={index}
                  className={
                    part.variant === "bold"
                      ? "archmation-industry-solutions__intro-bold"
                      : undefined
                  }
                >
                  {part.text}
                </span>
              ))}
            </p>

            <a
              href={ctaHref}
              className="archmation-industry-solutions__cta"
            >
              <span className="archmation-industry-solutions__cta-label">
                {ctaLabel}
              </span>
              <ArrowRight
                className="archmation-industry-solutions__cta-icon"
                size={18}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="archmation-industry-solutions__grid"
          variants={gridVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
        >
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.id}
              className={`archmation-industry-solutions__card archmation-industry-solutions__card--${index + 1}`}
              variants={cardVariants}
            >
              <div className="archmation-industry-solutions__card-inner">
                <div
                  className="archmation-industry-solutions__card-overlay"
                  aria-hidden="true"
                />
                <div
                  className="archmation-industry-solutions__card-hover-glow"
                  aria-hidden="true"
                />

                <span
                  className="archmation-industry-solutions__card-icon"
                  aria-hidden="true"
                >
                  {solution.icon}
                </span>

                <h3 className="archmation-industry-solutions__card-title">
                  {solution.title}
                </h3>

                <p className="archmation-industry-solutions__card-desc">
                  {solution.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
