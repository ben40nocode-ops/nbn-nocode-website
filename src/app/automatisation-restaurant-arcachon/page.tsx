import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Restaurants d'Arcachon — NBN IA",
  description: "Agents IA et automatisation pour restaurants d'Arcachon : réservations, commandes, stocks, fidélisation. Audit gratuit.",
  keywords: ["automatisation restaurant Arcachon", "agent IA restaurant Arcachon", "IA gestion restaurant Bassin Arcachon", "automatisation réservations restaurant Arcachon"],
  alternates: { canonical: "https://www.nbn-ia.fr/automatisation-restaurant-arcachon" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/automatisation-restaurant-arcachon"
      schemaName="Automatisation IA pour Restaurants d'Arcachon"
      schemaCity={["Arcachon", "La Teste-de-Buch", "Gujan-Mestras", "Andernos-les-Bains"]}
      schemaDesc="Agents IA et automatisation pour les restaurants et établissements de restauration d'Arcachon et du Bassin."
      badge="IA & Automatisation — Restaurants Arcachon"
      title="Automatisation & Agents IA"
      titleAccent="pour les restaurants d'Arcachon"
      intro="Les restaurants du Bassin d'Arcachon font face à une haute saison intense avec des équipes réduites. Gérer les réservations, répondre aux demandes, fidéliser les clients réguliers — tout ça prend du temps précieux. On automatise l'opérationnel pour que votre équipe se concentre sur ce qui compte : la cuisine et le service."
      intro2="NBN IA accompagne les restaurants d'Arcachon, La Teste, Gujan-Mestras et tout le Bassin. Audit gratuit sans engagement."
      services={[
        "Agent IA qui répond aux demandes de réservation 24h/24",
        "Confirmations et rappels automatiques par SMS",
        "Gestion des listes d'attente en haute saison",
        "Collecte automatique d'avis Google post-repas",
        "Fidélisation clients réguliers automatisée",
        "Notifications commandes en ligne et click & collect",
        "Reporting hebdomadaire couverts et revenus",
        "Campagnes SMS/email hors saison",
      ]}
      whyTitle="Pourquoi automatiser votre restaurant ?"
      whyItems={[
        "Haute saison avec pics de demandes ingérables en manuel",
        "Réservations reçues à toute heure — réponses attendues rapidement",
        "Fidélisation des touristes difficile sans automatisation",
        "Spécialisé Claude AI — ton naturel et professionnel",
        "Disponible en présentiel sur le Bassin d'Arcachon",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On analyse vos flux de réservations, vos canaux de communication et vos points de friction. On identifie les gains rapides." },
        { step: "02", title: "Déploiement", desc: "Agent IA et automatisations déployés avant la saison. Votre équipe formée en 1h. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Suivi de saison", desc: "On monitore et on ajuste pendant la haute saison. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour les restaurants du Bassin"
      cases={[
        {
          secteur: "Restaurant fruits de mer — Arcachon",
          probleme: "En juillet, 80+ demandes de réservation par jour. L'équipe passe 2h à répondre aux messages au lieu de servir.",
          solution: "Agent IA qui traite les demandes de réservation sur WhatsApp, Instagram et email. Confirme, propose des créneaux alternatifs si complet.",
          gain: "2h gagnées par jour en haute saison. Taux de réponse de 3min contre 4h en manuel.",
        },
        {
          secteur: "Brasserie avec click & collect",
          probleme: "Commandes click & collect reçues par téléphone uniquement. Files d'attente, erreurs de commande, manque à gagner.",
          solution: "Système de commande en ligne avec agent IA qui confirme l'heure de retrait et notifie la cuisine au bon moment.",
          gain: "+45% de commandes click & collect. 0 erreur sur la saison.",
        },
        {
          secteur: "Restaurant gastronomique",
          probleme: "Clients satisfaits mais peu d'avis Google (note 4,1). Pas de process de collecte post-repas.",
          solution: "Agent IA qui envoie un SMS de remerciement 2h après le repas avec lien vers Google Reviews. Segmentation selon le nombre de couverts.",
          gain: "+38 avis en 3 mois. Note passée de 4,1 à 4,7 étoiles.",
        },
      ]}
      faqs={[
        { q: "L'agent peut gérer les réservations sur plusieurs canaux ?", a: "Oui — email, SMS, WhatsApp, Instagram DM. Il centralise tout et répond depuis un seul endroit." },
        { q: "Comment ça gère les complets en haute saison ?", a: "Il propose automatiquement des créneaux alternatifs (heure différente, date suivante) et inscrit le client sur liste d'attente si souhaité." },
        { q: "Vous intervenez sur tout le Bassin ?", a: "Oui — Arcachon, La Teste, Gujan-Mestras, Andernos, Lège-Cap-Ferret. En présentiel ou à distance." },
        { q: "Quel budget pour une première automatisation restaurant ?", a: "Un agent IA réservations + relances avis démarre à 450€. On définit ensemble le périmètre lors de l'audit gratuit." },
      ]}
      faqsTitle="Questions fréquentes — automatisation restaurants Arcachon"
      ctaTitle="Prêt pour une saison sans débordement ?"
      ctaDesc="Audit gratuit, sans engagement. Sur le Bassin ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
