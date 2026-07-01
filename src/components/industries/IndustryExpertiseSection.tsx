"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion, type Variants } from "motion/react";
import type { IndustryExpertiseContent } from "@/content/industry-expertise/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/industry-expertise.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const statVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const statsGridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

type IndustryExpertiseSectionProps = {
  content: IndustryExpertiseContent;
};

export default function IndustryExpertiseSection({
  content,
}: IndustryExpertiseSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const {
    slug,
    titleBefore,
    titleAccent,
    titleAfter,
    description,
    skills,
    stats,
    ctaTitle,
    ctaDescription,
    ctaLabel,
    ctaHref,
  } = content;

  const titleId = `archmation-industry-expertise-title-${slug}`;

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-expertise archmation-industry-expertise--${slug}${active ? " is-inview" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="archmation-industry-expertise__bg" aria-hidden="true">
        <div className="archmation-industry-expertise__bg-gradient" />
        <div className="archmation-industry-expertise__blob archmation-industry-expertise__blob--pink" />
        <div className="archmation-industry-expertise__blob archmation-industry-expertise__blob--purple" />
        <div className="archmation-industry-expertise__orbs">
          {Array.from({ length: 15 }, (_, index) => (
            <span
              key={index}
              className={`archmation-industry-expertise__orb archmation-industry-expertise__orb--${index}`}
            />
          ))}
        </div>
      </div>

      <div className="archmation-industry-expertise__inner">
        <div className="archmation-industry-expertise__grid">
          <div className="archmation-industry-expertise__content">
            <motion.h2
              id={titleId}
              className="archmation-industry-expertise__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {titleBefore}
              {titleAccent ? (
                <>
                  {" "}
                  <span className="archmation-industry-expertise__title-accent">
                    {titleAccent}
                  </span>
                </>
              ) : null}
              {titleAfter ? ` ${titleAfter}` : null}
            </motion.h2>

            <motion.p
              className="archmation-industry-expertise__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
            >
              {description}
            </motion.p>

            <div className="archmation-industry-expertise__skills">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="archmation-industry-expertise__skill"
                  initial={{ opacity: 0, x: -20 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{
                    duration: 0.6,
                    ease: easeOut,
                    delay: 0.15 + index * 0.08,
                  }}
                >
                  <div className="archmation-industry-expertise__skill-head">
                    <div className="archmation-industry-expertise__skill-label">
                      <span className="archmation-industry-expertise__skill-icon" aria-hidden="true">
                        {skill.icon}
                      </span>
                      <span className="archmation-industry-expertise__skill-name">
                        {skill.name}
                      </span>
                    </div>
                    <span className="archmation-industry-expertise__skill-value">
                      {active ? skill.percentage : 0}%
                    </span>
                  </div>
                  <div className="archmation-industry-expertise__skill-track">
                    <motion.div
                      className="archmation-industry-expertise__skill-bar"
                      initial={{ width: 0 }}
                      animate={active ? { width: `${skill.percentage}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        ease: easeOut,
                        delay: 0.2 + index * 0.1,
                      }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="archmation-industry-expertise__aside">
            <motion.div
              className="archmation-industry-expertise__stats"
              variants={statsGridVariants}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
            >
              {stats.map((stat) => (
                <motion.article
                  key={stat.label}
                  className="archmation-industry-expertise__stat"
                  variants={statVariants}
                >
                  <div
                    className="archmation-industry-expertise__stat-shine"
                    aria-hidden="true"
                  />
                  <div className="archmation-industry-expertise__stat-body">
                  <p className="archmation-industry-expertise__stat-value">
                    {stat.number}
                  </p>
                  <p className="archmation-industry-expertise__stat-label">
                    {stat.label}
                  </p>
                  </div>
                </motion.article>
              ))}
            </motion.div>

            <motion.div
              className="archmation-industry-expertise__cta-card"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.35 }}
            >
              <div
                className="archmation-industry-expertise__cta-glow"
                aria-hidden="true"
              />
              <h3 className="archmation-industry-expertise__cta-title">
                {ctaTitle}
              </h3>
              <p className="archmation-industry-expertise__cta-desc">
                {ctaDescription}
              </p>
              <motion.a
                href={ctaHref}
                className="archmation-industry-expertise__cta-btn"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{ctaLabel}</span>
                <ArrowRight size={20} aria-hidden="true" />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
