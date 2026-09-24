// Music and sound effects synthesised in real time with the Web Audio API:
// no audio files to download, works offline in any browser.

const midiToFreq = (m) => 440 * Math.pow(2, (m - 69) / 12);

// Chords as lists of MIDI notes
const Am = [57, 60, 64], F = [53, 57, 60], C = [48, 52, 55], G = [55, 59, 62];
const Dm = [50, 53, 57], Em = [52, 55, 59], E = [52, 56, 59];
const Cm = [48, 51, 55], Ab = [56, 60, 63], Eb = [51, 55, 58], Bb = [46, 50, 53];
const Fmaj7 = [53, 57, 60, 64], Cmaj7 = [48, 52, 55, 59], Am7 = [57, 60, 64, 67], Dm7 = [50, 53, 57, 60];

// x = hit, . = rest (16 steps per bar)
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

// ---- Gym radio: gym bro music ----
// Each track has its own scheduler (see Audio.gymStep)
const nF = 77, nAb = 80, nBb = 82, nC = 84, nDb = 85, nEb = 75;
const PHONK_RIFF = [
  [nF, null, nF, nAb, nF, null, nC, null, nF, nF, nAb, nBb, nDb, nC, nAb, null],
  [nF, null, nF, nAb, nF, null, nC, null, nBb, nBb, nAb, nF, nEb, nF, null, null],
];
const HARD_LEAD = [
  [69, 72, 76, 72, 74, 72, 69, 67],
  [65, 69, 72, 69, 74, 72, 69, 65],
  [64, 67, 72, 67, 76, 74, 72, 67],
  [67, 71, 74, 71, 79, 76, 74, 71],
];
const TRAP_BELL = [
  [75, 82, 78, 82, 75, 82, 85, 82],
  [75, 82, 78, 82, 87, 85, 82, 78],
  [71, 78, 75, 78, 71, 78, 83, 78],
  [73, 80, 77, 80, 85, 82, 80, 77],
];

Object.assign(TRACKS, {
  phonk: {
    bpm: 128, chords: [[41], [41], [37], [39]], swing: 0, gym: 'phonk',
    kick: P('x......x..x.....'), snare: P('....x.......x...'),
  },
  hardstyle: {
    bpm: 150, chords: [[45], [41], [48], [43]], swing: 0, gym: 'hardstyle',
    kick: P('x...x...x...x...'), snare: P('....x.......x...'),
  },
  gymrap: {
    bpm: 140, chords: [[39], [39], [35], [37]], swing: 0, gym: 'gymrap',
    kick: P('x.....x...x..x..'), snare: P('........x.......'),
  },
});

export const GYM_STATIONS = [
  { id: 'phonk', name: 'Drift Phonk' },
  { id: 'hardstyle', name: 'Hardstyle Pump' },
  { id: 'gymrap', name: 'Gym Rap' },
  { id: 'gym', name: 'Euro Gym' },
];

const BRO_LINES = {
  start: ['Light weight baby!', 'Yeah buddy!', 'Let\'s go!', 'One more rep!', 'Come on, push it!'],
  great: ['Ain\'t nothin\' but a peanut!', 'Yeah buddy! Light weight!', 'Beast mode!'],
  bad: ['No pain, no gain!', 'Come on bro, focus!'],
  bro: ['Yo bro!', 'Do you even lift, bro?', 'We\'re gonna make it, bro!', 'Never skip leg day!'],
};

