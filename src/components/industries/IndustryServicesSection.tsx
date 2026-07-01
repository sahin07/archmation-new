"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import type { IndustryServicesContent } from "@/content/industry-services/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

type IndustryServicesSectionProps = {
  content: IndustryServicesContent;
};

export default function IndustryServicesSection({
  content,
}: IndustryServicesSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const { slug, title, intro, services } = content;
  const patternId = `industry-services-grid-${slug}`;

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-services archmation-industry-services--${slug}${active ? " is-inview" : ""}`}
      aria-labelledby={`archmation-industry-services-title-${slug}`}
    >
      <div
        className="archmation-industry-services__accent-bar"
        aria-hidden="true"
      />

      <div className="archmation-industry-services__pattern" aria-hidden="true">
        <svg viewBox="0 0 1440 800" preserveAspectRatio="none">
          <defs>
            <pattern
              id={patternId}
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="#9333ea"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="1440" height="800" fill={`url(#${patternId})`} />
        </svg>
      </div>

      <div
        className="archmation-industry-services__blob archmation-industry-services__blob--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-industry-services__blob archmation-industry-services__blob--bl"
        aria-hidden="true"
      />

      <div className="archmation-industry-services__inner">
        <div className="archmation-industry-services__header">
          <motion.h2
            id={`archmation-industry-services-title-${slug}`}
            className="archmation-industry-services__title"
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            {title}
          </motion.h2>

          <motion.p
            className="archmation-industry-services__intro"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          >
            {intro.map((part, index) => {
              if (part.variant === "bold") {
                return (
                  <span
                    key={index}
                    className="archmation-industry-services__intro-bold"
                  >
                    {part.text}
                  </span>
                );
              }

              if (part.variant === "accent") {
                return (
                  <span
                    key={index}
                    className="archmation-industry-services__intro-accent"
                  >
                    {part.text}
                  </span>
                );
              }

              return <span key={index}>{part.text}</span>;
            })}
          </motion.p>
        </div>

        <motion.div
          className="archmation-industry-services__grid"
          variants={gridVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.article
              key={service.id}
              className="archmation-industry-services__card"
              variants={cardVariants}
            >
              <div
                className="archmation-industry-services__card-glow"
                aria-hidden="true"
              />

              <div className="archmation-industry-services__card-inner">
                <div className="archmation-industry-services__icon">
                  {service.icon}
                </div>

                <h3 className="archmation-industry-services__card-title">
                  {service.title}
                </h3>

                <p className="archmation-industry-services__card-desc">
                  {service.description}
                </p>

                <div
                  className="archmation-industry-services__card-line"
                  aria-hidden="true"
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
