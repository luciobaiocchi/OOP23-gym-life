import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GameState, FOODS, DIFFICULTIES } from './state.js';
import { Audio, GYM_STATIONS } from './audio.js';
import { Character } from './character.js';
import { buildCity, buildHome, buildGym, buildShop, buildBank } from './world.js';
import { UI, effectsHtml, ICONS } from './ui.js';
import { SpotifyStation } from './spotify.js';
import { TV_VIDEOS, embedUrl, thumbUrl } from './tv.js';
import { squatGame, benchGame, latGame, workGame, planeGame, basketballGame, boxingGame } from './minigames.js';
import { buildPark, RUN_ROUTE, SHOT_SPOTS } from './park.js';
import { LEAGUES, QUESTS, SECRETS, questProgress, rankFor } from './progression.js';
import { Minimap, DESTINATIONS, PLACE_NAMES } from './navigation.js';

const WORK_STAMINA = 20;
const SAVE_KEY = 'gymlife3d.save';
const SCORES_KEY = 'gymlife3d.scores';
const QUALITY_KEY = 'gymlife3d.quality';
const RADIO_KEY = 'gymlife3d.radio';

const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage unavailable */ } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage unavailable */ } },
};

// ---------------------------------------------------------------- RENDERER
function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

if (!webglAvailable()) {
  document.body.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#fff">Your browser does not support WebGL. Try updating it or enabling hardware acceleration.</div>';
  throw new Error('WebGL not available');
}

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
if (isTouch) document.body.classList.add('touch');
const QUALITIES = ['low', 'medium', 'high'];
let quality = store.get(QUALITY_KEY);
if (!QUALITIES.includes(quality)) quality = isTouch ? 'low' : 'medium';

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.getElementById('app').appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1200);

// Allocate expensive postprocessing targets only if high quality is actually used.
let composer = null, renderPass = null, gtaoPass = null;
function ensurePostprocessing() {
  if (composer) return;
  composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 2 }));
  renderPass = new RenderPass(place.scene, camera);
  gtaoPass = new GTAOPass(place.scene, camera, 1, 1);
  gtaoPass.blendIntensity = 0.75;
  gtaoPass.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.5, thickness: 1.5, scale: 1.2, samples: 8 });
  composer.addPass(renderPass);
  composer.addPass(gtaoPass);
  composer.addPass(new OutputPass());
}

function applyQuality() {
  if (quality === 'high') ensurePostprocessing();
  const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(quality === 'high' ? Math.min(dpr, 2) : quality === 'medium' ? Math.min(dpr, 1.5) : Math.min(dpr, 1) * 0.85);
  renderer.shadowMap.enabled = quality !== 'low';
  Object.values(places).forEach((p) => p && p.scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; }));
  document.getElementById('btn-quality').innerHTML = ICONS.quality + `<span>${quality[0].toUpperCase()}</span>`;
  resize();
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  if (composer && quality === 'high') { composer.setPixelRatio(renderer.getPixelRatio()); composer.setSize(w, h); }
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---------------------------------------------------------------- GLOBAL STATE
const audio = new Audio();
const ui = new UI(audio);
ui.onPause = pauseGame;
const places = { city: buildCity(), home: null, gym: null, shop: null, bank: null, park: null };
const builders = { home: buildHome, gym: buildGym, shop: buildShop, bank: buildBank, park: buildPark };
const pmrem = new THREE.PMREMGenerator(renderer);

// Physical sky for the city, also used as environment lighting/reflections
const sky = new Sky();
sky.scale.setScalar(900);
sky.material.uniforms.turbidity.value = 2.2;
sky.material.uniforms.rayleigh.value = 2.2;
sky.material.uniforms.mieCoefficient.value = 0.004;
sky.material.uniforms.mieDirectionalG.value = 0.82;
sky.material.uniforms.sunPosition.value.copy(places.city.sunDir);
places.city.scene.add(sky);
{
  const envScene = new THREE.Scene();
  const envSky = new Sky();
  envSky.scale.setScalar(900);
  envSky.material.uniforms.turbidity.value = 2.2;
  envSky.material.uniforms.rayleigh.value = 2.2;
  envSky.material.uniforms.sunPosition.value.copy(places.city.sunDir);
  envScene.add(envSky);
  places.city.scene.environment = pmrem.fromScene(envScene, 0.02, 1, 2000).texture;
  places.city.scene.environmentIntensity = 0.22;
}
const roomEnv = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;

function setupPlace(p) {
  p.playerPos = pos;
  if (p.name === 'park') { p.scene.environment = places.city.scene.environment; p.scene.environmentIntensity = 0.3; }
  else if (p !== places.city) {
    p.scene.environment = roomEnv;
    p.scene.environmentIntensity = 0.35;
  }
  return p;
}
const getPlace = (id) => (places[id] ||= setupPlace(builders[id]()));

let state = null;
let place = places.city;
let mode = 'title'; // title | play | busy | minigame | end
let minigame = null;
let paused = false, sessionCancel = null, race = null, saveTimer = 0;
let waypoint = 'gym';
let breath = 100, breathDelay = 0, winded = false, jumpVelocity = 0, jumpHeight = 0, touchSprint = false;
const minimap = new Minimap(document.getElementById('minimap'));
const OUTFITS = [0x1b1d22, 0x316b64, 0xad5948, 0xd2b65d];

const storedStation = GYM_STATIONS.findIndex(st => st.id === store.get(RADIO_KEY));
let station = storedStation >= 0 ? storedStation : 1;

// The gym plays the selected radio station, other places their own music
const spotify = new SpotifyStation();
const musicFor = (p) => (p.name === 'gym' ? GYM_STATIONS[station].id : p.music);

// shows the Spotify player only in the gym with the Spotify station selected
function syncSpotify() {
  if (place.name === 'gym' && GYM_STATIONS[station].external && mode !== 'title') spotify.show();
  else spotify.hide();
  // radio button (for touch screens and mouse users) only in the gym
  document.getElementById('btn-radio').classList.toggle('hidden', place.name !== 'gym' || mode === 'title');
}

const player = new Character({ shirtless: true, shorts: 0x1b1d22 });
const pos = new THREE.Vector3();
let heading = 0;
let speed = 0;
place.scene.add(player.root);
setupPlace(places.city);

const cam = { yaw: 0.6, pitch: 0.42, zoom: 1, target: new THREE.Vector3(), fixed: null };

applyQuality();

// ---------------------------------------------------------------- INPUT
const keys = new Set();
const touchMove = { x: 0, y: 0 };

window.addEventListener('keydown', (e) => {
  if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;
  const k = e.key;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(k)) e.preventDefault();
  audio.init();
  if (k === 'Escape' && !e.repeat) {
    if (paused) resumeGame();
    else if (mode === 'play' || mode === 'minigame') pauseGame();
    else if (ui.isOpen()) ui.handleKey(k);
    return;
  }
  if (paused) return;
  if (mode === 'minigame' && minigame) { if (!e.repeat) minigame.key(k); return; }
  if (ui.isOpen()) { if (!e.repeat) ui.handleKey(k); return; }
  keys.add(k.toLowerCase());
  if (mode !== 'play' || e.repeat) return;
  if (k.toLowerCase() === 'e' || k === 'Enter') interact();
  else if (k === ' ') jump();
  else if (k.toLowerCase() === 'j') showJournal();
  else if (k.toLowerCase() === 'm') toggleMute();
  else if (k.toLowerCase() === 'r') nextStation();
  else if (k.toLowerCase() === 'g') toggleQuality();
  else if (k.toLowerCase() === 'h') showHelp();
  else if (['1', '2', '3'].includes(k)) eat(Object.keys(FOODS)[Number(k) - 1]);
});
window.addEventListener('keyup', e => {
  keys.delete(e.key.toLowerCase());
  if (!paused) minigame?.release?.(e.key);
});
window.addEventListener('blur', () => { keys.clear(); touchMove.x = touchMove.y = 0; touchSprint = false; drag = null; if (mode === 'play' || mode === 'minigame') pauseGame(); });
document.addEventListener('visibilitychange', () => {
  if (document.hidden) { pauseGame(); saveGame(); audio.ctx?.suspend(); }
  lastTime = performance.now();
});
window.addEventListener('pagehide', saveGame);
window.addEventListener('pointerdown', () => audio.init());

