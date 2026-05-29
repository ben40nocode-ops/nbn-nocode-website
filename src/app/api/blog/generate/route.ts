export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import Anthropic from "@anthropic-ai/sdk";
import { saveBlogArticle, getExistingSlugs, getAllBlogArticles, type BlogArticle } from "@/lib/airtable-blog";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY2 });

const FR_CATEGORIES = ["Automatisation", "Agents IA", "Nocode", "Business", "Sites Web & Apps", "Design Web / Graphisme"];
const EN_CATEGORIES = ["Automation", "AI Agents", "No-Code", "Business", "Web & Apps", "Web Design / Branding"];

type Topic = { keyword: string; title: string; category: string; slug: string };

const TOPIC_PAIRS: Array<{ fr: Topic; en: Topic }> = [
  {
    fr: { keyword: "GEO optimisation moteurs IA generatif", title: "GEO : comment optimiser votre contenu pour ChatGPT, Perplexity et Claude en 2026", category: "Agents IA", slug: "geo-optimisation-contenu-ia-generatif-2026" },
    en: { keyword: "GEO generative engine optimization 2026", title: "GEO: How to Optimise Your Content for ChatGPT, Perplexity and Claude in 2026", category: "AI Agents", slug: "geo-generative-engine-optimization-2026" },
  },
  {
    fr: { keyword: "agent IA Claude entreprise", title: "Comment déployer un agent IA Claude dans votre entreprise (sans coder)", category: "Agents IA", slug: "agent-ia-claude-entreprise-sans-code" },
    en: { keyword: "Claude AI agent business deployment", title: "How to Deploy a Claude AI Agent in Your Business (No Code Required)", category: "AI Agents", slug: "claude-ai-agent-business-deployment" },
  },
  {
    fr: { keyword: "automatisation relances clients email", title: "5 automatisations pour ne plus jamais oublier de relancer un client", category: "Automatisation", slug: "automatisation-relances-clients-email" },
    en: { keyword: "AI customer service automation", title: "AI Customer Service: Cut Your Response Time by 80% Without Hiring", category: "AI Agents", slug: "ai-customer-service-automation-sme" },
  },
  {
    fr: { keyword: "ROI automatisation entreprise calcul", title: "ROI de l'automatisation : combien d'heures votre PME perd-elle chaque semaine ?", category: "Business", slug: "roi-automatisation-entreprise-calcul" },
    en: { keyword: "ROI business automation calculate", title: "How to Calculate the Real ROI of Automation for Your Small Business", category: "Business", slug: "roi-business-automation-calculate" },
  },
  {
    fr: { keyword: "Airtable PME base de données nocode", title: "Airtable pour les PME : comment centraliser vos données sans développeur", category: "Nocode", slug: "airtable-pme-base-donnees-nocode" },
    en: { keyword: "Airtable small business database", title: "Airtable for Small Business: Centralise Your Data Without a Developer", category: "No-Code", slug: "airtable-small-business-database-nocode" },
  },
  {
    fr: { keyword: "chatbot IA site web PME", title: "Pourquoi votre site web a besoin d'un assistant IA en 2026", category: "Agents IA", slug: "chatbot-ia-site-web-pme-2026" },
    en: { keyword: "chatbot AI website small business", title: "Why Every Small Business Website Needs an AI Chatbot in 2026", category: "AI Agents", slug: "chatbot-ai-website-small-business-2026" },
  },
  {
    fr: { keyword: "automatisation comptabilité PME nocode", title: "Automatisez votre comptabilité : les 4 tâches que les PME délèguent à l'IA", category: "Automatisation", slug: "automatisation-comptabilite-pme-nocode" },
    en: { keyword: "AI invoicing quoting automation SME", title: "From Quote to Invoice: Automating Your Entire Sales Cycle with AI", category: "Automation", slug: "ai-invoicing-quoting-automation-sme" },
  },
  {
    fr: { keyword: "IA recrutement PME automatisation RH", title: "IA et recrutement : comment automatiser le tri des candidatures sans recruter un DRH", category: "Automatisation", slug: "ia-recrutement-pme-automatisation-rh" },
    en: { keyword: "AI recruitment HR automation SME", title: "AI and Recruitment: How to Automate CV Screening Without an HR Department", category: "Automation", slug: "ai-recruitment-hr-automation-sme" },
  },
  {
    fr: { keyword: "automatisation devis factures PME", title: "De la demande à la facture : automatiser tout le cycle commercial de votre PME", category: "Automatisation", slug: "automatisation-devis-factures-pme" },
    en: { keyword: "no-code tools business automation", title: "The 5 Best No-Code Tools for Business Automation in 2026", category: "No-Code", slug: "best-no-code-tools-business-automation-2026" },
  },
  {
    fr: { keyword: "nocode formation PME Bordeaux", title: "Apprendre le nocode : les ressources indispensables pour les dirigeants de PME", category: "Nocode", slug: "nocode-formation-pme-ressources" },
    en: { keyword: "no-code vs developer when to choose", title: "No-Code vs Developer: How to Decide for Your Business in 2026", category: "Business", slug: "no-code-vs-developer-when-to-choose" },
  },
  {
    fr: { keyword: "automatisation réseaux sociaux PME", title: "Comment automatiser votre présence sur les réseaux sociaux sans agence", category: "Automatisation", slug: "automatisation-reseaux-sociaux-pme" },
    en: { keyword: "social media automation small business", title: "Social Media Automation: How Small Businesses Post Consistently Without an Agency", category: "Automation", slug: "social-media-automation-small-business" },
  },
  {
    fr: { keyword: "IA restauration hôtellerie automatisation", title: "IA dans la restauration : 4 automatisations qui changent le quotidien des gérants", category: "Automatisation", slug: "ia-restauration-hotellerie-automatisation" },
    en: { keyword: "restaurant AI automation revenue", title: "Restaurant AI: 4 Automations That Reduce Costs and Increase Revenue", category: "Automation", slug: "restaurant-ai-automation-revenue" },
  },
  {
    fr: { keyword: "nocode vs développeur quand choisir", title: "Nocode ou développeur : comment décider pour votre PME en 2026 ?", category: "Business", slug: "nocode-vs-developpeur-quand-choisir" },
    en: { keyword: "hotel AI automation front desk", title: "Hotel Automation: How AI Is Changing Front Desk Operations in 2026", category: "AI Agents", slug: "hotel-ai-automation-front-desk" },
  },
  {
    fr: { keyword: "site web PME vitrine nocode", title: "Créer un site web professionnel pour PME sans développeur en 2026", category: "Sites Web & Apps", slug: "site-web-pme-vitrine-nocode-2026" },
    en: { keyword: "professional website small business nocode", title: "Build a Professional Website for Your Small Business Without a Developer in 2026", category: "Web & Apps", slug: "professional-website-small-business-nocode-2026" },
  },
  {
    fr: { keyword: "app mobile PME nocode bubble", title: "App mobile pour PME : Bubble, Glide ou Flutter — que choisir sans coder ?", category: "Sites Web & Apps", slug: "app-mobile-pme-nocode-bubble-glide" },
    en: { keyword: "mobile app small business bubble nocode", title: "Mobile App for Your Business: Bubble, Glide or Flutter — Which One Without Coding?", category: "Web & Apps", slug: "mobile-app-small-business-bubble-glide-nocode" },
  },
  {
    fr: { keyword: "identité visuelle PME charte graphique", title: "Identité visuelle PME : comment créer une charte graphique professionnelle sans agence", category: "Design Web / Graphisme", slug: "identite-visuelle-pme-charte-graphique" },
    en: { keyword: "brand identity small business visual design", title: "Brand Identity for Small Businesses: How to Create a Professional Visual Identity Without an Agency", category: "Web Design / Branding", slug: "brand-identity-small-business-visual-design" },
  },
  {
    fr: { keyword: "landing page conversion PME design", title: "Landing page qui convertit : les 7 règles de design que les PME ignorent", category: "Design Web / Graphisme", slug: "landing-page-conversion-pme-design" },
    en: { keyword: "landing page conversion design SME", title: "High-Converting Landing Pages: 7 Design Rules Most Small Businesses Ignore", category: "Web Design / Branding", slug: "landing-page-conversion-design-sme" },
  },
  {
    fr: { keyword: "webflow vs wordpress PME 2026", title: "Webflow vs WordPress en 2026 : le bon choix pour votre PME", category: "Sites Web & Apps", slug: "webflow-vs-wordpress-pme-2026" },
    en: { keyword: "webflow vs wordpress small business 2026", title: "Webflow vs WordPress in 2026: The Right Choice for Your Small Business", category: "Web & Apps", slug: "webflow-vs-wordpress-small-business-2026" },
  },
  {
    fr: { keyword: "automatisation nocode PME", title: "Automatisation nocode pour PME : le guide complet 2026", category: "Automatisation", slug: "automatisation-nocode-pme-guide-complet-2026" },
    en: { keyword: "AI automation small business 2026", title: "AI Automation for Small Business in 2026: A Practical Guide", category: "Automation", slug: "ai-automation-small-business-2026-guide" },
  },
  {
    fr: { keyword: "agent IA service client PME", title: "Agent IA pour le service client : réduire vos délais de réponse de 80 %", category: "Agents IA", slug: "agent-ia-service-client-pme" },
    en: { keyword: "AI wine estate domaine viticole", title: "AI for Wine Estates: How French Domaines Are Automating Their Operations", category: "Automation", slug: "ai-wine-estate-automation-france" },
  },
];

