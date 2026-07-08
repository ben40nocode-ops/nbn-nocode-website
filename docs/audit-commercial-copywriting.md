J'ai lu l'intégralité des fichiers. Voici l'audit copywriting complet.

---

# Audit copywriting — nbn-ia.fr (cible : artisans / TPE / PME locales, Gironde & Charente-Maritime)

## Résumé

Le site est déjà bien au-dessus de la moyenne : le ton "vous", la promesse "outils qui travaillent à votre place" et les exemples métier (RealisationsSection) sont solides. Mais trois fuites récurrentes cassent l'ancrage artisan : (1) le champ lexical tech reste présent aux endroits stratégiques (hero "process", section prix "Setup unique", plans "Monitoring 24/7", "Full Stack Partner", "Business Logic"), (2) la persuasion démarre par la solution sans jamais verbaliser la douleur du client AVANT, et (3) le mot "audit" — répété partout comme CTA — évoque le contrôle plus que le cadeau. Le levier le plus rentable : réécrire le hero pour dire le bénéfice concret (le devis, l'appel manqué, la soirée récupérée) et insérer une micro-section "problème" avant les solutions.

---

## 1. HERO — "Vos process tournent. Même quand vous dormez."

**Fichier :** `HeroSection.tsx:19-21`

**Diagnostic :**
- **"process" n'est PAS un mot d'artisan.** Un plombier dit "mes devis", "mes chantiers", "mes rappels de RDV", "mon téléphone qui sonne". "Process" est un mot de consultant/corporate. Il crée une micro-distance dès le premier mot lu.
- L'accroche fait **du style avant le bénéfice**. "Même quand vous dormez" est une belle image, mais elle repose sur un mot creux ("process") au lieu d'une chose tangible. Le lecteur doit fournir l'effort de traduire "process → mon activité". En copywriting, chaque effort de traduction demandé au prospect coûte de l'attention.
- Le sous-titre (`HeroSection.tsx:24-25`) sauve la promesse en donnant les exemples concrets ("Réponses clients, devis, rappels, relances") — mais ce contenu devrait irriguer le H1, pas seulement le rattraper en dessous.

**3 alternatives testables, ancrées métier :**

| # | Accroche | Angle |
|---|----------|-------|
| A | **Vos devis partent tout seuls. Vos clients rappelés. Même la nuit.** | Bénéfice tangible (devis + relance), garde le "même la nuit" |
| B | **Répondre, deviser, relancer. Pendant que vous êtes sur le chantier.** | Verbes d'action métier + situation concrète de l'artisan |
| C | **Le devis part 10 minutes après l'appel. Pas 3 jours après.** | Spécificité chiffrée, contraste douleur/résultat |

> Note : garder "process" seulement si vous testez A/B et qu'il gagne — improbable sur cette cible. La version C est la plus risquée mais la plus mémorable ; la A est la plus "safe" tout en restant concrète.

---

## 2. Jargon par section — traduction "langage artisan"

### HeroSection.tsx
| Ligne | AVANT (jargon) | APRÈS (artisan) |
|---|---|---|
| 19 | "Vos **process** tournent" | "Vos **devis / relances** partent tout seuls" |
| 50 | "2 à 20h **gagnées** par semaine" | OK, mais "gagnées" reste abstrait → "2 à 20h **récupérées** par semaine" (plus physique) |
| 50 | "100% **sur mesure**" | Correct pour la cible. À garder. |

### SolutionsSection.tsx
| Ligne | AVANT | APRÈS |
|---|---|---|
| 8 | "sans que vous **leviez le petit doigt**" | Bon, mais cliché. → "sans décrocher votre téléphone" |
| 26 | "on les fait **parler entre eux**" | Bon (image concrète, à garder) |
| 53 | "Quatre façons de **gagner du temps**" | Vague (voir §3). → "Quatre tâches qu'on fait tourner à votre place" |
| 35 | "**qualifie les demandes**" | "trie les vraies demandes des curieux" |

### AboutSection.tsx
| Ligne | AVANT | APRÈS |
|---|---|---|
| 4 | "**Systèmes** sur mesure — jamais de **template**" | "template" = jargon web. → "jamais de solution toute faite recopiée d'un autre client" |
| 5 | "**Technologie de pointe**" | Vague et auto-congratulant. → "des outils que vous n'auriez pas le temps d'installer vous-même" |
| 6 | "mise en place unique + **abonnement mensuel évolutif**" | "évolutif" = jargon. → "abonnement mensuel qui grandit avec vous" |
| 30 | "je construis **un système** qui s'en charge" | "système" revient trop souvent (voir note transverse). Alterner avec "un outil", "une automatisation" |

