import * as THREE from 'three';
import { Character } from './character.js';

// Costruzione delle mappe 3D: città + interni di casa, palestra, supermercato e banca.

const matCache = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!matCache.has(key)) {
    const { basic, ...rest } = opts;
    matCache.set(key, basic
      ? new THREE.MeshBasicMaterial({ color, ...rest })
      : new THREE.MeshLambertMaterial({ color, ...rest }));
  }
  return matCache.get(key);
}

export function box(w, h, d, color, x = 0, y = 0, z = 0, parent = null, shadow = true) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), typeof color === 'number' ? mat(color) : color);
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

export function cyl(rt, rb, h, color, x = 0, y = 0, z = 0, parent = null, seg = 12) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof color === 'number' ? mat(color) : color);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

function sphere(r, color, x, y, z, parent, seg = 10) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(6, seg - 2)), mat(color));
  m.position.set(x, y, z);
  m.castShadow = true;
  if (parent) parent.add(m);
  return m;
}

// Cartello con testo disegnato su canvas
export function textSign(text, w, h, bg = '#222', fg = '#fff', font = 'bold 72px sans-serif') {
  const c = document.createElement('canvas');
  c.width = 512;
  c.height = Math.round(512 * (h / w));
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = fg;
  g.font = font;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, c.width / 2, c.height / 2 + 4);
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  tex.anisotropy = 4;
  const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex }));
  return m;
}

function marker() {
  const g = new THREE.Group();
  const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.22), mat(0xffd84a, { basic: true }));
  g.add(gem);
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.55, 0.7, 24), new THREE.MeshBasicMaterial({ color: 0xffd84a, transparent: true, opacity: 0.55, side: THREE.DoubleSide }));
  ring.rotation.x = -Math.PI / 2;
  ring.name = 'ring';
  g.add(ring);
  return g;
}

function addLights(scene, sunPos = [30, 50, 20], shadowSize = 40) {
  const hemi = new THREE.HemisphereLight(0xcfe8ff, 0x5a6b3a, 1.1);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xfff1d6, 2.2);
  sun.position.set(...sunPos);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  const s = shadowSize;
  Object.assign(sun.shadow.camera, { left: -s, right: s, top: s, bottom: -s, near: 1, far: 150 });
  sun.shadow.bias = -0.0005;
  scene.add(sun);
  scene.add(sun.target);
  return { hemi, sun };
}

class Place {
  constructor(name, music) {
    this.name = name;
    this.music = music;
    this.scene = new THREE.Scene();
    this.colliders = []; // rettangoli {x1,z1,x2,z2}
    this.circles = []; // {x,z,r}
    this.interactions = [];
    this.bounds = { x1: -50, z1: -50, x2: 50, z2: 50 };
    this.spawn = { x: 0, z: 0, rot: 0 };
    this.updaters = [];
    this.camDist = 9;
    this.camHeight = 5;
  }

  solid(x, z, w, d, h = 2) {
    this.colliders.push({ x1: x - w / 2, z1: z - d / 2, x2: x + w / 2, z2: z + d / 2, h });
  }

  interact(x, z, label, action, data = null, radius = 1.8, markerY = 2.3) {
    const m = marker();
    m.position.set(x, markerY, z);
    if (action === 'exit') m.children[0].visible = false;
    this.scene.add(m);
    this.interactions.push({ x, z, label, action, data, radius, marker: m });
  }

  update(dt, t) {
    this.interactions.forEach((it, i) => {
      it.marker.children[0].rotation.y = t * 2 + i;
      it.marker.children[0].position.y = Math.sin(t * 3 + i) * 0.12;
      const ring = it.marker.getObjectByName('ring');
      ring.position.y = -it.marker.position.y + 0.03;
      ring.scale.setScalar(1 + Math.sin(t * 3 + i) * 0.08);
    });
    this.updaters.forEach((u) => u(dt, t));
  }

  // Risolve le collisioni del giocatore (cerchio di raggio r)
  collide(pos, r = 0.4) {
    const b = this.bounds;
    pos.x = Math.max(b.x1 + r, Math.min(b.x2 - r, pos.x));
    pos.z = Math.max(b.z1 + r, Math.min(b.z2 - r, pos.z));
    for (const c of this.colliders) {
      const cx = Math.max(c.x1, Math.min(c.x2, pos.x));
      const cz = Math.max(c.z1, Math.min(c.z2, pos.z));
      const dx = pos.x - cx, dz = pos.z - cz;
      const d2 = dx * dx + dz * dz;
      if (d2 < r * r) {
        if (d2 > 1e-6) {
          const d = Math.sqrt(d2);
          pos.x = cx + (dx / d) * r;
          pos.z = cz + (dz / d) * r;
        } else {
          // dentro al rettangolo: spingi fuori sul lato più vicino
          const opts = [[pos.x - c.x1, -1, 0], [c.x2 - pos.x, 1, 0], [pos.z - c.z1, 0, -1], [c.z2 - pos.z, 0, 1]];
          opts.sort((a, b2) => a[0] - b2[0]);
          const [dd, sx, sz] = opts[0];
          pos.x += sx * (dd + r);
          pos.z += sz * (dd + r);
        }
      }
    }
    for (const c of this.circles) {
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const min = c.r + r;
      if (d < min && d > 1e-6) {
        pos.x = c.x + (dx / d) * min;
        pos.z = c.z + (dz / d) * min;
      }
    }
  }
}

