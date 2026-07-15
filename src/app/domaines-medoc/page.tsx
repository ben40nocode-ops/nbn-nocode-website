import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Domaines Viticoles du Médoc",
  description: "Agents IA et automatisation pour domaines viticoles du Médoc : commandes cavistes, facturation B2B, gestion des visites et œnotourisme. Audit gratuit.",
  keywords: ["automatisation domaine viticole Médoc", "agent IA vigne Médoc", "IA chai Médoc", "automatisation commandes vin Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/domaines-medoc" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/domaines-medoc"
      schemaName="Automatisation IA pour Domaines Viticoles du Médoc"
      schemaCity={["Pauillac", "Saint-Estèphe", "Margaux", "Lesparre-Médoc"]}
      schemaDesc="Agents IA et automatisation pour les domaines viticoles, châteaux et caves du Médoc."
      badge="IA & Automatisation — Viticulture Médoc"
      title="Automatisation & Agents IA"
      titleAccent="pour les domaines viticoles du Médoc"
      intro="Les domaines viticoles du Médoc jonglent avec les commandes cavistes, la facturation B2B, la gestion des visites et l'œnotourisme — souvent sans outil adapté. On conçoit des systèmes IA qui automatisent la gestion opérationnelle pour que vous restiez concentrés sur votre production et votre terroir."
      intro2="NBN IA accompagne les châteaux et domaines de Pauillac, Saint-Estèphe, Margaux, Lesparre et tout le Médoc. Audit gratuit sans engagement."
      services={[
        "Centralisation des commandes (cavistes, CHR, particuliers)",
        "Facturation automatique et relances impayés",
        "Gestion des disponibilités par millésime et référence",
        "Agent IA pour les demandes email et téléphoniques",
        "Réservations visites chai et œnotourisme automatisées",
        "Confirmations de commande et bons de livraison",
        "Reporting hebdomadaire ventes par canal",
        "Campagnes fidélisation acheteurs réguliers",
      ]}
      whyTitle="Pourquoi automatiser votre domaine viticole ?"
      whyItems={[
        "Commandes cavistes et CHR volumineuses en fin d'année",
        "Millésimes multiples — gestion des stocks complexe",
        "Facturation B2B chronophage, idéale à automatiser",
        "Spécialisé Claude AI — traitement précis des commandes",
        "Disponible en présentiel sur le Médoc",
        "Appel gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos flux : comment arrivent les commandes, comment vous gérez les millésimes, les visites et la facturation. On identifie les gains rapides." },
        { step: "02", title: "Déploiement", desc: "Automatisations et agents IA adaptés à votre domaine. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance", desc: "On suit et on ajuste selon vos saisons et vendanges. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les domaines du Médoc"
      cases={[
        {
          secteur: "Château avec vente directe & export",
          probleme: "Commandes reçues par email et téléphone de cavistes français et étrangers. Saisie manuelle, erreurs de facturation, suivi des paiements chaotique.",
          solution: "Agent IA qui centralise toutes les commandes, génère les factures par client et millésime, et relance automatiquement les impayés selon un calendrier défini.",
          gain: "Centraliser la facturation et relancer automatiquement les impayés selon un calendrier défini.",
        },
        {
          secteur: "Domaine avec œnotourisme",
          probleme: "Réservations de visites et dégustations reçues par email et sur plusieurs plateformes. Doubles réservations, oublis de confirmation.",
          solution: "Système centralisé avec agent IA qui confirme les réservations, envoie les rappels automatiques et gère les annulations avec proposition de report.",
          gain: "Confirmer chaque réservation de visite et proposer un report en cas d'annulation.",
        },
        {
          secteur: "Cave coopérative / Groupement",
          probleme: "Coordination entre vignerons adhérents pour les commandes groupées difficile. Reporting ventes manuel et chronophage.",
          solution: "Tableau de bord centralisé avec agent IA qui consolide les ventes, distribue les informations aux adhérents et génère les rapports mensuels automatiquement.",
          gain: "Consolider les ventes des adhérents et générer les rapports automatiquement.",
        },
      ]}
      faqs={[
        { q: "C'est adapté à un petit domaine familial ?", a: "Oui. Un domaine qui reçoit 30 commandes par mois peut déjà gagner 2h par semaine avec une automatisation simple à 450€." },
        { q: "Comment ça gère les différents millésimes et références ?", a: "L'agent IA peut gérer autant de références que vous avez. Il connaît vos stocks par millésime et alerte automatiquement si une commande dépasse les disponibilités." },
        { q: "Vous intervenez sur tout le Médoc ?", a: "Oui — Pauillac, Saint-Estèphe, Margaux, Moulis, Listrac, Lesparre et toute l'appellation. En présentiel ou à distance." },
        { q: "Est-ce que ça s'intègre avec notre logiciel de cave existant ?", a: "Dans la majorité des cas, oui. On analyse vos outils lors de l'appel et on conçoit l'intégration adaptée." },
      ]}
      faqsTitle="Questions fréquentes — automatisation domaines viticoles Médoc"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Appel gratuit, sans engagement. Sur le Médoc ou en visio."
      ctaButton="Réserver mon appel gratuit (1h)"
    />
  );
}
