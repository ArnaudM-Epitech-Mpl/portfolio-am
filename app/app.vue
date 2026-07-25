<template>
  <div>
    <AppLoader />
    <CustomCursor />
    <SiteHeader />
    <NuxtPage />
  </div>
</template>

<script setup>
const localeHead = useLocaleHead()
const sober = useSober()

useHead({
  htmlAttrs: computed(() => localeHead.value.htmlAttrs),
  link: computed(() => localeHead.value.link),
  meta: computed(() => localeHead.value.meta),
})

// `body.sober` pilote l'opacité du canvas et met le marquee en pause (main.css).
watch(sober, (on) => {
  if (import.meta.client) document.body.classList.toggle('sober', on)
})
</script>
