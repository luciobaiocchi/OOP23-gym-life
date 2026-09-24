import * as THREE from 'three';
import { Character } from './character.js';
import { tex } from './textures.js';

// 3D maps: the city plus the interiors of home, gym, supermarket and bank.

// ---------------------------------------------------------------- MATERIALS AND HELPERS
const matCache = new Map();

// PBR material with a flat colour (cached)
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!matCache.has(key)) {
    const { basic, ...rest } = opts;
    matCache.set(key, basic
      ? new THREE.MeshBasicMaterial({ color, ...rest })
      : new THREE.MeshStandardMaterial({ color, roughness: 0.75, metalness: 0, ...rest }));
  }
  return matCache.get(key);
}

// PBR material with a procedural texture (cached by name)
function tmat(name, t, opts = {}) {
  if (!matCache.has(name)) {
    matCache.set(name, new THREE.MeshStandardMaterial({
      map: t.map, bumpMap: t.bump, bumpScale: 1.2, roughness: 0.85, metalness: 0, ...opts,
    }));
  }
  return matCache.get(name);
}

const M = {
  grass: () => tmat('grass', tex.grass([1, 1]), { roughness: 1 }),
  asphalt: () => tmat('asphalt', tex.asphalt(), { roughness: 0.95 }),
  pavement: () => tmat('pavement', tex.pavement(), { roughness: 0.9 }),
  brickRed: () => tmat('brickRed', tex.brick('#8e4631'), { roughness: 0.9 }),
  brickGrey: () => tmat('brickGrey', tex.brick('#55585e'), { roughness: 0.9 }),
  plasterCream: () => tmat('plasterCream', tex.plaster('#e6dcc6'), { roughness: 0.95 }),
  plasterWhite: () => tmat('plasterWhite', tex.plaster('#eeebe4'), { roughness: 0.95 }),
  plasterGreen: () => tmat('plasterGreen', tex.plaster('#cfe0d2'), { roughness: 0.95 }),
  plasterGrey: () => tmat('plasterGrey', tex.plaster('#8d949c'), { roughness: 0.95 }),
  stone: () => tmat('stone', tex.concrete('#d8d0bd'), { roughness: 0.85 }),
  concrete: () => tmat('concrete', tex.concrete('#9e9b94'), { roughness: 0.95 }),
  woodFloor: () => tmat('woodFloor', tex.wood('#9a6a3e'), { roughness: 0.55 }),
  woodDark: () => tmat('woodDark', tex.wood('#5b3b22'), { roughness: 0.6 }),
  rubber: () => tmat('rubber', tex.rubber(), { roughness: 0.95 }),
  tiles: () => tmat('tiles', tex.tiles('#ecebe7', '#b9b5ad'), { roughness: 0.35 }),
  marble: () => tmat('marble', tex.marble(), { roughness: 0.25 }),
  roof: () => tmat('roof', tex.roof(), { roughness: 0.8 }),
  bark: () => tmat('bark', tex.bark(), { roughness: 1 }),
  leaves: () => tmat('leaves', tex.leaves(), { roughness: 0.9 }),
  glass: () => mat(0x22303a, { roughness: 0.05, metalness: 0.6, envMapIntensity: 1.6 }),
  metal: () => mat(0x2b2d31, { roughness: 0.4, metalness: 0.8 }),
  chrome: () => mat(0xd6d9dd, { roughness: 0.15, metalness: 1 }),
  mirror: () => mat(0xe8eef2, { roughness: 0.02, metalness: 1, envMapIntensity: 1.3 }),
};

// World-space UVs on a box, so textures keep the same scale on any size
function boxUV(geo, w, h, d, unit) {
  const uv = geo.attributes.uv;
  const dims = [[d, h], [d, h], [w, d], [w, d], [w, h], [w, h]];
  for (let f = 0; f < 6; f++) {
    for (let i = 0; i < 4; i++) {
      const k = f * 4 + i;
      uv.setXY(k, uv.getX(k) * dims[f][0] / unit, uv.getY(k) * dims[f][1] / unit);
    }
  }
  uv.needsUpdate = true;
}

export function box(w, h, d, material, x = 0, y = 0, z = 0, parent = null, shadow = true, uvUnit = 0) {
  const geo = new THREE.BoxGeometry(w, h, d);
  if (uvUnit) boxUV(geo, w, h, d, uvUnit);
  const m = new THREE.Mesh(geo, typeof material === 'number' ? mat(material) : material);
  m.position.set(x, y, z);
  m.castShadow = shadow;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

export function cyl(rt, rb, h, material, x = 0, y = 0, z = 0, parent = null, seg = 20) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, seg), typeof material === 'number' ? mat(material) : material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

function sphere(r, material, x, y, z, parent, seg = 16) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, seg, Math.max(8, seg - 4)), typeof material === 'number' ? mat(material) : material);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

function plane(w, d, material, x, y, z, parent, rep = 0) {
  const geo = new THREE.PlaneGeometry(w, d);
  if (rep) {
    const uv = geo.attributes.uv;
    for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) * w / rep, uv.getY(i) * d / rep);
  }
  const m = new THREE.Mesh(geo, material);
  m.rotation.x = -Math.PI / 2;
  m.position.set(x, y, z);
  m.receiveShadow = true;
  if (parent) parent.add(m);
  return m;
}

// Sign with text drawn on a canvas
export function textSign(text, w, h, bg = '#222', fg = '#fff', font = 'bold 72px sans-serif', glow = false) {
  const c = document.createElement('canvas');
  c.width = 1024;
  c.height = Math.round(1024 * (h / w));
  const g = c.getContext('2d');
  g.fillStyle = bg;
  g.fillRect(0, 0, c.width, c.height);
  g.fillStyle = fg;
  g.font = font.replace(/(\d+)px/, (m, n) => `${n * 2}px`);
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.fillText(text, c.width / 2, c.height / 2 + 6);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  const material = new THREE.MeshStandardMaterial({ map: t, roughness: 0.5 });
  if (glow) { material.emissiveMap = t; material.emissive = new THREE.Color(0xffffff); material.emissiveIntensity = 0.6; }
  return new THREE.Mesh(new THREE.PlaneGeometry(w, h), material);
}

// Discreet marker on the floor for interactive spots
function marker() {
  const g = new THREE.Group();
  const ring = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.58, 40), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35, depthWrite: false }));
  ring.rotation.x = -Math.PI / 2;
  ring.name = 'ring';
  g.add(ring);
  return g;
}

// ---------------------------------------------------------------- PLACE
class Place {
  constructor(name, music) {
    this.name = name;
    this.music = music;
    this.scene = new THREE.Scene();
    this.colliders = []; // static rectangles {x1,z1,x2,z2,h}
    this.circles = []; // static circles {x,z,r}
    this.dynamic = []; // functions returning moving obstacles (cars, pedestrians)
    this.interactions = [];
    this.bounds = { x1: -50, z1: -50, x2: 50, z2: 50 };
    this.spawn = { x: 0, z: 0, rot: 0 };
    this.updaters = [];
    this.camDist = 9;
    this.camHeight = 5;
    this.playerPos = null; // set by main
  }

  solid(x, z, w, d, h = 2) {
    this.colliders.push({ x1: x - w / 2, z1: z - d / 2, x2: x + w / 2, z2: z + d / 2, h });
  }

  interact(x, z, label, action, data = null, radius = 1.8) {
    const m = marker();
    m.position.set(x, 0.03, z);
    this.scene.add(m);
    this.interactions.push({ x, z, label, action, data, radius, marker: m });
  }

  update(dt, t) {
    this.interactions.forEach((it, i) => {
      const ring = it.marker.getObjectByName('ring');
      ring.material.opacity = 0.22 + (Math.sin(t * 2.5 + i) + 1) * 0.1;
    });
    this.updaters.forEach((u) => u(dt, t));
  }

  // Pushes a circle of radius r out of every obstacle
  collide(pos, r = 0.4, skip = null) {
    const b = this.bounds;
    pos.x = Math.max(b.x1 + r, Math.min(b.x2 - r, pos.x));
    pos.z = Math.max(b.z1 + r, Math.min(b.z2 - r, pos.z));
    const rects = this.colliders.slice();
    const circles = this.circles.slice();
    for (const f of this.dynamic) {
      for (const o of f()) {
        if (o === skip || o.owner === skip) continue;
        if (o.r !== undefined) circles.push(o); else rects.push(o);
      }
    }
    for (const c of rects) {
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
          // inside the rectangle: push out through the nearest side
          const opts = [[pos.x - c.x1, -1, 0], [c.x2 - pos.x, 1, 0], [pos.z - c.z1, 0, -1], [c.z2 - pos.z, 0, 1]];
          opts.sort((a, b2) => a[0] - b2[0]);
          const [dd, sx, sz] = opts[0];
          pos.x += sx * (dd + r);
          pos.z += sz * (dd + r);
        }
      }
    }
    for (const c of circles) {
      const dx = pos.x - c.x, dz = pos.z - c.z;
      const d = Math.hypot(dx, dz);
      const min = c.r + r;
      if (d < min) {
        if (d > 1e-6) {
          pos.x = c.x + (dx / d) * min;
          pos.z = c.z + (dz / d) * min;
        } else pos.x += min;
      }
    }
  }
}

