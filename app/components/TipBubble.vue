<template>
  <div
    class="tip"
    :class="{ 'is-on': tip.on }"
    :style="{ left: `${tip.x}px`, top: `${tip.y}px` }"
    aria-hidden="true"
  >
    {{ tip.head }}<small>{{ tip.sub }}</small>
  </div>
</template>

<script setup>
// Purement visuelle : les mêmes informations sont dans les onglets et la fiche.
const { tip } = useTip()
</script>
