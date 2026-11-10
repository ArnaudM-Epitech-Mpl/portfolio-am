<template>
  <aside class="panel instrument" aria-labelledby="solar-title">
    <div class="instrument-head">
      <h2 id="solar-title" class="eyebrow">{{ $t('solarTitle') }}</h2>
      <span class="instrument-time">{{ view.time }}</span>
    </div>
    <div class="instrument-stat">
      <b>{{ view.pct }}</b><span>{{ view.label }}</span>
    </div>

    <svg
      ref="svg"
      class="solar"
      viewBox="0 0 320 128"
      aria-hidden="true"
      @pointermove="onMove"
      @pointerleave="onLeave"
    >
      <g v-for="h in HOURS" :key="h">
        <line class="tick" :x1="X(h * 60)" :x2="X(h * 60)" :y1="SOL.y0" :y2="SOL.y1" />
        <text :x="X(h * 60)" y="120" :text-anchor="h === 0 ? 'start' : h === 24 ? 'end' : 'middle'">
          {{ h }} h
        </text>
      </g>
      <line class="base" :x1="SOL.x0" :x2="SOL.x1" :y1="SOL.y1" :y2="SOL.y1" />
      <template v-if="solar">
        <path class="area" :d="`${solar.path}L${SOL.x1},${SOL.y1}L${SOL.x0},${SOL.y1}Z`" />
        <path class="curve" :d="solar.path" />
        <line class="now-line" :x1="solar.nx" :x2="solar.nx" :y1="SOL.y0" :y2="SOL.y1" />
        <line
          class="probe"
          :class="{ 'is-on': probe !== null }"
          :x1="probe ?? 0"
          :x2="probe ?? 0"
          :y1="SOL.y0"
          :y2="SOL.y1"
        />
        <circle class="now-ring" :cx="solar.nx" :cy="solar.ny" r="4" />
        <circle class="now-dot" :cx="solar.nx" :cy="solar.ny" r="4" />
      </template>
    </svg>

    <div class="instrument-foot">
      <span>{{ view.rise }}</span><span>{{ view.set }}</span>
    </div>
    <p class="instrument-note">{{ $t('solarNote') }}</p>
  </aside>
</template>

<script setup>
// Élévation solaire à Montpellier, calculée (pas mesurée) à partir de l'heure
// du visiteur. Rendu côté client uniquement : le serveur ne connaît pas
// l'instant où la page sera lue, il ne rend que le cadre.
const { t, locale } = useI18n()
const { show, hide } = useTip()

const LAT = 43.6108
const LON = 3.8767
const RAD = Math.PI / 180
const DAY_MIN = 1440
const SOL = { x0: 6, x1: 314, y0: 10, y1: 100 }
const HOURS = [0, 6, 12, 18, 24]

const X = (min) => SOL.x0 + (min / DAY_MIN) * (SOL.x1 - SOL.x0)

/** Approximation classique de l'almanach, précise à la minute près. */
function sunElevation(ms) {
  const d = ms / 86400000 + 2440587.5 - 2451545.0
  const g = (357.529 + 0.98560028 * d) * RAD
  const L = (280.459 + 0.98564736 * d + 1.915 * Math.sin(g) + 0.02 * Math.sin(2 * g)) * RAD
  const e = (23.439 - 0.00000036 * d) * RAD
  const ra = Math.atan2(Math.cos(e) * Math.sin(L), Math.cos(L))
  const decl = Math.asin(Math.sin(e) * Math.sin(L))
  const gmst = (18.697374558 + 24.06570982441908 * d) % 24
  const ha = (gmst * 15 + LON) * RAD - ra
  return Math.asin(Math.sin(LAT * RAD) * Math.sin(decl) + Math.cos(LAT * RAD) * Math.cos(decl) * Math.cos(ha)) / RAD
}

/** Minutes écoulées depuis minuit à Montpellier, quel que soit le fuseau du visiteur. */
function parisMinutes(date) {
  const [h, m, s] = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Paris',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
    .format(date)
    .split(':')
    .map(Number)
  return (h % 24) * 60 + m + s / 60
}

const solar = shallowRef(null)
const probe = ref(null)
const svg = ref(null)
let timer = 0

function compute() {
  const now = new Date()
  const nowMin = parisMinutes(now)
  const midnight = now.getTime() - nowMin * 60000
  // part du pic : sinus de l'élévation, nul sous l'horizon
  const val = (min) => Math.max(0, Math.sin(sunElevation(midnight + min * 60000) * RAD))

  let peak = 0
  let rise = null
  let set = null
  for (let m = 0; m < DAY_MIN; m++) {
    const up = sunElevation(midnight + m * 60000) > -0.833 // réfraction + demi-diamètre
    if (up && rise === null) rise = m
    if (up) set = m
    peak = Math.max(peak, val(m))
  }
  if (!peak) return // jamais le cas à cette latitude : on garde le cadre vide

  const Y = (v) => SOL.y1 - (v / peak) * (SOL.y1 - SOL.y0)
  let path = ''
  for (let m = 0; m <= DAY_MIN; m += 5) path += `${m ? 'L' : 'M'}${X(m).toFixed(1)},${Y(val(m)).toFixed(1)}`

  solar.value = {
    nowMin,
    val,
    peak,
    rise,
    set,
    path,
    nx: X(nowMin),
    ny: Y(val(nowMin)),
    pct: Math.round((val(nowMin) / peak) * 100),
  }
}

const fmtMin = (min) => {
  const total = Math.round(min)
  const h = Math.floor(total / 60)
  const m = String(total % 60).padStart(2, '0')
  return locale.value === 'fr' ? `${h} h ${m}` : `${String(h).padStart(2, '0')}:${m}`
}
const fmtPct = (n) => (locale.value === 'fr' ? `${n} %` : `${n}%`)

const view = computed(() => {
  const s = solar.value
  if (!s) return { time: '', pct: '—', label: '', rise: '', set: '' }
  return {
    time: fmtMin(Math.floor(s.nowMin)),
    pct: fmtPct(s.pct),
    label: s.pct > 0 ? t('solarDay') : t('solarNight', { t: fmtMin(s.rise) }),
    rise: t('solarRise', { t: fmtMin(s.rise) }),
    set: t('solarSet', { t: fmtMin(s.set) }),
  }
})

function onMove(e) {
  const s = solar.value
  if (!s) return
  const r = svg.value.getBoundingClientRect()
  const ux = ((e.clientX - r.left) / r.width) * 320
  const min = Math.min(DAY_MIN, Math.max(0, ((ux - SOL.x0) / (SOL.x1 - SOL.x0)) * DAY_MIN))
  probe.value = X(min)
  show(e.clientX, r.top + 8, fmtMin(min), fmtPct(Math.round((s.val(min) / s.peak) * 100)))
}
function onLeave() {
  probe.value = null
  hide()
}

onMounted(() => {
  compute()
  timer = setInterval(compute, 60000)
})
onBeforeUnmount(() => clearInterval(timer))
</script>
