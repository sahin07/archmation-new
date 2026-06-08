"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight, Building2, ChevronDown, Globe, Rocket, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type FAQItem = {
  id: number;
  question: string;
  answer: string;
  icon: LucideIcon;
};

const faqs: FAQItem[] = [
  {
    id: 1,
    question: "What services does Archmation Studios offer?",
    answer:
      "Archmation Studios offers a wide range of creative services including website development, app development, digital marketing, market research, brand identity design, and SEO (Search Engine Optimization). We specialize in comprehensive solutions tailored to your business needs.",
    icon: Globe,
  },
  {
    id: 2,
    question: "How can Archmation Studios help my business?",
    answer:
      "We help businesses grow through strategic digital marketing, lead generation, and innovative creative solutions. Our data-driven approach ensures measurable results and sustainable growth for your organization.",
    icon: TrendingUp,
  },
  {
    id: 3,
    question: "What industries does Archmation Studios specialize in?",
    answer:
      "We have expertise across diverse industries including Real Estate, EdTech, Manufacturing, E-Commerce, 3D Printing, and more. Our portfolio demonstrates success in B2B and B2C sectors across various markets.",
    icon: Building2,
  },
  {
    id: 4,
    question: "How does Archmation Studios approach client projects?",
    answer:
      "We follow a collaborative and strategic approach. We start with understanding your goals, conduct thorough market research, develop customized strategies, execute with precision, and continuously optimize based on performance metrics.",
    icon: Target,
  },
  {
    id: 5,
    question: "What is the process for working with Archmation Studios?",
    answer:
      "Our process includes: Initial consultation to understand your needs, proposal and strategy development, project kickoff, regular communication and updates, execution and optimization, and post-launch support. We ensure transparency throughout the journey.",
    icon: Rocket,
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function FAQSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [expandedId, setExpandedId] = useState<number | null>(1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const active = useSectionReveal(rootRef, {
    amount: 0.2,
    margin: "0px 0px -18% 0px",
    delay: 500,
  });

  const toggleFaq = (id: number) => {
    setExpandedId((current) => (current === id ? null : id));
  };

  return (
    <div
      ref={rootRef}
      className={`archmation-faq__root${active ? " is-inview" : ""}`}
    >
      <div className="archmation-faq__bg-base" aria-hidden="true" />
      <div className="archmation-faq__bg-mesh" aria-hidden="true" />
      <div className="archmation-faq__bg-spotlight-top" aria-hidden="true" />
      <div className="archmation-faq__bg-spotlight-bottom" aria-hidden="true" />
      <div className="archmation-faq__bg-spotlight-center" aria-hidden="true" />
      <div className="archmation-faq__bg-diagonal" aria-hidden="true" />
      <div className="archmation-faq__bg-grain" aria-hidden="true" />

      <div className="archmation-faq__inner">
        <div className="archmation-faq__layout">
          <motion.div
            className="archmation-faq__intro"
            initial={{ opacity: 0, x: -50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="archmation-faq__label-row">
              <motion.div
                className="archmation-faq__label-line"
                initial={{ scaleX: 0 }}
                animate={active ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                aria-hidden="true"
              />
              <motion.p
                className="archmation-faq__eyebrow"
                initial={{ opacity: 0 }}
                animate={active ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                FAQs
              </motion.p>
            </div>

            <motion.h2
              className="archmation-faq__title"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.8, ease: easeOut }}
            >
              Frequently Asked <br />
              <span className="archmation-faq__title-accent">Questions</span>
            </motion.h2>

            <motion.p
              className="archmation-faq__lede"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.4, duration: 0.8, ease: easeOut }}
            >
              Get your queries answered in real time! We&apos;re here to help you
              understand our services and how we can transform your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.8, ease: easeOut }}
            >
              <motion.a
                href="https://archmation.com/contact/"
                className="archmation-faq__contact-btn"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="archmation-faq__contact-btn-shine" aria-hidden="true" />
                <span className="archmation-faq__contact-btn-label">Contact Us</span>
                <ArrowUpRight
                  className="archmation-faq__contact-btn-icon"
                  strokeWidth={2}
                  aria-hidden="true"
                />
              </motion.a>
            </motion.div>
          </motion.div>

          <div className="archmation-faq__list">
            {faqs.map((faq, index) => {
              const isExpanded = expandedId === faq.id;
              const isHovered = hoveredId === faq.id;
              const FaqIcon = faq.icon;

              return (
                <motion.div
                  key={faq.id}
                  className="archmation-faq__item"
                  initial={{ opacity: 0, x: 50 }}
                  animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
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
                    className={`archmation-faq__trigger${isExpanded ? " is-expanded" : ""}${isHovered ? " is-hovered" : ""}`}
                    onClick={() => toggleFaq(faq.id)}
                    aria-expanded={isExpanded}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="archmation-faq__icon-wrap"
                      animate={{ scale: isExpanded ? 1.1 : 1 }}
                      transition={{ duration: 0.3 }}
                      aria-hidden="true"
                    >
                      <FaqIcon
                        className="archmation-faq__icon"
                        strokeWidth={1.5}
                      />
                    </motion.div>
                    <span className="archmation-faq__question">{faq.question}</span>
                    <motion.span
                      className="archmation-faq__chevron-wrap"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ type: "spring", stiffness: 200, duration: 0.4 }}
                      aria-hidden="true"
                    >
                      <ChevronDown
                        className="archmation-faq__chevron"
                        strokeWidth={2}
                      />
                    </motion.span>
                  </motion.button>

                  <AnimatePresence initial={false}>
                    {isExpanded ? (
                      <motion.div
                        key={`answer-${faq.id}`}
                        className="archmation-faq__answer-wrap"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: easeOut }}
                      >
                        <motion.div
                          className="archmation-faq__answer"
                          initial={{ y: -10, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          exit={{ y: -10, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="archmation-faq__answer-text">{faq.answer}</p>
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
    </div>
  );
}
