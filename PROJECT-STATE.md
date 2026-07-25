# État du projet — source de vérité

> Document de référence écrit le 25 juillet 2026, avant la migration vers Nuxt.
> But : travailler à partir de faits vérifiés plutôt que de mémoire. Toute
> information absente d'ici doit être demandée à Arnaud, jamais inventée.

## 1. Faits sur le parcours (validés par Arnaud)

| Expérience | Période | Intitulé utilisé | Statut du fait |
|---|---|---|---|
| **Epitech Montpellier** | Actuel, date de début **inconnue** | « Direction pédagogique » (intitulé exact **non confirmé**) | Poste actuel |
| **Sween** | 2022 — 2025 | « Développement » (intitulé exact **non confirmé**) | Société arrêtée en 2025 |
| **TROA** | Alternance → sept. 2022, date de début **inconnue** | « Développeur créatif » | Agence à Montpellier |

### Détails vérifiés
- **Sween** : pionnier français du pilotage temps réel de l'autoconsommation
  collective (ACC) solaire. **Technologie brevetée appartenant à Sween.**
  ⚠️ **Arnaud n'est PAS nommé sur le brevet** → ne jamais suggérer qu'il en est
  inventeur. Le brevet est un élément de contexte sur l'entreprise, rien de plus.
- **Reprise par Sunbiose** (sunbiose.fr) : actifs, base de code et PI repris en
  janvier 2026 (source : pv-magazine.fr, tecsol). ✅ **La base de code n'a pas
  changé depuis le départ d'Arnaud de Sween** → le code qu'il a écrit tourne
  toujours. C'est son argument de preuve le plus fort.
- **TROA** : agence primée (FWA, Awwwards, Grand Prix Stratégies), axée
  éco-conception. Arnaud a travaillé sur **la plupart des réalisations** de
  l'agence jusqu'en sept. 2022. Réalisations citées : Canelés Baillardran,
  Grotte des Demoiselles, Opéra de Montpellier, Zénith de Montpellier,
  Entav-Inra, Mat & Seb, Elorell, Addictopôle Occitanie, Evielab, 36Velos.
  ⚠️ **On ne sait pas** quels projets étaient primés, ni lesquels étaient
  personnellement les siens, ni le niveau des prix.
- **Epitech** : école d'informatique française, pédagogie par projet sans cours
  magistraux. Arnaud pilote la pédagogie du campus de Montpellier.
