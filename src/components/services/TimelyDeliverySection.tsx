"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Clock } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { getTimelyDeliverySectionContent } from "@/content/service-sections";
import type { ServiceSlug } from "@/content/services";

export type TimelyDeliverySectionContent = {
  title?: string;
  description?: string;
  ctaLabel?: string;
  ctaHref?: string;
  imageSrc?: string;
  imageAlt?: string;
};

const defaultContent: Required<TimelyDeliverySectionContent> = {
  title: "Timely Delivery",
  description:
    "We adhere to strict timelines to ensure your brand identity is ready for deployment as scheduled",
  ctaLabel: "Contact Us",
  ctaHref: "https://archmation.com/contact/",
  imageSrc: "/images/timely-delivery-bg.png",
  imageAlt: "Team working on timely delivery",
};

const easeOut = [0.22, 1, 0.36, 1] as const;

type TimelyDeliverySectionProps = {
  content?: TimelyDeliverySectionContent;
  serviceSlug?: ServiceSlug;
};

export default function TimelyDeliverySection({
  content,
  serviceSlug,
}: TimelyDeliverySectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -12% 0px",
    delay: 200,
  });

  const { title, description, ctaLabel, ctaHref, imageSrc, imageAlt } = {
    ...defaultContent,
    ...(serviceSlug ? getTimelyDeliverySectionContent(serviceSlug) : undefined),
    ...content,
  };

  return (
    <section
      ref={rootRef}
      className={`archmation-timely-delivery${active ? " is-inview" : ""}`}
    >
      <div className="archmation-timely-delivery__bg-base" aria-hidden="true" />
      <div className="archmation-timely-delivery__bg-radial" aria-hidden="true" />
      <div className="archmation-timely-delivery__bg-gradient" aria-hidden="true" />
      <div className="archmation-timely-delivery__bg-grid" aria-hidden="true" />
      <div className="archmation-timely-delivery__bg-dots" aria-hidden="true" />

      <motion.div
        className="archmation-timely-delivery__float archmation-timely-delivery__float--tr"
        aria-hidden="true"
        animate={active ? { y: [0, -30, 0], x: [0, 15, 0] } : { y: 0, x: 0 }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="archmation-timely-delivery__float archmation-timely-delivery__float--bl"
        aria-hidden="true"
        animate={active ? { y: [0, 30, 0], x: [0, -20, 0] } : { y: 0, x: 0 }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="archmation-timely-delivery__inner">
        <div className="archmation-timely-delivery__grid">
          <motion.div
            className="archmation-timely-delivery__content"
            initial={{ opacity: 0, x: -50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <motion.div
              className="archmation-timely-delivery__card"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div
                className="archmation-timely-delivery__card-shine"
                aria-hidden="true"
              />

              <div className="archmation-timely-delivery__card-body">
                <motion.div
                  className="archmation-timely-delivery__icon-wrap"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={
                    active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                  }
                  transition={{ delay: 0.1, duration: 0.5, ease: easeOut }}
                >
                  <Clock
                    className="archmation-timely-delivery__icon"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </motion.div>

                <motion.h2
                  className="archmation-timely-delivery__title"
                  initial={{ opacity: 0, y: 15 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.2, duration: 0.6, ease: easeOut }}
                >
                  {title}
                </motion.h2>

                <motion.p
                  className="archmation-timely-delivery__desc"
                  initial={{ opacity: 0, y: 15 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: easeOut }}
                >
                  {description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: easeOut }}
                >
                  <motion.a
                    href={ctaHref}
                    className="archmation-timely-delivery__cta"
                    whileHover={{ scale: 1.05, x: 3 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span
                      className="archmation-timely-delivery__cta-shine"
                      aria-hidden="true"
                    />
                    <span className="archmation-timely-delivery__cta-label">
                      {ctaLabel}
                    </span>
                    <motion.span
                      className="archmation-timely-delivery__cta-icon"
                      animate={active ? { x: [0, 3, 0], y: [0, -3, 0] } : undefined}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <ArrowUpRight size={16} aria-hidden="true" />
                    </motion.span>
                  </motion.a>
                </motion.div>
              </div>

              <motion.div
                className="archmation-timely-delivery__card-accent"
                aria-hidden="true"
                animate={
                  active ? { opacity: [0.3, 0.6, 0.3] } : { opacity: 0.3 }
                }
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.div
              className="archmation-timely-delivery__accent-line"
              aria-hidden="true"
              initial={{ scaleX: 0 }}
              animate={active ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ delay: 0.8, duration: 0.8, ease: easeOut }}
            />
          </motion.div>

          <motion.div
            className="archmation-timely-delivery__media"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="archmation-timely-delivery__image"
            />
            <div
              className="archmation-timely-delivery__media-overlay"
              aria-hidden="true"
            />
            <div
              className="archmation-timely-delivery__media-border"
              aria-hidden="true"
            />
            <motion.div
              className="archmation-timely-delivery__media-float archmation-timely-delivery__media-float--tr"
              aria-hidden="true"
              animate={
                active ? { rotate: [0, 5, -5, 0] } : { rotate: 0 }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="archmation-timely-delivery__media-float archmation-timely-delivery__media-float--bl"
              aria-hidden="true"
              animate={
                active ? { rotate: [0, -5, 5, 0] } : { rotate: 0 }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
