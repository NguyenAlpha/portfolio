"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Github, Linkedin } from "./SocialIcons";
import { useLang } from "./providers";
import { PROFILE } from "@/lib/content";

export function Hero() {
  const { t } = useLang();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-grid"
    >
      {/* glow blobs */}
      <div className="pointer-events-none absolute -top-32 -left-20 w-[36rem] h-[36rem] rounded-full bg-primary/20 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute bottom-0 right-0 w-[30rem] h-[30rem] rounded-full bg-primary-soft/10 blur-[120px] animate-float" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--background)]" />

      <div className="relative max-w-6xl mx-auto px-5 w-full pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-medium mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            {t.hero.availability}
          </span>

          <p className="text-muted text-lg mb-3">{t.hero.greeting}</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight mb-4">
            <span className="text-gradient">{PROFILE.name}</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-semibold text-muted mb-6">
            {t.hero.role}
          </h2>
          <p className="text-base sm:text-lg text-muted max-w-2xl mb-9 leading-relaxed">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-10">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
            >
              {t.hero.ctaContact}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={PROFILE.cv}
              download
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--card-border)] font-semibold hover:border-primary hover:text-primary transition-colors"
            >
              <Download className="w-4 h-4" />
              {t.hero.ctaCV}
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-muted font-semibold hover:text-foreground transition-colors"
            >
              {t.hero.ctaProjects}
            </a>
          </div>

          <div className="flex items-center gap-4">
            {[
              { href: PROFILE.github, icon: Github, label: "GitHub" },
              { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={label}
                className="p-2.5 rounded-lg border border-[var(--card-border)] text-muted hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all"
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
