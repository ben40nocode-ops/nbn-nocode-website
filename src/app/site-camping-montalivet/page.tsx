import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & IA pour Campings de Montalivet",
  description: "Création de site web et automatisation IA pour campings de Montalivet et Vendays-Montalivet. Réservations en ligne, agent IA. Devis gratuit.",
  keywords: ["site web camping Montalivet", "création site internet camping Vendays-Montalivet", "automatisation camping Montalivet", "réservations en ligne camping Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-camping-montalivet" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-camping-montalivet"
      schemaName="Site Web et Automatisation pour Campings de Montalivet"
      schemaCity="Vendays-Montalivet"
      schemaDesc="Création de sites web et automatisation IA pour les campings de Montalivet, Vendays-Montalivet et le Médoc atlantique."
      badge="Site Web & IA — Campings Montalivet"
      title="Site web & automatisation"
      titleAccent="pour votre camping à Montalivet"
      intro="Montalivet est une destination camping emblématique du Médoc. Un camping ici mérite un site qui valorise l'environnement naturel, capte les réservations en direct et réduit la dépendance aux plateformes. On crée des sites performants avec réservations en ligne et agents IA pour traverser la saison sereinement."
      intro2="NBN IA conçoit des sites web et automatisations pour les campings de Montalivet, Vendays-Montalivet et le Médoc atlantique. Devis gratuit sans engagement."
      services={[
        "Site web responsive avec mise en valeur du cadre naturel",
        "Système de réservation en ligne intégré",
        "Agent IA répondant aux questions 24h/24",
        "Gestion des disponibilités et du calendrier en temps réel",
        "Paiement en ligne sécurisé (Stripe)",
        "SEO local ciblé Montalivet, Médoc, naturisme",
        "Connexion channel manager (Booking, Airbnb, etc.)",
        "Automatisation des confirmations, rappels et avis",
      ]}
      whyTitle="Pourquoi un site pro à Montalivet ?"
      whyItems={[
        "Forte demande naturisme — clientèle spécifique à bien cibler",
        "Réservations directes = économie sur les commissions OTA",
        "Clientèle internationale (allemande, néerlandaise, belge)",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel sur le Médoc",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit les fonctionnalités, le ton et les visuels. Pour Montalivet, on sait valoriser le cadre naturel et la clientèle spécifique." },
        { step: "02", title: "Développement (1-2 semaines)", desc: "Site livré avant la saison avec réservations en ligne opérationnelles. Points réguliers." },
        { step: "03", title: "Mise en ligne & suivi", desc: "Déploiement, SEO complet, monitoring des réservations. Évolutions continues." },
      ]}
      casesTitle="Cas d’usage pour les campings du Médoc"
      cases={[
        {
          secteur: "Camping naturiste — Montalivet",
          probleme: "Site non adapté à la clientèle naturiste. Mauvais référencement sur les requêtes spécifiques. Forte dépendance à Naturisme.com.",
          solution: "Site refait avec SEO ciblé (naturisme Médoc, camping naturiste Gironde), galerie adaptée et système de réservation directe.",
          gain: "Capter davantage de réservations en direct grâce à un référencement ciblé.",
        },
        {
          secteur: "Camping familial Montalivet",
          probleme: "Clientèle européenne (néerlandais, belges, allemands) avec questions en langue étrangère sans réponse rapide.",
          solution: "Agent IA multilingue intégré au site. Répond en néerlandais, allemand, français, anglais instantanément.",
          gain: "Répondre instantanément aux clients étrangers dans leur propre langue.",
        },
        {
          secteur: "Camping avec chalets et mobile-homes",
          probleme: "Tarification complexe (haute/moyenne/basse saison, durée minimum, options). Erreurs de tarification fréquentes.",
          solution: "Système de réservation avec calcul automatique selon les paramètres. Agent IA qui explique les tarifs aux clients.",
          gain: "Calculer les tarifs automatiquement pour limiter le risque d'erreur de saisie.",
        },
      ]}
      faqs={[
        { q: "Le site peut gérer un camping naturiste spécifiquement ?", a: "Oui. On adapte le contenu, les visuels et le SEO à votre positionnement. Discrétion et respect des usages de la communauté naturiste garantis." },
        { q: "Vous gérez aussi le référencement sur les requêtes naturisme ?", a: "Oui. On cible les requêtes spécifiques (camping naturiste Médoc, naturisme Gironde, etc.) avec une stratégie SEO dédiée." },
        { q: "Quel budget pour un site camping complet ?", a: "Un site avec réservation en ligne démarre à 1 500€ HT. Avec agent IA multilingue autour de 2 500€ HT. Devis précis après l'appel." },
        { q: "On peut garder notre système de réservation actuel ?", a: "On analyse votre situation lors de l'appel. Dans certains cas, on peut intégrer votre outil existant au nouveau site." },
      ]}
      faqsTitle="Questions fréquentes — site web camping Montalivet"
      ctaTitle="Un site qui remplit votre camping"
      ctaDesc="Devis gratuit, sans engagement. À Montalivet ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
