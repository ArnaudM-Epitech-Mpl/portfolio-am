<template>
  <div ref="el" class="cursor" aria-hidden="true"><span class="cursor-ring"></span></div>
</template>

<script setup>
// Anneau qui suit la souris avec easing et grossit au survol des éléments
// interactifs. Pointeur fin uniquement ; sans inertie en mode sobriété.
const el = ref(null)
const sober = useSober()
const INTERACTIVE = 'a, button, .seg-g'
let rafId = 0
const off = []

onMounted(() => {
  const node = el.value
  if (!node || !window.matchMedia('(pointer: fine)').matches) return
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

  let tx = window.innerWidth / 2
  let ty = window.innerHeight / 2
  let x = tx
  let y = ty

  const on = (target, type, fn, opts) => {
    target.addEventListener(type, fn, opts)
    off.push(() => target.removeEventListener(type, fn, opts))
  }

  on(
    window,
    'pointermove',
    (e) => {
      tx = e.clientX
      ty = e.clientY
      node.classList.add('is-visible')
    },
    { passive: true }
  )
  on(document, 'mouseleave', () => node.classList.remove('is-visible'))
  on(window, 'mousedown', () => node.classList.add('is-down'))
  on(window, 'mouseup', () => node.classList.remove('is-down'))
  on(document, 'mouseover', (e) => node.classList.toggle('is-hover', !!e.target.closest?.(INTERACTIVE)))

  const follow = () => {
    const k = sober.value || reduce ? 1 : 0.2
    x += (tx - x) * k
    y += (ty - y) * k
    node.style.transform = `translate3d(${x}px, ${y}px, 0)`
    rafId = requestAnimationFrame(follow)
  }
  rafId = requestAnimationFrame(follow)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId)
  off.forEach((fn) => fn())
})
</script>
