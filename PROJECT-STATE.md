# État du projet — source de vérité

> Document de référence écrit le 25 juillet 2026, avant la migration vers Nuxt.
> But : travailler à partir de faits vérifiés plutôt que de mémoire. Toute
> information absente d'ici doit être demandée à Arnaud, jamais inventée.

## 0. Mise à jour du 10 novembre 2026 — à lire avant le reste

- **Emplacement** : le projet vit maintenant dans
  `/Users/arnaudmichel/Documents/04-Code/portfolio-am` (le §6 est périmé).
- **Arnaud a quitté Epitech en août 2026** et cherche un poste de développeur,
  tech lead ou engineering manager hands-on (CDI ou freelance, Montpellier ou
  remote). Le portfolio devient un outil de candidature.
- ⚠️ **Le site en production est donc faux** : il affiche « Direction
  pédagogique @ Epitech » et « Aujourd'hui » comme poste actuel.
- **Nouvelle source de vérité pour les faits** :
  `../candidature-pipeline/profile/master.yaml`. Elle lève la plupart des
  inconnues du §1 (intitulés exacts, dates au mois, 15 personnes encadrées,
  170 étudiants, 7 promotions, stack Sween). En cas d'écart avec le §1,
  `master.yaml` l'emporte.
- **Écarts à faire confirmer par Arnaud** (ancien site → `master.yaml` ; la
  version « Relevé » applique déjà les valeurs de `master.yaml`) :
  Sween « 2022 — 2025 » → mars 2023 à févr. 2025 · TROA « Développeur
  créatif », alternance → « Développeur Front-end », oct. 2020 à sept. 2022 ·
  Epitech « Direction pédagogique » → « Responsable Tous Programmes » puis
  « Responsable Pédagogique Régional » · LinkedIn `arnaud-michel11` →
  `arnaudmichel11`.
- **L'interface « Relevé » est devenue le site** (demande d'Arnaud du
  10 novembre 2026, au soir). Une source de faits, trois lectures.
  - Le site est maintenant **une seule page** (`app/pages/index.vue`). La
    lecture vit dans l'URL (`?profil=dev|lead|em`), la langue dans le chemin
    (`/` en français, `/en` en anglais) — et non plus `&lang=en` comme dans le
    prototype.
  - **Faits** : `app/data/profile.js`, recopié de `master.yaml`. C'est le seul
    endroit où modifier un intitulé, une date ou un chiffre. Les libellés
    d'interface sont dans `i18n/locales/`.
  - **Retirés** : les pages de poste `/epitech`, `/sween`, `/troa` (redirigées
    en 302 vers `/#parcours`), la scène Three.js, locomotive-scroll, et les
    dépendances `three` et `locomotive-scroll`. Tout reste récupérable au
    commit `526fd27`. Les §2 (scènes 3D), §3, §4 et §7 décrivent donc
    l'**ancienne** version ; du §2 ne s'appliquent plus que la palette, la
    typographie, le verre dépoli, le curseur, le loader et la liste des refus.
  - Le pied de page affiche le poids réel de la page, mesuré dans le
    navigateur : environ 125 ko gzip avec Nuxt (le prototype autonome en
    faisait 20).
  - Le prototype d'origine reste dans `concepts/releve/index.html` pour
    référence ; il n'est plus la version à jour et duplique les faits.
  - **Non déployé** : la production sert toujours l'ancienne version, fausse.
  - Configs de `04-Code/.claude/launch.json` : `portfolio-dev` (port 5174),
    `portfolio-preview` (build de production, port 5175),
    `portfolio-concept-releve` (prototype, port 4310).

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

