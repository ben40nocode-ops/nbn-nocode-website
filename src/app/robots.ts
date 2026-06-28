import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // IA crawlers — autorisation explicite pour la visibilité GEO
      { userAgent: "GPTBot",             allow: "/" },
      { userAgent: "ClaudeBot",          allow: "/" },
      { userAgent: "anthropic-ai",       allow: "/" },
      { userAgent: "PerplexityBot",      allow: "/" },
      { userAgent: "Google-Extended",    allow: "/" },
      { userAgent: "Applebot-Extended",  allow: "/" },
      { userAgent: "cohere-ai",          allow: "/" },
      { userAgent: "Amazonbot",          allow: "/" },
      // Règle générale
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/dashboard", "/api/", "/sign-in", "/sign-up", "/acces-refuse"],
      },
    ],
    sitemap: "https://www.nbn-ia.fr/sitemap.xml",
  };
}
