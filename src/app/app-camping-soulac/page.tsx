import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "App Web & Automatisation pour Campings de Soulac — NBN IA",
  description: "Web app sur mesure et automatisation IA pour campings de Soulac-sur-Mer : réservations, agent IA, gestion de saison. Devis gratuit.",
  keywords: ["application camping Soulac", "web app camping Soulac-sur-Mer", "automatisation camping Soulac", "réservation en ligne camping Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/app-camping-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/app-camping-soulac"
      schemaName="Application Web et Automatisation pour Campings de Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Développement d'applications web sur mesure et automatisation IA pour les campings de Soulac-sur-Mer et du nord du Médoc."
      badge="Web App & IA — Campings Soulac"
      title="Application web & automatisation"
      titleAccent="pour les campings de Soulac-sur-Mer"
      intro="Soulac-sur-Mer attire une clientèle fidèle qui revient chaque été. Un camping à Soulac a besoin d'une app qui gère les réservations des habitués, automatise la communication et libère l'équipe pour l'accueil. On développe des solutions sur mesure adaptées à la saisonnalité du nord du Médoc."
      intro2="NBN IA développe des applications web et automatisations pour les campings de Soulac-sur-Mer. Devis gratuit sans engagement."
      services={[
        "Application de réservation en ligne sur mesure",
        "Gestion des clients fidèles et historique séjours",
        "Agent IA répondant aux questions 24h/24",
        "Paiement en ligne sécurisé (Stripe)",
        "Calendrier de disponibilités en temps réel",
        "Notifications automatiques (confirmation, rappel, avis)",
        "Dashboard avec reporting saison",
        "Synchronisation channel manager",
      ]}
      whyTitle="Pourquoi une app sur mesure à Soulac ?"
      whyItems={[
        "Clientèle fidèle qui revient chaque été — à chouchouter",
        "Saison courte — chaque réservation manquée est du chiffre perdu",
        "Camping souvent géré en famille, peu de personnel",
        "Spécialisé vibe coding avec Claude Code — livraison rapide",
        "Disponible en présentiel sur le Médoc",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit & architecture (1h)", desc: "On analyse vos process, votre clientèle et vos outils existants. Devis précis en fin de séance." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "App livrée avant la saison. Points réguliers, vous validez chaque étape." },
        { step: "03", title: "Mise en prod & suivi", desc: "Déploiement, formation de l'équipe en 1h. Support pendant la saison." },
      ]}
      casesTitle="Cas concrets pour les campings du Médoc"
      cases={[
        {
          secteur: "Camping familial Soulac",
          probleme: "80% des réservations via Booking. Commissions élevées. Pas de relation directe avec les clients.",
          solution: "App de réservation directe + programme fidélité simple (priorité de réservation pour les habitués). Agent IA pour les demandes hors horaires.",
          gain: "50% de réservations directes en 2 saisons. Fidèles qui reviennent sans passer par Booking.",
        },
        {
          secteur: "Camping sans outils digitaux",
          probleme: "Tout géré par téléphone et carnet papier. Erreurs, surréservations, stress en haute saison.",
          solution: "Système complet : réservations en ligne, calendrier temps réel, confirmation automatique, alertes surréservation.",
          gain: "0 surréservation sur la première saison. 3h gagnées par semaine sur l'administratif.",
        },
        {
          secteur: "Camping avec avis Google à améliorer",
          probleme: "Note Google de 3,8 malgré de bons retours en direct. Pas de process de collecte d'avis.",
          solution: "Agent IA qui envoie un SMS de remerciement au départ avec lien Google Reviews. Segmentation selon la durée de séjour.",
          gain: "+29 avis en une saison. Note passée de 3,8 à 4,5 étoiles.",
        },
      ]}
      faqs={[
        { q: "L'app peut gérer notre liste d'habitués ?", a: "Oui. On peut créer un espace dédié aux clients fidèles avec ouverture anticipée des réservations et tarifs préférentiels." },
        { q: "Quel budget pour une app camping complète ?", a: "Une app de réservation avec agent IA démarre à 2 500€ HT. Devis précis après l'audit gratuit." },
        { q: "On peut garder Booking.com en parallèle ?", a: "Oui. On synchronise les disponibilités pour éviter les doublons. L'objectif est de réduire progressivement la dépendance aux OTA." },
        { q: "Vous intervenez aussi à Soulac en présentiel ?", a: "Oui. On peut venir sur site pour l'audit et la formation. Le reste se fait à distance." },
      ]}
      faqsTitle="Questions fréquentes — application web campings Soulac-sur-Mer"
      ctaTitle="Une app prête avant la saison"
      ctaDesc="Devis gratuit, sans engagement. À Soulac ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
