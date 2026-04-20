import type { Metadata } from "next";
import Link from "next/link";
import { Check, ArrowRight, Bot } from "lucide-react";

export const metadata: Metadata = {
  title: "Chatbot IA & Agents Claude — Bordeaux | NBN Nocode",
  description: "Créez un agent IA sur mesure pour votre entreprise à Bordeaux. Répond à vos clients 24h/24, traite vos emails, qualifie vos leads. Basé sur Claude AI (Anthropic). Audit gratuit.",
  keywords: ["chatbot IA Bordeaux", "agent IA Bordeaux", "Claude AI Bordeaux", "assistant IA entreprise", "chatbot entreprise Bordeaux", "automatisation IA Bordeaux", "agent Claude Bordeaux"],
  alternates: { canonical: "https://www.nbn-nocode.fr/chatbot-ia-bordeaux" },
  openGraph: {
    title: "Chatbot IA & Agents Claude à Bordeaux — NBN Nocode",
    description: "Agent IA sur mesure pour PME bordelaises. Basé sur Claude AI. Audit gratuit.",
    url: "https://www.nbn-nocode.fr/chatbot-ia-bordeaux",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Création de Chatbot IA & Agents Claude à Bordeaux",
  provider: { "@type": "Organization", name: "NBN Nocode", url: "https://www.nbn-nocode.fr" },
  areaServed: { "@type": "City", name: "Bordeaux" },
  description: "Conception d'agents IA et chatbots basés sur Claude AI pour les PME de Bordeaux.",
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

          <p className="text-lg text-gray-500 max-w-2xl mb-10 leading-relaxed">
            On conçoit des agents IA qui répondent à vos clients, traitent vos emails, qualifient vos leads et automatisent vos décisions — 24h/24, 7j/7. Basé sur Claude (Anthropic), le modèle le plus avancé du marché.
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
                  "On est spécialistes certifiés Claude API",
                  "Pas de ChatGPT — on va plus loin",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <Check size={15} className="text-[#e8632a] flex-shrink-0 mt-0.5" />{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gray-900 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Votre premier agent IA en 48h</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">Audit gratuit de 30 min. On identifie le cas d&apos;usage le plus rentable pour votre entreprise.</p>
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