// ---------------------------------------------------------------- CITTÀ
function tree(parent, x, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  cyl(0.2 * s, 0.28 * s, 1.6 * s, 0x7a4f2a, 0, 0.8 * s, 0, g, 6);
  const green = [0x3f8f3a, 0x4ea343, 0x357a32][Math.floor(Math.random() * 3)];
  const top = new THREE.Mesh(new THREE.IcosahedronGeometry(1.3 * s, 0), mat(green, { flatShading: true }));
  top.position.y = 2.4 * s;
  top.castShadow = true;
  g.add(top);
  const top2 = new THREE.Mesh(new THREE.IcosahedronGeometry(0.9 * s, 0), mat(green, { flatShading: true }));
  top2.position.set(0.4 * s, 3.2 * s, 0.2 * s);
  top2.castShadow = true;
  g.add(top2);
  parent.add(g);
}

function lamp(parent, x, z) {
  cyl(0.08, 0.1, 4, 0x333a44, x, 2, z, parent, 6);
  const head = box(0.5, 0.18, 0.5, 0x333a44, x, 4.05, z, parent);
  head.castShadow = false;
  const bulb = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.05, 0.4), mat(0xfff2b0, { basic: true }));
  bulb.position.set(x, 3.95, z);
  parent.add(bulb);
}

function car(color) {
  const g = new THREE.Group();
  box(1.9, 0.6, 4, color, 0, 0.55, 0, g);
  box(1.6, 0.55, 2, 0xbfe3ff, 0, 1.12, -0.2, g);
  box(1.62, 0.1, 2.05, color, 0, 1.43, -0.2, g);
  [[-0.95, 1.3], [0.95, 1.3], [-0.95, -1.3], [0.95, -1.3]].forEach(([x, z]) => {
    const w = cyl(0.35, 0.35, 0.3, 0x1b1b1b, x, 0.35, z, g, 10);
    w.rotation.z = Math.PI / 2;
  });
  const l1 = box(0.3, 0.15, 0.05, 0xfff6c0, -0.6, 0.65, 2.0, g, false);
  l1.material = mat(0xfff6c0, { basic: true });
  const l2 = l1.clone();
  l2.position.x = 0.6;
  g.add(l2);
  return g;
}

function buildingBase(place, x, z, w, d, h, color, doorSide) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  place.scene.add(g);
  box(w, h, d, color, 0, h / 2, 0, g);
  place.solid(x, z, w, d, h + 3);
  // porta sul lato rivolto alla strada (doorSide = +1 → +z, -1 → -z)
  const dz = doorSide * (d / 2 + 0.02);
  const door = box(1.8, 2.6, 0.1, 0x5b3a22, 0, 1.3, dz, g);
  box(2.2, 0.2, 0.3, 0xeeeeee, 0, 2.7, dz, g);
  // finestre
  const winMat = mat(0x9fd3ff, { emissive: 0x1a3550 });
  for (let i = -1; i <= 1; i += 2) {
    const wx = i * (w / 4 + 0.4);
    const win = new THREE.Mesh(new THREE.BoxGeometry(2, 1.4, 0.1), winMat);
    win.position.set(wx, h > 6 ? 4.5 : 2, dz);
    g.add(win);
  }
  const doorWorld = { x, z: z + doorSide * (d / 2 + 1.4) };
  return { g, door, dz, doorWorld };
}

