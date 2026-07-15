import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Lesparre-Médoc",
  description: "Automatisation et agents IA à Lesparre-Médoc : devis, relances, commandes de vin, facturation automatisés pour artisans, caves et commerces. Compatible Microsoft 365. Appel gratuit 1h.",
  keywords: ["automatisation Lesparre", "agent IA Lesparre-Médoc", "automatisation cave Médoc", "automatisation artisan Médoc", "chatbot IA Lesparre"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-lesparre" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/automatisation-lesparre"
      schemaName="Automatisation & agents IA à Lesparre-Médoc"
      schemaCity="Lesparre-Médoc"
      schemaDesc="Automatisation et agents IA pour les artisans, caves, domaines et commerces de Lesparre-Médoc."
      badge="Automatisation & IA — Lesparre"
      title="Automatisation & agents IA"
      titleAccent="à Lesparre-Médoc"
      intro="Entre les devis à envoyer le soir, les commandes de vin à traiter et la facturation qui traîne, le temps administratif ronge vos journées. Des systèmes IA prennent ces tâches en charge — devis, relances, commandes — pour que vous restiez sur votre métier, pas sur votre ordinateur."
      intro2="J'installe des automatisations et des agents IA pour les artisans, caves, domaines viticoles et commerces de Lesparre-Médoc et de tout le Médoc. Connectés à vos outils, y compris Microsoft 365 / Outlook. Appel gratuit 1h, sans engagement."
      services={[
        "Devis générés et envoyés automatiquement",
        "Relances clients et impayés automatisées",
        "Commandes de vin et confirmations automatiques",
        "Agent IA qui répond aux demandes 24h/24",
        "Tri et réponses d'emails Outlook / Microsoft 365",
        "Facturation et rapprochements simplifiés",
        "Rappels de RDV automatiques (fini les no-shows)",
        "Synchronisation de vos outils entre eux",
      ]}
      whyTitle="Pourquoi automatiser à Lesparre ?"
      whyItems={[
        "Récupérer les heures perdues en administratif",
        "Un service pro même loin de Bordeaux",
        "Compatible Microsoft 365 / Outlook et Excel",
        "Certifié Anthropic — expert agents IA Claude",
        "Présentiel possible à Lesparre et dans le Médoc",
        "Appel gratuit 1h, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On identifie les tâches répétitives qui vous coûtent le plus de temps. Devis transparent." },
        { step: "02", title: "Installation (1-4 semaines)", desc: "Je mets en place vos automatisations. Vous validez à chaque étape, aucune surprise." },
        { step: "03", title: "Ça tourne tout seul", desc: "Vos systèmes sont opérationnels 24h/24. Entretien optionnel ensuite." },
      ]}
      casesTitle="Cas d’usage à Lesparre-Médoc"
      cases={[
        {
          secteur: "Cave / domaine viticole",
          probleme: "Commandes traitées à la main, relances après dégustation oubliées, clients hors région perdus de vue.",
          solution: "Prise de commande automatisée, relances et newsletter saisonnière programmées, suivi des colis.",
          gain: "Automatiser les relances et la prise de commande pour développer la vente directe.",
        },
        {
          secteur: "Artisan du bâtiment",
          probleme: "Devis rédigés le soir après le chantier — souvent trop tard, le client a signé ailleurs.",
          solution: "Le client décrit son besoin, un devis pré-rempli est prêt en minutes, avec relance automatique.",
          gain: "Réduire le délai d'envoi des devis grâce à un formulaire pré-rempli automatiquement.",
        },
        {
          secteur: "Commerce / producteur local",
          probleme: "Trop de temps passé à répondre aux mêmes questions et à gérer la facturation.",
          solution: "Agent IA pour les questions fréquentes + facturation et rapprochements automatisés.",
          gain: "Automatiser les réponses aux questions fréquentes et les tâches de facturation répétitives.",
        },
      ]}
      faqs={[
        { q: "Ça marche avec Outlook / Microsoft 365 et Excel ?", a: "Oui. Je connecte vos automatisations à Outlook, à votre agenda et à vos fichiers Excel / Microsoft 365 — l'outil de la plupart des pros du Médoc." },
        { q: "Combien coûte une automatisation à Lesparre ?", a: "Une première automatisation démarre à 450€ HT. Un système interconnecté à partir de 1 200€. Devis précis après l'appel gratuit." },
        { q: "Faut-il des compétences techniques ?", a: "Aucune. Vous décrivez votre besoin en langage courant, je construis et je maintiens. Vous voyez le résultat, pas le code." },
        { q: "Vous vous déplacez à Lesparre ?", a: "Oui, à Lesparre et dans tout le Médoc, ou 100% à distance selon votre préférence." },
      ]}
      faqsTitle="Questions fréquentes — automatisation Lesparre"
      ctaTitle="Récupérez vos soirées à Lesparre"
      ctaDesc="Appel gratuit 1h. À Lesparre ou en visio, sans engagement."
      ctaButton="Réserver mon appel gratuit"
    />
  );
}
