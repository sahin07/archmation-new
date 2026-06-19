"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import {
  ArrowDownRight,
  CheckCircle2,
  Layers,
  Lock,
  Monitor,
  Sparkles,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { getDevelopmentSectionContent } from "@/content/service-sections";
import type { ServiceSlug } from "@/content/services";

type Feature = {
  icon: LucideIcon;
  label: string;
};

export type DevelopmentSectionContent = {
  title: string;
  description: string;
  secondaryDescription: string;
  benefits: string[];
  features: Feature[];
  ctaLabel?: string;
};

const defaultFeatures: Feature[] = [
  { icon: Monitor, label: "UI/UX User Friendly" },
  { icon: Zap, label: "Focus on Target Audience" },
  { icon: Lock, label: "Fully Secured" },
  { icon: Sparkles, label: "Impactful Experience" },
  { icon: Layers, label: "Latest Design" },
];

const defaultBenefits = [
  "10+ Years of Experience",
  "Access to Advanced Tools and Technologies",
  "Diverse Client Portfolio",
  "ROI and Statistics-Driven Approach",
  "Out-of-the-Box Solutions",
  "Quality Assurance",
  "Timely Delivery",
  "Transparent Communication",
];

const defaultContent: DevelopmentSectionContent = {
  title: "Develop High Performance Websites and Apps",
  description:
    "Our design and development approach combines audience segmentation and optimization strategies to ensure tangible business results. We focus on real conversions and sustainable growth, not vanity metrics.",
  secondaryDescription:
    "Partner with us for standout digital experiences and achieve your online goals.",
  benefits: defaultBenefits,
  features: defaultFeatures,
  ctaLabel: "Download Brochure",
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const featureVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

type DevelopmentSectionProps = {
  content?: Partial<DevelopmentSectionContent>;
  serviceSlug?: ServiceSlug;
};

export default function DevelopmentSection({
  content,
  serviceSlug,
}: DevelopmentSectionProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -10% 0px",
    delay: 200,
  });

  const {
    title,
    description,
    secondaryDescription,
    benefits,
    features,
    ctaLabel,
  } = {
    ...defaultContent,
    ...(serviceSlug ? getDevelopmentSectionContent(serviceSlug) : undefined),
    ...content,
  };

  return (
    <section
      ref={rootRef}
      className={`archmation-development${active ? " is-inview" : ""}`}
    >
      <div className="archmation-development__bg-base" aria-hidden="true" />
      <div className="archmation-development__bg-gradient" aria-hidden="true" />
      <div
        className="archmation-development__bg-spotlight archmation-development__bg-spotlight--tl"
        aria-hidden="true"
      />
      <div
        className="archmation-development__bg-spotlight archmation-development__bg-spotlight--br"
        aria-hidden="true"
      />
      <div
        className="archmation-development__bg-spotlight archmation-development__bg-spotlight--center"
        aria-hidden="true"
      />
      <div className="archmation-development__bg-grid" aria-hidden="true" />
      <div className="archmation-development__bg-diagonal" aria-hidden="true" />
      <div className="archmation-development__bg-grain" aria-hidden="true" />

      <div className="archmation-development__inner">
        <div className="archmation-development__grid">
          <motion.div
            className="archmation-development__content"
            initial={{ opacity: 0, x: -50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h2
              className="archmation-development__title"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {title}
            </motion.h2>

            <motion.p
              className="archmation-development__desc"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              {description}
            </motion.p>

            <motion.p
              className="archmation-development__desc archmation-development__desc--muted"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {secondaryDescription}
            </motion.p>

            <motion.div
              className="archmation-development__benefits"
              variants={containerVariants}
              initial="hidden"
              animate={active ? "visible" : "hidden"}
            >
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  variants={itemVariants}
                  className="archmation-development__benefit"
                >
                  <CheckCircle2
                    className="archmation-development__benefit-icon"
                    size={20}
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span className="archmation-development__benefit-text">
                    {benefit}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="archmation-development__aside"
            initial={{ opacity: 0, x: 50, y: 50 }}
            animate={
              active ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: 50, y: 50 }
            }
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={`archmation-development__features-card${
                hoveredFeature !== null
                  ? " archmation-development__features-card--active"
                  : ""
              }`}
            >
              <div
                className="archmation-development__features-accent"
                aria-hidden="true"
              />

              <h3 className="archmation-development__features-title">Features</h3>

              <motion.div
                className="archmation-development__feature-list"
                variants={containerVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
              >
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  const isHovered = hoveredFeature === index;

                  return (
                    <motion.button
                      key={feature.label}
                      type="button"
                      variants={featureVariants}
                      className={`archmation-development__feature-item${
                        isHovered ? " is-hovered" : ""
                      }`}
                      onMouseEnter={() => setHoveredFeature(index)}
                      onMouseLeave={() => setHoveredFeature(null)}
                      onClick={() =>
                        setHoveredFeature(isHovered ? null : index)
                      }
                    >
                      <Icon
                        className="archmation-development__feature-icon"
                        size={24}
                        strokeWidth={1.75}
                        aria-hidden="true"
                      />
                      <span className="archmation-development__feature-label">
                        {feature.label}
                      </span>
                      <ArrowDownRight
                        className="archmation-development__feature-arrow"
                        size={16}
                        aria-hidden="true"
                      />
                    </motion.button>
                  );
                })}
              </motion.div>

              <motion.button
                type="button"
                className="archmation-development__cta"
                initial={{ opacity: 0, y: 20 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <span>{ctaLabel}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
