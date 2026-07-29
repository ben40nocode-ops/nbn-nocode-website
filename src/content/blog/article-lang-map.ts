// Correspondance des slugs d'articles de blog entre FR et EN.
// Utilisé par le sélecteur de langue (Navbar) pour renvoyer vers l'article
// équivalent dans l'autre langue plutôt que vers l'accueil.
// N'inclure que les articles qui existent VRAIMENT dans les deux langues.
// Les articles sans traduction retombent proprement sur l'index du blog
// de l'autre langue (jamais vers un mauvais article ni vers l'accueil).

export const blogSlugFrToEn: Record<string, string> = {
  "echec-silencieux-automatisation-ia": "silent-failure-ai-automation-trap",
  "back-office-ia-agence-voyage-nortrip-toolbox": "ai-back-office-travel-agency-nortrip-toolbox",
  "vibe-hangover-2026-gueule-de-bois-ia": "vibe-hangover-2026-ai-quality-crisis",
  "bmad-methode-agile-agents-ia-developpement": "bmad-agile-ai-driven-development-method",
  "de-zapier-a-claude-ventilation-automatisee": "from-zapier-to-claude-automated-accounting",
};

export const blogSlugEnToFr: Record<string, string> = Object.fromEntries(
  Object.entries(blogSlugFrToEn).map(([fr, en]) => [en, fr])
);
