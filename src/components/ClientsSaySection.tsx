"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import {
  DEFAULT_CLIENTS_SAY_CONTENT,
  type ClientsSayContent,
} from "@/content/testimonials";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const arrowStroke = {
  fill: "none",
  stroke: "#000",
  strokeWidth: 3,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const arrowTransition = { duration: 1.2, ease: "easeInOut" as const };
const arrowBaseDelay = 0.35;
const easeOut = [0.22, 1, 0.36, 1] as const;

function DrawArrowPaths({ active }: { active: boolean }) {
  return (
    <>
      <motion.path
        d="M 65 5 C 27 5 6 34 6 79"
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

export type ClientsSaySectionContent = Partial<ClientsSayContent>;

type ClientsSaySectionProps = {
  content?: ClientsSaySectionContent;
};

export default function ClientsSaySection({ content }: ClientsSaySectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -12% 0px",
    delay: 200,
  });

  const {
    tagline,
    taglineAuthor,
    titleLine1,
    titleLine2,
    description,
    testimonials,
    ctaLines,
    ctaHref,
  } = { ...DEFAULT_CLIENTS_SAY_CONTENT, ...content };

  return (
    <section
      ref={rootRef}
      className={`archmation-clients-say${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-clients-say-title"
    >
      <div className="archmation-clients-say__inner">
        <div className="archmation-clients-say__header">
          <div className="archmation-clients-say__intro">
            <div className="archmation-clients-say__quote">
              <svg
                className="archmation-clients-say__quote-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 43.1 85.9"
                role="img"
                aria-label="Curved arrow pointing to quote"
              >
                <DrawArrowPaths active={active} />
              </svg>
              <p className="archmation-clients-say__quote-text">
                &ldquo;{tagline}&rdquo;
                <br />
                {taglineAuthor}
              </p>
            </div>

            <motion.h2
              id="archmation-clients-say-title"
              className="archmation-clients-say__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.15 }}
            >
              {titleLine1}
              <br />
              <strong>{titleLine2}</strong>
            </motion.h2>
          </div>

          <motion.div
            className="archmation-clients-say__desc"
            initial={{ opacity: 0, x: 30 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.25 }}
          >
            <p>{description}</p>
          </motion.div>
        </div>

        <div className="archmation-clients-say__listing">
          <div
            ref={trackRef}
            className="archmation-clients-say__track"
            role="list"
            aria-label="Client testimonials"
          >
            {testimonials.map((item, index) => (
              <motion.article
                key={item.name}
                className="archmation-clients-say__card"
                role="listitem"
                initial={{ opacity: 0, y: 24 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
                transition={{
                  duration: 0.6,
                  ease: easeOut,
                  delay: 0.35 + index * 0.1,
                }}
              >
                <p className="archmation-clients-say__name">{item.name}</p>
                <p className="archmation-clients-say__role">{item.role}</p>
                <p className="archmation-clients-say__quote-body">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </motion.article>
            ))}
          </div>
        </div>

        <motion.div
          className="archmation-clients-say__cta-wrap"
          initial={{ opacity: 0, y: 16 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.5 }}
        >
          <div className="lien-container-accueil notCentered">
            <a href={ctaHref} className="textRight">
              <div className="avenirHeavy buttonOnBackground longLink">
                <div className="text">
                  <span>{ctaLines[0]}</span>
                  <span>{ctaLines[1]}</span>
                  <span>{ctaLines[2]}</span>
                </div>
                <div className="clone">
                  <span>{ctaLines[0]}</span>
                  <span>{ctaLines[1]}</span>
                  <span>{ctaLines[2]}</span>
                </div>
              </div>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
