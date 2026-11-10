// Deux directives de présentation, sans état côté Vue.
//  - v-reveal : apparition au scroll (classe `is-inview`, une seule fois)
//  - v-swap="clé" : rejoue l'animation `.swap` quand la clé change
// Elles manipulent `classList` : à ne poser que sur des éléments dont la
// classe est statique, sinon un re-rendu de `:class` écraserait leur travail.
let io = null
const observer = () =>
  (io ??= new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        entry.target.classList.add('is-inview')
        io.unobserve(entry.target)
      }
    },
    { rootMargin: '-6% 0px -8% 0px' }
  ))

const reveal = {
  getSSRProps: () => ({}),
  mounted: (el) => observer().observe(el),
  unmounted: (el) => io?.unobserve(el),
}

const swap = {
  getSSRProps: () => ({}),
  updated(el, { value, oldValue }) {
    if (value === oldValue) return
    el.classList.remove('swap')
    void el.offsetWidth // force le reflow : relance l'animation
    el.classList.add('swap')
    // retirée une fois jouée, sinon elle rejouerait à la sortie du mode sobriété
    el.addEventListener('animationend', () => el.classList.remove('swap'), { once: true })
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('reveal', reveal)
  nuxtApp.vueApp.directive('swap', swap)
})
