import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA — Pêcheurs & Poissonniers à Royan | NBN IA",
  description: "Agents IA et automatisation pour la filière pêche à Royan : commandes, livraisons, facturation B2B restaurants. Audit gratuit.",
  keywords: ["automatisation pêche Royan", "agent IA poissonnerie Royan", "IA filière pêche Charente-Maritime", "automatisation criée Royan"],
  alternates: { canonical: "https://www.nbn-ia.fr/peche-royan" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/peche-royan"
      schemaName="Automatisation IA pour la Filière Pêche à Royan"
      schemaCity="Royan"
      schemaDesc="Agents IA et automatisation pour pêcheurs, poissonniers et grossistes de la filière pêche à Royan et en Charente-Maritime."
      badge="IA & Automatisation — Filière Pêche Royan"
      title="Automatisation & Agents IA"
      titleAccent="pour la filière pêche à Royan"
      intro="Pêcheurs, poissonniers, grossistes marée : la gestion des commandes B2B restaurants, la facturation et la logistique prennent un temps considérable sur des tâches répétitives. On conçoit des systèmes IA qui automatisent ce qui peut l'être — pour que vous vous concentriez sur votre métier."
      intro2="NBN IA accompagne les professionnels de la pêche et de la marée à Royan et en Charente-Maritime. Audit gratuit sans engagement."
      services={[
        "Centralisation des commandes restaurants et CHR",
        "Facturation automatique et relances impayés",
        "Confirmations de livraison par SMS/email",
        "Gestion des disponibilités produits (stocks variables)",
        "Agents IA pour répondre aux demandes clients",
        "Bons de livraison générés automatiquement",
        "Alertes et notifications équipe",
        "Reporting hebdomadaire ventes et marges",
      ]}
      whyTitle="Pourquoi automatiser dans la filière pêche ?"
      whyItems={[
        "Commandes souvent reçues à des horaires décalés (madrugada)",
        "Volume de B2B restaurants élevé en haute saison",
        "Zéro erreur de facturation grâce à l'automatisation",
        "Spécialisé Claude AI — traitement rapide des demandes",
        "Disponible en présentiel à Royan",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos process : comment arrivent les commandes, comment vous facturez, ce qui prend du temps." },
        { step: "02", title: "Setup sur mesure", desc: "On déploie les automatisations adaptées à votre activité. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance continue", desc: "On suit, on ajuste, on fait évoluer selon vos saisons. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour la filière pêche"
      cases={[
        {
          secteur: "Poissonnerie / Grossiste marée",
          probleme: "Commandes restaurants reçues par SMS et email entre 5h et 7h. Saisie manuelle, erreurs de livraison, facturation en retard.",
          solution: "Agent IA qui centralise les commandes (SMS, email, WhatsApp), génère les bons de livraison, envoie les factures et relance les impayés.",
          gain: "1h gagnée chaque matin. 0 erreur de livraison sur 2 mois.",
        },
        {
          secteur: "Pêcheur avec vente directe",
          probleme: "Clients réguliers contactés manuellement pour les disponibilités. Pas de liste organisée, oublis fréquents.",
          solution: "Système de liste clients avec agent IA qui envoie automatiquement les disponibilités du jour par SMS selon les préférences de chaque client.",
          gain: "40% de ventes directes en plus. 30 min gagnées par jour.",
        },
        {
          secteur: "Association de pêcheurs / Criée locale",
          probleme: "Communication entre pêcheurs, acheteurs et restaurateurs peu structurée. Informations dispersées.",
          solution: "Plateforme centralisée avec notifications automatiques des arrivages, gestion des lots et facturation groupée.",
          gain: "Meilleure valorisation des arrivages. Moins d'invendus.",
        },
      ]}
      faqs={[
        { q: "Mon activité est très saisonnière — comment ça s'adapte ?", a: "On conçoit les systèmes pour qu'ils s'adaptent à votre charge. En haute saison les automatisations tournent à plein régime, en basse saison elles gèrent le relationnel et la fidélisation." },
        { q: "Est-ce que ça marche pour une petite structure ?", a: "Oui. Un pêcheur avec 10 clients restaurants réguliers peut bénéficier d'une automatisation simple à 450€ qui lui fait gagner 1h par jour." },
        { q: "Vous intervenez à Royan et alentours ?", a: "Oui — Royan, Saint-Georges-de-Didonne, Meschers, La Tremblade et tout le littoral charentais." },
        { q: "On n'est pas du tout tech — c'est un problème ?", a: "Pas du tout. On gère la technique intégralement. Vous décrivez vos process, on s'occupe de tout." },
      ]}
      faqsTitle="Questions fréquentes — automatisation filière pêche Royan"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Audit gratuit, sans engagement. En présentiel à Royan ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
