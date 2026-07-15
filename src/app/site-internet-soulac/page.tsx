import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création de Site Internet à Soulac-sur-Mer — Sites Web Pro",
  description: "Création de site internet à Soulac-sur-Mer : site vitrine, e-commerce, réservation pour hôtels, campings et commerces. Design moderne, SEO local Médoc. Devis gratuit.",
  keywords: ["création site internet Soulac", "création site web Soulac-sur-Mer", "agence web Soulac", "site vitrine Soulac", "site camping Soulac"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-internet-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-internet-soulac"
      schemaName="Création de site internet à Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Création de sites internet pour les hôtels, campings et commerces de Soulac-sur-Mer et du nord Médoc."
      badge="Création de site web — Soulac"
      title="Création de site internet"
      titleAccent="à Soulac-sur-Mer"
      intro="Soulac vit au rythme de sa saison : une clientèle familiale et fidèle qui revient chaque été. Encore faut-il qu'elle vous retrouve, réserve en un clic et ait envie de revenir. Un bon site fait tout ça — même quand vous êtes débordé en juillet."
      intro2="Je crée des sites internet sur mesure pour les hôtels, campings, locations, restaurants et commerces de Soulac-sur-Mer et du nord Médoc. Design moderne, réservation en ligne, SEO local. Devis gratuit sans engagement."
      services={[
        "Site vitrine ou avec réservation en ligne (Next.js)",
        "Design moderne, parfait sur mobile",
        "SEO local ciblé « Soulac » et « nord Médoc »",
        "Réservation directe (sans commission de plateforme)",
        "Connexion à vos outils (agenda, Microsoft 365)",
        "Version multilingue pour la clientèle touristique",
        "Collecte automatique d'avis Google",
        "Hébergement et mises à jour assurés",
      ]}
      whyTitle="Pourquoi me confier votre site à Soulac ?"
      whyItems={[
        "Conception et développement par la même personne",
        "Site pensé pour absorber le pic de la haute saison",
        "Présentiel possible à Soulac et dans le Médoc",
        "Automatisations IA connectables ensuite (résas, relances)",
        "Livraison rapide, souvent avant la saison",
        "Devis gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On définit l'objectif du site, votre offre et les fonctionnalités clés. Devis transparent." },
        { step: "02", title: "Conception (1-2 semaines)", desc: "Je développe votre site, prêt avant la saison. Validation à chaque étape." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, référencement local et évolutions continues." },
      ]}
      casesTitle="Exemples concrets à Soulac-sur-Mer"
      cases={[
        {
          secteur: "Camping familial",
          probleme: "Réservations uniquement par téléphone et email, saturées en juillet-août.",
          solution: "Site avec réservation en ligne directe et réponses automatiques aux questions fréquentes.",
          gain: "Capter les réservations à toute heure sans solliciter l'accueil en continu.",
        },
        {
          secteur: "Hôtel / chambres d'hôtes",
          probleme: "Forte dépendance à Booking et aux commissions.",
          solution: "Site avec réservation directe et programme de fidélité simple pour les habitués.",
          gain: "Développer la réservation directe et fidéliser les clients habitués.",
        },
        {
          secteur: "Commerce de bord de mer",
          probleme: "Activité concentrée sur l'été, aucune vente le reste de l'année.",
          solution: "Boutique en ligne simple + click & collect pour prolonger les ventes hors saison.",
          gain: "Répartir les ventes sur l'année grâce à un canal en ligne complémentaire.",
        },
      ]}
      faqs={[
        { q: "Combien coûte un site internet à Soulac ?", a: "Un site vitrine démarre à 800€ HT, un site avec réservation à partir de 1 800€, un e-commerce à 3 500€. Devis précis après l'appel gratuit." },
        { q: "Mon site sera-t-il prêt avant la saison ?", a: "Oui, si on s'y prend à l'avance : la plupart des sites sont livrés en moins de 15 jours." },
        { q: "La réservation en ligne évite-t-elle les commissions ?", a: "Oui. Une réservation directe depuis votre site vous appartient à 100%, sans commission de plateforme." },
        { q: "Vous vous déplacez à Soulac ?", a: "Oui, à Soulac et dans le Médoc, ou 100% à distance selon votre préférence." },
      ]}
      faqsTitle="Questions fréquentes — site internet Soulac"
      ctaTitle="Un site prêt pour votre saison à Soulac"
      ctaDesc="Devis gratuit, sans engagement. À Soulac ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