- Bilingue FR/EN, **FR par défaut**. Depuis la migration Nuxt : **URLs
  préfixées** (FR sur `/`, EN sur `/en/`) et préférence persistée dans un
  **cookie** `am-lang` (plus le `localStorage` d'avant).
- Source de vérité du texte : **`i18n/locales/fr.json` et `en.json`**
  (77 clés par langue, parité vérifiée).
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
- ✅ `kicker` : « Portfolio — prototype » → « Portfolio — 2026 », appliqué dans
  les deux locales.
- ⏳ Toutes les corrections EN du tableau ci-dessus : **non appliquées**.
- ⏳ Réécritures de fond : **en attente des chiffres d'Arnaud**.

## 5. Déploiement

- Vercel, projet `am-engineering/portefolio`, team `am-engineering`.
- Production : https://portefolio-nu-six.vercel.app
- Commande : `npx vercel deploy --prod --yes` (CLI déjà authentifié).
- ✅ **La version Nuxt est en ligne** (déploiement du 25 juillet 2026,
  `dpl_GBTvDM9Cnad7LaaVYGxyssjfEmwV`). Routes `/`, `/en/`, `/epitech`,
  `/sween`, `/troa` et leurs variantes EN vérifiées en 200, redirections 301
  depuis les anciennes `.html` vérifiées en production.
- Le site est désormais **rendu côté serveur** (Nitro), plus un simple dossier
  statique : `nuxt build` produit `.output/`. Alternative si un hébergement
  statique est préféré : `nuxt generate`.
- Les redirections 301 vivent dans `routeRules` de `nuxt.config.ts`, pas dans
  un `vercel.json` — Nuxt génère la config Vercel à partir de là.

## 6. Emplacement et dépôt

- **Le projet vit dans `/Users/arnaudmichel/Documents/Projets perso/portfolio-am`**
  (déplacé le 25 juillet 2026 depuis `.../portefolio`, qui ne conserve que
  `.claude/` pour l'outillage local).
- Dépôt git à la racine de `portfolio-am`, branche `main`.
- Remote : `https://github.com/ArnaudM-Epitech-Mpl/portfolio-am.git`
  (**jamais poussé à ce jour** — à faire par Arnaud ou sur sa demande explicite).
- Commit filet de sécurité `81f29c4` = état vanilla complet et fonctionnel.
  **En cas de doute pendant la migration, tout est récupérable depuis ce commit.**

## 7. Migration Nuxt — état au 25 juillet 2026

### Décisions prises par Arnaud
- **Vue 3 + Nuxt 4** (`nuxt ^4.2`, `vue ^3.5`).
- **i18n : `@nuxtjs/i18n` v10 avec URLs préfixées** → FR sur `/`, EN sur `/en/`,
  avec `hreflang`. C'est un changement d'URLs assumé (meilleur SEO), à répercuter
  sur Vercel.
- Ancienne version : **remplacée** après commit git de sauvegarde (fait).

### ✅ Fait
- `git init` + commit `81f29c4` (filet de sécurité vanilla).
- Déplacement dans `portfolio-am` avec le `.git` du repo GitHub existant.
- `package.json` réécrit pour Nuxt (scripts `nuxt dev/build/generate/preview`).
- Dépendances installées : nuxt, vue, @nuxtjs/i18n, three, locomotive-scroll.
- **`i18n/locales/fr.json` + `en.json`** générés **programmatiquement** depuis
  `src/i18n.js` — 69 clés chacun, **parité vérifiée**. Zéro transcription
  manuelle, donc zéro risque d'invention. Portés à **77 clés** ensuite
  (8 clés `meta*` de titre / description de page, cf. §7).
- **`app/utils/scene.js`** : scène Three.js portée. Les scènes 3D sont
  **inchangées** ; seul le câblage DOM a été paramétré :
  - `export function createScene(canvas)` au lieu d'un `querySelector('#webgl')` ;
  - `setSober(on)` exposé au lieu d'un listener sur `#sobriety` ;
  - `destroy()` ajouté (annule le RAF, retire les listeners, libère géométries /
    matériaux / textures / renderer) — **indispensable en SPA**, sinon chaque
    retour à l'accueil fuirait un contexte WebGL.
  - Validé : compile via esbuild, API conforme.
- CSS copié dans `app/assets/css/main.css` et `bento.css`.

### ✅ Migration terminée (25 juillet 2026)
- `nuxt.config.ts` : module `@nuxtjs/i18n`, CSS globaux, `defaultLocale: 'fr'`,
  `strategy: 'prefix_except_default'`, `detectBrowserLanguage` avec cookie
  `am-lang`, `baseUrl` = URL Vercel.
  ⚠️ **`compilation: { strictMessage: false, escapeHtml: false }` est
  obligatoire** : les textes portent du HTML inline (`<strong>`, lien Sunbiose,
  `&nbsp;`) et le compilateur de messages refuse le fichier sans cette option.
- `app/app.vue` : loader + curseur + header + `<NuxtPage />`, `useLocaleHead()`
  pour les `hreflang`, watcher qui pose `body.sober`.
- Composants : `AppLoader.vue`, `CustomCursor.vue`, `SiteHeader.vue`
  (nav par ancres sur l'accueil, `NuxtLink` sur les pages de poste ; bouton
  sobriété seulement sur l'accueil), `ThreeScene.client.vue`.
- `app/plugins/locomotive.client.js` : v5, `destroy()` + re-init sur
  `page:finish`, délégation de clic pour les liens `data-scroll-to`.
- Pages : `index.vue`, `epitech.vue`, `sween.vue`, `troa.vue`. Contenu repris
  littéralement ; `v-html` pour toute chaîne portant du HTML ou `&nbsp;`.
- État partagé du mode sobriété : `app/composables/useSober.js`.
  Spotlight des cellules bento : `app/composables/useCellSpotlight.js`.
- Vanilla supprimé : `index.html`, `epitech.html`, `sween.html`, `troa.html`,
  `src/`, `vite.config.js` (⚠️ `vite.config.js` faisait renvoyer **426 Upgrade
  Required** au serveur de dev Nuxt tant qu'il était présent).

### Pièges rencontrés, à ne pas réintroduire
- **`@` dans un message i18n** : vue-i18n l'interprète comme un lien de message.
  `status` est écrit `Montpellier — Direction pédagogique {'@'} Epitech`.
- **Ref d'un composant `.client`** : non résolu au `onMounted`, d'où le
  `await nextTick()` dans `ThreeScene.client.vue` avant `createScene()`.

### Vérifié dans le navigateur (dev + build)
Scènes 3D et mapping caméra/scroll, reveals au scroll, smooth scroll Lenis,
navigation par ancres, switch FR/EN (`/` ↔ `/en/`), loader au chargement
uniquement, bascule sobriété, **aucune fuite de contexte WebGL après
4 allers-retours accueil ↔ page de poste**. `nuxt build` passe.
Le chunk Three.js (**135 kB gzip**) n'est chargé que sur l'accueil ; les pages
de poste tirent le framework Nuxt (**108 kB gzip**) + ~3 kB — contre 14 kB en
vanilla. **C'est le coût de la SPA, à arbitrer** vu le discours éco-conception.

### ⏳ Reste à faire
1. Faire valider les **8 clés `meta*`** ajoutées : le FR reprend mot pour mot les
   `<title>` / `<meta description>` des anciens fichiers HTML, mais **les
   descriptions EN sont des chaînes neuves**, écrites avec la terminologie du
   tableau §4 (« Academic Director », « sustainable web design »). À relire.
2. **Pousser sur GitHub** : le dépôt n'a toujours jamais été poussé
   (`ArnaudM-Epitech-Mpl/portfolio-am`) — à faire par Arnaud ou sur sa demande.

### ⚠️ Corrections copywriting encore en attente (cf. §4)
- Toutes les corrections de langue EN du tableau §4 : **non appliquées**.
- Réécritures de fond : **bloquées** en attente des chiffres d'Arnaud
  (questions §1 et §4).
