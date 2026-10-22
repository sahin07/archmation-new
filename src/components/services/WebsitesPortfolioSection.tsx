"use client";

import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import {
  WEBSITE_PROJECTS,
  WEBSITES_PORTFOLIO_CONTENT,
} from "@/content/websites-portfolio";
import { useSectionReveal } from "@/hooks/useSectionReveal";
import "@/components/services/websites-portfolio.css";

const easeOut = [0.22, 1, 0.36, 1] as const;

const displayDomain = (url: string) =>
  url.replace(/^https?:\/\//, "").replace(/\/$/, "");

export default function WebsitesPortfolioSection() {
  const rootRef = useRef<HTMLElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -10% 0px",
    delay: 200,
  });

  const { title, subheading } = WEBSITES_PORTFOLIO_CONTENT;

  return (
    <section
      ref={rootRef}
      className={`archmation-websites${active ? " is-inview" : ""}`}
      aria-labelledby="archmation-websites-title"
    >
      <div className="archmation-websites__inner">
        <motion.div
          className="archmation-websites__header"
          initial={{ opacity: 0, y: 24 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.7, ease: easeOut }}
        >
          <h2 id="archmation-websites-title" className="archmation-websites__title">
            {title}
          </h2>
          <p className="archmation-websites__subheading">{subheading}</p>
        </motion.div>

        <div className="archmation-websites__grid">
          {WEBSITE_PROJECTS.map((project, index) => {
            const domain = displayDomain(project.url);

            return (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="archmation-websites__card"
                aria-label={`Visit ${project.name} (${domain}) in a new tab`}
                initial={{ opacity: 0, y: 32 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
                transition={{ duration: 0.6, delay: 0.1 + index * 0.08, ease: easeOut }}
              >
                <div className="archmation-websites__browser">
                  <div className="archmation-websites__browser-bar" aria-hidden="true">
                    <span className="archmation-websites__dot archmation-websites__dot--red" />
                    <span className="archmation-websites__dot archmation-websites__dot--amber" />
                    <span className="archmation-websites__dot archmation-websites__dot--green" />
                    <span className="archmation-websites__address">{domain}</span>
                  </div>
                  <div className="archmation-websites__screen">
                    <img
                      src={project.imageSrc}
                      alt={`${project.name} website homepage`}
                      className="archmation-websites__image"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="archmation-websites__meta">
                  <div className="archmation-websites__meta-text">
                    <h3 className="archmation-websites__name">{project.name}</h3>
                    <p className="archmation-websites__category">{project.category}</p>
                  </div>
                  <span className="archmation-websites__visit" aria-hidden="true">
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
