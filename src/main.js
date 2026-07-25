import * as THREE from 'three';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

// ---------------------------------------------------------------------------
// Setup
// ---------------------------------------------------------------------------
const canvas = document.querySelector('#webgl');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping;

const scene = new THREE.Scene();
scene.fog = new THREE.FogExp2(0x050505, 0.045);

const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.z = 9;

const pmrem = new THREE.PMREMGenerator(renderer);
scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

scene.add(new THREE.AmbientLight(0xffffff, 0.25));

// Each 100vh section maps to one camera "floor" along -Y.
const SPACING = 11;
const RIGHT = 3.2; // objects sit right of the text column (wide screens only)

// ---------------------------------------------------------------------------
// Shared starfield (spans the whole journey)
// ---------------------------------------------------------------------------
function makeStars() {
  const count = 900;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 50;
    positions[i * 3 + 1] = -Math.random() * SPACING * 5 + 6;
    positions[i * 3 + 2] = -Math.random() * 20 - 2;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const mat = new THREE.PointsMaterial({
    color: 0x6f6f6f,
    size: 0.05,
    transparent: true,
    opacity: 0.7,
    depthWrite: false,
  });
  return new THREE.Points(geo, mat);
}
scene.add(makeStars());

// (Hero visuals are pure CSS — Vercel-style triangle render + hover cards.)

// ---------------------------------------------------------------------------
// Epitech — a constellation: nodes linked into a network (transmission)
// ---------------------------------------------------------------------------
const epitechGroup = new THREE.Group();
epitechGroup.position.set(RIGHT, -SPACING, 0);

const NODE_COUNT = 60;
const nodes = [];
for (let i = 0; i < NODE_COUNT; i++) {
  const v = new THREE.Vector3().randomDirection().multiplyScalar(1.4 + Math.random() * 1.6);
  nodes.push(v);
}
{
  const pos = new Float32Array(NODE_COUNT * 3);
  nodes.forEach((v, i) => v.toArray(pos, i * 3));
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
  const pts = new THREE.Points(
    geo,
    new THREE.PointsMaterial({ color: 0xffffff, size: 0.09, transparent: true, opacity: 0.95, depthWrite: false })
  );
  epitechGroup.add(pts);

  // connect each node to its 2 nearest neighbours
  const linePos = [];
  for (const a of nodes) {
    const sorted = nodes
      .filter((b) => b !== a)
      .sort((b, c) => a.distanceToSquared(b) - a.distanceToSquared(c));
    for (const b of sorted.slice(0, 2)) linePos.push(a.x, a.y, a.z, b.x, b.y, b.z);
  }
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(new Float32Array(linePos), 3));
  const lines = new THREE.LineSegments(
    lineGeo,
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.22 })
  );
  epitechGroup.add(lines);
}
scene.add(epitechGroup);

// ---------------------------------------------------------------------------
// Sween — an energy community: buildings exchanging glowing pulses
// ---------------------------------------------------------------------------
const sweenGroup = new THREE.Group();
sweenGroup.position.set(RIGHT, -SPACING * 2, 0);

// soft amber light hanging above the community — no visible sun
const sweenLight = new THREE.PointLight(0xffffff, 26, 18);
sweenLight.position.set(0, 2.2, 0);
sweenGroup.add(sweenLight);

// the energy community: houses and towers with detailed rooftop solar panels
function makeFacadeTexture(cols, rows) {
  const cv = document.createElement('canvas');
  cv.width = 32 * cols;
  cv.height = 32 * rows;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#141414';
  ctx.fillRect(0, 0, cv.width, cv.height);
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      ctx.fillStyle = Math.random() < 0.5 ? '#e6e6e6' : '#232323';
      ctx.fillRect(x * 32 + 8, y * 32 + 7, 16, 18);
    }
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