### RealisationsSection.tsx — **la meilleure section du site**
| Ligne | AVANT | APRÈS |
|---|---|---|
| 5 | "**Workflow** d'accueil complet automatisé" | "workflow" = seul mot tech de la section, dommage. → "Tout l'accueil se fait tout seul" |
| 23 | "Voici ce qu'un **système NBN IA** peut faire" | "un système NBN IA" → "ce qu'on peut mettre en place chez vous" |

Le reste (les 6 cas) est excellent : "sans avoir décroché son téléphone", "se concentre sur sa cuisine, pas sur son téléphone", "Le gérant dort — le système travaille". C'est le modèle à propager partout ailleurs.

### TestimonialsSection.tsx
- **Problème de fond, pas de jargon : la section s'appelle "Testimonials" mais ne contient AUCUN témoignage.** Ce sont 3 arguments (`reasons`, ligne 3). Titre "Un interlocuteur, pas une agence" (l.30) = bon. Mais la promesse implicite du nom de fichier (preuve sociale) n'est pas tenue. Voir §4.

### ClaudeSection.tsx
| Ligne | AVANT | APRÈS |
|---|---|---|
| 10 | "Pourquoi **ça marche**" | OK |
| 13 | "les **outils d'intelligence artificielle les plus avancés** du marché" | Un peu vantard/abstrait, mais l'atterrissage "ceux qu'utilisent les grandes entreprises" le sauve. À garder. |
| 16 | "**Certifié Anthropic Architecture**" | "Architecture" en anglais = jargon. → "Certifié par Anthropic (les créateurs de Claude)" |

### PricingPreview.tsx — **la section la plus abîmée par le jargon**
| Ligne | AVANT | APRÈS |
|---|---|---|
| 117 | "**Setup** unique. **Maintenance** continue." | "On installe une fois. On entretient ensuite." |
| 9 | "**Monitoring 24/7** de 3 **systèmes IA**" | "On surveille vos automatisations jour et nuit" |
| 6 | "**Core Maintenance**" | Nom de plan en anglais. Un plombier ne choisit pas "Core Maintenance". → "Suivi Essentiel" |
| 16 | "**Business Logic**" | → "Suivi Pro" / "Cœur de métier" |
| 22 | "**Full Stack Partner**" | Jargon dev pur. → "Partenaire complet" / "Sur-mesure permanent" |
| 24 | "Un **architecte IA** dédié" | "Quelqu'un dédié à faire évoluer vos outils" |
| 25 | "6h de **dev**/maintenance" | "dev" = jargon. → "6h de travail sur votre système / mois" |
| 25 | "Accès direct **Slack**" | Un artisan n'a pas Slack. → "Accès direct par WhatsApp" |
| 90 | "1 **workflow** Make/Zapier" | Les noms d'outils (Make/Zapier) ne parlent pas au client. → "1 automatisation" |
| 96 | "3 **workflows interconnectés**" | "3 automatisations reliées entre elles" |
| 71 | "**Sync temps réel**", "**Dashboard admin**" | "Mise à jour instantanée", "Tableau de bord" |
| 209, 263 | Titres "**Websites**" / "**Web Apps**" | Le reste du site est en français. → "Sites internet" / "Applications" |
| 81 | "**Contacter nous**" | Faute + anglicisme d'ordre. → "Nous contacter" |

### FaqSection.tsx — très bon dans l'ensemble
| Ligne | AVANT | APRÈS |
|---|---|---|
| 17 | "la conception, les tests, le **déploiement**, la maintenance" | "déploiement" = jargon. → "la mise en route" |
| 29 | "on vous rend votre **système proprement documenté**" | "on vous rend vos automatisations, avec le mode d'emploi écrit noir sur blanc" |

### automatisation-ia/page.tsx — la meilleure page pour l'ancrage métier
- Ligne 73 : "vos **processus** tournent 24h/24" → même remarque que le hero : "vos automatisations / vos tâches tournent". Cohérence à assurer avec la correction du hero.
- Le reste (l.30-55) est exemplaire : "un devis part dans la minute", "Fini les oublis et les no-shows", "stock bas". C'est la référence.

**Note transverse — le mot "système" :** il apparaît ~20 fois sur la home. Pris isolément il passe, mais sa répétition crée un léger effet "solution informatique lourde". Alterner avec : "vos automatisations", "vos outils", "ce qu'on a mis en place", "votre assistant". Réserver "système" aux moments où l'on veut justement signaler la robustesse.

---

## 3. Spécificité — où le site reste vague

