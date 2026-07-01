import type { LeadCircuitContent } from "./types";

export const LEAD_CIRCUIT_CONTENT: LeadCircuitContent = {
  eyebrow: "INDUSTRY BASED LEARNING - NO FLUFF, NO EXTRAS",
  title: "What You'll Learn",
  modules: [
    {
      id: 1,
      title: "Module 1: Foundations",
      icon: "letter-a",
      description: "Marketing fundamentals",
    },
    {
      id: 2,
      title: "Module 2: Funnels",
      icon: "dollar",
      description: "Sales funnels & conversion",
    },
    {
      id: 3,
      title: "Module 3: Paid Media",
      icon: "letter-g",
      description: "Google & Meta advertising",
    },
    {
      id: 4,
      title: "Module 4: SEO, Content & AI",
      icon: "briefcase",
      description: "Search & content strategy",
    },
  ],
  eligibilityTitle: "Who Should Join",
  eligibility: [
    "Solo marketers or founders doing it all",
    "Teams tired of scattered efforts and poor results",
    "Freelancers or consultants wanting deeper clarity",
    "Anyone who wants structured, honest marketing knowledge without the fluff",
  ],
  courseDetailsTitle: "Course Details",
  courseDetails: {
    formatLabel: "Format:",
    format: "Weekly live sessions (via Zoom)",
    durationLabel: "Total Duration:",
    duration: "4 hours over 4 sessions",
    includesLabel: "Includes:",
    includes:
      "Live instruction, Q&A, downloadable templates, and session recordings",
  },
  cta: {
    label: "DOWNLOAD BROCHURE",
    href: "#",
  },
};
