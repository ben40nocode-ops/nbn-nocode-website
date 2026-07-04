import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & Automatisation pour Hôtels de Royan",
  description: "Création de site web et automatisation IA pour hôtels de Royan : réservations directes, conciergerie IA, SEO local Charente-Maritime. Devis gratuit.",
  keywords: ["site web hôtel Royan", "création site internet hôtel Royan", "automatisation hôtel Royan", "réservations directes hôtel Charente-Maritime"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-hotel-royan" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-hotel-royan"
      schemaName="Site Web et Automatisation pour Hôtels de Royan"
      schemaCity="Royan"
      schemaDesc="Création de sites web et automatisation IA pour les hôtels de Royan et de la Charente-Maritime."
      badge="Site Web & IA — Hôtels Royan"
      title="Site web & automatisation"
      titleAccent="pour votre hôtel à Royan"
      intro="Royan est une station balnéaire prisée de Charente-Maritime. Votre hôtel mérite un site qui convertit les recherches Google en réservations directes — sans passer par Booking.com. On crée des sites hôteliers performants avec agent IA conciergerie intégré."
      intro2="NBN IA conçoit des sites web et automatisations pour les hôtels de Royan et de la Charente-Maritime. Devis gratuit sans engagement."
      services={[
        "Site web hôtelier moderne et performant",
        "Réservation directe intégrée (sans commission)",
        "Agent IA conciergerie 24h/24",
        "SEO local ciblé 'hôtel Royan' et requêtes associées",
        "Connexion channel manager et OTA",
        "Multilingue (français, anglais)",
        "Collecte automatique d'avis Google",
        "Campagnes fidélisation clients automatisées",
      ]}
      whyTitle="Pourquoi un site pro pour votre hôtel à Royan ?"
      whyItems={[
        "Forte saisonnalité — capter un maximum en haute saison",
        "Réservations directes = économie sur les commissions",
        "Clientèle mixte (familles, couples, séminaires)",
        "Spécialisé vibe coding avec Claude Code — livraison rapide",
        "Disponible en présentiel à Royan",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble l'identité visuelle, les chambres à mettre en valeur et les fonctionnalités. Devis transparent." },
        { step: "02", title: "Développement (1-3 semaines)", desc: "Site livré avec réservations directes et agent IA opérationnels. Points réguliers pendant le développement." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement sur Vercel. SEO technique complet. Monitoring et évolutions continues." },
      ]}
      casesTitle="Cas concrets pour les hôtels de Royan"
      cases={[
        {
          secteur: "Hôtel de charme bord de mer",
          probleme: "Dépendance à Booking.com pour 85% des réservations. Commissions qui grèvent la marge en haute saison.",
          solution: "Site premium avec réservation directe, programme fidélité simple et agent IA qui collecte les emails pour les campagnes futures.",
          gain: "55% de réservations directes en première saison. 6 000€ de commissions économisées.",
        },
        {
          secteur: "Hôtel avec capacité séminaires",
          probleme: "Site qui ne valorise pas l'offre séminaires. Entreprises qui ne savent pas que l'hôtel a des salles de réunion.",
          solution: "Pages dédiées séminaires avec formulaire devis en ligne, agent IA qui qualifie les demandes entrantes.",
          gain: "15 devis séminaires reçus en 3 mois. 4 convertis.",
        },
        {
          secteur: "Hôtel sans présence digitale forte",
          probleme: "Site basique, mal référencé. L'hôtel n'apparaît pas sur les premières pages Google pour 'hôtel Royan'.",
          solution: "Refonte complète avec SEO technique, contenu optimisé pour les requêtes locales et avis Google structurés.",
          gain: "Top 3 Google sur 'hôtel Royan bord de mer' en 60 jours.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site hôtelier à Royan ?", a: "Un site hôtelier avec réservations directes démarre à 2 500€ HT. Avec agent IA autour de 3 500€ HT. Devis précis après l'audit gratuit." },
        { q: "Comment se positionner sur 'hôtel Royan' sur Google ?", a: "SEO technique impeccable + contenu local dense + avis Google structurés. On vous explique la stratégie lors de l'audit." },
        { q: "L'agent IA peut gérer les demandes de séminaires ?", a: "Oui. On peut le former sur votre offre séminaires pour qualifier les demandes et transmettre un devis automatiquement." },
        { q: "On peut commencer par juste le site, sans l'agent IA ?", a: "Absolument. On démarre par ce qui a le plus d'impact pour vous et on ajoute des fonctionnalités au fil du temps." },
      ]}
      faqsTitle="Questions fréquentes — site web hôtel Royan"
      ctaTitle="Un site qui remplit votre hôtel"
      ctaDesc="Devis gratuit, sans engagement. À Royan ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
