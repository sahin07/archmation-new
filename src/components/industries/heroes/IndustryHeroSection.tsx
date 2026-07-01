"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import type { IndustryHeroContent } from "@/content/industry-heroes/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

type IndustryHeroSectionProps = {
  content: IndustryHeroContent;
};

export default function IndustryHeroSection({
  content,
}: IndustryHeroSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -5% 0px",
    delay: 100,
  });

  const {
    slug,
    label,
    titleBefore,
    titleAccent,
    titleLine2,
    description,
    ctaLabel,
    ctaHref,
    features,
  } = content;

  const titleId = `archmation-industry-hero-title-${slug}`;

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-hero archmation-industry-hero--${slug}${active ? " is-inview" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="archmation-industry-hero__bg" aria-hidden="true">
        <div className="archmation-industry-hero__bg-base" />
        <div className="archmation-industry-hero__bg-gradient" />
        <div className="archmation-industry-hero__bg-grid" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--tr" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--bl" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--mid" />
        <div className="archmation-industry-hero__bg-shimmer" />
      </div>

      <div className="archmation-industry-hero__inner">
        <div className="archmation-industry-hero__grid">
          <div className="archmation-industry-hero__content">
            <motion.div
              className="archmation-industry-hero__content-stack"
              initial={{ opacity: 0, y: 28 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.8, ease: easeOut }}
            >
              <p className="archmation-industry-hero__label">{label}</p>

              <h2 id={titleId} className="archmation-industry-hero__title">
                {titleBefore}{" "}
                <span className="archmation-industry-hero__title-accent">
                  {titleAccent}
                </span>
                <br />
                <span className="archmation-industry-hero__title-line2">
                  {titleLine2}
                </span>
              </h2>

              <p className="archmation-industry-hero__desc">{description}</p>

              <motion.a
                href={ctaHref}
                className="archmation-industry-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-industry-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-industry-hero__cta-label">
                  {ctaLabel}
                </span>
                <ArrowRight
                  className="archmation-industry-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-industry-hero__features-panel"
            initial={{ opacity: 0, y: 28 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-industry-hero__features">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="archmation-industry-hero__feature"
                  initial={{ opacity: 0, y: 16 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 0.25 + index * 0.1,
                  }}
                >
                  <span
                    className="archmation-industry-hero__feature-icon"
                    aria-hidden="true"
                  >
                    {feature.icon}
                  </span>
                  <h3 className="archmation-industry-hero__feature-title">
                    {feature.title}
                  </h3>
                  <p className="archmation-industry-hero__feature-desc">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
