import type { Metadata } from "next";
import { localBusinessSchema, simpleBreadcrumb } from "@/lib/seo-schemas";
import Link from "next/link";
import { Check, ArrowRight, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Chatbot IA & Agents Claude à Bordeaux — NBN IA",
  description: "Créez un agent IA sur mesure pour votre entreprise à Bordeaux. Répond à vos clients 24h/24, traite vos emails, qualifie vos leads. Basé sur Claude AI (Anthropic). Audit gratuit.",
  keywords: ["chatbot IA Bordeaux", "agent IA Bordeaux", "Claude AI Bordeaux", "assistant IA entreprise Bordeaux", "chatbot PME Bordeaux", "agent Claude Bordeaux", "IA conversationnelle Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/chatbot-ia-bordeaux" },
  openGraph: {
    title: "Chatbot IA & Agents Claude à Bordeaux — NBN IA",
    description: "Agent IA sur mesure pour PME bordelaises. Basé sur Claude AI. Audit gratuit.",
    url: "https://www.nbn-ia.fr/chatbot-ia-bordeaux",
  },
};

const faqs = [
  {
    q: "Quelle est la différence entre un chatbot classique et un agent IA basé sur Claude ?",
    a: "Un chatbot classique suit des arbres de décision rigides — il répond à des questions prédéfinies et échoue dès que la question sort du script. Un agent Claude comprend le langage naturel, raisonne, s'adapte au contexte et peut accomplir des tâches complexes : analyser un document, chercher une information dans votre CRM, rédiger une réponse personnalisée.",
  },
  {
    q: "Mon agent IA peut-il s'intégrer à mes outils existants ?",
    a: "Oui. On connecte les agents IA à Airtable, Notion, HubSpot, Salesforce, Slack, Gmail, Google Calendar, Stripe et la plupart des outils via API. L'agent accède à vos données en temps réel pour donner des réponses précises et contextualisées.",
  },
  {
    q: "En combien de temps mon agent IA est-il opérationnel ?",
    a: "Un agent simple (FAQ, qualification de leads, réponses clients) est opérationnel en 48h. Un agent complexe avec connexions CRM, analyse de documents et workflows multi-étapes prend 1 à 2 semaines. On démarre toujours par le cas d'usage le plus rentable.",
  },
  {
    q: "Mes données clients sont-elles sécurisées avec Claude AI ?",
    a: "Oui. Claude (Anthropic) est conçu avec des garanties de confidentialité strictes. On configure les agents pour ne jamais stocker de données sensibles, et on travaille exclusivement avec des serveurs européens pour les données de vos clients.",
  },
  {
    q: "Pourquoi Claude plutôt que ChatGPT pour un agent IA d'entreprise ?",
    a: "Claude excelle dans le raisonnement long, le traitement de documents complexes et les instructions précises. Il est plus fiable pour les workflows business critiques, a une fenêtre de contexte plus large (200k tokens) et fait moins d'hallucinations sur les données structurées. On est spécialisés Claude API — on maîtrise ses capacités en profondeur.",
  },
  {
    q: "Quel est le coût d'un agent IA pour mon entreprise à Bordeaux ?",
    a: "Un setup démarre à 450€ HT. La maintenance mensuelle (hébergement, maintenance, évolutions) commence à 159€/mois. Le ROI est généralement atteint dès le premier mois : un agent qui répond à 70% des emails clients élimine l'équivalent d'un demi-poste administratif.",
  },
];

const casUsage = [
  {
    secteur: "Cabinet de conseil / Agence",
    probleme: "Emails de qualification entrants non traités pendant les weekends, prospects qui attendent 48h une réponse et choisissent un concurrent.",
    solution: "Agent Claude qui lit les emails entrants, qualifie le prospect (budget, besoin, urgence), répond en moins de 2 minutes et prévient l'équipe si c'est chaud.",
    gain: "Taux de réponse dans l'heure : 0% → 100%. 3 deals supplémentaires signés le premier trimestre.",
  },
  {
    secteur: "E-commerce / Boutique en ligne",
    probleme: "SAV chronophage avec les mêmes questions (délais, retours, tailles) et aucune personnalisation.",
    solution: "Agent connecté au catalogue et aux commandes Shopify. Répond aux questions de suivi, gère les retours, propose des alternatives. Escalade vers un humain si nécessaire.",
    gain: "68% des tickets SAV traités sans intervention humaine. NPS +12 points.",
  },
  {
    secteur: "Professionnel de santé / Cabinet",
    probleme: "Secrétariat débordé par les appels pour des RDV, questions de remboursement, confirmations.",
    solution: "Agent IA sur le site et par SMS qui répond aux questions fréquentes, prend les RDV dans l'agenda, envoie les rappels J-1.",
    gain: "40% d'appels entrants en moins. Secrétariat concentré sur l'accueil physique.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Création de Chatbot IA & Agents Claude à Bordeaux",
      provider: { "@type": "Organization", name: "NBN IA", url: "https://www.nbn-ia.fr" },
      areaServed: { "@type": "City", name: "Bordeaux" },
      description: "Conception d'agents IA et chatbots basés sur Claude AI pour les PME de Bordeaux.",
    },
    {
      "@type": "FAQPage",
      mainEntity: faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
    localBusinessSchema({
      city: "Bordeaux",
      pageUrl: "https://www.nbn-ia.fr/chatbot-ia-bordeaux",
      name: "NBN IA — Chatbot IA & Agents Claude Bordeaux",
      description: "Création de chatbots IA et d'agents Claude sur mesure pour les PME de Bordeaux. Répond aux clients 24h/24, qualifie les leads, traite les emails.",
    }),
    simpleBreadcrumb("Chatbot IA Bordeaux", "https://www.nbn-ia.fr/chatbot-ia-bordeaux"),
  ],
};

