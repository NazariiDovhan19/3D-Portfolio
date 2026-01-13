const config = {
  title: "Nazarii Dovhan | Data Analyst",

  description: {
    long: "Explore the portfolio of Nazarii Dovhan, a Data Analyst and IT Specialist with a strong background in data analytics, visualization, and web technologies. Skilled in transforming complex datasets into actionable insights using Python, SQL, Power BI, Tableau, and Excel. Combining analytical thinking with technical expertise to support data-driven business decisions.",
    short:
      "Portfolio of Nazarii Dovhan — Data Analyst focused on data-driven insights, analytics, and visualization.",
  },

  keywords: [
    "Nazarii Dovhan",
    "Data Analyst",
    "Data Analytics",
    "Python",
    "SQL",
    "Power BI",
    "Tableau",
    "Excel",
    "Data Visualization",
    "Statistical Analysis",
    "Machine Learning",
    "Business Intelligence",
    "IT Specialist",
    "Portfolio",
  ],

  author: "Nazarii Dovhan",
  email: "Nazardov1@gmail.com",
  site: "https://nazarii-dovhan.dev", // можеш 

  // GitHub integration
  githubUsername: "NazariiDovhan19",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },

  social: {
    twitter: "", 
    linkedin: "https://www.linkedin.com/in/nazarii-dovhan-2323b2225/",
    instagram: "https://www.instagram.com/nazariidovhan/",
    facebook: "",
    github: "https://github.com/NazariiDovhan19",
  },
};

export { config };