// vrai panneau PV : cadre alu + cellules avec grille
const aluMat = new THREE.MeshStandardMaterial({ color: 0x9aa4b5, metalness: 0.85, roughness: 0.35 });
function makeCellsTexture() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const ctx = cv.getContext('2d');
  ctx.fillStyle = '#7a7a7a';
  ctx.fillRect(0, 0, 128, 128);
  ctx.fillStyle = '#101010';
  for (let y = 2; y < 126; y += 21) {
    for (let x = 2; x < 126; x += 21) {
      ctx.fillRect(x, y, 19, 19);
    }
  }
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const cellsTex = makeCellsTexture();

function makeSolarPanel(w, d) {
  const g = new THREE.Group();
  const frame = new THREE.Mesh(new THREE.BoxGeometry(w + 0.05, 0.022, d + 0.05), aluMat);
  g.add(frame);
  const cells = new THREE.Mesh(
    new THREE.BoxGeometry(w, 0.018, d),
    new THREE.MeshPhysicalMaterial({
      map: cellsTex,
      metalness: 0.4,
      roughness: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.08,
    })
  );
  cells.position.y = 0.014;
  g.add(cells);
  return g;
}

// panneau incliné sur pieds pour toit plat
function makeRoofPanel(w, d) {
  const g = new THREE.Group();
  const tilt = 0.42;
  const panel = makeSolarPanel(w, d);
  panel.rotation.x = -tilt;
  panel.position.y = 0.09;
  g.add(panel);
  const leg = new THREE.Mesh(new THREE.BoxGeometry(w * 0.75, 0.1, 0.018), aluMat);
  leg.position.set(0, 0.04, -Math.sin(tilt) * (d / 2) * 0.9);
  g.add(leg);
  return g;
}

const wallMat = new THREE.MeshStandardMaterial({ color: 0x2a2a2a, roughness: 0.9 });
const roofMat = new THREE.MeshStandardMaterial({ color: 0x151515, roughness: 0.9 });

function makeHouse() {
  const g = new THREE.Group();
  const body = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.52, 0.62), wallMat);
  body.position.y = 0.26;
  g.add(body);
  // toit à deux pentes
  const roofShape = new THREE.Shape();
  roofShape.moveTo(-0.47, 0);
  roofShape.lineTo(0.47, 0);
  roofShape.lineTo(0, 0.34);
  roofShape.closePath();
  const roofGeo = new THREE.ExtrudeGeometry(roofShape, { depth: 0.72, bevelEnabled: false });
  roofGeo.translate(0, 0, -0.36);
  const roof = new THREE.Mesh(roofGeo, roofMat);
  roof.position.y = 0.52;
  g.add(roof);
  // panneau qui épouse la pente
  const slope = Math.atan2(0.34, 0.47);
  const panel = makeSolarPanel(0.4, 0.34);
  panel.rotation.z = -slope;
  panel.position.set(0.24, 0.71, 0);
  g.add(panel);
  // fenêtres chaudes + porte
  const winMat = new THREE.MeshBasicMaterial({ color: 0xe6e6e6 });
  const win1 = new THREE.Mesh(new THREE.PlaneGeometry(0.12, 0.14), winMat);
  win1.position.set(0.18, 0.3, 0.311);
  g.add(win1);
  const win2 = win1.clone();
  win2.position.x = -0.18;
  g.add(win2);
  const door = new THREE.Mesh(
    new THREE.PlaneGeometry(0.14, 0.26),
    new THREE.MeshStandardMaterial({ color: 0x0d0d0d, roughness: 0.6 })
  );
  door.position.set(0, 0.13, 0.311);
  g.add(door);
  g.userData.roofY = 0.9;
  return g;
}

