"use client";

import { useRef, type CSSProperties } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { EDTECH_HERO_CONTENT } from "@/content/service-heroes/edtech";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const iconRadius = 200;

export default function EdtechHero() {
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
    educationIcons,
  } = EDTECH_HERO_CONTENT;

  const iconCount = educationIcons.length;

  return (
    <section
      ref={rootRef}
      className={`archmation-edtech-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-edtech-hero-title"
    >
      <div className="archmation-edtech-hero__bg-base" aria-hidden="true" />
      <div className="archmation-edtech-hero__bg-gradient" aria-hidden="true" />
      <div
        className="archmation-edtech-hero__bg-spotlight archmation-edtech-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-edtech-hero__bg-spotlight archmation-edtech-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div className="archmation-edtech-hero__bg-grid" aria-hidden="true" />

      <div className="archmation-edtech-hero__inner">
        <div className="archmation-edtech-hero__grid">
          <div className="archmation-edtech-hero__content">
            <motion.p
              className="archmation-edtech-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.p>

            <motion.h2
              id="archmation-edtech-hero-title"
              className="archmation-edtech-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              {titleBefore}{" "}
              <span className="archmation-edtech-hero__title-accent">
                {titleAccent}
              </span>
            </motion.h2>

            <motion.div
              className="archmation-edtech-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-edtech-hero__desc">{description}</p>
              <p className="archmation-edtech-hero__desc archmation-edtech-hero__desc--muted">
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
                className="archmation-edtech-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-edtech-hero__cta-shine"
                  aria-hidden="true"
                />
                <span className="archmation-edtech-hero__cta-label">
                  {ctaLabel}
                </span>
                <ArrowRight
                  className="archmation-edtech-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-edtech-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-edtech-hero__visual-inner">
              <motion.div
                className="archmation-edtech-hero__monitor"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={
                  active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
                }
                transition={{ duration: 1, ease: easeOut, delay: 0.25 }}
              >
                <div className="archmation-edtech-hero__monitor-tilt">
                  <div className="archmation-edtech-hero__monitor-frame">
                    <div className="archmation-edtech-hero__monitor-screen">
                      <div className="archmation-edtech-hero__dashboard">
                        <div className="archmation-edtech-hero__dashboard-panel archmation-edtech-hero__dashboard-panel--progress">
                          <span className="archmation-edtech-hero__dashboard-label">
                            Progress
                          </span>
                          <div
                            className="archmation-edtech-hero__dashboard-bars"
                            aria-hidden="true"
                          >
                            <span className="is-short" />
                            <span className="is-tall" />
                            <span className="is-mid" />
                          </div>
                        </div>
                        <div className="archmation-edtech-hero__dashboard-panel archmation-edtech-hero__dashboard-panel--performance">
                          <span className="archmation-edtech-hero__dashboard-label">
                            Performance
                          </span>
                          <div
                            className="archmation-edtech-hero__dashboard-ring"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="archmation-edtech-hero__dashboard-panel archmation-edtech-hero__dashboard-panel--analytics">
                          <span className="archmation-edtech-hero__dashboard-label">
                            Analytics
                          </span>
                          <div
                            className="archmation-edtech-hero__dashboard-bars archmation-edtech-hero__dashboard-bars--blue"
                            aria-hidden="true"
                          >
                            <span className="is-short" />
                            <span className="is-tall" />
                            <span className="is-mid" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="archmation-edtech-hero__monitor-stand"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </motion.div>

              <div className="archmation-edtech-hero__icons">
                {educationIcons.map((item, index) => {
                  const angle = (index / iconCount) * Math.PI * 2;
                  const x = Math.cos(angle) * iconRadius;
                  const y = Math.sin(angle) * iconRadius;

                  return (
                    <div
                      key={item.id}
                      className="archmation-edtech-hero__icon-wrap"
                      style={
                        {
                          "--icon-x": `${x}px`,
                          "--icon-y": `${y}px`,
                          "--icon-delay": item.delay,
                        } as CSSProperties
                      }
                    >
                      <div
                        className={`archmation-edtech-hero__icon archmation-edtech-hero__icon--${item.gradient} archmation-edtech-hero__icon-float--${item.floatVariant}`}
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
              className="archmation-edtech-hero__visual-glow"
              aria-hidden="true"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
