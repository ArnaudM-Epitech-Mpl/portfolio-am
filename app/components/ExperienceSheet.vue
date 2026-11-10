<template>
  <article
    id="sheet"
    v-reveal
    v-swap="`${id}|${lens}|${locale}`"
    class="panel sheet reveal"
    role="tabpanel"
    :aria-labelledby="`tab-${id}`"
  >
    <div>
      <span class="sheet-dates">{{ exp.dates[locale] }}</span>
      <!-- company / context : HTML écrit à la main dans data/profile.js -->
      <h3 v-html="exp.company[locale]"></h3>
      <p class="sheet-role">{{ exp.title[locale] }}</p>
      <p v-if="exp.context" class="sheet-context" v-html="exp.context[locale]"></p>
    </div>

    <div>
      <ol class="facts">
        <li
          v-for="(fact, i) in exp.facts"
          :key="`${id}-${i}`"
          :class="{ lit: exp.neutral || fact.l.includes(lens) }"
        >
          <span>{{ fact[locale] }}</span>
        </li>
      </ol>
      <p v-if="hasHighlight" class="facts-legend">
        {{ $t('factsLegend', { l: LENS[lens].name[locale] }) }}
      </p>
      <ul v-if="exp.chips" class="chips">
        <li v-for="chip in exp.chips[locale]" :key="chip">{{ chip }}</li>
      </ul>
      <template v-if="exp.projects">
        <p class="facts-legend facts-legend--projects">{{ $t('projects') }}</p>
        <ul class="chips dashed">
          <li v-for="project in exp.projects" :key="project">{{ project }}</li>
        </ul>
      </template>
    </div>
  </article>
</template>

<script setup>
import { EXP, LENS } from '~/data/profile'

const props = defineProps({
  id: { type: String, required: true },
  lens: { type: String, required: true },
})
const { locale } = useI18n()

const exp = computed(() => EXP[props.id])
const hasHighlight = computed(
  () => !exp.value.neutral && exp.value.facts.some((fact) => fact.l.includes(props.lens))
)
</script>
