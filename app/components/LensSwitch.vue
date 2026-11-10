<template>
  <div class="lens">
    <span id="lens-label" class="lens-label">{{ $t('lensLabel') }}</span>
    <div
      ref="group"
      class="seg"
      :class="{ 'is-ready': ready }"
      role="radiogroup"
      aria-labelledby="lens-label"
      @keydown="onKey"
    >
      <span class="seg-thumb" :style="thumb"></span>
      <button
        v-for="key in LENS_KEYS"
        :key="key"
        type="button"
        role="radio"
        :data-lens="key"
        :aria-checked="key === lens"
        :tabindex="key === lens ? 0 : -1"
        @click="emit('pick', key)"
      >
        <span class="long">{{ LENS[key].name[locale] }}</span>
        <span class="short">{{ LENS[key].short[locale] }}</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { LENS, LENS_KEYS } from '~/data/profile'

const props = defineProps({ lens: { type: String, required: true } })
const emit = defineEmits(['pick'])
const { locale } = useI18n()

const group = ref(null)
const ready = ref(false)
const thumb = ref({})

// le pouce glissant se cale sur le bouton actif : il faut le mesurer
const place = () => {
  const on = group.value?.querySelector(`[data-lens="${props.lens}"]`)
  if (!on) return
  thumb.value = { width: `${on.offsetWidth}px`, transform: `translateX(${on.offsetLeft}px)` }
  ready.value = true
}

const onKey = (e) => {
  const step = { ArrowRight: 1, ArrowDown: 1, ArrowLeft: -1, ArrowUp: -1 }[e.key]
  if (!step) return
  e.preventDefault()
  const next = LENS_KEYS[(LENS_KEYS.indexOf(props.lens) + step + LENS_KEYS.length) % LENS_KEYS.length]
  emit('pick', next)
  group.value?.querySelector(`[data-lens="${next}"]`)?.focus()
}

watch([() => props.lens, locale], () => nextTick(place))

onMounted(() => {
  place()
  window.addEventListener('resize', place)
  document.fonts?.ready.then(place)
})
onBeforeUnmount(() => window.removeEventListener('resize', place))
</script>
