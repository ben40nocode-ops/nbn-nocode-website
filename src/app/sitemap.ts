import type { MetadataRoute } from "next";
import { articles } from "@/content/blog/articles";

const villes = [
  // Gironde
  "bordeaux","merignac","pessac","talence","gradignan","begles","villenave-d-ornon",
  "lormont","cenon","floirac","bruges","blanquefort","eysines","le-bouscat",
  "saint-medard-en-jalles","libourne","arcachon","gujan-mestras","la-teste-de-buch",
  "lege-cap-ferret","soulac-sur-mer","pauillac","lesparre-medoc","blaye",
  "saint-andre-de-cubzac","carbon-blanc","langon",
  // Landes
  "mont-de-marsan","dax","biscarrosse","mimizan","parentis-en-born","soustons",
  "capbreton","hossegor","saint-paul-les-dax","hagetmau","aire-sur-l-adour",
  "morcenx","saint-vincent-de-tyrosse","peyrehorade","castets",
  // Charente-Maritime
  "la-rochelle","royan","saintes","rochefort","jonzac","saint-jean-d-angely",
  "marennes","saujon","pons","chatelaillon-plage","saint-georges-de-didonne",
  "vaux-sur-mer","meschers-sur-gironde","tonnay-charente","surgeres","cozes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.nbn-nocode.fr";
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/automatisation-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/chatbot-ia-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/creation-site-web-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
  ];

  const blogPages: MetadataRoute.Sitemap = [
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    ...articles.map((a) => ({
      url: `${base}/blog/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  const villePages: MetadataRoute.Sitemap = villes.map((ville) => ({
    url: `${base}/automatisation/${ville}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...blogPages, ...villePages];
}
