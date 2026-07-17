"use client";

import { GraduationCap } from "lucide-react";
import { useLang } from "./providers";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";

export function Education() {
  const { t } = useLang();
  const e = t.education;

  return (
    <Section id="education">
      <SectionHeading title={e.title} />
      <Reveal>
        <div className="max-w-2xl mx-auto rounded-3xl border border-[var(--card-border)] bg-card p-8 flex items-start gap-5">
          <div className="shrink-0 p-3 rounded-2xl bg-primary/10 text-primary">
            <GraduationCap className="w-7 h-7" />
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-bold">{e.school}</h3>
              <span className="text-sm text-muted font-mono">{e.period}</span>
            </div>
            <p className="mt-2 text-muted">
              <span className="font-medium text-foreground">{e.major}:</span>{" "}
              {e.majorValue}
            </p>
            <p className="mt-1 text-muted">
              <span className="font-medium text-foreground">{e.gpa}:</span>{" "}
              {e.gpaValue}
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
