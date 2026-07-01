"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Eye, Radio, Target, type LucideIcon } from "lucide-react";
import type {
  ValueCardIconKey,
  ValueSectionContent,
} from "@/content/value-section/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const CARD_ICONS: Record<ValueCardIconKey, LucideIcon> = {
  vision: Eye,
  mission: Target,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2 + index * 0.15, ease: easeOut },
  }),
};

type ValuePropositionSectionProps = {
  content: ValueSectionContent;
};

export default function ValuePropositionSection({
  content,
}: ValuePropositionSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-value__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-value__bg-base" aria-hidden="true" />
      <div className="archmation-value__bg-vertical" aria-hidden="true" />
      <div className="archmation-value__bg-spotlight-left" aria-hidden="true" />
      <div className="archmation-value__bg-spotlight-right" aria-hidden="true" />
      <div className="archmation-value__bg-grid" aria-hidden="true" />

      <div className="archmation-value__inner">
        <div className="archmation-value__layout">
          <motion.div
            className="archmation-value__hero"
            initial={{ opacity: 0, y: 40 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="archmation-value__hero-image"
            />
            <div className="archmation-value__hero-overlay-top" aria-hidden="true" />
            <div className="archmation-value__hero-overlay-side" aria-hidden="true" />

            <motion.div
              className="archmation-value__hero-badge"
              aria-hidden="true"
              initial={false}
              animate={active ? { rotate: 360 } : { rotate: 0 }}
              transition={{
                duration: 18,
                repeat: active ? Infinity : 0,
                ease: "linear",
              }}
            >
              <div className="archmation-value__hero-badge-inner">
                <Radio className="archmation-value__hero-badge-icon" strokeWidth={1.5} />
              </div>
            </motion.div>

            <div className="archmation-value__hero-content">
              <motion.span
                className="archmation-value__label"
                initial={{ opacity: 0, y: 12 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
              >
                {content.label}
              </motion.span>
              <motion.h2
                className="archmation-value__title"
                initial={{ opacity: 0, y: 18 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              >
                {content.title}{" "}
                <span className="archmation-value__title-accent">
                  {content.titleAccent}
                </span>
              </motion.h2>
              <motion.p
                className="archmation-value__desc"
                initial={{ opacity: 0, y: 18 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              >
                {content.description}
              </motion.p>
            </div>
          </motion.div>

          <div className="archmation-value__cards">
            {content.cards.map((card, index) => {
              const Icon = CARD_ICONS[card.icon];
              const link = card.linkHref ? (
                <a href={card.linkHref} className="archmation-value__card-link">
                  {card.linkLabel}
                  <ArrowUpRight
                    className="archmation-value__card-link-icon"
                    strokeWidth={1.5}
                  />
                </a>
              ) : (
                <span className="archmation-value__card-link">
                  {card.linkLabel}
                  <ArrowUpRight
                    className="archmation-value__card-link-icon"
                    strokeWidth={1.5}
                  />
                </span>
              );

              return (
                <motion.div
                  key={card.label}
                  className="archmation-value__card"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate={active ? "visible" : "hidden"}
                >
                  <div className="archmation-value__card-icon-wrap" aria-hidden="true">
                    <div className="archmation-value__card-icon-inner">
                      <Icon className="archmation-value__card-icon" strokeWidth={1.5} />
                    </div>
                  </div>

                  <span className="archmation-value__card-label">{card.label}</span>
                  <h3 className="archmation-value__card-title">{card.title}</h3>
                  <p className="archmation-value__card-desc">{card.description}</p>

                  <div className="archmation-value__card-footer">{link}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