// ---------------------------------------------------------------- CITY PROPS
function tree(parent, x, z, s, r) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = r() * Math.PI * 2;
  const trunk = cyl(0.14 * s, 0.24 * s, 2.6 * s, M.bark(), 0, 1.3 * s, 0, g, 10);
  trunk.castShadow = true;
  const leaves = M.leaves();
  const blobs = 5 + Math.floor(r() * 4);
  for (let i = 0; i < blobs; i++) {
    const a = r() * Math.PI * 2, d = r() * 0.9 * s;
    const rad = (0.8 + r() * 0.6) * s;
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry(rad, 2), leaves);
    m.position.set(Math.cos(a) * d, (2.8 + r() * 1.4) * s, Math.sin(a) * d);
    m.scale.set(1, 0.85 + r() * 0.3, 1);
    m.castShadow = true;
    m.receiveShadow = true;
    g.add(m);
  }
  parent.add(g);
}

function bush(parent, x, z, s, r) {
  for (let i = 0; i < 3; i++) {
    const m = new THREE.Mesh(new THREE.IcosahedronGeometry((0.45 + r() * 0.2) * s, 1), M.leaves());
    m.position.set(x + (r() - 0.5) * 0.8 * s, 0.35 * s, z + (r() - 0.5) * 0.8 * s);
    m.castShadow = true;
    parent.add(m);
  }
}

function streetLamp(parent, x, z, facing) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = facing;
  cyl(0.07, 0.1, 5.2, M.metal(), 0, 2.6, 0, g, 10);
  const arm = box(0.08, 0.08, 1.4, M.metal(), 0, 5.1, 0.65, g);
  arm.castShadow = false;
  box(0.35, 0.12, 0.6, M.metal(), 0, 5.05, 1.35, g);
  const bulb = box(0.28, 0.02, 0.5, mat(0xfff4d6, { emissive: 0xfff1c9, emissiveIntensity: 1.5 }), 0, 4.98, 1.35, g, false);
  bulb.castShadow = false;
  parent.add(g);
}

// Side profile of a hatchback, extruded to its width
function car(color) {
  const g = new THREE.Group();
  const shape = new THREE.Shape();
  const pts = [[-2.1, 0.35], [2.1, 0.35], [2.15, 0.8], [1.9, 0.95], [0.85, 1.05], [0.3, 1.5], [-1.3, 1.52], [-1.95, 1.2], [-2.15, 0.9]];
  shape.moveTo(pts[0][0], pts[0][1]);
  pts.slice(1).forEach(([a, b]) => shape.lineTo(a, b));
  const body = new THREE.Mesh(
    new THREE.ExtrudeGeometry(shape, { depth: 1.7, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 3 }),
    mat(color, { roughness: 0.25, metalness: 0.7, envMapIntensity: 1.2 }),
  );
  body.rotation.y = -Math.PI / 2;
  body.position.x = 0.85;
  body.castShadow = true;
  g.add(body);
  // windows
  const wshape = new THREE.Shape();
  [[0.75, 1.07], [0.28, 1.46], [-1.25, 1.48], [-1.85, 1.2], [-1.8, 1.07]].forEach(([a, b], i) => (i ? wshape.lineTo(a, b) : wshape.moveTo(a, b)));
  const win = new THREE.Mesh(new THREE.ExtrudeGeometry(wshape, { depth: 1.82, bevelEnabled: false }), M.glass());
  win.rotation.y = -Math.PI / 2;
  win.position.x = 0.91;
  g.add(win);
  // wheels
  [[-0.86, 1.35], [0.86, 1.35], [-0.86, -1.35], [0.86, -1.35]].forEach(([x, z]) => {
    const w = cyl(0.36, 0.36, 0.26, mat(0x151515, { roughness: 0.9 }), x, 0.36, z, g, 18);
    w.rotation.z = Math.PI / 2;
    const rim = cyl(0.2, 0.2, 0.27, M.chrome(), x, 0.36, z, g, 12);
    rim.rotation.z = Math.PI / 2;
  });
  // lights
  const head = mat(0xffffff, { emissive: 0xfff6d8, emissiveIntensity: 0.6 });
  const tail = mat(0x550000, { emissive: 0xff1a1a, emissiveIntensity: 0.4 });
  [-0.6, 0.6].forEach((x) => {
    box(0.35, 0.14, 0.05, head, x, 0.78, 2.2, g, false);
    box(0.35, 0.12, 0.05, tail, x, 0.85, -2.2, g, false);
  });
  box(1.6, 0.2, 0.1, mat(0x222222), 0, 0.45, 2.22, g, false);
  box(1.6, 0.2, 0.1, mat(0x222222), 0, 0.45, -2.22, g, false);
  return g;
}

function trafficLight(parent, x, z, facing) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  g.rotation.y = facing;
  cyl(0.06, 0.08, 3.2, M.metal(), 0, 1.6, 0, g, 10);
  box(0.32, 0.9, 0.25, mat(0x1c1c1c, { roughness: 0.6 }), 0, 3.5, 0, g);
  const lamps = [0xff2a1a, 0xffb400, 0x2aff6a].map((c, i) => {
    const m = new THREE.MeshStandardMaterial({ color: 0x111111, emissive: c, emissiveIntensity: 0 });
    const s = new THREE.Mesh(new THREE.CircleGeometry(0.09, 16), m);
    s.position.set(0, 3.78 - i * 0.28, 0.13);
    g.add(s);
    return m;
  });
  parent.add(g);
  return lamps; // [red, yellow, green]
}

// Window with frame, sill and glass
function windowUnit(parent, x, y, z, w, h, facing, frameColor = 0xf2f2ee) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.rotation.y = facing;
  const fm = mat(frameColor, { roughness: 0.5 });
  box(w + 0.16, 0.08, 0.14, fm, 0, h / 2 + 0.04, 0.02, g, false);
  box(w + 0.3, 0.08, 0.24, fm, 0, -h / 2 - 0.04, 0.07, g, false);
  box(0.08, h, 0.14, fm, -w / 2 - 0.04, 0, 0.02, g, false);
  box(0.08, h, 0.14, fm, w / 2 + 0.04, 0, 0.02, g, false);
  box(0.05, h, 0.08, fm, 0, 0, 0.02, g, false);
  const glass = new THREE.Mesh(new THREE.PlaneGeometry(w, h), M.glass());
  glass.position.z = -0.01;
  g.add(glass);
  parent.add(g);
}

// Building with textured walls, plinth, cornice, windows and a door facing the road
function building(place, { x, z, w, d, h, wall, doorSide, floors = 2, trim = 0xd9d4c8, winW = 1.3, winH = 1.5, skipFront = false }) {
  const g = new THREE.Group();
  g.position.set(x, 0, z);
  place.scene.add(g);
  box(w, h, d, wall, 0, h / 2, 0, g, true, 3);
  box(w + 0.1, 0.6, d + 0.1, M.concrete(), 0, 0.3, 0, g, false, 2);
  box(w + 0.4, 0.3, d + 0.4, mat(trim, { roughness: 0.7 }), 0, h + 0.15, 0, g);
  place.solid(x, z, w + 0.1, d + 0.1, h + 3);
  const fz = doorSide * (d / 2 + 0.03);
  const face = doorSide > 0 ? 0 : Math.PI;
  // door
  const door = box(1.4, 2.4, 0.12, M.woodDark(), 0, 1.2 + 0.1, fz, g, true, 1);
  box(1.7, 0.14, 0.2, mat(trim), 0, 2.55, fz, g, false);
  box(0.12, 2.5, 0.2, mat(trim), -0.78, 1.25, fz, g, false);
  box(0.12, 2.5, 0.2, mat(trim), 0.78, 1.25, fz, g, false);
  const knob = sphere(0.05, M.chrome(), 0.5, 1.2, fz + doorSide * 0.08, g, 10);
  knob.castShadow = false;
  box(2.2, 0.12, 1.1, M.concrete(), 0, 0.06, fz + doorSide * 0.55, g, false, 1);
  // windows on every side
  const cols = Math.max(1, Math.floor(w / 3.2));
  for (let f = 0; f < floors; f++) {
    const wy = 1.6 + f * (h - 1.2) / floors + (f ? 0.6 : 0);
    if (wy + winH / 2 > h - 0.3) continue;
    for (let c = 0; c < cols; c++) {
      const wx = -w / 2 + (w / cols) * (c + 0.5);
      if (!(f === 0 && Math.abs(wx) < 1.5) && !(skipFront && f === 0)) windowUnit(g, wx, wy, fz + doorSide * 0.02, winW, winH, face);
      windowUnit(g, wx, wy, -fz - doorSide * 0.02, winW, winH, face + Math.PI);
    }
    const sc = Math.max(1, Math.floor(d / 3.2));
    for (let c = 0; c < sc; c++) {
      const wz = -d / 2 + (d / sc) * (c + 0.5);
      windowUnit(g, w / 2 + 0.02, wy, wz, winW, winH, Math.PI / 2);
      windowUnit(g, -w / 2 - 0.02, wy, wz, winW, winH, -Math.PI / 2);
    }
  }
  return { g, fz, face, door };
}

