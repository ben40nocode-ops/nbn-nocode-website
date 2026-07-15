import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & Automatisation pour Hôtels d'Arcachon",
  description: "Création de site web et automatisation IA pour hôtels d'Arcachon : réservations directes, conciergerie IA, SEO local. Devis gratuit.",
  keywords: ["site web hôtel Arcachon", "création site internet hôtel Arcachon", "automatisation hôtel Arcachon", "réservations directes hôtel Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-hotel-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-hotel-arcachon"
      schemaName="Site Web et Automatisation pour Hôtels d'Arcachon"
      schemaCity="Arcachon"
      schemaDesc="Création de sites web et automatisation IA pour les hôtels d'Arcachon et du Bassin d'Arcachon."
      badge="Site Web & IA — Hôtels Arcachon"
      title="Site web & automatisation"
      titleAccent="pour votre hôtel à Arcachon"
      intro="Arcachon est une destination premium — votre site doit être à la hauteur. On crée des sites hôteliers performants qui génèrent des réservations directes, réduisent votre dépendance à Booking.com et offrent une expérience client irréprochable grâce à un agent IA conciergerie."
      intro2="NBN IA conçoit des sites web et automatisations pour les hôtels d'Arcachon et du Bassin. Devis gratuit sans engagement."
      services={[
        "Site web hôtelier haut de gamme (Next.js, design sur mesure)",
        "Système de réservation directe intégré",
        "Agent IA conciergerie — disponible 24h/24",
        "Connexion channel manager et OTA",
        "SEO local ciblé 'hôtel Arcachon' et requêtes associées",
        "Multilingue (français, anglais, espagnol)",
        "Upsell automatisé (petit-déjeuner, excursions, spa)",
        "Collecte automatique d'avis Google post-séjour",
      ]}
      whyTitle="Pourquoi un site pro pour votre hôtel ?"
      whyItems={[
        "Chaque réservation directe économise 15-20% de commission OTA",
        "Un bon site = meilleure note sur les plateformes de voyage",
        "Agent IA = conciergerie sans recruter",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble l'identité visuelle, les chambres à mettre en valeur et les fonctionnalités. On part de votre ADN." },
        { step: "02", title: "Développement (1-3 semaines)", desc: "Site livré avec réservations directes opérationnelles et agent IA configuré. Points réguliers." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, optimisation SEO complète, monitoring des réservations. Évolutions continues." },
      ]}
      casesTitle="Cas d’usage pour les hôtels d'Arcachon"
      cases={[
        {
          secteur: "Hôtel boutique bord de Bassin",
          probleme: "90% des réservations via Booking.com. Commissions élevées, pas de relation directe avec les clients.",
          solution: "Site premium avec réservation directe + agent IA conciergerie + campagnes email vers les clients passés.",
          gain: "Développer la réservation directe et fidéliser la clientèle par email.",
        },
        {
          secteur: "Hôtel avec spa et restaurant",
          probleme: "Clients qui découvrent le spa et le restaurant après leur arrivée. Pas d'upsell pré-séjour.",
          solution: "Séquence email automatisée pré-séjour avec agent IA qui propose les options (spa, table, excursions) 3 jours avant l'arrivée.",
          gain: "Proposer les services complémentaires au bon moment avant l'arrivée du client.",
        },
        {
          secteur: "Hôtel sans agent disponible la nuit",
          probleme: "Pas de réceptionniste la nuit. Questions des clients sans réponse. Manque de confort perçu.",
          solution: "Agent IA conciergerie qui répond aux questions, gère les demandes de room service et contacte l'astreinte si urgence.",
          gain: "Assurer une réponse rapide aux demandes des clients, y compris la nuit.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site hôtelier avec réservations directes ?", a: "Un site hôtelier complet avec réservations directes démarre à 2 500€ HT. Avec agent IA et multilingue autour de 4 000€ HT. Devis précis après l'appel." },
        { q: "Comment réduire les commissions Booking.com concrètement ?", a: "En ayant un site qui convertit bien + un programme de fidélité simple. On vous aide à construire cette stratégie pas à pas." },
        { q: "L'agent IA peut gérer les demandes de room service ?", a: "Oui. On peut configurer l'agent pour recevoir les demandes et les transmettre à votre équipe via SMS ou notification push." },
        { q: "Vous assurez la maintenance et les mises à jour ?", a: "Oui. Abonnement de maintenance à partir de 159€/mois : monitoring, mises à jour de sécurité, évolutions mineures." },
      ]}
      faqsTitle="Questions fréquentes — site web hôtel Arcachon"
      ctaTitle="Un site qui travaille pour vous"
      ctaDesc="Devis gratuit, sans engagement. À Arcachon ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
