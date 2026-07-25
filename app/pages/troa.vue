<template>
  <main class="page">
    <NuxtLink class="back-link" :to="localePath('/')">
      <span aria-hidden="true">←</span> <span>{{ $t('backHome') }}</span>
    </NuxtLink>

    <div class="page-head">
      <span class="eyebrow">{{ $t('troaDates') }}</span>
      <h1>TROA</h1>
      <p class="page-role">{{ $t('troaRole') }}</p>
    </div>

    <div class="bento">
      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgMissionTitle') }}</h2>
        <p class="lead" v-html="$t('troPageMission')"></p>
      </article>

      <article class="cell" data-scroll>
        <h2>{{ $t('pgAwardsTitle') }}</h2>
        <span class="stat">FWA</span>
        <span class="stat-sub">Awwwards · Grand Prix Stratégies</span>
      </article>

      <article class="cell cell--full" data-scroll>
        <h2>{{ $t('pgProjectsTitle') }}</h2>
        <p v-html="$t('troPageProjectsIntro')"></p>
        <ul>
          <li v-for="project in projects" :key="project">{{ project }}</li>
          <li>{{ $t('troaTagMore') }}</li>
        </ul>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgContextTitle') }}</h2>
        <p v-html="$t('troPageContext')"></p>
      </article>

      <article class="cell cell--tall" data-scroll>
        <h2>{{ $t('pgSkillsTitle') }}</h2>
        <ul class="stack">
          <li>{{ $t('troTag1') }}</li>
          <li>{{ $t('troTag2') }}</li>
          <li>{{ $t('troTag3') }}</li>
          <li>{{ $t('troTag4') }}</li>
          <li>{{ $t('troTag5') }}</li>
        </ul>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgLegacyTitle') }}</h2>
        <p v-html="$t('troPageLegacy')"></p>
      </article>
    </div>

    <nav class="page-nav" aria-label="Autres postes">
      <NuxtLink class="is-prev" :to="localePath('/sween')">
        <span class="dir">{{ $t('pgPrev') }}</span>
        <span class="name">Sween</span>
      </NuxtLink>
      <NuxtLink class="is-next" :to="localePath('/epitech')">
        <span class="dir">{{ $t('pgNext') }}</span>
        <span class="name">Epitech</span>
      </NuxtLink>
    </nav>
  </main>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

// noms propres : jamais traduits
const projects = [
  'Canelés Baillardran',
  'Grotte des Demoiselles',
  'Opéra de Montpellier',
  'Zénith de Montpellier',
  'Entav-Inra',
  'Mat & Seb',
  'Elorell',
  'Addictopôle Occitanie',
  'Evielab',
  '36Velos',
]

useCellSpotlight()

useHead({
  title: () => t('metaTroaTitle'),
  meta: [{ name: 'description', content: () => t('metaTroaDesc') }],
})
</script>
