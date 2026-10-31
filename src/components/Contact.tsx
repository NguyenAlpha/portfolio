"use client";

import { Mail } from "lucide-react";
import { Github, Linkedin, Facebook } from "./SocialIcons";
import { useLang } from "./providers";
import { PROFILE } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Contact() {
  const { t } = useLang();

  const socials = [
    { href: PROFILE.github, icon: Github, label: "GitHub" },
    { href: PROFILE.linkedin, icon: Linkedin, label: "LinkedIn" },
    { href: PROFILE.facebook, icon: Facebook, label: "Facebook" },
    { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email" },
  ];

  return (
    <Section id="contact">
      <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
      <div className="max-w-xl mx-auto">
        <Reveal>
          <div className="rounded-3xl border border-[var(--card-border)] bg-card p-8 flex flex-col">
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
