import { FOODS } from './state.js';

const $ = (id) => document.getElementById(id);

const LABELS = {
  money: '💲 Soldi', stamina: '⚡ Energia', happiness: '😊 Umore', mass: '🏋️ Massa',
  legs: '🦵 Gambe', chest: '💪 Petto', back: '🔙 Schiena',
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
    $('h-day').textContent = `Giorno ${state.totalDays - state.days + 1} / ${state.totalDays}`;
    $('h-money').textContent = `💲 ${Math.round(state.money)}`;
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
      b.innerHTML = `<span class="ico">${f.icon}</span>${state.inventory[id]} <small>[${i + 1}]</small>`;
      b.title = `${f.name}: mangia`;
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

  // Finestra modale; buttons = [{label, cls, cb, key}]
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

  // Pannello libero (minigiochi): restituisce il contenitore
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
