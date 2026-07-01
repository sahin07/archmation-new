"use client";

import { useRef } from "react";
import { Briefcase, Check, DollarSign, Download } from "lucide-react";
import { motion } from "motion/react";
import { LEAD_CIRCUIT_CONTENT } from "@/content/learn-marketing";
import type { LeadCircuitModuleIcon } from "@/content/learn-marketing/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/learn-marketing/learn-section-inner.css";
import "@/components/learn-marketing/lead-circuit.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

function ModuleIcon({ icon }: { icon: LeadCircuitModuleIcon }) {
  if (icon === "letter-a") {
    return <span className="archmation-lead-circuit__module-letter">A</span>;
  }

  if (icon === "letter-g") {
    return <span className="archmation-lead-circuit__module-letter">G</span>;
  }

  if (icon === "dollar") {
    return (
      <DollarSign
        className="archmation-lead-circuit__module-icon"
        size={48}
        strokeWidth={1.5}
        aria-hidden="true"
      />
    );
  }

  return (
    <Briefcase
      className="archmation-lead-circuit__module-icon"
      size={48}
      strokeWidth={1.5}
      aria-hidden="true"
    />
  );
}

export default function LeadCircuitSection() {
  const content = LEAD_CIRCUIT_CONTENT;
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.1,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const titleId = "archmation-lead-circuit-title";

  return (
    <section
      ref={rootRef}
      id="learnLeadCircuit"
      className={`archmation-lead-circuit${active ? " is-inview" : ""}`}
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

      <div className="archmation-lead-circuit__inner">
        <motion.header
          className="archmation-lead-circuit__header"
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          <p className="archmation-industry-hero__label archmation-lead-circuit__eyebrow">
            {content.eyebrow}
          </p>
          <h2 id={titleId} className="archmation-industry-hero__title archmation-lead-circuit__title">
            {content.title}
          </h2>
        </motion.header>

        <ul className="archmation-lead-circuit__modules">
          {content.modules.map((module, index) => (
            <motion.li
              key={module.id}
              className="archmation-lead-circuit__module-card"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                ease: easeOut,
              }}
            >
              <div className="archmation-lead-circuit__module-icon-wrap">
                <ModuleIcon icon={module.icon} />
              </div>
              <h3 className="archmation-lead-circuit__module-title">{module.title}</h3>
            </motion.li>
          ))}
        </ul>

        <div className="archmation-lead-circuit__bottom">
          <motion.div
            className="archmation-lead-circuit__eligibility"
            initial={{ opacity: 0, x: -24 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -24 }}
            transition={{ duration: 0.7, delay: 0.35, ease: easeOut }}
          >
            <h3 className="archmation-lead-circuit__block-title">
              {content.eligibilityTitle}
            </h3>
            <ul className="archmation-lead-circuit__eligibility-list">
              {content.eligibility.map((item) => (
                <li key={item} className="archmation-lead-circuit__eligibility-item">
                  <Check
                    className="archmation-lead-circuit__check-icon"
                    size={20}
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                  <p className="archmation-lead-circuit__eligibility-text">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="archmation-lead-circuit__details-panel"
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, delay: 0.45, ease: easeOut }}
          >
            <div className="archmation-lead-circuit__details-card">
              <h3 className="archmation-lead-circuit__block-title">
                {content.courseDetailsTitle}
              </h3>

              <dl className="archmation-lead-circuit__details-list">
                <div className="archmation-lead-circuit__details-row">
                  <dt className="archmation-lead-circuit__details-label">
                    {content.courseDetails.formatLabel}
                  </dt>
                  <dd className="archmation-lead-circuit__details-value">
                    {content.courseDetails.format}
                  </dd>
                </div>
                <div className="archmation-lead-circuit__details-row">
                  <dt className="archmation-lead-circuit__details-label">
                    {content.courseDetails.durationLabel}
                  </dt>
                  <dd className="archmation-lead-circuit__details-value">
                    {content.courseDetails.duration}
                  </dd>
                </div>
                <div className="archmation-lead-circuit__details-row">
                  <dt className="archmation-lead-circuit__details-label">
                    {content.courseDetails.includesLabel}
                  </dt>
                  <dd className="archmation-lead-circuit__details-value">
                    {content.courseDetails.includes}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="archmation-lead-circuit__cta-wrap">
              <motion.a
                href={content.cta.href}
                className="archmation-industry-hero__cta archmation-lead-circuit__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-industry-hero__cta-shine"
                  aria-hidden="true"
                />
                <Download
                  className="archmation-lead-circuit__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
                <span className="archmation-industry-hero__cta-label">
                  {content.cta.label}
                </span>
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
