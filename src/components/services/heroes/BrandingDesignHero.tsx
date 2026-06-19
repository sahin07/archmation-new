"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { BRANDING_DESIGN_HERO_CONTENT } from "@/content/service-heroes/branding-design";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const iconRadius = 165;

export default function BrandingDesignHero() {
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
    description,
    secondaryDescription,
    ctaLabel,
    ctaHref,
    monitorTagline,
    designIcons,
  } = BRANDING_DESIGN_HERO_CONTENT;

  const iconCount = designIcons.length;

  return (
    <section
      ref={rootRef}
      className={`archmation-branding-design-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-branding-design-hero-title"
    >
      <div className="archmation-branding-design-hero__bg-base" aria-hidden="true" />
      <div
        className="archmation-branding-design-hero__bg-gradient"
        aria-hidden="true"
      />
      <div
        className="archmation-branding-design-hero__bg-spotlight archmation-branding-design-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-branding-design-hero__bg-spotlight archmation-branding-design-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div className="archmation-branding-design-hero__bg-grid" aria-hidden="true" />

      <div className="archmation-branding-design-hero__inner">
        <div className="archmation-branding-design-hero__grid">
          <div className="archmation-branding-design-hero__content">
            <motion.p
              className="archmation-branding-design-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.p>

            <motion.h2
              id="archmation-branding-design-hero-title"
              className="archmation-branding-design-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              {titleBefore}{" "}
              <span className="archmation-branding-design-hero__title-accent">
                {titleAccent}
              </span>
            </motion.h2>

            <motion.div
              className="archmation-branding-design-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-branding-design-hero__desc">
                {description}
              </p>
              <p className="archmation-branding-design-hero__desc archmation-branding-design-hero__desc--muted">
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
                className="archmation-branding-design-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-branding-design-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-branding-design-hero__cta-label">
                  {ctaLabel}
                </span>
                <ArrowRight
                  className="archmation-branding-design-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-branding-design-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-branding-design-hero__visual-inner">
              <motion.div
                className="archmation-branding-design-hero__laptop"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
              >
                <div className="archmation-branding-design-hero__laptop-tilt">
                  <div className="archmation-branding-design-hero__laptop-screen">
                    <div
                      className="archmation-branding-design-hero__laptop-pattern"
                      aria-hidden="true"
                    />
                    <div className="archmation-branding-design-hero__laptop-content">
                      <p className="archmation-branding-design-hero__laptop-tagline">
                        {monitorTagline}
                      </p>
                      <div
                        className="archmation-branding-design-hero__laptop-lines"
                        aria-hidden="true"
                      >
                        <span className="archmation-branding-design-hero__laptop-line archmation-branding-design-hero__laptop-line--blue" />
                        <span className="archmation-branding-design-hero__laptop-line archmation-branding-design-hero__laptop-line--gray" />
                      </div>
                      <div
                        className="archmation-branding-design-hero__laptop-blocks"
                        aria-hidden="true"
                      >
                        <span />
                        <span className="is-accent" />
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="archmation-branding-design-hero__laptop-base"
                    aria-hidden="true"
                  />
                  <div
                    className="archmation-branding-design-hero__laptop-stand"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              <div className="archmation-branding-design-hero__icons">
                {designIcons.map((item, index) => {
                  const angle = (index / iconCount) * Math.PI * 2;
                  const x = Math.cos(angle) * iconRadius;
                  const y = Math.sin(angle) * iconRadius;

                  return (
                    <div
                      key={item.id}
                      className="archmation-branding-design-hero__icon-wrap"
                      style={
                        {
                          "--icon-x": `${x}px`,
                          "--icon-y": `${y}px`,
                          "--icon-delay": item.delay,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`archmation-branding-design-hero__icon archmation-branding-design-hero__icon--${item.gradient} archmation-branding-design-hero__icon-float--${item.floatVariant}`}
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
              className="archmation-branding-design-hero__visual-glow"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
