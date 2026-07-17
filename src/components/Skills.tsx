"use client";

import { useLang } from "./providers";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Skills() {
  const { t } = useLang();

  return (
    <Section id="skills" className="relative">
      <SectionHeading title={t.skills.title} subtitle={t.skills.subtitle} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {t.skills.groups.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.08}>
            <div className="h-full rounded-2xl border border-[var(--card-border)] bg-card p-6 hover:border-primary/50 hover:-translate-y-1 transition-all">
              <h3 className="font-semibold mb-4 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-primary" />
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 rounded-lg text-sm bg-primary/10 text-primary border border-primary/20"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
