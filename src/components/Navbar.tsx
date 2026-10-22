"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLang } from "./providers";
import { PROFILE } from "@/lib/content";

export function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "/#about", label: t.nav.about },
    { href: "/#skills", label: t.nav.skills },
    { href: "/#projects", label: t.nav.projects },
    { href: "/#education", label: t.nav.education },
    { href: "/#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[var(--background)]/80 border-b border-[var(--card-border)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-5 h-16 flex items-center justify-between">
        <a href="/#home" className="font-mono font-bold text-lg tracking-tight">
          <span className="text-primary">&lt;</span>
          {PROFILE.displayName}
          <span className="text-primary"> /&gt;</span>
        </a>

        <div className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            aria-label="Toggle language"
            className="px-2.5 py-1.5 rounded-lg text-xs font-semibold border border-[var(--card-border)] hover:border-primary hover:text-primary transition-colors"
          >
            {lang === "vi" ? "EN" : "VI"}
          </button>
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--card-border)] hover:border-primary hover:text-primary transition-colors"
          >
            {mounted && theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden p-2 rounded-lg border border-[var(--card-border)]"
          >
            {open ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[var(--card-border)] bg-[var(--background)]/95 backdrop-blur-md">
          <div className="px-5 py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
