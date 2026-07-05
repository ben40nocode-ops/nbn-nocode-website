import type { Metadata } from "next";
import { SectorPage } from "@/components/SectorPage";

export const metadata: Metadata = {
  title: "Site Web & IA pour Restaurants à Bordeaux",
  description: "Création de site web et automatisation IA pour restaurants bordelais : réservations en ligne, menu digital, agent IA, SEO local. Devis gratuit.",
  keywords: ["site web restaurant Bordeaux", "création site internet restaurant Bordeaux", "automatisation restaurant Bordeaux", "réservations en ligne restaurant Bordeaux"],
  alternates: { canonical: "https://www.nbn-ia.fr/site-restaurant-bordeaux" },
};

export default function Page() {
  return (
    <SectorPage
      canonical="https://www.nbn-ia.fr/site-restaurant-bordeaux"
      schemaName="Site Web et Automatisation pour Restaurants à Bordeaux"
      schemaCity="Bordeaux"
      schemaDesc="Création de sites web et automatisation IA pour les restaurants et établissements de restauration à Bordeaux."
      badge="Site Web & IA — Restaurants Bordeaux"
      title="Site web & automatisation"
      titleAccent="pour votre restaurant à Bordeaux"
      intro="Un restaurant à Bordeaux qui n'a pas de site performant perd des couverts chaque jour. On crée des sites restauration qui convertissent les recherches Google en réservations, avec menu digital, prise de réservation en ligne et agent IA pour répondre aux questions — même à 23h."
      intro2="NBN IA accompagne les restaurants de Bordeaux et de la Gironde. Devis gratuit sans engagement."
      services={[
        "Site web restaurant responsive et rapide",
        "Menu digital mis à jour en autonomie",
        "Réservation en ligne intégrée (sans commission)",
        "Agent IA qui répond aux questions 24h/24",
        "SEO local ciblé 'restaurant Bordeaux' et cuisines",
        "Intégration Google My Business et avis",
        "Campagnes fidélisation automatisées",
        "Connexion aux plateformes (TheFork, Zenchef, etc.)",
      ]}
      whyTitle="Pourquoi un site pro pour votre restaurant ?"
      whyItems={[
        "70% des décisions de restaurant se font via Google",
        "Un site bien référencé = des couverts sans commission TheFork",
        "Agent IA = réponse instantanée à 23h",
        "Développement accéléré par IA — livraison rapide",
        "Disponible en présentiel à Bordeaux",
        "Devis gratuit sans engagement",
      ]}
      steps={[
        { step: "01", title: "Brief & design (1h)", desc: "On définit ensemble l'ambiance, le menu à mettre en valeur et les fonctionnalités. Vous repartez avec un devis transparent." },
        { step: "02", title: "Développement (1-2 semaines)", desc: "Site livré avec réservations en ligne et agent IA opérationnels. Vibe coding = 3x plus rapide qu'une agence classique." },
        { step: "03", title: "Mise en ligne & SEO", desc: "Déploiement, SEO local complet, Google My Business optimisé. Monitoring des réservations." },
      ]}
      casesTitle="Cas concrets pour les restaurants de Bordeaux"
      cases={[
        {
          secteur: "Restaurant gastro — centre Bordeaux",
          probleme: "Site WordPress vieillissant, non mobile-friendly. 80% des réservations via TheFork avec commissions. Menu mis à jour manuellement par l'agence.",
          solution: "Refonte Next.js avec menu digital auto-géré, réservation directe et agent IA qui répond aux questions hors horaires.",
          gain: "Score Lighthouse 98. +35% de réservations directes. Économie de 4 000€/an sur TheFork.",
        },
        {
          secteur: "Bistrot de quartier",
          probleme: "Pas de site internet. Clients qui trouvent des infos incorrectes sur Google (horaires, adresse). Avis non gérés.",
          solution: "Site vitrine simple avec horaires, menu du jour, réservation et agent IA pour les questions fréquentes. SEO local optimisé.",
          gain: "Premier page Google sur 'restaurant [quartier] Bordeaux' en 45 jours.",
        },
        {
          secteur: "Restaurant avec click & collect",
          probleme: "Commandes click & collect gérées par téléphone. Erreurs, attentes, oublis en service.",
          solution: "Système de commande en ligne intégré au site avec agent IA qui confirme et notifie à la bonne heure.",
          gain: "+40% de commandes click & collect. 0 erreur sur 3 mois.",
        },
      ]}
      faqs={[
        { q: "Quel budget pour un site restaurant à Bordeaux ?", a: "Un site vitrine avec menu digital et réservation démarre à 800€ HT. Avec agent IA et click & collect autour de 1 500€ HT. Devis précis après l'appel." },
        { q: "Comment mettre à jour le menu moi-même ?", a: "On configure un espace d'administration simple. Vous modifiez le menu du jour en moins de 2 minutes, sans compétence technique." },
        { q: "L'agent IA peut prendre des réservations directement ?", a: "Oui. Il peut recueillir les demandes de réservation (date, heure, couverts, intolérances) et les transmettre ou les valider selon votre disponibilité." },
        { q: "Vous gérez aussi le référencement local ?", a: "Oui. On optimise Google My Business, les avis, les balises schema.org et le contenu pour vos requêtes cibles." },
      ]}
      faqsTitle="Questions fréquentes — site web restaurant Bordeaux"
      ctaTitle="Plus de couverts grâce à un site qui convertit"
      ctaDesc="Devis gratuit, sans engagement. À Bordeaux ou en visio."
      ctaButton="Demander un devis gratuit"
    />
  );
}