export function buildCity() {
  const p = new Place('city', 'city');
  p.bounds = { x1: -46, z1: -46, x2: 46, z2: 46 };
  p.camDist = 11;
  p.camHeight = 6;
  const s = p.scene;
  s.background = new THREE.Color(0x8fd0ff);
  s.fog = new THREE.Fog(0x8fd0ff, 45, 110);
  const { sun } = addLights(s, [25, 40, 15], 50);
  p.sun = sun;

  // Terreno
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(220, 220), mat(0x6bb04e));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  s.add(ground);

  // Strade a croce
  const road = mat(0x3b3f45);
  const r1 = new THREE.Mesh(new THREE.PlaneGeometry(220, 8), road);
  r1.rotation.x = -Math.PI / 2;
  r1.position.y = 0.02;
  r1.receiveShadow = true;
  s.add(r1);
  const r2 = r1.clone();
  r2.rotation.z = Math.PI / 2;
  s.add(r2);
  // marciapiedi
  [-5, 5].forEach((o) => {
    const sw = box(220, 0.15, 2, 0xb9b9b0, 0, 0.07, o, s);
    sw.castShadow = false;
    const sw2 = box(2, 0.15, 220, 0xb9b9b0, o, 0.07, 0, s);
    sw2.castShadow = false;
  });
  // strisce
  const lineMat = mat(0xf5f5f5, { basic: true });
  for (let i = -100; i <= 100; i += 4) {
    if (Math.abs(i) < 6) continue;
    const a = new THREE.Mesh(new THREE.PlaneGeometry(2, 0.2), lineMat);
    a.rotation.x = -Math.PI / 2;
    a.position.set(i, 0.03, 0);
    s.add(a);
    const b = a.clone();
    b.rotation.z = Math.PI / 2;
    b.position.set(0, 0.03, i);
    s.add(b);
  }
  // strisce pedonali
  for (let k = -3; k <= 3; k++) {
    [[k, 7.5, 0.5, 2.5], [k, -7.5, 0.5, 2.5], [7.5, k, 2.5, 0.5], [-7.5, k, 2.5, 0.5]].forEach(([x, z, w, d]) => {
      const c = new THREE.Mesh(new THREE.PlaneGeometry(w, d), lineMat);
      c.rotation.x = -Math.PI / 2;
      c.position.set(x * (Math.abs(x) > 5 ? 1 : 1.1), 0.03, z * (Math.abs(z) > 5 ? 1 : 1.1));
      s.add(c);
    });
  }

  // ---- CASA
  {
    const b = buildingBase(p, -19, -17, 12, 10, 5, 0xf1e3c8, 1);
    // tetto a spiovente
    const roof = new THREE.Mesh(new THREE.ConeGeometry(9, 3.5, 4), mat(0xb5452f, { flatShading: true }));
    roof.position.y = 6.7;
    roof.rotation.y = Math.PI / 4;
    roof.scale.set(1, 1, 0.85);
    roof.castShadow = true;
    b.g.add(roof);
    box(0.8, 2, 0.8, 0x8a3a2a, 3, 7.5, -1, b.g);
    const sign = textSign('CASA', 3, 0.8, '#6b3d1f', '#ffe9c2');
    sign.position.set(0, 3.3, b.dz + 0.08);
    b.g.add(sign);
    // giardino con recinto
    for (let i = -6; i <= 6; i += 1) {
      if (Math.abs(i) < 2) continue;
      box(0.12, 0.8, 0.12, 0xffffff, -19 + i, 0.4, -9.5, s);
    }
    box(5, 0.1, 0.1, 0xffffff, -23, 0.7, -9.5, s);
    box(5, 0.1, 0.1, 0xffffff, -15, 0.7, -9.5, s);
    // cassetta postale
    box(0.4, 0.4, 0.6, 0x2f6fd6, -16, 1.1, -10.3, s);
    cyl(0.05, 0.05, 1, 0x555555, -16, 0.5, -10.3, s, 6);
    p.interact(b.doorWorld.x, b.doorWorld.z, 'Entra in casa', 'enter', 'home');
  }

  // ---- PALESTRA
  {
    const b = buildingBase(p, 19, -18, 16, 12, 8, 0x3c4a5c, 1);
    box(16.4, 0.6, 12.4, 0xf0b400, 0, 8.2, 0, b.g);
    const sign = textSign('GYM LIFE', 8, 1.6, '#f0b400', '#1b1b1b', 'bold 110px Impact, sans-serif');
    sign.position.set(0, 6.6, b.dz + 0.08);
    b.g.add(sign);
    // manubrio gigante sul tetto
    const db = new THREE.Group();
    db.position.set(0, 10.2, 0);
    const bar = cyl(0.3, 0.3, 7, 0x999999, 0, 0, 0, db, 10);
    bar.rotation.z = Math.PI / 2;
    [-3, 3].forEach((xx) => {
      const pl = cyl(1.4, 1.4, 0.9, 0x222222, xx, 0, 0, db, 16);
      pl.rotation.z = Math.PI / 2;
    });
    b.g.add(db);
    p.updaters.push((dt, t) => { db.rotation.y = Math.sin(t * 0.5) * 0.4; });
    p.interact(b.doorWorld.x, b.doorWorld.z, 'Entra in palestra', 'enter', 'gym');
  }

  // ---- SUPERMERCATO
  {
    const b = buildingBase(p, -19, 18, 14, 11, 6, 0xf7f7f2, -1);
    // tenda a strisce
    for (let i = 0; i < 8; i++) {
      box(14 / 8, 0.12, 2, i % 2 ? 0x2e9e4f : 0xffffff, -7 + 14 / 16 + (i * 14) / 8, 3.3, b.dz - 1, b.g);
    }
    const sign = textSign('SUPERMARKET', 8, 1.3, '#2e9e4f', '#fff', 'bold 80px sans-serif');
    sign.position.set(0, 4.9, b.dz - 0.08);
    sign.rotation.y = Math.PI;
    b.g.add(sign);
    // carrelli
    [[-24, 11.5], [-23.2, 11.5]].forEach(([x, z]) => {
      box(0.7, 0.5, 1, 0xbbbbbb, x, 0.8, z, s);
    });
    p.interact(b.doorWorld.x, b.doorWorld.z, 'Entra nel supermercato', 'enter', 'shop');
  }

  // ---- BANCA
  {
    const b = buildingBase(p, 19, 18, 14, 11, 7, 0xe9e3d3, -1);
    const roof = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 8.5, 2.5, 3), mat(0xd9cfb5, { flatShading: true }));
    roof.rotation.set(0, 0, 0);
    roof.scale.set(1, 1, 0.35);
    roof.position.set(0, 8.2, 0);
    b.g.add(roof);
    box(15, 0.6, 12, 0xd9cfb5, 0, 7.2, 0, b.g);
    for (let i = -3; i <= 3; i++) {
      if (i === 0) continue;
      cyl(0.35, 0.4, 6.8, 0xffffff, i * 2, 3.4, b.dz - 1.2, b.g, 10);
    }
    box(15, 0.4, 3, 0xd9cfb5, 0, 0.2, b.dz - 1, b.g);
    const sign = textSign('BANCA', 5, 1.1, '#1d3a6b', '#ffd84a', 'bold 90px serif');
    sign.position.set(0, 7.2, b.dz - 0.35);
    sign.rotation.y = Math.PI;
    b.g.add(sign);
    p.interact(b.doorWorld.x, b.doorWorld.z, 'Entra in banca', 'enter', 'bank');
  }

  // Parco con fontana
  {
    const fx = 30, fz = 36;
    cyl(3, 3.2, 0.6, 0xa9a9a9, fx, 0.3, fz, s, 20);
    const water = cyl(2.7, 2.7, 0.1, 0x4fb3ff, fx, 0.58, fz, s, 20);
    water.material = mat(0x4fb3ff, { emissive: 0x0a2a4a });
    cyl(0.3, 0.4, 1.8, 0xbbbbbb, fx, 1.2, fz, s, 8);
    const jet = new THREE.Mesh(new THREE.ConeGeometry(0.5, 1.2, 8), new THREE.MeshBasicMaterial({ color: 0xbfe8ff, transparent: true, opacity: 0.7 }));
    jet.position.set(fx, 2.6, fz);
    s.add(jet);
    p.updaters.push((dt, t) => { jet.scale.y = 1 + Math.sin(t * 6) * 0.15; });
    p.circles.push({ x: fx, z: fz, r: 3.2 });
    // panchine
    [[fx - 6, fz], [fx + 6, fz]].forEach(([x, z]) => {
      box(0.6, 0.1, 2.4, 0x8b5a2b, x, 0.55, z, s);
      box(0.1, 0.6, 2.4, 0x8b5a2b, x + (x < fx ? -0.3 : 0.3), 0.9, z, s);
      p.solid(x, z, 0.7, 2.4);
    });
  }

  // Alberi (evitando strade ed edifici)
  const occupied = (x, z) =>
    Math.abs(x) < 8 || Math.abs(z) < 8 ||
    p.colliders.some((c) => x > c.x1 - 3 && x < c.x2 + 3 && z > c.z1 - 3 && z < c.z2 + 3) ||
    Math.hypot(x - 30, z - 36) < 9;
  let placed = 0;
  let seed = 7;
  const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };
  while (placed < 70) {
    const x = rnd() * 96 - 48, z = rnd() * 96 - 48;
    if (occupied(x, z)) continue;
    const sc = 0.8 + rnd() * 0.6;
    tree(s, x, z, sc);
    p.circles.push({ x, z, r: 0.35 * sc });
    placed++;
  }
  // Alberi fuori dai confini per dare profondità
  for (let i = 0; i < 60; i++) {
    const a = rnd() * Math.PI * 2, d = 55 + rnd() * 40;
    const x = Math.cos(a) * d, z = Math.sin(a) * d;
    if (Math.abs(x) < 6 || Math.abs(z) < 6) continue;
    tree(s, x, z, 1 + rnd());
  }
  // Muretti di confine con cespugli sulle strade
  [[0, -47], [0, 47], [-47, 0], [47, 0]].forEach(([x, z]) => {
    const w = x === 0 ? 8 : 1, d = x === 0 ? 1 : 8;
    box(w, 1, d, 0xd27b2a, x, 0.5, z, s);
    const t = textSign('FINE CITTÀ', 3, 0.7, '#d27b2a', '#fff', 'bold 60px sans-serif');
    t.position.set(x, 1.5, z);
    t.lookAt(0, 1.5, 0);
    s.add(t);
  });

  // Lampioni
  for (let i = -40; i <= 40; i += 12) {
    if (Math.abs(i) < 8) continue;
    lamp(s, i, 5.6);
    lamp(s, 5.6, i);
    p.circles.push({ x: i, z: 5.6, r: 0.15 }, { x: 5.6, z: i, r: 0.15 });
  }

  // Nuvole
  const clouds = [];
  for (let i = 0; i < 14; i++) {
    const c = new THREE.Group();
    for (let k = 0; k < 4; k++) {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(2 + rnd() * 2, 0), mat(0xffffff, { flatShading: true }));
      m.position.set(k * 2.4 - 3, rnd() * 1.2, rnd() * 2);
      c.add(m);
    }
    c.position.set(rnd() * 200 - 100, 28 + rnd() * 10, rnd() * 200 - 100);
    s.add(c);
    clouds.push(c);
  }
  p.updaters.push((dt) => clouds.forEach((c) => { c.position.x += dt * 1.5; if (c.position.x > 110) c.position.x = -110; }));

  // Auto che girano sulle strade
  const cars = [];
  const colors = [0xe63946, 0x1d70d6, 0xf4c20d, 0x2a9d8f, 0xffffff, 0x8e44ad];
  for (let i = 0; i < 6; i++) {
    const c = car(colors[i]);
    const axis = i % 2 ? 'x' : 'z';
    const dir = i % 4 < 2 ? 1 : -1;
    const lane = dir * 2;
    c.userData = { axis, dir, lane, pos: -100 + i * 37, speed: 9 + (i % 3) * 3 };
    s.add(c);
    cars.push(c);
  }
  p.cars = cars;
  p.updaters.push((dt) => cars.forEach((c) => {
    const u = c.userData;
    u.pos += u.dir * u.speed * dt;
    if (u.pos > 110) u.pos = -110;
    if (u.pos < -110) u.pos = 110;
    if (u.axis === 'x') { c.position.set(u.pos, 0, -u.lane); c.rotation.y = u.dir * Math.PI / 2; }
    else { c.position.set(u.lane, 0, u.pos); c.rotation.y = u.dir > 0 ? 0 : Math.PI; }
  }));

  // Passanti
  const shirts = [0x2e86de, 0x10ac84, 0xee5253, 0xff9f43, 0x8e44ad];
  const route = [[-7, -7], [7, -7], [7, 7], [-7, 7]];
  for (let i = 0; i < 5; i++) {
    const npc = new Character({ shirt: shirts[i], skin: [0xe0a57a, 0x8d5524, 0xf1c27d, 0xc68642, 0xffdbac][i] });
    npc.setMuscles(Math.random() * 40, Math.random() * 40, Math.random() * 40);
    const scale = 0.9 + Math.random() * 0.15;
    npc.root.scale.setScalar(scale);
    const off = i < 3 ? [(i - 1) * 14, 0] : [0, (i - 3.5) * 28];
    s.add(npc.root);
    const st = { idx: i % 4, t: 0, off, speed: 1.6 + Math.random() };
    const [sx, sz] = route[st.idx];
    npc.root.position.set(sx * (1 + i * 0.4) + off[0] * 0, 0, sz * (1 + i * 0.4));
    st.scale = 1 + i * 0.4;
    p.updaters.push((dt) => {
      const [tx0, tz0] = route[(st.idx + 1) % 4];
      const tx = tx0 * st.scale, tz = tz0 * st.scale;
      const dx = tx - npc.root.position.x, dz = tz - npc.root.position.z;
      const d = Math.hypot(dx, dz);
      if (d < 0.3) st.idx = (st.idx + 1) % 4;
      else {
        npc.root.position.x += (dx / d) * st.speed * dt;
        npc.root.position.z += (dz / d) * st.speed * dt;
        npc.root.rotation.y = Math.atan2(dx, dz);
      }
      npc.update(dt, st.speed);
    });
  }

  p.spawn = { x: -19, z: -9, rot: 0 };
  return p;
}

