"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowUpRight, Eye, Radio, Target, type LucideIcon } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type ValueCard = {
  label: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const cards: ValueCard[] = [
  {
    label: "Our Vision",
    icon: Eye,
    title: "Digital Growth, Delivered.",
    desc: "Experience top-notch digital marketing services with Archmation Studios. From Facebook Ads to Google PPC campaigns, we provide comprehensive solutions to elevate your business.",
  },
  {
    label: "Our Mission",
    icon: Target,
    title: "Digitising Dreams",
    desc: "To boost your business with specialised Facebook and Google Ads, PPC, video marketing and more.",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const cardVariants: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, delay: 0.2 + index * 0.15, ease: easeOut },
  }),
};

export default function ValueSection() {
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
              src="/images/smart-results.jpg"
              alt="Digital marketing results and strategy session"
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
                Our Value
              </motion.span>
              <motion.h2
                className="archmation-value__title"
                initial={{ opacity: 0, y: 18 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, delay: 0.3, ease: easeOut }}
              >
                Your Digital Marketing Partner in{" "}
                <span className="archmation-value__title-accent">Bangalore</span>
              </motion.h2>
              <motion.p
                className="archmation-value__desc"
                initial={{ opacity: 0, y: 18 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
                transition={{ duration: 0.7, delay: 0.4, ease: easeOut }}
              >
                We craft intelligent and innovative designs that not only look great but also
                enhance user experiences and achieve strategic objectives. We help you improve
                your digital presence and achieve your marketing goals through expert social
                media, video and targeted digital marketing strategies.
              </motion.p>
            </div>
          </motion.div>

          <div className="archmation-value__cards">
            {cards.map((card, index) => (
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
                    <card.icon className="archmation-value__card-icon" strokeWidth={1.5} />
                  </div>
                </div>

                <span className="archmation-value__card-label">{card.label}</span>
                <h3 className="archmation-value__card-title">{card.title}</h3>
                <p className="archmation-value__card-desc">{card.desc}</p>

                <div className="archmation-value__card-footer">
                  <span className="archmation-value__card-link">
                    Learn more
                    <ArrowUpRight className="archmation-value__card-link-icon" strokeWidth={1.5} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
