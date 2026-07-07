import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création d'Application Web à Soulac-sur-Mer",
  description: "Création d'application web sur mesure à Soulac-sur-Mer : réservation, gestion de camping, espace client, planning de saison. Web app IA dès 2 500€. Appel gratuit.",
  keywords: ["création application web Soulac", "web app Soulac-sur-Mer", "application camping Soulac", "logiciel réservation Soulac", "développement application Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/web-app-soulac" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/web-app-soulac"
      schemaName="Création d'application web à Soulac-sur-Mer"
      schemaCity="Soulac-sur-Mer"
      schemaDesc="Développement d'applications web sur mesure pour les entreprises de Soulac-sur-Mer et du nord Médoc."
      badge="Application web — Soulac"
      title="Création d'application web"
      titleAccent="à Soulac-sur-Mer"
      intro="Quand un logiciel standard ne colle pas à votre façon de travailler, une application sur mesure change tout : réservations, planning de saison, suivi des habitués, tout au même endroit, accessible depuis n'importe quel appareil. Conçue autour de VOTRE métier, pas l'inverse."
      intro2="Je développe des applications web sur mesure pour les campings, hôtels, locations et commerces de Soulac-sur-Mer. Sécurisées, rapides, connectées à vos outils. Appel gratuit sans engagement."
      services={[
        "Application web sur mesure (Next.js)",
        "Espace client ou espace équipe sécurisé",
        "Réservation et planning de saison intégrés",
        "Base de données de vos clients et réservations",
        "Accessible sur mobile, tablette et ordinateur",
        "Connexion à vos outils (Microsoft 365, paiement)",
        "Tableau de bord clair pour tout piloter",
        "Assistant IA intégrable pour automatiser les tâches",
      ]}
      whyTitle="Pourquoi une application sur mesure à Soulac ?"
      whyItems={[
        "Un outil qui colle à votre saison, pas un logiciel générique",
        "Conception et développement par la même personne",
        "Développement accéléré par IA — livraison rapide",
        "Présentiel possible à Soulac et dans le Médoc",
        "Évolutive : on ajoute des fonctions au fil du temps",
        "Appel gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On cadre les fonctionnalités essentielles et votre façon de travailler. Devis transparent." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "Je développe votre application par étapes. Vous testez et validez au fur et à mesure." },
        { step: "03", title: "Mise en ligne & suivi", desc: "Déploiement sécurisé, formation à la prise en main et évolutions continues." },
      ]}
      casesTitle="Exemples concrets à Soulac-sur-Mer"
      cases={[
        {
          secteur: "Camping — gestion de saison",
          probleme: "Réservations sur un tableur, doubles réservations et confusion en pleine saison.",
          solution: "Application de réservation et de planning centralisée, accessible par toute l'équipe.",
          gain: "Fini les doubles réservations, une équipe alignée.",
        },
        {
          secteur: "Location saisonnière",
          probleme: "Gestion des arrivées, cautions et états des lieux dispersée entre mails et papiers.",
          solution: "Espace de gestion locative : planning, documents, communication centralisés.",
          gain: "Chaque séjour géré sans stress ni oubli.",
        },
        {
          secteur: "Commerce avec fidélité",
          probleme: "Aucun suivi des clients fidèles qui reviennent chaque été.",
          solution: "Application avec fiche client, historique et relances de réactivation.",
          gain: "Des habitués reconnus et fidélisés.",
        },
      ]}
      faqs={[
        { q: "Combien coûte une application web à Soulac ?", a: "Une application simple démarre à 2 500€ HT, une application avancée avec intégrations à partir de 5 000€. Devis précis après l'appel gratuit." },
        { q: "Quelle différence avec un site internet ?", a: "Un site présente votre activité ; une application est un outil de travail (réservations, planning, espace client). Les deux peuvent être connectés." },
        { q: "Ça remplace mon logiciel actuel ?", a: "Selon votre logiciel, on peut soit le remplacer, soit s'y connecter. On analyse ça lors de l'appel gratuit." },
        { q: "Vous vous déplacez à Soulac ?", a: "Oui, à Soulac et dans le Médoc, ou 100% à distance selon votre préférence." },
      ]}
      faqsTitle="Questions fréquentes — application web Soulac"
      ctaTitle="Un outil sur mesure pour votre saison"
      ctaDesc="Appel gratuit, sans engagement. À Soulac ou en visio."
      ctaButton="Réserver mon appel gratuit"
    />
  );
}