// ---------------------------------------------------------------- INTERNI
function room(p, w, d, floorColor, wallColor, bg = 0x1a1d24) {
  const s = p.scene;
  s.background = new THREE.Color(bg);
  const hemi = new THREE.HemisphereLight(0xffffff, 0x444455, 1.2);
  s.add(hemi);
  const l = new THREE.DirectionalLight(0xffffff, 1.6);
  l.position.set(4, 12, 8);
  l.castShadow = true;
  l.shadow.mapSize.set(1024, 1024);
  Object.assign(l.shadow.camera, { left: -14, right: 14, top: 14, bottom: -14 });
  s.add(l);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(w, d), mat(floorColor));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  s.add(floor);
  // pareti: fondo e lati
  box(w, 3.2, 0.3, wallColor, 0, 1.6, -d / 2, s);
  box(0.3, 3.2, d, wallColor, -w / 2, 1.6, 0, s);
  box(0.3, 3.2, d, wallColor, w / 2, 1.6, 0, s);
  // muretto basso sul davanti con apertura
  box(w / 2 - 1.5, 0.5, 0.3, wallColor, -w / 4 - 0.75, 0.25, d / 2, s);
  box(w / 2 - 1.5, 0.5, 0.3, wallColor, w / 4 + 0.75, 0.25, d / 2, s);
  p.bounds = { x1: -w / 2 + 0.15, z1: -d / 2 + 0.15, x2: w / 2 - 0.15, z2: d / 2 + 0.2 };
  // zerbino uscita
  const mat2 = box(2.4, 0.04, 1.2, 0x9b2226, 0, 0.02, d / 2 - 0.7, s);
  mat2.castShadow = false;
  p.interact(0, d / 2 - 0.7, 'Esci in città', 'exit', null, 1.4, 1.6);
  p.spawn = { x: 0, z: d / 2 - 2, rot: Math.PI };
  p.camDist = 8.5;
  p.camHeight = 6.5;
}

