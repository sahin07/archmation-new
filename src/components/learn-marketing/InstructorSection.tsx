"use client";

import Image from "next/image";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { INSTRUCTOR_CONTENT } from "@/content/learn-marketing";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/learn-marketing/learn-section-inner.css";
import "@/components/learn-marketing/instructor.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function InstructorSection() {
  const content = INSTRUCTOR_CONTENT;
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
    delay: 100,
  });

  const titleId = "archmation-instructor-title";

  return (
    <section
      ref={rootRef}
      id="learnInstructor"
      className={`archmation-instructor${active ? " is-inview" : ""}`}
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

      <div className="archmation-instructor__inner">
        <div className="archmation-instructor__grid">
          <motion.div
            className="archmation-instructor__media-col"
            initial={{ opacity: 0, y: 28 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <div className="archmation-instructor__media-group">
              <div
                className="archmation-instructor__media-glow"
                aria-hidden="true"
              />
              <div className="archmation-instructor__media-frame">
                <Image
                  src={content.instructor.image}
                  alt={content.instructor.imageAlt}
                  fill
                  unoptimized
                  className="archmation-instructor__media-image"
                  sizes="(max-width: 1023px) 100vw, (max-width: 1500px) 50vw, 720px"
                />
                <div
                  className="archmation-instructor__media-overlay"
                  aria-hidden="true"
                />
                <div
                  className="archmation-instructor__media-border-glow"
                  aria-hidden="true"
                />
              </div>

              <div className="archmation-instructor__name-badge">
                <p className="archmation-instructor__name">
                  {content.instructor.name}
                </p>
                <p className="archmation-instructor__role">
                  {content.instructor.role}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="archmation-instructor__content-col"
            initial={{ opacity: 0, y: 28 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
            transition={{ duration: 0.85, ease: easeOut, delay: 0.1 }}
          >
            <header className="archmation-instructor__header">
              <h2
                id={titleId}
                className="archmation-industry-hero__title archmation-instructor__title"
              >
                {content.title}
              </h2>

              <ul className="archmation-instructor__credentials">
                {content.credentials.map((credential, index) => (
                  <li
                    key={credential.label}
                    className="archmation-instructor__credential-item"
                  >
                    {index > 0 ? (
                      <span
                        className="archmation-instructor__credential-sep"
                        aria-hidden="true"
                      >
                        |
                      </span>
                    ) : null}
                    <span className="archmation-instructor__credential-text">
                      {credential.label}
                      {credential.emphasis ? (
                        <>
                          {" "}
                          <span className="archmation-instructor__credential-emphasis">
                            {credential.emphasis}
                          </span>
                        </>
                      ) : null}
                    </span>
                  </li>
                ))}
              </ul>
            </header>

            <div className="archmation-instructor__copy">
              {content.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="archmation-industry-hero__desc archmation-instructor__paragraph"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <motion.a
              href={content.cta.href}
              className="archmation-instructor__cta"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{content.cta.label}</span>
              <ArrowRight size={18} aria-hidden="true" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
