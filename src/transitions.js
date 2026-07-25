// Loading screen (page load only) + header glass on scroll. No click transitions.
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------------------
// Loader — "AM." centered, shown once on page load for ~1250 ms
// ---------------------------------------------------------------------------
const loader = document.getElementById('loader');
function hideLoader() {
  if (!loader || loader.classList.contains('is-done')) return;
  loader.classList.add('is-done');
  setTimeout(() => loader.remove(), 800);
}
const minShow = reduce ? 200 : 1250;
const start = performance.now();
function finishLoad() {
  const wait = Math.max(0, minShow - (performance.now() - start));
  setTimeout(hideLoader, wait);
}
if (document.readyState === 'complete') finishLoad();
else window.addEventListener('load', finishLoad);
// filet de sécurité : ne jamais laisser le loader bloquer l'écran
setTimeout(hideLoader, 6000);

// ---------------------------------------------------------------------------
// Header — frosted glass overlay once the page is scrolled past the hero top
// ---------------------------------------------------------------------------
const header = document.querySelector('.site-header');
if (header) {
  const onScrollHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 40);
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();
}

// ---------------------------------------------------------------------------
// Custom cursor — a ring that trails the pointer and grows over interactive
// elements (inspiré de kentokawazoe.com). Desktop pointers only.
// ---------------------------------------------------------------------------
const cursor = document.getElementById('cursor');
const finePointer = window.matchMedia('(pointer: fine)').matches;
if (cursor && finePointer) {
  let tx = window.innerWidth / 2;
  let ty = window.innerHeight / 2;
  let x = tx;
  let y = ty;
  let shown = false;

  window.addEventListener(
    'pointermove',
    (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!shown) {
        shown = true;
        cursor.classList.add('is-visible');
      }
    },
    { passive: true }
  );
  document.addEventListener('mouseleave', () => cursor.classList.remove('is-visible'));
  document.addEventListener('mouseenter', () => cursor.classList.add('is-visible'));
  window.addEventListener('mousedown', () => cursor.classList.add('is-down'));
  window.addEventListener('mouseup', () => cursor.classList.remove('is-down'));

  // grossit au survol des éléments interactifs
  const interactive = 'a, button, .sommaire-row, [role="button"], input, label';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(interactive)) cursor.classList.add('is-hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(interactive)) cursor.classList.remove('is-hover');
  });

  const follow = () => {
    x += (tx - x) * 0.2;
    y += (ty - y) * 0.2;
    cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    requestAnimationFrame(follow);
  };
  requestAnimationFrame(follow);
}
