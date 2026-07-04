import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Web App & Agents IA pour Startups à Bordeaux",
  description: "Développement web app et agents IA pour startups bordelaises. MVP en 2-3 semaines, vibe coding avec Claude Code. Devis gratuit.",
  keywords: ["startup Bordeaux", "web app startup Bordeaux", "développement MVP Bordeaux", "agents IA startup Bordeaux", "vibe coding startup Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/startup-bordeaux" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/startup-bordeaux"
      schemaName="Web App et Agents IA pour Startups à Bordeaux"
      schemaCity="Bordeaux"
      schemaDesc="Développement de web apps et agents IA pour les startups et scale-ups de Bordeaux et de la Gironde."
      badge="Web App & IA — Startups Bordeaux"
      title="Web app & agents IA"
      titleAccent="pour les startups de Bordeaux"
      intro="Une startup a besoin d'un MVP rapidement pour valider son marché — pas d'attendre 6 mois qu'une agence livre un prototype. On développe des web apps complètes avec agents IA intégrés en 2 à 3 semaines grâce au vibe coding avec Claude Code. Scalable, maintenable, prêt pour la croissance."
      intro2="NBN IA accompagne les startups et scale-ups de Bordeaux et de la Gironde. Audit gratuit sans engagement."
      services={[
        "MVP web app livré en 2-3 semaines",
        "Authentification sécurisée (Clerk, 2FA, OAuth)",
        "Base de données PostgreSQL (Supabase)",
        "Agents IA natifs intégrés à votre product",
        "Paiements et abonnements (Stripe)",
        "APIs REST et intégrations tierces",
        "Dashboard temps réel et analytics",
        "Infrastructure scalable (Vercel, edge computing)",
      ]}
      whyTitle="Pourquoi choisir NBN IA pour votre startup ?"
      whyItems={[
        "MVP livré en 2-3 semaines — validez votre marché rapidement",
        "Vibe coding avec Claude Code — 3x plus rapide que le développement classique",
        "Agents IA natifs — pas un chatbot générique collé après",
        "Stack moderne et scalable : Next.js, Supabase, Stripe",
        "Disponible en présentiel à Bordeaux",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Architecture & devis (1-2h)", desc: "On comprend votre métier, vos utilisateurs et vos workflows. On définit le scope du MVP et on vous donne un devis précis avec délai." },
        { step: "02", title: "Développement (2-8 semaines)", desc: "Vibe coding avec Claude Code : vous voyez l'app évoluer en temps réel. Points hebdomadaires, itérations rapides." },
        { step: "03", title: "Mise en prod & scale", desc: "Déploiement sur Vercel. Monitoring, maintenance, nouvelles fonctionnalités. On grandit avec vous." },
      ]}
      casesTitle="Cas concrets pour les startups bordelaises"
      cases={[
        {
          secteur: "SaaS B2B — workflow automation",
          probleme: "Fondateurs avec une idée solide mais pas de CTO. Besoin d'un MVP en 3 semaines pour un démo investisseurs.",
          solution: "Web app Next.js + Supabase avec agents Claude pour l'automatisation des workflows. Authentification, dashboard, intégrations Slack et Zapier.",
          gain: "MVP livré en 17 jours. Démo réussie. 3 premiers clients payants en 30 jours.",
        },
        {
          secteur: "Marketplace — secteur RH",
          probleme: "Pas de développeur disponible. Budget startup limité. Besoin d'une plateforme fonctionnelle rapidement.",
          solution: "Marketplace avec profils, matching IA, messagerie intégrée et paiements. Livraison 4 semaines.",
          gain: "Budget 60% inférieur à une agence classique. MVP validé en 6 semaines avec les premiers utilisateurs.",
        },
        {
          secteur: "Scale-up — automatisation interne",
          probleme: "Croissance rapide mais processes internes manuels. L'équipe passe trop de temps sur des tâches répétitives à faible valeur.",
          solution: "Outil interne sur mesure avec agents IA qui automatisent les rapports, la qualification des leads et le support L1.",
          gain: "4h gagnées par semaine par personne. ROI atteint en 2 mois.",
        },
      ]}
      faqs={[
        { q: "Combien coûte un MVP pour une startup ?", a: "Un MVP simple (authentification + 3-5 fonctionnalités) démarre à 2 500€ HT. Un MVP avancé avec agents IA et marketplace autour de 6 000€ HT. Devis précis après l'audit." },
        { q: "Qu'est-ce que le vibe coding exactement ?", a: "On pilote Claude Code (IA d'Anthropic) pour générer et affiner le code plutôt que de l'écrire ligne par ligne. Résultat : un MVP en 2-3 semaines, code propre et maintenable." },
        { q: "On peut reprendre le code après livraison ?", a: "Oui. Le code vous appartient, il est propre et documenté. Un dev peut le reprendre sans difficulté. On peut aussi assurer la maintenance." },
        { q: "Vous accompagnez aussi les startups en phase de levée ?", a: "Oui. On peut créer votre démo technique pour les investisseurs et vous aider à structurer votre product roadmap." },
      ]}
      faqsTitle="Questions fréquentes — web app et agents IA startups Bordeaux"
      ctaTitle="Votre MVP en 2-3 semaines"
      ctaDesc="Audit gratuit de 1h. On définit ensemble le scope et le délai. Zéro engagement."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
