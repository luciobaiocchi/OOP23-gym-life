// Minigames: squat (colour reflexes), bench press (timing), lat pulldown (alternating keys),
// bank job (arrows) and the plane game (multiplier, as in the Java version).
// Each minigame exposes update(dt), key(k) and calls ctx.done(result) at the end.

const COUNTDOWN = 2.4;

function header(title, sub) {
  return `<h2>${title}</h2><p>${sub}</p>`;
}

function countdownText(t) {
  return t > COUNTDOWN - 0.8 ? '3' : t > COUNTDOWN - 1.6 ? '2' : '1';
}

// ---------------------------------------------------------------- SQUAT
export function squatGame(ctx, level) {
  const COLORS = [
    { n: 'RED', c: '#ff4d4d', k: '1' },
    { n: 'GREEN', c: '#3ecf6e', k: '2' },
    { n: 'BLUE', c: '#3d8bff', k: '3' },
    { n: 'YELLOW', c: '#f0d000', k: '4' },
  ];
  const limit = [2.2, 1.6, 1.15][level];
  const total = 10;
  const box = ctx.ui.open(
    header('Squat', 'Press the colour the word <b>says</b> (not the colour it is painted in) before time runs out.') +
    `<div class="info"><span id="mg-rep">Rep 0/${total}</span><span id="mg-good">Good 0</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-time"></div></div>
     <div class="btns">${COLORS.map((c) => `<button class="btn" data-k="${c.k}" style="background:${c.c};color:#111">${c.n}<small>[${c.k}]</small></button>`).join('')}</div>`,
    { clear: true, cls: 'mg' });
  box.querySelectorAll('[data-k]').forEach((b) => { b.onclick = () => api.key(b.dataset.k); });
  const word = box.querySelector('#mg-word');
  let t = COUNTDOWN, rep = 0, good = 0, target = null, left = 0, wait = 0, anim = -1, over = false;

  function next() {
    if (rep >= total) { over = true; ctx.done(good / total); return; }
    rep++;
    target = COLORS[Math.floor(Math.random() * COLORS.length)];
    let ink;
    do { ink = COLORS[Math.floor(Math.random() * COLORS.length)]; } while (ink === target && Math.random() < 0.8);
    word.textContent = target.n;
    word.style.color = ink.c;
    left = limit;
    box.querySelector('#mg-rep').textContent = `Rep ${rep}/${total}`;
  }

  function answer(ok) {
    target = null;
    wait = 0.75;
    if (ok) {
      good++;
      anim = 0;
      ctx.audio.sfx('good');
      word.textContent = 'GOOD REP';
      word.style.color = '#3ecf6e';
    } else {
      ctx.audio.sfx('bad');
      word.textContent = 'MISSED';
      box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
    }
    box.querySelector('#mg-good').textContent = `Good ${good}`;
  }

  const api = {
    update(dt) {
      if (over) return;
      if (anim >= 0) {
        anim += dt / 0.75;
        ctx.char.setPose('squat', Math.sin(Math.min(1, anim) * Math.PI));
        if (anim >= 1) anim = -1;
      } else ctx.char.setPose('squat', 0);
      if (t > 0) {
        t -= dt;
        word.textContent = countdownText(t);
        word.style.color = '#fff';
        if (t <= 0) next();
        return;
      }
      if (target) {
        left -= dt;
        box.querySelector('#mg-time').style.width = (left / limit) * 100 + '%';
        if (left <= 0) answer(false);
      } else if ((wait -= dt) <= 0) next();
    },
    key(k) {
      if (!target || over) return;
      const c = COLORS.find((x) => x.k === k);
      if (c) answer(c === target);
    },
  };
  return api;
}

