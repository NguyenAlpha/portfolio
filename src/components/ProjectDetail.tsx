"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useLang } from "./providers";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectLinks } from "./Projects";
import { DiagramViewer } from "./DiagramViewer";

type Point = { title: string; body: string };

function NumberedPoints({ points, className }: { points: Point[]; className: string }) {
  return (
    <ol className={className}>
      {points.map((point, i) => (
        <li key={point.title}>
          <Reveal delay={i * 0.05} className="h-full">
            <div className="flex gap-4 h-full rounded-2xl border border-[var(--card-border)] bg-card p-5">
              <span className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center text-sm font-semibold">
                {i + 1}
              </span>
              <div>
                <h3 className="font-semibold">{point.title}</h3>
                <p className="mt-1 text-sm text-muted leading-relaxed">{point.body}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const p = t.projects.items.find((item) => item.detail?.slug === slug);
  if (!p?.detail) return null;
  const { architecture, components } = p.detail;

  return (
    <>
      <section className="pt-28 pb-8 px-5">
        <div className="max-w-6xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t.projects.backLabel}
          </Link>

          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{p.name}</h1>
              <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                {p.status}
              </span>
            </div>
            <p className="mt-3 text-lg text-muted">{p.tagline}</p>
            <p className="mt-1 text-sm text-muted font-mono">{p.period}</p>

            <p className="mt-6 max-w-3xl text-muted leading-relaxed">{p.description}</p>

            <div className="mt-6 flex flex-wrap items-center gap-2">
              {p.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--card-border)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-8">
              <ProjectLinks project={p} />
            </div>
          </Reveal>
        </div>
      </section>

      <Section id="architecture">
        <SectionHeading title={t.projects.architectureTitle} subtitle={architecture.intro} />
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <Reveal>
            <DiagramViewer diagram={architecture.diagram} />
          </Reveal>

          <NumberedPoints points={architecture.points} className="space-y-4" />
        </div>
      </Section>

      <Section id="components" className="pt-0">
        <SectionHeading title={t.projects.componentsTitle} subtitle={components.intro} />
        <Reveal>
          <DiagramViewer diagram={components.diagram} />
        </Reveal>
        <NumberedPoints points={components.points} className="mt-8 grid sm:grid-cols-2 gap-4" />
      </Section>
    </>
  );
}
