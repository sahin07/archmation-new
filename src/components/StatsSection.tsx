"use client";

import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "motion/react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Stat = {
  value: number;
  label: string;
  suffix: string;
};

const stats: Stat[] = [
  { value: 10, label: "IN AD SPENDS", suffix: "M+" },
  { value: 125, label: "REVENUE GENERATED", suffix: "M+" },
  { value: 25000, label: "HOURS OF CONTENT CREATED", suffix: "+" },
  { value: 12, label: "GLOBAL CITIES", suffix: "+" },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: easeOut },
  },
};

function AnimatedCounter({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!active || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const interval = window.setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        window.clearInterval(interval);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => window.clearInterval(interval);
  }, [active, target]);

  const display =
    target >= 1000 ? count.toLocaleString("en-US") : String(count);

  return (
    <div className="archmation-stats__counter">
      {display}
      <span className="archmation-stats__counter-suffix">{suffix}</span>
    </div>
  );
}

export default function StatsSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-stats__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-stats__bg-base" aria-hidden="true" />
      <div className="archmation-stats__bg-gradient" aria-hidden="true" />
      <div className="archmation-stats__bg-spotlight-left" aria-hidden="true" />
      <div className="archmation-stats__bg-spotlight-right" aria-hidden="true" />
      <div className="archmation-stats__bg-spotlight-center" aria-hidden="true" />
      <div className="archmation-stats__bg-diagonal" aria-hidden="true" />
      <div className="archmation-stats__bg-grain" aria-hidden="true" />

      <div className="archmation-stats__inner">
        <motion.div
          className="archmation-stats__header"
          initial={{ opacity: 0, y: -20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: easeOut }}
        >
          <p className="archmation-stats__label">OUR IMPACT</p>
          <h2 className="archmation-stats__title">Numbers That Speak</h2>
          <div className="archmation-stats__title-rule" aria-hidden="true" />
        </motion.div>

        <motion.div
          className="archmation-stats__grid"
          variants={containerVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="archmation-stats__card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ type: "spring", stiffness: 320, damping: 22 }}
            >
              <div className="archmation-stats__card-glow" aria-hidden="true" />
              <div className="archmation-stats__card-border" aria-hidden="true" />
              <div className="archmation-stats__card-ring" aria-hidden="true" />

              <div className="archmation-stats__card-body">
                <div className="archmation-stats__card-accent" aria-hidden="true" />

                <motion.div
                  className="archmation-stats__counter-wrap"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={active ? { scale: 1, opacity: 1 } : { scale: 0.5, opacity: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6, ease: easeOut }}
                >
                  <AnimatedCounter
                    target={stat.value}
                    suffix={stat.suffix}
                    active={active}
                  />
                </motion.div>

                <motion.p
                  className="archmation-stats__card-label"
                  initial={{ opacity: 0 }}
                  animate={active ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6, ease: easeOut }}
                >
                  {stat.label}
                </motion.p>

                <div className="archmation-stats__card-dots" aria-hidden="true">
                  {[0, 1, 2].map((dot) => (
                    <motion.span
                      key={dot}
                      className="archmation-stats__card-dot"
                      animate={
                        active
                          ? {
                              opacity: [0.3, 1, 0.3],
                              scale: [1, 1.2, 1],
                            }
                          : { opacity: 0.3, scale: 1 }
                      }
                      transition={{
                        duration: 2,
                        delay: dot * 0.2,
                        repeat: active ? Infinity : 0,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="archmation-stats__divider"
          initial={{ scaleX: 0 }}
          animate={active ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: easeOut }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
