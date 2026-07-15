import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "App Web & IA pour Restaurants à Bordeaux",
  description: "Web app sur mesure et automatisation IA pour restaurants bordelais : commandes, réservations, stocks, agent IA client. Devis gratuit.",
  keywords: ["application restaurant Bordeaux", "web app restaurant Bordeaux", "automatisation restaurant Bordeaux", "gestion commandes restaurant Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/app-restaurant-bordeaux" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/app-restaurant-bordeaux"
      schemaName="Application Web et Automatisation pour Restaurants à Bordeaux"
      schemaCity="Bordeaux"
      schemaDesc="Développement d'applications web sur mesure et automatisation IA pour les restaurants de Bordeaux."
      badge="Web App & IA — Restaurants Bordeaux"
      title="Application web & automatisation"
      titleAccent="pour les restaurants de Bordeaux"
      intro="Un restaurant à Bordeaux qui gère ses réservations par téléphone, ses commandes click & collect par email et ses avis manuellement perd plusieurs heures par semaine sur de l'administratif. On développe des applications sur mesure qui centralisent tout — pour que votre équipe se concentre sur la cuisine et le service."
      intro2="NBN IA développe des applications web et automatisations pour les restaurants de Bordeaux et de la Gironde. Devis gratuit sans engagement."
      services={[
        "Système de réservation en ligne intégré",
        "Commandes click & collect avec paiement en ligne",
        "Agent IA qui répond aux demandes 24h/24",
        "Gestion des listes d'attente",
        "Menu digital mis à jour en autonomie",
        "Collecte automatique d'avis Google",
        "Dashboard réservations et revenus",
        "Campagnes fidélisation clients automatisées",
      ]}
      whyTitle="Pourquoi une app sur mesure pour votre restaurant ?"
      whyItems={[
        "Réservations reçues à toute heure — réponse attendue en moins de 5 min",
        "Click & collect en forte croissance à Bordeaux",
        "Agent IA = gain de temps sans recruter",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel à Bordeaux",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit & architecture (1h)", desc: "On analyse vos flux de commandes, vos outils actuels et vos points de friction. Devis précis en fin de séance." },
        { step: "02", title: "Développement (1-3 semaines)", desc: "App livrée rapidement avec vibe coding. Points hebdomadaires, vous validez chaque fonctionnalité." },
        { step: "03", title: "Mise en prod & suivi", desc: "Déploiement, formation en 1h. Monitoring et évolutions continues." },
      ]}
      casesTitle="Cas d’usage pour les restaurants bordelais"
      cases={[
        {
          secteur: "Bistrot — réservations et click & collect",
          probleme: "Réservations par téléphone, click & collect par Instagram DM. Doublons, oublis, stress en service.",
          solution: "App centralisée : réservations en ligne + commandes click & collect + agent IA qui gère les questions hors horaires.",
          gain: "Centraliser les commandes à emporter pour ne plus en manquer aucune.",
        },
        {
          secteur: "Restaurant gastronomique bordelais",
          probleme: "TheFork comme seul canal de réservation (30% de commission). Pas de relation directe avec les clients.",
          solution: "App de réservation directe + séquence email de fidélisation + agent IA qui collecte les avis post-repas.",
          gain: "Développer la réservation directe et fidéliser la clientèle sur la durée.",
        },
        {
          secteur: "Dark kitchen / Livraison",
          probleme: "Commandes dispersées sur Uber Eats, Deliveroo, site propre. Gestion chaotique, erreurs fréquentes.",
          solution: "Agrégateur de commandes centralisé avec agent IA qui notifie la cuisine et génère les bons de préparation automatiquement.",
          gain: "Regrouper les commandes de toutes les plateformes pour ne plus en perdre.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour une app restaurant complète ?", a: "Une app avec réservation + click & collect + agent IA démarre à 2 000€ HT. Devis précis après l'appel gratuit." },
        { q: "Ça s'intègre avec notre caisse ?", a: "Dans la plupart des cas, oui. On analyse votre caisse lors de l'appel (Lightspeed, Zelty, etc.) et on conçoit l'intégration." },
        { q: "L'agent IA peut prendre des réservations directement ?", a: "Oui. Il recueille les informations (date, heure, couverts, intolérances) et les valide selon votre disponibilité en temps réel." },
        { q: "Vous assurez la maintenance ?", a: "Oui. Abonnement à partir de 89€/mois : monitoring, mises à jour, évolutions mineures." },
      ]}
      faqsTitle="Questions fréquentes — application web restaurants Bordeaux"
      ctaTitle="Une app qui travaille pendant le service"
      ctaDesc="Devis gratuit, sans engagement. À Bordeaux ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
