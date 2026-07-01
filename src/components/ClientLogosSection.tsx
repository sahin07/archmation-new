"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import type { ClientLogosContent } from "@/content/client-logos/types";
import { useSectionReveal } from "@/hooks/useSectionReveal";

const easeOut = [0.22, 1, 0.36, 1] as const;

type ClientLogosSectionProps = {
  content: ClientLogosContent;
};

export default function ClientLogosSection({ content }: ClientLogosSectionProps) {
  const { clients } = content;
  const rootRef = useRef<HTMLDivElement>(null);
  const [selectedClient, setSelectedClient] = useState<number | null>(null);
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);
  const [portalReady, setPortalReady] = useState(false);

  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  const currentClient =
    selectedClient !== null ? clients[selectedClient] : null;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (selectedClient === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedClient(null);
        return;
      }
      if (event.key === "ArrowRight") {
        setSlideDirection(1);
        setSelectedClient((prev) =>
          prev === null ? 0 : (prev + 1) % clients.length,
        );
      }
      if (event.key === "ArrowLeft") {
        setSlideDirection(-1);
        setSelectedClient((prev) =>
          prev === null ? 0 : (prev - 1 + clients.length) % clients.length,
        );
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedClient, clients.length]);

  const openClient = (index: number) => {
    setSlideDirection(1);
    setSelectedClient(index);
  };

  const closeModal = () => setSelectedClient(null);

  const nextClient = () => {
    if (selectedClient === null) return;
    setSlideDirection(1);
    setSelectedClient((prev) =>
      prev === null ? 0 : (prev + 1) % clients.length,
    );
  };

  const prevClient = () => {
    if (selectedClient === null) return;
    setSlideDirection(-1);
    setSelectedClient((prev) =>
      prev === null ? 0 : (prev - 1 + clients.length) % clients.length,
    );
  };

  const modal =
    portalReady && selectedClient !== null && currentClient
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="clients-modal-backdrop"
              className="archmation-clients__modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="archmation-clients__modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={`${currentClient.name} case study`}
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
                  aria-label="Close case study"
                >
                  <X className="archmation-clients__modal-close-icon" strokeWidth={1.5} />
                </motion.button>

                <div className="archmation-clients__modal-stage">
                  <div className="archmation-clients__modal-media">
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.div
                        key={selectedClient}
                        className="archmation-clients__modal-slide"
                        initial={{ opacity: 0, x: slideDirection > 0 ? 48 : -48 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: slideDirection > 0 ? -48 : 48 }}
                        transition={{ duration: 0.45, ease: easeOut }}
                      >
                        <img
                          src={currentClient.caseLogo}
                          alt={currentClient.name}
                          className="archmation-clients__modal-image"
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <motion.button
                    type="button"
                    className="archmation-clients__modal-nav archmation-clients__modal-nav--prev"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={prevClient}
                    aria-label="Previous client"
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
                    onClick={nextClient}
                    aria-label="Next client"
                  >
                    <ChevronRight
                      className="archmation-clients__modal-nav-icon"
                      strokeWidth={1.5}
                    />
                  </motion.button>

                  <div className="archmation-clients__modal-dots">
                    {clients.map((client, idx) => (
                      <motion.button
                        key={client.name}
                        type="button"
                        className="archmation-clients__modal-dot"
                        onClick={() => {
                          setSlideDirection(idx > (selectedClient ?? 0) ? 1 : -1);
                          setSelectedClient(idx);
                        }}
                        animate={{
                          scaleX: idx === selectedClient ? 1.5 : 1,
                          opacity: idx === selectedClient ? 1 : 0.5,
                        }}
                        aria-label={`View ${client.name}`}
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
                  <h3 className="archmation-clients__modal-title">{currentClient.name}</h3>
                  <p className="archmation-clients__modal-meta">
                    {selectedClient + 1} of {clients.length}
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
      <div
        ref={rootRef}
        className={`archmation-clients__root${active ? " is-inview" : ""}`}
      >
        <div className="archmation-clients__bg-base" aria-hidden="true" />
        <div className="archmation-clients__bg-mesh" aria-hidden="true" />
        <div className="archmation-clients__bg-radial-top" aria-hidden="true" />
        <div className="archmation-clients__bg-radial-side" aria-hidden="true" />
        <div className="archmation-clients__bg-dots" aria-hidden="true" />

        <div className="archmation-clients__inner">
          <motion.div
            className="archmation-clients__header"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h2 className="archmation-clients__title">
              {content.titleBefore}
              <span className="archmation-clients__title-accent">
                {content.titleAccent}
              </span>
              {content.titleAfter}
            </h2>
          </motion.div>

          <motion.div
            className="archmation-clients__grid"
            initial={{ opacity: 0, y: 30 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
          >
            {clients.map((client, index) => (
              <motion.button
                key={client.name}
                type="button"
                className="archmation-clients__tile"
                onClick={() => openClient(index)}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.05 * index, ease: easeOut }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="archmation-clients__logo"
                  loading="lazy"
                />
                <span className="archmation-clients__shine" aria-hidden="true" />
                <span className="archmation-clients__tile-label">{client.name}</span>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
      {modal}
    </>
  );
}
