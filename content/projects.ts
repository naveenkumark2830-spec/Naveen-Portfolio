/* Featured projects — single source of truth for the Work section
   and the /work/[slug] case-study routes. Sourced directly from
   Naveen's resume. No live-site or repo links are included until
   verified real URLs are supplied — cards render typographic covers
   in the meantime. */

export type Study = {
  role: string;
  timeline: string;
  context: string;
  problem: string;
  process: { title: string; body: string }[];
  decisions: { title: string; why: string }[];
  outcomes: string[];
  reflection: string;
  note?: string;
};

export type StudyFr = Partial<Study>;

/* Card / case-page cover. Projects with no verified screenshot get a
   designed typographic cover (`mark`), never a stock image. */
export type Cover = {
  bg: string;
  ink: "light" | "dark";
  src?: string;
  aspect?: number;
  variant?: "brand" | "photo";
  focus?: string;
  mark?: string;
};

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  year: string;
  oneLiner: string;
  contribution: string;
  coverLabel: string;
  cover?: Cover;
  site?: { url: string; label: string };
  repo?: string;
  award?: string;
  study: Study;
};

export const PROJECTS: Project[] = [
  /* ─────────────── 1 · AWS EVENT-DRIVEN LAKEHOUSE ─────────────── */
  {
    slug: "aws-event-driven-lakehouse",
    title: "Production-Grade Event-Driven Data Lakehouse on AWS",
    tags: ["Data Engineering", "Streaming", "AWS"],
    year: "2026",
    oneLiner:
      "A real-time e-commerce lakehouse — Kafka-Spark streaming into a Bronze-Silver-Gold Delta Lake on S3, orchestrated and deployed end to end.",
    contribution:
      "Built the full pipeline solo — event generation, streaming, lakehouse layers and orchestration.",
    coverLabel: "AWS EVENT-DRIVEN LAKEHOUSE",
    cover: { bg: "#232F3E", ink: "light", mark: "AWS" },
    study: {
      role: "Data Engineer (Solo Project)",
      timeline: "2026",
      context:
        "Built to simulate a production e-commerce data platform: continuous event generation feeding a Kafka–Spark streaming layer into a governed lakehouse on AWS.",
      problem:
        "Raw event streams are noisy, out-of-order and duplicated — a usable lakehouse needs validation, deduplication and correctness guarantees before the data reaches analytics.",
      process: [
        {
          title: "Event generation & ingestion",
          body: "Simulated real-time e-commerce order events and streamed them through Kafka into Spark Structured Streaming.",
        },
        {
          title: "Streaming reliability",
          body: "Added validation, watermarking, deduplication, checkpointing and windowing so the stream stayed correct under late and out-of-order events.",
        },
        {
          title: "Lakehouse layers",
          body: "Landed data through Bronze, Silver and Gold Delta Lake layers on S3 with incremental processing and reliable updates.",
        },
      ],
      decisions: [
        {
          title: "Delta Lake over plain Parquet",
          why: "Needed ACID upserts and reliable incremental updates across layers, not just append-only files.",
        },
        {
          title: "Airflow for orchestration",
          why: "Batch and streaming jobs both needed scheduling, retries and dependency management in one place.",
        },
      ],
      outcomes: [
        "Bronze–Silver–Gold Delta Lake pipeline running on S3",
        "Kafka–Spark streaming layer handling validation, dedup, watermarking and windowing",
        "Orchestration, analytics and deployment integrated via Airflow, Glue, Athena, Power BI, Terraform and Docker",
      ],
      reflection:
        "This project pushed me to treat correctness — not just throughput — as the real design constraint: watermarking and deduplication logic mattered more than simply getting data moving fast.",
    },
  },

  /* ─────────────── 2 · LLM RANKING SYSTEM ─────────────── */
  {
    slug: "llm-ranking-system",
    title: "LLM Ranking System",
    tags: ["Machine Learning", "NLP", "Explainability"],
    year: "2026",
    oneLiner:
      "A LightGBM model that ranks and explains LLM responses — built to automate best-response selection with transparent reasoning.",
    contribution:
      "Designed the feature set, trained the ranking model, and built the explainability and selection interface.",
    coverLabel: "LLM RANKING SYSTEM",
    cover: { bg: "#141414", ink: "light", mark: "LLM" },
    study: {
      role: "ML Engineer (Solo Project)",
      timeline: "2026",
      context:
        "Comparing multiple LLM responses to the same prompt needed a systematic, explainable way to pick the best one — not just eyeballing outputs.",
      problem:
        "Manual response comparison doesn't scale and gives no transparent reason for why one answer beat another.",
      process: [
        {
          title: "Feature engineering",
          body: "Engineered 10+ features per response plus prompt classification to feed the ranking model.",
        },
        {
          title: "Ranking model",
          body: "Trained a LightGBM model to rank candidate responses against each other.",
        },
        {
          title: "Explainability & UI",
          body: "Integrated SHAP for transparent ranking decisions and built an interface with keyword highlighting and automated best-response selection.",
        },
      ],
      decisions: [
        {
          title: "LightGBM over a black-box ranker",
          why: "Needed a model fast enough to rank in real time while still supporting SHAP explainability.",
        },
        {
          title: "Prompt classification as a feature",
          why: "Different prompt types (factual, creative, coding) needed different signals to judge response quality.",
        },
      ],
      outcomes: [
        "Ranking model trained on 10+ engineered features",
        "SHAP-based explainability for every ranking decision",
        "Automated best-response selection with keyword-highlighted evidence",
      ],
      reflection:
        "The hardest part wasn't the model — it was defining features that actually captured 'better,' since that judgment is subjective by nature.",
    },
  },

  /* ─────────────── 3 · REAL-TIME RETAIL PLATFORM ─────────────── */
  {
    slug: "realtime-retail-platform",
    title: "Real-Time Retail Data Engineering Platform",
    tags: ["Streaming", "Kafka", "Data Marts"],
    year: "2026",
    oneLiner:
      "A Kafka–PySpark streaming pipeline turning live e-commerce order events into Gold-layer data marts for revenue, orders and operations.",
    contribution:
      "Built the streaming pipeline and designed the Gold-layer data marts end to end.",
    coverLabel: "REAL-TIME RETAIL PLATFORM",
    cover: { bg: "#1B2A4A", ink: "light", mark: "RTL" },
    study: {
      role: "Data Engineer (Solo Project)",
      timeline: "2026",
      context:
        "A retail business needs near real-time visibility into orders, revenue and payments — not next-day batch reports.",
      problem:
        "Raw order events needed cleansing, deduplication and transformation before they could support reliable business-facing metrics.",
      process: [
        {
          title: "Streaming ingestion",
          body: "Built a Kafka–PySpark streaming pipeline for real-time e-commerce order events.",
        },
        {
          title: "Bronze–Silver–Gold layers",
          body: "Implemented validation, deduplication, cleansing and transformation stages across the three layers.",
        },
        {
          title: "Gold data marts",
          body: "Developed Gold data marts for revenue, orders, payments, products, states and operational KPIs.",
        },
      ],
      decisions: [
        {
          title: "Parquet for the Gold layer",
          why: "Needed a columnar, query-efficient format for Power BI to read directly.",
        },
        {
          title: "Splitting marts by business domain",
          why: "Kept each mart focused and query-fast instead of one wide, slow table.",
        },
      ],
      outcomes: [
        "Real-time Kafka–PySpark streaming pipeline in production shape",
        "Gold data marts covering revenue, orders, payments, products and states",
        "Operational KPIs available for Power BI reporting",
      ],
      reflection:
        "Designing the Gold layer taught me that a data engineer's real customer is the person building the dashboard on top — the schema has to make their job easy.",
    },
  },

  /* ─────────────── 4 · GLOBAL TERRORISM ANALYSIS ─────────────── */
  {
    slug: "global-terrorism-analysis",
    title: "Global Terrorism Analysis (1970–2021)",
    tags: ["Data Analysis", "Geospatial", "Python"],
    year: "2025",
    oneLiner:
      "Cleaned and analysed 214K+ terrorism records into a 198,280-row analysis-ready dataset, with geospatial visualisations of regional hotspots and attack patterns.",
    contribution:
      "Handled the full analysis pipeline — cleaning, feature engineering, geospatial visualisation and trend analysis.",
    coverLabel: "GLOBAL TERRORISM ANALYSIS",
    cover: { bg: "#3A0D0D", ink: "light", mark: "GTD" },
    study: {
      role: "Data Analyst (Solo Project)",
      timeline: "2025",
      context:
        "The Global Terrorism Database spans five decades and 214K+ incidents — too large and inconsistent to analyse without significant cleaning.",
      problem:
        "Raw records had missing fields and inconsistent geography, with no ready structure for trend or hotspot analysis.",
      process: [
        {
          title: "Cleaning & preparation",
          body: "Processed 214K+ raw records down to a 198,280-row analysis-ready dataset.",
        },
        {
          title: "Geospatial analysis",
          body: "Built geospatial visualisations with Cartopy to map regional hotspots.",
        },
        {
          title: "Trend & pattern analysis",
          body: "Used Pandas and Scikit-learn to identify attack pattern trends across regions and decades.",
        },
      ],
      decisions: [
        {
          title: "Cartopy over a BI map tool",
          why: "Needed full control over projection and layering for a 50-year, multi-region dataset.",
        },
        {
          title: "Keeping the cleaned dataset as a deliverable",
          why: "A reusable, analysis-ready dataset was as valuable as any single chart built on top of it.",
        },
      ],
      outcomes: [
        "198,280-row analysis-ready dataset from 214K+ raw records",
        "Geospatial visualisations of regional attack hotspots",
        "Trend analysis spanning five decades",
      ],
      reflection:
        "Most of the real work was invisible — cleaning and structuring the data mattered more than any single visualisation built on top of it.",
    },
  },
];
