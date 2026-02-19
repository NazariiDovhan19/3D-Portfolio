export type Project = {
  id: string;
  title: string;
  category: string;
  link?: string;
  repo?: string;
  description: string;
};

const projects: Project[] = [
  {
    id: "colab-sales-analysis",
    title: "Sales Performance Analysis (EDA and KPIs)",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "End to end exploratory analysis of sales data including data cleaning, KPI definition, trend analysis, product and region performance, and business insights.",
  },
  {
    id: "colab-customer-segmentation",
    title: "Customer Segmentation (RFM and Clustering)",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "Customer segmentation using RFM metrics and clustering to identify high value customers and churn risk users.",
  },
  {
    id: "colab-cohort-retention",
    title: "Cohort Retention and Funnel Analysis",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "Cohort based retention and funnel analysis to measure activation and conversion with actionable insights.",
  },
  {
    id: "colab-ab-testing",
    title: "A/B Testing Toolkit",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "Practical A/B testing toolkit covering hypothesis setup, statistical testing, confidence intervals, and decision making.",
  },
  {
    id: "colab-forecasting",
    title: "Time Series Forecasting",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "Time series forecasting for demand and revenue using baseline models, seasonality features, evaluation metrics, and interpretation.",
  },
  {
    id: "colab-data-quality",
    title: "Data Quality Checks and Cleaning Pipeline",
    category: "Analytics",
    link: "https://colab.research.google.com/",
    repo: "",
    description:
      "Reusable data cleaning pipeline with missing values handling, deduplication, validation rules, and export-ready datasets.",
  },
];

export default projects;
