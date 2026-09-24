import * as THREE from 'three';
import { Sky } from 'three/addons/objects/Sky.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GTAOPass } from 'three/addons/postprocessing/GTAOPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { GameState, FOODS, DIFFICULTIES, WORKOUT_STAMINA } from './state.js';
import { Audio, GYM_STATIONS } from './audio.js';
import { Character } from './character.js';
import { buildCity, buildHome, buildGym, buildShop, buildBank } from './world.js';
import { UI, effectsHtml, ICONS } from './ui.js';
import { SpotifyStation } from './spotify.js';
import { TV_VIDEOS, embedUrl, thumbUrl } from './tv.js';
import { squatGame, benchGame, latGame, workGame, planeGame } from './minigames.js';

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
const QUALITIES = ['low', 'medium', 'high'];
let quality = store.get(QUALITY_KEY);
if (!QUALITIES.includes(quality)) quality = isTouch ? 'low' : 'high';

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.getElementById('app').appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 1200);

// Post-processing (high quality only): ambient occlusion, multisampled
const composer = new EffectComposer(renderer, new THREE.WebGLRenderTarget(1, 1, { type: THREE.HalfFloatType, samples: 4 }));
const renderPass = new RenderPass(new THREE.Scene(), camera);
const gtaoPass = new GTAOPass(new THREE.Scene(), camera, 1, 1);
gtaoPass.blendIntensity = 0.85;
gtaoPass.updateGtaoMaterial({ radius: 0.6, distanceExponent: 1.5, thickness: 1.5, scale: 1.2, samples: 12 });
composer.addPass(renderPass);
composer.addPass(gtaoPass);
composer.addPass(new OutputPass());

function applyQuality() {
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
  composer.setPixelRatio(renderer.getPixelRatio());
  composer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---------------------------------------------------------------- GLOBAL STATE
const audio = new Audio();
const ui = new UI(audio);
const places = { city: buildCity(), home: null, gym: null, shop: null, bank: null };
const builders = { home: buildHome, gym: buildGym, shop: buildShop, bank: buildBank };
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
  if (p !== places.city) {
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
let tvDay = -1;
let broDay = -1;
let station = Math.max(0, GYM_STATIONS.findIndex((st) => st.id === store.get(RADIO_KEY)));

// The gym plays the selected radio station, other places their own music
const spotify = new SpotifyStation();
const musicFor = (p) => (p.name === 'gym' ? GYM_STATIONS[station].id : p.music);

// shows the Spotify player only in the gym with the Spotify station selected
function syncSpotify() {
  if (place.name === 'gym' && GYM_STATIONS[station].external && mode !== 'title') spotify.show();
  else spotify.hide();
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
  audio.init();
  if (e.repeat && mode !== 'play') return;
  const k = e.key;
  if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(k)) e.preventDefault();
  if (mode === 'minigame' && minigame) { minigame.key(k); return; }
  if (ui.isOpen()) { ui.handleKey(k); return; }
  keys.add(k.toLowerCase());
  if (mode !== 'play') return;
  if (k === 'e' || k === 'E' || k === 'Enter' || k === ' ') interact();
  else if (k === 'm' || k === 'M') toggleMute();
  else if (k === 'r' || k === 'R') nextStation();
  else if (k === 'g' || k === 'G') toggleQuality();
  else if (k === 'h' || k === 'H') showHelp();
  else if (k === '1' || k === '2' || k === '3') eat(Object.keys(FOODS)[Number(k) - 1]);
});
window.addEventListener('keyup', (e) => keys.delete(e.key.toLowerCase()));
window.addEventListener('blur', () => keys.clear());
window.addEventListener('pointerdown', () => audio.init());

// Rotate the camera by dragging the mouse / finger on the background
let drag = null;
renderer.domElement.addEventListener('pointerdown', (e) => { drag = { x: e.clientX, y: e.clientY, id: e.pointerId }; });
window.addEventListener('pointermove', (e) => {
  if (!drag || drag.id !== e.pointerId) return;
  cam.yaw -= (e.clientX - drag.x) * 0.006;
  cam.pitch = Math.max(0.12, Math.min(1.25, cam.pitch + (e.clientY - drag.y) * 0.004));
  drag.x = e.clientX;
  drag.y = e.clientY;
});
window.addEventListener('pointerup', (e) => { if (drag && drag.id === e.pointerId) drag = null; });
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
  document.getElementById('btn-action').addEventListener('click', () => { audio.init(); if (mode === 'play') interact(); });
}

