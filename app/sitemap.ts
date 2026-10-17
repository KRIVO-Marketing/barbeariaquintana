import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

const LAST_MODIFIED = new Date("2026-10-17");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { lastModified: LAST_MODIFIED, url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    { lastModified: LAST_MODIFIED, url: `${SITE_URL}/politica-de-privacidade`, changeFrequency: "yearly", priority: 0.2 },
    { lastModified: LAST_MODIFIED, url: `${SITE_URL}/politica-de-cookies`, changeFrequency: "yearly", priority: 0.2 },
  ];
}