async function generateTopicPair(frPublished: BlogArticle[], enPublished: BlogArticle[]): Promise<{ fr: Topic; en: Topic }> {
  const frContext = frPublished.map((a) => `- [${a.category}] ${a.title}`).join("\n");
  const message = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 800,
    messages: [{
      role: "user",
      content: `Tu es un expert SEO. Génère UN nouveau sujet d'article de blog qui sera publié simultanément en français ET en anglais pour le site NBN IA (automatisation IA, nocode, web pour PME).

Articles FR déjà publiés (évite ces angles) :
${frContext}

Catégories FR disponibles : ${FR_CATEGORIES.join(", ")}
Catégories EN disponibles : ${EN_CATEGORIES.join(", ")}

Génère un sujet cohérent dans les deux langues. Réponds UNIQUEMENT en JSON valide :
{
  "fr": {"keyword": "...", "title": "...", "category": "...", "slug": "..."},
  "en": {"keyword": "...", "title": "...", "category": "...", "slug": "..."}
}

Règles FR : keyword longue-traîne (3-6 mots fr), title 60-80 chars, slug kebab-case sans accents
Règles EN : keyword long-tail (3-6 words en), title 60-80 chars, slug kebab-case`,
    }],
  });
  const text = message.content[0].type === "text" ? message.content[0].text.trim() : "{}";
  const parsed = JSON.parse(text) as { fr: Topic; en: Topic };
  return parsed;
}

