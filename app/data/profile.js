/* =========================================================================
   SOURCE DE FAITS — recopiée de candidature-pipeline/profile/master.yaml
   (nov. 2026) et, pour le contexte Sween / Troa, de PROJECT-STATE.md §1.
   Règle : les lectures sélectionnent et réordonnent ces faits, elles n'en
   ajoutent aucun. `l` = lectures pour lesquelles le fait est mis en avant.
   Les libellés d'interface, eux, vivent dans i18n/locales/.
   ========================================================================= */

export const EXP = {
  freelance: {
    company: { fr: 'Indépendant', en: 'Freelance' },
    title: { fr: 'Développeur web & consultant freelance', en: 'Freelance Web Developer & Consultant' },
    dates: { fr: "2026 à aujourd'hui", en: '2026 to present' },
    tab: { fr: 'Indépendant', en: 'Freelance' },
    facts: [
      {
        l: ['dev', 'lead'],
        fr: "Développement et conseil pour des clients, dont la refonte du site d'un constructeur français de véhicules spéciaux.",
        en: 'Development and consulting for clients, including the website redesign of a French specialty vehicle manufacturer.',
      },
    ],
  },
  epitech_head: {
    company: { fr: 'Epitech <em>Montpellier</em>', en: 'Epitech <em>Montpellier</em>' },
    title: { fr: 'Responsable Tous Programmes', en: 'Head of Programs (Responsable Tous Programmes)' },
    dates: { fr: 'Juil. 2025 à août 2026', en: 'Jul. 2025 to Aug. 2026' },
    tab: { fr: 'Epitech · Responsable Tous Programmes', en: 'Epitech · Head of Programs' },
    context: {
      fr: "École d'informatique française, pédagogie par projet, sans cours magistraux.",
      en: 'French computer science school: project-based learning, no lectures.',
    },
    facts: [
      {
        l: ['em', 'lead'],
        fr: "Management d'une équipe de 15 personnes, dont des formateurs techniques : recrutement, onboarding, 1:1, feedback, entretiens annuels avec objectifs individuels.",
        en: 'Managed a 15-person team, including technical instructors: hiring, onboarding, 1:1s, feedback, annual reviews with individual goals.',
      },
      {
        l: ['em', 'lead'],
        fr: "Organisation d'équipe : répartition des rôles, rituels de coordination, rétrospectives et planification annuelle.",
        en: 'Team organisation: role split, coordination rituals, retrospectives and annual planning.',
      },
      {
        l: ['em'],
        fr: 'Pilotage de la roadmap de tous les programmes (170 étudiants, 7 promotions) ; reprise du périmètre MSc/MBA.',
        en: 'Owned the roadmap across all programs (170 students, 7 cohorts); took over the MSc/MBA scope.',
      },
      {
        l: ['em', 'lead'],
        fr: "Refonte de la façon d'apprendre à coder avec l'IA : ce qu'on délègue à un modèle, ce qui reste du jugement humain, comment évaluer un travail qu'un modèle sait produire.",
        en: 'Rebuilt how students learn to code with AI: what to delegate to a model, what stays human judgment, how to evaluate work a model can produce.',
      },
      {
        l: ['dev', 'lead', 'em'],
        fr: "Adoption de l'IA dans l'équipe : standards partagés pour le développement assisté par LLM, objectifs de progression liés à l'IA (Claude Code, code reviews entre pairs).",
        en: 'Team AI adoption: shared standards for LLM-assisted development, AI-related growth goals (Claude Code, peer code reviews).',
      },
      {
        l: ['em'],
        fr: 'Hackathon GenAI de 3 jours (170 étudiants, 7 promotions) conçu et animé du brief au jury.',
        en: 'Designed and ran a 3-day GenAI hackathon (170 students, 7 cohorts), from brief to jury.',
      },
      {
        l: ['em'],
        fr: 'Représentation du campus auprès de la direction nationale ; conformité au référentiel Qualiopi.',
        en: 'Represented the campus to national leadership; compliance with the Qualiopi quality framework.',
      },
    ],
  },
  epitech_regional: {
    company: { fr: 'Epitech <em>Montpellier</em>', en: 'Epitech <em>Montpellier</em>' },
    title: { fr: 'Responsable Pédagogique Régional', en: 'Regional Academic Lead (Responsable Pédagogique Régional)' },
    dates: { fr: 'Févr. 2025 à juil. 2025', en: 'Feb. 2025 to Jul. 2025' },
    tab: { fr: 'Epitech · Responsable Pédagogique Régional', en: 'Epitech · Regional Academic Lead' },
    facts: [
      {
        l: ['dev', 'lead', 'em'],
        fr: "Mentorat et revue de code de projets d'ingénierie étudiants jusqu'à leur livraison (Robocar, Opéra, EIP) ; membre de jurys techniques.",
        en: 'Mentored students and reviewed the code of engineering projects through to delivery (Robocar, Opera, EIP); sat on technical juries.',
      },
      {
        l: ['em'],
        fr: 'Coordination entre programmes et animation de séminaires.',
        en: 'Coordinated across programs and ran seminars.',
      },
    ],
  },
  sween: {
    company: { fr: 'Sween', en: 'Sween' },
    title: { fr: 'Développeur Fullstack & Mobile', en: 'Fullstack & Mobile Developer' },
    dates: { fr: 'Mars 2023 à févr. 2025', en: 'Mar. 2023 to Feb. 2025' },
    tab: { fr: 'Sween', en: 'Sween' },
    context: {
      fr: 'Start-up de l\'énergie : autoconsommation collective solaire pilotée en temps réel. Sween s\'est arrêtée en 2025 ; sa base de code a été reprise par <a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>, et le code que j\'y ai laissé tourne toujours.',
      en: 'Energy start-up: real-time collective solar self-consumption. Sween shut down in 2025; its codebase was acquired by <a href="https://sunbiose.fr" target="_blank" rel="noopener">Sunbiose</a>, and the code I left there is still running.',
    },
    chips: {
      fr: ['Flutter', 'React', 'Vue.js', 'API REST', 'Linky', 'Kubernetes', 'Redis', 'PostgreSQL', 'OVH multi-zone'],
      en: ['Flutter', 'React', 'Vue.js', 'REST API', 'Linky', 'Kubernetes', 'Redis', 'PostgreSQL', 'OVH multi-zone'],
    },
    facts: [
      {
        l: ['dev', 'lead'],
        fr: "Arrivé dès l'itération zéro d'une plateforme temps réel d'autoconsommation collective d'énergie, où les données de comptage déterminent la facturation : fiabilité et cohérence des données non négociables.",
        en: 'Joined at iteration zero of a real-time collective self-consumption energy platform, where metering data drives member billing: data reliability and consistency were non-negotiable.',
      },
      {
        l: ['dev'],
        fr: "Application mobile multiplateforme (Flutter) et interfaces web (React, Vue.js) de monitoring temps réel de la production et de la consommation d'électricité.",
        en: 'Built the cross-platform mobile app (Flutter) and web interfaces (React, Vue.js) for real-time monitoring of electricity production and consumption.',
      },
      {
        l: ['dev', 'lead'],
        fr: "Participation à la conception et au développement de l'API REST commune au mobile et au web.",
        en: 'Helped design and build the REST API serving both the mobile and web clients.',
      },
      {
        l: ['dev'],
        fr: 'Intégration des données des compteurs Linky, pour que le suivi et la facturation reposent sur des relevés réels.',
        en: 'Integrated Linky smart-meter data, so monitoring and billing run on actual readings.',
      },
      {
        l: ['dev', 'lead'],
        fr: "Participation aux choix de conception et à l'exploitation de l'infrastructure : Kubernetes, Redis et PostgreSQL auto-hébergés en multi-zone chez OVH.",
        en: 'Took part in design choices and in running the infrastructure: Kubernetes, Redis and PostgreSQL, self-hosted across multiple OVH zones.',
      },
      {
        l: ['dev', 'lead'],
        fr: "Deux produits construits de zéro : un outil de gestion de communautés énergétiques et un simulateur d'autoconsommation interactif.",
        en: 'Built two products from scratch: an energy community management tool and an interactive self-consumption simulator.',
      },
    ],
  },
  troa: {
    company: { fr: 'Troa', en: 'Troa' },
    title: { fr: 'Développeur Front-end', en: 'Front-end Developer' },
    dates: { fr: 'Oct. 2020 à sept. 2022', en: 'Oct. 2020 to Sep. 2022' },
    tab: { fr: 'Troa', en: 'Troa' },
    context: {
      fr: "Agence créative de Montpellier, primée (FWA, Awwwards, Grand Prix Stratégies), attachée à l'éco-conception.",
      en: 'Creative agency in Montpellier, award-winning (FWA, Awwwards, Grand Prix Stratégies), committed to sustainable web design.',
    },
    // noms propres : jamais traduits
    projects: [
      'Canelés Baillardran',
      'Grotte des Demoiselles',
      'Opéra de Montpellier',
      'Zénith de Montpellier',
      'Entav-Inra',
      'Mat & Seb',
      'Elorell',
      'Addictopôle Occitanie',
      'Evielab',
      '36Velos',
    ],
    facts: [
      {
        l: ['dev'],
        fr: 'Sites vitrines, e-commerce et interfaces CRM sur mesure en agence, orientés conversion et performance.',
        en: 'Bespoke marketing sites, e-commerce and CRM interfaces in a creative agency, focused on conversion and performance.',
      },
      {
        l: ['dev', 'lead'],
        fr: 'Design system de composants réutilisables et boilerplate interne pour livrer plus vite.',
        en: 'Built a reusable component design system and an internal boilerplate to ship faster.',
      },
      {
        l: ['dev'],
        fr: 'TMA et maintenance de sites existants.',
        en: 'Maintenance of existing websites and applications.',
      },
    ],
  },
  early: {
    company: { fr: 'Premières <em>expériences</em>', en: 'Early <em>experience</em>' },
    title: { fr: 'Développeur web junior, Product Owner, consultant', en: 'Junior web developer, Product Owner, consultant' },
    dates: { fr: '2018 à 2020', en: '2018 to 2020' },
    tab: { fr: 'Premières expériences', en: 'Early experience' },
    facts: [
      {
        l: ['dev'],
        fr: 'Développeur web junior et Product Owner, Focus France.',
        en: 'Junior Web Developer and Product Owner, Focus France.',
      },
      {
        l: ['dev'],
        fr: 'Consultant informatique, Junior Conseil Taker : prospection, cadrage et développement de projets clients.',
        en: 'IT Consultant, Junior Conseil Taker (student-run junior enterprise): prospecting, scoping and building client projects.',
      },
    ],
  },
  edu: {
    company: { fr: 'Formation', en: 'Education' },
    title: { fr: 'Epitech, après des études de médecine', en: 'Epitech, after medical studies' },
    dates: { fr: '2017 à 2022', en: '2017 to 2022' },
    tab: { fr: 'Formation', en: 'Education' },
    neutral: true, // pas de mise en avant par lecture : tout est affiché à égalité
    facts: [
      { l: [], fr: 'MSc Pro, Programmation informatique, Epitech, 2019-2022', en: 'MSc, Computer Programming, Epitech, 2019-2022' },
      { l: [], fr: 'Programme Grande École, Informatique, Epitech, 2017-2019', en: 'Grande École Program, Computer Science, Epitech, 2017-2019' },
      { l: [], fr: 'Études de médecine, avant la reconversion vers le développement', en: 'Medical studies, before switching to software development' },
    ],
  },
}

