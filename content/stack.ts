/* My Data Stack — tools shown in the spiral orbit.
   `src` uses a real logo from /public/images/logos when we have one;
   otherwise a brand-tinted monogram mark keeps the set visually uniform. */

export type Tool = {
  name: string;
  group: "Languages & Data" | "Big Data & Streaming" | "Cloud (AWS)" | "DevOps & Tools";
  src?: string;
  mono?: string;
  color?: string;
};

export const TOOLS: Tool[] = [
  /* — Languages & Data — */
  { name: "Python", group: "Languages & Data", mono: "Py", color: "#3776AB" },
  { name: "SQL", group: "Languages & Data", mono: "SQ", color: "#4479A1" },
  { name: "Pandas", group: "Languages & Data", mono: "Pd", color: "#150458" },
  { name: "NumPy", group: "Languages & Data", mono: "Np", color: "#4D77CF" },
  { name: "MySQL", group: "Languages & Data", mono: "My", color: "#4479A1" },

  /* — Big Data & Streaming — */
  { name: "Spark", group: "Big Data & Streaming", mono: "Sp", color: "#E25A1C" },
  { name: "PySpark", group: "Big Data & Streaming", mono: "PS", color: "#E25A1C" },
  { name: "Kafka", group: "Big Data & Streaming", mono: "Kf", color: "#231F20" },
  { name: "Airflow", group: "Big Data & Streaming", mono: "Af", color: "#017CEE" },
  { name: "Hadoop", group: "Big Data & Streaming", mono: "Hd", color: "#66CCFF" },
  { name: "Hive", group: "Big Data & Streaming", mono: "Hv", color: "#FDB813" },

  /* — Cloud (AWS) — */
  { name: "EC2", group: "Cloud (AWS)", mono: "E2", color: "#FF9900" },
  { name: "S3", group: "Cloud (AWS)", mono: "S3", color: "#569A31" },
  { name: "Redshift", group: "Cloud (AWS)", mono: "Rs", color: "#8C4FFF" },
  { name: "Glue", group: "Cloud (AWS)", mono: "Gl", color: "#8C4FFF" },
  { name: "EMR", group: "Cloud (AWS)", mono: "Em", color: "#8C4FFF" },
  { name: "Lambda", group: "Cloud (AWS)", mono: "Lm", color: "#FF9900" },

  /* — DevOps & Tools — */
  { name: "Docker", group: "DevOps & Tools", mono: "Dk", color: "#2496ED" },
  { name: "Kubernetes", group: "DevOps & Tools", mono: "K8", color: "#326CE5" },
  { name: "Git", group: "DevOps & Tools", mono: "Gt", color: "#F05032" },
  { name: "GitHub", group: "DevOps & Tools", mono: "GH", color: "#181717" },
  { name: "Power BI", group: "DevOps & Tools", mono: "BI", color: "#F2C811" },
];
