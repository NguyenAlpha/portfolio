"use client";

import { Check, ExternalLink } from "lucide-react";
import { Github } from "./SocialIcons";
import { useLang } from "./providers";
import { Section, SectionHeading } from "./Section";
import { Reveal } from "./Reveal";
import { ProjectGallery } from "./ProjectGallery";

export function Projects() {
  const { t } = useLang();

  return (
    <Section id="projects">
      <SectionHeading title={t.projects.title} subtitle={t.projects.subtitle} />
      <div className="space-y-8">
        {t.projects.items.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.1}>
            <article className="group relative rounded-3xl border border-[var(--card-border)] bg-card p-7 sm:p-9 hover:border-primary/50 transition-colors overflow-hidden">
              <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <ProjectGallery images={p.images} />

              <div className="relative flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-2xl font-bold">{p.name}</h3>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {p.status}
                    </span>
                  </div>
                  <p className="mt-2 text-muted">{p.tagline}</p>
                </div>
                <span className="shrink-0 text-sm text-muted font-mono">{p.period}</span>
              </div>

              <p className="relative text-muted leading-relaxed mb-6">{p.description}</p>

              <ul className="relative grid sm:grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="relative flex flex-wrap items-center gap-2 mb-6">
                {p.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-[var(--background)] border border-[var(--card-border)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative flex flex-wrap items-center gap-3">
                <a
                  href={p.demo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium bg-primary text-primary-foreground hover:brightness-110 transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  {t.projects.demoLabel}
                </a>
                {p.repos.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--card-border)] hover:border-primary hover:text-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    {repo.label}
                  </a>
                ))}
                <a
                  href={p.api}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium border border-[var(--card-border)] hover:border-primary hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Swagger
                </a>
              </div>

              <p className="relative mt-4 text-xs text-muted">
                {t.projects.loginLabel}: <span className="font-mono">{p.demo.login}</span>
              </p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