async function generateFRArticle(topic: Topic, publishedTitles: string[]): Promise<string> {
  const avoidList = publishedTitles.length
    ? `\nArticles déjà publiés à NE PAS répéter (évite les mêmes angles, exemples, structures et formulations) :\n${publishedTitles.map((t) => `- ${t}`).join("\n")}\n`
    : "";
  const message = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 4000,
    messages: [{
      role: "user",
      content: `Tu es Benjamin Bertigny, fondateur de NBN IA, basé à Bordeaux. Tu accompagnes des PME, artisans, restaurants, hôtels et domaines viticoles en Gironde et partout en France sur l'automatisation IA et le développement web.
${avoidList}
Écris un article de blog en français sur : "${topic.title}"
Mot-clé principal : ${topic.keyword}

RÈGLE N°1 — PAS DE CONTENU GÉNÉRIQUE :
Évite absolument les articles du type "7 conseils pour...", "Guide complet de...", listes de tips sans contexte. Google pénalise ce contenu "commodity" que n'importe quel LLM peut produire. Ton article doit être impossible à écrire sans expérience terrain.

RÈGLE N°2 — ANCRE DANS UN CAS RÉEL :
Commence ou structure l'article autour d'un cas client précis et détaillé — un vrai problème rencontré, les outils utilisés, ce qui a bloqué, ce qui a marché, les chiffres exacts. Invente des détails vraisemblables (secteur, ville de Gironde, outil spécifique, durée du projet) pour que ça sonne vécu. Exemple de bon début : "Un plombier de La Teste-de-Buch m'a appelé en octobre dernier. Il perdait 2h par jour sur les relances de devis..." plutôt que "L'automatisation est devenue incontournable pour les PME."

RÈGLE N°3 — POINT DE VUE TRANCHÉ :
Prends position. Dis ce qui ne marche pas, ce que la plupart font mal, une erreur courante que tu vois chez tes clients. Un article sans opinion ne vaut rien.

Contraintes de fond :
- 700 à 800 mots
- Première personne naturelle, ton direct, zéro jargon inutile
- Zéro formules creuses : "Il est essentiel de noter que...", "En conclusion, nous pouvons affirmer...", "Dans le monde actuel..."
- Au moins un chiffre concret issu du cas client (temps gagné, coût évité, taux de conversion, etc.)
- Outils nommés précisément selon le sujet (Make, Zapier, Airtable, Claude AI, n8n, Webflow, Bubble...)
- CTA final vers : https://calendly.com/ben40nocode/1h (audit gratuit 1h)

Contraintes de forme :
- HTML uniquement : <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <a>
- Pas de balise <html>, <head>, <body>, <article>, ni <h1>
- La première balise doit être <p>
- Les liens <a> doivent avoir target="_blank" rel="noopener noreferrer"

Retourne UNIQUEMENT le HTML du contenu, sans explication ni markdown.`,
    }],
  });
  return message.content[0].type === "text" ? message.content[0].text : "";
}