// ---------------------------------------------------------------- BENCH PRESS
export function benchGame(ctx, level) {
  const width = [0.24, 0.17, 0.11][level];
  const speed = [2.3, 3.0, 3.8][level];
  const total = 8, maxMiss = 3;
  const box = ctx.ui.open(
    header('Bench press', 'Press <b>SPACE</b> (or the button) when the marker is inside the green zone.') +
    `<div class="info"><span id="mg-rep">Rep 0/${total}</span><span id="mg-miss">Misses 0/${maxMiss}</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="zone" id="mg-zone"></div><div class="needle" id="mg-needle"></div></div>
     <div class="btns"><button class="btn primary" id="mg-push">PUSH <small>[Space]</small></button></div>`,
    { clear: true, cls: 'mg' });
  box.querySelector('#mg-push').onclick = () => api.key(' ');
  const word = box.querySelector('#mg-word');
  const zone = box.querySelector('#mg-zone');
  const needle = box.querySelector('#mg-needle');
  let t = COUNTDOWN, phase = 0, pos = 0, center = 0.5, rep = 0, good = 0, miss = 0, anim = -1, over = false, lock = 0;

  function newZone() {
    center = width / 2 + Math.random() * (1 - width);
    zone.style.left = (center - width / 2) * 100 + '%';
    zone.style.width = width * 100 + '%';
  }
  newZone();

  function finish() {
    over = true;
    setTimeout(() => ctx.done(good / total), 500);
  }

  const api = {
    update(dt) {
      if (anim >= 0) {
        anim += dt / 0.9;
        ctx.char.setPose('bench', 1 - Math.sin(Math.min(1, anim) * Math.PI));
        if (anim >= 1) anim = -1;
      } else ctx.char.setPose('bench', over && good < total ? 0.1 : 1);
      if (over) return;
      if (t > 0) {
        t -= dt;
        word.textContent = countdownText(t);
        if (t <= 0) word.textContent = 'GO';
        return;
      }
      lock -= dt;
      phase += dt * speed * (1 + rep * 0.06);
      pos = (Math.sin(phase) + 1) / 2;
      needle.style.left = pos * 100 + '%';
    },
    key(k) {
      if (over || t > 0 || lock > 0 || (k !== ' ' && k !== 'Enter')) return;
      lock = 0.35;
      if (Math.abs(pos - center) <= width / 2) {
        good++;
        rep++;
        anim = 0;
        ctx.audio.sfx('good');
        word.textContent = 'UP';
        newZone();
      } else {
        miss++;
        rep++;
        ctx.audio.sfx('bad');
        word.textContent = 'MISSED';
        box.classList.remove('shake'); void box.offsetWidth; box.classList.add('shake');
      }
      box.querySelector('#mg-rep').textContent = `Rep ${good}/${total}`;
      box.querySelector('#mg-miss').textContent = `Misses ${miss}/${maxMiss}`;
      if (good >= total || miss >= maxMiss) finish();
    },
  };
  return api;
}

// ---------------------------------------------------------------- LAT PULLDOWN
export function latGame(ctx, level) {
  const inc = [0.15, 0.115, 0.09][level];
  const duration = 15, target = 8;
  const box = ctx.ui.open(
    header('Lat pulldown', 'Alternate <b>Left</b> and <b>Right</b> (or A and D) as fast as you can to pull the bar down.') +
    `<div class="info"><span id="mg-rep">Rep 0/${target}</span><span id="mg-timer">${duration}s</span></div>
     <div class="word" id="mg-word">Ready?</div>
     <div class="meter"><div class="fill" id="mg-fill"></div></div>
     <div class="btns"><button class="btn blue" data-k="ArrowLeft">&larr; Left</button><button class="btn blue" data-k="ArrowRight">Right &rarr;</button></div>`,
    { clear: true, cls: 'mg' });
  box.querySelectorAll('[data-k]').forEach((b) => { b.onclick = () => api.key(b.dataset.k); });
  const word = box.querySelector('#mg-word');
  let t = COUNTDOWN, left = duration, last = null, prog = 0, shown = 0, reps = 0, over = false;
  const api = {
    update(dt) {
      shown += (prog - shown) * Math.min(1, dt * 12);
      ctx.char.setPose('lat', shown);
      if (over) { prog = Math.max(0, prog - dt); return; }
      if (t > 0) {
        t -= dt;
        word.textContent = countdownText(t);
        if (t <= 0) word.textContent = 'PULL';
        return;
      }
      left -= dt;
      prog = Math.max(0, prog - dt * 0.35);
      box.querySelector('#mg-timer').textContent = Math.ceil(left) + 's';
      box.querySelector('#mg-fill').style.width = prog * 100 + '%';
      if (left <= 0 || reps >= target) {
        over = true;
        word.textContent = reps >= target ? 'SET COMPLETE' : 'TIME';
        setTimeout(() => ctx.done(Math.min(1, reps / target)), 700);
      }
    },
    key(k) {
      if (over || t > 0) return;
      const dir = (k === 'ArrowLeft' || k === 'a' || k === 'A') ? 'L' : (k === 'ArrowRight' || k === 'd' || k === 'D') ? 'R' : null;
      if (!dir || dir === last) return;
      last = dir;
      prog += inc;
      if (prog >= 1) {
        prog = 0;
        reps++;
        ctx.audio.sfx('good');
        word.textContent = `REP ${reps}`;
        box.querySelector('#mg-rep').textContent = `Rep ${reps}/${target}`;
      }
    },
  };
  return api;
}

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
  let t = COUNTDOWN, left = duration, cur = null, correct = 0, lock = 0, over = false;
  const next = () => { cur = keys[Math.floor(Math.random() * 4)]; arrow.textContent = ARROWS[cur]; };
  const api = {
    update(dt) {
      ctx.char.setPose('count', t > 0 || over ? 0 : 1);
      if (over) return;
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
        setTimeout(() => ctx.done(correct * 2), 500);
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
  let time = -0.6, mult = 1, over = false;
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
      setTimeout(() => ctx.done(win), 1300);
    } else {
      ctx.audio.sfx('crash');
      multEl.innerHTML = `Crashed at ${crashAt.toFixed(2)}x`;
      draw(true);
      setTimeout(() => ctx.done(0), 1500);
    }
    box.querySelector('#mg-cash').disabled = true;
  }

  const api = {
    update(dt) {
      if (over) return;
      time += dt;
      if (time < 0) return;
      mult = Math.exp(0.16 * time);
      pts.push([time, mult]);
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
