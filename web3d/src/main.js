import * as THREE from 'three';
import { GameState, FOODS, DIFFICULTIES, WORKOUT_STAMINA } from './state.js';
import { Audio, GYM_STATIONS } from './audio.js';
import { Character } from './character.js';
import { buildCity, buildHome, buildGym, buildShop, buildBank } from './world.js';
import { UI, effectsHtml } from './ui.js';
import { squatGame, benchGame, latGame, workGame, planeGame } from './minigames.js';

const WORK_STAMINA = 20;
const SAVE_KEY = 'gymlife3d.save';
const SCORES_KEY = 'gymlife3d.scores';
const QUALITY_KEY = 'gymlife3d.quality';
const RADIO_KEY = 'gymlife3d.radio';

const store = {
  get(k) { try { return JSON.parse(localStorage.getItem(k)); } catch (e) { return null; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* storage non disponibile */ } },
  del(k) { try { localStorage.removeItem(k); } catch (e) { /* storage non disponibile */ } },
};

// ---------------------------------------------------------------- RENDERER
function webglAvailable() {
  try {
    const c = document.createElement('canvas');
    return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl')));
  } catch (e) { return false; }
}

if (!webglAvailable()) {
  document.body.innerHTML = '<div style="padding:40px;font-family:sans-serif;color:#fff">Il tuo browser non supporta WebGL. Prova ad aggiornarlo o ad attivare l\'accelerazione hardware.</div>';
  throw new Error('WebGL non disponibile');
}

const isTouch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
let quality = store.get(QUALITY_KEY) || (isTouch ? 'low' : 'high');

const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.shadowMap.type = THREE.PCFShadowMap;
document.getElementById('app').appendChild(renderer.domElement);

const camera = new THREE.PerspectiveCamera(55, 1, 0.1, 400);

function applyQuality() {
  const dpr = window.devicePixelRatio || 1;
  renderer.setPixelRatio(quality === 'high' ? Math.min(dpr, 2) : Math.min(dpr, 1) * 0.85);
  renderer.shadowMap.enabled = quality === 'high';
  Object.values(places).forEach((p) => p && p.scene.traverse((o) => { if (o.material) o.material.needsUpdate = true; }));
  document.getElementById('btn-quality').textContent = quality === 'high' ? '✨' : '⚡';
  resize();
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  renderer.setSize(w, h);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
}
window.addEventListener('resize', resize);

// ---------------------------------------------------------------- STATO GLOBALE
const audio = new Audio();
const ui = new UI(audio);
const places = { city: buildCity(), home: null, gym: null, shop: null, bank: null };
const builders = { home: buildHome, gym: buildGym, shop: buildShop, bank: buildBank };
const getPlace = (id) => (places[id] ||= builders[id]());

let state = null;
let place = places.city;
let mode = 'title'; // title | play | busy | minigame | end
let minigame = null;
let tvDay = -1;
let broDay = -1;
let station = Math.max(0, GYM_STATIONS.findIndex((st) => st.id === store.get(RADIO_KEY)));

// In palestra suona la stazione radio scelta, altrove la musica del luogo
const musicFor = (p) => (p.name === 'gym' ? GYM_STATIONS[station].id : p.music);

const player = new Character();
const pos = new THREE.Vector3();
let heading = 0;
let speed = 0;
place.scene.add(player.root);

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

// Rotazione della telecamera trascinando il mouse / dito sullo sfondo
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

// Joystick virtuale
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

document.getElementById('btn-mute').onclick = toggleMute;
document.getElementById('btn-quality').onclick = toggleQuality;
document.getElementById('btn-help').onclick = () => mode === 'play' && showHelp();
ui.onEat = (id) => mode === 'play' && eat(id);

function toggleMute() {
  audio.init();
  const m = audio.toggleMute();
  document.getElementById('btn-mute').textContent = m ? '🔇' : '🔊';
}

