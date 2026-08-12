/* THE JOURNEY — the chapters the light tunnel travels through.
 *
 * SOURCING: every fact here traces to Naveen's resume — programmes,
 * dates, places, roles and outcomes. Nothing biographical is invented.
 *
 * Shape per chapter:
 *   year   — shown large, the anchor
 *   title  — what the chapter is about
 *   place  — where it happened (context line)
 *   story  — what was actually happening, 2–3 sentences
 *   bridge — how it handed over to the next chapter (the transition line)
 */

export type Chapter = {
  id: string;
  year: string;
  title: string;
  place: string;
  story: string;
  bridge: string;
};

export const CHAPTERS: Chapter[] = [
  {
    id: "roots",
    year: "2022",
    title: "Starting with the fundamentals",
    place: "St. Joseph's University · Bengaluru",
    story:
      "A B.C.A. in Data Analytics, chosen deliberately over a generalist CS degree — three years of learning to read data before writing much code around it.",
    bridge: "The classroom work needed an outlet outside the syllabus.",
  },
  {
    id: "leadership",
    year: "2024",
    title: "Leading off the syllabus",
    place: "National Service Scheme · St. Joseph's University",
    story:
      "Elected President of the university's NSS unit: leading 50+ volunteers through outreach initiatives and managing a successful 7-day rural camp — a full year of organising people, not just data.",
    bridge: "That year of leadership ran alongside, not instead of, the technical track.",
  },
  {
    id: "close",
    year: "2025",
    title: "Closing the undergraduate chapter",
    place: "St. Joseph's University · Bengaluru",
    story:
      "Graduated from the BCA in Data Analytics with a CGPA of 8.7, mastering the foundational mathematics and statistical programming required for high-level data work.",
    bridge: "With the undergraduate foundation complete, it was time to step into postgraduate specialisation.",
  },
  {
    id: "msc",
    year: "2025",
    title: "Moving from analytics to engineering",
    place: "St. Joseph's University · Bengaluru",
    story:
      "Began an M.Sc. in Big Data Analytics (expected 2027, current SGPA 8.71) and stepped up as Fest Coordinator for MetaMinds 1.0 — leading the end-to-end planning of a 2-day intercollegiate fest for 1,200+ participants.",
    bridge: "Balancing master's studies and scale event coordination proved the readiness for real-world engineering environments.",
  },
  {
    id: "internship",
    year: "2026",
    title: "Production RAG for real users",
    place: "ComedKares Innovation Hub · Bengaluru",
    story:
      "AI/ML Intern building a RAG-based recommendation system for government schemes — semantic search with Sentence Transformers and FAISS, Groq Llama 3 for responses, and a FastAPI backend serving a real-time chatbot.",
    bridge: "The internship confirmed the direction: production systems, not just notebooks.",
  },
  {
    id: "now",
    year: "2026",
    title: "Building the portfolio that gets the interview",
    place: "Bengaluru, India",
    story:
      "Now building production-grade data engineering projects end to end — an event-driven Delta Lake lakehouse on AWS, a real-time retail streaming platform, an LLM response-ranking system, and a 214K-record terrorism analysis — while targeting data engineering roles at MNCs.",
    bridge: "This portfolio is where that work lives.",
  },
];
