import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Création d'Application Web à Lesparre-Médoc",
  description: "Création d'application web sur mesure à Lesparre-Médoc : gestion de commandes, espace client, suivi de chantiers, vente de vin. Web app IA dès 2 500€. Appel gratuit.",
  keywords: ["création application web Lesparre", "web app Lesparre-Médoc", "logiciel gestion Médoc", "application vente vin", "développement application Médoc"],
  alternates: { canonical: "https://www.nbn-ia.fr/web-app-lesparre" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/web-app-lesparre"
      schemaName="Création d'application web à Lesparre-Médoc"
      schemaCity="Lesparre-Médoc"
      schemaDesc="Développement d'applications web sur mesure pour les artisans, caves et commerces de Lesparre-Médoc."
      badge="Application web — Lesparre"
      title="Création d'application web"
      titleAccent="à Lesparre-Médoc"
      intro="Un tableur qui déborde, des commandes suivies sur papier, des chantiers gérés de tête : à un moment, l'outil freine votre activité. Une application sur mesure remet tout au même endroit — commandes, clients, planning — accessible partout, pensée autour de votre métier."
      intro2="Je développe des applications web sur mesure pour les caves, domaines, artisans et commerces de Lesparre-Médoc et de tout le Médoc. Sécurisées, rapides, connectées à vos outils. Appel gratuit sans engagement."
      services={[
        "Application web sur mesure (Next.js)",
        "Gestion de commandes et de stock",
        "Espace client ou espace pro sécurisé",
        "Suivi de chantiers ou de production",
        "Vente de vin et suivi des expéditions",
        "Connexion à vos outils (Microsoft 365, facturation)",
        "Accessible sur mobile, tablette et ordinateur",
        "Assistant IA intégrable pour automatiser les tâches",
      ]}
      whyTitle="Pourquoi une application sur mesure à Lesparre ?"
      whyItems={[
        "Un outil taillé pour votre métier, pas un logiciel générique",
        "Conception et développement par la même personne",
        "Développement accéléré par IA — livraison rapide",
        "Présentiel possible à Lesparre et dans le Médoc",
        "Évolutive : on ajoute des fonctions au fil du temps",
        "Appel gratuit, sans engagement",
      ]}
      steps={[
        { step: "01", title: "Appel gratuit (1h)", desc: "On cadre les fonctionnalités essentielles et votre façon de travailler. Devis transparent." },
        { step: "02", title: "Développement (2-4 semaines)", desc: "Je développe votre application par étapes. Vous testez et validez au fur et à mesure." },
        { step: "03", title: "Mise en ligne & suivi", desc: "Déploiement sécurisé, formation à la prise en main et évolutions continues." },
      ]}
      casesTitle="Exemples concrets à Lesparre-Médoc"
      cases={[
        {
          secteur: "Cave / domaine viticole",
          probleme: "Commandes, stocks et expéditions suivis sur plusieurs tableurs, erreurs fréquentes.",
          solution: "Application de gestion des commandes, du stock de vin et des expéditions, en un seul endroit.",
          gain: "Zéro erreur de stock, expéditions maîtrisées.",
        },
        {
          secteur: "Artisan du bâtiment",
          probleme: "Devis, chantiers et photos éparpillés entre mails, papiers et téléphone.",
          solution: "Application de suivi de chantiers : devis, planning, photos et documents centralisés.",
          gain: "Chaque chantier suivi sans rien perdre.",
        },
        {
          secteur: "Producteur / commerce local",
          probleme: "Commandes des clients pros gérées à la main, sans historique.",
          solution: "Espace client avec catalogue, commande en ligne et historique par client.",
          gain: "Commandes plus rapides, clients mieux suivis.",
        },
      ]}
      faqs={[
        { q: "Combien coûte une application web à Lesparre ?", a: "Une application simple démarre à 2 500€ HT, une application avancée avec intégrations à partir de 5 000€. Devis précis après l'appel gratuit." },
        { q: "Quelle différence avec un site internet ?", a: "Un site présente votre activité ; une application est un outil de travail (commandes, stock, suivi). Les deux peuvent être connectés." },
        { q: "Ça se connecte à Microsoft 365 / Excel ?", a: "Oui. L'application peut lire et écrire dans vos fichiers Excel et vos outils Microsoft 365, ou les remplacer si vous préférez." },
        { q: "Vous vous déplacez à Lesparre ?", a: "Oui, à Lesparre et dans tout le Médoc, ou 100% à distance selon votre préférence." },
      ]}
      faqsTitle="Questions fréquentes — application web Lesparre"
      ctaTitle="Un outil sur mesure pour votre activité"
      ctaDesc="Appel gratuit, sans engagement. À Lesparre ou en visio."
      ctaButton="Réserver mon appel gratuit"
    />
  );
}
