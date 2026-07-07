import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création de Site Internet à Lesparre-Médoc — Sites Web Pro",
  description: "Création de site internet à Lesparre-Médoc : site vitrine, e-commerce, vente de vin en ligne pour artisans, commerces, caves et domaines. SEO local Médoc. Devis gratuit.",
  keywords: ["création site internet Lesparre", "création site web Lesparre-Médoc", "agence web Médoc", "site vitrine Lesparre", "site vente vin Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-internet-lesparre" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-internet-lesparre"
      schemaName="Création de site internet à Lesparre-Médoc"
      schemaCity="Lesparre-Médoc"
      schemaDesc="Création de sites internet pour les artisans, commerces, caves et domaines de Lesparre-Médoc."
      badge="Création de site web — Lesparre"
      title="Création de site internet"
      titleAccent="à Lesparre-Médoc"
      intro="Capitale du Médoc, Lesparre concentre artisans, commerces, caves et domaines qui font vivre tout le territoire. Loin des agences bordelaises, ces entreprises méritent un site aussi pro que ceux de la ville — pour être trouvées sur Google et vendre au-delà du marché du samedi."
      intro2="Je crée des sites internet sur mesure pour les artisans, commerçants, caves, domaines viticoles et indépendants de Lesparre-Médoc et de tout le Médoc. Design moderne, vente en ligne, SEO local. Devis gratuit sans engagement."
      services={[
        "Site vitrine ou e-commerce sur mesure (Next.js)",
        "Vente de vin en ligne et click & collect",
        "SEO local ciblé « Lesparre » et « Médoc »",
        "Formulaire de devis pour les artisans",
        "Connexion à vos outils (agenda, Microsoft 365, facturation)",
        "Design moderne et rapide sur mobile",
        "Collecte automatique d'avis Google",
        "Hébergement et mises à jour assurés",
      ]}
      whyTitle="Pourquoi me confier votre site à Lesparre ?"
      whyItems={[
        "Conception et développement par la même personne",
        "Un site pro même loin de Bordeaux",
        "Présentiel possible à Lesparre et dans le Médoc",
        "Automatisations IA connectables ensuite (devis, relances)",
        "Livraison rapide, souvent en moins de 15 jours",
        "Devis gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On définit l'objectif du site, votre métier et les pages clés. Devis transparent." },
        { step: "02", title: "Conception (1-2 semaines)", desc: "Je développe votre site. Vous validez à chaque étape, aucune surprise." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, référencement local et évolutions continues." },
      ]}
      casesTitle="Exemples concrets à Lesparre-Médoc"
      cases={[
        {
          secteur: "Cave / domaine viticole",
          probleme: "Vente au caveau uniquement, aucune commande en ligne pour les clients hors région.",
          solution: "Boutique en ligne de vente de vin avec relances après dégustation et newsletter saisonnière.",
          gain: "Ventes directes élargies bien au-delà du Médoc.",
        },
        {
          secteur: "Artisan du bâtiment",
          probleme: "Aucun site, demandes de devis perdues, invisible sur Google.",
          solution: "Site vitrine avec formulaire de devis et SEO local sur le métier et la commune.",
          gain: "Demandes de devis qualifiées reçues chaque semaine.",
        },
        {
          secteur: "Commerce / producteur local",
          probleme: "Visible uniquement au marché, aucune vente en semaine.",
          solution: "Site avec catalogue et commande en ligne, retrait sur place ou livraison locale.",
          gain: "Ventes possibles 7j/7, plus seulement le jour de marché.",
        },
      ]}
      faqs={[
        { q: "Combien coûte un site internet à Lesparre ?", a: "Un site vitrine démarre à 800€ HT, un site avec vente en ligne à partir de 1 800€, un e-commerce complet à 3 500€. Devis précis après l'appel gratuit." },
        { q: "Je peux vendre mon vin en ligne ?", a: "Oui. On met en place une boutique avec paiement sécurisé, gestion des colis et relances clients automatiques." },
        { q: "Comment être trouvé sur Google dans le Médoc ?", a: "SEO technique propre, contenu local ciblé et avis Google. La concurrence est faible dans le Médoc : c'est un vrai avantage." },
        { q: "Vous vous déplacez à Lesparre ?", a: "Oui, à Lesparre et dans tout le Médoc, ou 100% à distance selon ce qui vous arrange." },
      ]}
      faqsTitle="Questions fréquentes — site internet Lesparre"
      ctaTitle="Un site pro pour votre activité dans le Médoc"
      ctaDesc="Devis gratuit, sans engagement. À Lesparre ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
