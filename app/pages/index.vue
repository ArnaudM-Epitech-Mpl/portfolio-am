<template>
  <div>
    <main id="top">
      <!-- ============ HERO ============ -->
      <section class="hero">
        <div class="hero-main">
          <div class="kicker-row">
            <p class="kicker">{{ $t('kicker') }}</p>
            <p class="status">{{ $t('avail') }}</p>
          </div>
          <h1><span class="outline">Arnaud</span><br />Michel</h1>

          <LensSwitch :lens="lens" @pick="setLens" />

          <div class="pitch" aria-live="polite">
            <p v-swap="swapKey" class="pitch-role">{{ reading.role[locale] }}</p>
            <p v-swap="swapKey" class="pitch-lede">{{ reading.lede[locale] }}</p>
            <p class="pitch-loc">{{ $t('loc') }}</p>
          </div>

          <div class="cta-row">
            <a class="btn btn--solid" href="#contact">
              <span>{{ $t('cta1') }}</span> <i aria-hidden="true">→</i>
            </a>
            <a class="btn" href="#parcours">
              <span>{{ $t('cta2') }}</span> <i aria-hidden="true">↓</i>
            </a>
          </div>
        </div>

        <SolarInstrument />

        <div v-swap="swapKey" class="figures">
          <div v-for="key in reading.figures" :key="key" class="figure">
            <b>{{ FIG[key].v[locale] }}</b><span>{{ FIG[key].t[locale] }}</span>
          </div>
        </div>

        <div class="marquee" aria-hidden="true">
          <div class="marquee-track">
            <span v-for="n in 4" :key="n">{{ marquee }}</span>
          </div>
        </div>
      </section>

      <!-- ============ PARCOURS ============ -->
      <section id="parcours" class="section">
        <div v-reveal class="section-head reveal">
          <h2 v-html="$t('trackTitle')"></h2>
          <p class="section-sub">{{ $t('trackSub') }}</p>
        </div>

        <CareerTimeline :lens="lens" :sel="sel" @select="select" />

        <div
          ref="tabs"
          v-reveal
          class="tabs reveal"
          role="tablist"
          :aria-label="$t('navTrack')"
          @keydown="onTabKey"
        >
          <button
            v-for="id in ORDER"
            :id="`tab-${id}`"
            :key="id"
            type="button"
            role="tab"
            aria-controls="sheet"
            :aria-selected="id === sel"
            :tabindex="id === sel ? 0 : -1"
            @click="select(id)"
          >
            {{ EXP[id].tab[locale] }}
          </button>
        </div>

        <ExperienceSheet :id="sel" :lens="lens" />
      </section>

      <!-- ============ MÉTHODE ============ -->
      <section id="methode" class="section">
        <div v-reveal class="section-head reveal">
          <h2 v-html="$t('methodTitle')"></h2>
          <p class="section-sub">{{ $t('methodSub') }}</p>
        </div>
        <div class="method">
          <div v-for="n in 3" :key="n" v-reveal class="panel q reveal">
            <span class="eyebrow">0{{ n }}</span>
            <p>{{ $t(`q${n}`) }}</p>
          </div>
          <div v-reveal class="panel method-wide reveal">
            <h3 class="eyebrow">{{ $t('teamTitle') }}</h3>
            <p>{{ $t('teamBody') }}</p>
            <ul class="chips">
              <li v-for="chip in AI_CHIPS[locale]" :key="chip">{{ chip }}</li>
            </ul>
          </div>
          <div v-reveal class="panel method-self reveal">
            <h3 class="eyebrow">{{ $t('selfTitle') }}</h3>
            <p>{{ $t('selfBody') }}</p>
            <div class="flow">
              <span>{{ $t('flowA') }}</span><i aria-hidden="true">→</i>
              <span v-for="key in LENS_KEYS" :key="key" :class="{ on: key === lens }">
                {{ LENS[key].name[locale] }}
              </span>
              <i aria-hidden="true">→</i><span>{{ $t('flowC') }}</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ============ OUTILS ============ -->
      <section id="outils" class="section">
        <div v-reveal class="section-head reveal">
          <h2 v-html="$t('toolsTitle')"></h2>
          <p class="section-sub">{{ $t('toolsSub') }}</p>
        </div>
        <dl v-reveal class="tools reveal">
          <div
            v-for="key in reading.tools"
            :key="key"
            class="tool-row"
            :class="{ lit: reading.toolsLit.includes(key) }"
          >
            <dt>{{ TOOLS[key].n[locale] }}</dt>
            <dd>{{ TOOLS[key][locale] }}</dd>
          </div>
        </dl>
      </section>

      <!-- ============ CONTACT ============ -->
      <section id="contact" class="section contact">
        <h2 v-reveal class="reveal">{{ $t('contactTitle') }}</h2>
        <p v-reveal class="reveal">{{ $t('contactBody') }}</p>
        <a v-reveal class="mail reveal" :href="`mailto:${CONTACT.email}`">{{ CONTACT.email }}</a>
        <div v-reveal class="socials reveal">
          <a
            v-for="link in CONTACT.links"
            :key="link.href"
            class="btn"
            :href="link.href"
            target="_blank"
            rel="noopener"
          >
            {{ link.label }} <i aria-hidden="true">↗</i>
          </a>
        </div>
      </section>
    </main>

    <SiteFooter />
  </div>
</template>

<script setup>
import { AI_CHIPS, CONTACT, EXP, FIG, LENS, LENS_KEYS, ORDER, TOOLS } from '~/data/profile'

// même instance pour `/` et `/en` : changer de langue ne remonte pas la page,
// la période sélectionnée et la position de scroll sont conservées
definePageMeta({ key: 'home' })

const { t, locale } = useI18n()
const { lens, setLens } = useLens()

const reading = computed(() => LENS[lens.value])
const swapKey = computed(() => `${lens.value}|${locale.value}`)
const marquee = computed(() => `${reading.value.marquee[locale.value].join(' — ')} — `)

// période ouverte : celle que la lecture met en avant, tant que le visiteur
// n'a pas choisi lui-même
const sel = ref(reading.value.open)
const picked = ref(false)
watch(lens, () => {
  if (!picked.value) sel.value = reading.value.open
})
function select(id) {
  sel.value = id
  picked.value = true
}

const tabs = ref(null)
function onTabKey(e) {
  const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key]
  if (!step) return
  e.preventDefault()
  const next = ORDER[(ORDER.indexOf(sel.value) + step + ORDER.length) % ORDER.length]
  select(next)
  nextTick(() => tabs.value?.querySelector(`#tab-${next}`)?.focus())
}

useSeoMeta({
  title: () => t('metaTitle'),
  description: () => t('metaDesc'),
  ogTitle: () => t('metaTitle'),
  ogDescription: () => t('metaDesc'),
  ogType: 'website',
})
</script>