function makeTower(h, w) {
  const g = new THREE.Group();
  const rows = Math.max(4, Math.round(h * 6));
  const tex = makeFacadeTexture(4, rows);
  const side = new THREE.MeshStandardMaterial({
    map: tex,
    emissive: 0xffffff,
    emissiveMap: tex,
    emissiveIntensity: 0.45,
    roughness: 0.9,
  });
  const flat = new THREE.MeshStandardMaterial({ color: 0x161616, roughness: 0.95 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(w, h, w), [side, side, flat, flat, side, side]);
  body.position.y = h / 2;
  g.add(body);
  // acrotère
  const cap = new THREE.Mesh(new THREE.BoxGeometry(w + 0.06, 0.06, w + 0.06), roofMat);
  cap.position.y = h + 0.03;
  g.add(cap);
  // deux panneaux inclinés côte à côte
  const p1 = makeRoofPanel(w * 0.42, w * 0.5);
  p1.position.set(-w * 0.22, h + 0.06, 0);
  g.add(p1);
  const p2 = makeRoofPanel(w * 0.42, w * 0.5);
  p2.position.set(w * 0.22, h + 0.06, 0);
  g.add(p2);
  g.userData.roofY = h + 0.24;
  return g;
}

const GROUND = -1.7;
const buildingRoofs = [];
const B_COUNT = 5;
const builders = [
  () => makeTower(1.9, 0.6),
  () => makeHouse(),
  () => makeTower(1.15, 0.55),
  () => makeHouse(),
  () => makeTower(1.45, 0.5),
];
for (let i = 0; i < B_COUNT; i++) {
  const a = (i / B_COUNT) * Math.PI * 2;
  const b = builders[i]();
  b.position.set(Math.cos(a) * 2.5, GROUND, Math.sin(a) * 2.5);
  b.rotation.y = -a + Math.PI / 2 + (Math.random() - 0.5) * 0.4;
  sweenGroup.add(b);
  buildingRoofs.push(new THREE.Vector3(b.position.x, GROUND + b.userData.roofY + 0.08, b.position.z));
}

// energy links: glowing arcs from building to building (+ sun feeding roofs)
const energyLinks = [];
const linkMat = new THREE.LineBasicMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.16,
  blending: THREE.AdditiveBlending,
  depthWrite: false,
});
function addEnergyLink(from, to, lift) {
  const mid = from.clone().add(to).multiplyScalar(0.5);
  mid.y += lift;
  const curve = new THREE.QuadraticBezierCurve3(from.clone(), mid, to.clone());
  const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(40)), linkMat);
  sweenGroup.add(line);
  energyLinks.push(curve);
}
for (let i = 0; i < B_COUNT; i++) addEnergyLink(buildingRoofs[i], buildingRoofs[(i + 1) % B_COUNT], 0.7);
addEnergyLink(buildingRoofs[0], buildingRoofs[2], 1.3);
addEnergyLink(buildingRoofs[1], buildingRoofs[3], 1.5);

// one glowing "comet" per link: bright head with halo, fading trail
function makeGlowTexture() {
  const cv = document.createElement('canvas');
  cv.width = cv.height = 128;
  const ctx = cv.getContext('2d');
  const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.25, 'rgba(255,255,255,0.9)');
  grad.addColorStop(0.6, 'rgba(255,255,255,0.25)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
  const tex = new THREE.CanvasTexture(cv);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
const glowTex = makeGlowTexture();
const TRAIL = 7;
const pulses = [];
for (let l = 0; l < energyLinks.length; l++) {
  const sprites = [];
  for (let k = 0; k <= TRAIL; k++) {
    const mat = new THREE.SpriteMaterial({
      map: glowTex,
      color: 0xffffff,
      transparent: true,
      opacity: k === 0 ? 1 : 0.5 * (1 - k / (TRAIL + 1)),
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });
    const s = new THREE.Sprite(mat);
    s.scale.setScalar(k === 0 ? 0.5 : 0.34 * (1 - k / (TRAIL + 2)));
    sweenGroup.add(s);
    sprites.push(s);
  }
  pulses.push({
    sprites,
    speed: 0.09 + Math.random() * 0.05,
    phase: Math.random(),
    dir: l % 2 === 0 ? 1 : -1,
  });
}
scene.add(sweenGroup);

// ---------------------------------------------------------------------------
// TROA — iridescent sculpture, the award-site years
// ---------------------------------------------------------------------------
const troaGroup = new THREE.Group();
troaGroup.position.set(RIGHT, -SPACING * 3, 0);

// A web experience floating in space: browser window, content wireframe,
// and a cursor that browses it — same figurative language as the other scenes.
function makePanel(w, h, d = 0.06) {
  const g = new THREE.Group();
  const solid = new THREE.Mesh(
    new THREE.BoxGeometry(w, h, d),
    new THREE.MeshStandardMaterial({ color: 0x111111, roughness: 0.55, metalness: 0.2 })
  );
  g.add(solid);
  const edges = new THREE.LineSegments(
    new THREE.EdgesGeometry(solid.geometry),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5 })
  );
  g.add(edges);
  return g;
}

const uiMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 });
const uiBrightMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.8 });
function uiBar(w, h, x, y, mat = uiMat) {
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
  m.position.set(x, y, 0.05);
  return m;
}

const browser = new THREE.Group();
const winPanel = makePanel(3.4, 2.3, 0.08);
browser.add(winPanel);
// barre de titre : trait + trois pastilles
browser.add(uiBar(3.4, 0.012, 0, 0.83));
for (let i = 0; i < 3; i++) {
  const dot = new THREE.Mesh(new THREE.CircleGeometry(0.045, 20), uiBrightMat);
  dot.position.set(-1.5 + i * 0.16, 0.98, 0.05);
  browser.add(dot);
}
// contenu : titre, lignes de texte, bloc média
browser.add(uiBar(1.5, 0.14, -0.85, 0.5, uiBrightMat));
browser.add(uiBar(1.7, 0.05, -0.75, 0.18));
browser.add(uiBar(1.5, 0.05, -0.85, 0.0));
browser.add(uiBar(1.6, 0.05, -0.8, -0.18));
browser.add(uiBar(1.1, 0.05, -1.05, -0.36));
{
  const media = new THREE.Mesh(new THREE.PlaneGeometry(1.1, 1.1), new THREE.MeshBasicMaterial({ visible: false }));
  const mediaFrame = new THREE.LineSegments(
    new THREE.EdgesGeometry(media.geometry),
    new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.6 })
  );
  mediaFrame.position.set(0.95, 0.05, 0.05);
  browser.add(mediaFrame);
  const diag = new THREE.Mesh(new THREE.PlaneGeometry(1.35, 0.02), uiMat);
  diag.position.set(0.95, 0.05, 0.05);
  diag.rotation.z = Math.atan2(1.1, 1.1);
  browser.add(diag);
}
troaGroup.add(browser);

// cartes flottantes en arrière-plan
const backCard1 = makePanel(1.5, 1.05);
backCard1.position.set(-2.1, 0.9, -0.9);
backCard1.rotation.y = 0.35;
troaGroup.add(backCard1);
const backCard2 = makePanel(1.1, 1.5);
backCard2.position.set(2.15, -0.7, -1.2);
backCard2.rotation.y = -0.3;
troaGroup.add(backCard2);

// curseur : flèche extrudée qui navigue et clique
const cursorShape = new THREE.Shape();
cursorShape.moveTo(0, 0);
cursorShape.lineTo(0, -0.34);
cursorShape.lineTo(0.08, -0.26);
cursorShape.lineTo(0.13, -0.38);
cursorShape.lineTo(0.19, -0.35);
cursorShape.lineTo(0.13, -0.24);
cursorShape.lineTo(0.24, -0.23);
cursorShape.closePath();
const cursor = new THREE.Mesh(
  new THREE.ExtrudeGeometry(cursorShape, {
    depth: 0.05,
    bevelEnabled: true,
    bevelThickness: 0.012,
    bevelSize: 0.012,
    bevelSegments: 2,
  }),
  new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, emissive: 0xffffff, emissiveIntensity: 0.25 })
);
cursor.scale.setScalar(1.4);
troaGroup.add(cursor);


// lumière clé chaude + rim violet pour modeler les objets
const troaKey = new THREE.DirectionalLight(0xffffff, 2.4);
troaKey.position.set(-4, 5, 6);
const troaKeyTarget = new THREE.Object3D();
troaGroup.add(troaKeyTarget);
troaKey.target = troaKeyTarget;
troaGroup.add(troaKey);
const troaRim = new THREE.PointLight(0xffffff, 26, 22);
troaRim.position.set(4, -1, -3);
troaGroup.add(troaRim);
scene.add(troaGroup);