document.getElementById('btn-mute').innerHTML = ICONS.sound;
document.getElementById('btn-help').innerHTML = ICONS.help;
document.getElementById('btn-mute').onclick = toggleMute;
document.getElementById('btn-quality').onclick = toggleQuality;
document.getElementById('btn-help').onclick = () => mode === 'play' && showHelp();
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
  pos.set(sp.x, 0, sp.z);
  heading = sp.rot;
  cam.yaw = heading + Math.PI;
  cam.pitch = 0.5;
  cam.snap = true;
  player.setPose('idle');
  audio.play(musicFor(place));
  syncSpotify();
  if (place.name === 'gym') {
    const st = GYM_STATIONS[station];
    setTimeout(() => ui.toast(st.external
      ? 'Gym radio: your Spotify playlist. Press play on the player (R to switch station)'
      : `Gym radio: ${st.name} (press R to switch)`), 600);
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
  ui.prompt(null);
  audio.sfx('door');
  await ui.fade('', 450);
  setPlace(id, spawn);
  mode = 'play';
}

// ---------------------------------------------------------------- INTERACTIONS
function nearest() {
  let best = null, bd = Infinity;
  for (const it of place.interactions) {
    const d = Math.hypot(pos.x - it.x, pos.z - it.z);
    if (d < it.radius && d < bd) { bd = d; best = it; }
  }
  return best;
}

function interact() {
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
    default: break;
  }
}

const DOORS = { home: [-19, -10.6], gym: [19, -10.6], shop: [-19, 10.6], bank: [19, 10.6] };

async function exitBuilding() {
  const from = place.name;
  const [x, z] = DOORS[from];
  await travel('city', { x, z, rot: z < 0 ? 0 : Math.PI });
  cam.yaw = heading; // camera on the road side, looking at the building
  if (Math.random() < 0.45) setTimeout(encounter, 350);
}

