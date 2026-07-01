"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowUpRight,
  Boxes,
  Building2,
  Camera,
  Car,
  Crown,
  DollarSign,
  Factory,
  GraduationCap,
  ShoppingBasket,
  ShoppingCart,
  Sparkles,
  TrendingUp,
  Truck,
  type LucideIcon,
} from "lucide-react";
import type {
  PrimaryHighlightIconKey,
  PrimaryIndustriesContent,
  PrimaryIndustryIconKey,
} from "@/content/primary-industries/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const INDUSTRY_ICONS: Record<PrimaryIndustryIconKey, LucideIcon> = {
  "real-estate": Building2,
  "ed-tech": GraduationCap,
  manufacturing: Factory,
  fmcg: ShoppingBasket,
  web3: Boxes,
  logistics: Truck,
  automotive: Car,
  "e-commerce": ShoppingCart,
};

const HIGHLIGHT_ICONS: Record<PrimaryHighlightIconKey, LucideIcon> = {
  brands: Sparkles,
  "ad-spends": DollarSign,
  revenue: TrendingUp,
  unicorns: Crown,
  events: Camera,
};

const listVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.35 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const easeOut = [0.22, 1, 0.36, 1] as const;

type PrimaryIndustriesSectionProps = {
  content: PrimaryIndustriesContent;
};

export default function PrimaryIndustriesSection({
  content,
}: PrimaryIndustriesSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-industries__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-industries__grid-bg" aria-hidden="true">
        <div className="archmation-industries__grid-pattern" />
      </div>

      <div className="archmation-industries__inner">
        <div className="archmation-industries__layout">
          <div className="archmation-industries__main">
            <motion.h2
              className="archmation-industries__title"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
            >
              {content.title}
            </motion.h2>

            <motion.div
              className="archmation-industries__divider"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={active ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 1, delay: 0.25, ease: easeOut }}
            />

            <motion.ul
              className="archmation-industries__list"
              variants={listVariants}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
            >
              {content.industries.map((industry) => {
                const Icon = INDUSTRY_ICONS[industry.icon];

                return (
                  <motion.li
                    key={industry.label}
                    variants={itemVariants}
                    className="archmation-industries__item"
                  >
                    <div className="archmation-industries__row">
                      <span className="archmation-industries__icon-wrap">
                        <Icon
                          className="archmation-industries__icon"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="archmation-industries__label">
                        {industry.label}
                      </span>
                      <ArrowUpRight
                        className="archmation-industries__arrow"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>

          <motion.div
            className="archmation-industries__aside"
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
          >
            <div className="archmation-industries__panel">
              <div className="archmation-industries__panel-glow" aria-hidden="true" />

              <h3 className="archmation-industries__panel-title">
                {content.highlightsTitle}
              </h3>

              <ul className="archmation-industries__highlights">
                {content.highlights.map((item, index) => {
                  const Icon = HIGHLIGHT_ICONS[item.icon];

                  return (
                    <motion.li
                      key={item.label}
                      className="archmation-industries__highlight"
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.45 + index * 0.1,
                        ease: easeOut,
                      }}
                    >
                      <span className="archmation-industries__highlight-icon-wrap">
                        <Icon
                          className="archmation-industries__highlight-icon"
                          strokeWidth={1.5}
                          aria-hidden="true"
                        />
                      </span>
                      <p className="archmation-industries__highlight-copy">
                        {item.value ? (
                          <span className="archmation-industries__highlight-value">
                            {item.value}{" "}
                          </span>
                        ) : null}
                        {item.label}
                      </p>
                    </motion.li>
                  );
                })}
              </ul>
            </div>

            <motion.a
              href={content.cta.href}
              className="archmation-industries__cta"
              target={content.cta.openInNewTab ? "_blank" : undefined}
              rel={content.cta.openInNewTab ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.95, ease: easeOut }}
            >
              {content.cta.label}
              <ArrowUpRight
                className="archmation-industries__cta-icon"
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