// ---------------------------------------------------------------------------
// Scroll + mouse
// ---------------------------------------------------------------------------
let targetY = 0;
let mouseX = 0;
let mouseY = 0;

// Sections can be taller than 100vh (e.g. the hero with its cards), so the
// camera floor is derived from real section offsets, not viewport multiples.
const sectionEls = [...document.querySelectorAll('.section')];
function onScroll() {
  const y = window.scrollY;
  let floor = 0;
  for (let i = 0; i < sectionEls.length; i++) {
    const top = sectionEls[i].offsetTop;
    const h = sectionEls[i].offsetHeight;
    if (y >= top + h) {
      floor = i + 1;
    } else if (y >= top) {
      floor = i + (y - top) / h;
      break;
    }
  }
  targetY = -floor * SPACING;
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

window.addEventListener('pointermove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// On narrow screens the side column disappears: recentre the scenes
// behind the text and step the camera back so nothing gets cropped.
const groups = [epitechGroup, sweenGroup, troaGroup];
const sides = [1, -1, 1]; // le texte alterne gauche/droite, la 3D prend le côté opposé
function layout() {
  const aspect = window.innerWidth / window.innerHeight;
  const offX = aspect > 1.05 ? RIGHT : 0.4;
  // le hero (étage 0) est en CSS pur : les scènes 3D commencent à l'étage 1
  groups.forEach((g, i) => g.position.set(offX * sides[i], -SPACING * (i + 1), 0));
  camera.position.z = aspect > 1.05 ? 9 : 13;
}
layout();

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  layout();
  onScroll();
});

// ---------------------------------------------------------------------------
// Sobriety mode — the TROA wink: kill the GPU, keep the content
// ---------------------------------------------------------------------------
let sober = false;
const soberBtn = document.querySelector('#sobriety');
soberBtn.addEventListener('click', () => {
  sober = !sober;
  document.body.classList.toggle('sober', sober);
  if (!sober) requestAnimationFrame(tick);
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---------------------------------------------------------------------------
// Loop
// ---------------------------------------------------------------------------
const clock = new THREE.Clock();
const tmp = new THREE.Vector3();

function tick() {
  if (sober) {
    renderer.render(scene, camera); // one last dimmed frame
    return;
  }
  const t = clock.getElapsedTime();
  const speed = reducedMotion ? 0.15 : 1;

  // camera follows scroll with easing + mouse parallax
  camera.position.y += (targetY - camera.position.y) * 0.06;
  camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.04;
  camera.rotation.x = mouseY * -0.03;

  epitechGroup.rotation.y = t * 0.12 * speed;

  sweenGroup.rotation.y = t * 0.05 * speed;
  for (let l = 0; l < pulses.length; l++) {
    const p = pulses[l];
    const base = t * p.speed * speed * p.dir + p.phase;
    const curve = energyLinks[l];
    for (let k = 0; k < p.sprites.length; k++) {
      const u = (((base - k * 0.018 * p.dir) % 1) + 1) % 1;
      curve.getPointAt(u, tmp);
      p.sprites[k].position.copy(tmp);
    }
    // la tête pulse légèrement
    p.sprites[0].scale.setScalar(0.5 + Math.sin(t * 5 * speed + l) * 0.07);
  }

  // TROA : la fenêtre flotte, le curseur navigue et « clique »
  const tt = t * speed;
  browser.position.y = Math.sin(tt * 0.6) * 0.08;
  browser.rotation.y = Math.sin(tt * 0.25) * 0.14;
  browser.rotation.x = Math.sin(tt * 0.18) * 0.05;
  backCard1.position.y = 0.9 + Math.sin(tt * 0.5 + 1.2) * 0.1;
  backCard2.position.y = -0.7 + Math.sin(tt * 0.45 + 2.6) * 0.1;
  cursor.position.set(
    0.5 + Math.sin(tt * 0.5) * 0.9,
    -0.1 + Math.sin(tt * 0.34 + 1.1) * 0.55,
    0.45
  );
  const click = Math.pow(Math.max(0, Math.sin(tt * 2.2)), 12);
  cursor.scale.setScalar(1.4 - click * 0.25);

  renderer.render(scene, camera);
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

