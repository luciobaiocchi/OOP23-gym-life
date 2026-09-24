// Musica e effetti sonori generati in tempo reale con la Web Audio API:
// nessun file audio da scaricare, funziona offline su qualsiasi browser.

const midiToFreq = (m) => 440 * Math.pow(2, (m - 69) / 12);

// Accordi come liste di note MIDI
const Am = [57, 60, 64], F = [53, 57, 60], C = [48, 52, 55], G = [55, 59, 62];
const Dm = [50, 53, 57], Em = [52, 55, 59], E = [52, 56, 59];
const Cm = [48, 51, 55], Ab = [56, 60, 63], Eb = [51, 55, 58], Bb = [46, 50, 53];
const Fmaj7 = [53, 57, 60, 64], Cmaj7 = [48, 52, 55, 59], Am7 = [57, 60, 64, 67], Dm7 = [50, 53, 57, 60];

// x = colpo, . = pausa (16 step per battuta)
const P = (s) => s.split('').map((c) => c === 'x');

const TRACKS = {
  title: {
    bpm: 104, chords: [Am, F, C, G], swing: 0,
    kick: P('x.......x.......'), snare: P('....x.......x...'), hat: P('..x...x...x...x.'),
    bass: [0, null, null, 0, null, null, 12, null, 0, null, null, 0, null, 7, null, null],
    arp: 'up', arpWave: 'square', arpVol: 0.05, lead: true, pad: 'sawtooth', padVol: 0.035,
  },
  city: {
    bpm: 96, chords: [Fmaj7, Cmaj7, Am7, G], swing: 0.12,
    kick: P('x......x..x.....'), snare: P('....x.......x...'), hat: P('x.x.x.x.x.x.x.x.'),
    bass: [0, null, null, null, null, null, 7, null, 0, null, null, 12, null, null, 7, null],
    arp: 'updown', arpWave: 'triangle', arpVol: 0.06, lead: true, pad: 'triangle', padVol: 0.05,
  },
  home: {
    bpm: 76, chords: [Dm7, G, Cmaj7, Am7], swing: 0.2,
    kick: P('x.........x.....'), snare: P('....x.......x...'), hat: P('..x...x...x...x.'),
    bass: [0, null, null, null, null, null, null, null, 7, null, null, null, 5, null, null, null],
    arp: null, lead: true, leadWave: 'sine', pad: 'triangle', padVol: 0.07, lofi: true,
  },
  gym: {
    bpm: 128, chords: [Am, Am, F, G], swing: 0,
    kick: P('x...x...x...x...'), snare: P('....x.......x...'), hat: P('..x...x...x...x.'),
    bass: [0, 0, 12, 0, 0, 12, 0, 12, 0, 0, 12, 0, 0, 12, 0, 12],
    bassWave: 'sawtooth', arp: 'up', arpWave: 'sawtooth', arpVol: 0.035, lead: true, leadWave: 'square',
    pad: 'sawtooth', padVol: 0.025,
  },
  workout: {
    bpm: 150, chords: [Em, C, G, E], swing: 0,
    kick: P('x...x...x...x.x.'), snare: P('....x.......x..x'), hat: P('xxxxxxxxxxxxxxxx'),
    bass: [0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 0, 12, 7, 12],
    bassWave: 'sawtooth', arp: 'up', arpWave: 'square', arpVol: 0.04, lead: false, pad: null,
  },
  shop: {
    bpm: 112, chords: [Cmaj7, Am7, Dm7, G], swing: 0.1,
    kick: P('x.....x...x.....'), snare: P('...x..x....x..x.'), hat: P('x.xxx.xxx.xxx.xx'),
    bass: [0, null, null, 7, null, null, 12, null, 0, null, null, 7, null, 5, null, null],
    arp: 'updown', arpWave: 'triangle', arpVol: 0.05, lead: true, leadWave: 'triangle', pad: 'sine', padVol: 0.06,
  },
  bank: {
    bpm: 120, chords: [Cm, Ab, Eb, Bb], swing: 0,
    kick: P('x.......x.x.....'), snare: P('....x.......x...'), hat: P('x.x.x.x.x.x.x.x.'),
    bass: [0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 0, null, 7, null],
    bassWave: 'square', arp: 'down', arpWave: 'square', arpVol: 0.035, lead: false, pad: 'sawtooth', padVol: 0.03,
  },
  gameover: {
    bpm: 70, chords: [Am, Dm, E, Am], swing: 0,
    kick: P('x...............'), snare: P('................'), hat: P('................'),
    bass: [0, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    arp: null, lead: true, leadWave: 'triangle', pad: 'triangle', padVol: 0.07,
  },
  win: {
    bpm: 132, chords: [C, G, Am, F], swing: 0,
    kick: P('x...x...x...x...'), snare: P('....x.......x...'), hat: P('x.x.x.x.x.x.x.x.'),
    bass: [0, null, 12, null, 0, null, 12, null, 0, null, 12, null, 0, null, 12, null],
    arp: 'up', arpWave: 'square', arpVol: 0.05, lead: true, leadWave: 'square', pad: 'sawtooth', padVol: 0.03,
  },
};

// Generatore pseudo-casuale deterministico per melodie ripetibili
function rng(seed) {
  let s = seed >>> 0;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

export class Audio {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.volume = 0.7;
    this.current = null; // { name, bus, timer }
    this.wanted = null;
  }

  // Deve essere chiamato dopo un gesto dell'utente (policy autoplay dei browser)
  init() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return;
    this.ctx = new Ctx();
    const ctx = this.ctx;
    this.master = ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18;
    comp.ratio.value = 4;
    this.master.connect(comp).connect(ctx.destination);

    this.musicGain = ctx.createGain();
    this.musicGain.gain.value = 0.8;
    this.musicGain.connect(this.master);
    this.sfxGain = ctx.createGain();
    this.sfxGain.gain.value = 0.9;
    this.sfxGain.connect(this.master);

    // Delay condiviso per lead/arpeggi
    this.delay = ctx.createDelay(1);
    this.delay.delayTime.value = 0.28;
    const fb = ctx.createGain();
    fb.gain.value = 0.3;
    const dl = ctx.createGain();
    dl.gain.value = 0.25;
    this.delay.connect(fb).connect(this.delay);
    this.delay.connect(dl).connect(this.musicGain);

    // Buffer di rumore bianco per batteria
    const len = ctx.sampleRate;
    this.noise = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;

    if (this.wanted) this.play(this.wanted, true);
  }

  setMuted(m) {
    this.muted = m;
    if (this.master) this.master.gain.setTargetAtTime(m ? 0 : this.volume, this.ctx.currentTime, 0.05);
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  play(name, force = false) {
    this.wanted = name;
    if (!this.ctx) return;
    if (!force && this.current && this.current.name === name) return;
    const ctx = this.ctx;
    const now = ctx.currentTime;
    if (this.current) {
      const old = this.current;
      clearInterval(old.timer);
      old.bus.gain.cancelScheduledValues(now);
      old.bus.gain.setValueAtTime(old.bus.gain.value, now);
      old.bus.gain.linearRampToValueAtTime(0, now + 0.8);
      setTimeout(() => old.bus.disconnect(), 1500);
    }
    const track = TRACKS[name];
    const bus = ctx.createGain();
    bus.gain.setValueAtTime(0, now);
    bus.gain.linearRampToValueAtTime(1, now + 0.8);
    bus.connect(this.musicGain);
    const melody = this.makeMelody(track, name.length * 97 + track.bpm);
    const cur = { name, bus, track, melody, step: 0, next: now + 0.1 };
    const spb = 60 / track.bpm / 4; // secondi per sedicesimo
    cur.timer = setInterval(() => {
      while (cur.next < ctx.currentTime + 0.2) {
        this.scheduleStep(cur, cur.step, cur.next);
        const swing = cur.step % 2 === 0 ? track.swing : -track.swing;
        cur.next += spb * (1 + swing);
        cur.step++;
      }
    }, 50);
    this.current = cur;
  }

  // Melodia di 4 battute costruita sulle note degli accordi, variata ogni giro
  makeMelody(track, seed) {
    const r = rng(seed);
    const phrases = [];
    for (let v = 0; v < 2; v++) {
      const mel = [];
      track.chords.forEach((ch) => {
        for (let s = 0; s < 16; s++) {
          const onBeat = s % 4 === 0;
          const play = onBeat ? r() < 0.75 : r() < 0.28;
          if (!play) { mel.push(null); continue; }
          const tone = ch[Math.floor(r() * ch.length)] + 12;
          const len = onBeat && r() < 0.5 ? 3 : 1;
          mel.push({ note: tone, len });
        }
      });
      phrases.push(mel);
    }
    return phrases;
  }

  scheduleStep(cur, step, t) {
    const { track, bus } = cur;
    const s = step % 16;
    const bar = Math.floor(step / 16);
    const chord = track.chords[bar % track.chords.length];
    const spb = 60 / track.bpm / 4;

    if (track.kick[s]) this.kick(t, bus);
    if (track.snare[s]) this.snare(t, bus);
    if (track.hat[s]) this.hat(t, bus, s % 4 === 2 ? 0.05 : 0.03);

    const b = track.bass[s];
    if (b !== null && b !== undefined) {
      this.tone(chord[0] - 24 + b, t, spb * 1.6, track.bassWave || 'triangle', 0.16, bus, 900);
    }

    if (track.pad && s === 0) {
      chord.forEach((n) => this.tone(n, t, spb * 15, track.pad, track.padVol, bus, 1400, 0.25, 0.9));
    }

    if (track.arp && s % 2 === 0) {
      const notes = [...chord, chord[0] + 12];
      let idx = s / 2;
      if (track.arp === 'down') idx = notes.length - 1 - (idx % notes.length);
      else if (track.arp === 'updown') {
        const cyc = notes.length * 2 - 2;
        idx %= cyc;
        if (idx >= notes.length) idx = cyc - idx;
      }
      this.tone(notes[idx % notes.length] + 12, t, spb * 0.9, track.arpWave, track.arpVol, bus, 3000, 0.005, 0.2, true);
    }

    if (track.lead) {
      const phrase = cur.melody[Math.floor(bar / track.chords.length) % 2];
      const m = phrase[(bar % track.chords.length) * 16 + s];
      if (m) this.tone(m.note, t, spb * m.len, track.leadWave || 'square', 0.06, bus, 2600, 0.01, 0.5, true);
    }
  }

  tone(midi, t, dur, wave, vol, dest, cutoff = 2000, attack = 0.01, release = 0.15, sendDelay = false) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = wave;
    o.frequency.setValueAtTime(midiToFreq(midi), t);
    const f = ctx.createBiquadFilter();
    f.type = 'lowpass';
    f.frequency.value = cutoff;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + attack);
    g.gain.setValueAtTime(vol, t + Math.max(attack, dur - 0.02));
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + release);
    o.connect(f).connect(g).connect(dest);
    if (sendDelay) g.connect(this.delay);
    o.start(t);
    o.stop(t + dur + release + 0.05);
  }

  kick(t, dest, vol = 0.5) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.frequency.setValueAtTime(150, t);
    o.frequency.exponentialRampToValueAtTime(40, t + 0.15);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.3);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + 0.32);
  }

  noiseHit(t, dest, vol, dur, type, freq) {
    const ctx = this.ctx;
    const src = ctx.createBufferSource();
    src.buffer = this.noise;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    src.connect(f).connect(g).connect(dest);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.02);
  }

  snare(t, dest) {
    this.noiseHit(t, dest, 0.22, 0.18, 'highpass', 1500);
    this.tone(50, t, 0.03, 'triangle', 0.12, dest, 4000, 0.001, 0.08);
  }

  hat(t, dest, vol) {
    this.noiseHit(t, dest, vol, 0.04, 'highpass', 8000);
  }

  // ---- effetti sonori ----
  sfx(name) {
    if (!this.ctx) return;
    const t = this.ctx.currentTime + 0.01;
    const d = this.sfxGain;
    const seq = (notes, step, wave = 'square', vol = 0.12) =>
      notes.forEach((n, i) => this.tone(n, t + i * step, step * 0.9, wave, vol, d, 5000, 0.005, 0.1));
    switch (name) {
      case 'click': seq([84], 0.04, 'square', 0.06); break;
      case 'coin': seq([83, 88], 0.07, 'square', 0.1); break;
      case 'buy': seq([76, 83, 88], 0.06, 'square', 0.1); break;
      case 'eat': this.noiseHit(t, d, 0.2, 0.1, 'bandpass', 900); this.noiseHit(t + 0.14, d, 0.2, 0.1, 'bandpass', 700); break;
      case 'good': seq([79, 84], 0.06, 'triangle', 0.14); break;
      case 'bad': seq([52, 47], 0.1, 'sawtooth', 0.1); break;
      case 'door': this.noiseHit(t, d, 0.25, 0.3, 'lowpass', 600); seq([60, 67], 0.08, 'triangle', 0.08); break;
      case 'levelup': seq([72, 76, 79, 84, 88], 0.08, 'square', 0.1); break;
      case 'sleep': seq([79, 76, 72, 67, 64], 0.18, 'sine', 0.14); break;
      case 'step': this.noiseHit(t, d, 0.04, 0.05, 'lowpass', 400); break;
      case 'crash': this.noiseHit(t, d, 0.5, 0.8, 'lowpass', 1200); seq([48, 43, 36], 0.12, 'sawtooth', 0.12); break;
      case 'event': seq([69, 72, 76, 81], 0.07, 'triangle', 0.12); break;
      default: break;
    }
  }
}
