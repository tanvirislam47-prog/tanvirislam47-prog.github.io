export type Achievement = {
  title: string;
  category: "Research" | "Publications" | "Conferences" | "Competitions" | "Certifications" | "Awards" | "Scholarships" | "Academic Milestones";
  date?: string;
  detail?: string;
  url?: string;
};

// Add verified achievements here. The section intentionally stays quiet when empty.
export const achievements: Achievement[] = [];
