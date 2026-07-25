<template>
  <main class="page">
    <NuxtLink class="back-link" :to="localePath('/')">
      <span aria-hidden="true">←</span> <span>{{ $t('backHome') }}</span>
    </NuxtLink>

    <div class="page-head">
      <span class="eyebrow">{{ $t('epitechDates') }}</span>
      <h1><span class="outline">Epitech</span><br />Montpellier</h1>
      <p class="page-role">{{ $t('epitechRole') }}</p>
    </div>

    <div class="bento">
      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgMissionTitle') }}</h2>
        <p class="lead" v-html="$t('epiPageMission')"></p>
      </article>

      <article class="cell" data-scroll>
        <h2>{{ $t('pgPeriodTitle') }}</h2>
        <span class="stat">{{ $t('epiPageStat') }}</span>
        <span class="stat-sub">{{ $t('epiPageStatSub') }}</span>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgScopeTitle') }}</h2>
        <ol class="facts">
          <li>{{ $t('epiFact1') }}</li>
          <li>{{ $t('epiFact2') }}</li>
          <li>{{ $t('epiFact3') }}</li>
        </ol>
      </article>

      <article class="cell cell--tall" data-scroll>
        <h2>{{ $t('pgSkillsTitle') }}</h2>
        <ul>
          <li>{{ $t('epitechTag1') }}</li>
          <li>{{ $t('epitechTag2') }}</li>
          <li>{{ $t('epitechTag3') }}</li>
          <li>{{ $t('epitechTag4') }}</li>
        </ul>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgContextTitle') }}</h2>
        <p v-html="$t('epiPageContext')"></p>
      </article>

      <article class="cell cell--full" data-scroll>
        <h2>{{ $t('pgWhyTitle') }}</h2>
        <p v-html="$t('epiPageWhy')"></p>
      </article>
    </div>

    <nav class="page-nav" aria-label="Autres postes">
      <NuxtLink class="is-prev" :to="localePath('/troa')">
        <span class="dir">{{ $t('pgPrev') }}</span>
        <span class="name">TROA</span>
      </NuxtLink>
      <NuxtLink class="is-next" :to="localePath('/sween')">
        <span class="dir">{{ $t('pgNext') }}</span>
        <span class="name">Sween</span>
      </NuxtLink>
    </nav>
  </main>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useCellSpotlight()

useHead({
  title: () => t('metaEpitechTitle'),
  meta: [{ name: 'description', content: () => t('metaEpitechDesc') }],
})
</script>
