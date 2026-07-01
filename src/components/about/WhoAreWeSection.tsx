"use client";

import { useId, useRef } from "react";
import { motion } from "motion/react";
import type {
  AboutParagraph,
  AboutWhoContent,
} from "@/content/about/types";
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

function AboutParagraphText({ paragraph }: { paragraph: AboutParagraph }) {
  const className =
    paragraph.variant === "primary"
      ? "archmation-about__desc archmation-about__desc--primary"
      : "archmation-about__desc archmation-about__desc--muted";

  return (
    <p className={className}>
      {paragraph.segments.map((segment, index) => {
        if (segment.highlight === "strong") {
          return (
            <span key={index} className="archmation-about__highlight">
              {segment.text}
            </span>
          );
        }

        if (segment.highlight === "soft") {
          return (
            <span key={index} className="archmation-about__highlight-soft">
              {segment.text}
            </span>
          );
        }

        return <span key={index}>{segment.text}</span>;
      })}
    </p>
  );
}

type WhoAreWeSectionProps = {
  content: AboutWhoContent;
};

export default function WhoAreWeSection({ content }: WhoAreWeSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef);
  const noiseFilterId = useId();
  const badgePathId = useId();

  return (
    <div ref={rootRef} className="archmation-about__root">
      <div className="archmation-about__grain" aria-hidden="true">
        <svg className="archmation-about__grain-svg" xmlns="http://www.w3.org/2000/svg">
          <filter id={noiseFilterId}>
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={4}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter={`url(#${noiseFilterId})`} />
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
                  src={content.image.src}
                  alt={content.image.alt}
                  className="archmation-about__image"
                />
                <div className="archmation-about__image-overlay" aria-hidden="true" />
                <p className="archmation-about__image-quote">
                  &ldquo;{content.imageQuoteLines[0]}
                  {content.imageQuoteLines.length > 1 ? (
                    <>
                      <br />
                      {content.imageQuoteLines.slice(1).join(" ")}
                    </>
                  ) : null}
                  &rdquo;
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
                      id={badgePathId}
                      d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                    />
                  </defs>
                  <circle cx="50" cy="50" r="48" fill="#fff" />
                  <text className="archmation-about__badge-text">
                    <textPath href={`#${badgePathId}`} startOffset="0%">
                      {content.badgeText}
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
              {content.label}
            </motion.span>

            <motion.h2
              className="archmation-about__title"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.4 : 0 }}
            >
              {content.title}{" "}
              <span className="archmation-about__title-accent">
                {content.titleAccent}
              </span>
            </motion.h2>

            <motion.div
              className="archmation-about__copy"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.5 : 0 }}
            >
              {content.paragraphs.map((paragraph, index) => (
                <AboutParagraphText key={index} paragraph={paragraph} />
              ))}
            </motion.div>

            <motion.div
              className="archmation-about__cta-wrap"
              initial={false}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: active ? 0.6 : 0 }}
            >
              <a href={content.cta.href} className="archmation-about__cta">
                {content.cta.label}
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