function burger(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  cyl(0.3, 0.32, 0.1, 0xd99a4e, 0, 0.05, 0, g);
  cyl(0.33, 0.33, 0.08, 0x5a2e14, 0, 0.14, 0, g);
  cyl(0.35, 0.35, 0.03, 0xf5c518, 0, 0.2, 0, g);
  cyl(0.34, 0.34, 0.03, 0x4caf50, 0, 0.23, 0, g);
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.32, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2), mat(0xd99a4e));
  top.position.y = 0.25;
  g.add(top);
  parent.add(g);
  return g;
}

function broccoli(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  cyl(0.07, 0.1, 0.35, 0x8bc34a, 0, 0.17, 0, g, 6);
  [[0, 0.42, 0, 0.2], [0.14, 0.36, 0.05, 0.14], [-0.14, 0.36, 0, 0.15], [0, 0.36, 0.14, 0.13], [0, 0.36, -0.13, 0.13]]
    .forEach(([a, b, c, r]) => {
      const m = new THREE.Mesh(new THREE.IcosahedronGeometry(r, 0), mat(0x2e7d32, { flatShading: true }));
      m.position.set(a, b, c);
      g.add(m);
    });
  parent.add(g);
  return g;
}

function steak(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  const m = sphere(0.3, 0xa4282b, 0, 0.08, 0, g, 12);
  m.scale.set(1.2, 0.3, 0.9);
  const f = sphere(0.1, 0xf3e0d0, 0.28, 0.08, 0, g, 8);
  f.scale.set(1, 0.5, 1);
  const bone = cyl(0.03, 0.03, 0.3, 0xf5f0e6, 0.4, 0.08, 0, g, 6);
  bone.rotation.z = Math.PI / 2;
  parent.add(g);
  return g;
}

