"use client";

import { useLang } from "./providers";
import { PROFILE, TECH_STACK } from "@/lib/content";

export function Footer() {
  const { t, lang } = useLang();

  const bgNote =
    lang === "vi"
      ? "Nền động là geodesic network tự viết bằng Three.js (WebGL) — phản ứng theo chuột, cuộn trang & chế độ sáng/tối."
      : "The animated backdrop is a hand-written Three.js (WebGL) geodesic network — reacting to your cursor, scroll and light/dark mode.";

  return (
    <footer className="border-t border-[var(--card-border)] py-10 px-5">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-5 text-center">
        <div className="flex flex-col items-center gap-2">
          <p className="text-sm text-muted">
            {t.builtWith}
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {TECH_STACK.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-lg text-xs font-medium bg-primary/10 text-primary border border-primary/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <p className="max-w-xl text-xs text-muted leading-relaxed">{bgNote}</p>

        <div className="w-full pt-5 border-t border-[var(--card-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-sm text-muted">
          <p>
            © {new Date().getFullYear()} {PROFILE.name}
          </p>
          <p>
            {t.footer}{" "}
            <span className="text-primary font-medium">{PROFILE.displayName}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