function toggleQuality() {
  quality = quality === 'high' ? 'low' : 'high';
  store.set(QUALITY_KEY, quality);
  applyQuality();
  ui.toast(quality === 'high' ? 'Grafica: alta qualità' : 'Grafica: prestazioni');
}

// ---------------------------------------------------------------- LUOGHI
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
  if (place.name === 'gym') setTimeout(() => ui.toast(`📻 Radio Gym: ${GYM_STATIONS[station].name} — R per cambiare`), 600);
}

function nextStation() {
  if (place.name !== 'gym') {
    ui.toast('📻 La radio della palestra si sente solo in palestra!');
    return;
  }
  station = (station + 1) % GYM_STATIONS.length;
  store.set(RADIO_KEY, GYM_STATIONS[station].id);
  audio.sfx('radio');
  audio.play(musicFor(place));
  ui.toast(`📻 ${GYM_STATIONS[station].name}`, 'good');
}

async function travel(id, spawn) {
  mode = 'busy';
  ui.prompt(null);
  audio.sfx('door');
  await ui.fade('', 450);
  setPlace(id, spawn);
  mode = 'play';
}

// ---------------------------------------------------------------- INTERAZIONI
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
  cam.yaw = heading; // telecamera dal lato della strada, rivolta verso l'edificio
  if (Math.random() < 0.45) setTimeout(encounter, 350);
}

function encounter() {
  if (mode !== 'play') return;
  const e = state.randomEncounter();
  mode = 'busy';
  audio.sfx('event');
  ui.dialog(`<div class="big">${e.icon}</div><h2>${e.title}</h2><p>${e.text}</p>`, [
    { label: 'Sì', cls: 'good', cb: () => resolveEncounter(e, e.accept) },
    { label: 'No', cls: 'bad', cb: () => resolveEncounter(e, e.deny) },
  ]);
}