export const FOOD_MODELS = { hamburger: burger, broccoli, meat: steak };

export function buildHome() {
  const p = new Place('home', 'home');
  room(p, 14, 11, 0xc49a6c, 0xe8dcc5, 0x2a2233);
  const s = p.scene;
  // letto
  box(2.4, 0.5, 3.4, 0x6b4226, -4.5, 0.25, -3.3, s);
  box(2.2, 0.25, 3.2, 0xf4f4f4, -4.5, 0.62, -3.3, s);
  box(2.2, 0.28, 2, 0x3d6fb6, -4.5, 0.7, -2.7, s);
  box(1.4, 0.2, 0.6, 0xffffff, -4.5, 0.85, -4.6, s);
  box(2.4, 1.3, 0.2, 0x6b4226, -4.5, 0.65, -5.05, s);
  p.solid(-4.5, -3.3, 2.4, 3.4);
  p.interact(-3.0, -1.2, 'Dormi (nuovo giorno)', 'sleep', null, 1.6);
  p.bedPos = { x: -4.5, z: -3.3 };
  // frigo
  box(1.2, 2.2, 1, 0xe8f0f5, 5.6, 1.1, -4.6, s);
  box(0.08, 0.6, 0.08, 0x777777, 5.1, 1.4, -4.08, s);
  p.solid(5.6, -4.6, 1.2, 1);
  p.interact(5.6, -3.4, 'Frigo: mangia', 'fridge', null, 1.5);
  // cucina
  box(3, 1, 0.8, 0x8a6e4b, 3.2, 0.5, -4.8, s);
  box(3, 0.08, 0.85, 0x333333, 3.2, 1.04, -4.8, s);
  p.solid(3.2, -4.8, 3, 0.8);
  // divano + tv
  box(3, 0.5, 1.1, 0x7a3b69, 0.5, 0.35, 0.8, s);
  box(3, 0.8, 0.3, 0x7a3b69, 0.5, 0.7, 1.3, s);
  p.solid(0.5, 0.9, 3, 1.2);
  box(2.6, 1.5, 0.1, 0x111111, 0.5, 1.6, -5.25, s);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.4, 1.3), new THREE.MeshBasicMaterial({ color: 0x2255aa }));
  screen.position.set(0.5, 1.6, -5.19);
  s.add(screen);
  p.updaters.push((dt, t) => screen.material.color.setHSL((t * 0.05) % 1, 0.6, 0.35 + Math.sin(t * 7) * 0.03));
  box(2, 0.5, 0.6, 0x3a2a1a, 0.5, 0.25, -4.9, s);
  p.interact(0.5, -0.4, 'Guarda la TV (+umore)', 'tv', null, 1.4);
  // specchio
  box(1.2, 2.2, 0.08, 0xcfe8ff, 6.8, 1.4, 1, s).rotation.y = Math.PI / 2;
  p.interact(5.8, 1, 'Specchio: posa!', 'mirror', null, 1.3);
  // tappeto + pianta
  const rug = box(3.5, 0.02, 2.5, 0xd4a373, 0.5, 0.01, -2, s);
  rug.castShadow = false;
  cyl(0.3, 0.25, 0.6, 0xc0643b, -6.2, 0.3, 4.5, s, 8);
  const pl = new THREE.Mesh(new THREE.IcosahedronGeometry(0.6, 0), mat(0x3f8f3a, { flatShading: true }));
  pl.position.set(-6.2, 1.1, 4.5);
  s.add(pl);
  // lampada
  const bulb = new THREE.PointLight(0xffd9a0, 8, 10);
  bulb.position.set(0, 2.9, 0);
  s.add(bulb);
  return p;
}