- Contact : arnaud.michel.dev@gmail.com ·
  [LinkedIn](https://www.linkedin.com/in/arnaud-michel11/) ·
  [Instagram](https://www.instagram.com/arnaudmp/)

### ⛔ Chiffres à NE JAMAIS inventer (aucun n'est connu à ce jour)
Nombre d'étudiants · d'intervenants · de personnes managées · budget ·
date de début chez Epitech · nombre de boucles ACC / sites / bâtiments /
points de mesure · stack technique de Sween · taille des équipes ·
nombre de projets TROA · niveau/année des prix · métriques d'éco-conception
(EcoIndex, poids de page) · taux d'insertion · dates de début d'alternance.

## 2. Direction artistique (validée par itérations)

- **Noir et blanc strict.** `--bg: #050505`, `--ink: #f5f5f5`,
  `--ink-dim: #8a8a8a`. Aucune couleur d'accent (demande explicite).
- **Typo** : pile système, « Avenir Next » en tête. Titres en 800, uppercase,
  avec effet outline (`-webkit-text-stroke`) sur une partie des mots.
- **Glassmorphisme** sur les éléments flottants (header au scroll, pills,
  cellules bento).
- **Curseur custom** : anneau qui suit la souris avec easing, grossit au survol
  des éléments interactifs (inspiré de kentokawazoe.com). `cursor: none` sur
  pointeur fin, désactivé au tactile.
- **Loader** : « AM. » + barre de progression, **1250 ms, au chargement de page
  uniquement** (jamais sur les navigations internes).
- **Scroll** : locomotive-scroll v5 (basé sur Lenis → scroll natif préservé,
  indispensable pour la caméra Three.js). Reveals via `.is-inview`.
- **Mode sobriété** : bouton qui coupe le rendu 3D (clin d'œil à
  l'éco-conception de TROA). Uniquement sur la page d'accueil.

### Scènes 3D (une par section, monochromes)
- **Accueil / hero** : pas de 3D (typo + sommaire éditorial en CSS pur).
- **Epitech** : constellation de nœuds blancs reliés (réseau, transmission).
- **Sween** : maisons + immeubles avec fenêtres émissives et panneaux solaires
  détaillés, reliés par des arcs sur lesquels voyagent des « comètes »
  lumineuses (flux d'énergie bâtiment-à-bâtiment). **Pas de soleil visible.**
- **TROA** : fenêtre de navigateur 3D en fil de fer + curseur qui navigue.

### Refusé explicitement (ne pas réintroduire)
Couleurs d'accent · triangle façon Vercel · cartes hover du hero · galaxie de
particules · numéros géants 01/02/03 en filigrane · animation de transition
« curtain » au clic · water lens à la souris · glitch RGB au curseur ·
modèles 3D canelé/rugby/note/raisin · mention « Prototype — Three.js · Vite ».

## 3. Contenu et i18n

- Bilingue FR/EN, **FR par défaut**, bascule persistée dans `localStorage`
  (clé `am-lang`), pas de préfixe d'URL actuellement.
- Source de vérité du texte : l'objet `translations` de `src/i18n.js`
  (69 clés par langue, parité vérifiée automatiquement).
- Noms propres non traduits (Epitech, Sween, TROA, noms de projets).

## 4. Audit copywriting/RH (25 juillet 2026) — corrections à appliquer

### Erreurs de langue en anglais (aucune information supplémentaire requise)
| Actuel | Corriger en | Raison |
|---|---|---|
| Transmission | Mentoring / Curriculum | En anglais = boîte de vitesses |
| supporting the teams | coaching / leading | « support » = assister un responsable → dégrade le rôle |
| Development (Sween) | Software engineering | Dans l'énergie, « development » = foncier/permis/financement |
| taken over by | **acquired by** | « taken over » connote une OPA hostile |
| Head of Education | **Academic Director** | Évoque un poste de médiation en musée/EdTech |
| Campus life | Industry partnerships | Lu comme de l'animation étudiante |
| Creation | Craft / Creative | Sens théologique en anglais |
| care for detail | attention to detail | Non idiomatique |
| Today (date) | Now / 2025 — now | Ressemble à un bug de placeholder |
| the 3D render | the 3D scene | Un « render » est le résultat, pas le processus |
| eco-design | sustainable web design | Terme reconnu (W3C WSG 1.0, calqué sur WCAG) |
| digital sobriety | à gloser | Calque quasi exclusivement français |
| Apprenticeship (seul) | Work-study apprenticeship | « Apprenticeship » seul = métiers manuels en anglais US |

### Terminologie énergie (à utiliser)
- **« energy sharing »** = terme montant, défini par la directive (UE) 2024/1711
  art. 15a, transposition échue **juillet 2026**. Plus recherché que
  « collective self-consumption » (registre réglementaire).
- ⚠️ « energy community » **n'est pas** un synonyme d'ACC (c'est une entité
  juridique). Ne pas les confondre.
- `clés de répartition` → **allocation keys** · `Enedis` → **the French DSO** ·
  `pilotage` → **control / orchestration** (jamais « piloting »).

### Diagnostic de fond (FR et EN)
1. Textes écrits à l'infinitif = registre **fiche de poste**, pas de bilan.
2. `sweenBody` parlait de l'entreprise, **jamais d'Arnaud** — pas un « je ».
3. « J'ai contribué à » = verbe le plus faible du français pro, alors qu'il
   était développeur principal.
4. **Zéro chiffre, zéro techno** sur tout le site (ironie : le site est en
   Three.js et ne le dit pas).
5. Fil rouge « le soin du détail » trop faible. La vraie histoire :
   **un dev d'expériences techniques exigeantes passé de l'autre côté pour
   former la relève** — une direction pédagogique qui a réellement codé en prod
   est rare et recherchée.
6. Deux dates ouvertes (Epitech et TROA sans début) → un lecteur habitué aux CV
   en déduit qu'on cache une durée.

### État d'avancement des corrections
- ✅ FR `sweenBody` réécrit (recentré sur Arnaud + fait Sunbiose/code).
- ⏳ FR `kicker` : « Portfolio — prototype » → « Portfolio — 2026 » **non appliqué**
  (la chaîne existe dans les deux langues, édition à faire ciblée par langue).
- ⏳ Toutes les corrections EN du tableau ci-dessus : **non appliquées**.
- ⏳ Réécritures de fond : **en attente des chiffres d'Arnaud**.

## 5. Déploiement

- Vercel, projet `am-engineering/portefolio`, team `am-engineering`.
- Production : https://portefolio-nu-six.vercel.app
- Commande : `npx vercel deploy --prod --yes` (CLI déjà authentifié).
- ⚠️ La version en ligne **date d'avant** les pages dédiées, le curseur,
  locomotive-scroll et le glassmorphisme.

## 6. Architecture avant migration Nuxt

- Vite multi-pages : `index.html`, `epitech.html`, `sween.html`, `troa.html`
  (entrées dans `vite.config.js`).
- `src/main.js` — scène Three.js (accueil uniquement, ~520 kB / 133 kB gzip).
- `src/transitions.js` — loader, curseur, header glass.
- `src/scroll.js` — locomotive-scroll v5.
- `src/page.js` — spotlight des cellules bento.
- `src/i18n.js` — dictionnaire + application au DOM.
- `src/style.css` — styles globaux · `src/bento.css` — pages dédiées.
- Pages dédiées : ~14 kB gzip (ne chargent pas Three.js).
- **Pas de dépôt git** → aucune suppression sans validation.
