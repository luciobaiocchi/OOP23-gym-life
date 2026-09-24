import { FOODS } from './state.js';

const $ = (id) => document.getElementById(id);

const LABELS = {
  money: 'Money', stamina: 'Energy', happiness: 'Mood', mass: 'Mass',
  legs: 'Legs', chest: 'Chest', back: 'Back',
};

// Simple line icons (SVG) for the HUD buttons
const svg = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
export const ICONS = {
  sound: svg('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16 9a4 4 0 0 1 0 6"/><path d="M19 6a8 8 0 0 1 0 12"/>'),
  muted: svg('<path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M17 9l5 6M22 9l-5 6"/>'),
  quality: svg('<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>'),
  radio: svg('<rect x="3" y="8" width="18" height="12" rx="2"/><path d="M7 8l10-5"/><circle cx="15" cy="14" r="3"/><path d="M6 12h3M6 16h3"/>'),
  help: svg('<circle cx="12" cy="12" r="9"/><path d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6V14"/><path d="M12 17.5v.01"/>'),
};

export function effectsHtml(delta) {
  return '<div class="effects">' + Object.entries(delta).map(([k, v]) =>
    `<span class="${v >= 0 ? 'up' : 'down'}">${LABELS[k] || k} ${v > 0 ? '+' : ''}${v}</span>`).join('') + '</div>';
}

export class UI {
  constructor(audio) {
    this.audio = audio;
    this.panel = $('panel');
    this.onEat = null;
    this.panelKeys = null;
  }

  showHud(show) {
    $('hud').classList.toggle('hidden', !show);
  }

  update(state) {
    $('h-day').textContent = `Day ${state.totalDays - state.days + 1} / ${state.totalDays}`;
    $('h-money').textContent = `$${Math.round(state.money)}`;
    const set = (k, v) => {
      const pct = Math.max(0, Math.min(100, v));
      const bar = $('b-' + k);
      bar.style.width = pct + '%';
      if (k === 'stamina' || k === 'happiness') {
        bar.style.background = pct < 25 ? 'var(--bad)' : pct < 50 ? '#ffb13d' : 'var(--good)';
      }
      $('v-' + k).textContent = Math.round(v);
    };
    ['stamina', 'happiness', 'legs', 'chest', 'back'].forEach((k) => set(k, state[k]));
    const inv = $('inventory');
    inv.innerHTML = '';
    Object.entries(FOODS).forEach(([id, f], i) => {
      const b = document.createElement('button');
      b.innerHTML = `<span class="name">${f.name}</span><b>${state.inventory[id]}</b> <small>[${i + 1}]</small>`;
      b.title = `Eat: ${f.name}`;
      b.disabled = state.inventory[id] === 0;
      b.onclick = () => this.onEat && this.onEat(id);
      inv.appendChild(b);
    });
  }

  prompt(text) {
    const p = $('prompt');
    if (!text) { p.classList.add('hidden'); return; }
    p.innerHTML = `<kbd>E</kbd>${text}`;
    p.classList.remove('hidden');
  }

  toast(text, kind = '') {
    const t = document.createElement('div');
    t.className = 'toast ' + kind;
    t.textContent = text;
    $('toasts').appendChild(t);
    setTimeout(() => t.remove(), 2700);
  }

  // Modal dialog; buttons = [{label, cls, cb, key}]
  dialog(html, buttons = [], opts = {}) {
    this.panel.className = opts.clear ? 'clear' : '';
    this.panel.innerHTML = `<div class="box ${opts.cls || ''}">${html}<div class="btns"></div></div>`;
    const wrap = this.panel.querySelector('.btns');
    const keys = {};
    buttons.forEach((b, i) => {
      const el = document.createElement('button');
      el.className = 'btn ' + (b.cls || '');
      el.innerHTML = b.label;
      el.onclick = () => {
        this.audio.sfx('click');
        if (!b.keep) this.close();
        b.cb && b.cb();
      };
      wrap.appendChild(el);
      keys[b.key || String(i + 1)] = el;
    });
    this.panelKeys = keys;
    return this.panel.querySelector('.box');
  }

  // Free-form panel (minigames): returns the container
  open(html, opts = {}) {
    this.panel.className = opts.clear ? 'clear' : '';
    this.panel.innerHTML = `<div class="box ${opts.cls || ''}">${html}</div>`;
    this.panelKeys = null;
    return this.panel.querySelector('.box');
  }

  close() {
    this.panel.className = 'hidden';
    this.panel.innerHTML = '';
    this.panelKeys = null;
  }

  isOpen() {
    return !this.panel.classList.contains('hidden');
  }

  handleKey(key) {
    if (!this.panelKeys) return false;
    const k = key === 'Enter' ? '1' : key === 'Escape' ? 'Escape' : key;
    const el = this.panelKeys[k];
    if (el) { el.click(); return true; }
    return false;
  }

  fade(text, ms = 1400) {
    const f = $('fade');
    f.textContent = text || '';
    f.classList.add('on');
    return new Promise((res) => setTimeout(() => {
      res();
      setTimeout(() => f.classList.remove('on'), 150);
    }, ms));
  }
}
