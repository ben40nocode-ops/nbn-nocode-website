import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation & Agents IA à Soulac-sur-Mer",
  description: "Automatisation et agents IA à Soulac-sur-Mer : réservations, relances, réponses clients, gestion de saison automatisées. Compatible Microsoft 365. Appel gratuit 1h.",
  keywords: ["automatisation Soulac", "agent IA Soulac-sur-Mer", "automatisation camping Soulac", "chatbot IA Soulac", "automatisation Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/automatisation-soulac"
      schemaName="Automatisation & agents IA à Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Automatisation et agents IA pour les hôtels, campings et commerces de Soulac-sur-Mer et du nord Médoc."
      badge="Automatisation & IA — Soulac"
      title="Automatisation & agents IA"
      titleAccent="à Soulac-sur-Mer"
      intro="En haute saison, Soulac déborde : demandes de réservation en masse, mêmes questions répétées, équipes saisonnières sous pression. Des systèmes IA répondent, réservent et relancent à votre place — jour et nuit — pour que vous gardiez la tête hors de l'eau."
      intro2="J'installe des automatisations et des agents IA pour les hôtels, campings, restaurants et commerces de Soulac-sur-Mer. Connectés à vos outils, y compris Microsoft 365 / Outlook. Appel gratuit 1h, sans engagement."
      services={[
        "Agent IA qui répond aux demandes 24h/24",
        "Réponses automatiques aux questions fréquentes",
        "Réservations et confirmations automatisées",
        "Relances clients et demandes d'avis Google",
        "Tri et réponses d'emails Outlook / Microsoft 365",
        "Rappels de RDV automatiques (fini les no-shows)",
        "Synchronisation de vos outils entre eux",
        "Tableau de bord simple pour tout suivre",
      ]}
      whyTitle="Pourquoi automatiser à Soulac ?"
      whyItems={[
        "Absorber le pic de la haute saison sans recruter",
        "Soulager des équipes saisonnières réduites",
        "Compatible Microsoft 365 / Outlook",
        "Certifié Anthropic — expert agents IA Claude",
        "Présentiel possible à Soulac et dans le Médoc",
        "Appel gratuit 1h, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On identifie les 2-3 tâches qui vous coûtent le plus de temps en saison. Devis transparent." },
        { step: "02", title: "Installation (1-4 semaines)", desc: "Je mets en place vos automatisations, prêtes avant la saison. Vous validez à chaque étape." },
        { step: "03", title: "Ça tourne tout seul", desc: "Vos systèmes sont opérationnels 24h/24. Entretien optionnel ensuite." },
      ]}
      casesTitle="Cas concrets à Soulac-sur-Mer"
      cases={[
        {
          secteur: "Camping en haute saison",
          probleme: "100+ emails par semaine en juillet-août : disponibilités, animaux, équipements. Réception saturée.",
          solution: "Agent IA entraîné sur le règlement et les FAQ, qui répond à 80% des demandes et transfère les cas complexes.",
          gain: "80% des demandes traitées automatiquement.",
        },
        {
          secteur: "Hôtel / chambres d'hôtes",
          probleme: "No-shows fréquents et clients pas relancés faute de temps.",
          solution: "Rappels automatiques avant l'arrivée + demande d'avis Google au départ.",
          gain: "Moins de no-shows, plus d'avis positifs.",
        },
        {
          secteur: "Commerce saisonnier",
          probleme: "Fichier clients dormant hors saison, aucune relance.",
          solution: "Campagnes automatiques de réactivation avant chaque saison.",
          gain: "Clients fidèles qui reviennent chaque année.",
        },
      ]}
      faqs={[
        { q: "Ça marche avec Outlook / Microsoft 365 ?", a: "Oui. Je connecte vos automatisations à votre boîte Outlook, votre agenda et vos fichiers Microsoft 365 — c'est justement l'outil de la plupart des pros du Médoc." },
        { q: "Combien coûte une automatisation à Soulac ?", a: "Une première automatisation démarre à 450€ HT. Un système interconnecté à partir de 1 200€. Devis précis après l'appel gratuit." },
        { q: "Faut-il des compétences techniques ?", a: "Aucune. Vous décrivez votre besoin, je m'occupe de tout. Vous voyez le résultat, pas le code." },
        { q: "Ce sera prêt avant la saison ?", a: "Oui si on s'y prend en amont : la mise en place prend de 1 à 4 semaines selon la complexité." },
      ]}
      faqsTitle="Questions fréquentes — automatisation Soulac"
      ctaTitle="Passez la saison sans être débordé à Soulac"
      ctaDesc="Appel gratuit 1h. À Soulac ou en visio, sans engagement."
      ctaButton="Réserver mon appel gratuit"
    />
  );
}
