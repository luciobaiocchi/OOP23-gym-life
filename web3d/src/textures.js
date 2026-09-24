import * as THREE from 'three';

// Procedural textures drawn on canvas: no image files to download.

function rng(seed) {
  let s = seed >>> 0 || 1;
  return () => {
    s = (s * 1664525 + 1013904223) >>> 0;
    return s / 4294967296;
  };
}

function canvas(size) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return [c, c.getContext('2d')];
}

function finish(c, repeat, srgb = true) {
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.repeat.set(repeat[0], repeat[1]);
  t.anisotropy = 8;
  if (srgb) t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

function speckle(g, size, r, count, colors, min = 1, max = 3, alpha = 1) {
  g.globalAlpha = alpha;
  for (let i = 0; i < count; i++) {
    g.fillStyle = colors[Math.floor(r() * colors.length)];
    const s = min + r() * (max - min);
    g.fillRect(r() * size, r() * size, s, s);
  }
  g.globalAlpha = 1;
}

const cache = new Map();
function cached(key, make) {
  if (!cache.has(key)) cache.set(key, make());
  return cache.get(key);
}

// Every texture returns { map, bump } (bump = grayscale relief)
function withBump(key, size, draw, repeat) {
  return cached(key, () => {
    const [c, g] = canvas(size);
    const r = rng(key.length * 7919 + size);
    draw(g, size, r);
    // relief: grayscale copy of the same drawing
    const [b, bg] = canvas(size);
    bg.filter = 'grayscale(1) contrast(1.4)';
    bg.drawImage(c, 0, 0);
    return { map: finish(c, repeat), bump: finish(b, repeat, false) };
  });
}

export const tex = {
  grass: (rep = [60, 60]) => withBump('grass' + rep, 512, (g, s, r) => {
    g.fillStyle = '#4a6f2c';
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 9000, ['#557d33', '#3e5f25', '#628a3a', '#46692a', '#6b8f40'], 1, 3);
    g.globalAlpha = 0.5;
    for (let i = 0; i < 2500; i++) {
      g.strokeStyle = ['#6f9a45', '#39571f', '#5c8437'][Math.floor(r() * 3)];
      const x = r() * s, y = r() * s;
      g.beginPath();
      g.moveTo(x, y);
      g.lineTo(x + (r() - 0.5) * 3, y - 3 - r() * 5);
      g.stroke();
    }
    g.globalAlpha = 1;
  }, rep),

  asphalt: (rep = [1, 1]) => withBump('asphalt' + rep, 512, (g, s, r) => {
    g.fillStyle = '#3b3d40';
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 14000, ['#2f3134', '#46484c', '#505256', '#34363a', '#292a2d'], 1, 2.5);
    g.globalAlpha = 0.08;
    for (let i = 0; i < 18; i++) {
      g.fillStyle = r() > 0.5 ? '#000' : '#777';
      g.beginPath();
      g.ellipse(r() * s, r() * s, 20 + r() * 60, 10 + r() * 30, r() * 3, 0, Math.PI * 2);
      g.fill();
    }
    g.globalAlpha = 1;
  }, rep),

  pavement: (rep = [1, 1]) => withBump('pavement' + rep, 256, (g, s, r) => {
    g.fillStyle = '#a9a7a0';
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 3000, ['#b5b3ab', '#9c9a93', '#a3a199', '#bdbbb3'], 1, 2);
    g.strokeStyle = '#7d7b75';
    g.lineWidth = 3;
    for (let i = 0; i <= 2; i++) {
      g.beginPath(); g.moveTo(0, (i * s) / 2); g.lineTo(s, (i * s) / 2); g.stroke();
      g.beginPath(); g.moveTo((i * s) / 2, 0); g.lineTo((i * s) / 2, s); g.stroke();
    }
  }, rep),

  brick: (color = '#9a4a32', rep = [1, 1]) => withBump('brick' + color + rep, 512, (g, s, r) => {
    g.fillStyle = '#b8b0a2';
    g.fillRect(0, 0, s, s);
    const rows = 16, bw = s / 8, bh = s / rows;
    const base = new THREE.Color(color);
    for (let y = 0; y < rows; y++) {
      for (let x = -1; x < 9; x++) {
        const c = base.clone().offsetHSL((r() - 0.5) * 0.03, (r() - 0.5) * 0.1, (r() - 0.5) * 0.1);
        g.fillStyle = '#' + c.getHexString();
        const ox = y % 2 ? bw / 2 : 0;
        g.fillRect(x * bw + ox + 2, y * bh + 2, bw - 4, bh - 4);
      }
    }
    speckle(g, s, r, 4000, ['rgba(0,0,0,.25)', 'rgba(255,255,255,.12)'], 1, 2);
  }, rep),

  plaster: (color = '#e8e0d0', rep = [1, 1]) => withBump('plaster' + color + rep, 256, (g, s, r) => {
    g.fillStyle = color;
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 5000, ['rgba(0,0,0,.05)', 'rgba(255,255,255,.08)', 'rgba(0,0,0,.08)'], 1, 3);
  }, rep),

  concrete: (color = '#b9b6ad', rep = [1, 1]) => withBump('concrete' + color + rep, 256, (g, s, r) => {
    g.fillStyle = color;
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 6000, ['rgba(0,0,0,.08)', 'rgba(255,255,255,.1)', 'rgba(60,50,40,.1)'], 1, 3);
    g.strokeStyle = 'rgba(0,0,0,.25)';
    g.lineWidth = 2;
    g.strokeRect(0, 0, s, s);
  }, rep),

  wood: (color = '#8a5a34', rep = [1, 1]) => withBump('wood' + color + rep, 512, (g, s, r) => {
    const planks = 6, ph = s / planks;
    const base = new THREE.Color(color);
    for (let i = 0; i < planks; i++) {
      const c = base.clone().offsetHSL(0, 0, (r() - 0.5) * 0.08);
      g.fillStyle = '#' + c.getHexString();
      g.fillRect(0, i * ph, s, ph);
      g.globalAlpha = 0.18;
      for (let k = 0; k < 40; k++) {
        g.strokeStyle = r() > 0.5 ? '#000' : '#fff';
        g.beginPath();
        const y = i * ph + r() * ph;
        g.moveTo(0, y);
        g.bezierCurveTo(s * 0.3, y + (r() - 0.5) * 6, s * 0.6, y + (r() - 0.5) * 6, s, y);
        g.stroke();
      }
      g.globalAlpha = 1;
      g.fillStyle = 'rgba(0,0,0,.45)';
      g.fillRect(0, i * ph, s, 2);
      g.fillRect((r() * s) | 0, i * ph, 2, ph);
    }
  }, rep),

  rubber: (rep = [1, 1]) => withBump('rubber' + rep, 256, (g, s, r) => {
    g.fillStyle = '#26272a';
    g.fillRect(0, 0, s, s);
    speckle(g, s, r, 5000, ['#34363a', '#1c1d1f', '#3d3f44', '#50525a'], 1, 2);
    g.strokeStyle = '#141415';
    g.lineWidth = 3;
    g.strokeRect(0, 0, s, s);
  }, rep),

  tiles: (c1 = '#e9e7e2', grout = '#b9b5ad', rep = [1, 1]) => withBump('tiles' + c1 + rep, 256, (g, s, r) => {
    g.fillStyle = grout;
    g.fillRect(0, 0, s, s);
    const n = 2, ts = s / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        const c = new THREE.Color(c1).offsetHSL(0, 0, (r() - 0.5) * 0.03);
        g.fillStyle = '#' + c.getHexString();
        g.fillRect(x * ts + 2, y * ts + 2, ts - 4, ts - 4);
      }
    }
    speckle(g, s, r, 800, ['rgba(0,0,0,.04)'], 1, 3);
  }, rep),

  marble: (rep = [1, 1]) => withBump('marble' + rep, 512, (g, s, r) => {
    const n = 2, ts = s / n;
    for (let y = 0; y < n; y++) {
      for (let x = 0; x < n; x++) {
        g.fillStyle = (x + y) % 2 ? '#2b2a28' : '#ece8df';
        g.fillRect(x * ts, y * ts, ts, ts);
        g.globalAlpha = 0.25;
        for (let k = 0; k < 6; k++) {
          g.strokeStyle = (x + y) % 2 ? '#6b6861' : '#9a958a';
          g.lineWidth = 1 + r() * 2;
          g.beginPath();
          let px = x * ts + r() * ts, py = y * ts;
          g.moveTo(px, py);
          for (let j = 0; j < 8; j++) { px += (r() - 0.5) * 40; py += ts / 8; g.lineTo(px, py); }
          g.stroke();
        }
        g.globalAlpha = 1;
      }
    }
    g.strokeStyle = '#8c877c';
    g.lineWidth = 2;
    for (let i = 0; i <= n; i++) {
      g.beginPath(); g.moveTo(0, i * ts); g.lineTo(s, i * ts); g.stroke();
      g.beginPath(); g.moveTo(i * ts, 0); g.lineTo(i * ts, s); g.stroke();
    }
  }, rep),

  roof: (rep = [1, 1]) => withBump('roof' + rep, 256, (g, s, r) => {
    g.fillStyle = '#5a2a1e';
    g.fillRect(0, 0, s, s);
    const rows = 8, rh = s / rows, cols = 8, cw = s / cols;
    for (let y = 0; y < rows; y++) {
      for (let x = -1; x <= cols; x++) {
        const c = new THREE.Color('#9c4a33').offsetHSL(0, 0, (r() - 0.5) * 0.1);
        g.fillStyle = '#' + c.getHexString();
        const ox = y % 2 ? cw / 2 : 0;
        g.beginPath();
        g.roundRect(x * cw + ox + 1, y * rh, cw - 2, rh - 3, [0, 0, 8, 8]);
        g.fill();
      }
    }
  }, rep),

  bark: (rep = [1, 1]) => withBump('bark' + rep, 128, (g, s, r) => {
    g.fillStyle = '#5a4230';
    g.fillRect(0, 0, s, s);
    for (let i = 0; i < 90; i++) {
      g.strokeStyle = ['#3e2c1f', '#6d5340', '#4a3626'][Math.floor(r() * 3)];
      g.lineWidth = 1 + r() * 2;
      const x = r() * s;
      g.beginPath(); g.moveTo(x, 0); g.lineTo(x + (r() - 0.5) * 10, s); g.stroke();
    }
  }, rep),

  leaves: (rep = [2, 2]) => withBump('leaves' + rep, 256, (g, s, r) => {
    g.fillStyle = '#3b5e25';
    g.fillRect(0, 0, s, s);
    for (let i = 0; i < 1400; i++) {
      g.fillStyle = ['#4c7630', '#2f4d1c', '#5b8738', '#416a29', '#6a9442'][Math.floor(r() * 5)];
      g.beginPath();
      g.ellipse(r() * s, r() * s, 2 + r() * 4, 1 + r() * 2, r() * 3, 0, Math.PI * 2);
      g.fill();
    }
  }, rep),

  fabric: (color = '#23324a', rep = [4, 4]) => withBump('fabric' + color + rep, 64, (g, s, r) => {
    g.fillStyle = color;
    g.fillRect(0, 0, s, s);
    g.globalAlpha = 0.12;
    for (let i = 0; i < s; i += 2) {
      g.fillStyle = '#000';
      g.fillRect(0, i, s, 1);
      g.fillStyle = '#fff';
      g.fillRect(i, 0, 1, s);
    }
    g.globalAlpha = 1;
  }, rep),
};
