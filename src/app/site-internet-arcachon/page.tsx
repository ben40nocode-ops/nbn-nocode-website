import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création de Site Internet à Arcachon — Sites Web Pro",
  description: "Création de site internet sur le Bassin d'Arcachon : site vitrine, e-commerce, réservation en ligne. Design moderne, SEO local, livraison rapide. Devis gratuit.",
  keywords: ["création site internet Arcachon", "création site web Arcachon", "agence web Bassin d'Arcachon", "site vitrine Arcachon", "site e-commerce Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-internet-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-internet-arcachon"
      schemaName="Création de site internet à Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Gujan-Mestras"]}
      schemaDesc="Création de sites internet vitrines et e-commerce pour les entreprises du Bassin d'Arcachon."
      badge="Création de site web — Arcachon"
      title="Création de site internet"
      titleAccent="sur le Bassin d'Arcachon"
      intro="Sur le Bassin, la concurrence est rude et la clientèle exigeante. Un site élégant, rapide et bien référencé fait la différence entre un visiteur qui vous choisit et un qui va chez le voisin. C'est votre première vitrine, avant même la boutique."
      intro2="Je crée des sites internet sur mesure pour les commerçants, restaurateurs, ostréiculteurs, hôteliers et indépendants d'Arcachon, La Teste et Gujan-Mestras. Design haut de gamme, optimisé Google. Devis gratuit sans engagement."
      services={[
        "Site vitrine ou e-commerce sur mesure (Next.js)",
        "Design soigné, à la hauteur de votre image",
        "SEO local ciblé « Arcachon » et « Bassin »",
        "Réservation, click & collect ou vente en ligne",
        "Connexion à vos outils (agenda, Microsoft 365, caisse)",
        "Parfait sur mobile pour la clientèle touristique",
        "Collecte automatique d'avis Google",
        "Hébergement et mises à jour assurés",
      ]}
      whyTitle="Pourquoi me confier votre site sur le Bassin ?"
      whyItems={[
        "Conception et développement par la même personne",
        "Design premium adapté à l'exigence du Bassin",
        "Présentiel possible à Arcachon, La Teste, Gujan-Mestras",
        "Automatisations IA connectables ensuite",
        "Livraison rapide, souvent en moins de 15 jours",
        "Devis gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On cadre l'objectif, l'univers visuel et les pages clés. Devis transparent." },
        { step: "02", title: "Conception (1-2 semaines)", desc: "Je développe votre site. Validation à chaque étape, aucune surprise." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, référencement local et évolutions continues." },
      ]}
      casesTitle="Exemples concrets sur le Bassin d'Arcachon"
      cases={[
        {
          secteur: "Ostréiculteur — vente directe",
          probleme: "Vente uniquement à la cabane, aucune commande possible en ligne hors saison.",
          solution: "Boutique en ligne pour commander huîtres et colis, avec relances automatiques des clients fidèles.",
          gain: "Ventes directes prolongées toute l'année.",
        },
        {
          secteur: "Restaurant / bar du front de mer",
          probleme: "Site inexistant ou obsolète, réservations perdues faute de visibilité.",
          solution: "Site vitrine élégant avec menu, réservation directe et avis Google mis en avant.",
          gain: "Plus de réservations captées en direct.",
        },
        {
          secteur: "Commerce / boutique déco",
          probleme: "Boutique physique dépendante de la saison, aucune vente en ligne l'hiver.",
          solution: "E-commerce simple connecté au stock, click & collect pour la clientèle locale.",
          gain: "Chiffre d'affaires étalé sur toute l'année.",
        },
      ]}
      faqs={[
        { q: "Combien coûte un site internet à Arcachon ?", a: "Un site vitrine démarre à 800€ HT, un site complet à 1 800€, un e-commerce à 3 500€. Devis précis après l'appel gratuit." },
        { q: "Le site sera-t-il beau et rapide ?", a: "Oui — design soigné et technologies modernes (Next.js) : chargement rapide et rendu parfait sur mobile, essentiel pour la clientèle du Bassin." },
        { q: "Comment ressortir sur Google sur le Bassin ?", a: "SEO technique impeccable, contenu local dense et avis Google. On définit la stratégie lors de l'appel gratuit." },
        { q: "Vous vous déplacez sur le Bassin ?", a: "Oui, à Arcachon, La Teste et Gujan-Mestras, ou 100% à distance selon votre préférence." },
      ]}
      faqsTitle="Questions fréquentes — site internet Arcachon"
      ctaTitle="Un site à la hauteur du Bassin d'Arcachon"
      ctaDesc="Devis gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
