<template>
  <div ref="el" class="cursor" aria-hidden="true"><span class="cursor-ring"></span></div>
</template>

<script setup>
// Anneau qui suit la souris avec easing et grossit au survol des éléments
// interactifs (inspiré de kentokawazoe.com). Pointeur fin uniquement.
const el = ref(null)
const INTERACTIVE = 'a, button, .sommaire-row, [role="button"], input, label'
let rafId = 0
const off = []

onMounted(() => {
  const node = el.value
  if (!node || !window.matchMedia('(pointer: fine)').matches) return

  let tx = window.innerWidth / 2
  let ty = window.innerHeight / 2
  let x = tx
  let y = ty
  let shown = false

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
      if (!shown) {
        shown = true
        node.classList.add('is-visible')
      }
    },
    { passive: true }
  )
  on(document, 'mouseleave', () => node.classList.remove('is-visible'))
  on(document, 'mouseenter', () => node.classList.add('is-visible'))
  on(window, 'mousedown', () => node.classList.add('is-down'))
  on(window, 'mouseup', () => node.classList.remove('is-down'))
  on(document, 'mouseover', (e) => {
    if (e.target.closest?.(INTERACTIVE)) node.classList.add('is-hover')
  })
  on(document, 'mouseout', (e) => {
    if (e.target.closest?.(INTERACTIVE)) node.classList.remove('is-hover')
  })

  const follow = () => {
    x += (tx - x) * 0.2
    y += (ty - y) * 0.2
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
