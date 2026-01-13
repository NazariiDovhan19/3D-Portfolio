import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { TypographyP } from "@/components/ui/typography";
import { ArrowUpRight } from "lucide-react";
import { SiPython, SiPostgresql } from "react-icons/si";

/* ---------- LINKS ---------- */

export function ProjectsLinks({
  live,
  repo,
}: {
  live: string;
  repo?: string;
}) {
  return (
    <div className="flex gap-3 mt-4">
      <Link href={live} target="_blank" rel="noopener noreferrer">
        <Button size="sm">
          Visit
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>

      {repo && (
        <Link href={repo} target="_blank" rel="noopener noreferrer">
          <Button size="sm" variant="secondary">
            Github
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}

/* ---------- TYPES ---------- */

export type Skill = {
  title: string;
  icon: ReactNode;
};

export type Project = {
  id: string;
  category: string;
  title: string;
  skills: Skill[];
  content: ReactNode;
  live: string;
  github?: string;
};

/* ---------- SKILLS ---------- */

export const PROJECT_SKILLS = {
  python: {
    title: "Python",
    icon: <SiPython />,
  },
  postgres: {
    title: "PostgreSQL",
    icon: <SiPostgresql />,
  },
};

/* ---------- PROJECTS ---------- */

const projects: Project[] = [
  {
    id: "sales-eda",
    category: "Analytics",
    title: "Sales Performance Analysis (EDA and KPIs)",
    skills: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          End to end exploratory analysis of sales data including data cleaning,
          KPI definition, trend analysis, product and region performance,
          and business insights.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },

  {
    id: "customer-segmentation",
    category: "Analytics",
    title: "Customer Segmentation (RFM and Clustering)",
    skills: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          Customer segmentation using RFM metrics and clustering to identify
          high value customers, churn risk users, and marketing opportunities.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },

  {
    id: "cohort-analysis",
    category: "Product Analytics",
    title: "Cohort Retention and Funnel Analysis",
    skills: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          Cohort based retention and funnel analysis to measure activation,
          conversion, and drop off with actionable recommendations.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },

  {
    id: "ab-testing",
    category: "Experimentation",
    title: "A B Testing Toolkit",
    skills: [PROJECT_SKILLS.python],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          Practical A B testing toolkit covering hypothesis setup,
          statistical testing, confidence intervals, and decision making.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },

  {
    id: "forecasting",
    category: "Forecasting",
    title: "Time Series Forecasting",
    skills: [PROJECT_SKILLS.python, PROJECT_SKILLS.postgres],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          Time series forecasting for demand and revenue using baseline models,
          seasonality features, evaluation metrics, and interpretation.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },

  {
    id: "data-quality",
    category: "Data Engineering",
    title: "Data Quality Checks and Cleaning Pipeline",
    skills: [PROJECT_SKILLS.python],
    live: "https://colab.research.google.com/",
    github: "https://github.com/Nazerdov",
    content: (
      <>
        <TypographyP className="font-mono">
          Reusable data cleaning pipeline with missing values handling,
          deduplication, outlier detection, validation rules,
          and export ready datasets.
        </TypographyP>
        <ProjectsLinks
          live="https://colab.research.google.com/"
          repo="https://github.com/Nazerdov"
        />
      </>
    ),
  },
];

export default projects;
