import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Automatisation IA pour Campings de Lacanau — NBN IA",
  description: "Agents IA et automatisation pour campings de Lacanau : réservations, messages clients, check-in, gestion de haute saison. Audit gratuit.",
  keywords: ["automatisation camping Lacanau", "agent IA camping Lacanau", "IA gestion camping Lacanau", "automatisation réservations Lacanau"],
  alternates: { canonical: "https://www.nbn-ia.fr/camping-lacanau" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/camping-lacanau"
      schemaName="Automatisation IA pour Campings de Lacanau"
      schemaCity="Lacanau"
      schemaDesc="Agents IA et automatisation pour les campings de Lacanau et du Médoc océan."
      badge="IA & Automatisation — Campings Lacanau"
      title="Automatisation & Agents IA"
      titleAccent="pour les campings de Lacanau"
      intro="Lacanau concentre ses réservations sur 2-3 mois avec une clientèle surf et famille exigeante. Les campings font face à un afflux de demandes impossible à gérer manuellement avec des équipes saisonnières. On automatise la communication et la gestion opérationnelle pour traverser la saison sans stress."
      intro2="NBN IA accompagne les campings de Lacanau, Lacanau-Océan et le Médoc atlantique. Audit gratuit sans engagement."
      services={[
        "Agent IA qui répond aux questions clients 24h/24",
        "Confirmation automatique des réservations",
        "Instructions d'arrivée et check-in dématérialisé",
        "Gestion des demandes de modification et annulation",
        "Alertes disponibilité et gestion des listes d'attente",
        "Relances automatiques pour les avis Google",
        "Reporting occupation et revenus hebdomadaire",
        "Communication pré-séjour et post-séjour automatisée",
      ]}
      whyTitle="Pourquoi automatiser votre camping à Lacanau ?"
      whyItems={[
        "Haute saison concentrée sur juillet-août avec pic de demandes",
        "Personnel saisonnier difficile à former rapidement",
        "Questions répétitives (surf, plage, équipements)",
        "Spécialisé Claude AI — réponses naturelles en français et anglais",
        "Disponible en présentiel à Lacanau",
        "Audit gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Audit 1h", desc: "On analyse votre saison passée : questions les plus fréquentes, pics de demandes, points de friction. On conçoit le plan d'automatisation." },
        { step: "02", title: "Déploiement avant saison", desc: "Agent IA et automatisations déployés avant juin. Votre équipe est formée en 1h. Livraison en 48h à 1 semaine." },
        { step: "03", title: "Support de saison", desc: "On monitore et on ajuste pendant juillet-août. Vous pouvez nous contacter si besoin. Résiliable à tout moment." },
      ]}
      casesTitle="Cas concrets pour les campings de Lacanau"
      cases={[
        {
          secteur: "Camping surf — Lacanau-Océan",
          probleme: "50% des clients sont étrangers (espagnols, britanniques, néerlandais). Questions en plusieurs langues, réponses tardives.",
          solution: "Agent IA multilingue qui répond en français, espagnol, anglais et néerlandais. Détecte la langue automatiquement.",
          gain: "Temps de réponse moyen passé de 6h à 3 minutes. Satisfaction client en hausse.",
        },
        {
          secteur: "Camping familial avec activités",
          probleme: "Planning des activités (cours de surf, animations) modifié en temps réel. Clients pas informés des changements.",
          solution: "Agent IA qui diffuse les mises à jour du planning par SMS aux clients présents. Interface simple pour l'équipe.",
          gain: "Plus de files d'attente pour des activités annulées. Équipe réception libérée.",
        },
        {
          secteur: "Camping avec liste d'attente",
          probleme: "Haute saison complète dès mars. Liste d'attente gérée manuellement. Annulations non converties en réservations rapides.",
          solution: "Système de liste d'attente automatisé : dès qu'une place se libère, l'agent IA notifie le premier de la liste et attend sa réponse sous 2h.",
          gain: "Taux de remplissage passé à 99%. 0 emplacement perdu sur annulation.",
        },
      ]}
      faqs={[
        { q: "Notre camping est ouvert seulement de mai à septembre — ça vaut le coup ?", a: "Oui. Sur une saison concentrée, le gain de temps et la réduction des erreurs sont encore plus impactants. Le système est pausé hors saison." },
        { q: "On utilise déjà Booking.com — ça s'intègre ?", a: "Oui. L'agent IA peut traiter les messages Booking, notifier votre équipe et gérer les réponses depuis une interface centralisée." },
        { q: "Comment gérer les demandes urgentes pendant la saison ?", a: "L'agent IA détecte les urgences (problème d'installation, sécurité, etc.) et alerte immédiatement votre équipe via SMS ou notification push." },
        { q: "Quel budget pour une première automatisation ?", a: "Un agent IA FAQ + confirmation de réservation démarre à 450€. On définit ensemble le scope lors de l'audit gratuit." },
      ]}
      faqsTitle="Questions fréquentes — automatisation campings Lacanau"
      ctaTitle="Prêt pour une saison sans stress ?"
      ctaDesc="Audit gratuit, sans engagement. À Lacanau ou en visio."
      ctaButton="Réserver l'audit gratuit"
    />
  );
}