// Deterministic pseudo-random generator for repeatable melodies
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

  // Must be called after a user gesture (browser autoplay policy)
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

    // Shared delay for leads/arpeggios
    this.delay = ctx.createDelay(1);
    this.delay.delayTime.value = 0.28;
    const fb = ctx.createGain();
    fb.gain.value = 0.3;
    const dl = ctx.createGain();
    dl.gain.value = 0.25;
    this.delay.connect(fb).connect(this.delay);
    this.delay.connect(dl).connect(this.musicGain);

    // White noise buffer for drums
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
    // saturation for the 808 and hard kicks
    const drive = ctx.createWaveShaper();
    drive.curve = this.distCurve(track.gym === 'hardstyle' ? 60 : 25);
    drive.oversample = '2x';
    const driveOut = ctx.createGain();
    driveOut.gain.value = 0.35;
    drive.connect(driveOut).connect(bus);
    const melody = this.makeMelody(track, name.length * 97 + track.bpm);
    const cur = { name, bus, drive, track, melody, step: 0, next: now + 0.1 };
    const spb = 60 / track.bpm / 4; // seconds per sixteenth
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

  // 4-bar melody built from chord tones, varied every loop
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

    if (track.gym) { this.gymStep(cur, s, bar, t, spb); return; }

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

  distCurve(k) {
    const n = 1024, c = new Float32Array(n);
    for (let i = 0; i < n; i++) {
      const x = (i * 2) / n - 1;
      c[i] = ((1 + k) * x) / (1 + k * Math.abs(x));
    }
    return c;
  }

  // 808 bass with an optional glide from the previous note
  bass808(t, midi, dur, dest, from = null, vol = 0.9) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.type = 'sine';
    const f = midiToFreq(midi);
    o.frequency.setValueAtTime(from ? midiToFreq(from) : f * 1.5, t);
    o.frequency.exponentialRampToValueAtTime(f, t + (from ? 0.09 : 0.03));
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.005);
    g.gain.setValueAtTime(vol, t + dur * 0.6);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + dur + 0.05);
  }

  // Tuned 808 cowbell: the signature phonk sound
  cowbell(t, midi, dest, vol = 0.07) {
    const ctx = this.ctx;
    const f = midiToFreq(midi);
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass';
    bp.frequency.value = f * 1.3;
    bp.Q.value = 1.2;
    const g = ctx.createGain();
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(vol * 0.3, t + 0.05);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.35);
    [1, 1.48].forEach((m) => {
      const o = ctx.createOscillator();
      o.type = 'square';
      o.frequency.value = f * m;
      o.connect(bp);
      o.start(t);
      o.stop(t + 0.4);
    });
    bp.connect(g).connect(dest);
    g.connect(this.delay);
  }

  // Hardstyle kick: sharp attack and a tuned distorted tail
  hardKick(t, midi, dest) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    o.frequency.setValueAtTime(400, t);
    o.frequency.exponentialRampToValueAtTime(midiToFreq(midi), t + 0.05);
    const g = ctx.createGain();
    g.gain.setValueAtTime(1.4, t);
    g.gain.setValueAtTime(1.1, t + 0.12);
    g.gain.exponentialRampToValueAtTime(0.001, t + 0.34);
    o.connect(g).connect(dest);
    o.start(t);
    o.stop(t + 0.36);
  }

  supersaw(t, midi, dur, dest, vol = 0.03) {
    const ctx = this.ctx;
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass';
    lp.frequency.value = 5200;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.01);
    g.gain.setValueAtTime(vol, t + dur * 0.8);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur + 0.1);
    [-14, -6, 0, 7, 15].forEach((cents) => {
      const o = ctx.createOscillator();
      o.type = 'sawtooth';
      o.frequency.value = midiToFreq(midi);
      o.detune.value = cents;
      o.connect(lp);
      o.start(t);
      o.stop(t + dur + 0.15);
    });
    lp.connect(g).connect(dest);
    g.connect(this.delay);
  }

  clap(t, dest, vol = 0.25) {
    [0, 0.011, 0.022].forEach((o, i) => this.noiseHit(t + o, dest, vol * (i === 2 ? 1 : 0.6), i === 2 ? 0.16 : 0.01, 'bandpass', 1300));
  }

  bell(t, midi, dest, vol = 0.06) {
    this.tone(midi, t, 0.05, 'sine', vol, dest, 6000, 0.002, 0.5, true);
    this.tone(midi + 12, t, 0.03, 'triangle', vol * 0.3, dest, 6000, 0.002, 0.25);
  }

  // Sequencer for the gym radio tracks
  gymStep(cur, s, bar, t, spb) {
    const { track, bus, drive } = cur;
    const root = track.chords[bar % track.chords.length][0];
    const style = track.gym;
    const hat = (tt, v = 0.035) => this.hat(tt, bus, v);

    if (style === 'phonk') {
      if (track.kick[s]) {
        this.kick(t, bus, 0.6);
        // 808 until the next kick, with a glide on the last one of the bar
        let len = 1;
        while (len < 16 && !track.kick[(s + len) % 16]) len++;
        this.bass808(t, root, spb * len * 0.95, drive, s === 10 && bar % 2 ? root + 12 : null);
      }
      if (track.snare[s]) { this.clap(t, bus); this.snare(t, bus); }
      hat(t, s % 2 ? 0.02 : 0.04);
      if (bar % 2 && s >= 14) hat(t + spb / 2, 0.03); // roll
      const note = PHONK_RIFF[bar % 2][s];
      if (note && bar % 8 !== 7) this.cowbell(t, note, bus);
      if (s === 0 && bar % 4 === 0) this.noiseHit(t, bus, 0.08, 1.2, 'highpass', 5000); // crash
    } else if (style === 'hardstyle') {
      if (track.kick[s]) this.hardKick(t, root - 12, drive);
      if (track.snare[s]) this.clap(t, bus, 0.3);
      if (s % 4 === 2) { hat(t, 0.06); this.tone(root, t, spb * 1.5, 'sawtooth', 0.09, bus, 700); }
      const breakdown = bar % 16 >= 12;
      if (s % 2 === 0) {
        const n = HARD_LEAD[bar % 4][s / 2];
        this.supersaw(t, n + 12, spb * 1.8, bus, breakdown ? 0.045 : 0.03);
      }
      if (s === 0) {
        [0, 3, 7].forEach((iv) => this.supersaw(t, root + 24 + iv, spb * 15, bus, 0.008));
        if (bar % 4 === 0) this.noiseHit(t, bus, 0.1, 1.5, 'highpass', 4000);
      }
    } else if (style === 'gymrap') {
      if (track.kick[s]) {
        this.kick(t, bus, 0.55);
        let len = 1;
        while (len < 16 && !track.kick[(s + len) % 16]) len++;
        this.bass808(t, root, spb * len, drive, s === 13 ? root + 7 : null);
      }
      if (track.snare[s]) { this.snare(t, bus); this.clap(t, bus, 0.2); }
      // trap hi-hats: eighths with triplets and rolls
      if (s % 2 === 0) hat(t);
      if (s === 6 || s === 7) { hat(t + spb / 3, 0.025); hat(t + (2 * spb) / 3, 0.025); }
      if (bar % 2 && s >= 12) { hat(t + spb / 2, 0.03); hat(t + spb / 4, 0.02); hat(t + (3 * spb) / 4, 0.02); }
      if (s % 2 === 0) this.bell(t, TRAP_BELL[bar % 4][s / 2], bus);
      if (s === 0) this.tone(root + 24, t, spb * 15, 'triangle', 0.035, bus, 900, 0.3, 0.8);
    }
  }

  // Gym bro one-liners through the browser's speech synthesis (if available)
  shout(kind) {
    const lines = BRO_LINES[kind];
    if (!lines || this.muted || !('speechSynthesis' in window)) return;
    try {
      const u = new SpeechSynthesisUtterance(lines[Math.floor(Math.random() * lines.length)]);
      u.lang = 'en-US';
      u.pitch = 0.4;
      u.rate = 1.05;
      u.volume = 1;
      const voice = speechSynthesis.getVoices().find((v) => v.lang.startsWith('en'));
      if (voice) u.voice = voice;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { /* sintesi vocale non disponibile */ }
  }

  // ---- sound effects ----
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
      case 'airhorn':
        [0, 0.16, 0.32, 0.5].forEach((o, i) => [0, 4, 7].forEach((iv) => {
          const len = i === 3 ? 0.6 : 0.12;
          this.tone(69 + iv, t + o, len, 'sawtooth', 0.05, d, 3500, 0.005, 0.05);
        }));
        break;
      case 'radio': this.noiseHit(t, d, 0.15, 0.25, 'bandpass', 2500); seq([81, 88], 0.05, 'square', 0.06); break;
      default: break;
    }
  }
}
