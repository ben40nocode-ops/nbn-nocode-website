import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & IA pour Restaurants à Arcachon",
  description: "Création de site web et automatisation IA pour restaurants d'Arcachon : réservations en ligne, agent IA, menu digital, SEO local. Devis gratuit.",
  keywords: ["site web restaurant Arcachon", "création site internet restaurant Arcachon", "automatisation restaurant Arcachon", "réservations en ligne restaurant Bassin Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/restaurant-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/restaurant-arcachon"
      schemaName="Site Web et Automatisation pour Restaurants à Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Gujan-Mestras"]}
      schemaDesc="Création de sites web et automatisation IA pour les restaurants d'Arcachon et du Bassin d'Arcachon."
      badge="Site Web & IA — Restaurants Arcachon"
      title="Site web & automatisation"
      titleAccent="pour votre restaurant à Arcachon"
      intro="La restauration à Arcachon est intense : haute saison surchargée, touristes qui cherchent où manger sur leur téléphone, équipes sous tension. Un site performant avec réservation en ligne et agent IA vous permet de capter les clients en amont et de traverser la saison sans saturer votre équipe."
      intro2="NBN IA accompagne les restaurants d'Arcachon et du Bassin. Devis gratuit sans engagement."
      services={[
        "Site web restaurant responsive et ultra-rapide",
        "Menu digital mis à jour en autonomie",
        "Réservation en ligne intégrée (sans commission)",
        "Agent IA qui répond aux questions 24h/24",
        "SEO local ciblé 'restaurant Arcachon' et spécialités locales",
        "Gestion de la liste d'attente en haute saison",
        "Collecte automatique d'avis Google",
        "Campagnes fidélisation hors saison",
      ]}
      whyTitle="Pourquoi un site pro à Arcachon ?"
      whyItems={[
        "Les touristes cherchent sur Google depuis la plage",
        "Haute saison = pics de demandes impossibles à gérer en manuel",
        "Un bon site réduit votre dépendance aux plateformes",
        "Spécialisé vibe coding avec Claude Code — livraison rapide",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit l'ambiance, le menu à mettre en valeur et les fonctionnalités. Devis transparent en fin de séance." },
        { step: "02", title: "Développement (1-2 semaines)", desc: "Site livré avant la saison avec réservations et agent IA opérationnels." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, SEO local complet, Google My Business optimisé. Monitoring des réservations." },
      ]}
      casesTitle="Cas concrets pour les restaurants d'Arcachon"
      cases={[
        {
          secteur: "Restaurant fruits de mer — bord de Bassin",
          probleme: "Haute saison surchargée. Réservations uniquement par téléphone. File d'attente incontrôlable en juillet-août.",
          solution: "Site avec réservation en ligne + gestion de la liste d'attente + agent IA qui répond aux questions hors horaires.",
          gain: "File d'attente réduite de 60%. Clients mieux orientés sur des créneaux disponibles.",
        },
        {
          secteur: "Brasserie du Bassin",
          probleme: "Clientèle saisonnière difficile à fidéliser. Pas de stratégie pour faire revenir les touristes ou les habitants hors saison.",
          solution: "Collecte d'emails via le site. Campagnes email automatisées en septembre et mars avec offres de rentrée et pré-saison.",
          gain: "+30% de clients réguliers identifiés. Taux d'occupation hors saison en hausse.",
        },
        {
          secteur: "Restaurant sans site internet",
          probleme: "Pas de site internet. Infos incorrectes sur Google (horaires, fermeture). Avis non gérés. Pertes de clients.",
          solution: "Création from scratch d'un site vitrine + réservation + menu digital + SEO local. Agent IA pour les questions fréquentes.",
          gain: "Premier page Google sur 'restaurant Arcachon huîtres' en 45 jours.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site restaurant à Arcachon ?", a: "Un site vitrine avec menu digital et réservation démarre à 800€ HT. Avec agent IA autour de 1 500€ HT. Devis précis après l'audit gratuit." },
        { q: "On peut mettre à jour le menu du jour nous-mêmes ?", a: "Oui. Interface simple, mise à jour en 2 minutes sans aucune compétence technique." },
        { q: "L'agent IA peut gérer les demandes en haute saison ?", a: "Oui. Il répond aux questions (horaires, disponibilités, spécialités, allergènes) instantanément. Aucune limite de volume." },
        { q: "Vous travaillez aussi avec les restaurants de Gujan-Mestras et La Teste ?", a: "Oui — tout le Bassin d'Arcachon : Arcachon, La Teste, Gujan-Mestras, Andernos, Lège-Cap-Ferret. En présentiel ou à distance." },
      ]}
      faqsTitle="Questions fréquentes — site web restaurant Arcachon"
      ctaTitle="Un site prêt avant la saison"
      ctaDesc="Devis gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
