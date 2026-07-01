"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ABOUT_DREAM_TEAM_CONTENT } from "@/content/about/dream-team";
import type { DreamTeamGradientKey } from "@/content/about/dream-team-types";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/industries/heroes/industry-hero.css";
import "@/components/about/dream-team.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const GRADIENT_CLASS: Record<DreamTeamGradientKey, string> = {
  "pink-rose": "archmation-dream-team__gradient--pink-rose",
  "purple-indigo": "archmation-dream-team__gradient--purple-indigo",
  "blue-cyan": "archmation-dream-team__gradient--blue-cyan",
  "violet-purple": "archmation-dream-team__gradient--violet-purple",
  "orange-red": "archmation-dream-team__gradient--orange-red",
  "green-emerald": "archmation-dream-team__gradient--green-emerald",
  "pink-rose-soft": "archmation-dream-team__gradient--pink-rose-soft",
  "cyan-blue": "archmation-dream-team__gradient--cyan-blue",
};

export default function DreamTeamSection() {
  const content = ABOUT_DREAM_TEAM_CONTENT;
  const rootRef = useRef<HTMLElement>(null);
  const [failedImages, setFailedImages] = useState<Set<string>>(() => new Set());
  const active = useSectionReveal(rootRef, {
    amount: 0.12,
    margin: "0px 0px -8% 0px",
    delay: 120,
  });

  const titleId = "archmation-dream-team-title";

  return (
    <section
      ref={rootRef}
      id="aboutDreamTeam"
      className={`archmation-dream-team${active ? " is-inview" : ""}`}
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

      <div className="archmation-dream-team__inner">
        <div className="archmation-dream-team__header">
          <div className="archmation-dream-team__intro">
            <motion.span
              className="archmation-industry-hero__label"
              initial={{ opacity: 0, y: 12 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
              transition={{ duration: 0.6, ease: easeOut }}
            >
              {content.label}
            </motion.span>

            <motion.h2
              id={titleId}
              className="archmation-industry-hero__title"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.75, delay: 0.08, ease: easeOut }}
            >
              {content.title}{" "}
              <span className="archmation-industry-hero__title-accent">
                {content.titleAccent}
              </span>
            </motion.h2>
          </div>

          <motion.p
            className="archmation-industry-hero__desc archmation-dream-team__quote"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.75, delay: 0.15, ease: easeOut }}
          >
            {content.quote}
          </motion.p>
        </div>

        <ul className="archmation-dream-team__grid">
          {content.members.map((member, index) => {
            const gradientClass = GRADIENT_CLASS[member.gradient];
            const showFallback = failedImages.has(member.id);

            return (
              <motion.li
                key={member.id}
                className="archmation-dream-team__item"
                initial={{ opacity: 0, y: 28 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.65,
                  delay: 0.15 + index * 0.06,
                  ease: easeOut,
                }}
              >
                <article className="archmation-dream-team__card">
                  <div className="archmation-dream-team__media">
                    {!showFallback ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="archmation-dream-team__photo"
                        loading="lazy"
                        onError={() => {
                          setFailedImages((prev) => {
                            const next = new Set(prev);
                            next.add(member.id);
                            return next;
                          });
                        }}
                      />
                    ) : (
                      <div
                        className={`archmation-dream-team__photo-fallback ${gradientClass}`}
                        aria-hidden="true"
                      >
                        <span className="archmation-dream-team__avatar-initials">
                          {member.initials}
                        </span>
                      </div>
                    )}
                    <div
                      className="archmation-dream-team__photo-overlay"
                      aria-hidden="true"
                    />
                  </div>

                  <div
                    className={`archmation-dream-team__card-tint ${gradientClass}`}
                    aria-hidden="true"
                  />
                  <div
                    className="archmation-dream-team__card-hover-glow"
                    aria-hidden="true"
                  >
                    <span className="archmation-dream-team__card-glow archmation-dream-team__card-glow--tl" />
                    <span className="archmation-dream-team__card-glow archmation-dream-team__card-glow--br" />
                  </div>

                  <div className="archmation-dream-team__card-footer">
                    <h3 className="archmation-dream-team__name">{member.name}</h3>
                    <p className="archmation-dream-team__role">{member.role}</p>
                  </div>

                  <span
                    className={`archmation-dream-team__card-line ${gradientClass}`}
                    aria-hidden="true"
                  />
                </article>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
