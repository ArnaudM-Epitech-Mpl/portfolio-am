<template>
  <canvas id="webgl" ref="canvas"></canvas>
</template>

<script setup>
import { createScene } from '~/utils/scene'

const canvas = ref(null)
const sober = useSober()
let instance = null

onMounted(async () => {
  // le ref d'un composant `.client` n'est résolu qu'au tick suivant ; ce délai
  // garantit aussi que les `.section` sont dans le DOM, la scène lisant leurs
  // offsets réels pour piloter la caméra au scroll.
  await nextTick()
  if (!canvas.value) return
  instance = createScene(canvas.value)
  if (sober.value) instance.setSober(true)
})

watch(sober, (on) => instance?.setSober(on))

// sans ce teardown, chaque retour à l'accueil fuirait un contexte WebGL
onBeforeUnmount(() => {
  instance?.destroy()
  instance = null
})
</script>