// Gable roof as an extruded triangle
function gableRoof(g, w, d, h, y) {
  const s = new THREE.Shape();
  s.moveTo(-w / 2 - 0.5, 0);
  s.lineTo(w / 2 + 0.5, 0);
  s.lineTo(0, h);
  s.lineTo(-w / 2 - 0.5, 0);
  const geo = new THREE.ExtrudeGeometry(s, { depth: d + 0.8, bevelEnabled: false });
  const uv = geo.attributes.uv;
  for (let i = 0; i < uv.count; i++) uv.setXY(i, uv.getX(i) / 2, uv.getY(i) / 2);
  const roof = new THREE.Mesh(geo, M.roof());
  roof.position.set(0, y, -(d + 0.8) / 2);
  roof.castShadow = true;
  roof.receiveShadow = true;
  g.add(roof);
}

// ---------------------------------------------------------------- CITY
export function buildCity() {
  const p = new Place('city', 'city');
  p.bounds = { x1: -46, z1: -46, x2: 46, z2: 46 };
  p.camDist = 11;
  p.camHeight = 6;
  const s = p.scene;
  s.fog = new THREE.Fog(0xa9bccb, 70, 190);

  const hemi = new THREE.HemisphereLight(0xbfd8ff, 0x5b5040, 0.25);
  s.add(hemi);
  const sun = new THREE.DirectionalLight(0xffeedd, 3.4);
  sun.position.set(25, 40, 15);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -40, right: 40, top: 40, bottom: -40, near: 1, far: 150 });
  sun.shadow.bias = -0.0004;
  sun.shadow.normalBias = 0.03;
  s.add(sun);
  s.add(sun.target);
  p.sun = sun;
  p.sunDir = sun.position.clone().normalize();

  let seed = 7;
  const r = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647; };

  // Ground
  plane(260, 260, M.grass(), 0, 0, 0, s, 6);

  // Roads (|x| < 4 or |z| < 4)
  plane(260, 8, M.asphalt(), 0, 0.02, 0, s, 8);
  const rv = plane(8, 260, M.asphalt(), 0, 0.021, 0, s, 8);
  rv.renderOrder = 1;
  // sidewalks with kerb, interrupted at the crossroads
  [-1, 1].forEach((sd) => {
    [-1, 1].forEach((half) => {
      const len = 126;
      box(len, 0.15, 2.4, M.pavement(), half * (4 + len / 2), 0.075, sd * 5.2, s, false, 1.2);
      box(2.4, 0.15, len, M.pavement(), sd * 5.2, 0.075, half * (6.4 + len / 2), s, false, 1.2);
    });
  });
  // markings
  const paint = mat(0xf2f2ee, { roughness: 0.6 });
  for (let i = -128; i <= 128; i += 5) {
    if (Math.abs(i) < 9) continue;
    plane(2.4, 0.14, paint, i, 0.03, 0, s);
    plane(0.14, 2.4, paint, 0, 0.03, i, s);
  }
  // zebra crossings where the sidewalks meet the roads
  for (let k = -3; k <= 3; k++) {
    [-1, 1].forEach((sd) => {
      plane(0.5, 2.2, paint, k * 1.05, 0.031, sd * 5.2, s);
      plane(2.2, 0.5, paint, sd * 5.2, 0.031, k * 1.05, s);
    });
  }
  // stop lines
  [-1, 1].forEach((sd) => {
    plane(0.35, 3.8, paint, sd * 7.2, 0.031, sd * 2, s);
    plane(3.8, 0.35, paint, -sd * 2, 0.031, sd * 7.2, s);
  });

  // ---- HOME
  {
    const b = building(p, { x: -19, z: -17, w: 12, d: 10, h: 6, wall: M.plasterCream(), doorSide: 1, trim: 0xf4f1ea });
    gableRoof(b.g, 12, 10, 3.2, 6.3);
    box(0.9, 2.2, 0.9, M.brickRed(), 3, 8.4, -1.5, b.g, true, 1);
    // porch canopy
    box(2.6, 0.12, 1.4, M.woodDark(), 0, 2.9, b.fz + 0.7, b.g, true, 1);
    const sign = textSign('HOME', 1.6, 0.4, '#3b2a1c', '#f4e6cc', 'bold 64px Georgia, serif');
    sign.position.set(0, 3.25, b.fz + 0.12);
    b.g.add(sign);
    // white picket fence with a gate gap
    const fence = mat(0xf5f5f0, { roughness: 0.6 });
    [[-25, -21], [-17, -13]].forEach(([a, c]) => {
      for (let fx = a; fx <= c; fx += 0.5) box(0.1, 0.9, 0.06, fence, fx, 0.45, -9.5, s);
      box(c - a, 0.08, 0.05, fence, (a + c) / 2, 0.7, -9.5, s);
      box(c - a, 0.08, 0.05, fence, (a + c) / 2, 0.3, -9.5, s);
      p.solid((a + c) / 2, -9.5, c - a + 0.1, 0.15, 1);
    });
    // path to the door
    box(1.6, 0.03, 1.4, M.concrete(), -19, 0.015, -10.6, s, false, 1);
    // mailbox
    box(0.35, 0.4, 0.55, mat(0x2d4f8a, { roughness: 0.4, metalness: 0.3 }), -16, 1.1, -10.3, s);
    cyl(0.04, 0.04, 0.9, M.metal(), -16, 0.45, -10.3, s, 8);
    p.circles.push({ x: -16, z: -10.3, r: 0.35 });
    [-24, -14].forEach((bx) => bush(s, bx, -11, 1.2, r));
    p.circles.push({ x: -24, z: -11, r: 0.8 }, { x: -14, z: -11, r: 0.8 });
    p.interact(-19, -10.6, 'Enter home', 'enter', 'home');
  }

  // ---- GYM
  {
    const b = building(p, { x: 19, z: -18, w: 16, d: 12, h: 8, wall: M.brickGrey(), doorSide: 1, trim: 0x2a2c30, skipFront: true, floors: 1 });
    // large storefront glass
    [-4.6, 4.6].forEach((wx) => {
      const gl = new THREE.Mesh(new THREE.PlaneGeometry(4.8, 2.6), M.glass());
      gl.position.set(wx, 1.9, b.fz + 0.03);
      b.g.add(gl);
      box(5, 0.12, 0.2, M.metal(), wx, 3.25, b.fz + 0.05, b.g, false);
      box(5, 0.12, 0.2, M.metal(), wx, 0.55, b.fz + 0.05, b.g, false);
    });
    const sign = textSign('GYM LIFE', 7, 1.3, '#111214', '#f2b705', 'bold 120px Impact, "Arial Black", sans-serif', true);
    sign.position.set(0, 6.2, b.fz + 0.06);
    b.g.add(sign);
    // parapet and rooftop units
    box(16.4, 0.8, 0.25, M.concrete(), 0, 8.4, 6.05, b.g, true, 2);
    box(16.4, 0.8, 0.25, M.concrete(), 0, 8.4, -6.05, b.g, true, 2);
    [[-4, -2], [3, 1]].forEach(([ax, az]) => {
      box(2, 1.2, 1.6, mat(0x9aa0a6, { roughness: 0.5, metalness: 0.5 }), ax, 8.9, az, b.g);
      cyl(0.5, 0.5, 0.1, M.metal(), ax, 9.55, az, b.g, 16);
    });
    p.interact(19, -10.6, 'Enter the gym', 'enter', 'gym');
  }

  // ---- SUPERMARKET
  {
    const b = building(p, { x: -19, z: 18, w: 14, d: 11, h: 6, wall: M.plasterWhite(), doorSide: -1, trim: 0x2e7d4f, skipFront: true, floors: 1 });
    [-4.2, 4.2].forEach((wx) => {
      const gl = new THREE.Mesh(new THREE.PlaneGeometry(4, 2.4), M.glass());
      gl.position.set(wx, 1.8, b.fz - 0.03);
      gl.rotation.y = Math.PI;
      b.g.add(gl);
    });
    // striped awning
    const c = document.createElement('canvas');
    c.width = 256; c.height = 16;
    const cg = c.getContext('2d');
    for (let i = 0; i < 16; i++) { cg.fillStyle = i % 2 ? '#2e7d4f' : '#f4f4ef'; cg.fillRect(i * 16, 0, 16, 16); }
    const at = new THREE.CanvasTexture(c);
    at.colorSpace = THREE.SRGBColorSpace;
    const awning = new THREE.Mesh(new THREE.BoxGeometry(13, 0.08, 2), new THREE.MeshStandardMaterial({ map: at, roughness: 0.9 }));
    awning.position.set(0, 3.4, b.fz - 1);
    awning.rotation.x = -0.25;
    awning.castShadow = true;
    b.g.add(awning);
    const sign = textSign('SUPERMARKET', 8, 1.1, '#2e7d4f', '#ffffff', 'bold 96px Helvetica, Arial, sans-serif', true);
    sign.position.set(0, 4.8, b.fz - 0.06);
    sign.rotation.y = Math.PI;
    b.g.add(sign);
    // shopping carts
    const cartMat = mat(0xb8bcc2, { roughness: 0.3, metalness: 0.9 });
    [[-24.5, 11.2], [-23.6, 11.2]].forEach(([cx, cz]) => {
      box(0.6, 0.45, 0.9, cartMat, cx, 0.75, cz, s);
      cyl(0.02, 0.02, 0.6, cartMat, cx, 0.35, cz + 0.35, s, 6);
      cyl(0.02, 0.02, 0.6, cartMat, cx, 0.35, cz - 0.35, s, 6);
    });
    p.solid(-24.05, 11.2, 1.6, 1.1, 1);
    p.interact(-19, 11.1, 'Enter the supermarket', 'enter', 'shop');
  }

  // ---- BANK
  {
    const b = building(p, { x: 19, z: 18, w: 14, d: 11, h: 7.5, wall: M.stone(), doorSide: -1, trim: 0xe9e2d0, floors: 2 });
    // portico: columns, entablature and pediment
    for (let i = -3; i <= 3; i++) {
      if (i === 0) continue;
      cyl(0.32, 0.36, 6.4, mat(0xf1ece0, { roughness: 0.6 }), i * 2, 3.35, b.fz - 1.6, b.g, 20);
      box(0.9, 0.2, 0.9, mat(0xf1ece0), i * 2, 6.65, b.fz - 1.6, b.g);
      p.circles.push({ x: 19 + i * 2, z: 18 + b.fz - 1.6, r: 0.4 });
    }
    box(14.4, 0.6, 2.4, M.stone(), 0, 7.05, b.fz - 1.3, b.g, true, 2);
    const ped = new THREE.Shape();
    ped.moveTo(-7.2, 0); ped.lineTo(7.2, 0); ped.lineTo(0, 1.8); ped.lineTo(-7.2, 0);
    const pedMesh = new THREE.Mesh(new THREE.ExtrudeGeometry(ped, { depth: 2.4, bevelEnabled: false }), M.stone());
    pedMesh.position.set(0, 7.35, b.fz - 2.5);
    pedMesh.castShadow = true;
    b.g.add(pedMesh);
    box(15, 0.2, 3, M.stone(), 0, 0.1, b.fz - 1.5, b.g, false, 2);
    box(15.4, 0.2, 3.4, M.stone(), 0, 0.02, b.fz - 1.6, b.g, false, 2);
    const sign = textSign('BANK', 3.6, 0.55, '#e3dccb', '#3a3226', 'bold 110px "Times New Roman", serif');
    sign.position.set(0, 7.05, b.fz - 2.51);
    sign.rotation.y = Math.PI;
    b.g.add(sign);
    p.interact(19, 11.1, 'Enter the bank', 'enter', 'bank');
  }

  // Park with fountain
  {
    const fx = 30, fz = 36;
    plane(20, 16, M.pavement(), fx, 0.012, fz, s, 1.2);
    cyl(3, 3.2, 0.6, M.stone(), fx, 0.3, fz, s, 40);
    cyl(2.75, 2.75, 0.1, mat(0x3f6f86, { roughness: 0.05, metalness: 0.2, transparent: true, opacity: 0.85 }), fx, 0.56, fz, s, 40);
    cyl(0.35, 0.5, 1.6, M.stone(), fx, 1.1, fz, s, 20);
    cyl(1, 0.2, 0.3, M.stone(), fx, 2, fz, s, 24);
    const jet = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.3, 16, 1, true), new THREE.MeshStandardMaterial({ color: 0xdff3ff, transparent: true, opacity: 0.45, roughness: 0.1 }));
    jet.position.set(fx, 2.8, fz);
    jet.rotation.x = Math.PI;
    s.add(jet);
    p.updaters.push((dt, t) => { jet.scale.y = 1 + Math.sin(t * 5) * 0.08; });
    p.circles.push({ x: fx, z: fz, r: 3.2 });
    [[fx - 6, fz], [fx + 6, fz]].forEach(([bx, bz]) => {
      const bm = M.woodDark();
      box(0.5, 0.08, 2.2, bm, bx, 0.5, bz, s, true, 1);
      box(0.08, 0.5, 2.2, bm, bx + (bx < fx ? -0.25 : 0.25), 0.8, bz, s, true, 1);
      [-0.9, 0.9].forEach((o) => box(0.5, 0.5, 0.08, M.metal(), bx, 0.25, bz + o, s));
      p.solid(bx, bz, 0.7, 2.3, 1);
    });
  }

  // Trees and bushes (away from roads, buildings and park)
  const occupied = (x, z, m = 3) =>
    Math.abs(x) < 9 || Math.abs(z) < 9 ||
    p.colliders.some((c) => x > c.x1 - m && x < c.x2 + m && z > c.z1 - m && z < c.z2 + m) ||
    Math.hypot(x - 30, z - 36) < 11 || Math.hypot(x + 19, z + 10) < 3;
  let placed = 0;
  while (placed < 55) {
    const x = r() * 90 - 45, z = r() * 90 - 45;
    if (occupied(x, z)) continue;
    const sc = 0.8 + r() * 0.5;
    tree(s, x, z, sc, r);
    p.circles.push({ x, z, r: 0.3 * sc });
    placed++;
  }
  for (let i = 0; i < 25; i++) {
    const x = r() * 90 - 45, z = r() * 90 - 45;
    if (occupied(x, z, 1.5)) continue;
    bush(s, x, z, 1, r);
    p.circles.push({ x, z, r: 0.6 });
  }
  // outer ring of trees for depth
  for (let i = 0; i < 70; i++) {
    const a = r() * Math.PI * 2, dd = 52 + r() * 45;
    const x = Math.cos(a) * dd, z = Math.sin(a) * dd;
    if (Math.abs(x) < 7 || Math.abs(z) < 7) continue;
    tree(s, x, z, 1 + r() * 0.8, r);
  }
  // hedge along the city limits, with road barriers
  const hedge = M.leaves();
  [[0, -47.5, 95, 1.2], [0, 47.5, 95, 1.2], [-47.5, 0, 1.2, 95], [47.5, 0, 1.2, 95]].forEach(([hx, hz, w, d]) => {
    const segs = [];
    if (w > d) segs.push([hx - 27.25, 41.5], [hx + 27.25, 41.5]); else segs.push([hz - 27.25, 41.5], [hz + 27.25, 41.5]);
    segs.forEach(([c, len]) => {
      if (w > d) box(len, 1.3, 1.2, hedge, c, 0.65, hz, s, true, 1.5);
      else box(1.2, 1.3, len, hedge, hx, 0.65, c, s, true, 1.5);
    });
  });
  const stripe = document.createElement('canvas');
  stripe.width = 128; stripe.height = 16;
  const sg = stripe.getContext('2d');
  for (let i = 0; i < 8; i++) { sg.fillStyle = i % 2 ? '#d92b2b' : '#ffffff'; sg.fillRect(i * 16, 0, 16, 16); }
  const stripeTex = new THREE.CanvasTexture(stripe);
  stripeTex.colorSpace = THREE.SRGBColorSpace;
  const barrierMat = new THREE.MeshStandardMaterial({ map: stripeTex, roughness: 0.5 });
  [[0, -46.5, 0], [0, 46.5, 0], [-46.5, 0, Math.PI / 2], [46.5, 0, Math.PI / 2]].forEach(([bx, bz, ry]) => {
    const g = new THREE.Group();
    g.position.set(bx, 0, bz);
    g.rotation.y = ry;
    box(12, 0.35, 0.12, barrierMat, 0, 0.9, 0, g);
    [-5, 0, 5].forEach((o) => box(0.12, 0.9, 0.12, M.metal(), o, 0.45, 0, g));
    const closed = textSign('ROAD CLOSED', 2.4, 0.5, '#d92b2b', '#ffffff', 'bold 80px Arial, sans-serif');
    closed.position.set(0, 1.45, 0.07);
    g.add(closed);
    const back = closed.clone();
    back.rotation.y = Math.PI;
    back.position.z = -0.07;
    g.add(back);
    s.add(g);
  });

  // Street lamps on the outer edge of the sidewalks
  for (let i = -40; i <= 40; i += 13) {
    if (Math.abs(i) < 9) continue;
    streetLamp(s, i, 6.25, Math.PI);
    streetLamp(s, i, -6.25, 0);
    streetLamp(s, 6.25, i, -Math.PI / 2);
    streetLamp(s, -6.25, i, Math.PI / 2);
    p.circles.push({ x: i, z: 6.25, r: 0.12 }, { x: i, z: -6.25, r: 0.12 }, { x: 6.25, z: i, r: 0.12 }, { x: -6.25, z: i, r: 0.12 });
  }

  // ---- TRAFFIC: lights, cars and pedestrians
  const CYCLE = 20;
  const phase = (t) => {
    const c = t % CYCLE;
    if (c < 8) return { h: 'green', v: 'red' };
    if (c < 10) return { h: 'yellow', v: 'red' };
    if (c < 18) return { h: 'red', v: 'green' };
    return { h: 'red', v: 'yellow' };
  };
  const lights = [
    { axis: 'x', lamps: trafficLight(s, -6.25, 6.25, Math.PI / 2) },
    { axis: 'x', lamps: trafficLight(s, 6.25, -6.25, -Math.PI / 2) },
    { axis: 'z', lamps: trafficLight(s, 6.25, 6.25, Math.PI) },
    { axis: 'z', lamps: trafficLight(s, -6.25, -6.25, 0) },
  ];
  [[-6.25, 6.25], [6.25, -6.25], [6.25, 6.25], [-6.25, -6.25]].forEach(([x, z]) => p.circles.push({ x, z, r: 0.12 }));
  let time = 0;
  p.updaters.push((dt) => {
    time += dt;
    const ph = phase(time);
    lights.forEach(({ axis, lamps }) => {
      const st = axis === 'x' ? ph.h : ph.v;
      lamps[0].emissiveIntensity = st === 'red' ? 3 : 0;
      lamps[1].emissiveIntensity = st === 'yellow' ? 3 : 0;
      lamps[2].emissiveIntensity = st === 'green' ? 3 : 0;
    });
  });

  // pedestrians walk on the sidewalks; one lane per direction so they never cross each other
  const peds = [];
  const pedRoutes = [
    { axis: 'x', side: 1, from: -44, to: 44 },
    { axis: 'x', side: -1, from: -44, to: 44 },
    { axis: 'x', side: 1, from: -44, to: 44 },
    { axis: 'z', side: 1, from: 8, to: 44 },
    { axis: 'z', side: -1, from: -44, to: -8 },
  ];
  const shirts = [0x2e5c8a, 0x3f7d5c, 0x8a2e2e, 0xc8b28a, 0x4b3d6e];
  const skins = [0xd9a07c, 0x8d5524, 0xf1c9a5, 0xc68642, 0xe8b996];
  pedRoutes.forEach((route, i) => {
    const npc = new Character({
      shirt: shirts[i], skin: skins[i], hair: [0x2a1a10, 0x111111, 0x6b4a2b, 0x3a2615, 0x9a7b4f][i],
      shorts: [0x1f2733, 0x3b3b3b, 0x2c3e2d, 0x1a1a1a, 0x4a3b2a][i], muscles: [[10, 20, 30][i % 3], [10, 20, 30][(i + 1) % 3], [10, 20, 30][(i + 2) % 3]],
    });
    npc.root.scale.setScalar(0.94 + r() * 0.1);
    s.add(npc.root);
    const ped = {
      npc, route, dir: i % 2 ? -1 : 1, u: route.from + (route.to - route.from) * (0.15 + 0.3 * i % 1), lane: 0,
      speed: 1.2 + r() * 0.5, cur: 0, pos: npc.root.position,
    };
    ped.lane = ped.dir > 0 ? 4.55 : 5.45;
    peds.push(ped);
  });
  const H_WALK = (ph) => ph.h === 'green';
  const V_WALK = (ph) => ph.v === 'green';
  p.updaters.push((dt) => {
    const ph = phase(time);
    const player = p.playerPos;
    peds.forEach((pd) => {
      const { route } = pd;
      const targetLane = pd.dir > 0 ? 4.55 : 5.45;
      pd.lane += (targetLane - pd.lane) * Math.min(1, dt * 2);
      // coordinates: u along the route, w across it
      const toXZ = (u, w) => (route.axis === 'x' ? [u, route.side * w] : [route.side * w, u]);
      let want = pd.speed;
      // wait at the crossing if pedestrians can't go
      const next = pd.u + pd.dir * 1.2;
      const atKerb = Math.abs(pd.u) > 4.2 && Math.abs(next) <= 4.4;
      if (atKerb && !(route.axis === 'x' ? H_WALK(ph) : V_WALK(ph))) want = 0;
      // don't walk into the player or other people
      const [fx, fz] = toXZ(pd.u + pd.dir * 0.9, pd.lane);
      const blocked = (px, pz) => Math.hypot(px - fx, pz - fz) < 0.75;
      if (player && blocked(player.x, player.z)) want = 0;
      if (peds.some((o) => o !== pd && blocked(o.pos.x, o.pos.z))) want = 0;
      pd.cur += (want - pd.cur) * Math.min(1, dt * 6);
      pd.u += pd.dir * pd.cur * dt;
      if (pd.u > route.to) { pd.u = route.to; pd.dir = -1; }
      if (pd.u < route.from) { pd.u = route.from; pd.dir = 1; }
      const [x, z] = toXZ(pd.u, pd.lane);
      pd.pos.set(x, Math.abs(pd.u) > 4 && Math.abs(pd.u) < 128 ? 0.15 : 0, z);
      if (route.axis === 'x') pd.pos.y = Math.abs(x) >= 4 ? 0.15 : 0;
      else pd.pos.y = Math.abs(z) >= 4 ? 0.15 : 0;
      const ang = route.axis === 'x' ? (pd.dir > 0 ? Math.PI / 2 : -Math.PI / 2) : (pd.dir > 0 ? 0 : Math.PI);
      let diff = ang - pd.npc.root.rotation.y;
      diff = Math.atan2(Math.sin(diff), Math.cos(diff));
      pd.npc.root.rotation.y += diff * Math.min(1, dt * 8);
      pd.npc.setPose('walk');
      pd.npc.update(dt, pd.cur * 2.4);
    });
  });
  p.dynamic.push(() => peds.map((pd) => ({ x: pd.pos.x, z: pd.pos.z, r: 0.32, owner: pd })));

  // cars: right-hand traffic, stop at red lights and for anyone in front of them
  const cars = [];
  const colors = [0x9b1c1c, 0x1d3f73, 0xd8d8d8, 0x1f1f1f, 0x2f5d4e, 0x8a8f96, 0xb58b2a];
  for (let i = 0; i < 7; i++) {
    const c = car(colors[i]);
    const axis = i % 2 ? 'x' : 'z';
    const dir = i % 4 < 2 ? 1 : -1;
    c.userData = { axis, dir, u: -110 + i * 33, v: 0, max: 10 + (i % 3) * 2.5 };
    s.add(c);
    cars.push(c);
  }
  const carPose = (c) => {
    const d = c.userData;
    const pos = d.dir * d.u;
    if (d.axis === 'x') { c.position.set(pos, 0, d.dir * 2); c.rotation.y = d.dir * Math.PI / 2; }
    else { c.position.set(-d.dir * 2, 0, pos); c.rotation.y = d.dir > 0 ? 0 : Math.PI; }
  };
  p.updaters.push((dt) => {
    const ph = phase(time);
    cars.forEach((c) => {
      const d = c.userData;
      let target = d.max;
      // traffic light: stop line at u = -7.2, car front is 2.2 m ahead of its centre
      const green = (d.axis === 'x' ? ph.h : ph.v) === 'green';
      if (!green && d.u < -9.2 && d.u > -40) target = Math.min(target, Math.max(0, (-9.6 - d.u) * 1.2));
      // vehicles ahead in the same lane
      cars.forEach((o) => {
        const od = o.userData;
        if (o === c || od.axis !== d.axis || od.dir !== d.dir) return;
        const gap = od.u - d.u;
        if (gap > 0 && gap < 25) target = Math.min(target, Math.max(0, (gap - 6) * 1.5));
      });
      // people in front (player and pedestrians)
      const fwd = d.axis === 'x' ? [d.dir, 0] : [0, d.dir];
      const check = (px, pz) => {
        const rx = px - c.position.x, rz = pz - c.position.z;
        const ahead = rx * fwd[0] + rz * fwd[1];
        const side = Math.abs(rx * fwd[1] - rz * fwd[0]);
        if (ahead > 0 && ahead < 9 && side < 1.6) target = Math.min(target, Math.max(0, (ahead - 3.2) * 1.5));
      };
      if (p.playerPos) check(p.playerPos.x, p.playerPos.z);
      peds.forEach((pd) => check(pd.pos.x, pd.pos.z));
      d.v += Math.max(-14 * dt, Math.min(5 * dt, target - d.v));
      d.u += d.v * dt;
      if (d.u > 125) d.u = -125;
      carPose(c);
    });
  });
  p.dynamic.push(() => cars.map((c) => {
    const x = c.position.x, z = c.position.z;
    const [hw, hl] = [1.0, 2.25];
    return c.userData.axis === 'x'
      ? { x1: x - hl, x2: x + hl, z1: z - hw, z2: z + hw, owner: c }
      : { x1: x - hw, x2: x + hw, z1: z - hl, z2: z + hl, owner: c };
  }));

  p.spawn = { x: -19, z: -9, rot: 0 };
  return p;
}

