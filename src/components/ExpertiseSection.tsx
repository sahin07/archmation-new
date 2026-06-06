"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const arrowStroke = {
  fill: "none",
  stroke: "rgba(255, 255, 255, 0.4)",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const arrowTransition = { duration: 1.2, ease: "easeInOut" as const };
const arrowBaseDelay = 0.55;

function DrawArrowPaths({ active }: { active: boolean }) {
  return (
    <>
      <motion.path
        d="M 65 5 C 27 5 6 34 6 79"
        className="st0"
        style={arrowStroke}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{ ...arrowTransition, delay: active ? arrowBaseDelay : 0 }}
      />
      <motion.path
        d="M 6 79 L 21 66"
        className="tail-1"
        style={arrowStroke}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          ...arrowTransition,
          delay: active ? arrowBaseDelay + 0.8 : 0,
        }}
      />
      <motion.path
        d="M 6 79 L -7 63"
        className="tail-2"
        style={arrowStroke}
        initial={{ pathLength: 0, opacity: 0 }}
        animate={
          active
            ? { pathLength: 1, opacity: 1 }
            : { pathLength: 0, opacity: 0 }
        }
        transition={{
          ...arrowTransition,
          delay: active ? arrowBaseDelay + 0.9 : 0,
        }}
      />
    </>
  );
}

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function ExpertiseSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.3,
    margin: "0px 0px -20% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-expertise${active ? " is-inview" : ""}`}
    >
      <div className="archmation-expertise__grain" aria-hidden="true">
        <svg
          className="archmation-expertise__grain-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="archmation-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={4}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#archmation-noise)" />
        </svg>
      </div>
      <div className="archmation-expertise__lines" aria-hidden="true">
        <span className="archmation-expertise__line archmation-expertise__line--1" />
        <span className="archmation-expertise__line archmation-expertise__line--2" />
        <span className="archmation-expertise__line archmation-expertise__line--3" />
      </div>
      <div className="archmation-expertise__inner">
        <div className="archmation-expertise__grid">
          <div className="archmation-expertise__col archmation-expertise__col--left">
            <motion.span
              className="archmation-expertise__badge"
              initial={{ opacity: 0, x: -24 }}
              animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
              transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
            >
              Welcome to Archmation
            </motion.span>
            <motion.div
              className="archmation-expertise__headlines"
              initial={{ opacity: 0, rotateX: -40, y: 20 }}
              animate={
                active
                  ? { opacity: 1, rotateX: 0, y: 0 }
                  : { opacity: 0, rotateX: -40, y: 20 }
              }
              transition={{ duration: 0.65, delay: 0.25, ease: easeOut }}
              style={{ perspective: 800 }}
            >
              <h2 className="archmation-expertise__title archmation-expertise__title--italic">
                Where creativity
              </h2>
              <h2 className="archmation-expertise__title">
                meets{" "}
                <span className="archmation-expertise__title-accent">clicks</span>
              </h2>
            </motion.div>
            <motion.div
              className="quote archmation-expertise__quote"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.45, ease: easeOut }}
            >
              <div className="down-q q">
                <svg
                  className="archmation-expertise__quote-arrow"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 43.1 85.9"
                  xmlSpace="preserve"
                  role="img"
                  aria-label="Curved arrow leading to a quote"
                >
                  <DrawArrowPaths active={active} />
                </svg>
                <div className="archmation-expertise__quote-copy">
                  <p className="archmation-expertise__quote-text">
                    &ldquo;We excel in Lead Generation Services&rdquo;
                  </p>
                  <p className="archmation-expertise__quote-by">Archmation</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="archmation-expertise__actions"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.65, delay: 0.6, ease: easeOut }}
            >
              <a
                href="#footerContact"
                className="archmation-expertise__btn archmation-expertise__btn--primary"
              >
                Talk to us
                <svg
                  className="archmation-expertise__btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    d="M5 12h14M12 5l7 7-7 7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://archmation.com/contact/"
                className="archmation-expertise__btn archmation-expertise__btn--ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="archmation-expertise__btn-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Download Brochure
              </a>
            </motion.div>
          </div>
          <motion.div
            className="archmation-expertise__col archmation-expertise__col--right"
            initial={{ opacity: 0, x: 48, scale: 0.96 }}
            animate={
              active
                ? { opacity: 1, x: 0, scale: 1 }
                : { opacity: 0, x: 48, scale: 0.96 }
            }
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
          >
            <span className="archmation-expertise__watermark" aria-hidden="true">
              A
            </span>
            <div className="archmation-expertise__body">
              <p className="archmation-expertise__desc archmation-expertise__desc--primary">
                At Archmation, creative elegance and strategic thinking drive each
                of our projects. Specialists in{" "}
                <span className="archmation-expertise__highlight">
                  marketing strategy
                </span>
                ,{" "}
                <span className="archmation-expertise__highlight">
                  brand culture
                </span>
                ,{" "}
                <span className="archmation-expertise__highlight">branding</span>
                , and{" "}
                <span className="archmation-expertise__highlight">
                  lead generation
                </span>
                .
              </p>
              <p className="archmation-expertise__desc archmation-expertise__desc--muted">
                We design tailor-made solutions to enhance your digital presence
                and optimize your business growth. Transform every click into a
                unique opportunity with our expertise.
              </p>
            </div>
            <motion.div
              className="archmation-expertise__rating"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.65, delay: 0.75, ease: easeOut }}
            >
              <svg
                className="archmation-expertise__google"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <div className="archmation-expertise__rating-copy">
                <div className="archmation-expertise__score">
                  <span className="archmation-expertise__score-value">4.7</span>
                  <span className="archmation-expertise__score-plus">+</span>
                </div>
                <div className="archmation-expertise__stars-row">
                  <span className="archmation-expertise__stars" aria-hidden="true">
                    {[0, 1, 2, 3].map((i) => (
                      <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <svg
                      className="archmation-expertise__star--dim"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  </span>
                  <span className="archmation-expertise__rating-label">
                    Google Rating
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
        <div className="archmation-expertise__divider" aria-hidden="true" />
      </div>
    </div>
  );
}
