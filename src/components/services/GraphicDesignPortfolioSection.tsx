"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import {
  GRAPHIC_DESIGN_PORTFOLIO_ITEMS,
  GRAPHIC_DESIGN_PORTFOLIO_TITLE,
} from "@/content/graphic-design-portfolio";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;
const items = GRAPHIC_DESIGN_PORTFOLIO_ITEMS;

export default function GraphicDesignPortfolioSection() {
  const rootRef = useRef<HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [portalReady, setPortalReady] = useState(false);

  const active = useSectionReveal(rootRef, {
    amount: 0.15,
    margin: "0px 0px -10% 0px",
    delay: 200,
  });

  const currentItem = selectedIndex !== null ? items[selectedIndex] : null;

  useEffect(() => {
    setPortalReady(true);
  }, []);

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
          prev === null ? 0 : (prev + 1) % items.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSlideDirection(-1);
        setSelectedIndex((prev) =>
          prev === null ? 0 : (prev - 1 + items.length) % items.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const openItem = (index: number) => {
    setSlideDirection(1);
    setSelectedIndex(index);
  };

  const closeModal = () => setSelectedIndex(null);

  const nextItem = () => {
    if (selectedIndex === null) return;
    setSlideDirection(1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % items.length,
    );
  };

  const prevItem = () => {
    if (selectedIndex === null) return;
    setSlideDirection(-1);
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev - 1 + items.length) % items.length,
    );
  };

  const modal =
    portalReady && selectedIndex !== null && currentItem
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="graphic-design-modal-backdrop"
              className="archmation-clients__modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="archmation-clients__modal archmation-graphic-design-portfolio__modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${GRAPHIC_DESIGN_PORTFOLIO_TITLE} portfolio`}
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

                <div className="archmation-clients__modal-stage archmation-graphic-design-portfolio__modal-stage">
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
                          alt={GRAPHIC_DESIGN_PORTFOLIO_TITLE}
                          className="archmation-clients__modal-image archmation-graphic-design-portfolio__modal-image"
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
                    aria-label="Previous graphic design item"
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
                    aria-label="Next graphic design item"
                  >
                    <ChevronRight
                      className="archmation-clients__modal-nav-icon"
                      strokeWidth={1.5}
                    />
                  </motion.button>

                  <div className="archmation-clients__modal-dots">
                    {items.map((item, idx) => (
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
                        aria-label={`View graphic design item ${idx + 1}`}
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
                    {GRAPHIC_DESIGN_PORTFOLIO_TITLE}
                  </h3>
                  <p className="archmation-clients__modal-meta">
                    {selectedIndex + 1} of {items.length}
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
        className={`archmation-graphic-design-portfolio${active ? " is-inview" : ""}`}
        aria-labelledby="archmation-graphic-design-portfolio-title"
      >
        <div
          className="archmation-graphic-design-portfolio__bg-base"
          aria-hidden="true"
        />
        <div
          className="archmation-graphic-design-portfolio__bg-gradient"
          aria-hidden="true"
        />

        <div className="archmation-graphic-design-portfolio__inner">
          <motion.div
            className="archmation-graphic-design-portfolio__header"
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: easeOut }}
          >
            <h2
              id="archmation-graphic-design-portfolio-title"
              className="archmation-graphic-design-portfolio__title"
            >
              {GRAPHIC_DESIGN_PORTFOLIO_TITLE}
            </h2>
            <div
              className="archmation-graphic-design-portfolio__divider"
              aria-hidden="true"
            />
          </motion.div>

          <motion.div
            className="archmation-graphic-design-portfolio__grid"
            initial={{ opacity: 0, y: 24 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.7, ease: easeOut, delay: 0.1 }}
          >
            {items.map((item, index) => (
              <motion.button
                key={item.id}
                type="button"
                className="archmation-graphic-design-portfolio__tile"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={
                  active
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 20, scale: 0.96 }
                }
                transition={{
                  duration: 0.45,
                  delay: 0.04 * index,
                  ease: easeOut,
                }}
                whileHover={{ y: -4, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => openItem(index)}
                aria-label={`Open graphic design item ${index + 1}`}
              >
                <img
                  src={item.imageSrc}
                  alt={`${GRAPHIC_DESIGN_PORTFOLIO_TITLE} ${index + 1}`}
                  className="archmation-graphic-design-portfolio__tile-image"
                  loading="lazy"
                />
                <span
                  className="archmation-graphic-design-portfolio__tile-shine"
                  aria-hidden="true"
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>
      {modal}
    </>
  );
}
