"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useLang } from "./providers";

type GalleryImage = { src: string; srcDark: string; alt: string };

const WIDTH = 1917;
const HEIGHT = 1078;
const AUTOPLAY_MS = 5000;

// Renders both light and dark variants; the `.dark` class picks which one shows.
function ThemedImage({
  image,
  sizes,
  className = "",
}: {
  image: GalleryImage;
  sizes: string;
  className?: string;
}) {
  return (
    <>
      <Image
        src={image.src}
        alt={image.alt}
        width={WIDTH}
        height={HEIGHT}
        sizes={sizes}
        className={`${className} dark:hidden`}
      />
      <Image
        src={image.srcDark}
        alt={image.alt}
        width={WIDTH}
        height={HEIGHT}
        sizes={sizes}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}

const navButton =
  "absolute top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70 transition-colors";

export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  const { t } = useLang();
  const [index, setIndex] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [open, setOpen] = useState(false);
  const count = images.length;

  const prev = () => setIndex((i) => (i - 1 + count) % count);
  const next = () => setIndex((i) => (i + 1) % count);

  // Restarts on every slide change, so manual navigation also resets the 5s timer.
  useEffect(() => {
    if (hovered || open || count < 2) return;
    const id = setTimeout(() => setIndex((i) => (i + 1) % count), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [index, hovered, open, count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + count) % count);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % count);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, count]);

  const current = images[index];

  return (
    <div
      className="relative mb-6"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden rounded-2xl border border-[var(--card-border)]"
        style={{ aspectRatio: `${WIDTH} / ${HEIGHT}` }}
      >
        <AnimatePresence initial={false}>
          <motion.button
            key={index}
            type="button"
            onClick={() => setOpen(true)}
            aria-label={`${t.projects.viewImage}: ${current.alt}`}
            className="absolute inset-0 cursor-zoom-in"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ThemedImage
              image={current}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="w-full h-full object-cover"
            />
          </motion.button>
        </AnimatePresence>

        {count > 1 && (
          <>
            <button type="button" onClick={prev} aria-label={t.projects.prevImage} className={`${navButton} left-3`}>
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button type="button" onClick={next} aria-label={t.projects.nextImage} className={`${navButton} right-3`}>
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={img.alt}
                  aria-current={i === index}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index ? "w-6 bg-primary" : "w-1.5 bg-white/60 hover:bg-white"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={current.alt}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4 sm:p-10"
          >
            <div onClick={(e) => e.stopPropagation()} className="relative">
              <ThemedImage
                image={current}
                sizes="100vw"
                className="max-h-[85vh] max-w-full w-auto h-auto rounded-xl"
              />
              <p className="mt-3 text-center text-sm text-white/80">
                {current.alt} · {index + 1} / {count}
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t.projects.closeImage}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label={t.projects.prevImage}
                  className={`${navButton} left-4`}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label={t.projects.nextImage}
                  className={`${navButton} right-4`}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>,
          document.body,
        )}
    </div>
  );
}
