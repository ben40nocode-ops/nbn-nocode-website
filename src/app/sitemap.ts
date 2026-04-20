import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nbn-nocode.fr";
  return [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/automatisation-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/chatbot-ia-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/creation-site-web-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];
}
