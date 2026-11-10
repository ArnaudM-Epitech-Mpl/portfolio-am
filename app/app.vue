<template>
  <div>
    <AppLoader />
    <CustomCursor />
    <TipBubble />
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
  // posée avant le premier rendu : loader et reveals ne masquent le contenu
  // que si JavaScript est là pour le ré-afficher (main.css)
  script: [{ key: 'js-flag', innerHTML: "document.documentElement.classList.add('js')", tagPosition: 'head' }],
})

// `body.sober` coupe toutes les animations (main.css).
watch(sober, (on) => {
  if (import.meta.client) document.body.classList.toggle('sober', on)
})
</script>
