<template>
  <footer class="site-footer">
    <span>{{ weight }}</span>
    <span>{{ $t('footer') }}</span>
  </footer>
</template>

<script setup>
// Poids réel de la page, mesuré dans le navigateur du visiteur (Resource
// Timing) plutôt qu'affirmé : document + ressources, taille compressée.
const { t } = useI18n()
const measured = ref(null)

const weight = computed(() =>
  measured.value ? t('weight', { n: measured.value.kb, r: measured.value.third }) : ''
)

function measure() {
  const entries = [
    ...performance.getEntriesByType('navigation'),
    ...performance.getEntriesByType('resource'),
  ].filter((entry) => entry.name.startsWith('http'))
  const bytes = entries.reduce((sum, entry) => sum + (entry.encodedBodySize || 0), 0)
  const third = entries.filter((entry) => new URL(entry.name).origin !== location.origin).length
  measured.value = { kb: Math.round(bytes / 1000), third }
}

let timer = 0
onMounted(() => {
  // après `load`, le temps que les dernières ressources soient comptabilisées
  const later = () => (timer = setTimeout(measure, 300))
  if (document.readyState === 'complete') later()
  else window.addEventListener('load', later, { once: true })
})
onBeforeUnmount(() => clearTimeout(timer))
</script>