// ---------------------------------------------------------------- INTERIORS
function room(p, w, d, floorMat, wallMat, opts = {}) {
  const s = p.scene;
  s.background = new THREE.Color(opts.bg || 0x15171b);
  s.add(new THREE.HemisphereLight(0xfff6ea, 0x3a3530, 0.35));
  const l = new THREE.DirectionalLight(0xfff4e6, 1.4);
  l.position.set(3, 12, 6);
  l.castShadow = true;
  l.shadow.mapSize.set(2048, 2048);
  l.shadow.bias = -0.0004;
  l.shadow.normalBias = 0.03;
  Object.assign(l.shadow.camera, { left: -12, right: 12, top: 12, bottom: -12 });
  s.add(l);
  // ceiling lights (the ceiling itself is left open for the camera)
  const lamps = opts.lamps || [[-w / 4, -d / 6], [w / 4, -d / 6], [0, d / 4]];
  lamps.forEach(([x, z]) => {
    const pl = new THREE.PointLight(opts.lampColor || 0xffe7c4, opts.lampPower || 14, 11, 1.6);
    pl.position.set(x, 2.9, z);
    s.add(pl);
  });
  plane(w, d, floorMat, 0, 0, 0, s, opts.floorRep || 2);
  // walls: back and sides, with a skirting board
  const H = 3.2;
  box(w + 0.3, H, 0.3, wallMat, 0, H / 2, -d / 2 - 0.15, s, true, 2);
  box(0.3, H, d, wallMat, -w / 2 - 0.15, H / 2, 0, s, true, 2);
  box(0.3, H, d, wallMat, w / 2 + 0.15, H / 2, 0, s, true, 2);
  const skirt = mat(opts.skirt || 0xf2efe8, { roughness: 0.5 });
  box(w, 0.12, 0.03, skirt, 0, 0.06, -d / 2 + 0.015, s, false);
  box(0.03, 0.12, d, skirt, -w / 2 + 0.015, 0.06, 0, s, false);
  box(0.03, 0.12, d, skirt, w / 2 - 0.015, 0.06, 0, s, false);
  // low front wall with an opening (solid for collisions)
  const fw = w / 2 - 1.5;
  box(fw, 0.6, 0.3, wallMat, -w / 4 - 0.75, 0.3, d / 2 + 0.15, s, true, 2);
  box(fw, 0.6, 0.3, wallMat, w / 4 + 0.75, 0.3, d / 2 + 0.15, s, true, 2);
  p.solid(-w / 4 - 0.75, d / 2 + 0.15, fw, 0.3);
  p.solid(w / 4 + 0.75, d / 2 + 0.15, fw, 0.3);
  p.bounds = { x1: -w / 2, z1: -d / 2, x2: w / 2, z2: d / 2 + 0.6 };
  // doormat at the exit
  box(2.2, 0.03, 1.1, tmat('doormat', tex.fabric('#5a3a2a', [3, 2]), { roughness: 1 }), 0, 0.015, d / 2 - 0.65, s, false);
  p.interact(0, d / 2 - 0.65, 'Go outside', 'exit', null, 1.4);
  p.spawn = { x: 0, z: d / 2 - 2, rot: Math.PI };
  p.camDist = 8.5;
  p.camHeight = 6.5;
}