function encounter() {
  if (mode !== 'play') return;
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
  if (state.days > 0) store.set(SAVE_KEY, serialize());
  player.setPose('sleep');
  const bed = place.bedPos;
  pos.set(bed.x, 0, bed.z - 0.9);
  heading = 0;
  await ui.fade(state.days > 0 ? `Day ${day}` : '', 1800);
  player.setPose('idle');
  pos.set(-3, 0, -1.2);
  mode = 'play';
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
  const day = state.totalDays - state.days;
  mode = 'busy';
  audio.shout('bro');
  const first = broDay !== day;
  if (first) { broDay = day; state.apply({ happiness: 5 }); }
  ui.dialog(`<h2>Gym bro</h2><p>${BRO_TIPS[Math.floor(Math.random() * BRO_TIPS.length)]}</p>
    ${first ? effectsHtml({ happiness: 5 }) : ''}`, [
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
  const day = state.totalDays - state.days;
  if (tvDay === day) return;
  tvDay = day;
  state.apply({ happiness: 10 });
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
    { label: 'Ok', cls: 'primary', cb: () => { player.setPose('idle'); mode = 'play'; } },
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
    ui.toast(`Too tired. You need ${WORKOUT_STAMINA} energy: eat something or sleep.`, 'bad');
    return;
  }
  mode = 'busy';
  const e = EXERCISES[ex];
  ui.dialog(`<h2>${e.name}</h2><p>Pick the load. Heavier is harder, but the gains are bigger.</p>
    <p style="color:var(--muted)">Cost: ${WORKOUT_STAMINA} energy</p>`, [
    { label: 'Light<small>x0.7 gains</small>', cb: () => startWorkout(ex, 0) },
    { label: 'Medium<small>x1 gains</small>', cls: 'primary', cb: () => startWorkout(ex, 1) },
    { label: 'Heavy<small>x1.4 gains</small>', cls: 'bad', cb: () => startWorkout(ex, 2) },
    { label: 'Cancel', key: 'Escape', cb: () => { mode = 'play'; } },
  ]);
}

const saved = { pos: new THREE.Vector3(), heading: 0 };

function beginMinigame(setup, camPos, camLook, music) {
  saved.pos.copy(pos);
  saved.heading = heading;
  setup();
  cam.fixed = { pos: camPos, look: camLook };
  place.interactions.forEach((it) => { it.marker.visible = false; });
  mode = 'minigame';
  ui.prompt(null);
  if (music) audio.play(music);
}

function endMinigame() {
  minigame = null;
  cam.fixed = null;
  place.interactions.forEach((it) => { it.marker.visible = true; });
  pos.copy(saved.pos);
  heading = saved.heading;
  player.setPose('idle');
  audio.play(musicFor(place));
  syncSpotify();
}

function startWorkout(ex, level) {
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
      restore = () => { group.add(barbell); barbell.position.set(0, 1.5, 0); };
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
      const { group, handle, cable } = gym.lat;
      pos.set(group.position.x, 0, group.position.z + 0.35);
      heading = 0;
      gym.updaters.push(gym.latUpd = () => {
        const p = player.poseT;
        handle.position.y = 2.25 - p * 0.75;
        cable.scale.y = 3 - handle.position.y;
        cable.position.y = (3 + handle.position.y) / 2;
      });
      restore = () => {
        gym.updaters.splice(gym.updaters.indexOf(gym.latUpd), 1);
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
  minigame = e.game({
    ui, audio, char: player,
    done: (score) => {
      restore();
      endMinigame();
      const gain = Math.round((4 + score * 14) * mult);
      const before = Math.round(state[e.group]);
      state.apply({ [e.group]: gain, stamina: -WORKOUT_STAMINA, happiness: score >= 0.5 ? 4 : -4 });
      const delta = { [e.group]: Math.round(state[e.group]) - before, stamina: -WORKOUT_STAMINA, happiness: score >= 0.5 ? 4 : -4 };
      audio.sfx(score >= 0.5 ? 'levelup' : 'bad');
      if (score >= 0.8) { audio.sfx('airhorn'); audio.shout('great'); } else if (score < 0.5) audio.shout('bad');
      mode = 'busy';
      const pct = Math.round(score * 100);
      ui.dialog(`<h2>${e.name}: ${pct}%</h2>
        <p>${pct >= 80 ? 'Monster session.' : pct >= 50 ? 'Solid workout.' : 'You can do better than that.'}</p>${effectsHtml(delta)}`, [
        { label: 'Continue', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
      ]);
    },
  }, level);
}

function startWork() {
  if (state.stamina < WORK_STAMINA) {
    audio.sfx('bad');
    ui.toast(`Too tired to work (you need ${WORK_STAMINA} energy).`, 'bad');
    return;
  }
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  beginMinigame(() => { pos.set(3.5, 0, -4.1); heading = 0; }, V(5.5, 2.4, -0.5), V(3.5, 1, -3.6), null);
  minigame = workGame({
    ui, audio, char: player,
    done: (earned) => {
      endMinigame();
      state.apply({ money: earned, stamina: -WORK_STAMINA });
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
  minigame = planeGame({
    ui, audio, char: player,
    done: (win) => {
      minigame = null;
      ui.close();
      state.apply({ money: win });
      mode = 'play';
      ui.toast(win > bet ? `Net profit: +$${win - bet}` : win > 0 ? `Got back $${win}` : `Lost $${bet}`, win > bet ? 'good' : 'bad');
      checkEnd();
    },
  }, bet);
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
  return data;
}

function newGame(diff, data = null) {
  state = new GameState(diff);
  if (data) Object.assign(state, data, { listeners: state.listeners });
  state.onChange((s) => {
    ui.update(s);
    player.setMuscles(s.legs, s.chest, s.back);
  });
  state.emit();
  tvDay = -1;
  broDay = -1;
  ui.showHud(true);
  setPlace('home');
  mode = 'play';
  ui.toast('Goal: get legs, chest and back to 100', 'good');
  if (!isTouch) setTimeout(() => ui.toast('Press H to see the controls'), 1500);
}

function controlsHtml() {
  return `<div class="controls">
    <kbd>WASD / Arrows</kbd><span>Move (hold Shift to run)</span>
    <kbd>E / Space</kbd><span>Interact</span>
    <kbd>Mouse drag</kbd><span>Rotate the camera, wheel to zoom</span>
    <kbd>1 2 3</kbd><span>Eat from your inventory</span>
    <kbd>M</kbd><span>Music on/off</span>
    <kbd>R</kbd><span>Switch the gym radio station</span>
    <kbd>G</kbd><span>Graphics quality (low / medium / high)</span>
  </div>`;
}

function showHelp() {
  mode = 'busy';
  ui.dialog(`<h2>Controls</h2>${controlsHtml()}
    <p>Home: sleep, eat, TV · Gym: train · Supermarket: buy food · Bank: work or invest</p>
    <p>It's game over if energy or mood drop to 0, or if you run out of days.</p>`,
  [{ label: 'Ok', cls: 'primary', cb: () => { mode = 'play'; } }]);
}

function showTitle() {
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
  ui.dialog(`<h1 class="title">GYM LIFE 3D</h1>
    <p>Become the biggest bodybuilder in town. Train, eat well, earn money and keep your spirits up.</p>
    ${controlsHtml()}
    <p style="color:var(--muted)">Choose the difficulty:</p>`, btns);
  const credits = document.createElement('p');
  credits.className = 'scores';
  credits.innerHTML = 'Character model: <a href="https://sketchfab.com/3d-models/male-body-15a422001834483c9750ce6117d59cc1" target="_blank" rel="noopener">"Male Body" by Alexander Antipov</a>, <a href="http://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener">CC BY 4.0</a> (rigged and modified)';
  document.querySelector('#panel .box').appendChild(credits);
}

// ---------------------------------------------------------------- LOOP
let lastTime = performance.now();
let elapsed = 0;
const tmp = new THREE.Vector3();
const lookTmp = new THREE.Vector3();
let fpsFrames = 0, fpsTime = 0, fpsChecked = false;
let stepTimer = 0;

function update(dt, t) {
  let mx = 0, mz = 0;
  if (mode === 'play') {
    if (keys.has('w') || keys.has('arrowup')) mz -= 1;
    if (keys.has('s') || keys.has('arrowdown')) mz += 1;
    if (keys.has('a') || keys.has('arrowleft')) mx -= 1;
    if (keys.has('d') || keys.has('arrowright')) mx += 1;
    mx += touchMove.x;
    mz += touchMove.y;
  }
  const len = Math.hypot(mx, mz);
  const run = keys.has('shift') ? 1.6 : 1;
  const target = len > 0.1 ? Math.min(1, len) * 5 * run : 0;
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
    pos.x += dx * speed * dt;
    pos.z += dz * speed * dt;
    place.collide(pos);
    stepTimer -= dt * speed;
    if (stepTimer <= 0) { stepTimer = 2.2; audio.sfx('step'); }
  }
  player.root.position.copy(pos);
  player.root.rotation.y = heading;
  if (player.pose === 'idle' || player.pose === 'walk') player.setPose(speed > 0.2 ? 'walk' : 'idle');
  player.update(dt, speed);
  place.update(dt, t);

  // interaction prompt
  if (mode === 'play') {
    const it = nearest();
    ui.prompt(it ? it.label : null);
  }

  // camera
  if (mode === 'title') {
    const a = t * 0.04 + 0.8;
    camera.position.set(Math.cos(a) * 19, 9, Math.sin(a) * 19);
    camera.lookAt(0, 3, 0);
  } else if (cam.fixed) {
    camera.position.lerp(cam.fixed.pos, Math.min(1, dt * 5));
    // on wide screens the minigame panel sits on the right: shift the character to the left
    const look = lookTmp.copy(cam.fixed.look);
    if (window.innerWidth > 900) {
      const right = occ.subVectors(cam.fixed.look, cam.fixed.pos).cross(camera.up).normalize();
      look.addScaledVector(right, 1.3);
    }
    tmp.copy(cam.target).lerp(look, Math.min(1, dt * 5));
    cam.target.copy(tmp);
    camera.lookAt(cam.target);
  } else {
    const d = place.camDist * cam.zoom;
    cam.target.lerp(tmp.set(pos.x, 1.3, pos.z), Math.min(1, dt * 8));
    const want = new THREE.Vector3(
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

  if (minigame) minigame.update(dt);
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
  const dt = Math.min(0.05, (now - lastTime) / 1000);
  lastTime = now;
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

  // if the computer struggles, step down the quality automatically (unless chosen by the user)
  if (!fpsChecked && mode === 'play') {
    fpsFrames++;
    fpsTime += dt;
    if (fpsTime > 4) {
      const fps = fpsFrames / fpsTime;
      fpsFrames = 0;
      fpsTime = 0;
      if (fps < 28 && quality !== 'low' && !store.get(QUALITY_KEY)) {
        quality = QUALITIES[QUALITIES.indexOf(quality) - 1];
        applyQuality();
        ui.toast(`Graphics lowered to ${quality} for smoother play (press G to change)`);
      } else fpsChecked = true;
    }
  }
  requestAnimationFrame(loop);
}

// exposed for debugging / automated tests
window.__gym = {
  get state() { return state; }, get mode() { return mode; }, get place() { return place; },
  pos, cam, player, audio, travel, startWorkout, startWork, startPlane, mirror, encounter, sleep,
};

showTitle();
loop();
