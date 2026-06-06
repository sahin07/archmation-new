"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

export default function AboutSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef);

  return (
    <div ref={rootRef} className="archmation-about__root">
      <div className="archmation-about__grain" aria-hidden="true">
        <svg className="archmation-about__grain-svg" xmlns="http://www.w3.org/2000/svg">
          <filter id="archmation-about-noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={4}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#archmation-about-noise)" />
        </svg>
      </div>

      <div className="archmation-about__inner">
        <div className="archmation-about__grid">
          <motion.div
            className="archmation-about__media"
            initial={false}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8 }}
          >
            <div className="archmation-about__frame">
              <div className="archmation-about__image-wrap">
                <img
                  src="/images/homepage.jpg"
                  alt="Archmation team at an event"
                  className="archmation-about__image"
                />
                <div className="archmation-about__image-overlay" aria-hidden="true" />
                <p className="archmation-about__image-quote">
                  &ldquo;To look
                  <br />
                  without fear&rdquo;
                </p>
              </div>
            </div>

            <div className="archmation-about__badge" aria-hidden="true">
              <motion.div
                className="archmation-about__badge-spin"
                initial={false}
                animate={active ? { rotate: 360 } : { rotate: 0 }}
                transition={{
                  duration: 20,
                  repeat: active ? Infinity : 0,
                  ease: "linear",
                }}
              >
                <svg viewBox="0 0 100 100" className="archmation-about__badge-svg">
                  <defs>
                    <path
                      id="archmation-about-circle-path"
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#fff" />
                  <text className="archmation-about__badge-text">
                    <textPath href="#archmation-about-circle-path" startOffset="0%">
                      Digital Growth, Delivered. • Digital Growth, Delivered. •
                    </textPath>
                  </text>
                </svg>
                <div className="archmation-about__badge-center">
                  <ArrowRightIcon className="archmation-about__badge-arrow" />
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="archmation-about__content"
            initial={false}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: active ? 0.2 : 0 }}
          >
            <motion.span
              className="archmation-about__label"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.6, delay: active ? 0.3 : 0 }}
            >
              Who Are We
            </motion.span>

            <motion.h2
              className="archmation-about__title"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.4 : 0 }}
            >
              Pioneers of a <span className="archmation-about__title-accent">Digital Future</span>
            </motion.h2>

            <motion.div
              className="archmation-about__copy"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.5 : 0 }}
            >
              <p className="archmation-about__desc archmation-about__desc--primary">
                Our leads generation services offer you increased number of targeted
                and qualified leads in{" "}
                <span className="archmation-about__highlight">B2B</span> and{" "}
                <span className="archmation-about__highlight">B2C</span> markets. We
                serve as your first step to get closer to the customer, based on the
                interest or inquiry of the products/services shown by them.
              </p>
              <p className="archmation-about__desc archmation-about__desc--muted">
                We provide{" "}
                <span className="archmation-about__highlight-soft">pay per lead services</span>
                ,{" "}
                <span className="archmation-about__highlight-soft">video marketing</span>
                ,{" "}
                <span className="archmation-about__highlight-soft">SEO</span> and{" "}
                <span className="archmation-about__highlight-soft">design services</span>{" "}
                to help in growth of online businesses.
              </p>
            </motion.div>

            <motion.div
              className="archmation-about__cta-wrap"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.6 : 0 }}
            >
              <a href="https://archmation.com/about-us/" className="archmation-about__cta">
                Discover More
                <ArrowRightIcon className="archmation-about__cta-icon" />
              </a>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="archmation-about__divider"
          initial={false}
          animate={active ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1.2, delay: active ? 0.8 : 0 }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