function burger(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  const bun = mat(0xc98a45, { roughness: 0.6 });
  cyl(0.3, 0.3, 0.08, bun, 0, 0.04, 0, g);
  cyl(0.32, 0.32, 0.08, mat(0x4a2a17, { roughness: 0.8 }), 0, 0.12, 0, g);
  cyl(0.34, 0.33, 0.02, mat(0xf2b624, { roughness: 0.4 }), 0, 0.17, 0, g);
  cyl(0.34, 0.34, 0.02, mat(0x5d9e3a, { roughness: 0.6 }), 0, 0.19, 0, g);
  const top = new THREE.Mesh(new THREE.SphereGeometry(0.31, 20, 10, 0, Math.PI * 2, 0, Math.PI / 2), bun);
  top.position.y = 0.2;
  top.scale.y = 0.75;
  top.castShadow = true;
  g.add(top);
  parent.add(g);
  return g;
}

function broccoli(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  cyl(0.06, 0.09, 0.32, mat(0x9bbf5a), 0, 0.16, 0, g, 10);
  const head = mat(0x2f6b2a, { roughness: 1 });
  [[0, 0.4, 0, 0.18], [0.13, 0.35, 0.05, 0.13], [-0.13, 0.35, 0, 0.14], [0, 0.35, 0.13, 0.12], [0, 0.35, -0.12, 0.12]]
    .forEach(([a, b, c, r]) => sphere(r, head, a, b, c, g, 12));
  parent.add(g);
  return g;
}

