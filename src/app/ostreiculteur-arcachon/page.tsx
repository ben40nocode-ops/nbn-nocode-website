import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Ostréiculteurs d'Arcachon",
  description: "Agents IA et automatisation pour ostréiculteurs d'Arcachon : commandes, livraisons, facturation B2B restaurants. Audit gratuit.",
  keywords: ["automatisation ostréiculteur Arcachon", "agent IA huîtres Arcachon", "IA producteur huîtres Arcachon", "automatisation vente huîtres Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/ostreiculteur-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/ostreiculteur-arcachon"
      schemaName="Automatisation IA pour Ostréiculteurs d'Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Andernos-les-Bains"]}
      schemaDesc="Agents IA et automatisation pour les ostréiculteurs et cabanes du Bassin d'Arcachon."
      badge="IA & Automatisation — Ostréiculture Arcachon"
      title="Automatisation & Agents IA"
      titleAccent="pour les ostréiculteurs d'Arcachon"
      intro="Les producteurs d'huîtres d'Arcachon gèrent des commandes directes, des ventes aux restaurants locaux et des livraisons — souvent sans outil adapté à leur activité. On conçoit des automatisations précises pour gérer l'opérationnel et vous laisser vous concentrer sur la production."
      intro2="NBN IA accompagne les cabanes et producteurs d'huîtres d'Arcachon, La Teste, Andernos et tout le Bassin. Audit gratuit sans engagement."
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
        "Facturation B2B restaurants chronophage",
        "Spécialisé Claude AI — traitement précis des commandes",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Appel gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos flux : comment arrivent les commandes, comment vous livrez et facturez. On identifie les gains rapides." },
        { step: "02", title: "Déploiement", desc: "Automatisations et agents IA adaptés à votre production. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance", desc: "On suit et on ajuste selon vos saisons. Résiliable à tout moment." },
      ]}
      casesTitle="Cas d’usage pour les ostréiculteurs d'Arcachon"
      cases={[
        {
          secteur: "Cabane avec vente directe & restaurants",
          probleme: "Commandes reçues par SMS, WhatsApp et téléphone. Saisie manuelle, oublis en période chargée (Noël, été).",
          solution: "Agent IA qui centralise toutes les commandes, génère les bons de livraison et envoie les factures automatiquement. Alerte si un calibre est en rupture.",
          gain: "Centraliser les commandes estivales et signaler les ruptures de stock à temps.",
        },
        {
          secteur: "Producteur avec vente en ligne",
          probleme: "Site de vente existant mais pas connecté à la gestion de stock. Ruptures non anticipées, clients déçus.",
          solution: "Connexion site → stock en temps réel. Agent IA qui notifie automatiquement les clients en attente quand le stock est reconstitué.",
          gain: "Notifier automatiquement les clients en attente dès qu'un produit est de retour en stock.",
        },
        {
          secteur: "Producteur avec abonnement huîtres",
          probleme: "Abonnés hebdomadaires gérés manuellement. Oublis, erreurs de livraison, gestion des pauses difficile.",
          solution: "Système d'abonnement automatisé avec agent IA qui gère les pauses, les modifications et les rappels de livraison.",
          gain: "Permettre aux abonnés de gérer leurs pauses de livraison en toute autonomie.",
        },
      ]}
      faqs={[
        { q: "C'est adapté à une petite cabane ?", a: "Oui. Un producteur qui reçoit 20 commandes par semaine peut déjà gagner 1h par jour avec une automatisation simple à 450€." },
        { q: "Comment ça gère les commandes de dernière minute ?", a: "L'agent IA traite les commandes en temps réel, 24h/24. Même une commande à 22h pour le lendemain est prise en compte immédiatement." },
        { q: "Vous intervenez sur tout le Bassin ?", a: "Oui — Arcachon, La Teste, Andernos, Gujan-Mestras, Lège-Cap-Ferret. En présentiel ou à distance." },
        { q: "On peut commencer par juste la facturation automatique ?", a: "Absolument. On démarre par le point le plus douloureux pour vous, et on étend ensuite." },
      ]}
      faqsTitle="Questions fréquentes — automatisation ostréiculteurs Arcachon"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Appel gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Réserver mon appel gratuit (1h)"
    />
  );
}
