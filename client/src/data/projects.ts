export type ProjectCategory = "AI/ML" | "Cybersecurity" | "IoT" | "Communication" | "Software" | "Other";

export type CaseStudy = {
  overview?: string;
  objective?: string;
  approach?: string;
  technologies?: string[];
  dataset?: string;
  methodology?: string;
  features?: string[];
  futureScope?: string;
};

export type Project = {
  name: string;
  repo: string;
  description: string;
  domain: ProjectCategory;
  technologies: string[];
  url: string;
  homepage?: string | null;
  updatedAt?: string;
  topics?: string[];
  language?: string | null;
  stars?: number;
  forks?: number;
  caseStudy?: CaseStudy;
};

export const featuredProjects: Project[] = [
  {
    name: "AI-Based Network Intrusion Detection & Security Monitoring",
    repo: "ai-nids-security-monitor",
    description: "AI-based batch network intrusion detection and security monitoring system using UNSW-NB15, machine learning, and Django.",
    domain: "Cybersecurity",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Django"],
    url: "https://github.com/tanvirislam47-prog/ai-nids-security-monitor",
    language: "TypeScript",
    topics: ["Cybersecurity", "Intrusion Detection", "Machine Learning", "Network Security"],
    caseStudy: {
      overview: "A public project that explores machine-learning-based intrusion detection and security monitoring through a web application.",
      objective: "Explore comparative model evaluation and batch network-traffic prediction in a security-monitoring context.",
      approach: "Uses the UNSW-NB15 dataset with Logistic Regression, Decision Tree, Random Forest, and XGBoost models. The application supports CSV-based batch prediction and model-performance visualization.",
      technologies: ["Python", "Scikit-learn", "XGBoost", "Django"],
      dataset: "UNSW-NB15",
      methodology: "Comparative machine-learning model evaluation with CSV-based batch-prediction workflows.",
      features: ["CSV batch prediction", "Model-performance visualization", "Django-based security monitoring interface"],
      futureScope: "Potential future directions can be documented here as the work evolves; no future results are asserted.",
    },
  },
  {
    name: "UAV Quantum Communication Security Simulator",
    repo: "uav-quantum-communication-security-simulator",
    description: "Simulation-based UAV quantum communication security simulator with BB84 QKD, attack analysis, ML security evaluation, and security-aware multi-hop routing.",
    domain: "Communication",
    technologies: ["Python", "BB84 QKD", "Machine Learning", "Streamlit"],
    url: "https://github.com/tanvirislam47-prog/uav-quantum-communication-security-simulator",
    language: "Python",
    topics: ["BB84", "Quantum Communication", "Network Security", "Simulation"],
  },
  {
    name: "SmartBank AI Banking Support",
    repo: "smartbank-ai-banking-support",
    description: "AI-powered banking support system combining Django, NLP, fraud detection, cybersecurity monitoring, and financial analytics.",
    domain: "AI/ML",
    technologies: ["Python", "Django", "NLP", "Scikit-learn"],
    url: "https://github.com/tanvirislam47-prog/smartbank-ai-banking-support",
    language: "Python",
    topics: ["Artificial Intelligence", "Banking", "Cybersecurity", "NLP"],
  },
  {
    name: "Atlas Knowledge Assistant",
    repo: "atlas-knowledge-assistant",
    description: "Public repository available for review on GitHub.",
    domain: "Software",
    technologies: ["TypeScript"],
    url: "https://github.com/tanvirislam47-prog/atlas-knowledge-assistant",
    language: "TypeScript",
    topics: ["Software"],
  },
];

export function inferProjectCategory(project: Pick<Project, "name" | "description" | "topics">): ProjectCategory {
  const text = `${project.name} ${project.description} ${(project.topics || []).join(" ")}`.toLowerCase();
  if (text.includes("quantum") || text.includes("communication") || text.includes("qkd")) return "Communication";
  if (text.includes("iot")) return "IoT";
  if (text.includes("security") || text.includes("intrusion") || text.includes("cyber")) return "Cybersecurity";
  if (text.includes("machine learning") || text.includes("artificial intelligence") || text.includes("ai") || text.includes("nlp")) return "AI/ML";
  if (text.includes("system") || text.includes("assistant") || text.includes("management")) return "Software";
  return "Other";
}