function steak(parent, x, y, z, s = 1) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  g.scale.setScalar(s);
  const m = sphere(0.3, mat(0x8e2324, { roughness: 0.45 }), 0, 0.06, 0, g, 20);
  m.scale.set(1.2, 0.22, 0.9);
  const f = sphere(0.12, mat(0xf0dccb, { roughness: 0.5 }), 0.27, 0.06, 0, g, 12);
  f.scale.set(1, 0.4, 1);
  const bone = cyl(0.03, 0.03, 0.28, mat(0xf2ede2), 0.38, 0.06, 0, g, 8);
  bone.rotation.z = Math.PI / 2;
  parent.add(g);
  return g;
}

export const FOOD_MODELS = { hamburger: burger, broccoli, meat: steak };

export function buildHome() {
  const p = new Place('home', 'home');
  room(p, 14, 11, M.woodFloor(), M.plasterCream(), { bg: 0x1b1712, floorRep: 2.5 });
  const s = p.scene;
  // bed
  const wood = M.woodDark();
  box(2.4, 0.45, 3.4, wood, -4.5, 0.22, -3.3, s, true, 1);
  box(2.2, 0.28, 3.2, mat(0xf4f2ee, { roughness: 1 }), -4.5, 0.58, -3.3, s);
  box(2.24, 0.1, 2.1, tmat('duvet', tex.fabric('#34507a', [6, 6]), { roughness: 1 }), -4.5, 0.76, -2.75, s);
  const pillow = sphere(0.35, mat(0xffffff, { roughness: 1 }), -4.5, 0.82, -4.5, s);
  pillow.scale.set(2, 0.35, 0.9);
  box(2.4, 1.3, 0.12, wood, -4.5, 0.65, -5.02, s, true, 1);
  box(0.5, 0.5, 0.5, wood, -6.2, 0.25, -4.7, s, true, 1);
  const lampShade = cyl(0.12, 0.18, 0.25, mat(0xf3e7c8, { emissive: 0xffd9a0, emissiveIntensity: 0.4 }), -6.2, 0.75, -4.7, s);
  lampShade.castShadow = false;
  p.solid(-4.5, -3.3, 2.4, 3.4);
  p.solid(-6.2, -4.7, 0.5, 0.5);
  p.interact(-3.0, -1.2, 'Sleep (next day)', 'sleep', null, 1.6);
  p.bedPos = { x: -4.5, z: -3.3 };
  // fridge
  const white = mat(0xeef1f3, { roughness: 0.25, metalness: 0.3 });
  box(1.1, 2.1, 0.9, white, 5.6, 1.05, -4.9, s);
  box(1.08, 0.02, 0.02, mat(0x999999), 5.6, 1.45, -4.44, s, false);
  box(0.05, 0.5, 0.05, M.chrome(), 5.15, 1.75, -4.42, s, false);
  box(0.05, 0.5, 0.05, M.chrome(), 5.15, 1.05, -4.42, s, false);
  p.solid(5.6, -4.9, 1.1, 0.9);
  p.interact(5.6, -3.6, 'Fridge: eat something', 'fridge', null, 1.4);
  // kitchen counter
  box(3, 0.9, 0.7, tmat('cabinet', tex.wood('#d8c7a8'), { roughness: 0.5 }), 3.3, 0.45, -5.0, s, true, 1);
  box(3.05, 0.06, 0.75, mat(0x2f3134, { roughness: 0.2 }), 3.3, 0.93, -5.0, s);
  cyl(0.18, 0.18, 0.02, M.chrome(), 3.8, 0.97, -5.0, s);
  p.solid(3.3, -5.0, 3, 0.7);
  // sofa and TV
  const sofa = tmat('sofa', tex.fabric('#6b6f75', [3, 3]), { roughness: 1 });
  box(3, 0.45, 1, sofa, 0.5, 0.3, 0.9, s, true, 1);
  box(3, 0.7, 0.25, sofa, 0.5, 0.7, 1.35, s, true, 1);
  box(0.25, 0.6, 1, sofa, -0.9, 0.5, 0.9, s, true, 1);
  box(0.25, 0.6, 1, sofa, 1.9, 0.5, 0.9, s, true, 1);
  p.solid(0.5, 1.0, 3.1, 1.2);
  box(2.4, 1.4, 0.06, mat(0x0c0c0c, { roughness: 0.2 }), 0.5, 1.7, -5.28, s);
  const screen = new THREE.Mesh(new THREE.PlaneGeometry(2.3, 1.3), new THREE.MeshStandardMaterial({ color: 0x000000, emissive: 0x2255aa, emissiveIntensity: 1 }));
  screen.position.set(0.5, 1.7, -5.24);
  s.add(screen);
  p.updaters.push((dt, t) => screen.material.emissive.setHSL((t * 0.03) % 1, 0.5, 0.3 + Math.sin(t * 5) * 0.03));
  box(2, 0.45, 0.45, wood, 0.5, 0.22, -5.05, s, true, 1);
  p.solid(0.5, -5.05, 2, 0.45);
  box(3.4, 0.01, 2.4, tmat('rug', tex.fabric('#a57a52', [8, 6]), { roughness: 1 }), 0.5, 0.005, -2, s, false);
  p.interact(0.5, -0.4, 'Watch TV: gym legends', 'tv', null, 1.4);
  // mirror
  const mirror = box(1.1, 2, 0.04, M.mirror(), 6.97, 1.3, 1, s);
  mirror.rotation.y = Math.PI / 2;
  box(0.06, 2.1, 1.2, wood, 6.99, 1.3, 1, s, false);
  p.interact(6.0, 1, 'Mirror: strike a pose', 'mirror', null, 1.3);
  // plant
  cyl(0.28, 0.22, 0.55, mat(0xb8643a, { roughness: 0.8 }), -6.2, 0.28, 4.5, s);
  for (let i = 0; i < 5; i++) sphere(0.3, M.leaves(), -6.2 + Math.cos(i) * 0.15, 0.85 + i * 0.12, 4.5 + Math.sin(i) * 0.15, s, 10);
  p.circles.push({ x: -6.2, z: 4.5, r: 0.35 });
  // wall frames
  [[-2, 'SUNSET'], [3.5, 'MOUNTAINS']].forEach(([fx], i) => {
    box(1.2, 0.8, 0.04, mat(0x2a2016), fx, 2.1, -5.48, s, false);
    const art = new THREE.Mesh(new THREE.PlaneGeometry(1.05, 0.65), mat([0xc97b4a, 0x5a7d9a][i], { roughness: 0.6 }));
    art.position.set(fx, 2.1, -5.455);
    s.add(art);
  });
  return p;
}

