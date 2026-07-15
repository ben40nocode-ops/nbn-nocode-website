import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "App Web & Automatisation pour Campings de Lacanau",
  description: "Web app sur mesure et automatisation IA pour campings de Lacanau : réservations, calendrier, agent IA 24/7, gestion de saison. Devis gratuit.",
  keywords: ["application camping Lacanau", "web app camping Lacanau", "automatisation camping Lacanau", "réservation en ligne camping Lacanau"],
  alternates: { canonical: "https://www.nbn-ia.fr/app-camping-lacanau" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/app-camping-lacanau"
      schemaName="Application Web et Automatisation pour Campings de Lacanau"
      schemaCity="Lacanau"
      schemaDesc="Développement d'applications web sur mesure et automatisation IA pour les campings de Lacanau et du Médoc atlantique."
      badge="Web App & IA — Campings Lacanau"
      title="Application web & automatisation"
      titleAccent="pour les campings de Lacanau"
      intro="Les campings de Lacanau ont besoin d'outils qui tiennent pendant la haute saison : réservations en temps réel, agent IA disponible 24h/24, gestion des disponibilités automatisée. On développe des web apps sur mesure connectées à vos process — pas des solutions génériques qui ne s'adaptent pas à votre réalité."
      intro2="NBN IA développe des applications web et automatisations pour les campings de Lacanau et du Médoc océan. Devis gratuit sans engagement."
      services={[
        "Application de réservation en ligne sur mesure",
        "Calendrier de disponibilités en temps réel",
        "Agent IA qui répond aux questions campeurs 24h/24",
        "Paiement en ligne sécurisé (Stripe)",
        "Gestion des types d'emplacements et tarifs",
        "Notifications automatiques (confirmation, rappel, départ)",
        "Dashboard propriétaire avec reporting",
        "Connexion aux OTA (Booking, Airbnb, etc.)",
      ]}
      whyTitle="Pourquoi une app sur mesure à Lacanau ?"
      whyItems={[
        "Haute saison intensive — les outils génériques ne tiennent pas",
        "Emplacements surf/famille avec tarification complexe",
        "Clientèle internationale à gérer en plusieurs langues",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel à Lacanau",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit & architecture (1h)", desc: "On analyse vos process actuels, vos outils existants et vos points de friction. On définit l'architecture et on vous donne un devis précis." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "Vibe coding avec Claude Code : app livrée avant la saison. Points hebdomadaires, vous voyez l'app évoluer." },
        { step: "03", title: "Mise en prod & saison", desc: "Déploiement avant juin. Support pendant la haute saison. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les campings de Lacanau"
      cases={[
        {
          secteur: "Camping surf — réservations en ligne",
          probleme: "Réservations uniquement par téléphone. Pertes en dehors des heures d'ouverture. Dépendance à Booking.com (15-20% de commission).",
          solution: "App de réservation directe avec agent IA disponible 24h/24 pour les questions hors horaires. Synchronisation Booking pour éviter les doublons.",
          gain: "Capter les réservations en direct et réduire la dépendance aux commissions des plateformes.",
        },
        {
          secteur: "Camping avec clientèle internationale",
          probleme: "Questions en espagnol, anglais, néerlandais sans réponse rapide. Taux d'abandon élevé sur les demandes étrangères.",
          solution: "Agent IA multilingue intégré au site et à l'app. Détecte la langue automatiquement, répond en 30 secondes.",
          gain: "Répondre aux clients étrangers dans leur langue, sans attente.",
        },
        {
          secteur: "Camping avec gestion complexe",
          probleme: "Emplacements nus, bungalows, mobil-homes avec tarifications différentes selon la saison. Erreurs fréquentes.",
          solution: "App sur mesure avec moteur de tarification configurable. Mise à jour des prix en 2 clics avant chaque saison.",
          gain: "Mettre à jour les tarifs sans risque d'erreur, en quelques clics.",
        },
      ]}
      faqs={[
        { q: "L'app peut remplacer notre logiciel de camping actuel ?", a: "Selon votre logiciel, on peut soit le remplacer, soit s'y connecter. On analyse la situation lors de l'appel gratuit." },
        { q: "Combien coûte le développement ?", a: "Une app de réservation complète avec agent IA démarre à 2 500€ HT. Devis précis après l'appel d'1h." },
        { q: "L'app est prête pour la saison si on démarre maintenant ?", a: "Oui. Avec un démarrage avant mai, l'app est opérationnelle pour juin. Le développement prend 2 à 4 semaines." },
        { q: "Vous assurez le support pendant la haute saison ?", a: "Oui. Abonnement de maintenance mensuelle à partir de 89€/mois. On est joignables si besoin." },
      ]}
      faqsTitle="Questions fréquentes — application web campings Lacanau"
      ctaTitle="Une app prête avant la saison"
      ctaDesc="Devis gratuit, sans engagement. À Lacanau ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
