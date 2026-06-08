"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight, Play, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useSectionReveal } from "@/hooks/useSectionReveal";

type VideoItem = {
  id: number;
  title: string;
  company: string;
  thumbnail: string;
  videoUrl: string;
};

const videos: VideoItem[] = [
  {
    id: 1,
    title: "Piano Milling Machine",
    company: "Suraj Machines",
    thumbnail:
      "https://images.unsplash.com/photo-1581092162562-40038f60416c?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    title: "CNC Milling Process",
    company: "Industrial Tech",
    thumbnail:
      "https://images.unsplash.com/photo-1585399361892-f51c236efb9b?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Product Testimonial",
    company: "Brand Partner",
    thumbnail:
      "https://images.unsplash.com/photo-1557821552-17105176677c?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 4,
    title: "Corporate Event",
    company: "Event Coverage",
    thumbnail:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 5,
    title: "Behind the Scenes",
    company: "Studio Production",
    thumbnail:
      "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?w=400&q=80",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const easeOut = [0.22, 1, 0.36, 1] as const;
const GAP = 16;

function useVisibleCount() {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setVisibleCount(1);
      else if (w < 1024) setVisibleCount(2);
      else setVisibleCount(4);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return visibleCount;
}

export default function VideoGallerySection() {
  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [slideStep, setSlideStep] = useState(0);
  const [portalReady, setPortalReady] = useState(false);
  const visibleCount = useVisibleCount();

  const active = useSectionReveal(rootRef, {
    amount: 0.35,
    margin: "0px 0px -22% 0px",
    delay: 500,
  });

  const maxScroll = Math.max(0, videos.length - visibleCount);
  const currentVideo = videos.find((video) => video.id === selectedVideo) ?? null;

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    setCarouselPosition((pos) => Math.min(pos, maxScroll));
  }, [maxScroll]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const card = viewport.querySelector<HTMLElement>(".archmation-videos__card");
      if (!card) return;
      setSlideStep(card.offsetWidth + GAP);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, [visibleCount]);

  useEffect(() => {
    if (selectedVideo === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedVideo(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedVideo]);

  const scroll = (direction: "left" | "right") => {
    setCarouselPosition((pos) =>
      direction === "left" ? Math.max(0, pos - 1) : Math.min(maxScroll, pos + 1),
    );
  };

  const closeModal = () => setSelectedVideo(null);

  const modal =
    portalReady && selectedVideo !== null && currentVideo
      ? createPortal(
          <AnimatePresence>
            <motion.div
              key="videos-modal-backdrop"
              className="archmation-videos__modal-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="archmation-videos__modal"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.3 }}
                onClick={(event) => event.stopPropagation()}
                role="dialog"
                aria-modal="true"
                aria-label={currentVideo.title}
              >
                <motion.button
                  type="button"
                  className="archmation-videos__modal-close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: 0.2 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={closeModal}
                  aria-label="Close video"
                >
                  <X className="archmation-videos__modal-close-icon" strokeWidth={1.5} />
                </motion.button>

                <motion.div
                  className="archmation-videos__modal-player"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                >
                  <iframe
                    src={`${currentVideo.videoUrl}?autoplay=1`}
                    title={currentVideo.title}
                    className="archmation-videos__modal-iframe"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </motion.div>

                <motion.div
                  className="archmation-videos__modal-info"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h3 className="archmation-videos__modal-title">{currentVideo.title}</h3>
                  <p className="archmation-videos__modal-meta">{currentVideo.company}</p>
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
        className={`archmation-videos__root${active ? " is-inview" : ""}`}
      >
        <div className="archmation-videos__bg-base" aria-hidden="true" />
        <div className="archmation-videos__bg-mesh" aria-hidden="true" />
        <div className="archmation-videos__bg-spotlight-left" aria-hidden="true" />
        <div className="archmation-videos__bg-spotlight-right" aria-hidden="true" />
        <div className="archmation-videos__bg-diagonal" aria-hidden="true" />
        <div className="archmation-videos__bg-grain" aria-hidden="true" />

        <div className="archmation-videos__inner">
          <motion.div
            className="archmation-videos__header"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: easeOut }}
          >
            <h2 className="archmation-videos__title">
              Glimpses of our <span className="archmation-videos__title-accent">Work</span>
            </h2>
          </motion.div>

          <div className="archmation-videos__carousel">
            <motion.button
              type="button"
              className="archmation-videos__nav archmation-videos__nav--prev"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("left")}
              disabled={carouselPosition === 0}
              aria-label="Previous videos"
            >
              <ChevronLeft className="archmation-videos__nav-icon" strokeWidth={1.5} />
            </motion.button>

            <div ref={viewportRef} className="archmation-videos__viewport">
              <motion.div
                className="archmation-videos__track"
                animate={{ x: -(carouselPosition * slideStep) }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {videos.map((video, index) => (
                  <motion.button
                    key={video.id}
                    type="button"
                    className="archmation-videos__card"
                    onClick={() => setSelectedVideo(video.id)}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={active ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: index * 0.1, ease: easeOut }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="archmation-videos__thumb"
                      loading="lazy"
                    />
                    <div className="archmation-videos__card-overlay" aria-hidden="true" />
                    <div className="archmation-videos__play-wrap" aria-hidden="true">
                      <div className="archmation-videos__play-btn">
                        <Play className="archmation-videos__play-icon" strokeWidth={1.5} />
                      </div>
                    </div>
                    <div className="archmation-videos__card-meta">
                      <p className="archmation-videos__card-title">{video.title}</p>
                      <p className="archmation-videos__card-company">{video.company}</p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            </div>

            <motion.button
              type="button"
              className="archmation-videos__nav archmation-videos__nav--next"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scroll("right")}
              disabled={carouselPosition === maxScroll}
              aria-label="Next videos"
            >
              <ChevronRight className="archmation-videos__nav-icon" strokeWidth={1.5} />
            </motion.button>
          </div>

          <motion.div
            className="archmation-videos__cta-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3, ease: easeOut }}
          >
            <a href="https://archmation.com/our-work/" className="archmation-videos__cta">
              View More
              <ArrowRight
                className="archmation-videos__cta-icon"
                strokeWidth={2}
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </div>
      </div>
      {modal}
    </>
  );
}
