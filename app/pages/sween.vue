<template>
  <main class="page">
    <NuxtLink class="back-link" :to="localePath('/')">
      <span aria-hidden="true">←</span> <span>{{ $t('backHome') }}</span>
    </NuxtLink>

    <div class="page-head">
      <span class="eyebrow">2022 — 2025</span>
      <h1>Sween</h1>
      <p class="page-role">{{ $t('sweenRole') }}</p>
    </div>

    <div class="bento">
      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgMissionTitle') }}</h2>
        <p class="lead" v-html="$t('swePageMission')"></p>
      </article>

      <article class="cell" data-scroll>
        <h2>{{ $t('pgPeriodTitle') }}</h2>
        <span class="stat">2022 — 2025</span>
        <span class="stat-sub">{{ $t('swePageStatSub') }}</span>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgScopeTitle') }}</h2>
        <ol class="facts">
          <li>{{ $t('sweFact1') }}</li>
          <li>{{ $t('sweFact2') }}</li>
          <li>{{ $t('sweFact3') }}</li>
        </ol>
      </article>

      <article class="cell cell--tall" data-scroll>
        <h2>{{ $t('pgSkillsTitle') }}</h2>
        <ul>
          <li>{{ $t('sweenTag1') }}</li>
          <li>{{ $t('sweenTag2') }}</li>
          <li>{{ $t('sweenTag3') }}</li>
          <li>{{ $t('sweenTag4') }}</li>
        </ul>
      </article>

      <article class="cell cell--wide" data-scroll>
        <h2>{{ $t('pgContextTitle') }}</h2>
        <p v-html="$t('swePageContext')"></p>
      </article>

      <article class="cell cell--full" data-scroll>
        <h2>{{ $t('pgAfterTitle') }}</h2>
        <p v-html="$t('swePageAfter')"></p>
      </article>
    </div>

    <nav class="page-nav" aria-label="Autres postes">
      <NuxtLink class="is-prev" :to="localePath('/epitech')">
        <span class="dir">{{ $t('pgPrev') }}</span>
        <span class="name">Epitech</span>
      </NuxtLink>
      <NuxtLink class="is-next" :to="localePath('/troa')">
        <span class="dir">{{ $t('pgNext') }}</span>
        <span class="name">TROA</span>
      </NuxtLink>
    </nav>
  </main>
</template>

<script setup>
const { t } = useI18n()
const localePath = useLocalePath()

useCellSpotlight()

useHead({
  title: () => t('metaSweenTitle'),
  meta: [{ name: 'description', content: () => t('metaSweenDesc') }],
})
</script>
