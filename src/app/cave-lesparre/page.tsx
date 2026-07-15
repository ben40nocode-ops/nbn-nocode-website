import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Caves & Domaines — Lesparre",
  description: "Agents IA et automatisation pour caves, domaines viticoles et producteurs de Lesparre-Médoc. Commandes, facturation, œnotourisme. Audit gratuit.",
  keywords: ["automatisation cave Lesparre", "agent IA vin Lesparre-Médoc", "IA domaine viticole Lesparre", "automatisation vente vin Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/cave-lesparre" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/cave-lesparre"
      schemaName="Automatisation IA pour Caves et Domaines de Lesparre-Médoc"
      schemaCity="Lesparre-Médoc"
      schemaDesc="Agents IA et automatisation pour caves, domaines viticoles et producteurs de vin de Lesparre-Médoc et du nord du Médoc."
      badge="IA & Automatisation — Caves & Vins Lesparre"
      title="Automatisation & Agents IA"
      titleAccent="pour les caves de Lesparre-Médoc"
      intro="Les caves et domaines de Lesparre-Médoc font face aux mêmes défis que les grands châteaux — commandes à gérer, facturation B2B, relations cavistes — avec des équipes souvent plus réduites. On conçoit des automatisations adaptées à votre taille pour récupérer du temps sur les tâches répétitives."
      intro2="NBN IA accompagne les caves coopératives, domaines indépendants et négociants du nord du Médoc. Audit gratuit sans engagement."
      services={[
        "Centralisation des commandes (cavistes, CHR, vente directe)",
        "Facturation automatique et relances",
        "Gestion des stocks par référence et millésime",
        "Agent IA pour demandes clients et dégustations",
        "Réservations œnotourisme automatisées",
        "Notifications et confirmations de livraison",
        "Reporting mensuel ventes et stocks",
        "Fidélisation clients réguliers automatisée",
      ]}
      whyTitle="Pourquoi automatiser votre cave à Lesparre ?"
      whyItems={[
        "Gestion manuelle chronophage avec peu de personnel",
        "Commandes de fin d'année à traiter sans erreur",
        "Facturation B2B idéale à automatiser",
        "Spécialisé Claude AI — adapté aux structures à taille humaine",
        "Disponible en présentiel sur le Médoc",
        "Appel gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On comprend vos flux de commandes, votre organisation et vos outils existants. On identifie ce qui peut être automatisé rapidement." },
        { step: "02", title: "Déploiement", desc: "On déploie les automatisations adaptées à votre structure. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance", desc: "On suit et on ajuste. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les caves de Lesparre"
      cases={[
        {
          secteur: "Cave indépendante avec vente directe",
          probleme: "Commandes reçues par téléphone et email. Pas de suivi structuré, facturation manuelle en fin de semaine.",
          solution: "Agent IA qui centralise les commandes, génère les factures automatiquement et envoie les bons de livraison au transporteur.",
          gain: "Générer les factures et les bons de livraison directement depuis les commandes.",
        },
        {
          secteur: "Cave coopérative Lesparre",
          probleme: "Adhérents qui demandent leur solde et leurs ventes par téléphone. L'équipe passe trop de temps à répondre à des questions répétitives.",
          solution: "Espace adhérent en ligne + agent IA qui répond automatiquement aux questions fréquentes (solde, millésimes disponibles, planning).",
          gain: "Donner aux adhérents un accès autonome aux informations les plus demandées.",
        },
        {
          secteur: "Domaine avec œnotourisme",
          probleme: "Visites et ateliers de dégustation réservés par email. Oublis de confirmation, no-shows fréquents.",
          solution: "Système de réservation automatisé avec rappels par SMS et email 48h avant la visite.",
          gain: "Réduire les absences aux visites grâce à des rappels automatiques avant la venue.",
        },
      ]}
      faqs={[
        { q: "C'est adapté à une petite structure avec 2-3 personnes ?", a: "Oui, c'est même là qu'on apporte le plus de valeur. Avec peu de personnel, chaque heure gagnée sur les tâches administratives est précieuse." },
        { q: "On n'a pas de logiciel de gestion — c'est un problème ?", a: "Non. On peut partir de zéro ou intégrer avec vos outils existants (tableur, email, etc.). On conçoit la solution adaptée à votre réalité." },
        { q: "Vous intervenez à Lesparre et alentours ?", a: "Oui — Lesparre-Médoc, Saint-Vivien, Pauillac, Saint-Estèphe et tout le nord du Médoc. En présentiel ou à distance." },
        { q: "Quel est le délai de mise en place ?", a: "Une première automatisation simple (commandes + facturation) est déployée en 48h à 1 semaine après l'appel." },
      ]}
      faqsTitle="Questions fréquentes — automatisation caves Lesparre-Médoc"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Appel gratuit, sans engagement. À Lesparre ou en visio."
      ctaButton="Réserver mon appel gratuit (1h)"
    />
  );
}
