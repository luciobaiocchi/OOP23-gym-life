// Frame-driven sessions: no wall-clock timers, no key-repeat advantage.
export const clamp01 = v => Math.max(0, Math.min(1, v));
export function timingScore(value, center, width) {
  const error = Math.abs(value - center);
  return error <= width * 0.2 ? 1 : error <= width * 0.5 ? 0.78 : error <= width ? 0.35 : 0;
}
const action = k => k === ' ' || k === 'Enter';
const header = (name, desc) => `<div class="eyebrow">TRAINING SESSION</div><h2>${name}</h2><p>${desc}</p>`;
const feedback = s => s >= 0.95 ? 'PERFECT' : s >= 0.7 ? 'GOOD REP' : s > 0 ? 'KEEP GOING' : 'MISSED';

// Shared gym session: squat follows actual depth, bench follows bar travel,
// and lat requires alternating hands on the beat, with a controlled return.
export function trainingGame(ctx, level, kind) {
  const names = { squat: 'Squat · depth control', bench: 'Bench · power window', lat: 'Lat · rhythm & control' };
  const instructions = {
    squat: 'Hold SPACE to lower into the squat. Release in the mint zone to drive up. On touch, hold the button.',
    bench: 'Follow the bar as it lowers. Press SPACE in the mint zone to press it up. Aim for the bright centre.',
    lat: 'Alternate A / D (or ← / →), on the beat. Pull in the mint zone, then control the return.',
  };
  const total = 8;
  const box = ctx.ui.open(header(names[kind], instructions[kind]) + `
    <div class="info"><span data-reps>REP 1 / ${total}</span><span data-combo>COMBO 0</span></div>
    <div class="word" data-word>READY</div>
    <div class="meter skill-meter"><div class="zone" data-zone></div><div class="perfect-zone" data-perfect></div><div class="needle" data-needle></div></div>
    <div class="rep-track">${Array.from({ length: total }, () => '<i></i>').join('')}</div>
    <div class="info"><span data-hint>Find your rhythm</span><span data-clock></span></div>
    <div class="btns">${kind === 'lat' ? '<button class="btn blue" data-left>← PULL [A]</button><button class="btn blue" data-right>PULL [D] →</button>' : `<button class="btn primary hold-button" data-action>${kind === 'squat' ? 'HOLD · LOWER / RELEASE · LIFT' : 'PRESS [SPACE]'}</button>`}</div>
    <small class="session-exit">Esc · pause / stop session</small>`, { clear: true, cls: 'mg training' });
  const el = name => box.querySelector(`[data-${name}]`);
  const word = el('word'), needle = el('needle'), reps = el('reps'), comboEl = el('combo'), hint = el('hint');
  const dots = [...box.querySelectorAll('.rep-track i')];
  let countdown = 2.4, phase = 0, depth = 0, pose = kind === 'bench' ? 1 : 0;
  let held = false, wait = 0, rep = 0, sum = 0, combo = 0, over = false, spent = 0;
  let center = kind === 'squat' ? 0.76 : 0.62, width = [0.29, 0.23, 0.18][level];
  let nextSide = 'left', animFrom = 0;
  function zone() {
    el('zone').style.left = `${(center - width / 2) * 100}%`;
    el('zone').style.width = `${width * 100}%`;
    el('perfect').style.left = `${(center - width * 0.2) * 100}%`;
    el('perfect').style.width = `${width * 0.4 * 100}%`;
  }
  zone();
  function submit(score) {
    if (over || countdown > 0 || wait > 0) return;
    sum += score;
    combo = score >= 0.7 ? combo + 1 : 0;
    dots[rep].className = score >= 0.95 ? 'perfect' : score > 0 ? 'hit' : 'miss';
    rep++;
    word.textContent = feedback(score);
    word.dataset.grade = score >= 0.7 ? 'good' : 'bad';
    comboEl.textContent = `COMBO ${combo}${combo >= 3 ? ' · ON FIRE' : ''}`;
    hint.textContent = score >= 0.95 ? 'Clean form. Full reward.' : score > 0 ? 'Aim for the bright centre.' : 'Reset, breathe, try again.';
    ctx.audio.sfx(score >= 0.7 ? 'good' : 'bad');
    animFrom = pose;
    held = false;
    wait = 0.9;
    if (kind === 'lat') nextSide = nextSide === 'left' ? 'right' : 'left';
  }
  const api = {
    update(dt) {
      if (over) return;
      if (countdown > 0) {
        countdown -= dt;
        word.textContent = countdown > 0 ? String(Math.ceil(countdown / 0.8)) : 'GO';
        ctx.char.setPose(kind, pose);
        return;
      }
      if (wait > 0) {
        wait = Math.max(0, wait - dt);
        const t = 1 - wait / 0.9;
        if (kind === 'squat') pose = animFrom * (1 - t) ** 2;
        else if (kind === 'bench') pose = animFrom + (1 - animFrom) * Math.sin(t * Math.PI / 2);
        else pose = Math.sin(t * Math.PI);
        ctx.char.setPose(kind, pose);
        if (wait === 0) {
          if (rep >= total) { over = true; ctx.done(sum / total); return; }
          phase = depth = spent = 0;
          center = kind === 'squat' ? 0.70 + Math.random() * 0.13 : 0.48 + Math.random() * 0.25;
          zone();
          reps.textContent = `REP ${rep + 1} / ${total}`;
          word.dataset.grade = '';
        }
        return;
      }
      spent += dt;
      phase += dt * [0.6, 0.74, 0.88][level];
      if (kind === 'squat') {
        if (held) depth = Math.min(1, depth + dt * [0.64, 0.78, 0.94][level]);
        pose = depth;
        word.textContent = held ? 'LOWER…' : 'HOLD TO LOWER';
        if (depth >= 1) submit(0);
      } else {
        depth = (1 - Math.cos(phase * Math.PI * 2)) / 2;
        pose = kind === 'bench' ? 1 - depth : depth * 0.16;
        word.textContent = kind === 'lat' ? (nextSide === 'left' ? '← LEFT' : 'RIGHT →') : 'FIND THE WINDOW';
      }
      needle.style.left = `${depth * 100}%`;
      el('clock').textContent = `${Math.max(0, Math.ceil(5 - spent))}s`;
      ctx.char.setPose(kind, pose);
      if (spent >= 5) submit(0);
    },
    key(k) {
      if (over || countdown > 0 || wait > 0) return;
      if (kind === 'squat' && action(k)) held = true;
      else if (kind === 'bench' && action(k)) submit(timingScore(depth, center, width));
      else if (kind === 'lat') {
        const side = ['a', 'A', 'ArrowLeft'].includes(k) ? 'left' : ['d', 'D', 'ArrowRight'].includes(k) ? 'right' : null;
        if (side) submit(side === nextSide ? timingScore(depth, center, width) : 0);
      }
    },
    release(k) {
      if (kind === 'squat' && action(k) && held) { held = false; submit(timingScore(depth, center, width)); }
    },
    suspend() { held = false; },
    dispose() { over = true; held = false; },
  };
  if (kind === 'squat') {
    const button = el('action');
    button.onpointerdown = e => { e.preventDefault(); button.setPointerCapture(e.pointerId); api.key(' '); };
    button.onpointerup = e => { e.preventDefault(); api.release(' '); };
    button.onpointercancel = () => { held = false; };
  } else if (kind === 'bench') el('action').onclick = () => api.key(' ');
  else { el('left').onclick = () => api.key('a'); el('right').onclick = () => api.key('d'); }
  return api;
}

