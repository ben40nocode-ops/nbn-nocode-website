J'ai maintenant assez de matière pour un audit complet. Les pages services (comme automatisation-ia) sont bien plus concrètes et orientées résultat que la page tarifs — c'est un point clé de l'incohérence. Je synthétise.

---

# Audit de l'offre commerciale NBN IA — point de vue "qu'est-ce qui se vend à un artisan girondin"

**VERDICT : REVISE** — Le site a deux personnalités. Les pages *services* parlent artisan (concret, résultat, "fini les no-shows"). La page *tarifs* et le bloc *PricingPreview* parlent à un DSI parisien (12+ cases, anglais tech, "3 workflows interconnectés"). C'est cette schizophrénie qui tue la conversion, pas le prix.

Fichiers audités :
- `/Users/bertigny/Website/nbn-ia/src/app/tarifs/page.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/PricingPreview.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/SolutionsSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/HeroSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/app/services/automatisation-ia/page.tsx`

**Predictions pré-lecture vs réalité** : j'attendais (1) trop de choix, (2) noms anglais tech, (3) pas d'offre d'appel, (4) features au lieu de résultats, (5) M365 absent. Les 5 sont confirmées, et j'en ai trouvé une 6e non anticipée : **incohérence de ton entre pages services et page tarifs** — la plus dommageable.

---

## 1. LISIBILITÉ DE L'OFFRE — Note : 3/10

Un patron de camping ou un plombier qui arrive sur `/tarifs` voit, en défilant : un tableau récap à 4 lignes, puis **Architecture ×3 + Maintenance ×3 + Websites ×3 + Web Apps ×3 = 12 cartes**, plus 2 bannières "maintenance sur mesure", plus une FAQ. C'est un **catalogue de prestataire tech, pas une offre**.

Preuves concrètes de la surcharge (`tarifs/page.tsx`) :
- 4 familles de produits, chacune en 3 niveaux, sur une seule page.
- Le tableau récap (`tarifs/page.tsx:282-301`) juxtapose "setup unique", "abonnement/mois", "site web" et "web app" — 4 modèles économiques différents mélangés. Un artisan ne sait pas s'il achète une fois, tous les mois, ou les deux.
- Étape 1 / Étape 2 (setup + maintenance) est un **modèle à double paiement** imposé visuellement dès la home (`PricingPreview.tsx:124-199`). Pour quelqu'un qui n'a jamais acheté d'IA, "je paie 450€ ET 159€/mois pour toujours" ressemble à un piège.

**Paralysie du choix : OUI, réelle.** 12 cases sans "recommandé" (tous les plans ont `highlight: false`, vérifié `PricingPreview.tsx:10,16,24` et maintenance `tarifs/page.tsx:60,68,76`). Aucun plan mis en avant = le visiteur doit tout comparer lui-même = il part. La règle "3 options max, une recommandée" n'est respectée dans aucune des 4 grilles.

**Le vrai problème** : la page tarifs répond à "combien coûtent tes technos" alors que l'artisan demande "combien ça coûte de régler MON problème (no-shows, devis en retard, avis Google)". Les pages services savent le faire (`automatisation-ia`), la page tarifs l'a oublié.

---

## 2. PACKAGING — Les noms sont un repoussoir

Inventaire des noms anglais tech (vérifiés dans le code) :
- Maintenance : **"Core Maintenance", "Business Logic", "Full Stack Partner"** (`PricingPreview.tsx:6,14,22`)
- Web apps : **"Basic App", "Advanced App"** (`PricingPreview.tsx:59,67`)
- Features : **"3 workflows interconnectés", "Connexion jusqu'à 6 outils", "Sync temps réel", "SLA performance", "Dashboard admin"**

"Business Logic" ne veut **rien dire** pour un restaurateur. "Full Stack Partner" évoque du recrutement dev, pas un service. Un artisan ne sait pas ce qu'est un "workflow", encore moins "interconnecté".

**Réécritures proposées (résultat, pas techno) :**

| Actuel | Proposé | Angle |
|---|---|---|
| Starter (450€) | **"Je gagne du temps"** ou **"Première automatisation"** | Un problème réglé |
| Business (1 200€) | **"Mon business tourne seul"** | Le process clé automatisé |
| Enterprise (sur devis) | **"Sur mesure complet"** | Éviter le mot "Enterprise" |
| Core Maintenance (159€) | **"Tranquillité"** — on veille, ça marche | Sérénité |
| Business Logic (320€) | **"Sérénité +"** — vos automatisations critiques surveillées | — |
| Full Stack Partner (540€) | **"Partenaire dédié"** — votre expert IA à la demande | Français |
| Basic App / Advanced App | **"Outil métier simple / avancé"** | — |

