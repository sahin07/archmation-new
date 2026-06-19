"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { WEB_TECH_HERO_CONTENT } from "@/content/service-heroes/web-tech-solutions";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const iconCount = WEB_TECH_HERO_CONTENT.appIcons.length;
const iconRadius = 200;

export default function WebTechSolutionsHero() {
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
    stats,
    appIcons,
  } = WEB_TECH_HERO_CONTENT;

  return (
    <section
      ref={rootRef}
      className={`archmation-web-tech-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-web-tech-hero-title"
    >
      <div className="archmation-web-tech-hero__bg-base" aria-hidden="true" />
      <div className="archmation-web-tech-hero__bg-gradient" aria-hidden="true" />
      <div
        className="archmation-web-tech-hero__bg-spotlight archmation-web-tech-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-web-tech-hero__bg-spotlight archmation-web-tech-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div className="archmation-web-tech-hero__bg-grid" aria-hidden="true" />

      <div className="archmation-web-tech-hero__inner">
        <div className="archmation-web-tech-hero__grid">
          <div className="archmation-web-tech-hero__content">
            <motion.span
              className="archmation-web-tech-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.span>

            <motion.h2
              id="archmation-web-tech-hero-title"
              className="archmation-web-tech-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              {titleBefore}{" "}
              <span className="archmation-web-tech-hero__title-accent">
                {titleAccent}
              </span>
            </motion.h2>

            <motion.div
              className="archmation-web-tech-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-web-tech-hero__desc">{description}</p>
              <p className="archmation-web-tech-hero__desc archmation-web-tech-hero__desc--muted">
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
                className="archmation-web-tech-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-web-tech-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-web-tech-hero__cta-label">
                  {ctaLabel}
                </span>
                <ArrowRight
                  className="archmation-web-tech-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>

            <motion.div
              className="archmation-web-tech-hero__stats"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.4 }}
            >
              {stats.map((stat) => (
                <div key={stat.label} className="archmation-web-tech-hero__stat">
                  <span className="archmation-web-tech-hero__stat-value">
                    {stat.value}
                  </span>
                  <span className="archmation-web-tech-hero__stat-label">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="archmation-web-tech-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-web-tech-hero__visual-inner">
              <motion.div
                className="archmation-web-tech-hero__mockup"
                initial={{ opacity: 0, scale: 0.85 }}
                animate={
                  active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.85 }
                }
                transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="archmation-web-tech-hero__mockup-frame">
                  <div className="archmation-web-tech-hero__mockup-bezel">
                    <div className="archmation-web-tech-hero__mockup-screen">
                      <div className="archmation-web-tech-hero__mockup-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <div className="archmation-web-tech-hero__mockup-lines">
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                  <div
                    className="archmation-web-tech-hero__mockup-shimmer"
                    aria-hidden="true"
                  />
                </div>
              </motion.div>

              <div className="archmation-web-tech-hero__icons">
                {appIcons.map((app, index) => {
                  const angle = (index / iconCount) * Math.PI * 2;
                  const x = Math.cos(angle) * iconRadius;
                  const y = Math.sin(angle) * iconRadius;

                  return (
                    <div
                      key={app.id}
                      className="archmation-web-tech-hero__icon-wrap"
                      style={
                        {
                          "--icon-x": `${x}px`,
                          "--icon-y": `${y}px`,
                          "--icon-delay": app.delay,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`archmation-web-tech-hero__icon archmation-web-tech-hero__icon--${app.gradient} archmation-web-tech-hero__icon-float--${app.floatVariant}`}
                      >
                        <span aria-hidden="true">{app.icon}</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div
              className="archmation-web-tech-hero__visual-glow"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
