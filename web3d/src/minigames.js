// Animated skill training (depth, timing, rhythm), outdoor sports,
// bank job (arrows) and the plane game (multiplier, as in the Java version).
// Each minigame exposes update(dt), key(k) and calls ctx.done(result) at the end.

const COUNTDOWN = 2.4;

function header(title, sub) {
  return `<h2>${title}</h2><p>${sub}</p>`;
}

function countdownText(t) {
  return t > COUNTDOWN - 0.8 ? '3' : t > COUNTDOWN - 1.6 ? '2' : '1';
}

export { trainingGame, basketballGame, boxingGame } from './training.js';
import { trainingGame } from './training.js';
export const squatGame = (ctx, level) => trainingGame(ctx, level, 'squat');
export const benchGame = (ctx, level) => trainingGame(ctx, level, 'bench');
export const latGame = (ctx, level) => trainingGame(ctx, level, 'lat');

// ---------------------------------------------------------------- BANK JOB
export function workGame(ctx) {
  const ARROWS = { ArrowUp: '\u2191', ArrowDown: '\u2193', ArrowLeft: '\u2190', ArrowRight: '\u2192' };
  const WASD = { w: 'ArrowUp', s: 'ArrowDown', a: 'ArrowLeft', d: 'ArrowRight' };
  const keys = Object.keys(ARROWS);
  const duration = 15;
  const box = ctx.ui.open(
    header('Count the banknotes', 'Press the arrow shown (or WASD). Every correct answer pays <b>$2</b>.') +
    `<div class="info"><span id="mg-earn">$0</span><span id="mg-timer">${duration}s</span></div>
     <div class="arrows" id="mg-arrow">...</div>
     <div class="btns">${keys.map((k) => `<button class="btn" data-k="${k}">${ARROWS[k]}</button>`).join('')}</div>`,
    { clear: true, cls: 'mg' });
  box.querySelectorAll('[data-k]').forEach((b) => { b.onclick = () => api.key(b.dataset.k); });
  const arrow = box.querySelector('#mg-arrow');
  let t = COUNTDOWN, left = duration, cur = null, correct = 0, lock = 0, over = false, ending = 0;
  const next = () => { cur = keys[Math.floor(Math.random() * 4)]; arrow.textContent = ARROWS[cur]; };
  const api = {
    update(dt) {
      ctx.char.setPose('count', t > 0 || over ? 0 : 1);
      if (over) { if (ending > 0 && (ending -= dt) <= 0) ctx.done(correct * 2); return; }
      if (t > 0) {
        t -= dt;
        arrow.textContent = countdownText(t);
        if (t <= 0) next();
        return;
      }
      lock -= dt;
      left -= dt;
      box.querySelector('#mg-timer').textContent = Math.ceil(left) + 's';
      if (left <= 0) {
        over = true;
        arrow.textContent = 'TIME';
        ending = 0.5;
      }
    },
    key(k) {
      if (over || t > 0 || lock > 0) return;
      k = WASD[k] || WASD[k.toLowerCase?.()] || k;
      if (!ARROWS[k]) return;
      if (k === cur) {
        correct++;
        ctx.audio.sfx('coin');
        box.querySelector('#mg-earn').textContent = '$' + correct * 2;
        next();
      } else {
        ctx.audio.sfx('bad');
        lock = 0.5;
        box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
      }
    },
  };
  return api;
}

// ---------------------------------------------------------------- PLANE
export function planeGame(ctx, bet) {
  // crash point with a small house edge (~4%)
  const u = Math.random();
  const crashAt = Math.min(25, Math.max(1, 0.96 / (1 - u)));
  const box = ctx.ui.open(
    header('Investment', `You bet <b>$${bet}</b>. Cash out before the plane goes down.`) +
    `<canvas id="mg-cv" width="520" height="220"></canvas>
     <div class="word" id="mg-mult">1.00x</div>
     <div class="btns"><button class="btn good" id="mg-cash">CASH OUT <small>[Space]</small></button></div>`,
    { cls: 'mg' });
  box.querySelector('#mg-cash').onclick = () => api.key(' ');
  const cv = box.querySelector('#mg-cv');
  const g = cv.getContext('2d');
  const multEl = box.querySelector('#mg-mult');
  let time = -0.6, mult = 1, over = false, ending = 0, payout = 0;
  const pts = [];

  function draw(crashed) {
    g.clearRect(0, 0, cv.width, cv.height);
    g.strokeStyle = 'rgba(255,255,255,.08)';
    for (let i = 1; i < 5; i++) {
      g.beginPath(); g.moveTo(0, i * 44); g.lineTo(cv.width, i * 44); g.stroke();
    }
    const maxT = Math.max(6, time + 1), maxM = Math.max(2, mult * 1.2);
    const X = (tt) => 20 + (tt / maxT) * (cv.width - 60);
    const Y = (m) => cv.height - 20 - ((m - 1) / (maxM - 1)) * (cv.height - 50);
    g.strokeStyle = crashed ? '#ff5a5a' : '#f0b400';
    g.lineWidth = 4;
    g.beginPath();
    pts.forEach(([tt, m], i) => (i ? g.lineTo(X(tt), Y(m)) : g.moveTo(X(tt), Y(m))));
    g.stroke();
    const last = pts[pts.length - 1] || [0, 1];
    // small plane silhouette (or a red burst when it crashes)
    g.save();
    g.translate(X(last[0]), Y(last[1]));
    if (crashed) {
      g.fillStyle = '#ff5a5a';
      g.beginPath();
      for (let i = 0; i < 16; i++) {
        const a = (i / 16) * Math.PI * 2, rr = i % 2 ? 7 : 16;
        g.lineTo(Math.cos(a) * rr, Math.sin(a) * rr);
      }
      g.fill();
    } else {
      g.rotate(-0.35);
      g.fillStyle = '#f4f6fb';
      g.beginPath();
      g.ellipse(0, 0, 18, 4, 0, 0, Math.PI * 2);
      g.moveTo(-2, 0); g.lineTo(-10, -13); g.lineTo(-5, -13); g.lineTo(6, 0);
      g.moveTo(-2, 0); g.lineTo(-10, 13); g.lineTo(-5, 13); g.lineTo(6, 0);
      g.moveTo(-14, 0); g.lineTo(-19, -8); g.lineTo(-16, -8); g.lineTo(-10, 0);
      g.fill();
    }
    g.restore();
  }

  function end(won) {
    over = true;
    if (won) {
      const win = Math.round(bet * mult);
      ctx.audio.sfx('buy');
      multEl.innerHTML = `Cashed out <b>$${win}</b> (${mult.toFixed(2)}x)`;
      payout = win; ending = 1.3;
    } else {
      ctx.audio.sfx('crash');
      multEl.innerHTML = `Crashed at ${crashAt.toFixed(2)}x`;
      draw(true);
      ending = 1.5;
    }
    box.querySelector('#mg-cash').disabled = true;
  }

  const api = {
    update(dt) {
      if (over) { if (ending > 0 && (ending -= dt) <= 0) ctx.done(payout); return; }
      time += dt;
      if (time < 0) return;
      mult = Math.exp(0.16 * time);
      if (!pts.length || time - pts[pts.length - 1][0] >= 0.05) pts.push([time, mult]);
      if (mult >= crashAt) { mult = crashAt; end(false); return; }
      multEl.textContent = mult.toFixed(2) + 'x';
      draw(false);
    },
    key(k) {
      if (over || time < 0 || (k !== ' ' && k !== 'Enter')) return;
      end(true);
    },
  };
  return api;
}
