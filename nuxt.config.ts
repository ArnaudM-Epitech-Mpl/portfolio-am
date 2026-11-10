export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n'],

  css: ['~/assets/css/main.css'],

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1.0',
      // logo « AM. » : SVG pour les navigateurs récents, ICO en repli,
      // PNG plein cadre pour l'écran d'accueil iOS
      link: [
        { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
        { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
      ],
      meta: [{ name: 'theme-color', content: '#050505' }],
    },
  },

  // les pages de poste (`/epitech`, `/sween`, `/troa`, et leurs versions
  // `.html` d'avant Nuxt) ont été remplacées par la frise de l'accueil : on
  // garde les anciennes URLs vivantes plutôt que de les laisser en 404.
  // 302 et non 301 : un 301 resterait en cache si ces pages revenaient.
  routeRules: Object.fromEntries(
    ['epitech', 'sween', 'troa'].flatMap((page) => [
      [`/${page}`, { redirect: { to: '/#parcours', statusCode: 302 } }],
      [`/${page}.html`, { redirect: { to: '/#parcours', statusCode: 302 } }],
      [`/en/${page}`, { redirect: { to: '/en#parcours', statusCode: 302 } }],
    ])
  ),

  // FR sur `/`, EN sur `/en/` — changement d'URLs assumé (SEO), avec hreflang.
  i18n: {
    defaultLocale: 'fr',
    strategy: 'prefix_except_default',
    baseUrl: 'https://portefolio-nu-six.vercel.app',
    locales: [
      { code: 'fr', language: 'fr-FR', name: 'Français', file: 'fr.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
    // les textes portent du HTML inline (<strong>, lien Sunbiose, &nbsp;) et sont
    // rendus via v-html : sans ceci le compilateur de messages refuse le fichier
    compilation: {
      strictMessage: false,
      escapeHtml: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'am-lang',
      redirectOn: 'root',
    },
  },
})
