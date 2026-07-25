<template>
  <header class="site-header" :class="{ 'is-scrolled': scrolled }">
    <NuxtLink v-if="!isHome" class="brand" :to="localePath('/')">
      AM<span class="brand-dot">.</span>
    </NuxtLink>
    <a v-else class="brand" href="#hero" data-scroll-to>AM<span class="brand-dot">.</span></a>

    <nav>
      <template v-if="isHome">
        <a href="#epitech" data-scroll-to>Epitech</a>
        <a href="#sween" data-scroll-to>Sween</a>
        <a href="#troa" data-scroll-to>TROA</a>
        <a href="#contact" data-scroll-to>{{ $t('navContact') }}</a>
      </template>
      <template v-else>
        <NuxtLink
          v-for="page in pages"
          :key="page.path"
          :to="localePath(page.path)"
          :aria-current="route.path === localePath(page.path) ? 'page' : undefined"
        >
          {{ page.label }}
        </NuxtLink>
        <NuxtLink :to="`${localePath('/')}#contact`">{{ $t('navContact') }}</NuxtLink>
      </template>
    </nav>

    <div class="lang-switch" role="group" aria-label="Langue / Language">
      <NuxtLink
        v-for="l in locales"
        :key="l.code"
        :to="switchLocalePath(l.code)"
        :class="{ 'is-active': l.code === locale }"
        :hreflang="l.code"
      >
        {{ l.code.toUpperCase() }}
      </NuxtLink>
    </div>

    <button
      v-if="isHome"
      class="sobriety-btn"
      type="button"
      :title="$t('sobrietyTitle')"
      :aria-pressed="sober"
      @click="sober = !sober"
    >
      <span class="dot"></span> <span>{{ $t('sobriety') }}</span>
    </button>
  </header>
</template>

<script setup>
const route = useRoute()
const localePath = useLocalePath()
const switchLocalePath = useSwitchLocalePath()
const { locale, locales } = useI18n()
const sober = useSober()

const pages = [
  { path: '/epitech', label: 'Epitech' },
  { path: '/sween', label: 'Sween' },
  { path: '/troa', label: 'TROA' },
]

// les routes i18n sont suffixées (`index___fr`, `epitech___en`)
const isHome = computed(() => String(route.name ?? '').startsWith('index'))

// glassmorphisme : verre dépoli dès qu'on a quitté le haut du hero
const scrolled = ref(false)
const onScroll = () => (scrolled.value = window.scrollY > 40)

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onBeforeUnmount(() => window.removeEventListener('scroll', onScroll))
</script>
