// Bilingual content (FR default / EN). Keys map to [data-i18n] in index.html.
// Values may contain trusted inline HTML (strong, a, em) — set via innerHTML.
const translations = {
  fr: {
    navContact: 'Contact',
    sobriety: 'mode sobriété',
    sobrietyTitle: "Clin d'œil à l'éco-conception : coupe le rendu 3D",

    kicker: 'Portfolio — prototype',
    lede:
      "De la création d'expériences web primées à l'énergie solaire partagée, " +
      'jusqu\'à la transmission. Trois mondes, une même exigence&nbsp;: le soin du détail.',
    status: 'Montpellier — Direction pédagogique @ Epitech',

    sumEpitech: 'Pédagogie',
    sumEpitechDesc: 'Direction pédagogique — Epitech Montpellier',
    sumSween: 'Énergie',
    sumSweenDesc: 'Autoconsommation solaire temps réel — Sween',
    sumTroa: 'Création',
    sumTroaDesc: 'Expériences web primées — TROA',

    marquee:
      'Création — Énergie — Pédagogie — Montpellier — Web créatif — Solaire partagé — Transmission —&nbsp;',

    epitechDates: "Aujourd'hui",
    epitechRole: 'Direction pédagogique',
    epitechBody:
      "Piloter la pédagogie d'un campus tech&nbsp;: accompagner les équipes, " +
      "faire évoluer les cursus à l'ère de l'IA, et connecter chaque étudiant·e " +
      'au réseau qui le fera grandir. La constellation qui flotte derrière ce texte&nbsp;? ' +
      "Des nœuds reliés entre eux — c'est exactement le métier.",
    epitechTag1: 'Pédagogie par projet',
    epitechTag2: "Management d'équipe",
    epitechTag3: 'Curriculum & IA',
    epitechTag4: 'Vie de campus',

    sweenRole: 'Développement — autoconsommation collective intelligente',
    sweenBody:
      'Pionnier français du pilotage <strong>temps réel</strong> de ' +
      "l'autoconsommation collective solaire&nbsp;: répartir, en direct, ce que produit " +
      'un toit entre les bâtiments voisins. Sween s\'est arrêtée en 2025 — sa technologie ' +
      'brevetée et sa base de code ont été reprises par ' +
      '<a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>, ' +
      "et le code que j'y ai laissé tourne toujours. Les impulsions lumineuses qui " +
      'voyagent de bâtiment en bâtiment&nbsp;? C\'est cette boucle.',
    sweenTag1: 'Énergie solaire',
    sweenTag2: 'Pilotage temps réel',
    sweenTag3: 'IoT & mesure',
    sweenTag4: 'Communautés énergétiques',

    troaDates: 'Alternance — jusqu\'à sept. 2022',
    troaRole: 'Développeur créatif — agence digitale, Montpellier',
    troaBody:
      'Des expériences web sur mesure, primées (FWA, Awwwards, Grand Prix Stratégies), ' +
      "éco-conçues. J'ai contribué à la plupart des réalisations de l'agence " +
      'jusqu\'en septembre 2022. Le «&nbsp;mode sobriété&nbsp;» en haut de page&nbsp;? ' +
      'Un clin d\'œil à leur credo&nbsp;: la sobriété numérique comme geste créatif.',
    troaTagMore: '…et d\'autres',

    contactTitle: 'Écrivons la suite',

    // ---- pages dédiées ----
    pgSeeMore: 'Voir le poste en détail',
    backHome: 'Retour au parcours',
    pgMissionTitle: 'La mission',
    pgPeriodTitle: 'Période',
    pgScopeTitle: 'Périmètre',
    pgSkillsTitle: 'Compétences',
    pgContextTitle: 'Le contexte',
    pgWhyTitle: "Ce que j'y apporte",
    pgAfterTitle: 'La suite',
    pgAwardsTitle: 'Agence primée',
    pgProjectsTitle: 'Réalisations',
    pgLegacyTitle: "Ce que j'en garde",
    pgPrev: 'Précédent',
    pgNext: 'Suivant',

    epiPageMission:
      "Piloter la pédagogie d'un campus tech&nbsp;: accompagner les équipes, " +
      "faire évoluer les cursus à l'ère de l'IA, et connecter chaque étudiant·e " +
      'au réseau qui le fera grandir.',
    epiPageStat: "Aujourd'hui",
    epiPageStatSub: 'Poste actuel',
    epiFact1: 'Accompagner et faire monter en compétence les équipes pédagogiques du campus.',
    epiFact2: "Faire évoluer les cursus face à l'arrivée de l'IA dans le métier de développeur.",
    epiFact3: 'Connecter les étudiants au réseau professionnel local et à des projets réels.',
    epiPageContext:
      "Epitech est une école d'informatique française connue pour sa pédagogie " +
      'par projet, sans cours magistraux. J\'y pilote la pédagogie du campus de Montpellier.',
    epiPageWhy:
      "Un parcours passé par l'agence créative primée puis la startup industrielle&nbsp;: " +
      "je sais ce que le terrain attend d'un développeur, et je conçois la pédagogie " +
      'en conséquence — exigence technique, culture du produit, et sens du métier.',

    swePageMission:
      'Développer la plateforme qui pilote en <strong>temps réel</strong> des boucles ' +
      "d'autoconsommation collective solaire&nbsp;: produire local, consommer local, " +
      "et répartir l'énergie entre les bâtiments d'une même communauté.",
    swePageStatSub: "Startup, secteur de l'énergie",
    sweFact1:
      "Pilotage temps réel de la répartition d'énergie au sein des boucles d'autoconsommation collective.",
    sweFact2: 'Collecte et exploitation des données de production et de consommation (IoT, mesure).',
    sweFact3: 'Outils au service des communautés énergétiques et de leurs gestionnaires.',
    swePageContext:
      'Sween était un pionnier français du pilotage temps réel de ' +
      "l'autoconsommation collective, avec une technologie brevetée. Un secteur " +
      'exigeant&nbsp;: contraintes physiques, réglementation de l\'énergie, et ' +
      'données qui ne tolèrent pas l\'approximation.',
    swePageAfter:
      "L'aventure Sween s'est arrêtée en 2025. La technologie, la base de code et " +
      'la propriété intellectuelle ont été reprises par ' +
      '<a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>, ' +
      "qui poursuit le déploiement de l'autoconsommation collective pilotée.",

    troPageMission:
      'Construire des expériences web sur mesure pour des marques exigeantes&nbsp;: ' +
      'direction artistique forte, animation soignée, et une contrainte assumée — ' +
      "l'éco-conception.",
    troPageProjectsIntro:
      "J'ai contribué à la plupart des réalisations de l'agence jusqu'en septembre 2022.",
    troPageContext:
      'TROA est une agence digitale créative de Montpellier, primée (FWA, Awwwards, ' +
      'Grand Prix Stratégies), qui place la sobriété numérique au cœur de ses ' +
      'créations&nbsp;: limiter les effets inutiles, optimiser les performances, ' +
      'penser à long terme.',
    troTag1: 'Développement front créatif',
    troTag2: 'Animation & interaction',
    troTag3: 'Éco-conception web',
    troTag4: 'Intégration de direction artistique',
    troTag5: 'Travail en agence, multi-clients',
    troPageLegacy:
      "Le niveau d'exigence d'une agence primée sur le détail — et la conviction " +
      "qu'une contrainte, ici l'éco-conception, est un moteur créatif plutôt qu'un " +
      'frein. Ce site en est le prolongement direct.',
  },

  en: {
    navContact: 'Contact',
    sobriety: 'eco mode',
    sobrietyTitle: 'A nod to eco-design: turns off the 3D render',

    kicker: 'Portfolio — prototype',
    lede:
      'From award-winning web experiences to shared solar energy, all the way to teaching. ' +
      'Three worlds, one constant: care for detail.',
    status: 'Montpellier — Head of Education @ Epitech',

    sumEpitech: 'Teaching',
    sumEpitechDesc: 'Head of Education — Epitech Montpellier',
    sumSween: 'Energy',
    sumSweenDesc: 'Real-time solar self-consumption — Sween',
    sumTroa: 'Creation',
    sumTroaDesc: 'Award-winning web experiences — TROA',

    marquee:
      'Creation — Energy — Teaching — Montpellier — Creative web — Shared solar — Transmission —&nbsp;',

    epitechDates: 'Today',
    epitechRole: 'Head of Education',
    epitechBody:
      'Leading the pedagogy of a tech campus: supporting the teams, evolving the ' +
      'curriculum in the age of AI, and connecting every student to the network that ' +
      'will help them grow. The constellation floating behind this text? ' +
      "Nodes linked together — that's exactly the job.",
    epitechTag1: 'Project-based learning',
    epitechTag2: 'Team management',
    epitechTag3: 'Curriculum & AI',
    epitechTag4: 'Campus life',

    sweenRole: 'Development — smart collective self-consumption',
    sweenBody:
      'A French pioneer in <strong>real-time</strong> control of collective solar ' +
      'self-consumption loops (patented technology, now taken over by ' +
      '<a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>). ' +
      'The light pulses travelling from building to building? That\'s the CSC loop: ' +
      'produce local, consume local, live.',
    sweenTag1: 'Solar energy',
    sweenTag2: 'Real-time control',
    sweenTag3: 'IoT & metering',
    sweenTag4: 'Energy communities',

    troaDates: 'Apprenticeship — until Sept. 2022',
    troaRole: 'Creative developer — digital agency, Montpellier',
    troaBody:
      'Bespoke, award-winning web experiences (FWA, Awwwards, Grand Prix Stratégies), ' +
      "eco-designed. I contributed to most of the agency's projects until September 2022. " +
      'The “eco mode” toggle at the top of the page? A nod to their credo: ' +
      'digital sobriety as a creative act.',
    troaTagMore: '…and more',

    contactTitle: "Let's write what's next",

    // ---- dedicated pages ----
    pgSeeMore: 'See the role in detail',
    backHome: 'Back to the journey',
    pgMissionTitle: 'The mission',
    pgPeriodTitle: 'Period',
    pgScopeTitle: 'Scope',
    pgSkillsTitle: 'Skills',
    pgContextTitle: 'The context',
    pgWhyTitle: 'What I bring',
    pgAfterTitle: 'What happened next',
    pgAwardsTitle: 'Award-winning agency',
    pgProjectsTitle: 'Projects',
    pgLegacyTitle: 'What I took from it',
    pgPrev: 'Previous',
    pgNext: 'Next',

    epiPageMission:
      'Leading the pedagogy of a tech campus: supporting the teams, evolving the ' +
      'curriculum in the age of AI, and connecting every student to the network that ' +
      'will help them grow.',
    epiPageStat: 'Today',
    epiPageStatSub: 'Current role',
    epiFact1: 'Supporting and upskilling the campus teaching teams.',
    epiFact2: "Evolving the curriculum as AI reshapes the developer's job.",
    epiFact3: 'Connecting students to the local professional network and to real projects.',
    epiPageContext:
      'Epitech is a French computer science school known for its project-based ' +
      'pedagogy, with no lectures. I lead the pedagogy of the Montpellier campus.',
    epiPageWhy:
      'A path through an award-winning creative agency and then an industrial ' +
      'startup: I know what the field expects from a developer, and I design the ' +
      'pedagogy accordingly — technical rigour, product mindset, and craft.',

    swePageMission:
      'Building the platform that controls collective solar self-consumption loops in ' +
      '<strong>real time</strong>: produce local, consume local, and share the energy ' +
      'across the buildings of a single community.',
    swePageStatSub: 'Startup, energy sector',
    sweFact1:
      'Real-time control of energy sharing within collective self-consumption loops.',
    sweFact2: 'Collecting and exploiting production and consumption data (IoT, metering).',
    sweFact3: 'Tools for energy communities and the people who run them.',
    swePageContext:
      'Sween was a French pioneer in real-time control of collective ' +
      'self-consumption, built on patented technology. A demanding sector: physical ' +
      'constraints, energy regulation, and data that leaves no room for approximation.',
    swePageAfter:
      'The Sween adventure ended in 2025. The technology, codebase and intellectual ' +
      'property were taken over by ' +
      '<a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>, ' +
      'who continue to roll out managed collective self-consumption.',

    troPageMission:
      'Building bespoke web experiences for demanding brands: strong art direction, ' +
      'carefully crafted motion, and one constraint owned as a feature — eco-design.',
    troPageProjectsIntro:
      "I contributed to most of the agency's projects until September 2022.",
    troPageContext:
      'TROA is a creative digital agency in Montpellier, award-winning (FWA, Awwwards, ' +
      'Grand Prix Stratégies), that puts digital sobriety at the heart of its work: ' +
      'cutting needless effects, optimising performance, thinking long term.',
    troTag1: 'Creative front-end development',
    troTag2: 'Motion & interaction',
    troTag3: 'Web eco-design',
    troTag4: 'Art direction implementation',
    troTag5: 'Agency work, multi-client',
    troPageLegacy:
      "An award-winning agency's standard for detail — and the conviction that a " +
      'constraint, here eco-design, is a creative driver rather than a brake. ' +
      'This very site is its direct continuation.',
  },
};

const STORAGE_KEY = 'am-lang';

function applyLang(lang) {
  const dict = translations[lang] || translations.fr;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const value = dict[el.dataset.i18n];
    if (value != null) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-title]').forEach((el) => {
    const value = dict[el.dataset.i18nTitle];
    if (value != null) el.setAttribute('title', value);
  });

  document.querySelectorAll('.lang-switch button').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', String(active));
  });

  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch (e) {
    /* stockage indisponible : on ignore, la langue reste en mémoire de session */
  }
}

function initialLang() {
  let saved = null;
  try {
    saved = localStorage.getItem(STORAGE_KEY);
  } catch (e) {
    /* ignore */
  }
  if (saved === 'fr' || saved === 'en') return saved;
  return (navigator.language || 'fr').toLowerCase().startsWith('en') ? 'en' : 'fr';
}

document.querySelectorAll('.lang-switch button').forEach((btn) => {
  btn.addEventListener('click', () => applyLang(btn.dataset.lang));
});

applyLang(initialLang());
