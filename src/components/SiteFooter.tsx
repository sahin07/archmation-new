"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Resources",
    links: [
      { label: "About us", href: "https://archmation.com/about-us/" },
      { label: "Blogs & Case Studies", href: "https://archmation.com/our-work/" },
    ],
  },
  {
    title: "Services",
    links: [
      {
        label: "Tech Solutions",
        href: "https://archmation.com/our-services/web-tech-solutions/",
      },
      {
        label: "Video Marketing",
        href: "https://archmation.com/our-services/video-marketing/",
      },
      {
        label: "Performance Marketing",
        href: "https://archmation.com/our-services/performance-marketing/",
      },
      {
        label: "Search Engine Optimization",
        href: "https://archmation.com/our-services/seo/",
      },
      {
        label: "Branding & Design",
        href: "https://archmation.com/our-services/branding-design/",
      },
      {
        label: "Education",
        href: "https://archmation.com/our-services/edtech/",
      },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Sales Support", href: "mailto:hello@archmation.com" },
      { label: "Contact us", href: "https://archmation.com/contact/" },
    ],
  },
];

const socialLinks: { icon: LucideIcon; label: string; href: string }[] = [
  { icon: Mail, label: "Email", href: "mailto:hello@archmation.com" },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/archmation",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/archmation",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function SiteFooter() {
  const rootRef = useRef<HTMLElement>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);
  const [hoveredLegal, setHoveredLegal] = useState<string | null>(null);

  const active = useSectionReveal(rootRef, {
    amount: 0.08,
    margin: "0px 0px 0px 0px",
    delay: 0,
  });

  return (
    <footer
      ref={rootRef}
      id="archmationFooter"
      className={`archmation-footer${active ? " is-inview" : ""}`}
    >
      <div className="archmation-footer__bg-base" aria-hidden="true" />
      <div className="archmation-footer__bg-mesh" aria-hidden="true" />
      <div className="archmation-footer__bg-spotlight-top" aria-hidden="true" />
      <div className="archmation-footer__bg-spotlight-left" aria-hidden="true" />
      <div className="archmation-footer__bg-spotlight-right" aria-hidden="true" />
      <div className="archmation-footer__bg-grid" aria-hidden="true" />
      <div className="archmation-footer__bg-grain" aria-hidden="true" />
      <motion.div
        className="archmation-footer__orb archmation-footer__orb--right"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="archmation-footer__orb archmation-footer__orb--left"
        animate={{ y: [0, 20, 0], x: [0, 10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        aria-hidden="true"
      />

      <div className="archmation-footer__inner">
        <div className="archmation-footer__top">
          <motion.div
            className="archmation-footer__brand"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            <motion.div
              className="archmation-footer__brand-stack"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <a href="https://archmation.com/" className="archmation-footer__brand-link">
                <motion.div
                  className="archmation-footer__brand-mark"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  aria-hidden="true"
                >
                  <span className="archmation-footer__brand-ring" />
                </motion.div>
                <span className="archmation-footer__brand-text">
                  <span className="archmation-footer__brand-name">ARCHMATION</span>
                  <span className="archmation-footer__brand-tag">STUDIOS</span>
                </span>
              </a>

              <p className="archmation-footer__desc">
                We offer a wide range of creative services including website
                development, app development, digital marketing, education
                technology, brand identity design, and SEO.
              </p>

              <div className="archmation-footer__socials">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                const isHovered = hoveredSocial === social.label;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="archmation-footer__social"
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      social.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    onMouseEnter={() => setHoveredSocial(social.label)}
                    onMouseLeave={() => setHoveredSocial(null)}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.span
                      className="archmation-footer__social-glow"
                      animate={{ opacity: isHovered ? 1 : 0 }}
                      aria-hidden="true"
                    />
                    <Icon className="archmation-footer__social-icon" strokeWidth={1.5} />
                  </motion.a>
                );
              })}
              </div>
            </motion.div>
          </motion.div>

          <div className="archmation-footer__columns">
            {footerColumns.map((column, colIndex) => (
              <motion.div
                key={column.title}
                className="archmation-footer__column"
                initial={{ opacity: 0, y: 30 }}
                animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + colIndex * 0.1,
                  ease: easeOut,
                }}
              >
                <h4 className="archmation-footer__column-title">{column.title}</h4>
                <ul className="archmation-footer__links">
                  {column.links.map((link, linkIndex) => {
                    const linkKey = `${column.title}-${link.label}`;
                    const isHovered = hoveredLink === linkKey;

                    return (
                      <motion.li
                        key={linkKey}
                        initial={{ opacity: 0, x: -10 }}
                        animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                        transition={{
                          duration: 0.5,
                          delay: 0.2 + colIndex * 0.08 + linkIndex * 0.05,
                          ease: easeOut,
                        }}
                      >
                        <motion.a
                          href={link.href}
                          className="archmation-footer__link"
                          onMouseEnter={() => setHoveredLink(linkKey)}
                          onMouseLeave={() => setHoveredLink(null)}
                          whileHover={{ x: 4 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span>{link.label}</span>
                          <motion.span
                            className="archmation-footer__link-arrow"
                            animate={{
                              opacity: isHovered ? 1 : 0,
                              x: isHovered ? 4 : -4,
                            }}
                            transition={{ duration: 0.2 }}
                            aria-hidden="true"
                          >
                            <ArrowUpRight strokeWidth={2} />
                          </motion.span>
                          <motion.span
                            className="archmation-footer__link-underline"
                            animate={{ scaleX: isHovered ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            aria-hidden="true"
                          />
                        </motion.a>
                      </motion.li>
                    );
                  })}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="archmation-footer__divider"
          initial={{ scaleX: 0 }}
          animate={active ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOut }}
          aria-hidden="true"
        />

        <div className="archmation-footer__bottom">
          <motion.p
            className="archmation-footer__copyright"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, ease: easeOut }}
          >
            Copyright© 2024 Archmation Studio, All rights reserved.
          </motion.p>

          <motion.div
            className="archmation-footer__legal"
            initial={{ opacity: 0, y: 10 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOut }}
          >
            <motion.a
              href="https://archmation.com/privacy-policy/"
              className="archmation-footer__legal-link"
              onMouseEnter={() => setHoveredLegal("privacy")}
              onMouseLeave={() => setHoveredLegal(null)}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Privacy Policy
              <motion.span
                className="archmation-footer__legal-arrow"
                animate={{
                  opacity: hoveredLegal === "privacy" ? 1 : 0,
                  x: hoveredLegal === "privacy" ? 0 : -4,
                }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
            <span className="archmation-footer__legal-sep" aria-hidden="true" />
            <motion.a
              href="https://archmation.com/terms-of-use/"
              className="archmation-footer__legal-link"
              onMouseEnter={() => setHoveredLegal("terms")}
              onMouseLeave={() => setHoveredLegal(null)}
              whileHover={{ x: 2 }}
              transition={{ duration: 0.2 }}
            >
              Terms of Service
              <motion.span
                className="archmation-footer__legal-arrow"
                animate={{
                  opacity: hoveredLegal === "terms" ? 1 : 0,
                  x: hoveredLegal === "terms" ? 0 : -4,
                }}
                transition={{ duration: 0.2 }}
                aria-hidden="true"
              >
                →
              </motion.span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