export function basketballGame(ctx, level) {
  const total = 5, width = [0.27, 0.20, 0.14][level];
  const box = ctx.ui.open(header('Basketball · five spots', 'Hold SPACE to load your shot. Release in the mint zone. Each basket moves you to a new spot.') + `
    <div class="info"><span data-shots>SHOT 1 / 5</span><span data-score>0 PTS</span></div>
    <div class="word" data-word>READY</div>
    <div class="meter skill-meter"><div class="zone" data-zone></div><div class="perfect-zone" data-perfect></div><div class="needle" data-needle></div></div>
    <div class="rep-track">${'<i></i>'.repeat(total)}</div>
    <p data-hint>Hold, aim, release.</p><button class="btn primary hold-button" data-shoot>HOLD TO AIM · RELEASE TO SHOOT</button>
    <small class="session-exit">Esc · pause / stop session</small>`, { clear: true, cls: 'mg' });
  const el = n => box.querySelector(`[data-${n}]`);
  const dots = [...box.querySelectorAll('.rep-track i')];
  let countdown = 2.4, held = false, power = 0, flight = 0, shot = 0, sum = 0, points = 0, idle = 0, over = false;
  let center = 0.65, result = 0;
  const prepare = () => {
    center = 0.52 + shot * 0.065;
    el('zone').style.cssText = `left:${(center - width / 2) * 100}%;width:${width * 100}%`;
    el('perfect').style.cssText = `left:${(center - width * 0.2) * 100}%;width:${width * 0.4 * 100}%`;
    ctx.spot(shot);
  };
  prepare();
  function shoot() {
    if (over || countdown > 0 || flight > 0) return;
    held = false;
    result = timingScore(power, center, width);
    sum += result;
    const made = result >= 0.7;
    points += made ? (shot === 4 ? 3 : 2) : 0;
    dots[shot].className = result >= 0.95 ? 'perfect' : made ? 'hit' : 'miss';
    el('word').textContent = result >= 0.95 ? 'SWISH!' : made ? 'BUCKET!' : 'OFF THE RIM';
    el('word').dataset.grade = made ? 'good' : 'bad';
    el('score').textContent = `${points} PTS`;
    el('hint').textContent = made ? 'Nice release. Next spot!' : 'Find the sweet spot on your next shot.';
    ctx.audio.sfx(made ? 'good' : 'bad');
    flight = 1.6;
  }
  const api = {
    update(dt) {
      if (over) return;
      if (countdown > 0) {
        countdown -= dt;
        el('word').textContent = countdown > 0 ? String(Math.ceil(countdown / 0.8)) : 'HOLD TO AIM';
        ctx.animate(0, 0, 0, false);
        return;
      }
      if (flight > 0) {
        flight = Math.max(0, flight - dt);
        ctx.animate(1, 1 - flight / 1.6, result, true);
        if (flight === 0) {
          shot++;
          if (shot >= total) { over = true; ctx.done(sum / total); return; }
          power = idle = 0;
          prepare();
          el('shots').textContent = `SHOT ${shot + 1} / ${total}`;
          el('word').textContent = 'HOLD TO AIM';
          el('word').dataset.grade = '';
        }
        return;
      }
      idle += dt;
      if (held) power = Math.min(1, power + dt * (0.65 + level * 0.14));
      el('needle').style.left = `${power * 100}%`;
      ctx.animate(power, 0, 0, false);
      if (power >= 1 || idle > 6) shoot();
    },
    key(k) { if (action(k) && countdown <= 0 && !flight) held = true; },
    release(k) { if (action(k) && held) shoot(); },
    suspend() { held = false; },
    dispose() { over = true; },
  };
  el('shoot').onpointerdown = e => { e.preventDefault(); el('shoot').setPointerCapture(e.pointerId); api.key(' '); };
  el('shoot').onpointerup = e => { e.preventDefault(); api.release(' '); };
  el('shoot').onpointercancel = () => { held = false; };
  return api;
}

