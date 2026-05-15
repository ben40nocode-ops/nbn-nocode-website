import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Développement SaaS & Agents IA en Gironde — NBN IA",
  description: "Développement de SaaS et applications IA en Gironde. Architecture multi-tenant, agents IA natifs, vibe coding avec Claude Code. Devis gratuit.",
  keywords: ["développement SaaS Gironde", "SaaS Bordeaux", "application IA Gironde", "vibe coding SaaS Bordeaux", "web app multi-tenant Gironde"],
  alternates: { canonical: "https://www.nbn-ia.fr/saas-gironde" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/saas-gironde"
      schemaName="Développement SaaS et Agents IA en Gironde"
      schemaCity={["Bordeaux", "Mérignac", "Pessac", "Libourne"]}
      schemaDesc="Développement de SaaS et applications web avec agents IA pour les entreprises de Gironde."
      badge="SaaS & IA — Gironde"
      title="Développement SaaS & agents IA"
      titleAccent="pour les entreprises de Gironde"
      intro="Vous avez une idée de SaaS ou un outil interne à construire en Gironde ? On développe des applications web multi-tenant avec agents IA natifs — pas des chatbots collés après, mais de l'IA intégrée dans la logique métier. MVP en 3 à 6 semaines grâce au vibe coding avec Claude Code."
      intro2="NBN IA accompagne les entrepreneurs, ETI et PME de Gironde dans le développement de leurs SaaS et outils métier. Devis gratuit sans engagement."
      services={[
        "Architecture SaaS multi-tenant scalable",
        "Authentification et gestion des rôles (Clerk)",
        "Base de données PostgreSQL avec Row Level Security",
        "Agents IA natifs intégrés à votre logique métier",
        "Facturation et abonnements (Stripe Billing)",
        "Dashboard analytics et reporting",
        "APIs REST et webhooks",
        "Déploiement cloud (Vercel, edge computing)",
      ]}
      whyTitle="Pourquoi choisir NBN IA pour votre SaaS ?"
      whyItems={[
        "Vibe coding avec Claude Code — 3x plus rapide que le dev classique",
        "IA native — pas un plugin, une fonctionnalité centrale",
        "Stack moderne et scalable : Next.js, Supabase, Stripe",
        "Code propre et maintenable — pas du jetable",
        "Disponible en présentiel en Gironde",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Architecture & devis (1-2h)", desc: "On comprend votre marché, vos users et votre business model. On définit l'architecture technique et on vous donne un devis précis." },
        { step: "02", title: "Développement (3-8 semaines)", desc: "Vibe coding avec Claude Code : MVP livré rapidement, itérations hebdomadaires. Vous voyez l'app évoluer en temps réel." },
        { step: "03", title: "Mise en prod & croissance", desc: "Déploiement, monitoring, support. On scale l'infrastructure avec votre croissance. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets de SaaS développés en Gironde"
      cases={[
        {
          secteur: "SaaS de gestion pour agences de voyage",
          probleme: "Back-office artisanal (Google Sheets, Zapier, Apps Script). Erreurs, pertes de données, impossible à scaler.",
          solution: "Application web complète avec authentification, gestion des dossiers, agents Claude pour la ventilation comptable automatique et connexion OneDrive.",
          gain: "3 outils remplacés par 1. 4h gagnées par semaine par conseiller. ROI en 3 mois.",
        },
        {
          secteur: "Plateforme B2B — secteur industriel",
          probleme: "Processus de commande complexe entre fabricant, distributeurs et clients finaux. Géré manuellement par email.",
          solution: "Plateforme multi-tenant avec portails séparés par rôle, agents IA qui qualifient les commandes et génèrent les devis automatiquement.",
          gain: "Cycle de commande réduit de 5 jours à 1 jour. +40% de commandes traitées.",
        },
        {
          secteur: "Outil interne — cabinet de conseil",
          probleme: "Connaissance métier dispersée dans des emails et documents. Onboarding des nouveaux consultants long et coûteux.",
          solution: "Base de connaissances avec agent IA qui répond aux questions internes, propose des ressources et aide à rédiger les livrables.",
          gain: "Onboarding réduit de 3 semaines à 1 semaine. Rétention de connaissances améliorée.",
        },
      ]}
      faqs={[
        { q: "Quelle est la différence entre un SaaS et une web app ?", a: "Un SaaS est une web app commercialisée en abonnement avec plusieurs clients (multi-tenant). On développe les deux — parfois un outil interne évolue en SaaS commercialisable." },
        { q: "Combien coûte le développement d'un SaaS en Gironde ?", a: "Un SaaS MVP (authentification + 4-6 fonctionnalités + billing) démarre à 4 000€ HT. Un SaaS avancé avec agents IA et multi-tenant complet autour de 8 000€ HT." },
        { q: "On peut ajouter des fonctionnalités après la livraison ?", a: "Oui, c'est prévu dans l'architecture. Le code est modulaire pour permettre des évolutions rapides sans réécriture." },
        { q: "Vous assurez la maintenance et l'hébergement ?", a: "Oui. Abonnement de maintenance à partir de 159€/mois. L'hébergement Vercel est géré par nous — vous ne vous occupez de rien." },
      ]}
      faqsTitle="Questions fréquentes — développement SaaS en Gironde"
      ctaTitle="Votre SaaS de l'idée à la production"
      ctaDesc="Audit gratuit de 1h. On valide l'architecture et on vous donne un devis précis. Zéro engagement."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