Les *features* aussi doivent muter : "3 workflows interconnectés" → **"Votre devis, votre agenda et vos relances qui se parlent tout seuls"**.

---

## 3. OFFRE D'ENTRÉE — Le trou béant

**Il n'y a AUCUN produit d'appel à petit prix fixe et à résultat immédiat.** Le point d'entrée le moins cher est "Starter 450€ setup" — déjà un engagement pour quelqu'un qui n'a jamais acheté d'IA et n'a jamais entendu parler de NBN. Avec zéro lead entrant, il manque la marche du bas.

Offres d'appel concrètes qui manquent (toutes évoquées dans les services mais jamais packagées ni prix affiché) :
- **"Vos rappels de RDV automatiques — fini les no-shows"** — prix fixe genre 290€. La promesse existe déjà (`automatisation-ia/page.tsx:38-40`) mais n'est pas un produit achetable.
- **"Vos avis Google en pilote automatique"** — un message après chaque presta (`automatisation-ia/page.tsx:53-56`). Parfait pour restaurateurs/campings/domaines. Aucune offre packagée.
- **"Devis répondu en 5 min"** — existe en feature (`automatisation-ia/page.tsx:33-36`), pas en produit.

### Microsoft 365 : opportunité NON exploitée — confirmé

Recherche effectuée : **zéro occurrence de "Microsoft", "Outlook", "Office 365" ou "M365"** dans les fichiers de l'offre. Le site parle "Make/Zapier", "Google Agenda", "Slack" (`PricingPreview.tsx:90,25`, `SolutionsSection.tsx:27`). Or la cible (artisans, hôtels, PME) tourne massivement sous **Outlook / Microsoft 365**, pas sous Google Workspace ou Slack. "Accès direct Slack" comme argument premium (`PricingPreview.tsx:25`) est même contre-productif : aucun plombier girondin n'utilise Slack.

**Opportunité forte et différenciante** : une offre **"Automatisation Microsoft 365 / Outlook"** explicite — trier/répondre les mails Outlook, automatiser le calendrier Outlook, générer devis depuis Excel, alertes Teams. C'est un angle que **personne ne vend localement** et qui parle exactement au parc logiciel réel de la cible. À mettre en offre d'appel ET en page service dédiée.

---

## 4. PREUVE DE VALEUR — Features, pas résultats (sur la page tarifs)

Sur `/tarifs`, **aucune offre ne promet un résultat chiffré**. Ce sont des specs :
- "Monitoring 24/7 de 3 systèmes IA", "2h de maintenance / mois", "Connexion jusqu'à 6 outils", "8+ fonctionnalités", "SLA performance".

Un artisan ne sait pas quantifier la valeur de "6h de dev/maintenance par mois". Il sait quantifier "j'ai récupéré 5h par semaine" ou "je ne rate plus un RDV".

**Ironie** : la home a le bon chiffre — **"2 à 20h gagnées par semaine"** (`HeroSection.tsx:50`) — mais ce bénéfice **disparaît totalement de la page tarifs**. Chaque carte tarif devrait porter une promesse de résultat, ex : Starter → *"~5h/semaine récupérées, rentabilisé en 1 mois"*.

Note : les pages services (`automatisation-ia`) font ça très bien ("fini les oublis et les no-shows", "un devis part dans la minute"). Le savoir-faire existe — il n'a juste pas été appliqué à la page qui décide de l'achat.

---

## 5. COHÉRENCE PRIX / CIBLE

**Le prix n'est pas le problème principal — le packaging du prix l'est.**

- **450€ setup** pour une automatisation d'artisan est **bien positionné** (accessible, crédible). 
- Le combo **setup + abonnement obligatoire** (dès la home) est le vrai frein psychologique : "je paie et ensuite je paie encore tous les mois". La maintenance devrait être présentée comme **optionnelle et rassurante** (elle l'est en FAQ `tarifs/page.tsx:428-431`, mais le layout Étape 1 / Étape 2 la rend obligatoire à l'œil).
- **"Sur devis" / "Custom"** : n'effraie pas sur le haut de gamme (Enterprise), c'est normal. Mais **"Forfait maintenance sur mesure"** en bannière (`tarifs/page.tsx:382`, `PricingPreview.tsx:244`) sans **aucun** point de départ chiffré fait fuir : l'artisan lit "cher et opaque". Mettre un "à partir de X€/mois".
- **Web apps à 2 500-5 000€** sur la même page que l'artisan à 450€ : ça brouille le positionnement. L'artisan se dit "c'est pas pour moi ici". À **séparer** (page dédiée, ou masquer de la vue artisan).