export function boxingGame(ctx, level) {
  const patterns = [['a', 'd', 'a', 's'], ['d', 'a', 'd', 's'], ['a', 'a', 'd', 's']];
  const sequence = Array.from({ length: 4 }, (_, i) => patterns[(i + level) % patterns.length]).flat();
  const names = { a: '← JAB', d: 'CROSS →', s: '↓ DUCK' };
  const box = ctx.ui.open(header('Boxing · read & react', 'A / ← to jab. D / → to cross. S / ↓ to duck the swinging bag. Hit the indicated move in the mint window.') + `
    <div class="info"><span data-round>MOVE 1 / 16</span><span data-combo>COMBO 0</span></div>
    <div class="word" data-word>READY</div><div class="combo-preview" data-next></div>
    <div class="meter skill-meter"><div class="zone" style="left:48%;width:38%"></div><div class="needle" data-needle></div></div>
    <p data-feedback>Watch the next moves. Set your rhythm.</p>
    <div class="btns"><button class="btn blue" data-k="a">← JAB [A]</button><button class="btn" data-k="s">DUCK [S]</button><button class="btn blue" data-k="d">CROSS [D] →</button></div>
    <small class="session-exit">Esc · pause / stop session</small>`, { clear: true, cls: 'mg' });
  const el = n => box.querySelector(`[data-${n}]`);
  const beat = [1.55, 1.25, 1.03][level];
  let countdown = 2.4, time = 0, index = 0, sum = 0, combo = 0, answered = false, over = false, animation = 0, move = 'guard';
  const preview = () => { el('word').textContent = names[sequence[index]]; el('next').textContent = sequence.slice(index + 1, index + 4).map(k => names[k]).join('  ·  '); el('round').textContent = `MOVE ${index + 1} / 16`; };
  function hit(k) {
    if (answered || countdown > 0 || over) return;
    answered = true;
    const t = time / beat;
    const score = k === sequence[index] && t >= 0.48 && t <= 0.86 ? (Math.abs(t - 0.67) < 0.1 ? 1 : 0.78) : 0;
    sum += score;
    combo = score ? combo + 1 : 0;
    el('combo').textContent = `COMBO ${combo}`;
    el('feedback').textContent = score ? `${score === 1 ? 'PERFECT' : 'NICE'}${combo >= 4 ? ' · COMBO BONUS FORM' : ''}` : t < 0.48 ? 'Too early. Let the marker reach the zone.' : 'Reset your guard. Follow the next move.';
    ctx.audio.sfx(score ? 'good' : 'bad');
    move = k === 's' ? 'duck' : k === 'a' ? 'jab' : 'cross';
    animation = 0.4;
    ctx.impact(score && k !== 's' ? (k === 'a' ? -1 : 1) : 0);
  }
  const api = {
    update(dt) {
      if (over) return;
      if (countdown > 0) {
        countdown -= dt;
        el('word').textContent = countdown > 0 ? String(Math.ceil(countdown / 0.8)) : names[sequence[index]];
        if (countdown <= 0) preview();
        return;
      }
      time += dt;
      animation = Math.max(0, animation - dt);
      ctx.char.setPose(animation > 0 ? move : 'guard', Math.sin((1 - animation / 0.4) * Math.PI));
      ctx.telegraph(sequence[index] === 's' ? Math.sin(clamp01(time / beat) * Math.PI) : 0);
      el('needle').style.left = `${Math.min(1, time / beat) * 100}%`;
      if (time >= beat) {
        if (!answered) { combo = 0; el('combo').textContent = 'COMBO 0'; el('feedback').textContent = 'Missed beat. Keep going!'; }
        time = 0; answered = false; index++;
        if (index >= sequence.length) { over = true; ctx.done(sum / sequence.length); return; }
        preview();
      }
    },
    key(k) { const map = { ArrowLeft: 'a', ArrowRight: 'd', ArrowDown: 's' }; k = map[k] || k.toLowerCase(); if (['a', 'd', 's'].includes(k)) hit(k); },
    dispose() { over = true; },
  };
  box.querySelectorAll('[data-k]').forEach(b => { b.onclick = () => api.key(b.dataset.k); });
  return api;
}
