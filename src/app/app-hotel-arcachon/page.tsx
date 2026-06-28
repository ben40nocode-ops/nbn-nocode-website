import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "App Web & Automatisation pour Hôtels d'Arcachon — NBN IA",
  description: "Web app sur mesure et automatisation IA pour hôtels d'Arcachon : réservations directes, conciergerie IA, gestion opérationnelle. Devis gratuit.",
  keywords: ["application hôtel Arcachon", "web app hôtel Arcachon", "automatisation hôtel Arcachon", "réservation directe hôtel Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/app-hotel-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/app-hotel-arcachon"
      schemaName="Application Web et Automatisation pour Hôtels d'Arcachon"
      schemaCity="Arcachon"
      schemaDesc="Développement d'applications web sur mesure et automatisation IA pour les hôtels d'Arcachon et du Bassin."
      badge="Web App & IA — Hôtels Arcachon"
      title="Application web & automatisation"
      titleAccent="pour les hôtels d'Arcachon"
      intro="Un hôtel à Arcachon qui tourne encore sur Booking.com comme canal principal laisse 15 à 20% de commission par réservation sur la table. On développe des applications qui permettent les réservations directes, automatisent la conciergerie et gèrent l'opérationnel — pour que chaque chambre soit optimisée."
      intro2="NBN IA développe des applications web et automatisations pour les hôtels d'Arcachon et du Bassin. Devis gratuit sans engagement."
      services={[
        "App de réservation directe (zéro commission)",
        "Agent IA conciergerie disponible 24h/24",
        "Gestion des chambres et disponibilités en temps réel",
        "Upsell automatisé (petit-déjeuner, options, surclassement)",
        "Intégration channel manager",
        "Collecte automatique d'avis Google post-séjour",
        "Dashboard revenus et occupation",
        "Campagnes fidélisation automatisées",
      ]}
      whyTitle="Pourquoi une app sur mesure pour votre hôtel ?"
      whyItems={[
        "Chaque réservation directe = 15-20% de marge récupérée",
        "Agent IA = conciergerie sans recruter de nuit",
        "Upsell automatisé = revenus annexes sans effort",
        "Spécialisé vibe coding avec Claude Code — livraison rapide",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit & architecture (1h)", desc: "On analyse votre mix de réservations, vos process et vos outils. On définit ce qui génère le plus de valeur rapidement." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "App livrée avec réservation directe et agent IA. Vibe coding = 3x plus rapide qu'une agence classique." },
        { step: "03", title: "Mise en prod & optimisation", desc: "Déploiement, monitoring des réservations, ajustements. On scale avec votre croissance." },
      ]}
      casesTitle="Cas concrets pour les hôtels d'Arcachon"
      cases={[
        {
          secteur: "Hôtel boutique — Arcachon",
          probleme: "90% des réservations via Booking.com. Pas de relation directe avec les clients. Impossibilité de faire de l'upsell.",
          solution: "App de réservation directe + agent IA qui propose le petit-déjeuner et les excursions 3 jours avant l'arrivée.",
          gain: "60% de réservations directes en 6 mois. +25% de revenus annexes. 7 000€ de commissions économisées/an.",
        },
        {
          secteur: "Hôtel sans réceptionniste la nuit",
          probleme: "Clients qui arrivent tard sans réponse aux questions (parking, accès, wifi). Mauvaises notes sur la réactivité.",
          solution: "Agent IA conciergerie qui répond 24h/24, gère le check-in tardif et contacte l'astreinte si urgence.",
          gain: "Note Booking passée de 8,0 à 9,2. Commentaires positifs sur la disponibilité.",
        },
        {
          secteur: "Hôtel — fidélisation basse saison",
          probleme: "Taux d'occupation en octobre-mars trop faible. Les clients de l'été ne reviennent pas.",
          solution: "Campagnes email automatisées vers les clients précédents avec offres basse saison. Agent IA qui gère les demandes entrantes.",
          gain: "+22% de taux d'occupation en basse saison.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour une app hôtelière avec réservations directes ?", a: "Une app complète avec réservation directe et agent IA démarre à 3 000€ HT. Devis précis après l'audit gratuit." },
        { q: "L'app s'intègre avec notre PMS existant ?", a: "Dans la plupart des cas, oui. On analyse votre PMS lors de l'audit et on conçoit l'intégration adaptée." },
        { q: "Comment réduire concrètement les commissions Booking ?", a: "En ayant un canal direct qui convertit bien + en envoyant des campagnes aux clients passés. On vous aide à construire cette stratégie pas à pas." },
        { q: "Vous assurez la maintenance ?", a: "Oui. Abonnement à partir de 159€/mois : monitoring, mises à jour, évolutions mineures." },
      ]}
      faqsTitle="Questions fréquentes — application web hôtels Arcachon"
      ctaTitle="Moins de commissions, plus de marges"
      ctaDesc="Devis gratuit, sans engagement. À Arcachon ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
