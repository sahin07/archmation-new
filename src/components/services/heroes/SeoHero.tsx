"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { SEO_HERO_CONTENT } from "@/content/service-heroes/seo";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const iconRadius = 200;

export default function SeoHero() {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -5% 0px",
    delay: 100,
  });

  const {
    label,
    titleAccent,
    titleAfter,
    description,
    secondaryDescription,
    ctaLabel,
    ctaHref,
    seoIcons,
  } = SEO_HERO_CONTENT;

  const iconCount = seoIcons.length;

  return (
    <section
      ref={rootRef}
      className={`archmation-seo-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-seo-hero-title"
    >
      <div className="archmation-seo-hero__bg-base" aria-hidden="true" />
      <div className="archmation-seo-hero__bg-gradient" aria-hidden="true" />
      <div
        className="archmation-seo-hero__bg-spotlight archmation-seo-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-seo-hero__bg-spotlight archmation-seo-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div className="archmation-seo-hero__bg-grid" aria-hidden="true" />

      <div className="archmation-seo-hero__inner">
        <div className="archmation-seo-hero__grid">
          <div className="archmation-seo-hero__content">
            <motion.p
              className="archmation-seo-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.p>

            <motion.h2
              id="archmation-seo-hero-title"
              className="archmation-seo-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              <span className="archmation-seo-hero__title-accent">
                {titleAccent}
              </span>
              <span className="archmation-seo-hero__title-after">
                {titleAfter}
              </span>
            </motion.h2>

            <motion.div
              className="archmation-seo-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-seo-hero__desc">{description}</p>
              <p className="archmation-seo-hero__desc archmation-seo-hero__desc--muted">
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
                className="archmation-seo-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-seo-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-seo-hero__cta-label">{ctaLabel}</span>
                <ArrowRight
                  className="archmation-seo-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-seo-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-seo-hero__visual-inner">
              <motion.div
                className="archmation-seo-hero__laptop"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
              >
                <div className="archmation-seo-hero__laptop-body">
                  <div className="archmation-seo-hero__laptop-screen">
                    <div className="archmation-seo-hero__laptop-dots">
                      <span />
                      <span />
                      <span />
                    </div>
                    <div
                      className="archmation-seo-hero__laptop-chart"
                      aria-hidden="true"
                    >
                      <span className="archmation-seo-hero__laptop-bar archmation-seo-hero__laptop-bar--1" />
                      <span className="archmation-seo-hero__laptop-bar archmation-seo-hero__laptop-bar--2" />
                      <span className="archmation-seo-hero__laptop-bar archmation-seo-hero__laptop-bar--3" />
                      <span className="archmation-seo-hero__laptop-bar archmation-seo-hero__laptop-bar--4" />
                      <span className="archmation-seo-hero__laptop-bar archmation-seo-hero__laptop-bar--5" />
                    </div>
                  </div>
                  <div
                    className="archmation-seo-hero__laptop-base"
                    aria-hidden="true"
                  >
                    <span />
                  </div>
                  <div
                    className="archmation-seo-hero__laptop-shimmer"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              <div className="archmation-seo-hero__icons">
                {seoIcons.map((item, index) => {
                  const angle = (index / iconCount) * Math.PI * 2;
                  const x = Math.cos(angle) * iconRadius;
                  const y = Math.sin(angle) * iconRadius;

                  return (
                    <div
                      key={item.id}
                      className="archmation-seo-hero__icon-wrap"
                      style={
                        {
                          "--icon-x": `${x}px`,
                          "--icon-y": `${y}px`,
                          "--icon-delay": item.delay,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`archmation-seo-hero__icon archmation-seo-hero__icon--${item.gradient} archmation-seo-hero__icon-float--${item.floatVariant}`}
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
              className="archmation-seo-hero__visual-glow"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
