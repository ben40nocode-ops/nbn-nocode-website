import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & IA pour Campings de Soulac-sur-Mer",
  description: "Création de site web et automatisation IA pour campings de Soulac-sur-Mer : réservations en ligne, agent IA, gestion de saison. Devis gratuit.",
  keywords: ["site web camping Soulac", "création site internet camping Soulac-sur-Mer", "automatisation camping Soulac", "réservations en ligne camping Soulac"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-camping-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-camping-soulac"
      schemaName="Site Web et Automatisation pour Campings de Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Création de sites web et automatisation IA pour les campings de Soulac-sur-Mer et du nord du Médoc."
      badge="Site Web & IA — Campings Soulac"
      title="Site web & automatisation"
      titleAccent="pour votre camping à Soulac-sur-Mer"
      intro="Un camping à Soulac-sur-Mer a besoin d'un site qui convertit les visiteurs en réservations — pas juste une page d'informations. On crée des sites web performants avec réservations en ligne et agents IA intégrés, pour que votre camping tourne en autonomie même en pleine saison."
      intro2="NBN IA conçoit des sites web et automatisations pour les campings de Soulac-sur-Mer et du Médoc atlantique. Devis gratuit sans engagement."
      services={[
        "Site web responsive avec photos et vidéos de qualité",
        "Système de réservation en ligne intégré",
        "Agent IA qui répond aux questions 24h/24",
        "Paiement en ligne sécurisé (Stripe)",
        "Gestion du calendrier et des disponibilités",
        "SEO local ciblé camping Soulac et Médoc",
        "Connexion aux OTA (Booking, Airbnb, etc.)",
        "Automatisation des confirmations et rappels",
      ]}
      whyTitle="Pourquoi un site pro pour votre camping ?"
      whyItems={[
        "80% des vacanciers réservent en ligne avant d'appeler",
        "Un bon site réduit les commissions OTA",
        "Agent IA = réception virtuelle disponible 24h/24",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel sur le Médoc",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble les fonctionnalités, le design et les photos à mettre en valeur. Vous validez avant développement." },
        { step: "02", title: "Développement (1-2 semaines)", desc: "Site livré avant la saison avec réservations en ligne opérationnelles. Points réguliers pendant le développement." },
        { step: "03", title: "Mise en ligne & suivi", desc: "Déploiement, SEO technique complet. On monitore les réservations et on ajuste pendant la saison." },
      ]}
      casesTitle="Cas concrets pour les campings du Médoc"
      cases={[
        {
          secteur: "Camping sans site internet",
          probleme: "Réservations uniquement par téléphone. Pertes de réservations en dehors des heures d'ouverture. Forte dépendance à Booking.com.",
          solution: "Création d'un site avec réservation en ligne + agent IA qui répond aux questions hors horaires. Réduction progressive de la dépendance aux OTA.",
          gain: "40% de réservations directes dès la première saison. Économie de 3 000€ de commissions.",
        },
        {
          secteur: "Camping avec site vieillissant",
          probleme: "Site WordPress lent, non mobile-friendly, sans réservation en ligne. Mauvaise image malgré des installations de qualité.",
          solution: "Refonte complète Next.js avec galerie photos professionnelle, réservation en ligne et SEO optimisé.",
          gain: "Score Lighthouse 95. +60% de réservations directes. Note Google passée de 3,9 à 4,6.",
        },
        {
          secteur: "Camping avec agent IA",
          probleme: "Réception fermée de 20h à 8h. Questions sur les disponibilités, équipements et accès sans réponse rapide.",
          solution: "Agent IA intégré au site qui répond aux questions, confirme les disponibilités et prend les demandes de réservation hors horaires.",
          gain: "30% de conversions en plus sur les demandes hors horaires.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site camping avec réservations ?", a: "Un site complet avec réservation en ligne démarre à 1 500€ HT. Avec agent IA intégré autour de 2 500€ HT. Devis précis après l'appel gratuit." },
        { q: "On peut garder Booking.com en parallèle ?", a: "Oui. On peut synchroniser les disponibilités avec les OTA via un channel manager pour éviter les doublons." },
        { q: "Le site peut gérer les locations de mobil-homes et d'emplacements nus ?", a: "Oui. On peut configurer autant de types d'hébergement et de tarifications que nécessaire." },
        { q: "Vous assurez la maintenance après livraison ?", a: "Oui. Abonnement de maintenance à partir de 89€/mois : mises à jour, corrections, évolutions mineures." },
      ]}
      faqsTitle="Questions fréquentes — site web camping Soulac-sur-Mer"
      ctaTitle="Un site qui remplit votre camping"
      ctaDesc="Devis gratuit, sans engagement. À Soulac ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
