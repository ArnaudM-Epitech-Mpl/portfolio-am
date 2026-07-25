import LocomotiveScroll from 'locomotive-scroll'

// Locomotive Scroll v5 (basé sur Lenis) — le scroll natif est préservé, donc la
// caméra Three.js qui lit `window.scrollY` continue de fonctionner.
// ⚠️ Ne pas revenir en v4 : elle hijack le scroll et casserait la scène.
export default defineNuxtPlugin((nuxtApp) => {
  let scroll = null

  const destroy = () => {
    scroll?.destroy()
    scroll = null
  }

  const init = () => {
    destroy()
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    scroll = new LocomotiveScroll({
      lenisOptions: {
        lerp: reduce ? 1 : 0.09,
        smoothWheel: !reduce,
        wheelMultiplier: 1,
      },
      // déclenche les reveals quand l'élément est un peu entré dans le viewport
      triggerRootMargin: '-8% 0px -12% 0px',
    })
  }

  // ré-initialisé à chaque page : les éléments `data-scroll` ont changé
  nuxtApp.hook('page:finish', () => nextTick(init))
  nuxtApp.hook('app:unmount', destroy)

  // navigation par ancre (`data-scroll-to`) confiée à Lenis
  const onClick = (e) => {
    const link = e.target?.closest?.('a[data-scroll-to]')
    if (!link) return
    const href = link.getAttribute('href') || ''
    if (!href.startsWith('#')) return
    const target = document.querySelector(href)
    if (!target) return
    e.preventDefault()
    if (scroll) scroll.scrollTo(target)
    else target.scrollIntoView({ behavior: 'smooth' })
  }
  document.addEventListener('click', onClick)
  nuxtApp.hook('app:unmount', () => document.removeEventListener('click', onClick))

  return { provide: { locomotive: () => scroll } }
})