| Endroit | Formulation vague actuelle | Réécriture spécifique |
|---|---|---|
| `SolutionsSection.tsx:53` | "Quatre façons de **gagner du temps**" | "Le devis part pendant que vous êtes sur le chantier" (angle) |
| `HeroSection.tsx:24` | "les tâches **répétitives** de votre business" | "Répondre au 15e mail de la journée, refaire le même devis, rappeler pour confirmer un RDV" |
| `AboutSection.tsx:30` | "j'identifie **ce qui vous prend du temps**" | "ces 3 heures par jour perdues au téléphone et sur les mails" |
| `ClaudeSection.tsx` stat | "**Le temps gagné** dépasse souvent le coût" | "Un devis raté récupéré = l'abonnement du mois remboursé" |
| `automatisation-ia:163` | "Prêt à **gagner du temps** chaque semaine ?" | "Prêt à récupérer vos soirées ?" (l'artisan qui rappelle le soir, cf. FAQ l.25) |
| CtaSection / About callout | "une liste concrète de ce qui peut être automatisé" | Bon — mais ajouter "avec le nombre d'heures que ça vous fait gagner", ce que fait déjà `automatisation-ia:164` |

Le principe : le site possède déjà les munitions spécifiques (RealisationsSection, page service, FAQ l.25 "arrête de passer ses soirées à rappeler des clients"). Il suffit de **remonter ces phrases concrètes vers le haut de la home**, là où ce sont des généralités qui accueillent le visiteur.

---

## 4. Structure de persuasion de la home

**Ordre actuel des sections** (à confirmer dans la page qui les assemble — non lue ici, mais l'ordre logique déduit) :
Hero → Solutions → About → Realisations → Testimonials(=arguments) → Claude → Pricing → FAQ → Cta.

**Diagnostic — le problème du client n'est JAMAIS verbalisé avant la solution.**

La séquence classique problème → solution → preuve → offre → action a son **premier maillon manquant**. Dès le hero, on est déjà dans la solution ("On prend en charge les tâches répétitives"). Le visiteur n'a jamais lu, formulée à sa place, la douleur qu'il ressent : *"Vous passez vos soirées à faire des devis. Vous ratez des appels pendant que vous êtes sous un évier. Un client sur trois ne rappelle jamais parce que votre devis est parti trois jours trop tard."*

Sans ce miroir, le prospect ne se dit pas "il me comprend" — il se dit "on me vend quelque chose". La preuve (Realisations) et l'offre (Pricing) arrivent, mais sur un lecteur qui ne s'est pas encore reconnu.

**Recommandation — insérer une section "Problème" (agitation) juste après le Hero :**

> **Titre :** "Vos journées ressemblent à ça ?"
> - Vous répondez aux mêmes questions clients 20 fois par jour.
> - Vous faites vos devis le soir, après le chantier — et parfois trop tard.
> - Le téléphone sonne pendant que vous avez les mains dans le cambouis.
> - Un client sur trois ne rappelle pas : il a trouvé quelqu'un de plus rapide.
> *(transition) → "Et si tout ça se faisait tout seul ?"* → enchaîne sur Solutions.

**Sur l'ordre :**
- ✅ Solutions avant Realisations = bon (on explique quoi, puis on prouve).
- ⚠️ **Testimonials mal nommée / mal placée** : ce sont des arguments de confiance ("un interlocuteur pas une agence"), pas des preuves sociales. Effort/impact fort : **récupérer 2-3 verbatims clients réels** (même informels) et créer une vraie section preuve. À défaut, renommer la section pour ne pas promettre implicitement des témoignages. Note mémoire projet : la contrainte "vraies preuves only, pas de faux avis" est respectée ici — ne pas inventer de témoignages ; solliciter les vrais clients Nortrip/beta.
- ✅ Pricing après la preuve = bon.
- ✅ FAQ (gestion des objections) juste avant le CTA final = manuel de persuasion respecté.

**Verdict structure :** l'ossature preuve → offre → objections → action est bonne. Le trou, c'est **l'absence d'agitation du problème en tête de page**. C'est le levier structurel n°1.

---

## 5. CTAs — le mot "audit"

**Fichiers :** `HeroSection.tsx:35`, `CtaSection.tsx:28`, `automatisation-ia:108,167`, `AboutSection.tsx:51`, `TestimonialsSection.tsx:17`, FAQ l.40.

**Diagnostic :**
- **"Audit" est un mot à double tranchant pour un artisan.** Dans son quotidien, "audit" = URSSAF, contrôle fiscal, expert-comptable qui débarque. Le mot porte une charge de contrôle/jugement, pas de cadeau. Il rassure une PME structurée ; il crispe un plombier ou un restaurateur.
- Le contenu derrière est pourtant excellent et sans risque (`CtaSection.tsx:16-18`, FAQ l.40 : "un appel d'1h, vous repartez avec une liste concrète, zéro engagement"). Le contenant ("audit") trahit le contenu (un échange offert).
- **"Décrire mon besoin (2 min)"** (`HeroSection.tsx:42`) est bon — le "(2 min)" abaisse le coût perçu. À garder.

**Alternatives au CTA principal (à A/B tester) :**

| # | CTA | Pourquoi |
|---|-----|----------|
| 1 | **Réserver mon appel gratuit (1h)** | "appel" est neutre et familier ; garde le "gratuit" |
| 2 | **On regarde ensemble ce qu'on peut automatiser** | Reprend le ton "ensemble" déjà présent dans le site (About callout) |
| 3 | **30 min pour voir ce que je peux vous faire gagner** | Bénéfice + engagement de temps minimal |
| 4 | **Mon diagnostic gratuit** | Si vous tenez à un mot "expert" : "diagnostic" évoque le garagiste/médecin (résoudre un problème) plutôt que le contrôleur (juger) |

> Recommandation : garder le format "1h offert" partout (cohérent, déjà en place), mais remplacer le mot **audit → appel / diagnostic**. Attention à la cohérence : le mot est répété dans 6+ fichiers, il faut le changer partout d'un coup.

---

## Les 10 réécritures les plus impactantes (AVANT → APRÈS)

| # | Fichier:ligne | AVANT (texte exact du site) | APRÈS (proposition) |
|---|---|---|---|
| 1 | `HeroSection.tsx:19-20` | "Vos process tournent. Même quand vous dormez." | "Vos devis partent, vos clients sont rappelés. Même quand vous dormez." |
| 2 | *(nouvelle section après Hero)* | *(rien — le problème n'est jamais énoncé)* | "Vos journées ressemblent à ça ? Devis le soir, appels ratés sur le chantier, clients qui ne rappellent pas. Et si tout ça se faisait tout seul ?" |
| 3 | `HeroSection.tsx:35` (+5 autres fichiers) | "Réserver l'audit gratuit" | "Réserver mon appel gratuit (1h)" |
| 4 | `SolutionsSection.tsx:53` | "Quatre façons de gagner du temps." | "Quatre tâches qu'on fait tourner à votre place." |
| 5 | `PricingPreview.tsx:117` | "Setup unique. Maintenance continue." | "On installe une fois. On entretient ensuite." |
| 6 | `PricingPreview.tsx:6,16,22` | "Core Maintenance" / "Business Logic" / "Full Stack Partner" | "Suivi Essentiel" / "Suivi Pro" / "Partenaire complet" |
| 7 | `PricingPreview.tsx:25` | "Accès direct Slack" | "Accès direct par WhatsApp" |
| 8 | `HeroSection.tsx:24` | "On prend en charge les tâches répétitives de votre business." | "Répondre au 15e mail, refaire le même devis, rappeler pour confirmer un RDV — on s'en charge." |
| 9 | `RealisationsSection.tsx:5` | "Workflow d'accueil complet automatisé : email de bienvenue, code d'accès…" | "Tout l'accueil se fait tout seul : email de bienvenue, code d'accès…" |
| 10 | `ClaudeSection.tsx:16` | "Certifié Anthropic Architecture." | "Certifié par Anthropic, les créateurs de Claude." |

---

## Trade-offs à connaître

| Décision | Pour | Contre |
|---|---|---|
| Hero concret (devis/clients) vs stylé ("process") | Ancrage métier immédiat, moins d'effort de traduction | Perd un peu d'élégance/universalité ; enferme sur "artisan" (moins bon si vous ciblez aussi des PME plus corporate) |
| Ajouter une section "Problème" | Le prospect se reconnaît, +conversion | Rallonge la page ; risque de ton "négatif" si mal dosé — garder court et enchaîner vite sur la solution |
| "audit" → "appel/diagnostic" | Moins anxiogène pour artisan | "audit" rassure davantage une cible PME structurée ; perte du côté "sérieux/expert" |
| Franciser les noms de plans/sections | Cohérence, accessibilité | Perte de l'effet "premium/tech" que certains prospects valorisent ; à trancher selon le positionnement prix |

**Note de cohérence de marque** (mémoire projet) : les contenus publics doivent être en voix **NBN IA / Benjamin solo**. Le site mélange "je" (About, Testimonials) et "on/nous" (Hero, Solutions, FAQ). Ce n'est pas un problème de jargon mais de voix : à uniformiser. Le "on" collectif peut sembler contredire le positionnement "vous parlez au fondateur, pas une agence" (`TestimonialsSection.tsx:11`). Recommandation : garder le "je" partout où c'est un engagement personnel (About, garantie, CTA), le "on/nous" étant acceptable pour décrire le travail livré — mais trancher explicitement, car le hero en "on" et le About en "je" créent une légère dissonance sur qui est réellement en face du client.

---

**Fichiers analysés :**
- `/Users/bertigny/Website/nbn-ia/src/components/home/HeroSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/SolutionsSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/AboutSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/RealisationsSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/TestimonialsSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/PricingPreview.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/FaqSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/ClaudeSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/components/home/CtaSection.tsx`
- `/Users/bertigny/Website/nbn-ia/src/app/services/automatisation-ia/page.tsx`