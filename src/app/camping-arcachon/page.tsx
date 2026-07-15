import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Campings — Bassin d'Arcachon",
  description: "Agents IA et automatisation pour campings du Bassin d'Arcachon : réservations, check-in, messages clients, saison optimisée. Audit gratuit.",
  keywords: ["automatisation camping Arcachon", "agent IA camping Bassin Arcachon", "IA gestion camping Arcachon", "automatisation réservations camping Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/camping-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/camping-arcachon"
      schemaName="Automatisation IA pour Campings du Bassin d'Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Lège-Cap-Ferret", "Andernos-les-Bains"]}
      schemaDesc="Agents IA et automatisation pour les campings du Bassin d'Arcachon : réservations, communication clients, check-in et gestion de saison."
      badge="IA & Automatisation — Campings Arcachon"
      title="Automatisation & Agents IA"
      titleAccent="pour les campings du Bassin d'Arcachon"
      intro="Les campings du Bassin d'Arcachon font face à une haute saison intense : réservations en masse, questions clients répétitives, check-in et check-out à gérer avec des équipes réduites. On automatise la communication et la gestion opérationnelle pour que votre équipe se concentre sur l'accueil."
      intro2="NBN IA accompagne les campings du Bassin d'Arcachon, de Lège-Cap-Ferret à La Teste. Audit gratuit sans engagement."
      services={[
        "Agent IA qui répond aux questions clients 24h/24",
        "Automatisation des confirmations de réservation",
        "Messages de bienvenue et instructions d'arrivée",
        "Relances automatiques pour les avis Google",
        "Gestion des demandes de modification ou annulation",
        "Alertes taux d'occupation et gestion des pics",
        "Reporting hebdomadaire réservations et revenus",
        "Fidélisation campeurs réguliers automatisée",
      ]}
      whyTitle="Pourquoi automatiser votre camping ?"
      whyItems={[
        "Saison estivale intense avec peu de personnel disponible",
        "Questions clients répétitives (horaires, équipements, accès)",
        "Réservations de dernière minute à confirmer rapidement",
        "Spécialisé Claude AI — réponses naturelles et précises",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Appel gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On analyse vos flux de réservations, les questions les plus fréquentes de vos campeurs et vos outils existants. On identifie les gains rapides." },
        { step: "02", title: "Déploiement", desc: "Agent IA et automatisations déployés avant la saison. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Suivi de saison", desc: "On monitore et on ajuste en temps réel pendant votre haute saison. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les campings du Bassin"
      cases={[
        {
          secteur: "Camping 3 étoiles — Bassin d'Arcachon",
          probleme: "100+ emails par semaine en juillet-août avec des questions répétitives (animaux acceptés, horaires piscine, wifi). L'équipe réception débordée.",
          solution: "Agent IA entraîné sur le règlement et les FAQ du camping. Répond automatiquement à 80% des questions, transfère les cas complexes à l'équipe.",
          gain: "Répondre automatiquement aux questions courantes pour libérer du temps pour l'accueil sur place.",
        },
        {
          secteur: "Camping avec emplacements premium",
          probleme: "Demandes d'emplacements spécifiques (bord de mer, ombre, grande surface) traitées manuellement. Beaucoup d'aller-retours avec les clients.",
          solution: "Système de questions guidées avec agent IA qui identifie les préférences et propose les emplacements disponibles correspondants.",
          gain: "Orienter chaque visiteur vers l'emplacement adapté grâce à des questions guidées.",
        },
        {
          secteur: "Camping familial — gestion avis",
          probleme: "Peu d'avis Google malgré des campeurs satisfaits. Pas de process de collecte d'avis.",
          solution: "Agent IA qui envoie automatiquement un message de remerciement au départ avec lien vers Google Reviews. Segmentation selon la durée de séjour.",
          gain: "Encourager les avis Google en sollicitant les clients satisfaits au moment du départ.",
        },
      ]}
      faqs={[
        { q: "Ça fonctionne avec notre logiciel de camping existant ?", a: "Dans la plupart des cas, oui. On analyse vos outils lors de l'appel (Booking, Campings Online, logiciel propriétaire) et on conçoit l'intégration adaptée." },
        { q: "Comment l'agent IA apprend les spécificités de notre camping ?", a: "On lui fournit votre règlement intérieur, vos FAQ, vos équipements. Il est opérationnel en 48h et s'améliore au fil des interactions." },
        { q: "Vous intervenez pendant la saison ou seulement avant ?", a: "Les deux. Idéalement on déploie avant la saison, mais on peut aussi intervenir en cours de saison pour soulager votre équipe rapidement." },
        { q: "Est-ce que l'agent peut gérer les annulations Booking ?", a: "Oui, on peut configurer des workflows d'annulation automatisés selon vos conditions. Il peut proposer des reports plutôt que des remboursements." },
      ]}
      faqsTitle="Questions fréquentes — automatisation campings Arcachon"
      ctaTitle="Prêt à aborder la saison sereinement ?"
      ctaDesc="Appel gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Réserver mon appel gratuit (1h)"
    />
  );
}
