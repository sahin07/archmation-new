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
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Industry = { icon: LucideIcon; label: string };
type Highlight = { icon: LucideIcon; value: string; label: string };

const industries: Industry[] = [
  { icon: Building2, label: "Real Estate" },
  { icon: GraduationCap, label: "Ed-Tech" },
  { icon: Factory, label: "Manufacturing" },
  { icon: ShoppingBasket, label: "FMCG" },
  { icon: Boxes, label: "Web-3 and Blockchain" },
  { icon: Truck, label: "Logistics" },
  { icon: Car, label: "Automotive" },
  { icon: ShoppingCart, label: "E-Commerce" },
];

const highlights: Highlight[] = [
  { icon: Sparkles, value: "30+", label: "Brands Worked With" },
  { icon: DollarSign, value: "20cr+", label: "in Ad Spends" },
  { icon: TrendingUp, value: "1100cr+", label: "in Revenue Generated" },
  { icon: Crown, value: "", label: "Worked with Top Unicorns" },
  { icon: Camera, value: "10+", label: "Events Covered" },
];

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

export default function IndustriesSection() {
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
              Our Primary Industries
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
              {industries.map((industry) => (
                <motion.li
                  key={industry.label}
                  variants={itemVariants}
                  className="archmation-industries__item"
                >
                  <div className="archmation-industries__row">
                    <span className="archmation-industries__icon-wrap">
                      <industry.icon
                        className="archmation-industries__icon"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                    </span>
                    <span className="archmation-industries__label">{industry.label}</span>
                    <ArrowUpRight
                      className="archmation-industries__arrow"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </div>
                </motion.li>
              ))}
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

              <h3 className="archmation-industries__panel-title">Key Highlights</h3>

              <ul className="archmation-industries__highlights">
                {highlights.map((item, index) => (
                  <motion.li
                    key={item.label}
                    className="archmation-industries__highlight"
                    initial={{ opacity: 0, x: 20 }}
                    animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.45 + index * 0.1,
                      ease: easeOut,
                    }}
                  >
                    <span className="archmation-industries__highlight-icon-wrap">
                      <item.icon
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
                ))}
              </ul>
            </div>

            <motion.a
              href="https://archmation.com/contact/"
              className="archmation-industries__cta"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.95, ease: easeOut }}
            >
              Download Brochure
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
