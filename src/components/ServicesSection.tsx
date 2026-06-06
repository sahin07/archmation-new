"use client";

import { useRef } from "react";
import { motion, type Variants } from "motion/react";
import {
  BookOpen,
  Globe,
  Layers,
  Play,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const services: Service[] = [
  {
    icon: Globe,
    title: "Web/Tech Solutions",
    description:
      "We craft websites, apps, and tech solutions that not only look stunning but also function seamlessly to enhance user experience and drive engagement",
    href: "https://archmation.com/our-services/web-tech-solutions/",
  },
  {
    icon: Play,
    title: "Video Marketing",
    description:
      "We combine the best of performance-driven Video marketing to highlight your brand's legacy and also generate ROI",
    href: "https://archmation.com/our-services/video-marketing/",
  },
  {
    icon: TrendingUp,
    title: "Performance Marketing",
    description:
      "Maximize your online presence and reach your target audience effectively through our strategic Google and Meta Ads services",
    href: "https://archmation.com/our-services/performance-marketing/",
  },
  {
    icon: Target,
    title: "Search Engine Optimization",
    description:
      "We help your website to rank higher on search engine results pages, helping you reach more potential customers and grow your business",
    href: "https://archmation.com/our-services/seo/",
  },
  {
    icon: Layers,
    title: "Branding & Design",
    description:
      "We can help craft a memorable brand identity that reflects your values and resonates with your target audience",
    href: "https://archmation.com/our-services/branding-design/",
  },
  {
    icon: BookOpen,
    title: "Education",
    description:
      "With our 8+ years of experience in powering EdTechs, Schools and Coaching Centres, you can boost your institution's growth",
    href: "https://archmation.com/our-services/edtech/",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.45 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function ServicesSection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  return (
    <div
      ref={rootRef}
      className={`archmation-services${active ? " is-inview" : ""}`}
    >
      <div className="archmation-services__bg-base" aria-hidden="true" />
      <div className="archmation-services__bg-radial" aria-hidden="true" />
      <div className="archmation-services__bg-gradient" aria-hidden="true" />
      <div className="archmation-services__bg-dots" aria-hidden="true" />

      <div className="archmation-services__inner">
        <motion.div
          className="archmation-services__header"
          initial={{ opacity: 0, y: 20 }}
          animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="archmation-services__label">What We Offer</span>
          <h2 className="archmation-services__title">Our Primary Services</h2>
        </motion.div>

        <motion.div
          className="archmation-services__cards"
          variants={containerVariants}
          initial="hidden"
          animate={active ? "visible" : "hidden"}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              className="archmation-services__card-wrap"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 320, damping: 24 }}
            >
              <div className="archmation-services__card">
                <div className="archmation-services__card-accent" aria-hidden="true" />

                <div className="archmation-services__icon-wrap">
                  <service.icon
                    className="archmation-services__icon"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </div>

                <h3 className="archmation-services__card-title">{service.title}</h3>

                <p className="archmation-services__card-desc">{service.description}</p>

                <a href={service.href} className="archmation-services__btn">
                  <span>Explore</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
