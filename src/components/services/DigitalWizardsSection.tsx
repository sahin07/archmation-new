"use client";

import Image from "next/image";
import { CheckCircle2, Play } from "lucide-react";
import { DIGITAL_WIZARDS_CONTENT } from "@/content/services-listing/digital-wizards";
import "@/components/services/digital-wizards.css";

export default function DigitalWizardsSection() {
  const { title, description, featureColumns, cta, media } =
    DIGITAL_WIZARDS_CONTENT;

  let featureIndex = 0;

  return (
    <section className="archmation-digital-wizards">
      <div className="archmation-digital-wizards__bg-grid" aria-hidden="true">
        <div className="archmation-digital-wizards__bg-grid-inner" />
      </div>

      <div
        className="archmation-digital-wizards__glow archmation-digital-wizards__glow--tl"
        aria-hidden="true"
      />
      <div
        className="archmation-digital-wizards__glow archmation-digital-wizards__glow--br"
        aria-hidden="true"
      />

      <div className="archmation-digital-wizards__inner">
        <div className="archmation-digital-wizards__layout">
          <div className="archmation-digital-wizards__content">
            <div className="archmation-digital-wizards__intro">
              <h2 className="archmation-digital-wizards__title">
                <span className="archmation-digital-wizards__title-line">
                  {title.line1}
                </span>
                <span className="archmation-digital-wizards__title-accent">
                  {title.line2}
                </span>
              </h2>

              <p className="archmation-digital-wizards__desc">{description}</p>
            </div>

            <div className="archmation-digital-wizards__features">
              {featureColumns.map((column, columnIndex) => (
                <div
                  key={columnIndex}
                  className="archmation-digital-wizards__feature-col"
                >
                  {column.map((item) => {
                    const delay = 0.1 + featureIndex * 0.1;
                    featureIndex += 1;

                    return (
                      <div
                        key={item}
                        className="archmation-digital-wizards__feature"
                        style={{ animationDelay: `${delay}s` }}
                      >
                        <CheckCircle2
                          className="archmation-digital-wizards__feature-icon"
                          aria-hidden="true"
                        />
                        <span className="archmation-digital-wizards__feature-text">
                          {item}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>

            <div className="archmation-digital-wizards__cta-wrap">
              <a href={cta.href} className="archmation-digital-wizards__cta">
                {cta.label}
              </a>
            </div>
          </div>

          <div className="archmation-digital-wizards__media-wrap">
            <div
              className="archmation-digital-wizards__media-glow"
              aria-hidden="true"
            />

            <div className="archmation-digital-wizards__media">
              {media.imageSrc ? (
                <Image
                  src={media.imageSrc}
                  alt={media.imageAlt}
                  fill
                  className="archmation-digital-wizards__media-image"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : null}

              <div
                className="archmation-digital-wizards__media-overlay"
                aria-hidden="true"
              />

              {!media.imageSrc ? (
                <div className="archmation-digital-wizards__media-placeholder">
                  <div className="archmation-digital-wizards__media-placeholder-inner">
                    <p className="archmation-digital-wizards__media-placeholder-title">
                      {media.placeholderTitle}
                    </p>
                    <p className="archmation-digital-wizards__media-placeholder-caption">
                      {media.placeholderCaption}
                    </p>
                  </div>
                </div>
              ) : null}

              <div className="archmation-digital-wizards__play-wrap">
                <div
                  className="archmation-digital-wizards__play-pulse"
                  aria-hidden="true"
                />
                <button
                  type="button"
                  className="archmation-digital-wizards__play-btn"
                  aria-label="Play video"
                >
                  <Play
                    className="archmation-digital-wizards__play-icon"
                    aria-hidden="true"
                  />
                </button>
              </div>

              <div
                className="archmation-digital-wizards__media-corner"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