export function buildGym() {
  const p = new Place('gym', 'gym');
  room(p, 18, 13, 0x2b2b2e, 0x49525e, 0x121418);
  const s = p.scene;
  // pavimento in gomma a riquadri
  for (let x = -8; x <= 8; x += 2) {
    for (let z = -6; z <= 6; z += 2) {
      if ((x + z) % 4 === 0) {
        const t = box(1.96, 0.02, 1.96, 0x333338, x, 0.01, z, s);
        t.castShadow = false;
      }
    }
  }
  // specchi sul fondo
  const mirror = box(14, 2, 0.05, 0xa9c7d8, 0, 1.6, -6.3, s);
  mirror.material = mat(0xa9c7d8, { emissive: 0x223344 });
  const sign = textSign('NO PAIN NO GAIN', 6, 0.7, '#f0b400', '#111', 'bold 64px Impact, sans-serif');
  sign.position.set(0, 2.9, -6.28);
  s.add(sign);

  // Squat rack
  {
    const g = new THREE.Group();
    g.position.set(-5.5, 0, -3.5);
    s.add(g);
    [[-1.1, -0.6], [1.1, -0.6], [-1.1, 0.6], [1.1, 0.6]].forEach(([x, z]) => box(0.12, 2.6, 0.12, 0x222222, x, 1.3, z, g));
    box(2.4, 0.1, 0.1, 0x222222, 0, 2.6, -0.6, g);
    box(2.4, 0.1, 0.1, 0x222222, 0, 2.6, 0.6, g);
    const barbell = makeBarbell(2.4);
    barbell.position.set(0, 1.5, 0);
    g.add(barbell);
    p.solid(-5.5, -3.5, 2.6, 1.4);
    p.squat = { group: g, barbell };
    const lab = textSign('SQUAT · GAMBE', 2.2, 0.4, '#d8342c', '#fff', 'bold 60px sans-serif');
    lab.position.set(0, 3, 0.62);
    g.add(lab);
    p.interact(-5.5, -1.8, 'Squat (gambe)', 'workout', 'squat');
  }
  // Panca piana
  {
    const g = new THREE.Group();
    g.position.set(0, 0, -3.3);
    s.add(g);
    box(0.6, 0.12, 2, 0x1f3d7a, 0, 0.5, 0.3, g);
    box(0.12, 0.45, 0.12, 0x222222, 0, 0.22, -0.4, g);
    box(0.12, 0.45, 0.12, 0x222222, 0, 0.22, 1, g);
    [-0.55, 0.55].forEach((x) => box(0.1, 1.4, 0.1, 0x222222, x, 0.7, -0.2, g));
    const barbell = makeBarbell(2.2);
    barbell.position.set(0, 1.4, -0.15);
    g.add(barbell);
    p.solid(0, -3.1, 1.4, 2.4);
    p.bench = { group: g, barbell };
    const lab = textSign('PANCA · PETTO', 2.2, 0.4, '#1f3d7a', '#fff', 'bold 60px sans-serif');
    lab.position.set(0, 2.2, -1.2);
    g.add(lab);
    p.interact(1.6, -1.6, 'Panca piana (petto)', 'workout', 'bench');
  }
  // Lat machine
  {
    const g = new THREE.Group();
    g.position.set(5.5, 0, -3.8);
    s.add(g);
    box(0.15, 3, 0.15, 0x222222, 0, 1.5, -0.8, g);
    box(1.8, 0.15, 0.15, 0x222222, 0, 3, -0.3, g).rotation.y = Math.PI / 2;
    box(0.15, 0.15, 1.6, 0x222222, 0, 3, 0, g);
    box(0.7, 0.12, 0.7, 0x1b1b1b, 0, 0.5, 0.35, g);
    box(0.1, 0.5, 0.1, 0x222222, 0, 0.25, 0.35, g);
    box(0.5, 0.15, 0.2, 0x1b1b1b, 0, 0.8, 0.85, g);
    const cable = box(0.02, 1, 0.02, 0x999999, 0, 2.5, 0.6, g, false);
    const handle = box(1.6, 0.06, 0.06, 0x888888, 0, 2, 0.6, g);
    const stack = box(0.5, 0.6, 0.3, 0x555555, 0, 0.3, -0.6, g);
    p.solid(5.5, -3.8, 1, 2);
    p.lat = { group: g, cable, handle, stack };
    const lab = textSign('LAT · SCHIENA', 2.2, 0.4, '#10ac84', '#fff', 'bold 60px sans-serif');
    lab.position.set(0, 3.4, 0.1);
    g.add(lab);
    p.interact(4.0, -2.0, 'Lat machine (schiena)', 'workout', 'lat');
  }
  // rastrelliera manubri
  box(4, 0.8, 0.8, 0x222222, 6, 0.4, 3.5, s);
  p.solid(6, 3.5, 4, 0.8);
  for (let i = 0; i < 6; i++) {
    const d = makeBarbell(0.5, 0.12 + i * 0.015);
    d.position.set(4.4 + i * 0.64, 0.95, 3.5);
    d.rotation.y = Math.PI / 2;
    s.add(d);
  }
  // un altro atleta che si allena
  const bro = new Character({ shirt: 0x111111, skin: 0x8d5524 });
  bro.setMuscles(90, 95, 90);
  bro.root.position.set(-6, 0, 3.5);
  bro.root.rotation.y = Math.PI / 2;
  s.add(bro.root);
  p.circles.push({ x: -6, z: 3.5, r: 0.5 });
  bro.setPose('flex');
  p.interact(-4.7, 3.5, 'Parla col gym bro', 'bro', null, 1.5);
  p.updaters.push((dt) => bro.update(dt));
  // luci neon
  [-5, 0, 5].forEach((x) => {
    const n = box(3, 0.08, 0.3, 0xffffff, x, 3.15, 0, s, false);
    n.material = mat(0xeaf6ff, { basic: true });
  });
  return p;
}

export function makeBarbell(len, plateR = 0.28) {
  const g = new THREE.Group();
  const bar = cyl(0.025, 0.025, len, 0xb0b0b0, 0, 0, 0, g, 8);
  bar.rotation.z = Math.PI / 2;
  [-1, 1].forEach((sd) => {
    const pl = cyl(plateR, plateR, 0.08, 0x1b1b1b, sd * (len / 2 - 0.2), 0, 0, g, 14);
    pl.rotation.z = Math.PI / 2;
    const pl2 = cyl(plateR * 0.8, plateR * 0.8, 0.07, 0xc0392b, sd * (len / 2 - 0.29), 0, 0, g, 14);
    pl2.rotation.z = Math.PI / 2;
  });
  return g;
}

