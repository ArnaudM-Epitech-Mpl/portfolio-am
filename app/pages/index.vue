<template>
  <div>
    <ThreeScene />

    <main>
      <!-- ============ HERO ============ -->
      <section id="hero" class="section hero">
        <p class="kicker reveal" data-scroll>{{ $t('kicker') }}</p>
        <h1 class="reveal" data-scroll><span class="outline">Arnaud</span><br />Michel</h1>
        <p class="lede reveal" data-scroll v-html="$t('lede')"></p>
        <p class="status reveal" data-scroll>{{ $t('status') }}</p>

        <nav class="sommaire" aria-label="Parcours">
          <a class="sommaire-row reveal" data-scroll data-scroll-to href="#epitech">
            <span class="num">01</span>
            <span class="label">{{ $t('sumEpitech') }}</span>
            <span class="desc">{{ $t('sumEpitechDesc') }}</span>
            <span class="arrow">→</span>
          </a>
          <a class="sommaire-row reveal" data-scroll data-scroll-to href="#sween">
            <span class="num">02</span>
            <span class="label">{{ $t('sumSween') }}</span>
            <span class="desc">{{ $t('sumSweenDesc') }}</span>
            <span class="arrow">→</span>
          </a>
          <a class="sommaire-row reveal" data-scroll data-scroll-to href="#troa">
            <span class="num">03</span>
            <span class="label">{{ $t('sumTroa') }}</span>
            <span class="desc">{{ $t('sumTroaDesc') }}</span>
            <span class="arrow">→</span>
          </a>
        </nav>

        <div class="marquee" aria-hidden="true">
          <div class="marquee-track">
            <span v-html="$t('marquee')"></span>
            <span v-html="$t('marquee')"></span>
          </div>
        </div>
      </section>

      <!-- ============ EPITECH ============ -->
      <section id="epitech" class="section chapter" data-accent="epitech">
        <div class="chapter-meta">
          <span class="chapter-dates reveal" data-scroll>{{ $t('epitechDates') }}</span>
        </div>
        <h2 class="reveal" data-scroll>Epitech <em>Montpellier</em></h2>
        <p class="role reveal" data-scroll>{{ $t('epitechRole') }}</p>
        <p class="reveal" data-scroll v-html="$t('epitechBody')"></p>
        <ul class="tags reveal" data-scroll>
          <li>{{ $t('epitechTag1') }}</li>
          <li>{{ $t('epitechTag2') }}</li>
          <li>{{ $t('epitechTag3') }}</li>
          <li>{{ $t('epitechTag4') }}</li>
        </ul>
        <NuxtLink class="see-more reveal" data-scroll :to="localePath('/epitech')">
          <span>{{ $t('pgSeeMore') }}</span> <em aria-hidden="true">→</em>
        </NuxtLink>
      </section>

      <!-- ============ SWEEN ============ -->
      <section id="sween" class="section chapter" data-accent="sween">
        <div class="chapter-meta">
          <span class="chapter-dates reveal" data-scroll>2022 — 2025</span>
        </div>
        <h2 class="reveal" data-scroll>Sween</h2>
        <p class="role reveal" data-scroll>{{ $t('sweenRole') }}</p>
        <p class="reveal" data-scroll v-html="$t('sweenBody')"></p>
        <ul class="tags reveal" data-scroll>
          <li>{{ $t('sweenTag1') }}</li>
          <li>{{ $t('sweenTag2') }}</li>
          <li>{{ $t('sweenTag3') }}</li>
          <li>{{ $t('sweenTag4') }}</li>
        </ul>
        <NuxtLink class="see-more reveal" data-scroll :to="localePath('/sween')">
          <span>{{ $t('pgSeeMore') }}</span> <em aria-hidden="true">→</em>
        </NuxtLink>
      </section>

      <!-- ============ TROA ============ -->
      <section id="troa" class="section chapter" data-accent="troa">
        <div class="chapter-meta">
          <span class="chapter-dates reveal" data-scroll>{{ $t('troaDates') }}</span>
        </div>
        <h2 class="reveal" data-scroll>TROA</h2>
        <p class="role reveal" data-scroll>{{ $t('troaRole') }}</p>
        <p class="reveal" data-scroll v-html="$t('troaBody')"></p>
        <ul class="tags projects reveal" data-scroll>
          <li v-for="project in projects" :key="project">{{ project }}</li>
          <li>{{ $t('troaTagMore') }}</li>
        </ul>
        <NuxtLink class="see-more reveal" data-scroll :to="localePath('/troa')">
          <span>{{ $t('pgSeeMore') }}</span> <em aria-hidden="true">→</em>
        </NuxtLink>
      </section>

      <!-- ============ CONTACT ============ -->
      <section id="contact" class="section contact">
        <h2 class="reveal" data-scroll>{{ $t('contactTitle') }}</h2>
        <p class="reveal" data-scroll>
          <a class="mail" href="mailto:arnaud.michel.dev@gmail.com">arnaud.michel.dev@gmail.com</a>
        </p>
        <ul class="socials reveal" data-scroll>
          <li>
            <a href="https://www.linkedin.com/in/arnaud-michel11/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z"/></svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/arnaudmp/" target="_blank" rel="noopener">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.44c-3.14 0-3.51.01-4.75.07-1.15.05-1.77.24-2.19.4-.55.22-.94.47-1.35.88-.41.41-.66.8-.88 1.35-.16.42-.35 1.04-.4 2.19-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.05 1.15.24 1.77.4 2.19.22.55.47.94.88 1.35.41.41.8.66 1.35.88.42.16 1.04.35 2.19.4 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c1.15-.05 1.77-.24 2.19-.4.55-.22.94-.47 1.35-.88.41-.41.66-.8.88-1.35.16-.42.35-1.04.4-2.19.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.05-1.15-.24-1.77-.4-2.19a3.6 3.6 0 0 0-.88-1.35 3.6 3.6 0 0 0-1.35-.88c-.42-.16-1.04-.35-2.19-.4-1.24-.06-1.61-.07-4.75-.07zm0 2.45a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z"/></svg>
              Instagram
            </a>
          </li>
        </ul>
      </section>
    </main>
  </div>
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

useHead({
  title: () => t('metaHomeTitle'),
  meta: [{ name: 'description', content: () => t('metaHomeDesc') }],
})
</script>