/** Ordre des onglets : du plus récent au plus ancien. */
export const ORDER = ['freelance', 'epitech_head', 'epitech_regional', 'sween', 'troa', 'early', 'edu']

/* ---------- frise ---------- */
const dec = (y, m) => y + (m - 1) / 12

/**
 * Segments de la frise, en années décimales. `approx` = dates connues à
 * l'année près (tracé pointillé). `b: null` = en cours, s'arrête à « aujourd'hui ».
 * `tip` remplace l'infobulle par défaut (onglet + dates du poste).
 */
export const SEGS = [
  { id: 'edu', row: 0, a: dec(2017, 9), b: dec(2019, 9), approx: true, label: { fr: 'Grande École', en: 'Grande École' }, tip: { head: { fr: 'Grande École · Epitech', en: 'Grande École · Epitech' }, dates: '2017-2019' } },
  { id: 'edu', row: 0, a: dec(2019, 9), b: dec(2022, 9), approx: true, label: { fr: 'MSc Pro', en: 'MSc' }, tip: { head: { fr: 'MSc Pro · Epitech', en: 'MSc · Epitech' }, dates: '2019-2022' } },
  { id: 'early', row: 1, a: dec(2018, 1), b: dec(2020, 10), approx: true, label: { fr: 'Premières expériences', en: 'Early experience' } },
  { id: 'troa', row: 1, a: dec(2020, 10), b: dec(2022, 10), label: { fr: 'Troa', en: 'Troa' } },
  { id: 'sween', row: 1, a: dec(2023, 3), b: dec(2025, 2), label: { fr: 'Sween', en: 'Sween' } },
  { id: 'epitech_regional', row: 1, a: dec(2025, 2), b: dec(2025, 7), label: { fr: '', en: '' } },
  { id: 'epitech_head', row: 1, a: dec(2025, 7), b: dec(2026, 9), label: { fr: 'Epitech', en: 'Epitech' } },
  { id: 'freelance', row: 2, a: dec(2026, 1), b: null, approx: true, label: { fr: '', en: '' } },
]

