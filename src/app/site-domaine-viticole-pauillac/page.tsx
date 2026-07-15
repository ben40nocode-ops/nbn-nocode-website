import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web pour Domaine Viticole à Pauillac",
  description: "Création de site web premium pour châteaux et domaines viticoles de Pauillac. Ventes directes, œnotourisme, SEO. Audit gratuit.",
  keywords: ["site web domaine viticole Pauillac", "création site château Pauillac", "site internet vin Pauillac", "web domaine viticole Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-domaine-viticole-pauillac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-domaine-viticole-pauillac"
      schemaName="Création Site Web pour Domaines Viticoles de Pauillac"
      schemaCity="Pauillac"
      schemaDesc="Création de sites web premium pour châteaux, domaines viticoles et producteurs de vin de Pauillac."
      badge="Site Web — Domaines Viticoles Pauillac"
      title="Site web & automatisation"
      titleAccent="pour votre domaine viticole à Pauillac"
      intro="Un château de Pauillac mérite un site à la hauteur de son terroir : élégant, performant, connecté à vos ventes directes et à votre œnotourisme. On crée des sites web qui reflètent l'identité de votre domaine et génèrent des commandes — pas juste une vitrine statique."
      intro2="NBN IA conçoit des sites web et automatisations pour les domaines viticoles de Pauillac et du Haut-Médoc. Devis gratuit sans engagement."
      services={[
        "Site vitrine haut de gamme (Next.js, design sur mesure)",
        "Boutique en ligne — ventes directes par millésime",
        "Système de réservation visites et dégustations",
        "Connecté à votre agent IA de gestion des commandes",
        "SEO technique et sémantique — appellations ciblées",
        "Multilingue (français, anglais, et autres langues export)",
        "Performance Core Web Vitals optimisée",
        "Blog et actualités du domaine",
      ]}
      whyTitle="Pourquoi un site pro pour votre château ?"
      whyItems={[
        "Vos acheteurs cherchent votre domaine en ligne avant de commander",
        "Un site bien référencé génère des commandes directes sans commission",
        "L'œnotourisme se réserve 80% via internet",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel sur le Médoc",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble l'identité visuelle, les fonctionnalités et le contenu. Vous validez les maquettes avant développement." },
        { step: "02", title: "Développement (1-3 semaines)", desc: "Vibe coding avec Claude Code : site livré 3x plus vite qu'une agence classique. Vous voyez les avancées à chaque étape." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement sur Vercel. Optimisation SEO complète. Suivi des performances et évolutions continues." },
      ]}
      casesTitle="Cas d’usage pour les domaines de Pauillac"
      cases={[
        {
          secteur: "Château avec vente directe",
          probleme: "Site WordPress vieillissant, lent et peu professionnel. Ventes directes anecdotiques malgré une clientèle fidèle.",
          solution: "Refonte Next.js avec boutique intégrée, paiement Stripe, gestion des millésimes et multilingue. SEO ciblé sur les appellations Pauillac.",
          gain: "Développer la vente directe en ligne avec un site rapide et bien référencé.",
        },
        {
          secteur: "Domaine avec œnotourisme",
          probleme: "Réservations de visites gérées par email. Pas de calendrier en ligne, beaucoup d'aller-retours.",
          solution: "Système de réservation intégré au site avec agent IA qui confirme, rappelle et gère les annulations automatiquement.",
          gain: "Confirmer et rappeler chaque réservation de visite pour limiter les absences.",
        },
        {
          secteur: "Château sans présence web",
          probleme: "Pas de site internet. Les clients cherchent le domaine en ligne et trouvent des informations incorrectes sur des plateformes tierces.",
          solution: "Création from scratch d'un site vitrine + boutique en 10 jours. SEO technique complet dès le lancement.",
          gain: "Lancer rapidement un site marchand avec un référencement technique soigné dès le départ.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site vitrine pour un château ?", a: "Un site vitrine professionnel avec boutique démarre à 2 500€ HT. Un site haut de gamme avec multilingue et réservations autour de 4 500€ HT. Devis précis après l'appel gratuit." },
        { q: "Le site peut vendre des vins directement ?", a: "Oui. On intègre une boutique avec paiement sécurisé (Stripe), gestion des millésimes, stocks et livraisons. Commissions nulles — vous gardez 100% de vos marges." },
        { q: "On peut gérer le site nous-mêmes après livraison ?", a: "Oui. On configure un espace d'administration simple. Vous pouvez mettre à jour les millésimes, les textes et les photos en autonomie." },
        { q: "Vous gérez aussi le référencement Google ?", a: "Oui. Le SEO est intégré dès la première ligne de code : balises meta, schema.org, performance, sitemap. On peut aussi gérer une stratégie de contenu mensuelle." },
      ]}
      faqsTitle="Questions fréquentes — site web domaine viticole Pauillac"
      ctaTitle="Un site à la hauteur de votre terroir"
      ctaDesc="Devis gratuit, sans engagement. À Pauillac ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
