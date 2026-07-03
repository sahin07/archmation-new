"use client";

import {
  ArrowRight,
  BookOpen,
  Globe,
  Palette,
  Target,
  TrendingUp,
  Video,
  type LucideIcon,
} from "lucide-react";
import { ORDERED_SERVICES_LISTING_CARDS } from "@/content/services-listing";
import { getServiceHref, type ServiceSlug } from "@/content/services";
import "@/components/services/full-spectrum-services.css";

const SERVICE_ICONS: Record<ServiceSlug, LucideIcon> = {
  "web-tech-solutions": Globe,
  "video-marketing": Video,
  "performance-marketing": TrendingUp,
  seo: Target,
  "branding-design": Palette,
  edtech: BookOpen,
};

export default function FullSpectrumServicesSection() {
  return (
    <section className="archmation-full-spectrum">
      <div className="archmation-full-spectrum__bg-grid" aria-hidden="true">
        <div className="archmation-full-spectrum__bg-grid-inner" />
      </div>

      <div
        className="archmation-full-spectrum__glow archmation-full-spectrum__glow--tr"
        aria-hidden="true"
      />
      <div
        className="archmation-full-spectrum__glow archmation-full-spectrum__glow--bl"
        aria-hidden="true"
      />

      <div className="archmation-full-spectrum__inner">
        <header className="archmation-full-spectrum__header">
          <p className="archmation-full-spectrum__eyebrow">WHAT WE OFFER</p>
          <h2 className="archmation-full-spectrum__title">
            Full Spectrum Digital Services
          </h2>
        </header>

        <div className="archmation-full-spectrum__grid">
          {ORDERED_SERVICES_LISTING_CARDS.map((service, index) => {
            const IconComponent = SERVICE_ICONS[service.slug];

            return (
              <article
                key={service.slug}
                className="archmation-full-spectrum__card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <IconComponent
                  className="archmation-full-spectrum__icon"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />

                <h3 className="archmation-full-spectrum__card-title">
                  {service.title}
                </h3>

                <p className="archmation-full-spectrum__card-desc">
                  {service.description}
                </p>

                <a
                  href={getServiceHref(service.slug)}
                  className="archmation-full-spectrum__cta"
                >
                  EXPLORE
                  <ArrowRight
                    className="archmation-full-spectrum__cta-icon"
                    aria-hidden="true"
                  />
                </a>

                <div
                  className="archmation-full-spectrum__card-glow"
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
