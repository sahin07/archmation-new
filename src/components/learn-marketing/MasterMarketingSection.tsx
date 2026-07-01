"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { MASTER_MARKETING_CONTENT } from "@/content/learn-marketing";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/learn-marketing/learn-section-inner.css";
import "@/components/learn-marketing/master-marketing.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function MasterMarketingSection() {
  const content = MASTER_MARKETING_CONTENT;
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -5% 0px",
    delay: 80,
  });

  const titleId = "archmation-master-marketing-title";

  return (
    <section
      ref={rootRef}
      id="learnMasterMarketing"
      className={`archmation-master-marketing${active ? " is-inview" : ""}`}
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

      <div className="archmation-master-marketing__inner">
        <div className="archmation-master-marketing__grid">
          <motion.div
            className="archmation-master-marketing__content"
            initial={{ opacity: 0, y: 28 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="archmation-master-marketing__badge-wrap">
              <p className="archmation-industry-hero__label archmation-master-marketing__eyebrow">
                {content.badge}
              </p>
            </div>

            <h2
              id={titleId}
              className="archmation-industry-hero__title archmation-master-marketing__title"
            >
              <span className="archmation-master-marketing__title-row">
                {content.title.line1} {content.title.line2}
              </span>
              <span className="archmation-master-marketing__title-row archmation-master-marketing__title-row--accent">
                {content.title.line3}
              </span>
            </h2>

            <p className="archmation-industry-hero__desc archmation-master-marketing__desc">
              {content.description}
            </p>

            <div className="archmation-master-marketing__cta-row">
              <motion.a
                href={content.primaryCta.href}
                className="archmation-master-marketing__cta archmation-master-marketing__cta--primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>{content.primaryCta.label}</span>
                <ArrowRight size={18} aria-hidden="true" />
              </motion.a>
              <motion.a
                href={content.secondaryCta.href}
                className="archmation-master-marketing__cta archmation-master-marketing__cta--secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {content.secondaryCta.label}
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            className="archmation-master-marketing__card-col"
            initial={{ opacity: 0, y: 28 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.12 }}
          >
            <div className="archmation-master-marketing__card-float" aria-hidden="true" />
            <div className="archmation-master-marketing__card-group">
              <div className="archmation-master-marketing__card-glow" aria-hidden="true" />
              <div className="archmation-master-marketing__card">
                <div
                  className="archmation-master-marketing__card-inner-glow"
                  aria-hidden="true"
                />
                <div className="archmation-master-marketing__card-content">
                  <div className="archmation-master-marketing__card-preface-wrap">
                    <p className="archmation-master-marketing__card-preface">
                      {content.card.preface}
                    </p>
                    <div
                      className="archmation-master-marketing__card-divider"
                      aria-hidden="true"
                    />
                  </div>

                  <div className="archmation-master-marketing__card-body">
                    <h3 className="archmation-master-marketing__card-title-lead">
                      <span>{content.card.titleTop[0]}</span>
                      <span>{content.card.titleTop[1]}</span>
                    </h3>
                    <h3 className="archmation-master-marketing__card-title-circuit">
                      {content.card.titleBottom}
                    </h3>
                  </div>

                  <p className="archmation-master-marketing__card-subtitle">
                    {content.card.subtitle}
                  </p>
                </div>
                <div
                  className="archmation-master-marketing__card-border-glow"
                  aria-hidden="true"
                />
                <div
                  className="archmation-master-marketing__card-corner archmation-master-marketing__card-corner--tr"
                  aria-hidden="true"
                />
                <div
                  className="archmation-master-marketing__card-corner archmation-master-marketing__card-corner--bl"
                  aria-hidden="true"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <ul className="archmation-master-marketing__info-grid">
          {content.infoCards.map((card, index) => (
            <motion.li
              key={card.label}
              className="archmation-master-marketing__info-card"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{
                duration: 0.65,
                ease: easeOut,
                delay: 0.25 + index * 0.1,
              }}
            >
              <p className="archmation-industry-hero__label archmation-master-marketing__info-label">
                {card.label}
              </p>
              {card.body ? (
                <p className="archmation-master-marketing__info-body">
                  {card.body}
                </p>
              ) : null}
              {card.bullets ? (
                <ul className="archmation-master-marketing__info-list">
                  {card.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