function resolveEncounter(e, delta) {
  state.apply(delta);
  ui.dialog(`<div class="big">${e.icon}</div><h2>Risultato</h2>${effectsHtml(delta)}`, [
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
  await ui.fade(state.days > 0 ? `🌙 Zzz... Giorno ${day}` : '🌙 Zzz...', 1800);
  player.setPose('idle');
  pos.set(-3, 0, -1.2);
  mode = 'play';
  if (!checkEnd()) ui.toast(`Buongiorno! Energia al massimo. Giorni rimasti: ${state.days}`, 'good');
}

function fridge() {
  mode = 'busy';
  const btns = Object.entries(FOODS).map(([id, f]) => ({
    label: `${f.icon} ${f.name} (${state.inventory[id]})`,
    cls: state.inventory[id] ? '' : 'disabled',
    cb: () => { mode = 'play'; eat(id); },
  }));
  btns.push({ label: 'Chiudi', key: 'Escape', cb: () => { mode = 'play'; } });
  ui.dialog('<div class="big">🧊</div><h2>Frigo</h2><p>Cosa vuoi mangiare? Puoi anche mangiare ovunque con i tasti 1, 2, 3.</p>', btns);
}

function eat(id) {
  if (!state.eat(id)) {
    ui.toast(`Non hai ${FOODS[id].name.toLowerCase()}! Compralo al supermercato.`, 'bad');
    audio.sfx('bad');
    return;
  }
  const f = FOODS[id];
  audio.sfx('eat');
  ui.toast(`${f.icon} Gnam! ${f.name}`, 'good');
  checkEnd();
}

const BRO_TIPS = [
  'Bro, le gambe non si saltano MAI. Il leg day è sacro! 🦵',
  'Proteine a ogni pasto, bro. Le bistecche sono tue amiche 🥩',
  'Senza sonno niente gains. Dormi, bro 😴',
  'Carico pesante = più gains... ma solo se chiudi le ripetizioni! 🏋️',
  'Se sei giù di morale guardati un po\' di TV, poi torna a spingere 📺',
  'Soldi finiti? Vai in banca a contare banconote, bro 💵',
  'Il gelato ogni tanto ci sta. Il pusher invece no, bro 🙅',
];

function talkToBro() {
  const day = state.totalDays - state.days;
  mode = 'busy';
  audio.shout('bro');
  const first = broDay !== day;
  if (first) { broDay = day; state.apply({ happiness: 5 }); }
  ui.dialog(`<div class="big">🤜🤛</div><h2>Gym bro</h2><p>${BRO_TIPS[Math.floor(Math.random() * BRO_TIPS.length)]}</p>
    ${first ? effectsHtml({ happiness: 5 }) : ''}`, [
    { label: 'We\'re gonna make it! 💪', cls: 'primary', cb: () => { mode = 'play'; } },
  ]);
}

function watchTv() {
  const day = state.totalDays - state.days;
  if (tvDay === day) {
    ui.toast('Hai già guardato la TV oggi. Vai ad allenarti!', 'bad');
    return;
  }
  tvDay = day;
  state.apply({ happiness: 10 });
  audio.sfx('good');
  ui.toast('📺 Una bella serie TV: +10 umore', 'good');
}

function mirror() {
  mode = 'busy';
  heading = cam.yaw;
  player.setPose('flex');
  audio.sfx('levelup');
  const m = Math.round(state.mass);
  ui.dialog(`<div class="big">🪞</div><h2>Che fisico!</h2><p>Massa totale: <b>${m}</b> / 300</p>
    <p>Gambe ${Math.round(state.legs)} · Petto ${Math.round(state.chest)} · Schiena ${Math.round(state.back)}</p>
    <p>Porta ogni gruppo muscolare a 100 per vincere.</p>`, [
    { label: 'Ok', cls: 'primary', cb: () => { player.setPose('idle'); mode = 'play'; } },
  ], { clear: true });
}

function buyDialog(id) {
  const f = FOODS[id];
  mode = 'busy';
  const buy = (n) => {
    let bought = 0;
    for (let i = 0; i < n; i++) if (state.buy(id)) bought++;
    if (bought) { audio.sfx('buy'); ui.toast(`Comprato ${bought}× ${f.name}`, 'good'); }
    else { audio.sfx('bad'); ui.toast('Soldi insufficienti! Vai in banca.', 'bad'); }
    mode = 'play';
  };
  ui.dialog(`<div class="big">${f.icon}</div><h2>${f.name} — $${f.cost}</h2>
    ${effectsHtml({ stamina: f.stamina, happiness: f.happiness, mass: f.mass })}
    <p>Hai $${Math.round(state.money)} · Nel frigo: ${state.inventory[id]}</p>`, [
    { label: 'Compra 1', cls: 'primary', cb: () => buy(1) },
    { label: 'Compra 3', cb: () => buy(3) },
    { label: 'Annulla', key: 'Escape', cb: () => { mode = 'play'; } },
  ]);
}

// ---------------------------------------------------------------- MINIGIOCHI
const EXERCISES = {
  squat: { group: 'legs', name: 'Squat', game: squatGame },
  bench: { group: 'chest', name: 'Panca piana', game: benchGame },
  lat: { group: 'back', name: 'Lat machine', game: latGame },
};

function workoutDialog(ex) {
  if (!state.canWorkout()) {
    audio.sfx('bad');
    ui.toast(`Troppo stanco! Servono ${WORKOUT_STAMINA} di energia: mangia o dormi.`, 'bad');
    return;
  }
  mode = 'busy';
  const e = EXERCISES[ex];
  ui.dialog(`<h2>🏋️ ${e.name}</h2><p>Scegli il carico. Più è pesante, più è difficile... ma i guadagni sono maggiori!</p>
    <p style="color:var(--muted)">Costo: ${WORKOUT_STAMINA} energia</p>`, [
    { label: 'Leggero<small>×0.7</small>', cb: () => startWorkout(ex, 0) },
    { label: 'Medio<small>×1</small>', cls: 'primary', cb: () => startWorkout(ex, 1) },
    { label: 'Pesante<small>×1.4</small>', cls: 'bad', cb: () => startWorkout(ex, 2) },
    { label: 'Annulla', key: 'Escape', cb: () => { mode = 'play'; } },
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
      barbell.position.set(0, 0.56, -0.16);
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
      ui.dialog(`<div class="big">${pct >= 80 ? '🏆' : pct >= 50 ? '💪' : '😓'}</div><h2>${e.name}: ${pct}%</h2>
        <p>${pct >= 80 ? 'Allenamento devastante!' : pct >= 50 ? 'Buon allenamento!' : 'Si può fare di meglio...'}</p>${effectsHtml(delta)}`, [
        { label: 'Continua', cls: 'primary', cb: () => { mode = 'play'; checkEnd(); } },
      ]);
    },
  }, level);
}

function startWork() {
  if (state.stamina < WORK_STAMINA) {
    audio.sfx('bad');
    ui.toast(`Troppo stanco per lavorare (servono ${WORK_STAMINA} di energia).`, 'bad');
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
      ui.dialog(`<div class="big">💵</div><h2>Turno finito!</h2>${effectsHtml({ money: earned, stamina: -WORK_STAMINA })}`, [
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
  if (m > 0 && !bets.includes(m)) btns.push({ label: `Tutto ($${m})`, cls: 'bad', cb: () => startPlane(m) });
  btns.push({ label: 'Annulla', key: 'Escape', cb: () => { mode = 'play'; } });
  ui.dialog(`<div class="big">✈️</div><h2>Investimento ad alta quota</h2>
    <p>Punta dei soldi: il moltiplicatore sale finché l'aereo vola. Incassa prima che precipiti o perdi tutto!</p>
    ${m <= 0 ? '<p style="color:var(--bad)">Non hai soldi da puntare. Prova a lavorare alla scrivania.</p>' : ''}`, btns);
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
      ui.toast(win > bet ? `Guadagno netto: +$${win - bet}` : win > 0 ? `Recuperati $${win}` : `Persi $${bet}`, win > bet ? 'good' : 'bad');
      checkEnd();
    },
  }, bet);
}

// ---------------------------------------------------------------- FINE PARTITA
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
    scores.push({ days: used, diff: DIFFICULTIES[state.difficulty].label, date: new Date().toLocaleDateString('it-IT') });
    scores.sort((a, b) => a.days - b.days);
    store.set(SCORES_KEY, scores.slice(0, 5));
    scoresHtml = '<div class="scores"><b>Migliori risultati</b><br>' +
      scores.slice(0, 5).map((s, i) => `${i + 1}. ${s.days} giorni (${s.diff}) — ${s.date}`).join('<br>') + '</div>';
  }
  audio.play(win ? 'win' : 'gameover');
  player.setPose(win ? 'flex' : 'idle');
  heading = cam.yaw + Math.PI;
  setTimeout(() => {
    ui.dialog(win
      ? `<div class="big">🏆</div><h1 class="title">HAI VINTO!</h1><p>Sei diventato un vero bodybuilder in <b>${used}</b> giorni!</p>${scoresHtml}`
      : `<div class="big">💀</div><h1 class="title">GAME OVER</h1><p>${reason}</p>
         <p>Gambe ${Math.round(state.legs)} · Petto ${Math.round(state.chest)} · Schiena ${Math.round(state.back)}</p>`,
    [{ label: 'Menu principale', cls: 'primary', cb: showTitle }]);
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
  ui.toast('Obiettivo: porta gambe, petto e schiena a 100!', 'good');
  if (!isTouch) setTimeout(() => ui.toast('Premi H per vedere i comandi'), 1500);
}

function controlsHtml() {
  return `<div class="controls">
    <kbd>WASD / Frecce</kbd><span>Muoviti (Shift per correre)</span>
    <kbd>E / Spazio</kbd><span>Interagisci</span>
    <kbd>Mouse (trascina)</kbd><span>Ruota la visuale · rotella = zoom</span>
    <kbd>1 2 3</kbd><span>Mangia dal tuo inventario</span>
    <kbd>M</kbd><span>Musica on/off</span>
    <kbd>R</kbd><span>Cambia stazione della radio in palestra</span>
    <kbd>G</kbd><span>Qualità grafica (usa ⚡ su PC lenti)</span>
  </div>`;
}

function showHelp() {
  mode = 'busy';
  ui.dialog(`<h2>Comandi</h2>${controlsHtml()}
    <p>🏠 Casa: dormi, mangia, TV · 🏋️ Palestra: allenati · 🛒 Supermercato: compra cibo · 🏦 Banca: lavora o investi</p>
    <p>Game over se energia o umore arrivano a 0 o se finiscono i giorni.</p>`,
  [{ label: 'Ok', cls: 'primary', cb: () => { mode = 'play'; } }]);
}

function showTitle() {
  mode = 'title';
  ui.showHud(false);
  ui.prompt(null);
  if (place !== places.city) setPlace('city');
  pos.set(0, 0, 0);
  audio.play('title');
  const save = store.get(SAVE_KEY);
  const btns = Object.entries(DIFFICULTIES).map(([id, d], i) => ({
    label: `${d.label}<small>${d.days} giorni</small>`,
    cls: i === 1 ? 'primary' : '',
    cb: () => { audio.init(); newGame(id); },
  }));
  if (save) {
    btns.unshift({
      label: `Continua<small>giorno ${save.totalDays - save.days + 1}</small>`, cls: 'good',
      cb: () => { audio.init(); newGame(save.difficulty, save); },
    });
  }
  ui.dialog(`<h1 class="title">GYM LIFE 3D</h1>
    <p>Diventa il bodybuilder più grosso della città! Allenati, mangia bene, lavora e non perdere il buonumore.</p>
    ${controlsHtml()}
    <p style="color:var(--muted)">Scegli la difficoltà:</p>`, btns);
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
    // movimento relativo alla telecamera
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

  // prompt interazione
  if (mode === 'play') {
    const it = nearest();
    ui.prompt(it ? it.label : null);
  }

  // telecamera
  if (mode === 'title') {
    const a = t * 0.07;
    camera.position.set(Math.cos(a) * 40, 18, Math.sin(a) * 40);
    camera.lookAt(0, 3, 0);
  } else if (cam.fixed) {
    camera.position.lerp(cam.fixed.pos, Math.min(1, dt * 5));
    // su schermi larghi il pannello del minigioco sta a destra: sposta il personaggio a sinistra
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

  // l'ombra del sole segue il giocatore in città
  if (place.sun) {
    place.sun.position.set(pos.x + 25, 40, pos.z + 15);
    place.sun.target.position.set(pos.x, 0, pos.z);
  }

  if (minigame) minigame.update(dt);
}

// Avvicina la telecamera se un edificio si trova tra lei e il giocatore
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
  renderer.render(place.scene, camera);

  // se il PC fatica, passa automaticamente alla qualità ridotta
  if (!fpsChecked && mode === 'play') {
    fpsFrames++;
    fpsTime += dt;
    if (fpsTime > 4) {
      fpsChecked = true;
      if (fpsFrames / fpsTime < 28 && quality === 'high' && !store.get(QUALITY_KEY)) {
        quality = 'low';
        applyQuality();
        ui.toast('Grafica ridotta automaticamente per fluidità (G per cambiare)');
      }
    }
  }
  requestAnimationFrame(loop);
}

// esposto per debug / test automatici
window.__gym = {
  get state() { return state; }, get mode() { return mode; }, get place() { return place; },
  pos, audio, travel, startWorkout, startWork, startPlane, mirror, encounter, sleep,
};

showTitle();
loop();