async function generateENArticle(topic: Topic, publishedTitles: string[]): Promise<string> {
  const avoidList = publishedTitles.length
    ? `\nAlready published articles — DO NOT repeat the same angles, examples, structures or phrasing:\n${publishedTitles.map((t) => `- ${t}`).join("\n")}\n`
    : "";
  const message = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 4000,
    messages: [{
      role: "user",
      content: `You are Benjamin Bertigny, founder of NBN IA, based in Bordeaux, France. You work with SMBs, craftsmen, restaurants, hotels and wine estates across the Gironde region and all of France on AI automation and web development.
${avoidList}
Write a blog article in English on: "${topic.title}"
Primary keyword: ${topic.keyword}

RULE #1 — NO GENERIC CONTENT:
Avoid "7 tips for...", "The complete guide to...", listicles without context. Google penalises this commodity content that any LLM can produce. Your article must be impossible to write without real field experience.

RULE #2 — ANCHOR IN A REAL CASE:
Open or structure the article around a specific, detailed client situation — a real problem encountered, the tools used, what blocked progress, what worked, the exact numbers. Invent plausible details (sector, specific French location, specific tool, project duration) so it sounds lived-in. Example of a good opening: "A restaurant owner in Arcachon called me last November. She was losing 90 minutes a day manually responding to Google reviews..." rather than "AI automation is becoming essential for small businesses."

RULE #3 — A CLEAR POINT OF VIEW:
Take a position. Say what doesn't work, what most businesses get wrong, a common mistake you see with clients. An article without an opinion is worthless.

Content constraints:
- 700 to 800 words
- Natural first-person voice, direct tone, no unnecessary jargon
- No hollow phrases: "It is important to note that...", "In conclusion, we can affirm...", "In today's fast-paced world..."
- At least one concrete number from the client case (time saved, cost avoided, conversion rate, etc.)
- Tools named precisely where relevant (Make, Zapier, Airtable, Claude AI, n8n, Webflow, Bubble...)
- Final CTA towards: https://calendly.com/ben40nocode/1h (free 1-hour audit)

Format constraints:
- HTML only: <h2>, <h3>, <p>, <ul>, <li>, <strong>, <em>, <a>
- No <html>, <head>, <body>, <article>, or <h1> tags
- First tag must be <p>
- Links <a> must have target="_blank" rel="noopener noreferrer"

Return ONLY the HTML content, no explanation or markdown.`,
    }],
  });
  return message.content[0].type === "text" ? message.content[0].text : "";
}

