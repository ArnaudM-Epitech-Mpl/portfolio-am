<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <a class="brand" href="#top">AM<span class="dot-dim">.</span></a>

    <nav :aria-label="$t('navLabel')">
      <a href="#parcours">{{ $t('navTrack') }}</a>
      <a href="#methode">{{ $t('navMethod') }}</a>
      <a href="#outils">{{ $t('navTools') }}</a>
      <a href="#contact">{{ $t('navContact') }}</a>
    </nav>

    <div class="pill-group" role="group" aria-label="Langue / Language">
      <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        :hreflang="l.code"
        :aria-current="l.code === locale ? 'true' : undefined"
      >
        {{ l.code.toUpperCase() }}
      </NuxtLink>
    </div>

    <button
      class="sobriety-btn"
      type="button"
      :title="$t('sobrietyTitle')"
      :aria-pressed="sober"
      @click="sober = !sober"
    >
      <span class="dot"></span><span>{{ $t('sobriety') }}</span>
    </button>
  </header>
</template>

<script setup>
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const sober = useSober()

// verre dépoli dès qu'on a quitté le haut du hero
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 40)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
