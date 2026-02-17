"use client";

import React from "react";
import Link from "next/link";

type Project = {
  id: number;
  name: string;
  description: string;
  link: string;
};

const PROJECTS: Project[] = [
  {
    id: 1,
    name: "Sales Performance Analysis (EDA and KPIs)",
    description:
      "End to end exploratory analysis of sales data including data cleaning, KPI definition, trend analysis, product and region performance, and business insights.",
    link: "https://colab.research.google.com/",
  },
  {
    id: 2,
    name: "Customer Segmentation (RFM and Clustering)",
    description:
      "Customer segmentation using RFM metrics and clustering to identify high value customers, churn risk users, and marketing opportunities.",
    link: "https://colab.research.google.com/",
  },
  {
    id: 3,
    name: "Cohort Retention and Funnel Analysis",
    description:
      "Cohort based retention and funnel analysis to measure activation, conversion, and drop off with actionable recommendations.",
    link: "https://colab.research.google.com/",
  },
  {
    id: 4,
    name: "A B Testing Toolkit",
    description:
      "Practical A B testing toolkit covering hypothesis setup, statistical testing, confidence intervals, and decision making.",
    link: "https://colab.research.google.com/",
  },
  {
    id: 5,
    name: "Time Series Forecasting",
    description:
      "Time series forecasting for demand and revenue using baseline models, seasonality features, evaluation metrics, and interpretation.",
    link: "https://colab.research.google.com/",
  },
  {
    id: 6,
    name: "Data Quality Checks and Cleaning Pipeline",
    description:
      "Reusable data cleaning pipeline with missing values handling, deduplication, outlier detection, validation rules, and export ready datasets.",
    link: "https://colab.research.google.com/",
  },
];

function Page() {
  return (
    <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
      <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>

      <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around">
        {PROJECTS.map((project) => (
          <li
            key={project.id}
            className="w-[300px] min-h-[260px] border-[.5px] rounded-md border-zinc-600 p-5 flex flex-col justify-between"
            style={{ backdropFilter: "blur(2px)" }}
          >
            <div>
              <h2 className="text-xl">{project.name}</h2>
              <p className="mt-3 text-xs text-zinc-500 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="mt-6">
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-3 py-2 rounded-md border border-zinc-600 hover:border-zinc-300 transition text-sm"
              >
                Visit
                <span className="ml-2">↗</span>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Page;
