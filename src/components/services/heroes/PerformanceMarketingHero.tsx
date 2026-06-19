"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { PERFORMANCE_MARKETING_HERO_CONTENT } from "@/content/service-heroes/performance-marketing";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const iconRadius = 165;

export default function PerformanceMarketingHero() {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -5% 0px",
    delay: 100,
  });

  const {
    label,
    titleBefore,
    titleAccent,
    titleAfter,
    description,
    secondaryDescription,
    ctaLabel,
    ctaHref,
    analyticsIcons,
  } = PERFORMANCE_MARKETING_HERO_CONTENT;

  const iconCount = analyticsIcons.length;

  return (
    <section
      ref={rootRef}
      className={`archmation-performance-marketing-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-performance-marketing-hero-title"
    >
      <div
        className="archmation-performance-marketing-hero__bg-base"
        aria-hidden="true"
      />
      <div
        className="archmation-performance-marketing-hero__bg-gradient"
        aria-hidden="true"
      />
      <div
        className="archmation-performance-marketing-hero__bg-spotlight archmation-performance-marketing-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-performance-marketing-hero__bg-spotlight archmation-performance-marketing-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div
        className="archmation-performance-marketing-hero__bg-grid"
        aria-hidden="true"
      />

      <div className="archmation-performance-marketing-hero__inner">
        <div className="archmation-performance-marketing-hero__grid">
          <div className="archmation-performance-marketing-hero__content">
            <motion.p
              className="archmation-performance-marketing-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.p>

            <motion.h2
              id="archmation-performance-marketing-hero-title"
              className="archmation-performance-marketing-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              {titleBefore}{" "}
              <span className="archmation-performance-marketing-hero__title-accent">
                {titleAccent}
              </span>{" "}
              {titleAfter}
            </motion.h2>

            <motion.div
              className="archmation-performance-marketing-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-performance-marketing-hero__desc">
                {description}
              </p>
              <p className="archmation-performance-marketing-hero__desc archmation-performance-marketing-hero__desc--muted">
                {secondaryDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            >
              <motion.a
                href={ctaHref}
                className="archmation-performance-marketing-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-performance-marketing-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-performance-marketing-hero__cta-label">
                  {ctaLabel}
                </span>
                <ArrowRight
                  className="archmation-performance-marketing-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-performance-marketing-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-performance-marketing-hero__visual-inner">
              <motion.div
                className="archmation-performance-marketing-hero__laptop"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
              >
                <div className="archmation-performance-marketing-hero__laptop-tilt">
                  <div className="archmation-performance-marketing-hero__laptop-screen">
                    <div className="archmation-performance-marketing-hero__laptop-header">
                      <div className="archmation-performance-marketing-hero__laptop-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="archmation-performance-marketing-hero__laptop-label">
                        Google Ads
                      </span>
                    </div>
                    <div className="archmation-performance-marketing-hero__laptop-bars">
                      <span className="archmation-performance-marketing-hero__laptop-bar archmation-performance-marketing-hero__laptop-bar--blue" />
                      <span className="archmation-performance-marketing-hero__laptop-bar archmation-performance-marketing-hero__laptop-bar--red" />
                      <span className="archmation-performance-marketing-hero__laptop-bar archmation-performance-marketing-hero__laptop-bar--orange" />
                    </div>
                    <div
                      className="archmation-performance-marketing-hero__laptop-chart"
                      aria-hidden="true"
                    />
                  </div>
                  <div
                    className="archmation-performance-marketing-hero__laptop-base"
                    aria-hidden="true"
                  />
                  <div
                    className="archmation-performance-marketing-hero__laptop-stand"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              <div className="archmation-performance-marketing-hero__icons">
                {analyticsIcons.map((item, index) => {
                  const angle = (index / iconCount) * Math.PI * 2;
                  const x = Math.cos(angle) * iconRadius;
                  const y = Math.sin(angle) * iconRadius;

                  return (
                    <div
                      key={item.id}
                      className="archmation-performance-marketing-hero__icon-wrap"
                      style={
                        {
                          "--icon-x": `${x}px`,
                          "--icon-y": `${y}px`,
                          "--icon-delay": item.delay,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`archmation-performance-marketing-hero__icon archmation-performance-marketing-hero__icon--${item.gradient} archmation-performance-marketing-hero__icon-float--${item.floatVariant}`}
                        title={item.label}
                      >
                        <span aria-hidden="true">{item.icon}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="archmation-performance-marketing-hero__visual-glow"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
