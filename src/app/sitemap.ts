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
  const base = "https://www.nbn-ia.fr";
  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${base}/tarifs`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/portfolio-freelance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Services
    { url: `${base}/services/automatisation-ia`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/sites-internet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/services/web-apps`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },

    // Automatisation par ville (pages dédiées)
    { url: `${base}/automatisation-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/automatisation-ia-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/automatisation-ia-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/automatisation-ia-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    // Chatbot & création site
    { url: `${base}/chatbot-ia-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/creation-site-web-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    // Web apps
    { url: `${base}/web-app-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/web-app-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/web-app-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.85 },

    // Sites internet par ville
    { url: `${base}/site-internet-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/site-internet-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/site-internet-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Pages géo principales
    { url: `${base}/bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/lacanau`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/soulac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/pauillac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/lesparre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/montalivet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    // Pages secteur
    { url: `${base}/artisan-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/artisan-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/restaurant-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/automatisation-restaurant-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/site-restaurant-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/site-restaurant-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/boutique-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/startup-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/saas-gironde`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    // Hôtels & campings
    { url: `${base}/site-hotel-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/site-hotel-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/hotel-soulac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/camping-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/camping-lacanau`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/site-camping-montalivet`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/site-camping-soulac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/app-camping-lacanau`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/app-camping-soulac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/app-hotel-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/app-restaurant-bordeaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.75 },

    // Niches locales
    { url: `${base}/domaines-medoc`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/vins-pauillac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/cave-lesparre`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/site-domaine-viticole-pauillac`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/huitres-bassin`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ostreiculteur-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/poisson-arcachon`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/peche-royan`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
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

  // Pages /automatisation/{ville} exclues du sitemap (noindex — contenu générique)

  return [...staticPages, ...blogPages];
}
