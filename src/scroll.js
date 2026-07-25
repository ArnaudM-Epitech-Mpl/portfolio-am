// Locomotive Scroll v5 (Lenis-based, native scroll) — smooth scrolling,
// scroll-triggered reveals (.is-inview) and light parallax (data-scroll-speed).
// Native scroll is preserved, so the Three.js camera (window.scrollY) keeps working.
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// eslint-disable-next-line no-new
new LocomotiveScroll({
  lenisOptions: {
    lerp: reduce ? 1 : 0.09,
    smoothWheel: !reduce,
    wheelMultiplier: 1,
  },
  // déclenche les reveals quand l'élément est un peu entré dans le viewport
  triggerRootMargin: '-8% 0px -12% 0px',
});
