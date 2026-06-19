"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  CheckCircle,
  Headphones,
  Palette,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import { getHowItWorksSectionContent } from "@/content/service-sections";
import type { ServiceSlug } from "@/content/services";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

export type HowItWorksSectionContent = {
  label?: string;
  title?: string;
  steps?: Step[];
};

const defaultSteps: Step[] = [
  {
    num: "01",
    icon: Headphones,
    title: "Initial Consultation",
    desc: "Begin with a free consultation where we understand your vision and goals for the app",
  },
  {
    num: "02",
    icon: Palette,
    title: "Design & Development",
    desc: "Leverage our expertise in UI/UX design and development to craft a seamless user experience",
  },
  {
    num: "03",
    icon: CheckCircle,
    title: "Testing & Refinement",
    desc: "Rigorous testing ensures functionality and reliability, with continuous refinements based on feedback",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch & Deployment",
    desc: "We handle the app deployment process across platforms, ensuring a successful launch",
  },
];

const defaultContent: Required<HowItWorksSectionContent> = {
  label: "How It Works",
  title: "From Concept to Creation in Just 4 Steps!",
  steps: defaultSteps,
};

const easeOut = [0.22, 1, 0.36, 1] as const;

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.18, ease: easeOut },
  }),
};

type HowItWorksSectionProps = {
  content?: HowItWorksSectionContent;
  serviceSlug?: ServiceSlug;
};

export default function HowItWorksSection({
  content,
  serviceSlug,
}: HowItWorksSectionProps) {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.25,
    margin: "0px 0px -15% 0px",
    delay: 200,
  });

  const { label, title, steps } = {
    ...defaultContent,
    ...(serviceSlug ? getHowItWorksSectionContent(serviceSlug) : undefined),
    ...content,
  };

  return (
    <section
      ref={rootRef}
      className={`archmation-how-it-works${active ? " is-inview" : ""}`}
    >
      <div className="archmation-how-it-works__bg-base" aria-hidden="true" />
      <div className="archmation-how-it-works__bg-radial" aria-hidden="true" />
      <div className="archmation-how-it-works__bg-gradient" aria-hidden="true" />
      <div className="archmation-how-it-works__bg-dots" aria-hidden="true" />

      <div className="archmation-how-it-works__inner">
        <div className="archmation-how-it-works__header">
          <motion.p
            className="archmation-how-it-works__label"
            initial={{ opacity: 0, y: 12 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            {label}
          </motion.p>
          <motion.h2
            className="archmation-how-it-works__title"
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          >
            {title}
          </motion.h2>
        </div>

        <div className="archmation-how-it-works__steps-wrap">
          <motion.div
            className="archmation-how-it-works__line"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={active ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.25, ease: "easeInOut" }}
          />

          <div className="archmation-how-it-works__steps">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="archmation-how-it-works__step"
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
              >
                <div className="archmation-how-it-works__node">
                  <span className="archmation-how-it-works__icon-wrap">
                    <step.icon
                      className="archmation-how-it-works__icon"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span
                    className="archmation-how-it-works__ring"
                    aria-hidden="true"
                  />
                  <span className="archmation-how-it-works__badge">
                    {step.num}
                  </span>
                </div>

                <h3 className="archmation-how-it-works__step-title">
                  {step.title}
                </h3>
                <p className="archmation-how-it-works__step-desc">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