export function buildGym() {
  const p = new Place('gym', 'gym');
  room(p, 18, 13, M.rubber(), M.plasterGrey(), { bg: 0x0f1012, floorRep: 1, lampColor: 0xf2f6ff, lampPower: 16, skirt: 0x222222, lamps: [[-5, -2], [0, -2], [5, -2], [-5, 3], [5, 3]] });
  const s = p.scene;
  // wall mirrors
  const mirror = box(13.5, 2, 0.04, M.mirror(), 0, 1.4, -6.48, s, false);
  mirror.castShadow = false;
  box(13.7, 0.06, 0.08, M.metal(), 0, 2.43, -6.46, s, false);
  box(13.7, 0.06, 0.08, M.metal(), 0, 0.37, -6.46, s, false);
  const sign = textSign('NO PAIN NO GAIN', 5, 0.55, '#111214', '#f2b705', 'bold 64px Impact, "Arial Black", sans-serif', true);
  sign.position.set(0, 2.85, -6.47);
  s.add(sign);
  // ceiling light strips
  [-5, 0, 5].forEach((x) => {
    const n = box(3, 0.05, 0.25, mat(0xffffff, { emissive: 0xf2f6ff, emissiveIntensity: 2 }), x, 3.15, -2, s, false);
    n.castShadow = false;
  });
  const steel = M.metal();
  const labelMat = (t) => textSign(t, 1.6, 0.3, '#111214', '#e6e6e6', 'bold 56px Arial, sans-serif');

  // Squat rack
  {
    const g = new THREE.Group();
    g.position.set(-5.5, 0, -3.5);
    s.add(g);
    [[-1.1, -0.6], [1.1, -0.6], [-1.1, 0.6], [1.1, 0.6]].forEach(([x, z]) => box(0.09, 2.6, 0.09, steel, x, 1.3, z, g));
    box(2.4, 0.08, 0.08, steel, 0, 2.6, -0.6, g);
    box(2.4, 0.08, 0.08, steel, 0, 2.6, 0.6, g);
    [-1.1, 1.1].forEach((x) => box(0.08, 0.08, 1.3, steel, x, 2.6, 0, g));
    [-1.1, 1.1].forEach((x) => box(0.12, 0.06, 0.2, steel, x, 1.45, 0.1, g));
    box(2.6, 0.03, 1.6, tmat('platform', tex.wood('#6d5236'), { roughness: 0.7 }), 0, 0.015, 0, g, false, 1);
    const barbell = makeBarbell(2.2);
    barbell.position.set(0, 1.5, 0.1);
    g.add(barbell);
    p.solid(-5.5, -3.5, 2.4, 1.3);
    p.squat = { group: g, barbell };
    const lab = labelMat('SQUAT');
    lab.position.set(0, 2.85, 0.62);
    g.add(lab);
    p.interact(-5.5, -1.8, 'Squat (legs)', 'workout', 'squat');
  }
  // Bench press
  {
    const g = new THREE.Group();
    g.position.set(0, 0, -3.3);
    s.add(g);
    box(0.5, 0.1, 1.9, mat(0x1b1b1d, { roughness: 0.5 }), 0, 0.5, 0.3, g);
    box(0.08, 0.45, 0.08, steel, 0, 0.22, -0.4, g);
    box(0.08, 0.45, 0.08, steel, 0, 0.22, 1, g);
    box(0.5, 0.04, 0.08, steel, 0, 0.02, -0.4, g);
    box(0.5, 0.04, 0.08, steel, 0, 0.02, 1, g);
    [-0.55, 0.55].forEach((x) => box(0.07, 1.4, 0.07, steel, x, 0.7, -0.2, g));
    const barbell = makeBarbell(2.2);
    barbell.position.set(0, 1.4, -0.15);
    g.add(barbell);
    p.solid(0, -3.1, 1.3, 2.4);
    p.bench = { group: g, barbell };
    const lab = labelMat('BENCH PRESS');
    lab.position.set(0, 1.75, -0.25);
    g.add(lab);
    p.interact(1.6, -1.6, 'Bench press (chest)', 'workout', 'bench');
  }
  // Lat pulldown
  {
    const g = new THREE.Group();
    g.position.set(5.5, 0, -3.8);
    s.add(g);
    box(0.1, 3, 0.1, steel, 0, 1.5, -0.8, g);
    box(0.1, 0.1, 1.6, steel, 0, 3, 0, g);
    box(0.6, 0.1, 0.6, mat(0x1b1b1d, { roughness: 0.5 }), 0, 0.5, 0.35, g);
    box(0.08, 0.5, 0.08, steel, 0, 0.25, 0.35, g);
    const pad = cyl(0.07, 0.07, 0.5, mat(0x1b1b1d, { roughness: 0.5 }), 0, 0.82, 0.8, g, 12);
    pad.rotation.z = Math.PI / 2;
    const cable = box(0.015, 1, 0.015, M.chrome(), 0, 2.5, 0.6, g, false);
    const handle = cyl(0.02, 0.02, 1.5, M.chrome(), 0, 2, 0.6, g, 8);
    handle.rotation.z = Math.PI / 2;
    for (let i = 0; i < 8; i++) box(0.45, 0.07, 0.25, mat(0x2a2a2d, { roughness: 0.4, metalness: 0.6 }), 0, 0.1 + i * 0.075, -0.55, g);
    p.solid(5.5, -3.8, 1, 2);
    p.lat = { group: g, cable, handle };
    const lab = labelMat('LAT PULLDOWN');
    lab.position.set(0, 3.25, 0.1);
    g.add(lab);
    p.interact(4.0, -2.0, 'Lat pulldown (back)', 'workout', 'lat');
  }
  // dumbbell rack
  box(4, 0.08, 0.7, steel, 6, 0.8, 3.5, s);
  box(4, 0.08, 0.7, steel, 6, 0.4, 3.5, s);
  [-1.9, 1.9].forEach((o) => box(0.08, 0.85, 0.7, steel, 6 + o, 0.42, 3.5, s));
  p.solid(6, 3.5, 4, 0.8);
  for (let i = 0; i < 6; i++) {
    const db = makeBarbell(0.45, 0.08 + i * 0.012, true);
    db.position.set(4.4 + i * 0.64, 0.95, 3.5);
    db.rotation.y = Math.PI / 2;
    s.add(db);
  }
  // plate tree and water cooler
  cyl(0.03, 0.03, 1.2, steel, 7.8, 0.6, -1, s, 8);
  for (let i = 0; i < 3; i++) {
    const pl = cyl(0.25 - i * 0.03, 0.25 - i * 0.03, 0.05, mat(0x151515, { roughness: 0.6 }), 7.8, 0.5 + i * 0.25, -1, s, 24);
    pl.rotation.x = Math.PI / 2;
  }
  p.circles.push({ x: 7.8, z: -1, r: 0.35 });
  box(0.4, 1.1, 0.4, mat(0xdcdcdc, { roughness: 0.3 }), -8.3, 0.55, 0, s);
  cyl(0.15, 0.15, 0.4, mat(0x6fb3e0, { transparent: true, opacity: 0.7, roughness: 0.05 }), -8.3, 1.3, 0, s, 16);
  p.circles.push({ x: -8.3, z: 0, r: 0.35 });
  // the gym bro
  const bro = new Character({ shirtless: true, shorts: 0x7a1f1f, skin: 0x8d5524, hair: 0x0c0c0c, muscles: [90, 95, 90] });
  bro.root.position.set(-6, 0, 3.5);
  bro.root.rotation.y = Math.PI / 2;
  s.add(bro.root);
  p.circles.push({ x: -6, z: 3.5, r: 0.5 });
  bro.setPose('flex');
  p.interact(-4.6, 3.5, 'Talk to your gym bro', 'bro', null, 1.5);
  p.updaters.push((dt) => bro.update(dt));
  return p;
}

