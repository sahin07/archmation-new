"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { VIDEO_MARKETING_HERO_CONTENT } from "@/content/service-heroes/video-marketing";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function VideoMarketingHero() {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -5% 0px",
    delay: 100,
  });

  const {
    label,
    titleAccent,
    titleAfter,
    description,
    secondaryDescription,
    ctaLabel,
    ctaHref,
    video,
  } = VIDEO_MARKETING_HERO_CONTENT;

  return (
    <section
      ref={rootRef}
      className={`archmation-video-marketing-hero${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-video-marketing-hero-title"
    >
      <div
        className="archmation-video-marketing-hero__bg-base"
        aria-hidden="true"
      />
      <div
        className="archmation-video-marketing-hero__bg-gradient"
        aria-hidden="true"
      />
      <div
        className="archmation-video-marketing-hero__bg-spotlight archmation-video-marketing-hero__bg-spotlight--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-video-marketing-hero__bg-spotlight archmation-video-marketing-hero__bg-spotlight--bl"
        aria-hidden="true"
      />
      <div
        className="archmation-video-marketing-hero__bg-grid"
        aria-hidden="true"
      />

      <div className="archmation-video-marketing-hero__inner">
        <div className="archmation-video-marketing-hero__grid">
          <div className="archmation-video-marketing-hero__content">
            <motion.p
              className="archmation-video-marketing-hero__label"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut }}
            >
              {label}
            </motion.p>

            <motion.h2
              id="archmation-video-marketing-hero-title"
              className="archmation-video-marketing-hero__title"
              initial={{ opacity: 0, y: 24 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.8, ease: easeOut, delay: 0.1 }}
            >
              <span className="archmation-video-marketing-hero__title-accent">
                {titleAccent}
              </span>{" "}
              {titleAfter}
            </motion.h2>

            <motion.div
              className="archmation-video-marketing-hero__copy"
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.2 }}
            >
              <p className="archmation-video-marketing-hero__desc">
                {description}
              </p>
              <p className="archmation-video-marketing-hero__desc archmation-video-marketing-hero__desc--muted">
                {secondaryDescription}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.7, ease: easeOut, delay: 0.3 }}
            >
              <motion.a
                href={ctaHref}
                className="archmation-video-marketing-hero__cta"
                whileHover={{ scale: 1.05, x: 3 }}
                whileTap={{ scale: 0.95 }}
              >
                <span
                  className="archmation-video-marketing-hero__cta-shine"
                  aria-hidden="true"
                />
                <Play
                  className="archmation-video-marketing-hero__cta-icon"
                  size={16}
                  aria-hidden="true"
                />
                <span className="archmation-video-marketing-hero__cta-label">
                  {ctaLabel}
                </span>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            className="archmation-video-marketing-hero__visual"
            initial={{ opacity: 0, x: 50 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          >
            <div className="archmation-video-marketing-hero__visual-glow archmation-video-marketing-hero__visual-glow--tr" aria-hidden="true" />
            <div className="archmation-video-marketing-hero__visual-glow archmation-video-marketing-hero__visual-glow--bl" aria-hidden="true" />

            <div className="archmation-video-marketing-hero__player">
              <div
                className="archmation-video-marketing-hero__player-bg"
                aria-hidden="true"
              />
              <div
                className="archmation-video-marketing-hero__player-pattern"
                aria-hidden="true"
              />
              <div
                className="archmation-video-marketing-hero__player-vignette"
                aria-hidden="true"
              />

              <div className="archmation-video-marketing-hero__player-header">
                <div className="archmation-video-marketing-hero__avatar">
                  {video.channelInitial}
                </div>
                <div className="archmation-video-marketing-hero__channel">
                  <p className="archmation-video-marketing-hero__channel-title">
                    {video.channelTitle}
                  </p>
                  <p className="archmation-video-marketing-hero__channel-subtitle">
                    {video.channelSubtitle}
                  </p>
                </div>
              </div>

              <div className="archmation-video-marketing-hero__play-wrap">
                <div className="archmation-video-marketing-hero__play-btn">
                  <span aria-hidden="true">▶</span>
                </div>
              </div>

              <div className="archmation-video-marketing-hero__player-footer">
                <div className="archmation-video-marketing-hero__duration">
                  {video.durationLabel}
                </div>
                <div className="archmation-video-marketing-hero__overlay-copy">
                  <p className="archmation-video-marketing-hero__overlay-title">
                    {video.overlayTitle}
                  </p>
                  <p className="archmation-video-marketing-hero__overlay-subtitle">
                    {video.overlaySubtitle}
                  </p>
                </div>
                <div className="archmation-video-marketing-hero__youtube-btn">
                  {video.youtubeLabel}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
