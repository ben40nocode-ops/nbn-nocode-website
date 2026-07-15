import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Ostréiculteurs du Bassin",
  description: "Agents IA et automatisation pour producteurs d'huîtres du Bassin d'Arcachon. Commandes, livraisons, facturation B2B. Audit gratuit.",
  keywords: ["automatisation ostréiculture Bassin Arcachon", "agent IA huîtres Bassin", "IA producteur huîtres Arcachon", "automatisation commandes huîtres"],
  alternates: { canonical: "https://www.nbn-ia.fr/huitres-bassin" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/huitres-bassin"
      schemaName="Automatisation IA pour Ostréiculteurs du Bassin d'Arcachon"
      schemaCity={["Arcachon", "Gujan-Mestras", "Lège-Cap-Ferret"]}
      schemaDesc="Agents IA et automatisation pour les producteurs d'huîtres et cabanes ostréicoles du Bassin d'Arcachon."
      badge="IA & Automatisation — Ostréiculture Bassin"
      title="Automatisation & Agents IA"
      titleAccent="pour les producteurs d'huîtres du Bassin"
      intro="Les ostréiculteurs du Bassin d'Arcachon jonglent avec les commandes directes, la vente aux restaurants, les livraisons et la facturation — souvent sans outil adapté. On automatise la gestion opérationnelle pour que vous restiez concentrés sur la production."
      intro2="NBN IA accompagne les cabanes et producteurs d'huîtres de Gujan-Mestras, Lège-Cap-Ferret, La Teste et tout le Bassin. Audit gratuit sans engagement."
      services={[
        "Centralisation des commandes (restaurants, particuliers, marchés)",
        "Facturation automatique et relances",
        "Bons de livraison générés automatiquement",
        "Gestion des disponibilités par calibre",
        "Agent IA pour les demandes email et téléphoniques",
        "Notifications livraison par SMS",
        "Reporting hebdomadaire ventes et production",
        "Campagnes fidélisation clients réguliers",
      ]}
      whyTitle="Pourquoi automatiser votre activité ostréicole ?"
      whyItems={[
        "Commandes reçues à toute heure, tous les jours",
        "Volume élevé en fêtes de fin d'année à gérer sans erreur",
        "Facturation B2B chronophage — idéale à automatiser",
        "Spécialisé Claude AI — traitement précis des commandes",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Appel gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos flux : comment arrivent les commandes, comment vous livrez et facturez. On identifie les gains rapides." },
        { step: "02", title: "Déploiement", desc: "Automatisations et agents IA adaptés à votre production. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance", desc: "On suit et on ajuste selon vos saisons. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les ostréiculteurs du Bassin"
      cases={[
        {
          secteur: "Cabane avec vente directe & restaurants",
          probleme: "Commandes reçues par SMS, WhatsApp et téléphone. Saisie manuelle, oublis en période chargée (Noël, fêtes).",
          solution: "Agent IA qui centralise toutes les commandes, génère les bons de livraison et envoie les factures automatiquement. Alerte si un créneau est surbooké.",
          gain: "Centraliser les commandes de fin d'année et signaler les créneaux surbookés.",
        },
        {
          secteur: "Producteur avec vente en ligne",
          probleme: "Site de vente existant mais pas connecté à la gestion de stock. Ruptures non anticipées, clients déçus.",
          solution: "Connexion site → stock en temps réel. Agent IA qui notifie automatiquement les clients en attente quand le stock est reconstitué.",
          gain: "Notifier automatiquement les clients en attente dès qu'un produit est de retour en stock.",
        },
        {
          secteur: "Groupement de producteurs",
          probleme: "Coordination entre cabanes pour les commandes groupées difficile. Facturation complexe à multi-sources.",
          solution: "Système centralisé avec agent IA qui distribue les commandes selon les capacités de chaque producteur et génère les factures consolidées.",
          gain: "Répartir les commandes entre producteurs et consolider la facturation automatiquement.",
        },
      ]}
      faqs={[
        { q: "C'est adapté à une petite cabane ostréicole ?", a: "Oui. Un producteur qui reçoit 20 commandes par semaine peut déjà gagner 1h par jour avec une automatisation simple à 450€." },
        { q: "Comment ça gère les commandes de dernière minute ?", a: "L'agent IA traite les commandes en temps réel, 24h/24. Même une commande à 22h pour le lendemain est prise en compte immédiatement." },
        { q: "Vous intervenez sur tout le Bassin ?", a: "Oui — Gujan-Mestras, La Teste, Lège-Cap-Ferret, Andernos, Arcachon. En présentiel ou à distance." },
        { q: "On peut commencer par juste la facturation automatique ?", a: "Absolument. On démarre par le point le plus douloureux pour vous, et on étend ensuite." },
      ]}
      faqsTitle="Questions fréquentes — automatisation ostréiculture Bassin d'Arcachon"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Appel gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Réserver mon appel gratuit (1h)"
    />
  );
}
