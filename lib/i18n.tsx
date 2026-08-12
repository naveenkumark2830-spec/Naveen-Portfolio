"use client";

/*
 * English-only string store for every user-facing string on the site.
 * (Bilingual EN/FR support was removed for this build — see git history
 * of the upstream template if it's ever needed again.)
 */

import { createContext, useContext, type ReactNode } from "react";

export type Lang = "en";

type Entry = { en: string };

export const DICT: Record<string, Entry> = {
  /* ---------------- nav ---------------- */
  "nav.home": { en: "Home" },
  "nav.about": { en: "About" },
  "nav.work": { en: "Work" },
  "nav.contact": { en: "Contact" },
  "nav.menu": { en: "Open menu" },
  "nav.close": { en: "Close menu" },

  /* ---------------- intro ---------------- */
  "intro.scroll": { en: "Scroll to enter" },

  /* ---------------- hero ---------------- */
  "hero.kicker": { en: "Data Engineer · Big Data & Cloud" },
  "hero.h1a": { en: "Data that finally" },
  "hero.h1aEm": { en: "makes sense." },
  "hero.h1b": { en: "Pipelines that" },
  "hero.h1bEm": { en: "just work." },
  "hero.sub": {
    en: "I build scalable data systems and real-time pipelines with Python, SQL, Spark, Kafka and AWS — turning raw data into reliable, production-grade insight.",
  },
  "hero.cta1": { en: "View My Work" },
  "hero.cta2": { en: "See My Stack" },
  "hero.scroll": { en: "Scroll to Explore" },
  "stat.projects": { en: "Data Engineering Projects" },
  "stat.years": { en: "AWS Services Used" },
  "stat.countries": { en: "Volunteers Led (NSS)" },
  "stat.satisfaction": { en: "Fest Participants Coordinated" },

  /* ---------------- about ---------------- */
  "about.eyebrow": { en: "About" },
  "about.h2a": { en: "Data is how I think —" },
  "about.h2b": { en: "systems are how I" },
  "about.h2Em": { en: "build" },
  "about.h2c": { en: "it." },
  "about.m1": { en: "Fest Coordinator, MetaMinds 1.0 — 1,200+ participants" },
  "about.m2": { en: "Portfolio data engineering projects shipped" },
  "about.m3": { en: "Terrorism records analyzed into one clean dataset" },
  "about.m4": { en: "Volunteers led as NSS VP & Treasurer" },
  "about.edu": {
    en: "B.C.A. Data Analytics · St. Joseph's University · 2022–2025 · CGPA 8.7  →  M.Sc. Big Data Analytics · St. Joseph's University · 2025–2027 (Expected) · SGPA 8.71",
  },
  "about.cta": { en: "Explore My Work" },

  /* ---------------- journey ----------------
     Chapter copy lives in content/journey.ts; only the chrome is here. */
  "journey.eyebrow": { en: "My Journey" },
  "journey.enter": { en: "Scroll to travel" },
  "journey.chapter": { en: "Chapter" },
  "journey.lede": {
    en: "From a Bengaluru classroom to production-grade AWS pipelines — the chapters that turned a data analytics student into a data engineer.",
  },

  /* ---------------- tech stack ---------------- */
  "stack.eyebrow": { en: "Toolkit" },
  "stack.h2": { en: "My Data" },
  "stack.h2Em": { en: "Stack." },
  "stack.lede": {
    en: "The tools I use to ingest, process, orchestrate, stream and ship data — from raw events to production pipelines.",
  },
  "stack.count": { en: "tools" },
  "stack.disciplines": { en: "disciplines" },

  /* ---------------- work ---------------- */
  "work.eyebrow": { en: "Featured Work" },
  "work.h2a": { en: "Selected projects," },
  "work.h2b": { en: "built to" },
  "work.h2Em": { en: "scale." },
  "work.lede": {
    en: "Real-time streaming, lakehouse architecture, ML ranking and large-scale analysis — each project a different capability inside one data engineering practice.",
  },
  "work.open": { en: "Open case study" },
  "work.hint": { en: "SCROLL TO BROWSE" },

  /* ---------------- experience ---------------- */
  "exp.eyebrow": { en: "Experience" },
  "exp.h2": { en: "Where I built my" },
  "exp.h2Em": { en: "systems sense." },
  "exp.worked": { en: "What I worked on" },
  "exp.impact": { en: "Impact" },
  "exp.tools": { en: "Tools & skills" },
  "exp.hint": { en: "SCROLL · CLICK TO JUMP" },
  "type.Internship": { en: "Internship" },
  "type.Full-time": { en: "Full-time" },
  "type.Hackathon": { en: "Hackathon" },
  "type.Freelance": { en: "Freelance" },
  "type.Leadership": { en: "Leadership" },

  /* ---------------- connect ---------------- */
  "connect.eyebrow": { en: "Let's Connect" },
  "connect.h2a": { en: "Let's build what's" },
  "connect.h2Em": { en: "next." },
  "connect.lede": {
    en: "I'm looking for data engineering internships and roles — if you're working on real-time pipelines, lakehouses or ML systems, I'd like to hear about it.",
  },
  "connect.cta": { en: "Start a Conversation" },
  "connect.credit": { en: "Designed & Developed by" },
  "connect.top": { en: "Back to top ↑" },

  /* ---------------- case study (/work/[slug]) ---------------- */
  "case.back": { en: "← Back to work" },
  "case.kicker": { en: "Case Study" },
  "case.role": { en: "Role" },
  "case.timeline": { en: "Timeline" },
  "case.focus": { en: "Focus" },
  "case.site": { en: "Live product" },
  "case.repo": { en: "Source" },
  "case.cover": { en: "COVER" },
  "case.context": { en: "Context" },
  "case.problem": { en: "The Problem" },
  "case.process": { en: "Process" },
  "case.decisions": { en: "Engineering Decisions" },
  "case.outcome": { en: "Outcome" },
  "case.reflection": { en: "Reflection" },
  "case.all": { en: "← All projects" },
  "case.next": { en: "Next project" },

  /* ---------------- lab (/tunnel) ---------------- */
  "lab.back": { en: "← PORTFOLIO" },
  "lab.hint": { en: "LAB · TUNNEL TYPE — SCROLL TO TRAVEL · MOVE THE MOUSE" },

  /* ---------------- 404 ---------------- */
  "nf.label": { en: "404 — NOT FOUND" },
  "nf.h1": { en: "This page went" },
  "nf.h1Em": { en: "off the grid." },
  "nf.cta": { en: "Back to the portfolio →" },
};

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (k: string) => string };

const LanguageContext = createContext<Ctx>({
  lang: "en",
  setLang: () => {},
  t: (k) => DICT[k]?.en ?? k,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  /* Single-language build: no state, no localStorage, no <html lang> writes
     beyond the static "en" already set in the root layout. */
  const t = (k: string) => DICT[k]?.en ?? k;

  return (
    <LanguageContext.Provider value={{ lang: "en", setLang: () => {}, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);

/** Pick a translated field off a content record. Single-language build:
 *  always returns the English field. Kept for call-site compatibility. */
export function L<T extends Record<string, unknown>>(
  _lang: Lang,
  item: T,
  field: keyof T & string
): string {
  return item[field] as unknown as string;
}
