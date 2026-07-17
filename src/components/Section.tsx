"use client";

import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mb-12 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
          {title}
        </h2>
        <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-primary" />
        {subtitle && <p className="mt-4 text-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}

export function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`py-24 px-5 ${className}`}>
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
