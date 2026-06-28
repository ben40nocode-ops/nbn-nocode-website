import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA — Filière Poisson à Arcachon | NBN IA",
  description: "Agents IA et automatisation pour poissonniers, grossistes et pêcheurs d'Arcachon : commandes B2B, facturation, gestion des stocks. Audit gratuit.",
  keywords: ["automatisation poissonnerie Arcachon", "agent IA pêche Arcachon", "IA filière poisson Arcachon", "automatisation marée Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/poisson-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/poisson-arcachon"
      schemaName="Automatisation IA pour la Filière Poisson à Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Gujan-Mestras"]}
      schemaDesc="Agents IA et automatisation pour pêcheurs, poissonniers et grossistes de la filière poisson à Arcachon et sur le Bassin."
      badge="IA & Automatisation — Filière Poisson Arcachon"
      title="Automatisation & Agents IA"
      titleAccent="pour la filière poisson à Arcachon"
      intro="Pêcheurs, poissonniers, grossistes marée : la gestion des commandes B2B restaurants, la facturation et la logistique prennent un temps considérable sur des tâches répétitives. On conçoit des systèmes IA qui automatisent ce qui peut l'être — pour que vous vous concentriez sur votre métier."
      intro2="NBN IA accompagne les professionnels de la pêche et de la marée à Arcachon et sur le Bassin. Audit gratuit sans engagement."
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
      whyTitle="Pourquoi automatiser dans la filière poisson ?"
      whyItems={[
        "Commandes souvent reçues à des horaires décalés",
        "Volume de B2B restaurants élevé en haute saison",
        "Zéro erreur de facturation grâce à l'automatisation",
        "Spécialisé Claude AI — traitement rapide des demandes",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On cartographie vos process : comment arrivent les commandes, comment vous facturez, ce qui prend du temps." },
        { step: "02", title: "Setup sur mesure", desc: "On déploie les automatisations adaptées à votre activité. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Maintenance continue", desc: "On suit, on ajuste, on fait évoluer selon vos saisons. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour la filière poisson Arcachon"
      cases={[
        {
          secteur: "Poissonnier / Grossiste marée",
          probleme: "Commandes restaurants reçues par SMS et email entre 5h et 7h. Saisie manuelle, erreurs de livraison, facturation en retard.",
          solution: "Agent IA qui centralise les commandes, génère les bons de livraison, envoie les factures et relance les impayés.",
          gain: "1h gagnée chaque matin. 0 erreur de livraison sur 2 mois.",
        },
        {
          secteur: "Pêcheur avec vente directe",
          probleme: "Clients réguliers contactés manuellement pour les disponibilités. Pas de liste organisée, oublis fréquents.",
          solution: "Système de liste clients avec agent IA qui envoie automatiquement les disponibilités du jour par SMS selon les préférences de chaque client.",
          gain: "40% de ventes directes en plus. 30 min gagnées par jour.",
        },
        {
          secteur: "Stand marché avec commandes en ligne",
          probleme: "Commandes click & collect reçues par plusieurs canaux. Doublons, oublis, gestion du stock épuisé non automatisée.",
          solution: "Système centralisé avec agent IA qui consolide les commandes, met à jour les stocks en temps réel et notifie les clients.",
          gain: "Zéro commande oubliée. Stock épuisé signalé automatiquement.",
        },
      ]}
      faqs={[
        { q: "Mon activité est très saisonnière — comment ça s'adapte ?", a: "On conçoit les systèmes pour qu'ils s'adaptent à votre charge. En haute saison les automatisations tournent à plein régime, en basse saison elles gèrent le relationnel." },
        { q: "Est-ce que ça marche pour une petite structure ?", a: "Oui. Un poissonnier avec 10 clients restaurants réguliers peut bénéficier d'une automatisation simple à 450€ qui lui fait gagner 1h par jour." },
        { q: "Vous intervenez sur tout le Bassin ?", a: "Oui — Arcachon, La Teste, Gujan-Mestras, Andernos et tout le Bassin. En présentiel ou à distance." },
        { q: "On n'est pas du tout tech — c'est un problème ?", a: "Pas du tout. On gère la technique intégralement. Vous décrivez vos process, on s'occupe de tout." },
      ]}
      faqsTitle="Questions fréquentes — automatisation filière poisson Arcachon"
      ctaTitle="1 heure pour cartographier vos process"
      ctaDesc="Audit gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
