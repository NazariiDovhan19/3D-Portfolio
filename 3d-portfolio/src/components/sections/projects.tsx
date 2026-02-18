"use client";

import React from "react";
import Link from "next/link";
import projects from "@/data/projects";

type AnyProject = {
  id?: string;
  title?: string;
  name?: string;
  category?: string;
  live?: string;
  link?: string;
  github?: string;
  repo?: string;
  description?: string;
  content?: React.ReactNode;
  skills?: { frontend?: any[]; backend?: any[] };
};

type ProjectView = {
  id: string;
  title: string;
  category: string;
  live: string;
  github: string;
  summary: React.ReactNode;
  tags: string[];
  impact: string[];
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-white/5 px-2 py-0.5 text-[11px] text-zinc-300 border border-white/10">
      {children}
    </span>
  );
}

function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-white/5 px-2 py-1 text-[11px] text-zinc-300 border border-white/10">
      {children}
    </span>
  );
}

function ActionLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-zinc-200 hover:border-white/20 hover:bg-white/10 transition"
    >
      {label}
      <span className="ml-2">↗</span>
    </Link>
  );
}

export default function ProjectsSection() {
  const raw = projects as unknown as AnyProject[];

  const defaults: Record<string, { tags: string[]; impact: string[] }> = {
    "colab-sales-analysis": {
      tags: ["Python", "EDA", "KPIs", "Data Cleaning", "Visualization"],
      impact: [
        "Built KPI set for revenue, AOV, and conversion tracking",
        "Identified top products and regions driving sales changes",
      ],
    },
    "colab-customer-segmentation": {
      tags: ["Python", "RFM", "Clustering", "Segmentation"],
      impact: [
        "Created customer cohorts for targeted retention campaigns",
        "Flagged high value and churn risk segments for action",
      ],
    },
    "colab-cohort-retention": {
      tags: ["SQL", "Cohorts", "Funnels", "Retention"],
      impact: [
        "Measured activation and drop off across funnel steps",
        "Built cohort retention view to track product health",
      ],
    },
    "colab-ab-testing": {
      tags: ["Python", "Statistics", "A/B Testing", "Decision Making"],
      impact: [
        "Standardized testing workflow with clear ship or dont ship output",
        "Computed confidence intervals and practical interpretation",
      ],
    },
    "colab-forecasting": {
      tags: ["Python", "Time Series", "Forecasting", "Evaluation"],
      impact: [
        "Built baseline forecasting and compared model performance",
        "Improved planning with seasonality and trend signals",
      ],
    },
    "colab-data-quality": {
      tags: ["Python", "Data Quality", "Validation", "Pipeline"],
      impact: [
        "Reusable cleaning pipeline with checks and rules",
        "Reduced errors from missing values and duplicates",
      ],
    },
  };

  const list: ProjectView[] = raw.map((p) => {
    const id = p.id ?? String(Math.random());
    const title = p.title ?? p.name ?? "Untitled Project";
    const category = p.category ?? "Project";
    const live = p.live ?? p.link ?? "";
    const github = p.github ?? p.repo ?? "";

    const summary =
      p.content ??
      (p.description ? (
        <p className="text-base text-zinc-300 leading-relaxed">{p.description}</p>
      ) : (
        <p className="text-base text-zinc-300 leading-relaxed">
          Short case study with goals, method, and insights.
        </p>
      ));

    const def = defaults[id] ?? { tags: ["Python", "SQL", "Analytics"], impact: [] };

    return {
      id,
      title,
      category,
      live,
      github,
      summary,
      tags: def.tags,
      impact: def.impact,
    };
  });

  return (
    <section id="projects" className="w-full relative z-20">
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-100">
        <div className="mt-[100px] mb-[50px]">
          <h2 className="text-4xl font-bold tracking-tight">Selected Analytics Projects</h2>
          <p className="mt-3 text-sm text-zinc-300 max-w-2xl">
            End to end notebooks and case studies focused on decision making: KPIs, segmentation,
            retention, experimentation, forecasting, and data quality.
          </p>
        </div>

        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
          {list.map((project) => (
            <li
              key={project.id}
              className={[
                "w-[300px] min-h-[320px] p-5 flex flex-col justify-between",
                "rounded-2xl",
                "bg-gradient-to-br from-zinc-950/90 to-zinc-900/60",
                "backdrop-blur-sm",
                "border border-white/10",
                "shadow-sm hover:shadow-md",
                "hover:border-primary/20 transition-colors duration-300",
              ].join(" ")}
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-xl font-bold tracking-tight text-zinc-50">
                    {project.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  <Chip>{project.category}</Chip>
                </div>

                <div className="text-base text-zinc-300 leading-relaxed">
                  {project.summary}
                </div>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {project.impact.length > 0 ? (
                  <ul className="pt-2 list-disc list-outside ml-4 text-base text-zinc-300 space-y-2 leading-relaxed">
                    {project.impact.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                ) : null}

                {(project.live || project.github) ? (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.live ? <ActionLink href={project.live} label="Visit" /> : null}
                    {project.github ? <ActionLink href={project.github} label="GitHub" /> : null}
                  </div>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
