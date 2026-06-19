"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import {
  BRANDING_PORTFOLIO_FILTERS,
  BRANDING_PORTFOLIO_ITEMS,
  type BrandingPortfolioFilter,
} from "@/content/branding-portfolio";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

export default function BrandingPortfolioSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [activeFilter, setActiveFilter] = useState<BrandingPortfolioFilter>("all");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [portalReady, setPortalReady] = useState(false);

  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -10% 0px",
    delay: 200,
  });

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") {
      return BRANDING_PORTFOLIO_ITEMS;
    }

    return BRANDING_PORTFOLIO_ITEMS.filter((item) => item.folio === activeFilter);
  }, [activeFilter]);

  const currentItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    setSelectedIndex(null);
  }, [activeFilter]);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
        return;
      }
      if (event.key === "ArrowRight") {
        setSlideDirection(1);
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev + 1) % filteredItems.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSlideDirection(-1);
        setSelectedIndex((prev) =>
          prev === null
            ? 0
            : (prev - 1 + filteredItems.length) % filteredItems.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex, filteredItems.length]);

  const openItem = (index: number) => {
    setSlideDirection(1);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const nextItem = () => {
    if (selectedIndex === null) return;
    setSlideDirection(1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % filteredItems.length,
    );
  };

  const prevItem = () => {
    if (selectedIndex === null) return;
    setSlideDirection(-1);
    setSelectedIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  const modal =
    portalReady && selectedIndex !== null && currentItem
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="branding-portfolio-modal-backdrop"
              className="archmation-clients__modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="archmation-clients__modal archmation-branding-portfolio__modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${currentItem.name} branding portfolio`}
              >
                <motion.button
                  type="button"
                  className="archmation-clients__modal-close"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  aria-label="Close portfolio preview"
                >
                  <X
                    className="archmation-clients__modal-close-icon"
                    strokeWidth={1.5}
                  />
                </motion.button>

                <div className="archmation-clients__modal-stage archmation-branding-portfolio__modal-stage">
                  <div className="archmation-clients__modal-media">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={currentItem.id}
                        className="archmation-clients__modal-slide"
                        initial={{
                          opacity: 0,
                          x: slideDirection > 0 ? 48 : -48,
                        }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{
                          opacity: 0,
                          x: slideDirection > 0 ? -48 : 48,
                        }}
                        transition={{ duration: 0.45, ease: easeOut }}
                      >
                        <img
                          src={currentItem.imageSrc}
                          alt={`${currentItem.name} branding`}
                          className="archmation-clients__modal-image archmation-branding-portfolio__modal-image"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="button"
                    className="archmation-clients__modal-nav archmation-clients__modal-nav--prev"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevItem}
                    aria-label="Previous portfolio item"
                  >
                    <ChevronLeft
                      className="archmation-clients__modal-nav-icon"
                      strokeWidth={1.5}
                    />
                  </motion.button>

                  <motion.button
                    type="button"
                    className="archmation-clients__modal-nav archmation-clients__modal-nav--next"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={nextItem}
                    aria-label="Next portfolio item"
                  >
                    <ChevronRight
                      className="archmation-clients__modal-nav-icon"
                      strokeWidth={1.5}
                    />
                  </motion.button>

                  <div className="archmation-clients__modal-dots">
                    {filteredItems.map((item, idx) => (
                      <motion.button
                        key={item.id}
                        type="button"
                        className="archmation-clients__modal-dot"
                        onClick={() => {
                          setSlideDirection(idx > (selectedIndex ?? 0) ? 1 : -1);
                          setSelectedIndex(idx);
                        }}
                        animate={{
                          scaleX: idx === selectedIndex ? 1.5 : 1,
                          opacity: idx === selectedIndex ? 1 : 0.5,
                        }}
                        aria-label={`View ${item.name}`}
                      />
                    ))}
                  </div>
                </div>

                <motion.div
                  className="archmation-clients__modal-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="archmation-clients__modal-title">
                    {currentItem.name}
                  </h3>
                  <p className="archmation-clients__modal-meta">
                    {currentItem.category} · {selectedIndex + 1} of{" "}
                    {filteredItems.length}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </AnimatePresence>,
          document.body,
        )
      : null;

  return (
    <>
      <section
        ref={rootRef}
        className={`archmation-branding-portfolio${active ? " is-inview" : ""}`}
        aria-labelledby="archmation-branding-portfolio-title"
      >
        <div
          className="archmation-branding-portfolio__bg-base"
          aria-hidden="true"
        />
        <div
          className="archmation-branding-portfolio__bg-gradient"
          aria-hidden="true"
        />
        <div
          className="archmation-branding-portfolio__bg-spotlight archmation-branding-portfolio__bg-spotlight--tr"
          aria-hidden="true"
        />
        <div
          className="archmation-branding-portfolio__bg-grid"
          aria-hidden="true"
        />

        <div className="archmation-branding-portfolio__inner">
          <motion.div
            className="archmation-branding-portfolio__header"
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <h2
              id="archmation-branding-portfolio-title"
              className="archmation-branding-portfolio__title"
            >
              Branding
            </h2>
            <div
              className="archmation-branding-portfolio__divider"
              aria-hidden="true"
            />
          </motion.div>

          <motion.nav
            className="archmation-branding-portfolio__filters"
            aria-label="Branding portfolio filters"
            initial={{ opacity: 0, y: 16 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.1 }}
          >
            {BRANDING_PORTFOLIO_FILTERS.map((filter) => {
              const isActive = activeFilter === filter.id;

              return (
                <button
                  key={filter.id}
                  type="button"
                  className={`archmation-branding-portfolio__filter${
                    isActive ? " is-active" : ""
                  }`}
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  {filter.label}
                </button>
              );
            })}
          </motion.nav>

          <motion.div
            className="archmation-branding-portfolio__grid"
            layout
            initial={false}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  layout
                  className="archmation-branding-portfolio__card"
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -16, scale: 0.96 }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.04,
                    ease: easeOut,
                  }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => openItem(index)}
                  aria-label={`Open ${item.name} branding portfolio`}
                >
                  <div className="archmation-branding-portfolio__card-media">
                    <img
                      src={item.imageSrc}
                      alt={`${item.name} branding`}
                      className="archmation-branding-portfolio__card-image"
                      loading="lazy"
                    />
                    <div
                      className="archmation-branding-portfolio__card-shine"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="archmation-branding-portfolio__card-meta">
                    <p className="archmation-branding-portfolio__card-name">
                      Name : {item.name}
                    </p>
                    <p className="archmation-branding-portfolio__card-category">
                      {item.category}
                    </p>
                  </div>
                </motion.button>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
      {modal}
    </>
  );
}
