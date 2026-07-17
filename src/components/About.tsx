"use client";

import { MapPin, Mail, Phone, GraduationCap } from "lucide-react";
import { useLang } from "./providers";
import { PROFILE } from "@/lib/content";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function About() {
  const { t } = useLang();

  const facts = [
    { icon: MapPin, label: t.about.location, value: t.about.locationValue },
    { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { icon: Phone, label: "Phone", value: PROFILE.phone, href: `tel:${PROFILE.phone.replace(/\s/g, "")}` },
    { icon: GraduationCap, label: t.education.school, value: t.education.majorValue },
  ];

  return (
    <Section id="about">
      <SectionHeading title={t.about.title} />
      <div className="grid md:grid-cols-5 gap-10 items-start">
        <Reveal className="md:col-span-3" delay={0.05}>
          <p className="text-lg leading-relaxed text-muted">{t.about.body}</p>
        </Reveal>
        <Reveal className="md:col-span-2 w-full" delay={0.15}>
          <div className="grid sm:grid-cols-2 gap-4">
            {facts.map(({ icon: Icon, label, value, href }) => {
              const inner = (
                <div className="h-full rounded-2xl border border-[var(--card-border)] bg-card p-5 hover:border-primary/50 transition-colors">
                  <Icon className="w-5 h-5 text-primary mb-3" />
                  <p className="text-xs uppercase tracking-wide text-muted">{label}</p>
                  <p className="mt-1 font-medium break-words text-sm">{value}</p>
                </div>
              );
              return href ? (
                <a key={label} href={href} className="block">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