// Rotate the camera by dragging the mouse / finger on the background
let drag = null;
renderer.domElement.addEventListener('pointerdown', (e) => { if (paused || mode !== 'play') return; drag = { x: e.clientX, y: e.clientY, id: e.pointerId }; });
window.addEventListener('pointermove', (e) => {
  if (!drag || drag.id !== e.pointerId) return;
  cam.yaw -= (e.clientX - drag.x) * 0.006;
  cam.pitch = Math.max(0.12, Math.min(1.25, cam.pitch + (e.clientY - drag.y) * 0.004));
  drag.x = e.clientX;
  drag.y = e.clientY;
});
window.addEventListener('pointerup', (e) => { if (drag && drag.id === e.pointerId) drag = null; });
window.addEventListener('pointercancel', () => { drag = null; });
renderer.domElement.addEventListener('wheel', (e) => {
  cam.zoom = Math.max(0.55, Math.min(1.7, cam.zoom + Math.sign(e.deltaY) * 0.08));
}, { passive: true });

// Virtual joystick
if (isTouch) {
  document.getElementById('touch').classList.remove('hidden');
  const stick = document.getElementById('stick');
  const knob = document.getElementById('knob');
  let sid = null;
  const moveKnob = (e) => {
    const r = stick.getBoundingClientRect();
    let dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
    const d = Math.hypot(dx, dy), max = r.width / 2;
    if (d > max) { dx = (dx / d) * max; dy = (dy / d) * max; }
    knob.style.transform = `translate(${dx}px, ${dy}px)`;
    touchMove.x = dx / max;
    touchMove.y = dy / max;
  };
  stick.addEventListener('pointerdown', (e) => { sid = e.pointerId; stick.setPointerCapture(sid); moveKnob(e); e.stopPropagation(); });
  stick.addEventListener('pointermove', (e) => { if (e.pointerId === sid) moveKnob(e); });
  const release = () => { sid = null; touchMove.x = touchMove.y = 0; knob.style.transform = ''; };
  stick.addEventListener('pointerup', release);
  stick.addEventListener('pointercancel', release);
  document.getElementById('btn-action').addEventListener('click', () => { audio.init(); if (mode === 'play' && !paused) interact(); });
}

document.getElementById('btn-journal').innerHTML = ICONS.journal;
document.getElementById('btn-pause').innerHTML = ICONS.pause;
document.getElementById('btn-journal').onclick = () => { if (mode === 'play' && !paused) showJournal(); };
document.getElementById('btn-pause').onclick = pauseGame;
document.getElementById('objective').onclick = () => { if (mode === 'play' && !paused) showJournal(); };
document.getElementById('map-card').onclick = () => { if (mode === 'play' && !paused) showJournal(); };
document.getElementById('pause-resume').onclick = resumeGame;
document.getElementById('pause-stop').onclick = () => { resumeGame(); cancelSession(); };
document.getElementById('pause-menu').onclick = () => { resumeGame(); if (sessionCancel || race || minigame) cancelSession(); saveGame(); showTitle(); };
document.getElementById('btn-run').onpointerdown = e => { e.preventDefault(); e.currentTarget.setPointerCapture(e.pointerId); touchSprint = true; };
document.getElementById('btn-run').onpointerup = document.getElementById('btn-run').onpointercancel = () => { touchSprint = false; };
document.getElementById('btn-jump').onclick = jump;
document.getElementById('btn-mute').innerHTML = ICONS.sound;
document.getElementById('btn-help').innerHTML = ICONS.help;
document.getElementById('btn-mute').onclick = toggleMute;
document.getElementById('btn-quality').onclick = toggleQuality;
document.getElementById('btn-help').onclick = () => mode === 'play' && showHelp();
document.getElementById('btn-radio').innerHTML = ICONS.radio;
document.getElementById('btn-radio').onclick = () => { audio.init(); if (mode === 'play') nextStation(); };
ui.onEat = (id) => mode === 'play' && eat(id);

function toggleMute() {
  audio.init();
  const m = audio.toggleMute();
  document.getElementById('btn-mute').innerHTML = m ? ICONS.muted : ICONS.sound;
}

function toggleQuality() {
  quality = QUALITIES[(QUALITIES.indexOf(quality) + 1) % QUALITIES.length];
  store.set(QUALITY_KEY, quality);
  applyQuality();
  ui.toast(`Graphics quality: ${quality}`);
}

// ---------------------------------------------------------------- PLACES
function setPlace(id, spawn) {
  place.scene.remove(player.root);
  place = id === 'city' ? places.city : getPlace(id);
  place.scene.add(player.root);
  const sp = spawn || place.spawn;
  speed = jumpVelocity = jumpHeight = 0;
  keys.clear();
  touchMove.x = touchMove.y = 0;
  pos.set(sp.x, 0, sp.z);
  heading = sp.rot || 0;
  document.getElementById('map-location').textContent = PLACE_NAMES[id];
  syncSecrets();
  cam.yaw = heading + Math.PI;
  cam.pitch = 0.5;
  cam.snap = true;
  player.setPose('idle');
  audio.play(musicFor(place));
  syncSpotify();
  if (place.name === 'gym') {
    const st = GYM_STATIONS[station];
    setTimeout(() => ui.toast(st.external
      ? `Gym radio: your Spotify playlist. Press play on the player (${isTouch ? 'radio button' : 'R'} to switch station)`
      : `Gym radio: ${st.name} (${isTouch ? 'radio button' : 'press R'} to switch)`), 600);
  }
}

function nextStation() {
  if (place.name !== 'gym') {
    ui.toast('The gym radio only plays inside the gym.');
    return;
  }
  station = (station + 1) % GYM_STATIONS.length;
  store.set(RADIO_KEY, GYM_STATIONS[station].id);
  audio.sfx('radio');
  audio.play(musicFor(place));
  syncSpotify();
  ui.toast(`Now playing: ${GYM_STATIONS[station].name}`, 'good');
}

async function travel(id, spawn) {
  mode = 'busy';
  keys.clear();
  ui.prompt(null);
  audio.sfx('door');
  await ui.fade('', 450);
  setPlace(id, spawn);
  mode = 'play';
  saveGame();
}

// ---------------------------------------------------------------- INTERACTIONS
function nearest() {
  let best = null, bd = Infinity;
  for (const it of place.interactions) {
    if (it.disabled) continue;
    const d = Math.hypot(pos.x - it.x, pos.z - it.z);
    if (d < it.radius && d < bd) { bd = d; best = it; }
  }
  return best;
}

function interact() {
  if (race) { ui.toast('Finish the circuit first, or stop it from Pause.'); return; }
  if (jumpHeight > 0.1 || paused) return;
  const it = nearest();
  if (!it) return;
  keys.clear();
  switch (it.action) {
    case 'enter': travel(it.data); break;
    case 'exit': exitBuilding(); break;
    case 'sleep': sleep(); break;
    case 'fridge': fridge(); break;
    case 'tv': watchTv(); break;
    case 'mirror': mirror(); break;
    case 'buy': buyDialog(it.data); break;
    case 'workout': workoutDialog(it.data); break;
    case 'work': startWork(); break;
    case 'plane': planeDialog(); break;
    case 'bro': talkToBro(); break;
    case 'sport': sportDialog(it.data); break;
    case 'water': recover('water'); break;
    case 'rest': recover('rest'); break;
    case 'journal': showJournal(); break;
    case 'secret': collectSecret(it.data); break;
    default: break;
  }
}

const DOORS = { home: [-19, -10.6], gym: [19, -10.6], shop: [-19, 10.6], bank: [19, 10.6], park: [30, 24] };

async function exitBuilding() {
  const from = place.name;
  const [x, z] = DOORS[from];
  await travel('city', { x, z, rot: z < 0 ? 0 : Math.PI });
  cam.yaw = heading; // camera on the road side, looking at the building
  if (from !== 'park' && Math.random() < 0.2) setTimeout(encounter, 350);
}

