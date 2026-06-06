"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  AlignLeft,
  FileSearch,
  MessageSquare,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Step = {
  num: string;
  icon: LucideIcon;
  title: string;
  desc: string;
};

const steps: Step[] = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Spark Your Vision",
    desc: "Kickstart with a brainstorm to uncover your goals and audience.",
  },
  {
    num: "02",
    icon: FileSearch,
    title: "Shed Light on Strategy",
    desc: "Illuminate your path with market research and tailor-made plans.",
  },
  {
    num: "03",
    icon: AlignLeft,
    title: "Craft Your Brand Tale",
    desc: "Weave captivating content and visuals to bring your brand to life.",
  },
  {
    num: "04",
    icon: Rocket,
    title: "Launch Your Digital Journey",
    desc: "Execute your strategy and fine-tune for success. Let's dive in!",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const stepVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: index * 0.18, ease: easeOut },
  }),
};

export default function ProcessSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-process__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-process__bg-base" aria-hidden="true" />
      <div className="archmation-process__bg-radial" aria-hidden="true" />
      <div className="archmation-process__bg-gradient" aria-hidden="true" />
      <div className="archmation-process__bg-dots" aria-hidden="true" />

      <div className="archmation-process__inner">
        <div className="archmation-process__header">
          <motion.p
            className="archmation-process__label"
            initial={{ opacity: 0, y: 12 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.5, ease: easeOut }}
          >
            How We Work
          </motion.p>
          <motion.h2
            className="archmation-process__title"
            initial={{ opacity: 0, y: 18 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          >
            Get Started in Just 4 Simple Steps!
          </motion.h2>
        </div>

        <div className="archmation-process__steps-wrap">
          <motion.div
            className="archmation-process__line"
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={active ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.25, ease: "easeInOut" }}
          />

          <div className="archmation-process__steps">
            {steps.map((step, index) => (
              <motion.div
                key={step.num}
                className="archmation-process__step"
                custom={index}
                variants={stepVariants}
                initial="hidden"
                animate={active ? "visible" : "hidden"}
              >
                <div className="archmation-process__node">
                  <span className="archmation-process__icon-wrap">
                    <step.icon
                      className="archmation-process__icon"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                  <span className="archmation-process__ring" aria-hidden="true" />
                  <span className="archmation-process__badge">{step.num}</span>
                </div>

                <h3 className="archmation-process__step-title">{step.title}</h3>
                <p className="archmation-process__step-desc">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