/* ---------- trois lectures : mêmes faits, ordre et accent différents ---------- */
export const LENS = {
  dev: {
    name: { fr: 'Développeur', en: 'Developer' },
    short: { fr: 'Développeur', en: 'Developer' },
    role: { fr: "Développeur Fullstack · Développement augmenté par l'IA", en: 'Fullstack Developer · AI-augmented development' },
    lede: {
      fr: "4 ans de produits web et mobiles en production, de l'agence créative à la plateforme énergie temps réel. Après environ 18 mois à encadrer une équipe, je reviens au code au quotidien.",
      en: 'Four years shipping web and mobile products to production, from a creative agency to a real-time energy platform. After about 18 months leading a team, I am going back to code every day.',
    },
    figures: ['years', 'products', 'zero', 'team'],
    lit: ['troa', 'sween', 'freelance'],
    open: 'sween',
    tools: ['frontend', 'mobile', 'backend', 'infra', 'ai', 'leadership', 'languages'],
    toolsLit: ['frontend', 'mobile', 'backend', 'ai'],
    marquee: {
      fr: ['TypeScript', 'React', 'Vue.js', 'Flutter', 'API REST', 'PostgreSQL', 'Redis', 'Kubernetes', 'Claude Code'],
      en: ['TypeScript', 'React', 'Vue.js', 'Flutter', 'REST API', 'PostgreSQL', 'Redis', 'Kubernetes', 'Claude Code'],
    },
  },
  lead: {
    name: { fr: 'Tech lead', en: 'Tech lead' },
    short: { fr: 'Tech lead', en: 'Tech lead' },
    role: { fr: 'Développeur Fullstack Senior TypeScript / React, orienté Tech Lead', en: 'Senior Fullstack Developer, TypeScript / React, moving into Tech Lead' },
    lede: {
      fr: "Je veux revenir au code au quotidien et prendre le lead technique d'une squad. 4 ans de production, puis environ 18 mois à organiser, recruter et faire grandir une équipe de 15 personnes.",
      en: 'I want to be back in the code every day and take the technical lead of a squad. Four years in production, then about 18 months organising, hiring for and growing a 15-person team.',
    },
    figures: ['years', 'team', 'products', 'months'],
    lit: ['sween', 'epitech_regional', 'epitech_head'],
    open: 'sween',
    tools: ['frontend', 'backend', 'infra', 'leadership', 'ai', 'mobile', 'languages'],
    toolsLit: ['frontend', 'backend', 'infra', 'leadership'],
    marquee: {
      fr: ['TypeScript', 'React', 'API REST', 'Kubernetes', 'Revue de code', 'Mentorat', 'Design systems', 'CI/CD', 'Claude Code'],
      en: ['TypeScript', 'React', 'REST API', 'Kubernetes', 'Code review', 'Mentoring', 'Design systems', 'CI/CD', 'Claude Code'],
    },
  },
  em: {
    name: { fr: 'Engineering manager', en: 'Engineering manager' },
    short: { fr: 'Manager', en: 'Manager' },
    role: { fr: 'Engineering Manager hands-on · Leadership technique', en: 'Engineering Manager · Technical Leadership · AI-augmented Engineering' },
    lede: {
      fr: "Environ 18 mois d'encadrement d'une équipe de 15 personnes : recrutement, roadmap, adoption de l'IA. Le tout crédibilisé par 4 ans de code en production, et l'envie de garder les mains dedans.",
      en: 'About 18 months leading a 15-person team: hiring, roadmap, AI adoption. Backed by four years of production code, and a firm intent to stay hands-on.',
    },
    figures: ['team', 'months', 'students', 'years'],
    lit: ['epitech_head', 'epitech_regional'],
    open: 'epitech_head',
    tools: ['leadership', 'ai', 'frontend', 'backend', 'infra', 'mobile', 'languages'],
    toolsLit: ['leadership', 'ai'],
    marquee: {
      fr: ['Recrutement', 'Onboarding', '1:1', 'Roadmap', "Organisation d'équipe", 'Revue de code', "Adoption de l'IA", 'Delivery agile'],
      en: ['Hiring', 'Onboarding', '1:1s', 'Roadmap', 'Team organisation', 'Code review', 'AI adoption', 'Agile delivery'],
    },
  },
}
export const LENS_KEYS = Object.keys(LENS)
export const DEFAULT_LENS = 'dev'

