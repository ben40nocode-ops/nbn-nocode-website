import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Châteaux & Domaines de Pauillac — NBN IA",
  description: "Agents IA et automatisation pour les châteaux et producteurs de Pauillac : commandes, facturation B2B cavistes, gestion millésimes. Audit gratuit.",
  keywords: ["automatisation château Pauillac", "agent IA vin Pauillac", "IA domaine viticole Pauillac", "automatisation vente vin Pauillac"],
  alternates: { canonical: "https://www.nbn-ia.fr/vins-pauillac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/vins-pauillac"
      schemaName="Automatisation IA pour Châteaux et Domaines de Pauillac"
      schemaCity="Pauillac"
      schemaDesc="Agents IA et automatisation pour les châteaux, domaines viticoles et producteurs de vin de Pauillac."
      badge="IA & Automatisation — Viticulture Pauillac"
      title="Automatisation & Agents IA"
      titleAccent="pour les châteaux de Pauillac"
      intro="Les domaines de Pauillac gèrent des commandes complexes : cavistes internationaux, primeurs, ventes directes, export. La gestion manuelle de ces flux prend un temps considérable. On automatise la partie opérationnelle pour que vous vous concentriez sur la qualité de votre vin."
      intro2="NBN IA accompagne les producteurs, négociants et châteaux de Pauillac et du Haut-Médoc. Audit gratuit sans engagement."
      services={[
        "Centralisation des commandes cavistes et négociants",
        "Facturation automatique par client, millésime, appellation",
        "Gestion des allocations et priorités clients",
        "Agent IA pour les demandes email et courrier",
        "Suivi des expéditions et notifications livraison",
        "Relances impayés automatisées",
        "Reporting ventes hebdomadaire et annuel",
        "Gestion des listes d'attente par millésime",
      ]}
      whyTitle="Pourquoi automatiser à Pauillac ?"
      whyItems={[
        "Commandes primeurs massives à gérer sans erreur",
        "Clients internationaux avec exigences de facturation spécifiques",
        "Allocations limitées — gestion fine des priorités",
        "Spécialisé Claude AI — traitement précis en français et anglais",
        "Disponible en présentiel sur le Médoc",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos flux de commandes, vos types de clients et votre processus de facturation. On identifie les points de friction." },
        { step: "02", title: "Déploiement", desc: "Agent IA et automatisations adaptés à votre appellation et vos clients. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance", desc: "On suit et on ajuste selon les campagnes primeurs et millésimes. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour les producteurs de Pauillac"
      cases={[
        {
          secteur: "Château — ventes directes et export",
          probleme: "Commandes reçues par email en français, anglais, parfois japonais. Facturation multi-devises, suivi des allocations par marché difficile.",
          solution: "Agent IA multilingue qui traite les commandes, génère les factures dans la bonne devise et langue, et met à jour les allocations en temps réel.",
          gain: "4h gagnées par semaine. 0 erreur d'allocation sur 2 campagnes primeurs.",
        },
        {
          secteur: "Domaine avec mailing list clients",
          probleme: "Annonces de nouveaux millésimes envoyées manuellement à 500+ contacts. Pas de segmentation, pas de suivi des réponses.",
          solution: "Système d'envoi automatisé segmenté par profil client, avec agent IA qui centralise les réponses et commandes reçues.",
          gain: "+60% de taux d'ouverture. 3 jours gagnés sur chaque lancement de millésime.",
        },
        {
          secteur: "Négociant en vins Pauillac",
          probleme: "Suivi de 200+ références chez plusieurs châteaux. Stock et prix mis à jour manuellement chaque semaine.",
          solution: "Dashboard centralisé avec mises à jour automatiques des stocks et prix. Agent IA qui répond aux demandes de disponibilités 24h/24.",
          gain: "Catalogue toujours à jour. 5h gagnées par semaine sur la gestion stock.",
        },
      ]}
      faqs={[
        { q: "Ça fonctionne pour les primeurs ?", a: "Oui. On peut configurer l'agent pour gérer spécifiquement les campagnes primeurs : commandes en avant-première, confirmations, facturation différée à la livraison." },
        { q: "Est-ce que ça gère les clients à l'export ?", a: "Absolument. L'agent IA peut traiter les commandes en plusieurs langues et adapter la facturation selon le pays (TVA, incoterms)." },
        { q: "On a déjà un logiciel de gestion — ça s'intègre ?", a: "Dans la plupart des cas, oui. On analyse vos outils lors de l'audit et on conçoit l'intégration la plus fluide possible." },
        { q: "Quel budget prévoir pour une première automatisation ?", a: "Une première automatisation (centralisation des commandes + facturation automatique) démarre à 450€. On démarre par le point le plus douloureux." },
      ]}
      faqsTitle="Questions fréquentes — automatisation châteaux Pauillac"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Audit gratuit, sans engagement. À Pauillac ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
