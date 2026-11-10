<template>
  <div v-reveal class="panel tl-wrap reveal">
    <div ref="scroller" class="tl-scroll">
      <!-- les onglets sous la frise portent la navigation accessible -->
      <svg class="tl" :viewBox="`0 0 ${TL.W} ${TL.H}`" aria-hidden="true">
        <line v-for="y in gridYears" :key="`g${y}`" class="grid" :x1="tx(y)" :x2="tx(y)" y1="18" y2="200" />
        <text v-for="y in labelYears" :key="`y${y}`" class="yr" :x="tx(y === START_YEAR ? T0 + 0.25 : y + 0.5)" y="220">
          {{ y }}
        </text>
        <line class="axis" :x1="TL.L" :x2="TL.W - TL.R" y1="200" y2="200" />
        <text v-for="(row, i) in rows" :key="`r${i}`" class="row-label" x="0" :y="TL.rows[i] + TL.bh / 2 + 4">
          {{ row }}
        </text>

        <g
          v-for="s in bars"
          :key="s.i"
          class="seg-g"
          :class="{ approx: s.approx, lit: s.lit, sel: s.id === sel }"
          @click="emit('select', s.id)"
          @pointermove="show($event.clientX, $event.clientY, s.tipHead, s.tipDates)"
          @pointerleave="hide"
        >
          <rect :x="s.x" :y="s.y" :width="s.w" :height="TL.bh" rx="6" />
          <text v-if="s.label" :x="s.x + s.w / 2" :y="s.y + TL.bh / 2 + 4">{{ s.label }}</text>
        </g>

        <line class="now" :x1="nx" :x2="nx" y1="10" y2="200" />
        <text class="now-label" :x="nx - 6" y="18">{{ $t('now') }}</text>
        <circle class="pulse" cx="0" cy="200" r="2.5" :style="{ '--x0': `${TL.L}px`, '--x1': `${nx}px` }" />
      </svg>
    </div>
    <div class="tl-foot">
      <span>{{ $t('tlLegend') }}</span><span>{{ $t('tlHint') }}</span>
    </div>
  </div>
</template>

<script setup>
import { EXP, LENS, SEGS } from '~/data/profile'

const props = defineProps({
  lens: { type: String, required: true },
  sel: { type: String, required: true },
})
const emit = defineEmits(['select'])

const { t, locale } = useI18n()
const { show, hide } = useTip()
const now = useNow()

// géométrie du SVG (unités du viewBox)
const TL = { W: 1100, H: 236, L: 118, R: 24, rows: [34, 92, 150], bh: 36 }
const START_YEAR = 2017
const T0 = START_YEAR + 0.5

// en UTC : le serveur et le navigateur doivent calculer la même abscisse
const nowDec = computed(() => {
  const d = new Date(now.value)
  return d.getUTCFullYear() + d.getUTCMonth() / 12 + d.getUTCDate() / 365
})
const endYear = computed(() => Math.floor(nowDec.value) + 1)
const round = (n) => Math.round(n * 10) / 10
const tx = (d) => round(TL.L + ((d - T0) / (endYear.value + 0.2 - T0)) * (TL.W - TL.L - TL.R))

const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i)
const gridYears = computed(() => range(START_YEAR + 1, endYear.value))
const labelYears = computed(() => range(START_YEAR, endYear.value - 1))
const rows = computed(() => [t('rowEdu'), t('rowRoles'), t('rowFreelance')])
const nx = computed(() => tx(nowDec.value))

const bars = computed(() => {
  const lit = LENS[props.lens].lit
  const lg = locale.value
  return SEGS.map((s, i) => {
    const x0 = tx(s.a)
    return {
      i,
      id: s.id,
      approx: !!s.approx,
      lit: lit.includes(s.id),
      label: s.label[lg],
      x: x0 + 1,
      y: TL.rows[s.row],
      w: Math.max(6, round(tx(s.b ?? nowDec.value) - x0 - 2)),
      tipHead: s.tip ? s.tip.head[lg] : EXP[s.id].tab[lg],
      tipDates: s.tip ? s.tip.dates : EXP[s.id].dates[lg],
    }
  })
})

// sur petit écran la frise défile : on garde le segment sélectionné au centre
const scroller = ref(null)
function revealSel() {
  const sc = scroller.value
  const g = sc?.querySelector('.seg-g.sel')
  if (!g || sc.scrollWidth <= sc.clientWidth) return
  const r = g.getBoundingClientRect()
  const c = sc.getBoundingClientRect()
  sc.scrollLeft += r.left + r.width / 2 - (c.left + c.width / 2)
}

watch(() => props.sel, () => nextTick(revealSel))
onMounted(() => {
  revealSel()
  window.addEventListener('resize', revealSel)
})
onBeforeUnmount(() => window.removeEventListener('resize', revealSel))
</script>