/** Chiffres du bandeau : chaque lecture en choisit quatre. */
export const FIG = {
  years: { v: { fr: '4 ans', en: '4 years' }, t: { fr: 'de produits web et mobiles en production', en: 'shipping web and mobile products to production' } },
  products: { v: { fr: '2', en: '2' }, t: { fr: 'produits construits de zéro chez Sween', en: 'products built from scratch at Sween' } },
  zero: { v: { fr: '0', en: '0' }, t: { fr: "l'itération à laquelle j'ai rejoint la plateforme Sween", en: 'the iteration at which I joined the Sween platform' } },
  team: { v: { fr: '15', en: '15' }, t: { fr: 'personnes encadrées chez Epitech', en: 'people managed at Epitech' } },
  months: { v: { fr: '≈ 18 mois', en: '≈ 18 mo.' }, t: { fr: "d'encadrement d'équipe", en: 'leading a team' } },
  students: { v: { fr: '170', en: '170' }, t: { fr: 'étudiants et 7 promotions sur une même roadmap', en: 'students and 7 cohorts on one roadmap' } },
}

export const TOOLS = {
  frontend: {
    n: { fr: 'Front-end', en: 'Front-end' },
    fr: 'TypeScript, JavaScript, React, Vue.js, HTML5, CSS3, SASS, design systems, performance web',
    en: 'TypeScript, JavaScript, React, Vue.js, HTML5, CSS3, SASS, design systems, web performance',
  },
  mobile: { n: { fr: 'Mobile', en: 'Mobile' }, fr: 'Flutter, Dart', en: 'Flutter, Dart' },
  backend: {
    n: { fr: 'Back-end & données', en: 'Back-end & data' },
    fr: "Conception d'API REST, PostgreSQL, Redis, données temps réel, intégration de données de comptage",
    en: 'REST API design, PostgreSQL, Redis, real-time data flows, metering data integration',
  },
  infra: {
    n: { fr: 'Infra', en: 'Infra' },
    fr: 'Kubernetes, déploiement multi-zone auto-hébergé, OVH, Git, GitHub, CI/CD, Figma',
    en: 'Kubernetes, self-hosted multi-zone deployment, OVH, Git, GitHub, CI/CD, Figma',
  },
  ai: {
    n: { fr: 'IA', en: 'AI' },
    fr: 'Claude Code, workflows agentiques, API LLM (Anthropic, OpenAI), tool use, MCP, sorties structurées, prompt engineering, context engineering',
    en: 'Claude Code, agentic workflows, LLM APIs (Anthropic, OpenAI), tool use, MCP, structured outputs, prompt engineering, context engineering',
  },
  leadership: {
    n: { fr: 'Équipe', en: 'Team' },
    fr: "Revue de code, mentorat, recrutement, onboarding, 1:1, feedback, organisation d'équipe, planification, priorisation, roadmap, delivery agile, gestion de parties prenantes (Jira, Trello, Asana)",
    en: 'Code review, mentoring, hiring, onboarding, 1:1s, feedback, team organisation, planning, prioritisation, roadmap, agile delivery, stakeholder management (Jira, Trello, Asana)',
  },
  languages: {
    n: { fr: 'Langues', en: 'Languages' },
    fr: 'Français (natif), anglais (B2), espagnol (B2)',
    en: 'French (native), English (B2), Spanish (B2)',
  },
}

export const AI_CHIPS = {
  fr: ['Claude Code', 'Workflows agentiques', 'API LLM', 'Tool use', 'MCP', 'Sorties structurées', 'Context engineering'],
  en: ['Claude Code', 'Agentic workflows', 'LLM APIs', 'Tool use', 'MCP', 'Structured outputs', 'Context engineering'],
}

export const CONTACT = {
  email: 'arnaud.michel.dev@gmail.com',
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/arnaudmichel11' },
    { label: 'Instagram', href: 'https://www.instagram.com/arnaudmp/' },
  ],
}