export function buildShop() {
  const p = new Place('shop', 'shop');
  room(p, 16, 12, 0xe9ecef, 0xb7e4c7, 0x1c2a22);
  const s = p.scene;
  const foods = [['hamburger', -4.5], ['broccoli', 0], ['meat', 4.5]];
  foods.forEach(([id, x]) => {
    // bancone
    box(2.8, 1, 1.2, 0xffffff, x, 0.5, -3.5, s);
    box(2.9, 0.08, 1.3, 0x2e9e4f, x, 1.02, -3.5, s);
    p.solid(x, -3.5, 2.8, 1.2);
    for (let k = -1; k <= 1; k++) FOOD_MODELS[id](s, x + k * 0.8, 1.06, -3.5, 0.9);
    // scaffale dietro
    box(2.8, 2.6, 0.6, 0xdee2e6, x, 1.3, -5.6, s);
    for (let sh = 0; sh < 3; sh++) {
      box(2.7, 0.05, 0.6, 0xadb5bd, x, 0.6 + sh * 0.75, -5.45, s);
      for (let k = 0; k < 5; k++) {
        const c = [0xe63946, 0xf4a261, 0x2a9d8f, 0xe9c46a, 0x457b9d][(k + sh) % 5];
        box(0.35, 0.45, 0.35, c, x - 1.1 + k * 0.55, 0.85 + sh * 0.75, -5.4, s);
      }
    }
    p.interact(x, -2.1, 'Compra', 'buy', id, 1.4);
  });
  // cassa con commessa
  box(3, 1, 1, 0x8d99ae, 5, 0.5, 2.5, s);
  p.solid(5, 2.5, 3, 1);
  p.solid(5, 1.5, 1, 1);
  const clerk = new Character({ shirt: 0x2e9e4f, skin: 0xf1c27d });
  clerk.root.position.set(5, 0, 1.5);
  s.add(clerk.root);
  p.updaters.push((dt) => clerk.update(dt));
  // frutta
  [[-5.5, 3], [-3.5, 3]].forEach(([x, z]) => {
    box(1.6, 0.7, 1.2, 0x8b5a2b, x, 0.35, z, s);
    p.solid(x, z, 1.6, 1.2);
    for (let k = 0; k < 6; k++) sphere(0.16, k % 2 ? 0xff6b35 : 0xffd23f, x - 0.5 + (k % 3) * 0.5, 0.82, z - 0.25 + Math.floor(k / 3) * 0.5, s, 8);
  });
  return p;
}

export function buildBank() {
  const p = new Place('bank', 'bank');
  room(p, 16, 12, 0xd8cfc0, 0xf4efe4, 0x1b1a24);
  const s = p.scene;
  // pavimento a scacchi
  for (let x = -7; x <= 7; x += 2) {
    for (let z = -5; z <= 5; z += 2) {
      if ((x + z + 12) % 4 === 0) {
        const t = box(1.98, 0.02, 1.98, 0x2d2a26, x, 0.01, z, s);
        t.castShadow = false;
      }
    }
  }
  // bancone
  box(9, 1.2, 1, 0x6d4c41, -1.5, 0.6, -3.2, s);
  box(9.2, 0.1, 1.2, 0x3e2723, -1.5, 1.25, -3.2, s);
  p.solid(-1.5, -3.2, 9, 1);
  for (let i = -2; i <= 2; i++) box(0.05, 1, 0.05, 0xffd84a, -1.5 + i * 2, 1.8, -3.2, s);
  box(9, 0.05, 0.05, 0xffd84a, -1.5, 2.3, -3.2, s);
  const teller = new Character({ shirt: 0x1d3a6b, skin: 0xffdbac });
  teller.root.position.set(-3, 0, -4.2);
  s.add(teller.root);
  p.updaters.push((dt) => teller.update(dt));
  // schermo con aereo
  const scr = textSign('✈ INVESTI! ✈', 3.4, 1.2, '#0b1f3a', '#ffd84a', 'bold 64px sans-serif');
  scr.position.set(-3, 2.6, -5.8);
  s.add(scr);
  p.interact(-3, -1.8, 'Investi (gioco dell\'aereo)', 'plane', null, 1.5);
  // scrivania lavoro
  box(2.2, 0.9, 1.1, 0x795548, 3.5, 0.45, -3.2, s);
  for (let k = 0; k < 4; k++) box(0.5, 0.06 + k * 0.03, 0.25, 0x6fbf73, 3 + k * 0.3, 1.0 + k * 0.02, -3.2, s);
  p.interact(3.5, -1.8, 'Lavora: conta banconote', 'work', null, 1.5);
  // caveau
  const vault = cyl(1.6, 1.6, 0.3, 0x9e9e9e, 5.5, 1.8, -5.8, s, 24);
  vault.rotation.x = Math.PI / 2;
  const wheel = cyl(0.5, 0.5, 0.2, 0x616161, 5.5, 1.8, -5.55, s, 6);
  wheel.rotation.x = Math.PI / 2;
  p.updaters.push((dt, t) => { wheel.rotation.y = t * 0.5; });
  // colonne
  [[-6.5, 2], [6.5, 2]].forEach(([x, z]) => {
    cyl(0.4, 0.45, 3.2, 0xffffff, x, 1.6, z, s, 12);
    p.circles.push({ x, z, r: 0.45 });
  });
  const lampL = new THREE.PointLight(0xffe0a0, 6, 12);
  lampL.position.set(0, 3, 0);
  s.add(lampL);
  return p;
}
