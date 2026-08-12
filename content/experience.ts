/* Professional & leadership experience — sourced directly from Naveen's
   resume. Reverse chronological: newest first. */

export type Role = {
  company: string;
  role: string;
  type: "Internship" | "Full-time" | "Hackathon" | "Freelance" | "Leadership";
  location: string;
  period: string;
  summary: string;
  achievements: string[];
  outcome: string;
  skills: string[];
  /* panel color — one vibrant per role (Experience deck) */
  color: string;
  fg: "light" | "dark";
  /* No company logos supplied yet — panels fall back to a typographic
     mark automatically when `logo` is omitted. */
  logo?: {
    src: string;
    variant: "tile" | "plate";
    aspect: number;
    placement?: "right" | "below";
  };
};

export const ROLES: Role[] = [
  {
    company: "ComedKares Innovation Hub",
    role: "AI/ML Intern",
    type: "Internship",
    location: "Bengaluru, India",
    period: "May – Jun 2026",
    summary:
      "Built an AI-powered recommendation system that suggests personalised government schemes, using Retrieval-Augmented Generation end to end — from semantic search to a production chatbot.",
    achievements: [
      "Implemented semantic search with Sentence Transformers and FAISS, paired with Groq Llama 3 for context-aware responses",
      "Built the web application's FastAPI backend for real-time chatbot interaction and scalable API communication",
      "Took the system from prototype to a usable, real-time product interface",
    ],
    outcome: "Shipped a working RAG chatbot serving real-time scheme recommendations",
    skills: ["RAG", "FAISS", "Sentence Transformers", "FastAPI", "Groq Llama 3"],
    color: "#0EA5E9",
    fg: "light",
  },
  {
    company: "MetaMinds 1.0",
    role: "Fest Coordinator",
    type: "Leadership",
    location: "St. Joseph's University, Bengaluru",
    period: "2025 – 2026",
    summary:
      "Managed end-to-end planning of a two-day inter-collegiate fest and coordinated cross-functional teams to deliver it at scale.",
    achievements: [
      "Owned end-to-end event planning across a two-day fest",
      "Coordinated cross-functional teams covering logistics, content and operations",
      "Delivered an event that drew 1,200+ participants",
    ],
    outcome: "1,200+ participants across a two-day inter-collegiate fest",
    skills: ["Event Planning", "Cross-functional Coordination", "Leadership"],
    color: "#F59E0B",
    fg: "dark",
  },
  {
    company: "National Service Scheme (NSS)",
    role: "Vice President, Treasurer & Camp Incharge",
    type: "Leadership",
    location: "St. Joseph's University, Bengaluru",
    period: "2024 – 2025",
    summary:
      "Organised a 7-day annual rural camp as NSS Camp Incharge, Vice President and Treasurer, while leading community outreach initiatives and managing volunteer teams.",
    achievements: [
      "Organised and executed a 7-day annual rural camp as Camp Incharge, Vice President and Treasurer",
      "Led community outreach initiatives and managed volunteer teams",
      "Managed financial budgeting, funds allocation, and accounts audits as Treasurer"
    ],
    outcome: "50+ volunteers led; a 7-day rural camp delivered successfully",
    skills: ["Team Leadership", "Budget Management", "Event Incharge", "Community Outreach"],
    color: "#16A34A",
    fg: "light",
  },
];