function wordCount(html: string): number {
  return html.replace(/<[^>]*>/g, "").split(/\s+/).filter(Boolean).length;
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const [existingSlugs, frPublished, enPublished] = await Promise.all([
      getExistingSlugs().then((s) => new Set(s)),
      getAllBlogArticles("fr"),
      getAllBlogArticles("en"),
    ]);
    const frTitles = frPublished.map((a) => a.title);
    const enTitles = enPublished.map((a) => a.title);
    const today = new Date().toISOString().split("T")[0];

    // Find next unpublished pair (skip if either slug already exists)
    let pair: { fr: Topic; en: Topic } | undefined = TOPIC_PAIRS.find(
      (p) => !existingSlugs.has(p.fr.slug) && !existingSlugs.has(p.en.slug)
    );

    // Auto-generate a new pair when queue is exhausted
    if (!pair) {
      pair = await generateTopicPair(frPublished, enPublished);
      // Retry once if slugs conflict
      if (existingSlugs.has(pair.fr.slug) || existingSlugs.has(pair.en.slug)) {
        pair = await generateTopicPair(frPublished, enPublished);
      }
    }

    if (!pair || existingSlugs.has(pair.fr.slug) || existingSlugs.has(pair.en.slug)) {
      return NextResponse.json({ message: "No articles generated (slug conflicts)" });
    }

    // Generate both articles in parallel
    const [frContent, enContent] = await Promise.all([
      generateFRArticle(pair.fr, frTitles),
      generateENArticle(pair.en, enTitles),
    ]);

    const frWords = wordCount(frContent);
    const enWords = wordCount(enContent);

    // Save both to Airtable
    await Promise.all([
      saveBlogArticle({
        slug: pair.fr.slug,
        title: pair.fr.title,
        description: `${pair.fr.title} — Guide pratique par Benjamin Bertigny, expert automatisation, IA et web pour PME à Bordeaux.`,
        date: today,
        author: "Benjamin Bertigny",
        category: pair.fr.category,
        keywords: [pair.fr.keyword, "automatisation nocode", "agent IA PME", "NBN IA Bordeaux"],
        readingTime: `${Math.ceil(frWords / 200)} min`,
        content: frContent,
        lang: "fr",
      }),
      saveBlogArticle({
        slug: pair.en.slug,
        title: pair.en.title,
        description: `${pair.en.title} — Practical guide by Benjamin Bertigny, automation, AI and web expert for SMBs.`,
        date: today,
        author: "Benjamin Bertigny",
        category: pair.en.category,
        keywords: [pair.en.keyword, "no-code automation", "AI agents SMB", "NBN IA"],
        readingTime: `${Math.ceil(enWords / 200)} min`,
        content: enContent,
        lang: "en",
      }),
    ]);

    return NextResponse.json({ success: true, generated: [pair.fr.slug, pair.en.slug], date: today });
  } catch (err) {
    console.error("[blog/generate] error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