export default function ChatbotIABordeauxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="min-h-screen bg-white pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">

          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 text-[#e8632a] rounded-full px-4 py-1.5 text-xs font-semibold mb-8 tracking-wide uppercase">
            <Bot size={12} /> Agents IA & Chatbots — Bordeaux
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Votre agent IA sur mesure<br />
            <span className="text-[#e8632a]">basé sur Claude AI à Bordeaux</span>
          </h1>

          <p className="text-lg text-gray-500 max-w-2xl mb-6 leading-relaxed">
            Un agent IA n&apos;est pas un chatbot avec des menus déroulants. C&apos;est un programme qui comprend le langage naturel, accède à vos données en temps réel et agit — répondre à un client, qualifier un prospect, traiter un email — sans que vous ayez à intervenir.
          </p>

          <p className="text-base text-gray-500 max-w-2xl mb-10 leading-relaxed">
            On conçoit des agents basés sur Claude AI (Anthropic) — le modèle le plus avancé du marché pour les workflows business. Basé à Bordeaux, on intervient en présentiel ou à distance pour les PME de Gironde et de toute la France.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-20">
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-7 py-4 rounded-xl font-semibold text-base transition-colors">
              Créer mon agent IA <ArrowRight size={17} />
            </Link>
            <Link href="/tarifs" className="inline-flex items-center gap-2 border border-gray-200 hover:border-gray-300 text-gray-700 px-7 py-4 rounded-xl font-semibold text-base transition-colors hover:bg-gray-50">
              Voir les tarifs
            </Link>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Ce que peut faire votre agent IA</h2>
              <ul className="space-y-3">
                {[
                  "Répondre à vos clients en moins de 30 secondes",
                  "Qualifier et router vos leads automatiquement",
                  "Traiter et résumer vos emails entrants",
                  "Rédiger des devis et propositions commerciales",
                  "Analyser des documents PDF et contrats",
                  "S'intégrer dans Slack, Notion, Airtable, CRM",
                  "Escalader vers un humain si nécessaire",
                  "Prendre des RDV dans votre agenda",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-600">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 rounded-2xl p-7">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Pourquoi Claude AI ?</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  "Meilleur raisonnement long du marché (200k tokens)",
                  "Spécialisé documents complexes & analyses",
                  "Infrastructure Anthropic — sécurisé & RGPD",
                  "Moins d'hallucinations sur les données structurées",
                  "Certifiés Anthropic Architecture",
                  "On maîtrise Claude API en profondeur",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Comment ça marche */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Comment on crée votre agent IA à Bordeaux</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { step: "01", title: "Audit du cas d'usage", desc: "On identifie ensemble le cas d'usage le plus rentable : quel process est le plus chronophage ? Où perd-on des prospects ? Quelle tâche répétitive prend le plus de temps ?" },
                { step: "02", title: "Conception & déploiement", desc: "On entraîne l'agent sur votre domaine, on le connecte à vos outils et on le déploie. Un agent simple est opérationnel en 48h." },
                { step: "03", title: "Optimisation continue", desc: "On monitore les performances, on affine les réponses, on étend les capacités de l'agent. Votre agent s'améliore dans le temps." },
              ].map(({ step, title, desc }) => (
                <div key={step} className="bg-white border border-gray-100 rounded-2xl p-6">
                  <div className="text-3xl font-black text-orange-100 mb-3">{step}</div>
                  <h3 className="text-base font-bold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Cas d'usage */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Cas concrets d&apos;agents IA à Bordeaux</h2>
            <p className="text-gray-500 text-sm mb-8">Résultats réels observés chez des entreprises bordelaises et girondines.</p>
            <div className="flex flex-col gap-6">
              {casUsage.map(({ secteur, probleme, solution, gain }) => (
                <div key={secteur} className="border border-gray-100 rounded-2xl p-7">
                  <div className="inline-flex items-center bg-orange-50 text-[#e8632a] text-xs font-semibold px-3 py-1 rounded-full mb-4">{secteur}</div>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Problème</p>
                      <p className="text-gray-500">{probleme}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Solution déployée</p>
                      <p className="text-gray-500">{solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-700 mb-1">Résultat</p>
                      <p className="text-[#e8632a] font-semibold">{gain}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ */}
          <div className="mb-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Questions fréquentes — agent IA & chatbot à Bordeaux</h2>
            <div className="flex flex-col gap-4">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border border-gray-100 rounded-xl p-6">
                  <p className="font-semibold text-gray-900 mb-2 text-sm">{q}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Votre premier agent IA en 48h</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Audit gratuit de 1h. On identifie le cas d&apos;usage le plus rentable pour votre entreprise à Bordeaux.</p>
            <Link href="https://calendly.com/ben40nocode/1h" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#e8632a] hover:bg-[#c4521f] text-white px-8 py-4 rounded-xl font-bold text-sm transition-colors">
              Réserver l&apos;audit gratuit <ArrowRight size={15} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
}
