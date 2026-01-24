export type Course = {
  slug: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  summary: string;
  description: string;
  curriculum: string[];
};

export const courses: Course[] = [
  {
    slug: "workplace-excel-fundamentals",
    title: "Workplace Excel Fundamentals",
    level: "Beginner",
    duration: "3 hours",
    summary: "Core spreadsheet skills for everyday reporting and analysis.",
    description:
      "Learn practical Excel skills: clean data, use formulas, build pivot tables, and present results clearly.",
    curriculum: [
      "Cleaning data & formatting",
      "Formulas (SUMIF, XLOOKUP basics)",
      "Pivot tables and charts",
      "Templates for weekly reporting"
    ]
  },
  {
    slug: "communication-for-impact",
    title: "Communication for Impact",
    level: "Intermediate",
    duration: "2.5 hours",
    summary: "Write, speak, and present with clarity and confidence.",
    description:
      "Improve stakeholder communication with structured messaging, crisp writing, and meeting practices.",
    curriculum: ["Clarity frameworks", "Writing effective updates", "Meeting hygiene", "Presentation structure"]
  },
  {
    slug: "secure-by-default",
    title: "Secure by Default",
    level: "Beginner",
    duration: "2 hours",
    summary: "Security basics that reduce risk in daily work.",
    description:
      "Understand common security risks, safe data handling, phishing detection, and access management.",
    curriculum: ["Threat basics", "Passwords & MFA", "Phishing patterns", "Data handling guidelines"]
  }
];

export function getCourseBySlug(slug: string) {
  return courses.find((c) => c.slug === slug) ?? null;
}