export function makeBarbell(len, plateR = 0.225, dumbbell = false) {
  const g = new THREE.Group();
  const bar = cyl(0.016, 0.016, len, M.chrome(), 0, 0, 0, g, 10);
  bar.rotation.z = Math.PI / 2;
  const rubber = mat(0x151515, { roughness: 0.6 });
  [-1, 1].forEach((sd) => {
    const off = dumbbell ? len / 2 - 0.06 : len / 2 - 0.25;
    const pl = cyl(plateR, plateR, 0.06, rubber, sd * off, 0, 0, g, 28);
    pl.rotation.z = Math.PI / 2;
    if (!dumbbell) {
      const pl2 = cyl(plateR * 0.85, plateR * 0.85, 0.05, rubber, sd * (off - 0.07), 0, 0, g, 28);
      pl2.rotation.z = Math.PI / 2;
      const collar = cyl(0.03, 0.03, 0.05, M.chrome(), sd * (off - 0.13), 0, 0, g, 12);
      collar.rotation.z = Math.PI / 2;
    }
  });
  return g;
}

export function buildShop() {
  const p = new Place('shop', 'shop');
  room(p, 16, 12, M.tiles(), M.plasterGreen(), { bg: 0x13181a, floorRep: 1, lampColor: 0xf6fbff, lampPower: 16 });
  const s = p.scene;
  const foods = [['hamburger', -4.5, 'BURGERS'], ['broccoli', 0, 'VEGETABLES'], ['meat', 4.5, 'BUTCHER']];
  foods.forEach(([id, x, label]) => {
    // counter
    box(2.8, 0.95, 1.1, mat(0xf4f4f2, { roughness: 0.35 }), x, 0.475, -3.5, s);
    box(2.9, 0.05, 1.2, mat(0x2b2d31, { roughness: 0.2 }), x, 0.97, -3.5, s);
    p.solid(x, -3.5, 2.8, 1.1);
    for (let k = -1; k <= 1; k++) FOOD_MODELS[id](s, x + k * 0.8, 1.0, -3.5, 0.85);
    // shelf behind
    box(2.8, 2.5, 0.5, mat(0xdcdfe2, { roughness: 0.5, metalness: 0.3 }), x, 1.25, -5.7, s);
    for (let sh = 0; sh < 3; sh++) {
      box(2.7, 0.04, 0.5, mat(0xb9bdc2, { metalness: 0.5, roughness: 0.4 }), x, 0.55 + sh * 0.72, -5.45, s);
      for (let k = 0; k < 6; k++) {
        const c = [0xb3312d, 0xd88c3a, 0x2c7a70, 0xd8b54a, 0x3b5f84, 0xe8e2d4][(k + sh) % 6];
        box(0.3, 0.38, 0.28, mat(c, { roughness: 0.5 }), x - 1.1 + k * 0.44, 0.77 + sh * 0.72, -5.4, s);
      }
    }
    const lab = textSign(label, 2.2, 0.35, '#2e7d4f', '#ffffff', 'bold 56px Arial, sans-serif');
    lab.position.set(x, 2.8, -5.44);
    s.add(lab);
    p.interact(x, -2.2, 'Buy', 'buy', id, 1.4);
  });
  // checkout with the cashier behind it
  box(3, 0.95, 0.9, mat(0x3a4048, { roughness: 0.4 }), 5, 0.475, 2.5, s);
  box(3.05, 0.04, 0.95, mat(0x1c1c1c, { roughness: 0.2 }), 5, 0.97, 2.5, s);
  box(0.4, 0.3, 0.3, mat(0x1c1c1c, { roughness: 0.3 }), 5.8, 1.13, 2.5, s);
  p.solid(5, 2.5, 3, 0.9);
  p.solid(5, 1.5, 1, 1);
  const clerk = new Character({ shirt: 0x2e7d4f, skin: 0xf1c27d, hair: 0x6b4a2b });
  clerk.root.position.set(5, 0, 1.5);
  s.add(clerk.root);
  p.updaters.push((dt) => clerk.update(dt));
  // fruit crates
  [[-5.5, 3], [-3.5, 3]].forEach(([x, z], i) => {
    box(1.6, 0.7, 1.2, tmat('crate', tex.wood('#a57b4f'), { roughness: 0.8 }), x, 0.35, z, s, true, 1);
    p.solid(x, z, 1.6, 1.2);
    for (let k = 0; k < 12; k++) {
      sphere(0.13, mat(i ? 0xe0741f : 0xd8b52a, { roughness: 0.5 }), x - 0.6 + (k % 4) * 0.4, 0.8, z - 0.35 + Math.floor(k / 4) * 0.35, s, 12);
    }
  });
  return p;
}

export function buildBank() {
  const p = new Place('bank', 'bank');
  room(p, 16, 12, M.marble(), M.plasterWhite(), { bg: 0x121214, floorRep: 2, lampColor: 0xffe2b8, lampPower: 14 });
  const s = p.scene;
  // counter
  const wood = M.woodDark();
  box(9, 1.1, 0.9, wood, -1.5, 0.55, -3.2, s, true, 1);
  box(9.2, 0.06, 1.1, M.marble(), -1.5, 1.13, -3.2, s, true, 1);
  p.solid(-1.5, -3.2, 9, 0.9);
  const brass = mat(0xc9a14a, { roughness: 0.3, metalness: 1 });
  for (let i = -2; i <= 2; i++) box(0.04, 0.9, 0.04, brass, -1.5 + i * 2, 1.6, -3.2, s);
  box(9, 0.04, 0.04, brass, -1.5, 2.05, -3.2, s);
  const glassPane = new THREE.Mesh(new THREE.PlaneGeometry(8.8, 0.9), new THREE.MeshStandardMaterial({ color: 0xcfe3ea, transparent: true, opacity: 0.18, roughness: 0.05 }));
  glassPane.position.set(-1.5, 1.6, -3.2);
  s.add(glassPane);
  const teller = new Character({ shirt: 0x1d2c44, skin: 0xffdbac, hair: 0x9a7b4f });
  teller.root.position.set(-3, 0, -4.2);
  s.add(teller.root);
  p.updaters.push((dt) => teller.update(dt));
  // investment screen
  const scr = textSign('INVESTMENTS', 3.2, 1.1, '#0b1a2e', '#e9c46a', 'bold 72px Arial, sans-serif', true);
  scr.position.set(-3, 2.5, -5.98);
  s.add(scr);
  p.interact(-3, -1.8, 'Invest (plane game)', 'plane', null, 1.5);
  // work desk
  box(2.2, 0.06, 1.1, wood, 3.5, 0.9, -3.2, s, true, 1);
  [[-1, -0.45], [1, -0.45], [-1, 0.45], [1, 0.45]].forEach(([dx, dz]) => box(0.06, 0.88, 0.06, M.metal(), 3.5 + dx, 0.44, -3.2 + dz, s));
  for (let k = 0; k < 4; k++) box(0.34, 0.04 + k * 0.02, 0.16, mat(0x7fa37a, { roughness: 0.8 }), 3 + k * 0.3, 0.95 + k * 0.01, -3.2, s);
  p.solid(3.5, -3.2, 2.2, 1.1);
  p.interact(3.5, -1.8, 'Work: count banknotes', 'work', null, 1.5);
  // vault door
  const vault = cyl(1.5, 1.5, 0.3, mat(0x9ea3a8, { roughness: 0.3, metalness: 0.9 }), 5.5, 1.7, -5.9, s, 40);
  vault.rotation.x = Math.PI / 2;
  const wheel = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.05, 10, 32), M.chrome());
  wheel.position.set(5.5, 1.7, -5.7);
  s.add(wheel);
  for (let i = 0; i < 3; i++) {
    const spoke = box(0.9, 0.04, 0.04, M.chrome(), 0, 0, 0, null, false);
    spoke.rotation.z = (i * Math.PI) / 3;
    wheel.add(spoke);
  }
  p.updaters.push((dt, t) => { wheel.rotation.z = t * 0.3; });
  // columns
  [[-6.5, 2], [6.5, 2]].forEach(([x, z]) => {
    cyl(0.35, 0.4, 3.2, mat(0xf1ece0, { roughness: 0.5 }), x, 1.6, z, s, 24);
    p.circles.push({ x, z, r: 0.42 });
  });
  return p;
}
