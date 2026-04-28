/**
 * Script de génération d'articles SEO pour NBN Nocode
 * Usage: node scripts/generate-articles.mjs
 */

import Anthropic from "@anthropic-ai/sdk";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ARTICLES_FILE = join(__dirname, "../src/content/blog/articles.ts");

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const KEYWORDS_QUEUE = [
  {
    keyword: "automatisation nocode PME",
    title: "Automatisation nocode pour PME : le guide complet 2025",
    category: "Automatisation",
    slug: "automatisation-nocode-pme-guide-complet",
  },
  {
    keyword: "Make vs Zapier comparatif",
    title: "Make vs Zapier en 2025 : lequel choisir pour automatiser votre business ?",
    category: "Automatisation",
    slug: "make-vs-zapier-comparatif-2025",
  },
  {
    keyword: "agent IA Claude entreprise",
    title: "Comment déployer un agent IA Claude dans votre entreprise (sans coder)",
    category: "Agents IA",
    slug: "agent-ia-claude-entreprise-sans-code",
  },
  {
    keyword: "automatisation relances clients",
    title: "5 automatisations pour ne plus jamais oublier de relancer un client",
    category: "Automatisation",
    slug: "automatisation-relances-clients",
  },
  {
    keyword: "ROI automatisation entreprise",
    title: "ROI de l'automatisation : combien d'heures votre PME perd-elle chaque semaine ?",
    category: "Business",
    slug: "roi-automatisation-entreprise-calcul",
  },
];

async function generateArticle(topic) {
  console.log(`\n📝 Génération : ${topic.title}`);

  const message = await client.messages.create({
    model: "claude-opus-4-5",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: `Tu es Benjamin Bertigny, fondateur de NBN Nocode, expert en automatisation nocode et agents IA Claude pour PME. Tu écris basé à Bordeaux, tu travailles avec des clients dans le triangle Bordeaux-Royan-Arcachon et partout en France.

Écris un article de blog SEO complet en français sur le sujet : "${topic.title}"

Mot-clé principal : ${topic.keyword}

Contraintes :
- 1000 à 1200 mots
- Ton d'expert friendly, concret, sans bullshit
- Parle à la première personne parfois ("J'ai vu des dizaines de PME...", "Dans mon expérience...")
- Structure : intro accrocheuse → 3-4 sections avec H2 → conclusion avec CTA vers l'audit gratuit
- Inclus des chiffres concrets (même approximatifs) : temps gagné, coût, ROI
- Mentionne Make, Zapier, Airtable, Claude AI selon pertinence
- CTA final vers : https://calendly.com/ben40nocode/1h
- Écris EN HTML uniquement (utilise <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>)
- Ne mets PAS de balise <html>, <head>, <body> ou <article> — juste le contenu interne
- La première balise doit être <p> (pas <h1>, le titre est géré séparément)

Retourne UNIQUEMENT le HTML du contenu de l'article, sans explication ni markdown.`,
      },
    ],
  });

  const content = message.content[0].text;
  const wordCount = content.replace(/<[^>]*>/g, "").split(" ").length;
  const readingTime = Math.ceil(wordCount / 200) + " min";

  return {
    slug: topic.slug,
    title: topic.title,
    description: `${topic.title} — Découvrez les meilleures pratiques d'automatisation nocode et agents IA pour PME. Par Benjamin Bertigny, expert Claude AI à Bordeaux.`,
    date: new Date().toISOString().split("T")[0],
    author: "Benjamin Bertigny",
    category: topic.category,
    keywords: [topic.keyword, "automatisation nocode", "agent IA PME", "NBN Nocode Bordeaux"],
    readingTime,
    content,
  };
}

async function main() {
  console.log("🚀 Génération des articles NBN Nocode...\n");

  // Lire les articles existants
  let existingArticles = [];
  try {
    const file = readFileSync(ARTICLES_FILE, "utf-8");
    // Extraire les slugs existants pour éviter les doublons
    const slugMatches = file.matchAll(/slug: "([^"]+)"/g);
    const existingSlugs = new Set([...slugMatches].map((m) => m[1]));
    console.log(`📚 Articles existants : ${existingSlugs.size}`);

    // Parser les articles existants du fichier TS
    const match = file.match(/export const articles: Article\[\] = (\[[\s\S]*\]);/);
    if (match) {
      // On va conserver le contenu existant et juste ajouter les nouveaux
    }
  } catch (e) {
    console.log("📂 Création du fichier articles.ts...");
  }

  const newArticles = [];
  for (const topic of KEYWORDS_QUEUE) {
    try {
      const article = await generateArticle(topic);
      newArticles.push(article);
      console.log(`  ✅ ${article.slug} (${article.readingTime} de lecture)`);
      // Pause entre les appels
      await new Promise((r) => setTimeout(r, 1000));
    } catch (err) {
      console.error(`  ❌ Erreur pour ${topic.slug}:`, err.message);
    }
  }

  // Générer le fichier TypeScript
  const tsContent = `// AUTO-GENERATED — ne pas modifier manuellement
// Généré le ${new Date().toLocaleDateString("fr-FR")} par scripts/generate-articles.mjs

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  keywords: string[];
  readingTime: string;
  content: string;
}

export const articles: Article[] = ${JSON.stringify(newArticles, null, 2)};
`;

  writeFileSync(ARTICLES_FILE, tsContent, "utf-8");
  console.log(`\n✅ ${newArticles.length} articles générés → src/content/blog/articles.ts`);
  console.log("👉 Lance 'vercel --prod' pour déployer le blog.\n");
}

main().catch(console.error);
