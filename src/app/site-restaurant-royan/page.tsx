import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & Automatisation pour Restaurants à Royan",
  description: "Création de site web et automatisation IA pour restaurants de Royan : réservations en ligne, menu digital, agent IA, SEO local Charente-Maritime. Devis gratuit.",
  keywords: ["site web restaurant Royan", "création site internet restaurant Royan", "automatisation restaurant Royan", "réservations en ligne restaurant Charente-Maritime"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-restaurant-royan" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-restaurant-royan"
      schemaName="Site Web et Automatisation pour Restaurants à Royan"
      schemaCity="Royan"
      schemaDesc="Création de sites web et automatisation IA pour les restaurants et établissements de restauration à Royan et en Charente-Maritime."
      badge="Site Web & IA — Restaurants Royan"
      title="Site web & automatisation"
      titleAccent="pour votre restaurant à Royan"
      intro="La restauration à Royan vit au rythme de la saison balnéaire : affluence maximale en juillet-août, gestion difficile avec des équipes réduites. Un site performant avec réservation en ligne et agent IA vous permet de capter les clients en amont et de gérer le flux sans saturer votre équipe."
      intro2="NBN IA accompagne les restaurants de Royan et de la Charente-Maritime. Devis gratuit sans engagement."
      services={[
        "Site web restaurant responsive et rapide",
        "Menu digital mis à jour en autonomie",
        "Réservation en ligne intégrée",
        "Agent IA pour les questions 24h/24",
        "SEO local ciblé 'restaurant Royan' et spécialités",
        "Intégration Google My Business et avis",
        "Gestion de la liste d'attente en haute saison",
        "Campagnes fidélisation entre les saisons",
      ]}
      whyTitle="Pourquoi un site pro pour votre restaurant ?"
      whyItems={[
        "Les touristes cherchent où manger sur Google dès leur arrivée",
        "Un site bien référencé = des couverts sans commission",
        "Haute saison intense — mieux gérer les réservations en amont",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel à Royan",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble l'ambiance, le menu à mettre en valeur et les fonctionnalités. Devis transparent en fin de séance." },
        { step: "02", title: "Développement (1-2 semaines)", desc: "Site livré avant la saison avec réservations et agent IA opérationnels." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, SEO local complet, Google My Business optimisé. Monitoring des réservations." },
      ]}
      casesTitle="Cas d’usage pour les restaurants de Royan"
      cases={[
        {
          secteur: "Restaurant fruits de mer — Royan",
          probleme: "Haute saison surchargée. Réservations par téléphone uniquement. File d'attente incontrôlable en juillet.",
          solution: "Site avec réservation en ligne + gestion de la liste d'attente + agent IA qui répond aux questions de disponibilité.",
          gain: "Orienter les clients vers des créneaux disponibles pour réduire l'attente sur place.",
        },
        {
          secteur: "Brasserie bord de mer",
          probleme: "Clientèle saisonnière difficile à fidéliser. Pas de stratégie pour faire revenir les touristes l'année suivante.",
          solution: "Collecte d'emails via le site. Campagnes automatisées en mars avec offres pré-saison pour les clients de l'été précédent.",
          gain: "Relancer les clients de la saison précédente avec des offres avant la reprise.",
        },
        {
          secteur: "Restaurant gastronomique",
          probleme: "Site statique qui ne valorise pas la qualité de la carte. Pas de référencement sur 'restaurant gastronomique Royan'.",
          solution: "Site premium avec photos de plats professionnelles, menu dynamique, SEO ciblé et avis Google structurés.",
          gain: "Améliorer la visibilité et l'attractivité du restaurant grâce à un site soigné.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site restaurant à Royan ?", a: "Un site vitrine avec menu digital et réservation démarre à 800€ HT. Avec agent IA autour de 1 500€ HT. Devis précis après l'appel." },
        { q: "On peut gérer le menu du jour nous-mêmes ?", a: "Oui. Interface simple, mise à jour en 2 minutes sans aucune compétence technique." },
        { q: "Comment l'agent IA gère les demandes hors horaires ?", a: "Il répond aux questions (horaires, spécialités, allergènes, accès PMR) et peut prendre les demandes de réservation pour validation le lendemain matin." },
        { q: "Vous intervenez aussi entre les saisons ?", a: "Oui. L'abonnement de maintenance couvre les mises à jour et les évolutions. On peut aussi travailler la stratégie SEO et les campagnes fidélisation hors saison." },
      ]}
      faqsTitle="Questions fréquentes — site web restaurant Royan"
      ctaTitle="Un site prêt avant la saison"
      ctaDesc="Devis gratuit, sans engagement. À Royan ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
