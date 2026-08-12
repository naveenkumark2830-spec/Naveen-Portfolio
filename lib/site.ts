/* Single source of truth for site-wide constants.
   Set NEXT_PUBLIC_SITE_URL in Vercel once the domain exists —
   everything (sitemap, robots, OG, JSON-LD) follows automatically. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const PERSON = {
  name: "Naveen Kumar K",
  jobTitle: "Data Engineer",
  email: "naveenkumark2830@gmail.com",
  location: "Bengaluru, India",
  /* update these to your real profile URLs before shipping */
  sameAs: [
    "https://www.linkedin.com/in/naveen-kumar-k-973442398/",
    "https://github.com/naveenkumark2830-spec",
  ],
};
