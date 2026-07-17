"use client";

import { useState } from "react";
import { Mail, Send } from "lucide-react";
import { Github, Linkedin, Facebook } from "./SocialIcons";
import { useLang } from "./providers";
import { PROFILE } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Liên hệ từ ${form.name || "website"}`);
    const body = encodeURIComponent(
      `Tên: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  const socials = [
    { href: PROFILE.github, icon: Github, label: "GitHub" },
    { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: PROFILE.facebook, icon: Facebook, label: "Facebook" },
    { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
  ];

  const field =
    "w-full rounded-xl border border-[var(--card-border)] bg-[var(--background)] px-4 py-3 outline-none focus:border-primary transition-colors";

  return (
    <Section id="contact">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <Reveal>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              required
              type="text"
              placeholder={t.contact.nameLabel}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={field}
            />
            <input
              required
              type="email"
              placeholder={t.contact.emailLabel}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={field}
            />
            <textarea
              required
              rows={5}
              placeholder={t.contact.messageLabel}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
            />
            <button
              type="submit"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold hover:brightness-110 transition-all shadow-lg shadow-primary/25"
            >
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              {t.contact.send}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-3xl border border-[var(--card-border)] bg-card p-8 h-full flex flex-col justify-center">
            <p className="text-muted mb-6">{t.contact.orReach}:</p>
            <div className="grid grid-cols-2 gap-3">
              {socials.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl border border-[var(--card-border)] hover:border-primary hover:text-primary hover:-translate-y-0.5 transition-all"
                >
                  <Icon className="w-5 h-5 shrink-0" />
                  <span className="font-medium text-sm">{label}</span>
                </a>
              ))}
            </div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="mt-6 text-primary font-medium break-all hover:underline"
            >
              {PROFILE.email}
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
