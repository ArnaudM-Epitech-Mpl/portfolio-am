<template>
  <div v-if="present" class="loader" :class="{ 'is-done': done }">
    <div class="loader-inner">
      <span class="loader-logo">AM<span class="dot-dim">.</span></span>
      <span class="loader-bar"><span class="loader-bar-fill"></span></span>
    </div>
  </div>
</template>

<script setup>
// Écran « AM. » — au chargement de page uniquement, jamais sur une navigation
// interne : le composant vit dans app.vue, qui n'est monté qu'une fois.
const done = ref(false)
const present = ref(true)
const timers = []

onMounted(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const minShow = reduce ? 200 : 1250
  const start = performance.now()

  const hide = () => {
    if (done.value) return
    done.value = true
    timers.push(setTimeout(() => (present.value = false), 800))
  }

  const finish = () => {
    timers.push(setTimeout(hide, Math.max(0, minShow - (performance.now() - start))))
  }

  if (document.readyState === 'complete') finish()
  else window.addEventListener('load', finish, { once: true })

  // filet de sécurité : ne jamais laisser le loader bloquer l'écran
  timers.push(setTimeout(hide, 6000))
})

onBeforeUnmount(() => timers.forEach(clearTimeout))
</script>