Réserve honnête : sans données de trafic/analytics réelles, l'affirmation "le combo fait fuir" est une hypothèse comportementale forte mais non mesurée (zéro lead ≠ preuve que c'est le prix). Voir Open Questions.

---

## Ce qui MANQUE (gap analysis)

- **Pas de plan "recommandé"** dans aucune grille → paralysie.
- **Pas d'offre d'appel à prix fixe** sous 450€.
- **Microsoft 365 / Outlook absent** alors que c'est le parc de la cible.
- **Pas de preuve/résultat** sur la page qui vend (que des specs).
- **Pas de réassurance "combien de temps ça me rapporte"** au moment du prix.
- **Pas de segmentation par métier** dans les tarifs (un camping et un plombier voient la même grille de 12 cases).
- **"Slack" et "Zapier" comme arguments** : jargon/outils que la cible n'utilise pas.
- **Node.js / M365 dans la stack réelle** mais invisibles → sous-exploitation d'un différenciateur.

---

## TOP 5 RESTRUCTURATIONS D'OFFRE (par impact)

### 1. Créer une OFFRE D'APPEL à prix fixe (impact max, effort min)
Une seule promesse, un seul prix, zéro abonnement obligatoire. Ex :
> **"Fini les no-shows — 290€"** · Vos rappels de RDV automatiques par SMS/email, installés en 3 jours. Vous ne ratez plus un client.

Décline en 3 produits d'appel (RDV, avis Google, devis). C'est la marche du bas qui manque pour transformer du trafic froid.

### 2. Renommer TOUT en français-résultat
"Core Maintenance / Business Logic / Full Stack Partner" → **"Tranquillité / Sérénité+ / Partenaire dédié"**. "Basic App" → "Outil métier". Supprimer "workflow", "SLA", "Full Stack" de toute copy vue par un artisan. Chaque nom = un bénéfice, pas une techno.

### 3. Lancer une offre "Automatisation Microsoft 365 / Outlook"
Angle différenciant que personne ne vend localement, aligné sur le parc réel de la cible.
> **"Votre Outlook qui bosse pour vous"** · Mails triés et répondus, agenda synchronisé, devis générés depuis Excel. À partir de 450€.
Remplacer "Accès direct Slack" (`PricingPreview.tsx:25`) par "Accès direct WhatsApp / Teams".

### 4. Réduire à 3 offres visibles + 1 recommandée, et séparer par cible
Sur la vue artisan/PME : **ne montrer que 3 cartes** (Offre d'appel · Automatisation complète · Sur mesure), une marquée **"Le plus choisi"**. Reléguer Websites et Web Apps sur des pages dédiées (elles brouillent la lisibilité pour l'artisan). Passer un plan en `highlight: true`.

### 5. Mettre le RÉSULTAT sur chaque carte prix
Reprendre le "2 à 20h gagnées/semaine" de la home et l'injecter dans les tarifs. Ex sur Starter :
> **Première automatisation — 450€** · ~5h/semaine récupérées · rentabilisé en 1 mois · sans abonnement obligatoire.
Rendre la maintenance explicitement **optionnelle** visuellement (pas "Étape 2" obligatoire).

---

## Open Questions (non tranchées, faute de données)
- **Le combo setup+abonnement fait-il réellement fuir, ou est-ce le trafic quasi-nul (SEO/notoriété) la vraie cause du zéro lead ?** Hypothèse forte mais à valider avec analytics + 5 entretiens clients cibles. Avec 0 lead, le problème peut être 90% acquisition / 10% offre — l'offre se corrige, mais ne remplacera pas l'absence de trafic.
- **450€ est-il trop cher ou trop peu cher** pour la perception de valeur d'un artisan ? À tester (un prix trop bas peut aussi signaler "pas sérieux").
- Existe-t-il une page `/services/*` ou home qui met DÉJÀ en avant M365/Node ? (non trouvé dans les fichiers audités, mais je n'ai pas lu 100% du `src/app`).

**Ce qu'il faudrait pour passer à ACCEPT** : (1) une offre d'appel prix-fixe, (2) noms français-résultat, (3) un plan recommandé par grille, (4) le bénéfice chiffré sur les cartes, (5) l'angle M365 exploité. Les cinq sont des changements de copy/structure sans refonte technique — rapides à livrer.