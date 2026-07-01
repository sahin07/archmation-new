"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowUpRight,
  BarChart3,
  Building2,
  ChevronDown,
  Factory,
  Globe,
  Home,
  Megaphone,
  Rocket,
  Search,
  Target,
  TrendingUp,
  Users,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type {
  IndustryFAQContent,
  IndustryFAQIcon,
} from "@/content/industry-faq/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/industries/industry-faq.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const FAQ_ICONS: Record<IndustryFAQIcon, LucideIcon> = {
  "bar-chart": BarChart3,
  building: Building2,
  factory: Factory,
  globe: Globe,
  home: Home,
  megaphone: Megaphone,
  rocket: Rocket,
  search: Search,
  target: Target,
  "trending-up": TrendingUp,
  users: Users,
  wrench: Wrench,
};

type IndustryFAQSectionProps = {
  content: IndustryFAQContent;
};

export default function IndustryFAQSection({
  content,
}: IndustryFAQSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -10% 0px",
    delay: 120,
  });

  const {
    slug,
    eyebrow,
    titleBefore,
    titleAccent,
    lede,
    ctaLabel,
    ctaHref,
    items,
  } = content;

  const titleId = `archmation-industry-faq-title-${slug}`;

  const toggleFaq = (id: number) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <section
      ref={rootRef}
      className={`archmation-industry-faq archmation-industry-faq--${slug}${active ? " is-inview" : ""}`}
      aria-labelledby={titleId}
    >
      <div className="archmation-industry-hero__bg" aria-hidden="true">
        <div className="archmation-industry-hero__bg-base" />
        <div className="archmation-industry-hero__bg-gradient" />
        <div className="archmation-industry-hero__bg-grid" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--tr" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--bl" />
        <div className="archmation-industry-hero__bg-spotlight archmation-industry-hero__bg-spotlight--mid" />
        <div className="archmation-industry-hero__bg-shimmer" />
      </div>

      <div className="archmation-industry-hero__inner">
        <div className="archmation-industry-faq__layout">
          <motion.div
            className="archmation-industry-faq__intro"
            initial={{ opacity: 0, x: -40 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <p className="archmation-industry-hero__label">{eyebrow}</p>

            <h2 id={titleId} className="archmation-industry-hero__title">
              {titleBefore}{" "}
              <span className="archmation-industry-hero__title-accent">
                {titleAccent}
              </span>
            </h2>

            <p className="archmation-industry-hero__desc">{lede}</p>

            <motion.a
              href={ctaHref}
              className="archmation-industry-hero__cta"
              whileHover={{ scale: 1.05, x: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <span
                className="archmation-industry-hero__cta-shine"
                aria-hidden="true"
              />
              <span className="archmation-industry-hero__cta-label">
                {ctaLabel}
              </span>
              <ArrowUpRight
                className="archmation-industry-hero__cta-icon"
                size={16}
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>

          <div className="archmation-industry-faq__list">
            {items.map((faq, index) => {
              const isExpanded = expandedId === faq.id;
              const isHovered = hoveredId === faq.id;
              const FaqIcon = FAQ_ICONS[faq.icon];

              return (
                <motion.div
                  key={faq.id}
                  className="archmation-industry-faq__item"
                  initial={{ opacity: 0, x: 40 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.1,
                    ease: easeOut,
                  }}
                  onMouseEnter={() => setHoveredId(faq.id)}
                  onMouseLeave={() => setHoveredId(null)}
                >
                  <motion.button
                    type="button"
                    className={`archmation-industry-faq__trigger${isExpanded ? " is-expanded" : ""}${isHovered ? " is-hovered" : ""}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isExpanded}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="archmation-industry-faq__icon-wrap"
                      animate={{ scale: isExpanded ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <FaqIcon
                        className="archmation-industry-faq__icon"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <span className="archmation-industry-faq__question">
                      {faq.question}
                    </span>
                    <motion.span
                      className="archmation-industry-faq__chevron-wrap"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{
                        type: "spring",
                        stiffness: 200,
                        duration: 0.4,
                      }}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className="archmation-industry-faq__chevron"
                        strokeWidth={2}
                      />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        key={`answer-${faq.id}`}
                        className="archmation-industry-faq__answer-wrap"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: easeOut }}
                      >
                        <motion.div
                          className="archmation-industry-faq__answer"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="archmation-industry-faq__answer-text">
                            {faq.answer}
                          </p>
                        </motion.div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
