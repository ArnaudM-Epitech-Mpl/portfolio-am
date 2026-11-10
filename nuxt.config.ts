export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },

  modules: ['@nuxtjs/i18n'],

  css: [
    'locomotive-scroll/dist/locomotive-scroll.css',
    '~/assets/css/main.css',
    '~/assets/css/bento.css',
  ],

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

  // les pages de poste étaient servies en `.html` avant la migration : on garde
  // les anciennes URLs vivantes (301) plutôt que de les laisser en 404
  routeRules: {
    '/epitech.html': { redirect: { to: '/epitech', statusCode: 301 } },
    '/sween.html': { redirect: { to: '/sween', statusCode: 301 } },
    '/troa.html': { redirect: { to: '/troa', statusCode: 301 } },
  },

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