function encounter() {
  if (mode !== 'play' || paused || race) return;
  const e = state.randomEncounter();
  mode = 'busy';
  audio.sfx('event');
  ui.dialog(`<h2>${e.title}</h2><p>${e.text}</p>`, [
    { label: 'Yes', cls: 'good', cb: () => resolveEncounter(e, e.accept) },
    { label: 'No', cls: 'bad', cb: () => resolveEncounter(e, e.deny) },
  ]);
}

function resolveEncounter(e, delta) {
  state.apply(delta);
  ui.dialog(`<h2>${e.title}</h2><p>Here's how it went:</p>${effectsHtml(delta)}`, [
    { label: 'Ok', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
  ]);
}

async function sleep() {
  mode = 'busy';
  audio.sfx('sleep');
  state.sleep();
  const day = state.totalDays - state.days + 1;
  breath = 100;
  player.setPose('sleep');
  const bed = place.bedPos;
  pos.set(bed.x, 0, bed.z - 0.9);
  heading = 0;
  await ui.fade(state.days > 0 ? `Day ${day}` : '', 1800);
  player.setPose('idle');
  pos.set(-3, 0, -1.2);
  mode = 'play';
  saveGame();
  if (!checkEnd()) ui.toast(`Good morning! Energy fully restored. Days left: ${state.days}`, 'good');
}

function fridge() {
  mode = 'busy';
  const btns = Object.entries(FOODS).map(([id, f]) => ({
    label: `${f.name} (${state.inventory[id]})`,
    cls: state.inventory[id] ? '' : 'disabled',
    cb: () => { mode = 'play'; eat(id); },
  }));
  btns.push({ label: 'Close', key: 'Escape', cb: () => { mode = 'play'; } });
  ui.dialog('<h2>Fridge</h2><p>What do you want to eat? You can also eat anywhere with the 1, 2 and 3 keys.</p>', btns);
}

function eat(id) {
  if (paused || mode !== 'play') return;
  if (!state.eat(id)) {
    ui.toast(`You have no ${FOODS[id].name.toLowerCase()} left. Buy some at the supermarket.`, 'bad');
    audio.sfx('bad');
    return;
  }
  const f = FOODS[id];
  audio.sfx('eat');
  ui.toast(`You ate: ${f.name}`, 'good');
  checkEnd();
}

const BRO_TIPS = [
  'Never skip leg day, bro. Leg day is sacred.',
  'Protein with every meal, bro. Steak is your friend.',
  'No sleep, no gains. Get your rest, bro.',
  'Heavy weight means bigger gains, but only if you finish your reps.',
  'Feeling down? Watch a bit of TV, then get back under the bar.',
  'Out of cash? Go count banknotes at the bank, bro.',
  'Ice cream once in a while is fine. The guy selling steroids is not.',
];

function talkToBro() {
  mode = 'busy';
  audio.shout('bro');
  const first = state.recover('bro');
  ui.dialog(`<h2>Gym bro</h2><p>${BRO_TIPS[Math.floor(Math.random() * BRO_TIPS.length)]}</p>
    ${first ? effectsHtml(first) : ''}`, [
    { label: 'We\'re gonna make it', cls: 'primary', cb: () => { mode = 'play'; } },
  ]);
}

function watchTv() {
  mode = 'busy';
  const box = ui.open(`<h2>Gym legends TV</h2><p>Ronnie Coleman, CBum and Zyzz: pick a video.</p>
    <div class="thumbs">${TV_VIDEOS.map((id, i) => `<button class="thumb" data-i="${i}" title="Video ${i + 1}">
      <img src="${thumbUrl(id)}" alt="Video ${i + 1}" loading="lazy"><span>${i + 1}</span></button>`).join('')}</div>
    <div class="btns"><button class="btn" id="tv-close">Close <small>[Esc]</small></button></div>`, { cls: 'tvbox' });
  box.querySelectorAll('.thumb').forEach((b) => { b.onclick = () => { audio.sfx('click'); playVideo(TV_VIDEOS[Number(b.dataset.i)], Number(b.dataset.i) + 1); }; });
  box.querySelector('#tv-close').onclick = () => { ui.close(); mode = 'play'; };
  ui.panelKeys = { Escape: box.querySelector('#tv-close') };
}

// first TV of the day gives mood
function tvMood() {
  const reward = state.recover('tv');
  if (!reward) return;
  audio.sfx('good');
  ui.toast('Motivation boost: +10 mood', 'good');
}

function playVideo(id, n) {
  audio.play('tv'); // the game's music goes quiet while the video plays
  const box = ui.open(`<h2>Gym legends TV: video ${n}</h2>
    <div class="video"><iframe src="${embedUrl(id)}" title="Video ${n}" allow="autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen></iframe></div>
    <div class="btns"><button class="btn" id="tv-back">Other videos</button><button class="btn primary" id="tv-close">Close <small>[Esc]</small></button></div>`, { cls: 'tvbox' });
  const stop = () => { audio.play(musicFor(place)); };
  box.querySelector('#tv-back').onclick = () => { stop(); watchTv(); };
  box.querySelector('#tv-close').onclick = () => { stop(); ui.close(); mode = 'play'; };
  ui.panelKeys = { Escape: box.querySelector('#tv-close') };
  tvMood();
}

function mirror() {
  mode = 'busy';
  heading = cam.yaw;
  player.setPose('flex');
  audio.sfx('levelup');
  const m = Math.round(state.mass);
  ui.dialog(`<h2>Looking good</h2><p>Total mass: <b>${m}</b> / 300</p>
    <p>Legs ${Math.round(state.legs)} · Chest ${Math.round(state.chest)} · Back ${Math.round(state.back)}</p>
    <p>Get every muscle group to 100 to win.</p>`, [
    ...['Midnight', 'Riverside', 'Sunset', 'Champion gold'].map((name, i) => ({ label: name + (state.level < i * 2 + 1 ? `<small>Level ${i * 2 + 1}</small>` : ''), disabled: state.level < i * 2 + 1, cb: () => { state.career.outfit = i; state.emit(); player.setPose('idle'); mode = 'play'; } })),
    { label: 'Done', key: 'Escape', cls: 'primary', cb: () => { player.setPose('idle'); mode = 'play'; } },
  ], { clear: true });
}

function buyDialog(id) {
  const f = FOODS[id];
  mode = 'busy';
  const buy = (n) => {
    let bought = 0;
    for (let i = 0; i < n; i++) if (state.buy(id)) bought++;
    if (bought) { audio.sfx('buy'); ui.toast(`Bought ${bought} x ${f.name}`, 'good'); }
    else { audio.sfx('bad'); ui.toast('Not enough money. Go to the bank.', 'bad'); }
    mode = 'play';
  };
  ui.dialog(`<h2>${f.name}: $${f.cost}</h2>
    ${effectsHtml({ stamina: f.stamina, happiness: f.happiness, mass: f.mass })}
    <p>You have $${Math.round(state.money)} · In the fridge: ${state.inventory[id]}</p>`, [
    { label: 'Buy 1', cls: 'primary', cb: () => buy(1) },
    { label: 'Buy 3', cb: () => buy(3) },
    { label: 'Cancel', key: 'Escape', cb: () => { mode = 'play'; } },
  ]);
}

// ---------------------------------------------------------------- MINIGAMES
const EXERCISES = {
  squat: { group: 'legs', name: 'Squat', game: squatGame },
  bench: { group: 'chest', name: 'Bench press', game: benchGame },
  lat: { group: 'back', name: 'Lat pulldown', game: latGame },
};

function workoutDialog(ex) {
  if (!state.canWorkout()) {
    audio.sfx('bad');
    ui.toast(`Too tired. You need more than ${state.workoutCost} energy: eat something or sleep.`, 'bad');
    return;
  }
  mode = 'busy';
  const e = EXERCISES[ex];
  ui.dialog(`<h2>${e.name}</h2><p>Pick the load. Heavier is harder, but the gains are bigger.</p>
    <p style="color:var(--muted)">Cost: ${state.workoutCost} energy · Personal best: ${Math.round((state.career.best[ex] || 0) * 100)}%</p>`, [
    { label: 'Light<small>x0.7 gains</small>', cb: () => startWorkout(ex, 0) },
    { label: 'Medium<small>x1 gains</small>', cls: 'primary', cb: () => startWorkout(ex, 1) },
    { label: 'Heavy<small>x1.4 gains</small>', cls: 'bad', cb: () => startWorkout(ex, 2) },
    { label: 'Cancel', key: 'Escape', cb: () => { mode = 'play'; } },
  ]);
}

const saved = { pos: new THREE.Vector3(), heading: 0 };

function beginMinigame(setup, camPos, camLook, music) {
  keys.clear();
  speed = 0;
  saved.pos.copy(pos);
  saved.heading = heading;
  setup();
  cam.fixed = { pos: camPos, look: camLook };
  place.interactions.forEach((it) => { it.marker.visible = false; });
  mode = 'minigame';
  document.body.classList.add('in-session');
  ui.prompt(null);
  if (music) audio.play(music);
}

function endMinigame() {
  minigame?.dispose?.();
  minigame = null;
  sessionCancel = null;
  document.body.classList.remove('in-session');
  keys.clear();
  speed = 0;
  cam.fixed = null;
  place.interactions.forEach((it) => { it.marker.visible = true; });
  pos.copy(saved.pos);
  heading = saved.heading;
  player.setPose('idle');
  audio.play(musicFor(place));
  syncSpotify();
}

function startWorkout(ex, level) {
  if (place.name !== 'gym' || !Object.hasOwn(EXERCISES, ex) || ![0, 1, 2].includes(level) || !state.canWorkout()) return;
  const cost = state.workoutCost;
  state.apply({ stamina: -cost });
  const gym = place;
  const e = EXERCISES[ex];
  const mult = [0.7, 1, 1.4][level];
  let restore = () => {};
  let V = (x, y, z) => new THREE.Vector3(x, y, z);
  let camPos, camLook;
  const setup = () => {
    if (ex === 'squat') {
      const { group, barbell } = gym.squat;
      pos.set(group.position.x, 0, group.position.z);
      heading = 0;
      player.spine.add(barbell);
      barbell.position.set(0, 0.42, -0.12);
      restore = () => { group.add(barbell); barbell.position.set(0, 1.5, 0.1); };
      camPos = V(group.position.x + 3.2, 2.2, group.position.z + 4.2);
      camLook = V(group.position.x, 1.0, group.position.z);
    } else if (ex === 'bench') {
      const { group, barbell } = gym.bench;
      pos.set(group.position.x, 0, group.position.z + 0.25);
      heading = 0;
      const rest = barbell.position.clone();
      gym.updaters.push(gym.benchUpd = () => {
        const p = player.poseT;
        barbell.position.set(0, 0.92 + p * 0.55, -0.05);
      });
      restore = () => {
        gym.updaters.splice(gym.updaters.indexOf(gym.benchUpd), 1);
        barbell.position.copy(rest);
      };
      camPos = V(group.position.x + 3.4, 2.6, group.position.z + 2.6);
      camLook = V(group.position.x, 0.8, group.position.z);
    } else {
      const { group, handle, cable, weights } = gym.lat;
      pos.set(group.position.x, 0, group.position.z + 0.35);
      heading = 0;
      gym.updaters.push(gym.latUpd = () => {
        const p = player.poseT;
        handle.position.y = 2.25 - p * 0.75;
        weights.position.y = p * 0.45;
        cable.scale.y = 3 - handle.position.y;
        cable.position.y = (3 + handle.position.y) / 2;
      });
      restore = () => {
        gym.updaters.splice(gym.updaters.indexOf(gym.latUpd), 1);
        weights.position.y = 0;
        handle.position.y = 2;
        cable.scale.y = 1;
        cable.position.y = 2.5;
      };
      camPos = V(group.position.x - 3.2, 2.4, group.position.z + 4);
      camLook = V(group.position.x, 1.3, group.position.z);
    }
  };
  beginMinigame(setup, camPos || new THREE.Vector3(), camLook || new THREE.Vector3(), null);
  audio.sfx('airhorn');
  audio.shout('start');
  cam.fixed = { pos: camPos, look: camLook };
  sessionCancel = () => { restore(); endMinigame(); };
  minigame = e.game({
    ui, audio, char: player,
    done: (score) => {
      restore();
      endMinigame();
      const gain = Math.round((4 + score * 14) * mult);
      const before = Math.round(state[e.group]);
      state.apply({ [e.group]: gain, happiness: score >= 0.5 ? 5 : 1 });
      const reward = state.completeActivity(ex, score, level);
      announceReward(reward);
      const delta = { [e.group]: Math.round(state[e.group]) - before, stamina: -cost, happiness: score >= 0.5 ? 5 : 1 };
      audio.sfx(score >= 0.5 ? 'levelup' : 'bad');
      if (score >= 0.8) { audio.sfx('airhorn'); audio.shout('great'); } else if (score < 0.5) audio.shout('bad');
      mode = 'busy';
      const pct = Math.round(score * 100);
      ui.dialog(`<h2>${e.name}: ${pct}%</h2>
        <p>${pct >= 80 ? 'Monster session.' : pct >= 50 ? 'Solid workout.' : 'Every rep is progress. Keep practising.'}</p>${effectsHtml(delta)}${rewardHtml(reward)}`, [
        { label: 'Continue', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
      ]);
    },
  }, level);
}

function startWork() {
  if (state.stamina <= WORK_STAMINA) {
    audio.sfx('bad');
    ui.toast(`Too tired to work (you need ${WORK_STAMINA} energy).`, 'bad');
    return;
  }
  state.apply({ stamina: -WORK_STAMINA });
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  beginMinigame(() => { pos.set(3.5, 0, -4.1); heading = 0; }, V(5.5, 2.4, -0.5), V(3.5, 1, -3.6), null);
  sessionCancel = endMinigame;
  minigame = workGame({
    ui, audio, char: player,
    done: (earned) => {
      endMinigame();
      state.apply({ money: earned });
      audio.sfx('coin');
      mode = 'busy';
      ui.dialog(`<h2>Shift over</h2>${effectsHtml({ money: earned, stamina: -WORK_STAMINA })}`, [
        { label: 'Ok', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
      ]);
    },
  });
}

function planeDialog() {
  mode = 'busy';
  const m = Math.floor(state.money);
  const bets = [10, 25, 50].filter((b) => b <= m);
  const btns = bets.map((b) => ({ label: `$${b}`, cls: 'primary', cb: () => startPlane(b) }));
  if (m > 0 && !bets.includes(m)) btns.push({ label: `All in ($${m})`, cls: 'bad', cb: () => startPlane(m) });
  btns.push({ label: 'Cancel', key: 'Escape', cb: () => { mode = 'play'; } });
  ui.dialog(`<h2>High-flying investment</h2>
    <p>Place a bet: the multiplier grows while the plane climbs. Cash out before it crashes or you lose it all.</p>
    ${m <= 0 ? '<p style="color:var(--bad)">You have no money to bet. Try working at the desk.</p>' : ''}`, btns);
}

function startPlane(bet) {
  state.apply({ money: -bet });
  mode = 'minigame';
  ui.prompt(null);
  document.body.classList.add('in-session');
  sessionCancel = () => { minigame = null; sessionCancel = null; document.body.classList.remove('in-session'); };
  minigame = planeGame({
    ui, audio, char: player,
    done: (win) => {
      minigame = null;
      sessionCancel = null;
      document.body.classList.remove('in-session');
      ui.close();
      state.apply({ money: win });
      mode = 'play';
      ui.toast(win > bet ? `Net profit: +$${win - bet}` : win > 0 ? `Got back $${win}` : `Lost $${bet}`, win > bet ? 'good' : 'bad');
      checkEnd();
    },
  }, bet);
}

// ---------------------------------------------------------------- CAREER, RECOVERY & SPORTS
function saveGame() {
  if (!state || mode === 'title' || mode === 'end' || state.gameOverReason() || state.isWin()) return;
  store.set(SAVE_KEY, serialize());
}

function pauseGame() {
  if (paused || !['play', 'minigame'].includes(mode)) return;
  paused = true;
  keys.clear();
  touchMove.x = touchMove.y = 0;
  touchSprint = false;
  minigame?.suspend?.();
  document.getElementById('touch').classList.add('hidden');
  document.getElementById('pause').classList.remove('hidden');
  document.getElementById('pause-stop').classList.toggle('hidden', !sessionCancel && !race);
  document.getElementById('pause-stop').textContent = 'Stop session (spent energy is not refunded)';
  saveGame();
}
function resumeGame() {
  paused = false;
  keys.clear();
  lastTime = performance.now();
  document.getElementById('pause').classList.add('hidden');
  audio.init();
}
function cancelSession() {
  if (sessionCancel) sessionCancel();
  if (race) { race = null; place.runGate.visible = false; document.getElementById('race-hud').classList.add('hidden'); }
  minigame = null;
  sessionCancel = null;
  cam.fixed = null;
  player.setPose('idle');
  ui.close();
  mode = 'play';
  document.body.classList.remove('in-session');
  ui.toast('Session stopped. No result recorded.');
  saveGame();
}
function jump() {
  if (mode !== 'play' || paused || jumpHeight > 0 || breath < 8 || (race && race.countdown > 0)) return;
  breath -= 8;
  jumpVelocity = 6.6;
  breathDelay = 0.5;
}
function syncSecrets() {
  for (const secret of places.city.secrets || []) {
    const found = state?.career.secrets.includes(secret.id) || false;
    secret.prop.visible = !found;
    secret.interaction.disabled = found;
    secret.interaction.marker.visible = !found;
  }
}
function collectSecret(id) {
  const secret = SECRETS.find(s => s.id === id);
  if (!secret) return;
  const quests = state.collectSecret(id);
  if (!quests) return;
  syncSecrets();
  audio.sfx('levelup');
  mode = 'busy';
  player.setPose('flex');
  ui.dialog(`<div class="eyebrow">SECRET ${state.career.secrets.length} / 3</div><h2>${secret.title}</h2><p>${secret.text}</p>${effectsHtml({ money: 15 })}<p>+40 XP${quests.length ? ' · Golden hour complete: +150 XP / $75' : ''}</p>`, [
    { label: 'Keep exploring', cls: 'primary', cb: () => { player.setPose('idle'); mode = 'play'; } },
  ]);
}
function recover(id) {
  const reward = state.recover(id);
  if (!reward) { ui.toast('Already recovered here today. Sleep to start a new day.'); return; }
  breath = 100;
  mode = 'busy';
  if (id === 'rest') player.setPose('sit');
  audio.sfx('good');
  ui.dialog(`<div class="eyebrow">RECOVERY IS PART OF TRAINING</div><h2>${id === 'water' ? 'Stay hydrated' : 'A moment to reset'}</h2><p>${id === 'water' ? 'Fresh water, steady breathing. Ready for the next set.' : 'Take in the city. Tomorrow’s champion needs a break today.'}</p>${effectsHtml(reward)}<p class="scores">Free · Once per day · Sprint fully restored</p>`, [
    { label: 'Back to it', cls: 'primary', key: 'Escape', cb: () => { player.setPose('idle'); mode = 'play'; } },
  ], { clear: true });
}
function rewardHtml(reward) {
  if (!reward) return '';
  return `<div class="league-card"><b>+${reward.xp} XP</b>${reward.prize ? ` · +$${reward.prize}` : ''}${reward.personalBest ? ' · PERSONAL BEST' : ''}${reward.medal ? '<br>League medal earned! First-win bonus included.' : ''}${reward.daily ? '<br>Daily hat-trick: +60 XP and $25 included.' : ''}${reward.quests.map(q => `<br>${q.title}: +${q.xp} XP / $${q.money}`).join('')}</div>`;
}
function announceReward(reward) {
  if (reward?.levelUp) ui.toast(`LEVEL ${state.level} · ${rankFor(state.level)} · Better endurance unlocked`, 'good');
}
function showJournal() {
  if (mode !== 'play' || paused || race) return;
  keys.clear();
  mode = 'busy';
  const c = state.career;
  const daily = c.daily.day === state.day ? Math.min(3, c.daily.sessions) : 0;
  const best = ['basket', 'boxing', 'run'].map(id => `${{ basket: 'Basket', boxing: 'Boxing', run: 'Circuit' }[id]} ${Math.round((c.best[id] || 0) * 100)}% · ${c.medals[id]?.length || 0}/3 medals`).join('<br>');
  const box = ui.dialog(`<div class="eyebrow">YOUR STORY / OAKSIDE CITY</div><div class="journal-head"><h2>${rankFor(state.level)}</h2><b>LV ${state.level}</b></div>
    <p>${c.xp} XP · ${c.sessions} sessions · ${c.secrets.length}/3 secrets</p>
    <div class="league-card"><b>Daily hat-trick · ${daily}/3</b><br>Finish any three training sessions today: +60 XP and $25.<br><br>${best}</div>
    <div class="quest-list">${QUESTS.map(q => `<div class="quest ${c.completed.includes(q.id) ? 'done' : ''}"><strong>${q.title}</strong><small>${q.desc}</small><span>${c.completed.includes(q.id) ? '✓' : `${questProgress(c, q)}/${q.target}`}</span></div>`).join('')}</div>
    <p style="margin-top:18px">Pin a destination on your map:</p><div class="destination-list">${Object.entries(DESTINATIONS).map(([id, d]) => `<button class="btn ${id === waypoint ? 'primary' : ''}" data-destination="${id}">${d.label} ↗</button>`).join('')}</div>
    <p class="scores">Level 3: Club league · Level 5: Pro league. Change unlocked outfits at your home mirror.<br>Golden dumbbell clues: behind home, behind the gym, and the southwest garden.</p>`, [
    { label: 'Back to the city', cls: 'primary', key: 'Escape', cb: () => { mode = 'play'; } },
  ], { cls: 'journalbox' });
  box.querySelectorAll('[data-destination]').forEach(button => {
    button.onclick = () => {
      waypoint = button.dataset.destination;
      ui.close(); mode = 'play'; saveGame();
      ui.toast(`Pinned: ${DESTINATIONS[waypoint].label}. ${place.name === 'city' ? 'Follow the highlighted map icon.' : 'Exit this area to reach the city.'}`, 'good');
    };
  });
}
const SPORT_NAMES = { basket: 'Basketball · five spots', boxing: 'Boxing · read & react', run: 'Riverside circuit' };
function sportDialog(id) {
  if (place.name !== 'park' || !Object.hasOwn(SPORT_NAMES, id)) return;
  const cost = id === 'run' ? 12 : 18;
  if (state.stamina <= cost) { ui.toast(`You need more than ${cost} energy. Try the bench or the fountain.`, 'bad'); return; }
  mode = 'busy';
  const detail = id === 'run' ? 'Sprint through eight checkpoints around the track. Manage your breath: release RUN to recover. The glowing gate and map mark the next checkpoint.' : id === 'basket' ? 'Five shots, five positions. Hold to load your shot, release in the sweet spot, and watch the ball fly.' : 'Read the combination. Jab, cross, and duck the incoming bag on the beat. Precision builds your combo.';
  ui.dialog(`<div class="eyebrow">RIVERSIDE ATHLETIC CLUB</div><h2>${SPORT_NAMES[id]}</h2><p>${detail}</p>
    <div class="league-card">Energy: ${cost} · Best: ${Math.round((state.career.best[id] || 0) * 100)}%<br>Unlock harder leagues by earning XP. First medal in each league earns a cash bonus.</div>`, [
    ...LEAGUES.map((league, i) => ({ label: `${league.name}<small>${state.level < league.level ? `Unlocks at level ${league.level}` : `${Math.round(league.target * 100)}% for medal · +$${league.bonus}`}</small>`, cls: i === 0 ? 'primary' : '', disabled: state.level < league.level, cb: () => startSport(id, i) })),
    { label: 'Later', key: 'Escape', cb: () => { mode = 'play'; } },
  ]);
}
function sportResult(id, score, tier, cost) {
  endMinigame();
  const gain = Math.round(2 + score * (5 + tier * 2));
  const stats = id === 'basket' ? { legs: gain, chest: Math.ceil(gain / 2) } : id === 'boxing' ? { chest: gain, back: gain } : { legs: gain, back: Math.ceil(gain / 2) };
  state.apply({ ...stats, happiness: 4 + Math.round(score * 6) });
  const reward = state.completeActivity(id, score, tier);
  announceReward(reward);
  mode = 'busy';
  audio.sfx(score >= 0.5 ? 'levelup' : 'good');
  ui.dialog(`<div class="eyebrow">${LEAGUES[tier].name.toUpperCase()} LEAGUE / SESSION COMPLETE</div><h2>${SPORT_NAMES[id]}</h2><div class="result-score">${Math.round(score * 100)}<small>%</small></div><p>${score >= 0.8 ? 'You owned that session.' : score >= 0.5 ? 'Finding your rhythm. Keep it up.' : 'A start worth building on. Try again!'}</p>${effectsHtml({ ...stats, stamina: -cost, happiness: 4 + Math.round(score * 6) })}${rewardHtml(reward)}`, [
    { label: 'Continue', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
  ]);
}
function startSport(id, tier = 0) {
  if (place.name !== 'park' || !Object.hasOwn(SPORT_NAMES, id) || !LEAGUES[tier] || state.level < LEAGUES[tier].level) return;
  const cost = id === 'run' ? 12 : 18;
  if (state.stamina <= cost) return;
  ui.close();
  state.apply({ stamina: -cost });
  if (id === 'run') { startRace(tier, cost); return; }
  const park = place;
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  if (id === 'basket') {
    const ball = park.basket.ball;
    const rest = ball.position.clone();
    let shotIndex = 0;
    const release = new THREE.Vector3(), end = new THREE.Vector3();
    beginMinigame(() => { pos.set(-10, 0, -7); heading = Math.PI; }, V(-21, 6.2, 1), V(-10, 1.8, -10), null);
    const restore = () => { ball.position.copy(rest); ball.rotation.set(0, 0, 0); };
    sessionCancel = () => { restore(); endMinigame(); };
    minigame = basketballGame({ ui, audio, char: player,
      spot(i) { shotIndex = i; const [x, z] = SHOT_SPOTS[i]; pos.set(x, 0, z); heading = Math.atan2(-10 - x, -14.65 - z); },
      animate(power, flight, score, shooting) {
        if (!shooting) {
          player.setPose('shoot', power * 0.65);
          ball.position.set(pos.x + Math.sin(heading) * 0.4, 1.4 + power * 0.5, pos.z + Math.cos(heading) * 0.4);
          return;
        }
        player.setPose('shoot', Math.max(0, 1 - flight * 0.25));
        release.set(pos.x, 2.1, pos.z);
        end.copy(park.basket.hoop);
        if (score < 0.7) { end.x += (shotIndex % 2 ? -1 : 1) * 0.85; end.z += 0.6; }
        const t = Math.min(1, flight / 0.72);
        ball.position.lerpVectors(release, end, t);
        ball.position.y += Math.sin(t * Math.PI) * 2.8;
        if (flight > 0.72) {
          const drop = (flight - 0.72) / 0.28;
          ball.position.y = Math.max(0.3, end.y - drop * drop * 4);
          if (score < 0.7) ball.position.x += drop;
        }
        ball.rotation.x = flight * 8;
      },
      done(score) { restore(); sportResult(id, score, tier, cost); },
    }, tier);
  } else {
    const bag = park.boxing.bag;
    let impact = 0, swing = 0;
    const updateBag = dt => { impact *= Math.exp(-dt * 5); bag.rotation.x = swing * 0.24 + Math.sin(elapsed * 17) * Math.abs(impact) * 0.08; bag.rotation.z = impact * 0.22; };
    beginMinigame(() => { pos.set(9, 0, -10.8); heading = Math.PI; player.setPose('guard'); }, V(14, 2.8, -7.5), V(9, 1.7, -11), null);
    park.updaters.push(updateBag);
    const restore = () => { const index = park.updaters.indexOf(updateBag); if (index !== -1) park.updaters.splice(index, 1); bag.rotation.set(0, 0, 0); };
    sessionCancel = () => { restore(); endMinigame(); };
    minigame = boxingGame({ ui, audio, char: player, impact: n => { impact = n; }, telegraph: n => { swing = n; }, done(score) { restore(); sportResult(id, score, tier, cost); } }, tier);
  }
}
function startRace(tier, cost) {
  saved.pos.copy(pos); saved.heading = heading;
  pos.set(-15, 0, 16); heading = -Math.PI / 2;
  cam.yaw = Math.PI / 2; cam.snap = true;
  keys.clear(); speed = 0; breath = 100; winded = false;
  race = { tier, cost, countdown: 3, time: 0, checkpoint: 0, limit: [52, 44, 37][tier] };
  mode = 'play';
  place.runGate.visible = true;
  place.runGate.position.set(...[RUN_ROUTE[0][0], 0, RUN_ROUTE[0][1]]);
  document.getElementById('race-hud').classList.remove('hidden');
  ui.prompt(null);
}
function updateRace(dt) {
  const r = race;
  if (!r) return;
  const clock = document.getElementById('race-time');
  document.getElementById('race-progress').textContent = `GATE ${Math.min(8, r.checkpoint + 1)} / 8 · SHIFT / RUN to sprint`;
  if (r.countdown > 0) { r.countdown -= dt; clock.textContent = r.countdown > 0 ? Math.ceil(r.countdown) : 'GO!'; return; }
  r.time += dt;
  clock.textContent = `${Math.max(0, r.limit - r.time).toFixed(1)}s`;
  const [x, z] = RUN_ROUTE[r.checkpoint];
  if (Math.hypot(pos.x - x, pos.z - z) < 1.7) {
    r.checkpoint++;
    audio.sfx('coin');
    breath = Math.min(100, breath + 8);
    if (r.checkpoint < RUN_ROUTE.length) { const next = RUN_ROUTE[r.checkpoint]; place.runGate.position.set(next[0], 0, next[1]); }
  }
  if (r.checkpoint === RUN_ROUTE.length || r.time >= r.limit) {
    const finished = r.checkpoint === RUN_ROUTE.length;
    const score = finished ? Math.max(0.5, Math.min(1, 0.6 + (r.limit - r.time) / 22)) : r.checkpoint / 8 * 0.45;
    place.runGate.visible = false;
    document.getElementById('race-hud').classList.add('hidden');
    race = null;
    sportResult('run', score, r.tier, r.cost);
  }
}

// ---------------------------------------------------------------- GAME OVER
function checkEnd() {
  if (!state || mode === 'end') return true;
  if (state.isWin()) { endGame(true); return true; }
  const reason = state.gameOverReason();
  if (reason) { endGame(false, reason); return true; }
  return false;
}

function endGame(win, reason) {
  mode = 'end';
  store.del(SAVE_KEY);
  ui.prompt(null);
  const used = state.totalDays - state.days + (win ? 1 : 0);
  let scoresHtml = '';
  if (win) {
    const scores = store.get(SCORES_KEY) || [];
    scores.push({ days: used, diff: DIFFICULTIES[state.difficulty].label, date: new Date().toLocaleDateString('en-GB') });
    scores.sort((a, b) => a.days - b.days);
    store.set(SCORES_KEY, scores.slice(0, 5));
    scoresHtml = '<div class="scores"><b>Best results</b><br>' +
      scores.slice(0, 5).map((s, i) => `${i + 1}. ${s.days} days (${s.diff}), ${s.date}`).join('<br>') + '</div>';
  }
  audio.play(win ? 'win' : 'gameover');
  spotify.hide();
  player.setPose(win ? 'flex' : 'idle');
  heading = cam.yaw + Math.PI;
  setTimeout(() => {
    ui.dialog(win
      ? `<h1 class="title">YOU WIN</h1><p>You became a real bodybuilder in <b>${used}</b> days.</p>${scoresHtml}`
      : `<h1 class="title">GAME OVER</h1><p>${reason}</p>
         <p>Legs ${Math.round(state.legs)} · Chest ${Math.round(state.chest)} · Back ${Math.round(state.back)}</p>`,
    [{ label: 'Main menu', cls: 'primary', cb: showTitle }]);
  }, win ? 600 : 300);
}

// ---------------------------------------------------------------- MENU
function serialize() {
  const { listeners, ...data } = state;
  const location = mode === 'minigame' && cam.fixed ? saved.pos : pos;
  return { ...data, version: 2, location: { place: place.name, x: location.x, z: location.z, rot: mode === 'minigame' && cam.fixed ? saved.heading : heading }, waypoint };

}

function newGame(diff, data = null) {
  clearTimeout(saveTimer);
  state = data ? GameState.fromSave(data) : new GameState(diff);
  ui.close();
  paused = false;
  document.getElementById('pause').classList.add('hidden');
  sessionCancel = minigame = race = null;
  document.body.classList.remove('in-session');
  breath = 100; winded = false;
  waypoint = Object.hasOwn(DESTINATIONS, data?.waypoint) ? data.waypoint : 'gym';
  state.onChange((s) => {
    ui.update(s);
    player.setMuscles(s.legs, s.chest, s.back);
    player.setOutfit(OUTFITS[s.career.outfit]);
    clearTimeout(saveTimer);
    saveTimer = setTimeout(saveGame, 250);
  });
  state.emit();
  ui.showHud(true);
  const loc = data?.location;
  const id = loc && Object.hasOwn(places, loc.place) ? loc.place : 'home';
  setPlace(id);
  if (loc && Number.isFinite(loc.x) && Number.isFinite(loc.z)) {
    pos.set(loc.x, 0, loc.z);
    place.collide(pos); place.collide(pos);
    heading = Number.isFinite(loc.rot) ? loc.rot : place.spawn.rot;
    cam.yaw = heading + Math.PI;
  }
  syncSpotify();
  mode = 'play';
  if (checkEnd()) return;
  saveGame();
  ui.toast(data ? 'Welcome back. Your city is waiting.' : 'Your story starts here. Follow your first challenge [J].', 'good');
  if (!isTouch) setTimeout(() => ui.toast('Press H to see the controls'), 1500);
}

function controlsHtml() {
  if (isTouch) {
    return `<div class="controls">
    <kbd>Left stick</kbd><span>Move</span>
    <kbd>E button</kbd><span>Interact</span>
    <kbd>RUN / ↑</kbd><span>Hold to sprint / Jump</span>
    <kbd>Journal / Pause</kbd><span>Career & destinations / Pause</span>
    <kbd>Drag the screen</kbd><span>Rotate the camera</span>
    <kbd>Food buttons</kbd><span>Eat from your inventory</span>
    <kbd>Radio button</kbd><span>Switch the gym radio station</span>
    <kbd>Screen button</kbd><span>Graphics quality (low / medium / high)</span>
  </div>`;
  }
  return `<div class="controls">
    <kbd>WASD / Arrows</kbd><span>Move (hold Shift to run)</span>
    <kbd>E / Enter</kbd><span>Interact with the highlighted object</span>
    <kbd>Space</kbd><span>Jump · Hold Shift to sprint</span>
    <kbd>J / Esc</kbd><span>Career & destinations / Pause</span>
    <kbd>Mouse drag</kbd><span>Rotate the camera, wheel to zoom</span>
    <kbd>1 2 3</kbd><span>Eat from your inventory</span>
    <kbd>M</kbd><span>Music on/off</span>
    <kbd>R</kbd><span>Switch the gym radio station</span>
    <kbd>G</kbd><span>Graphics quality (low / medium / high)</span>
  </div>`;
}

function showHelp() {
  if (mode !== 'play' || paused || race) return;
  keys.clear();
  mode = 'busy';
  ui.dialog(`<h2>Controls</h2>${controlsHtml()}
    <p>Home: sleep, TV, outfits · Gym: train · Park: basketball, boxing, circuit · Market: food · Bank: work</p>
    <p>Grow legs, chest and back to 100 before your days run out. It’s game over if energy or mood reaches 0. Sprint breath recovers automatically; food and sleep restore training energy.</p>`,
  [{ label: 'Ok', cls: 'primary', cb: () => { mode = 'play'; } }]);
}

function showTitle() {
  clearTimeout(saveTimer);
  keys.clear();
  mode = 'title';
  ui.showHud(false);
  ui.prompt(null);
  if (place !== places.city) setPlace('city');
  pos.set(-19, 0, -10.4);
  audio.play('title');
  spotify.hide();
  const save = store.get(SAVE_KEY);
  const btns = Object.entries(DIFFICULTIES).map(([id, d], i) => ({
    label: `${d.label}<small>${d.days} days</small>`,
    cls: i === 1 ? 'primary' : '',
    cb: () => { audio.init(); newGame(id); },
  }));
  if (save) {
    btns.unshift({
      label: `Continue<small>day ${save.totalDays - save.days + 1}</small>`, cls: 'good',
      cb: () => { audio.init(); newGame(save.difficulty, save); },
    });
  }
  ui.dialog(`<div class="eyebrow">OAKSIDE CITY / A NEW CHAPTER</div><h1 class="title">STREET TO<br><span>LEGEND.</span></h1>
    <p class="tagline">Your city. Your training ground. Build your body, find your rhythm and make a name for yourself — one perfect rep at a time.</p>
    <div class="title-features"><span>6 SPORTS & WORKOUTS</span><span>3 LEAGUES</span><span>ONE LIVING CITY</span></div>
    <p style="font-size:11px;color:var(--muted)">REACH 100 IN EVERY MUSCLE · Progress saves automatically</p>`, btns, { cls: 'titlebox' });
  const credits = document.createElement('p');
  credits.className = 'scores';
  credits.innerHTML = 'Character model: <a href="https://sketchfab.com/3d-models/male-body-15a422001834483c9750ce6117d59cc1" target="_blank" rel="noopener">"Male Body" by Alexander Antipov</a>, <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a> (rigged and modified)';
  document.querySelector('#panel .box').appendChild(credits);
  // the original 2D game: ../web2d/ in the repo, web2d/ next to the 3D build on GitHub Pages
  const to2d = document.createElement('a');
  to2d.className = 'to2d';
  to2d.href = location.pathname.includes('/web3d/') ? '../web2d/index.html' : 'web2d/index.html';
  to2d.textContent = 'Play the original 2D version';
  document.querySelector('#panel .box').appendChild(to2d);
}

// ---------------------------------------------------------------- LOOP
let lastTime = performance.now();
let elapsed = 0;
const tmp = new THREE.Vector3();
const lookTmp = new THREE.Vector3();
let fpsFrames = 0, fpsTime = 0, fpsCooldown = 3;
const wantCamera = new THREE.Vector3();
let lastPromptTarget = null;
let stepTimer = 0;

const touchEl = document.getElementById('touch');
function update(dt, t) {
  // on-screen joystick and E button only while walking around
  if (isTouch) touchEl.classList.toggle('hidden', !(mode === 'play' && !ui.isOpen() && !paused));
  let mx = 0, mz = 0;
  if (mode === 'play' && (!race || race.countdown <= 0)) {
    if (keys.has('w') || keys.has('arrowup')) mz -= 1;
    if (keys.has('s') || keys.has('arrowdown')) mz += 1;
    if (keys.has('a') || keys.has('arrowleft')) mx -= 1;
    if (keys.has('d') || keys.has('arrowright')) mx += 1;
    mx += touchMove.x;
    mz += touchMove.y;
  }
  const len = Math.hypot(mx, mz);
  if (winded && breath > 28) winded = false;
  const running = mode === 'play' && len > 0.1 && (keys.has('shift') || touchSprint) && breath > 0 && !winded;
  if (running) { breath = Math.max(0, breath - dt * 17); breathDelay = 0.7; if (breath === 0) winded = true; }
  else if ((breathDelay -= dt) <= 0) breath = Math.min(100, breath + dt * 24);
  document.getElementById('b-breath').style.transform = `scaleX(${breath / 100})`;
  document.getElementById('b-breath').style.transformOrigin = 'left';
  const run = running ? 1.75 + Math.min(0.15, (state?.level || 1) * 0.02) : 1;
  const target = len > 0.1 ? Math.min(1, len) * 4.7 * run : 0;
  speed += (target - speed) * Math.min(1, dt * 10);
  if (len > 0.1) {
    // movement relative to the camera
    const f = cam.yaw;
    const dx = (mx * Math.cos(f) + mz * Math.sin(f)) / len;
    const dz = (-mx * Math.sin(f) + mz * Math.cos(f)) / len;
    const want = Math.atan2(dx, dz);
    let diff = want - heading;
    diff = Math.atan2(Math.sin(diff), Math.cos(diff));
    heading += diff * Math.min(1, dt * 12);
    const steps = Math.max(1, Math.ceil(speed * dt / 0.18));
    for (let i = 0; i < steps; i++) {
      pos.x += dx * speed * dt / steps;
      pos.z += dz * speed * dt / steps;
      place.collide(pos);
    }
    stepTimer -= dt * speed;
    if (stepTimer <= 0) { stepTimer = 2.2; audio.sfx('step'); }
  }
  if (jumpHeight > 0 || jumpVelocity > 0) {
    jumpVelocity -= dt * 19;
    jumpHeight = Math.max(0, jumpHeight + jumpVelocity * dt);
    if (jumpHeight === 0) { jumpVelocity = 0; player.setPose('idle'); audio.sfx('step'); }
    else player.setPose('jump');
  }
  if (minigame) minigame.update(dt);
  player.root.position.copy(pos);
  player.root.position.y += jumpHeight;
  player.root.rotation.y = heading;
  if (player.pose === 'idle' || player.pose === 'walk') player.setPose(speed > 0.2 ? 'walk' : 'idle');
  player.update(dt, speed);
  place.update(dt, t);

  // interaction prompt
  if (mode === 'play') {
    const it = race ? null : nearest();
    if (it !== lastPromptTarget) {
      if (lastPromptTarget) { lastPromptTarget.ring.material.color.setHex(0xffffff); lastPromptTarget.marker.scale.setScalar(1); }
      if (it) { it.ring.material.color.setHex(0xd4f29b); it.marker.scale.setScalar(1.25); }
      lastPromptTarget = it;
    }
    ui.prompt(it ? it.label : null);
    if (race) updateRace(dt);
  }
  if (state && mode !== 'title') {
    minimap.draw(dt, place, pos, heading, waypoint, race ? RUN_ROUTE[race.checkpoint] : null);
    const target = place.name === 'city' ? DESTINATIONS[waypoint] : null;
    document.getElementById('map-waypoint').textContent = target ? `${target.label} · ${Math.round(Math.hypot(pos.x - target.x, pos.z - target.z))} m` : place.name === waypoint ? 'You have arrived' : 'Return to the city to follow your pin';
  }

  // Reserve the unobscured portion of the viewport for the 3D action.
  const framing = mode === 'minigame' && cam.fixed;
  const portraitSession = framing && window.innerHeight > window.innerWidth;
  if (framing) {
    const w = window.innerWidth, h = window.innerHeight;
    const ox = portraitSession ? 0 : w * (w > 900 ? 0.14 : 0.23);
    const oy = portraitSession ? h * 0.26 : 0;
    if (!camera.view?.enabled || camera.view.offsetX !== ox || camera.view.offsetY !== oy || camera.view.fullWidth !== w || camera.view.fullHeight !== h) camera.setViewOffset(w, h, ox, oy, w, h);
  } else if (camera.view?.enabled) camera.clearViewOffset();

  // camera
  if (mode === 'title') {
    const a = t * 0.04 + 0.8;
    camera.position.set(Math.cos(a) * 19, 9, Math.sin(a) * 19);
    camera.lookAt(0, 3, 0);
  } else if (cam.fixed) {
    camera.position.lerp(cam.fixed.pos, Math.min(1, dt * 5));
    const look = lookTmp.copy(cam.fixed.look);
    tmp.copy(cam.target).lerp(look, Math.min(1, dt * 5));
    cam.target.copy(tmp);
    camera.lookAt(cam.target);
  } else {
    const d = place.camDist * cam.zoom;
    cam.target.lerp(tmp.set(pos.x, 1.3, pos.z), Math.min(1, dt * 8));
    const want = wantCamera.set(
      cam.target.x + Math.sin(cam.yaw) * Math.cos(cam.pitch) * d,
      cam.target.y + Math.sin(cam.pitch) * d + (place.camHeight - 5) * 0.4,
      cam.target.z + Math.cos(cam.yaw) * Math.cos(cam.pitch) * d,
    );
    avoidOcclusion(cam.target, want);
    if (cam.snap) { cam.target.set(pos.x, 1.3, pos.z); camera.position.copy(want); cam.snap = false; }
    else camera.position.lerp(want, Math.min(1, dt * 6));
    camera.lookAt(cam.target);
  }

  // the sun's shadow camera follows the view in the city
  if (place.sun) {
    const c = mode === 'title' ? tmp.set(0, 0, 0) : tmp.set(pos.x, 0, pos.z);
    place.sun.position.copy(place.sunDir).multiplyScalar(50).add(c);
    place.sun.target.position.copy(c);
    sky.position.copy(camera.position);
  }

  const fov = portraitSession ? 64 : running ? 57 : 50;
  if (Math.abs(camera.fov - fov) > 0.02) { camera.fov += (fov - camera.fov) * Math.min(1, dt * 3); camera.updateProjectionMatrix(); }
}

// Move the camera closer when a building is between it and the player
const occ = new THREE.Vector3();
function avoidOcclusion(from, to) {
  const N = 16;
  for (let i = 1; i <= N; i++) {
    occ.lerpVectors(from, to, i / N);
    const hit = place.colliders.some((c) => c.h > 3 && occ.y < c.h &&
      occ.x > c.x1 - 0.6 && occ.x < c.x2 + 0.6 && occ.z > c.z1 - 0.6 && occ.z < c.z2 + 0.6);
    if (hit) {
      to.lerpVectors(from, to, Math.max(0.15, (i - 1.5) / N));
      to.y = Math.max(to.y, from.y + 1.2);
      return;
    }
  }
}

function loop() {
  const now = performance.now();
  const wallDt = (now - lastTime) / 1000;
  const dt = Math.min(0.05, wallDt);
  lastTime = now;
  if (paused || document.hidden) { requestAnimationFrame(loop); return; }
  elapsed += dt;
  const t = elapsed;
  update(dt, t);
  if (quality === 'high') {
    renderPass.scene = place.scene;
    gtaoPass.scene = place.scene;
    composer.render(dt);
  } else {
    renderer.render(place.scene, camera);
  }

  // Measure real wall time, not clamped simulation time. Recheck after travel
  // and heavy scenes, with cooldown so shader compilation cannot cause a cascade.
  fpsCooldown -= wallDt;
  if (mode === 'play' && fpsCooldown <= 0 && !store.get(QUALITY_KEY)) {
    fpsFrames++;
    fpsTime += wallDt;
    if (fpsTime >= 4) {
      const fps = fpsFrames / fpsTime;
      fpsFrames = fpsTime = 0;
      fpsCooldown = 6;
      if (fps < 32 && quality !== 'low') {
        quality = QUALITIES[QUALITIES.indexOf(quality) - 1];
        applyQuality();
        ui.toast(`Graphics adjusted to ${quality} for smoother play`);
      }
    }
  }
  requestAnimationFrame(loop);
}

// exposed for debugging / automated tests
window.__gym = {
  get state() { return state; }, get mode() { return mode; }, get place() { return place; },
  pos, cam, player, audio, travel, startWorkout, startWork, startPlane, mirror, encounter, sleep,
  startSport, sportDialog, showJournal, pauseGame, resumeGame, cancelSession, interact, saveGame, newGame,
  get paused() { return paused; }, get race() { return race; }, get quality() { return quality; },
  get minigame() { return minigame; }, get breath() { return breath; },
  get rendererInfo() { return { calls: renderer.info.render.calls, triangles: renderer.info.render.triangles, geometries: renderer.info.memory.geometries, textures: renderer.info.memory.textures }; },
};

showTitle();
loop();
