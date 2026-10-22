"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Maximize2, RotateCcw, X, ZoomIn, ZoomOut } from "lucide-react";
import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch";
import { useLang } from "./providers";
import type { Diagram } from "@/lib/content";

// Renders both light and dark variants; the `.dark` class picks which one shows.
function ThemedDiagram({
  diagram,
  className,
  style,
}: {
  diagram: Diagram;
  className: string;
  style?: CSSProperties;
}) {
  return (
    <>
      <Image
        src={diagram.src}
        alt={diagram.alt}
        width={diagram.width}
        height={diagram.height}
        draggable={false}
        style={style}
        className={`${className} dark:hidden`}
      />
      <Image
        src={diagram.srcDark}
        alt={diagram.alt}
        width={diagram.width}
        height={diagram.height}
        draggable={false}
        style={style}
        className={`${className} hidden dark:block`}
      />
    </>
  );
}

const controlButton =
  "p-2 rounded-lg border border-[var(--card-border)] bg-card hover:border-primary hover:text-primary transition-colors";

function ZoomControls({ onClose }: { onClose: () => void }) {
  const { t } = useLang();
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className="absolute top-4 right-4 z-10 flex gap-2">
      <button type="button" onClick={() => zoomIn()} aria-label={t.projects.zoomIn} className={controlButton}>
        <ZoomIn className="w-5 h-5" />
      </button>
      <button type="button" onClick={() => zoomOut()} aria-label={t.projects.zoomOut} className={controlButton}>
        <ZoomOut className="w-5 h-5" />
      </button>
      <button type="button" onClick={() => resetTransform()} aria-label={t.projects.resetZoom} className={controlButton}>
        <RotateCcw className="w-5 h-5" />
      </button>
      <button type="button" onClick={onClose} aria-label={t.projects.closeImage} className={controlButton}>
        <X className="w-5 h-5" />
      </button>
    </div>
  );
}

export function DiagramViewer({ diagram }: { diagram: Diagram }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={`${t.projects.zoomHint}: ${diagram.alt}`}
        className="group/diagram relative block w-full rounded-3xl border border-[var(--card-border)] bg-card p-4 sm:p-6 cursor-zoom-in hover:border-primary/50 transition-colors"
      >
        <ThemedDiagram diagram={diagram} className="w-full h-auto" />
        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-medium bg-[var(--background)]/90 border border-[var(--card-border)] text-muted group-hover/diagram:text-primary transition-colors">
          <Maximize2 className="w-3.5 h-3.5" />
          {t.projects.zoomHint}
        </span>
      </button>

      {open &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-label={diagram.alt}
            className="fixed inset-0 z-[100] bg-[var(--background)]/95"
          >
            <TransformWrapper minScale={0.5} maxScale={4} centerOnInit doubleClick={{ mode: "toggle" }}>
              <ZoomControls onClose={() => setOpen(false)} />
              <TransformComponent
                wrapperStyle={{ width: "100vw", height: "100dvh" }}
                contentClass="cursor-grab active:cursor-grabbing"
              >
                <ThemedDiagram
                  diagram={diagram}
                  className="h-auto"
                  // Mermaid SVGs declare width="100%" with no intrinsic size, so the
                  // zoom content would collapse to 0×0; give it an explicit fitted width.
                  style={{ width: `min(92vw, calc(88dvh * ${diagram.width} / ${diagram.height}))` }}
                />
              </TransformComponent>
            </TransformWrapper>
          </div>,
          document.body,
        )}
    </>
  );
}
