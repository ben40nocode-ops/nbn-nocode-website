import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création de Site Internet à Royan — Sites Web Pro",
  description: "Création de site internet à Royan et en Charente-Maritime : site vitrine, e-commerce, réservation en ligne. Design moderne, SEO local, livré rapidement. Devis gratuit.",
  keywords: ["création site internet Royan", "création site web Royan", "agence web Royan", "site vitrine Royan", "site e-commerce Royan"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-internet-royan" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-internet-royan"
      schemaName="Création de site internet à Royan"
      schemaCity="Royan"
      schemaDesc="Création de sites internet vitrines et e-commerce pour les entreprises de Royan et de la Charente-Maritime."
      badge="Création de site web — Royan"
      title="Création de site internet"
      titleAccent="à Royan"
      intro="Royan attire chaque été des milliers de visiteurs, et vos clients vous cherchent d'abord sur Google. Un site rapide, clair et bien référencé transforme ces recherches en appels, en réservations et en devis — toute l'année, pas seulement en saison."
      intro2="Je crée des sites internet sur mesure pour les commerçants, artisans, restaurateurs et indépendants de Royan et de la Charente-Maritime. Design moderne, optimisé Google, connecté à vos outils. Devis gratuit sans engagement."
      services={[
        "Site vitrine ou e-commerce sur mesure (Next.js)",
        "Design moderne, rapide, parfait sur mobile",
        "SEO local ciblé « à Royan » et votre métier",
        "Formulaire de contact et prise de rendez-vous",
        "Réservation ou paiement en ligne si besoin",
        "Connexion à vos outils (agenda, Microsoft 365, CRM)",
        "Collecte automatique d'avis Google",
        "Hébergement et mises à jour assurés",
      ]}
      whyTitle="Pourquoi me confier votre site à Royan ?"
      whyItems={[
        "Je conçois ET développe — pas d'intermédiaire, un seul interlocuteur",
        "Sites rapides et durables, pensés pour convertir",
        "Présentiel possible à Royan et en Charente-Maritime",
        "Possibilité d'ajouter des automatisations IA plus tard",
        "Livraison en moins de 15 jours en général",
        "Devis gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On définit ensemble l'objectif du site, votre identité et les pages clés. Devis transparent." },
        { step: "02", title: "Conception (1-2 semaines)", desc: "Je conçois et développe votre site. Vous validez à chaque étape, zéro surprise." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, référencement local, et je reste disponible pour le faire évoluer." },
      ]}
      casesTitle="Exemples concrets à Royan"
      cases={[
        {
          secteur: "Restaurant de bord de mer",
          probleme: "Aucun site, visible seulement sur les réseaux. Les touristes ne trouvent pas le menu ni comment réserver.",
          solution: "Site vitrine avec menu en ligne, réservation directe et agent IA qui répond aux questions fréquentes.",
          gain: "Capter des réservations directes dès le lancement du nouveau site.",
        },
        {
          secteur: "Artisan / commerce local",
          probleme: "Un vieux site lent, mal classé sur Google, qui ne génère aucun appel.",
          solution: "Refonte complète rapide et optimisée, avec SEO local et formulaire de devis.",
          gain: "Améliorer la visibilité sur les recherches locales liées au métier.",
        },
        {
          secteur: "Activité touristique / location",
          probleme: "Dépendance totale aux plateformes qui prennent des commissions.",
          solution: "Site avec réservation en direct et paiement en ligne sécurisé.",
          gain: "Réduire la dépendance aux commissions grâce à la réservation en direct.",
        },
      ]}
      faqs={[
        { q: "Combien coûte un site internet à Royan ?", a: "Un site vitrine démarre à 800€ HT, un site complet avec blog à 1 800€, un e-commerce à 3 500€. Devis précis après l'appel gratuit." },
        { q: "En combien de temps mon site est-il en ligne ?", a: "La plupart des sites sont livrés en moins de 15 jours, selon la complexité et la rapidité de vos retours." },
        { q: "Comment être trouvé sur Google à Royan ?", a: "SEO technique propre, contenu local optimisé et avis Google. On construit la stratégie ensemble lors de l'appel." },
        { q: "Vous intervenez en présentiel à Royan ?", a: "Oui, je me déplace à Royan et en Charente-Maritime, ou on travaille 100% à distance selon ce qui vous arrange." },
      ]}
      faqsTitle="Questions fréquentes — site internet Royan"
      ctaTitle="Un site qui vous ramène des clients à Royan"
      ctaDesc="Devis gratuit, sans engagement. À Royan ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
