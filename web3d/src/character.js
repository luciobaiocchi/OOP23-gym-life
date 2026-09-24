import * as THREE from 'three';

// Human characters sculpted from code.
// The body is a signed distance field made of anatomical muscles (pecs, abs,
// obliques, serratus, lats, traps, deltoid heads, biceps, triceps, quads,
// hamstrings, calves...) blended with tight creases so each muscle stays
// readable. It is polygonised with surface nets, shaded with baked cavity
// occlusion and bound to a skeleton. Head, hands and sneakers are finer
// rigid meshes attached to their bones. Muscles grow with the stats.

// ---------------------------------------------------------------- SDF PRIMITIVES
const smin = (a, b, k) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
};

const V = (x, y, z) => new THREE.Vector3(x, y, z);
const AX = { x: V(1, 0, 0), y: V(0, 1, 0), z: V(0, 0, 1) };

// Oriented ellipsoid: `dir` is the long axis (radius r[1]), `fwd` hints the depth axis (radius r[2])
function ell(c, r, opts = {}) {
  const v = (opts.dir || AX.y).clone().normalize();
  const hint = (opts.fwd || AX.z).clone();
  const w = hint.sub(v.clone().multiplyScalar(hint.dot(v))).normalize();
  const u = new THREE.Vector3().crossVectors(v, w);
  return {
    t: 0, cx: c.x, cy: c.y, cz: c.z, ux: u.x, uy: u.y, uz: u.z, vx: v.x, vy: v.y, vz: v.z, wx: w.x, wy: w.y, wz: w.z,
    rx: r[0], ry: r[1], rz: r[2], k: opts.k ?? 0.02, sub: !!opts.sub, bone: opts.bone ?? 0, region: opts.region || 'skin',
  };
}

// Capsule with a radius changing linearly from a to b
function cone(a, b, ra, rb, opts = {}) {
  const bx = b.x - a.x, by = b.y - a.y, bz = b.z - a.z;
  return {
    t: 1, ax: a.x, ay: a.y, az: a.z, bx, by, bz, l2: bx * bx + by * by + bz * bz || 1e-9, ra, rb,
    k: opts.k ?? 0.02, sub: !!opts.sub, bone: opts.bone ?? 0, region: opts.region || 'skin',
  };
}

function dist(p, x, y, z) {
  if (p.t === 0) {
    const dx = x - p.cx, dy = y - p.cy, dz = z - p.cz;
    const lx = (dx * p.ux + dy * p.uy + dz * p.uz) / p.rx;
    const ly = (dx * p.vx + dy * p.vy + dz * p.vz) / p.ry;
    const lz = (dx * p.wx + dy * p.wy + dz * p.wz) / p.rz;
    const k0 = Math.sqrt(lx * lx + ly * ly + lz * lz);
    const k1 = Math.sqrt((lx / p.rx) ** 2 + (ly / p.ry) ** 2 + (lz / p.rz) ** 2);
    return k1 > 1e-9 ? (k0 * (k0 - 1)) / k1 : -Math.min(p.rx, p.ry, p.rz);
  }
  const px = x - p.ax, py = y - p.ay, pz = z - p.az;
  const h = Math.max(0, Math.min(1, (px * p.bx + py * p.by + pz * p.bz) / p.l2));
  const qx = px - p.bx * h, qy = py - p.by * h, qz = pz - p.bz * h;
  return Math.sqrt(qx * qx + qy * qy + qz * qz) - (p.ra + (p.rb - p.ra) * h);
}

// bounding boxes so distant primitives are skipped
function prepare(prims) {
  for (const p of prims) {
    const m = Math.max(p.k, 0.01) + 0.05;
    if (p.t === 0) {
      const r = Math.max(p.rx, p.ry, p.rz) + m;
      Object.assign(p, { x0: p.cx - r, x1: p.cx + r, y0: p.cy - r, y1: p.cy + r, z0: p.cz - r, z1: p.cz + r });
    } else {
      const r = Math.max(p.ra, p.rb) + m;
      Object.assign(p, {
        x0: Math.min(p.ax, p.ax + p.bx) - r, x1: Math.max(p.ax, p.ax + p.bx) + r,
        y0: Math.min(p.ay, p.ay + p.by) - r, y1: Math.max(p.ay, p.ay + p.by) + r,
        z0: Math.min(p.az, p.az + p.bz) - r, z1: Math.max(p.az, p.az + p.bz) + r,
      });
    }
  }
  return prims;
}

function fieldOf(prims) {
  return (x, y, z) => {
    let d = 0.25;
    for (let i = 0; i < prims.length; i++) {
      const p = prims[i];
      if (x < p.x0 || x > p.x1 || y < p.y0 || y > p.y1 || z < p.z0 || z > p.z1) continue;
      const pd = dist(p, x, y, z);
      d = p.sub ? -smin(-d, pd, p.k) : smin(d, pd, p.k);
    }
    return d;
  };
}

function boundsOf(prims, pad) {
  const min = V(Infinity, Infinity, Infinity), max = V(-Infinity, -Infinity, -Infinity);
  for (const p of prims) {
    if (p.sub) continue;
    const m = Math.max(p.k, 0.01) + 0.05;
    min.min(V(p.x0 + m, p.y0 + m, p.z0 + m));
    max.max(V(p.x1 - m, p.y1 - m, p.z1 - m));
  }
  return { min: min.subScalar(pad), max: max.addScalar(pad) };
}

// ---------------------------------------------------------------- SURFACE NETS (narrow band)
function surfaceNets(f, min, max, h) {
  const nx = Math.ceil((max.x - min.x) / h) + 1;
  const ny = Math.ceil((max.y - min.y) / h) + 1;
  const nz = Math.ceil((max.z - min.z) / h) + 1;
  // coarse pass: only points close to the surface are evaluated exactly
  const S = 3, H = h * S;
  const cx = Math.ceil((nx - 1) / S) + 1, cy = Math.ceil((ny - 1) / S) + 1, cz = Math.ceil((nz - 1) / S) + 1;
  const coarse = new Float32Array(cx * cy * cz);
  for (let k = 0; k < cz; k++) for (let j = 0; j < cy; j++) for (let i = 0; i < cx; i++) {
    coarse[i + cx * (j + cy * k)] = f(min.x + i * H, min.y + j * H, min.z + k * H);
  }
  const band = H * 1.2;
  const vals = new Float32Array(nx * ny * nz);
  const id = (i, j, k) => i + nx * (j + ny * k);
  for (let k = 0; k < nz; k++) {
    const k0 = Math.min(cz - 2, Math.floor(k / S)), tk = k / S - k0;
    for (let j = 0; j < ny; j++) {
      const j0 = Math.min(cy - 2, Math.floor(j / S)), tj = j / S - j0;
      for (let i = 0; i < nx; i++) {
        const i0 = Math.min(cx - 2, Math.floor(i / S)), ti = i / S - i0;
        const c = (a, b, d) => coarse[(i0 + a) + cx * ((j0 + b) + cy * (k0 + d))];
        const x00 = c(0, 0, 0) + (c(1, 0, 0) - c(0, 0, 0)) * ti, x10 = c(0, 1, 0) + (c(1, 1, 0) - c(0, 1, 0)) * ti;
        const x01 = c(0, 0, 1) + (c(1, 0, 1) - c(0, 0, 1)) * ti, x11 = c(0, 1, 1) + (c(1, 1, 1) - c(0, 1, 1)) * ti;
        const y0 = x00 + (x10 - x00) * tj, y1 = x01 + (x11 - x01) * tj;
        const approx = y0 + (y1 - y0) * tk;
        vals[id(i, j, k)] = Math.abs(approx) > band ? approx : f(min.x + i * h, min.y + j * h, min.z + k * h);
      }
    }
  }
  const cid = (i, j, k) => i + (nx - 1) * (j + (ny - 1) * k);
  const vmap = new Int32Array((nx - 1) * (ny - 1) * (nz - 1)).fill(-1);
  const pos = [];
  const corners = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]];
  const edges = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const cv = new Float32Array(8);
  for (let k = 0; k < nz - 1; k++) for (let j = 0; j < ny - 1; j++) for (let i = 0; i < nx - 1; i++) {
    let mask = 0;
    for (let c = 0; c < 8; c++) {
      const q = corners[c];
      cv[c] = vals[id(i + q[0], j + q[1], k + q[2])];
      if (cv[c] < 0) mask |= 1 << c;
    }
    if (mask === 0 || mask === 255) continue;
    let sx = 0, sy = 0, sz = 0, n = 0;
    for (const [a, b] of edges) {
      if ((cv[a] < 0) === (cv[b] < 0)) continue;
      const t = cv[a] / (cv[a] - cv[b]);
      const A = corners[a], B = corners[b];
      sx += A[0] + (B[0] - A[0]) * t; sy += A[1] + (B[1] - A[1]) * t; sz += A[2] + (B[2] - A[2]) * t;
      n++;
    }
    vmap[cid(i, j, k)] = pos.length / 3;
    pos.push(min.x + (i + sx / n) * h, min.y + (j + sy / n) * h, min.z + (k + sz / n) * h);
  }
  const idx = [];
  const quad = (a, b, c, d) => { if (a >= 0 && b >= 0 && c >= 0 && d >= 0) idx.push(a, b, c, a, c, d); };
  for (let k = 1; k < nz - 1; k++) for (let j = 1; j < ny - 1; j++) for (let i = 1; i < nx - 1; i++) {
    const v0 = vals[id(i, j, k)] < 0;
    if (v0 !== (vals[id(i + 1, j, k)] < 0)) quad(vmap[cid(i, j - 1, k - 1)], vmap[cid(i, j, k - 1)], vmap[cid(i, j, k)], vmap[cid(i, j - 1, k)]);
    if (v0 !== (vals[id(i, j + 1, k)] < 0)) quad(vmap[cid(i - 1, j, k - 1)], vmap[cid(i - 1, j, k)], vmap[cid(i, j, k)], vmap[cid(i, j, k - 1)]);
    if (v0 !== (vals[id(i, j, k + 1)] < 0)) quad(vmap[cid(i - 1, j - 1, k)], vmap[cid(i, j - 1, k)], vmap[cid(i, j, k)], vmap[cid(i - 1, j, k)]);
  }
  // smooth normals from the gradient, and cavity occlusion sampled along the normal
  const nrm = new Float32Array(pos.length), ao = new Float32Array(pos.length / 3);
  const e = h * 0.5;
  for (let v = 0; v < pos.length; v += 3) {
    const x = pos[v], y = pos[v + 1], z = pos[v + 2];
    const gx = f(x + e, y, z) - f(x - e, y, z), gy = f(x, y + e, z) - f(x, y - e, z), gz = f(x, y, z + e) - f(x, y, z - e);
    const l = Math.hypot(gx, gy, gz) || 1;
    const Nx = gx / l, Ny = gy / l, Nz = gz / l;
    nrm[v] = Nx; nrm[v + 1] = Ny; nrm[v + 2] = Nz;
    let occ = 0;
    for (let s = 1; s <= 4; s++) {
      const d = s * 0.009;
      occ += (d - f(x + Nx * d, y + Ny * d, z + Nz * d)) / 2 ** s;
    }
    ao[v / 3] = Math.max(0.6, Math.min(1, 1 - occ * 6));
  }
  // triangle winding consistent with the normals
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
    const wx = pos[c] - pos[a], wy = pos[c + 1] - pos[a + 1], wz = pos[c + 2] - pos[a + 2];
    const fx = uy * wz - uz * wy, fy = uz * wx - ux * wz, fz = ux * wy - uy * wx;
    if (fx * (nrm[a] + nrm[b] + nrm[c]) + fy * (nrm[a + 1] + nrm[b + 1] + nrm[c + 1]) + fz * (nrm[a + 2] + nrm[b + 2] + nrm[c + 2]) < 0) {
      const tmp = idx[t + 1]; idx[t + 1] = idx[t + 2]; idx[t + 2] = tmp;
    }
  }
  return { pos: new Float32Array(pos), nrm, ao, idx };
}

function meshGeo(m, color = null) {
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', new THREE.BufferAttribute(m.pos, 3));
  g.setAttribute('normal', new THREE.BufferAttribute(m.nrm, 3));
  if (color) g.setAttribute('color', new THREE.BufferAttribute(color, 3));
  g.setIndex(m.idx);
  return g;
}

function sculpt(prims, h, pad = 0.02) {
  prepare(prims);
  const b = boundsOf(prims, pad);
  return surfaceNets(fieldOf(prims), b.min, b.max, h);
}

// AO as a grey vertex colour
function aoColors(m, tint = 1) {
  const c = new Float32Array(m.pos.length);
  for (let i = 0; i < m.ao.length; i++) c[i * 3] = c[i * 3 + 1] = c[i * 3 + 2] = m.ao[i] * tint;
  return c;
}

// ---------------------------------------------------------------- HEAD, HANDS, SHOES (shared)
const shared = {};

function buildHead() {
  const P = [
    ell(V(0, 0.19, -0.008), [0.077, 0.098, 0.094], { k: 0.04 }),
    ell(V(0, 0.137, 0.028), [0.064, 0.068, 0.07], { k: 0.04 }),
    ell(V(0, 0.092, 0.066), [0.032, 0.022, 0.022], { k: 0.035 }),
    ell(V(-0.046, 0.166, 0.058), [0.028, 0.022, 0.026], { k: 0.03 }),
    ell(V(0.046, 0.166, 0.058), [0.028, 0.022, 0.026], { k: 0.03 }),
    ell(V(-0.05, 0.115, 0.05), [0.022, 0.03, 0.03], { k: 0.03 }),
    ell(V(0.05, 0.115, 0.05), [0.022, 0.03, 0.03], { k: 0.03 }),
    ell(V(0, 0.208, 0.074), [0.058, 0.014, 0.02], { k: 0.025 }),
    cone(V(0, 0.194, 0.087), V(0, 0.152, 0.107), 0.009, 0.015, { k: 0.018 }),
    ell(V(-0.012, 0.149, 0.1), [0.011, 0.009, 0.01], { k: 0.01 }),
    ell(V(0.012, 0.149, 0.1), [0.011, 0.009, 0.01], { k: 0.01 }),
    ell(V(0, 0.126, 0.093), [0.022, 0.006, 0.01], { k: 0.01 }),
    ell(V(0, 0.114, 0.09), [0.019, 0.006, 0.009], { k: 0.01 }),
    ell(V(0, 0.12, 0.1), [0.02, 0.0025, 0.006], { k: 0.004, sub: true }),
    ell(V(-0.079, 0.172, -0.004), [0.012, 0.03, 0.02], { k: 0.012 }),
    ell(V(0.079, 0.172, -0.004), [0.012, 0.03, 0.02], { k: 0.012 }),
    cone(V(0, -0.01, -0.005), V(0, 0.13, -0.01), 0.055, 0.05, { k: 0.04 }),
    ell(V(-0.033, 0.188, 0.093), [0.021, 0.014, 0.014], { k: 0.01, sub: true }),
    ell(V(0.033, 0.188, 0.093), [0.021, 0.014, 0.014], { k: 0.01, sub: true }),
  ];
  const m = sculpt(P, 0.005);
  shared.head = meshGeo(m, aoColors(m));

  const shell = ell(V(0, 0.197, -0.012), [0.083, 0.104, 0.101]);
  prepare([shell]);
  const hair = (x, y, z) => {
    let d = dist(shell, x, y, z);
    d = Math.max(d, (0.176 + 0.62 * z) - y);
    if (Math.abs(x) > 0.066) d = Math.max(d, 0.2 - y);
    return d;
  };
  const hm = surfaceNets(hair, V(-0.1, 0.08, -0.13), V(0.1, 0.32, 0.11), 0.005);
  shared.hair = meshGeo(hm);
}

// Hand in the elbow frame: wrist at y = -0.26, fingers hanging down, palm facing the body
function buildHand(side) {
  const s = side; // +1 = the character's left (+x)
  const P = [];
  const W = V(0, -0.26, 0);
  P.push(ell(V(0, -0.305, 0.004), [0.013, 0.048, 0.04], { k: 0.02, fwd: AX.z }));
  P.push(cone(V(0, -0.255, 0), V(0, -0.28, 0.002), 0.026, 0.024, { k: 0.02 }));
  const fingers = [[0.024, 0.052, 0.009], [0.008, 0.058, 0.0095], [-0.008, 0.055, 0.009], [-0.023, 0.045, 0.008]];
  fingers.forEach(([fz, len, r]) => {
    let p0 = V(-s * 0.002, -0.345, fz);
    const segs = [0.45, 0.32, 0.23];
    let ang = 0.15;
    for (const sl of segs) {
      const l = len * sl;
      const p1 = p0.clone().add(V(-s * Math.sin(ang) * l, -Math.cos(ang) * l, 0));
      P.push(cone(p0, p1, r, r * 0.9, { k: 0.006 }));
      p0 = p1;
      ang += 0.3;
    }
  });
  // thumb on the front, pointing forward and down
  const t0 = V(-s * 0.008, -0.29, 0.03), t1 = V(-s * 0.018, -0.32, 0.05), t2 = V(-s * 0.022, -0.345, 0.058);
  P.push(cone(t0, t1, 0.013, 0.011, { k: 0.012 }), cone(t1, t2, 0.011, 0.0095, { k: 0.006 }));
  const m = sculpt(P, 0.0035, 0.01);
  return meshGeo(m, aoColors(m));
}

// Sneaker in the knee frame: ankle at y = -0.42, sole on the ground (y = -0.475)
function buildShoe() {
  const g = -0.475;
  const P = [
    ell(V(0, g + 0.02, 0.045), [0.05, 0.02, 0.135], { k: 0.02 }),
    ell(V(0, g + 0.055, 0.025), [0.047, 0.045, 0.11], { k: 0.04 }),
    ell(V(0, g + 0.045, 0.12), [0.043, 0.032, 0.06], { k: 0.04 }),
    cone(V(0, g + 0.06, -0.035), V(0, g + 0.105, -0.02), 0.045, 0.042, { k: 0.03 }),
  ];
  const m = sculpt(P, 0.005, 0.01);
  const col = new Float32Array(m.pos.length);
  for (let i = 0; i < m.ao.length; i++) {
    const y = m.pos[i * 3 + 1] - g;
    const soleT = Math.max(0, Math.min(1, (y - 0.018) / 0.006));
    const c = [0.18 + (0.93 - 0.18) * soleT, 0.18 + (0.93 - 0.18) * soleT, 0.19 + (0.94 - 0.19) * soleT];
    const stripe = y > 0.035 && y < 0.05 && Math.abs(m.pos[i * 3 + 2] - 0.02) < 0.05 ? 0.35 : 1;
    col[i * 3] = c[0] * m.ao[i] * stripe; col[i * 3 + 1] = c[1] * m.ao[i] * (stripe < 1 ? 0.55 : 1); col[i * 3 + 2] = c[2] * m.ao[i] * (stripe < 1 ? 0.4 : 1);
  }
  return meshGeo(m, col);
}

function buildShared() {
  if (shared.head) return;
  buildHead();
  shared.handL = buildHand(1);
  shared.handR = buildHand(-1);
  shared.shoe = buildShoe();
}

const matCache = new Map();
function std(color, roughness = 0.6, extra = {}) {
  const k = `${color}-${roughness}-${JSON.stringify(extra)}`;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness, ...extra }));
  return matCache.get(k);
}
const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });
const shoeMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.5 });

// ---------------------------------------------------------------- BODY
const bodyCache = new Map();
const BIND = { shoulderZ: 0.32, hipZ: 0.06 };
const BONE = { hips: 0, spine: 1, neck: 2, hipL: 3, kneeL: 4, hipR: 5, kneeR: 6, shL: 7, elL: 8, shR: 9, elR: 10 };

// Builds the muscle primitives for the given joint positions and muscle levels (0..1)
function anatomy(J, l, c, b, clothed) {
  const a = Math.min(1.25, (c + b) / 2 * 1.25);
  const P = [];
  const add = (p, bone, region) => { p.bone = bone; p.region = region; P.push(p); return p; };
  // under a shirt the fabric hides the fine torso definition
  const detail = (p, bone, region) => (clothed ? null : add(p, bone, region));
  const hy = J.hips.y, sy = J.spine.y, cy = J.chest.y, ny = J.neck.y;

  // core volumes (soft blending)
  add(ell(V(0, hy + 0.01, -0.01), [0.145, 0.11, 0.1], { k: 0.06 }), BONE.hips, 'pelvis');
  add(ell(V(0, sy + 0.1, 0.0), [0.125 + 0.01 * b, 0.14, 0.09], { k: 0.07 }), BONE.spine, 'torso');
  add(ell(V(0, cy - 0.01, -0.01), [0.16 + 0.045 * b, 0.19, 0.105 + 0.012 * c], { k: 0.07 }), BONE.spine, 'torso');
  [-1, 1].forEach((s) => add(ell(V(s * 0.07, hy - 0.03, -0.065), [0.075 + 0.015 * l, 0.085, 0.06 + 0.015 * l], { k: 0.03 }), BONE.hips, 'pelvis'));

  // chest: pectorals as wide flat fans rising to the shoulders, sternum groove
  [-1, 1].forEach((s) => {
    add(ell(V(s * (0.075 + 0.02 * b), cy + 0.035, 0.055 + 0.02 * c), [0.068 + 0.02 * c, 0.095 + 0.025 * c + 0.012 * b, 0.04 + 0.03 * c],
      { dir: V(s, 0.28, -0.25), fwd: V(0, -0.15, 1), k: clothed ? 0.045 : 0.018 }), BONE.spine, 'torso');
  });
  detail(cone(V(0, cy - 0.04, 0.1 + 0.03 * c), V(0, cy + 0.11, 0.09 + 0.03 * c), 0.007, 0.009, { sub: true, k: 0.012 }), BONE.spine, 'torso');

  // abs: three rows plus the lower block, linea alba, obliques and serratus
  const abZ = 0.076;
  [[sy + 0.24, 0.03], [sy + 0.165, 0.032], [sy + 0.09, 0.032]].forEach(([y, ry]) => {
    [-1, 1].forEach((s) => detail(ell(V(s * 0.035, y, abZ), [0.032, ry, 0.016 + 0.008 * c], { k: 0.012 }), BONE.spine, 'torso'));
  });
  detail(ell(V(0, sy + 0.01, abZ - 0.004), [0.052, 0.045, 0.022], { k: 0.012 }), BONE.spine, 'torso');
  detail(cone(V(0, sy - 0.02, abZ + 0.03), V(0, sy + 0.3, abZ + 0.03), 0.005, 0.005, { sub: true, k: 0.008 }), BONE.spine, 'torso');
  [-1, 1].forEach((s) => {
    add(ell(V(s * 0.108, sy + 0.08, 0.03), [0.035, 0.085, 0.05], { dir: V(-s * 0.35, 1, 0.2), k: 0.02 }), BONE.spine, 'torso');
    for (let i = 0; i < 3; i++) {
      detail(ell(V(s * (0.122 + 0.02 * b), sy + 0.21 + i * 0.042, 0.04 - i * 0.004), [0.009 + 0.004 * b, 0.024, 0.012 + 0.004 * b],
        { dir: V(-s * 0.9, 0.7, 0.4), k: 0.012 }), BONE.spine, 'torso');
    }
  });

  // back: lats (V taper), spinal erectors with the groove between them, rhomboids, traps
  [-1, 1].forEach((s) => {
    add(cone(V(s * (0.15 + 0.03 * b), cy + 0.02, -0.035), V(s * 0.09, sy + 0.06, -0.05), 0.045 + 0.05 * b, 0.028, { k: 0.02 }), BONE.spine, 'torso');
    add(cone(V(s * 0.034, sy - 0.03, -0.085), V(s * 0.03, cy + 0.02, -0.095), 0.025 + 0.008 * b, 0.018, { k: 0.014 }), BONE.spine, 'torso');
    add(ell(V(s * 0.065, cy + 0.06, -0.085), [0.055, 0.07, 0.03 + 0.015 * b], { k: 0.018 }), BONE.spine, 'torso');
    add(cone(V(s * 0.04, ny + 0.03, -0.03), V(s * (0.16 + 0.05 * b), ny - 0.055, -0.025), 0.04 + 0.03 * b, 0.03, { k: 0.035 }), BONE.spine, 'torso');
  });
  add(ell(V(0, ny - 0.02, -0.055), [0.07 + 0.03 * b, 0.07 + 0.03 * b, 0.035 + 0.02 * b], { k: 0.03 }), BONE.spine, 'torso');
  detail(cone(V(0, sy - 0.02, -0.105 - 0.01 * b), V(0, cy + 0.06, -0.12 - 0.01 * b), 0.006, 0.006, { sub: true, k: 0.01 }), BONE.spine, 'torso');

  // neck with the sternocleidomastoids
  add(cone(V(0, ny - 0.05, -0.01), V(0, ny + 0.1, -0.005), 0.062 + 0.028 * b, 0.054 + 0.012 * b, { k: 0.045 }), BONE.neck, 'neck');
  [-1, 1].forEach((s) => add(cone(V(s * 0.045, ny + 0.12, -0.005), V(s * 0.015, ny - 0.015, 0.05), 0.013 + 0.006 * b, 0.011, { k: 0.012 }), BONE.neck, 'neck'));

  // arms
  J.arms.forEach(({ side: s, S, E, W }, i) => {
    const bs = i ? BONE.shR : BONE.shL, be = i ? BONE.elR : BONE.elL;
    const down = E.clone().sub(S).normalize();
    const out = V(s, 0, 0);
    // deltoid: front, side and rear heads
    [[V(0, -0.03, 0.035), V(0.2 * s, 1, 0.6)], [V(s * 0.03, -0.035, 0), V(0.4 * s, 1, 0)], [V(0, -0.03, -0.035), V(0.2 * s, 1, -0.6)]].forEach(([o, dir]) => {
      add(ell(S.clone().add(o).addScaledVector(out, 0.005), [0.035 + 0.024 * a, 0.07 + 0.02 * a, 0.033 + 0.02 * a], { dir: dir.normalize(), fwd: out, k: 0.02 }), bs, 'arm');
    });
    add(cone(S, E, 0.043 + 0.014 * a, 0.035 + 0.006 * a, { k: 0.02 }), bs, 'arm');
    const mid = S.clone().lerp(E, 0.58);
    add(ell(mid.clone().add(V(0, 0, 0.022 + 0.008 * a)), [0.032 + 0.028 * a, 0.078, 0.032 + 0.032 * a], { dir: down, k: 0.014 }), bs, 'arm');
    add(ell(S.clone().lerp(E, 0.45).add(V(s * 0.012, 0, -0.024 - 0.006 * a)), [0.032 + 0.024 * a, 0.088, 0.03 + 0.026 * a], { dir: down, k: 0.014 }), bs, 'arm');
    add(ell(S.clone().lerp(E, 0.4).add(V(-s * 0.008, 0, -0.02 - 0.004 * a)), [0.022 + 0.012 * a, 0.07, 0.022 + 0.014 * a], { dir: down, k: 0.012 }), bs, 'arm');
    // forearm with brachioradialis and flexors
    add(cone(E, W, 0.039 + 0.014 * a, 0.027, { k: 0.02 }), be, 'arm');
    const fdown = W.clone().sub(E).normalize();
    add(ell(E.clone().lerp(W, 0.3).add(V(s * 0.012, 0, 0.012)), [0.024 + 0.01 * a, 0.075, 0.022 + 0.01 * a], { dir: fdown, k: 0.012 }), be, 'arm');
    add(ell(E.clone().lerp(W, 0.3).add(V(-s * 0.012, 0, -0.004)), [0.022 + 0.008 * a, 0.08, 0.02 + 0.008 * a], { dir: fdown, k: 0.012 }), be, 'arm');
    add(ell(E.clone().add(V(0, 0.005, -0.03)), [0.018, 0.02, 0.012], { k: 0.012 }), be, 'arm');
  });

  // legs
  J.legs.forEach(({ side: s, H, K, A }, i) => {
    const bh = i ? BONE.hipR : BONE.hipL, bk = i ? BONE.kneeR : BONE.kneeL;
    const down = K.clone().sub(H).normalize();
    add(cone(V(H.x, H.y - 0.02, H.z - 0.005), K, 0.07 + 0.01 * l, 0.048, { k: 0.03 }), bh, 'thigh');
    const at = (t) => H.clone().lerp(K, t);
    // quadriceps: vastus lateralis, rectus femoris, vastus medialis (teardrop)
    add(ell(at(0.45).add(V(s * 0.04, 0, 0.012)), [0.04 + 0.03 * l, 0.16, 0.048 + 0.02 * l], { dir: down, k: 0.014 }), bh, 'thigh');
    add(ell(at(0.42).add(V(0, 0, 0.045 + 0.01 * l)), [0.036 + 0.018 * l, 0.16, 0.03 + 0.022 * l], { dir: down, k: 0.012 }), bh, 'thigh');
    add(ell(at(0.8).add(V(-s * 0.035, 0, 0.03)), [0.034 + 0.02 * l, 0.065 + 0.01 * l, 0.034 + 0.016 * l], { dir: down, k: 0.012 }), bh, 'thigh');
    // hamstrings and adductors
    add(ell(at(0.5).add(V(0, 0, -0.045)), [0.05 + 0.02 * l, 0.16, 0.036 + 0.016 * l], { dir: down, k: 0.014 }), bh, 'thigh');
    add(ell(at(0.25).add(V(-s * 0.045, 0, 0)), [0.035 + 0.015 * l, 0.1, 0.045], { dir: down, k: 0.02 }), bh, 'thigh');
    // knee cap
    add(ell(K.clone().add(V(0, 0.01, 0.045)), [0.025, 0.028, 0.015], { k: 0.012 }), bk, 'shin');
    // lower leg: tibia, calves (two heads), tibialis
    add(cone(K, A, 0.045, 0.03, { k: 0.02 }), bk, 'shin');
    const cdown = A.clone().sub(K).normalize();
    [[s * 0.018, 0.028], [-s * 0.02, 0.03]].forEach(([ox, ry]) => {
      add(ell(K.clone().lerp(A, 0.3).add(V(ox, 0, -0.035)), [0.028 + 0.016 * l, 0.085 + ry, 0.03 + 0.016 * l], { dir: cdown, k: 0.012 }), bk, 'shin');
    });
    add(ell(K.clone().lerp(A, 0.35).add(V(s * 0.02, 0, 0.03)), [0.018, 0.1, 0.016], { dir: cdown, k: 0.014 }), bk, 'shin');
  });
  return P;
}

export class Character {
  constructor(opts = {}) {
    buildShared();
    this.shirtless = !!opts.shirtless;
    this.colors = {
      skin: new THREE.Color(opts.skin || 0xd9a07c),
      shirt: new THREE.Color(opts.shirt || 0xb3261e),
      shorts: new THREE.Color(opts.shorts || 0x1f2733),
      sock: new THREE.Color(0xf0f0f0),
    };
    this.root = new THREE.Group();
    this.body = new THREE.Group(); // moved/rotated by the poses
    this.root.add(this.body);

    const bone = (parent, x, y, z) => {
      const b = new THREE.Bone();
      b.position.set(x, y, z);
      parent.add(b);
      return b;
    };
    this.hips = bone(this.body, 0, 0.95, 0);
    this.legs = [-1, 1].map((side) => {
      const hip = bone(this.hips, side * 0.1, -0.05, 0);
      const knee = bone(hip, 0, -0.45, 0);
      return { side, hip, knee };
    });
    this.spine = bone(this.hips, 0, 0.08, 0);
    this.neck = bone(this.spine, 0, 0.535, 0);
    this.arms = [-1, 1].map((side) => {
      const shoulder = bone(this.spine, side * 0.2, 0.49, 0);
      const elbow = bone(shoulder, 0, -0.3, 0);
      return { side, shoulder, elbow };
    });
    this.bones = [this.hips, this.spine, this.neck, ...this.legs.flatMap((lg) => [lg.hip, lg.knee]), ...this.arms.flatMap((a) => [a.shoulder, a.elbow])];

    // head, hair, eyes, hands and shoes follow their bones rigidly
    const skinMat = new THREE.MeshStandardMaterial({ color: this.colors.skin, roughness: 0.55, vertexColors: true });
    const rigid = (geo, material, parent) => {
      const m = new THREE.Mesh(geo, material);
      m.castShadow = true;
      m.receiveShadow = true;
      parent.add(m);
      return m;
    };
    rigid(shared.head, skinMat, this.neck).scale.setScalar(1.07);
    rigid(shared.hair, std(opts.hair || 0x2a1a10, 0.85), this.neck).scale.setScalar(1.07);
    this.arms.forEach((arm) => rigid(arm.side > 0 ? shared.handL : shared.handR, skinMat, arm.elbow));
    this.legs.forEach((leg) => rigid(shared.shoe, shoeMat, leg.knee));
    const white = std(0xf1eee8, 0.25), iris = std(opts.eyes || 0x3b2a1a, 0.15), browMat = std(opts.hair || 0x2a1a10, 0.9);
    [-1, 1].forEach((sd) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0125, 14, 10), white);
      eye.position.set(sd * 0.0353, 0.201, 0.0888);
      this.neck.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.0062, 10, 8), iris);
      pupil.position.set(sd * 0.0353, 0.201, 0.1011);
      this.neck.add(pupil);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.006, 0.01), browMat);
      brow.position.set(sd * 0.0364, 0.227, 0.0963);
      brow.rotation.z = -sd * 0.1;
      this.neck.add(brow);
    });

    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseT = 0;
    this.time = 0;
    this.mesh = null;
    this.muscleKey = '';
    this.detail = opts.detail || (this.shirtless ? 'high' : 'normal');
    const m = opts.muscles || [1, 1, 1];
    this.setMuscles(m[0], m[1], m[2]);
  }

  // puts the bones in the bind pose
  bindPose() {
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.bones.forEach((b) => b.rotation.set(0, 0, 0));
    this.arms.forEach((a) => { a.shoulder.rotation.z = a.side * BIND.shoulderZ; });
    this.legs.forEach((lg) => { lg.hip.rotation.z = lg.side * BIND.hipZ; });
  }

  // shoulders and hips get wider with the muscles
  placeJoints(l, b) {
    this.arms.forEach((arm) => { arm.shoulder.position.x = arm.side * (0.19 + 0.075 * b); });
    this.legs.forEach((leg) => { leg.hip.position.x = leg.side * (0.095 + 0.02 * l); });
  }

  // runs fn with the root at the origin and the skeleton in the bind pose
  inBind(fn) {
    const saved = [this.root.position.clone(), this.root.rotation.clone(), this.root.scale.clone()];
    this.bindPose();
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, 0, 0);
    this.root.scale.set(1, 1, 1);
    this.root.updateMatrixWorld(true);
    const r = fn();
    [this.root.position, this.root.rotation, this.root.scale].forEach((v, i) => v.copy(saved[i]));
    this.root.updateMatrixWorld(true);
    return r;
  }

  // 0..100 values for legs, chest and back (rounded so the mesh is rebuilt only on visible changes)
  setMuscles(legs, chest, back) {
    const q = (v) => Math.round(Math.max(0, Math.min(100, v)) / 5) * 5;
    const key = `${q(legs)}-${q(chest)}-${q(back)}`;
    if (key === this.muscleKey) return;
    this.muscleKey = key;
    const l = q(legs) / 100, c = q(chest) / 100, b = q(back) / 100;
    this.placeJoints(l, b);
    const data = this.inBind(() => this.bodyData(l, c, b, key));
    const geo = this.dressed(data);
    if (!this.mesh) {
      this.mesh = new THREE.SkinnedMesh(geo, bodyMat);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
      this.mesh.frustumCulled = false;
      this.body.add(this.mesh);
      this.inBind(() => { this.mesh.updateMatrixWorld(true); this.mesh.bind(new THREE.Skeleton(this.bones)); });
    } else {
      const old = this.mesh.geometry;
      this.mesh.geometry = geo;
      old.dispose();
      this.inBind(() => this.mesh.skeleton.calculateInverses());
    }
  }

  // geometry, skin weights, cloth masks and occlusion (cached, shared between characters)
  bodyData(l, c, b, key) {
    const cacheKey = `${key}|${this.detail}|${this.shirtless ? 'bare' : 'shirt'}`;
    if (bodyCache.has(cacheKey)) return bodyCache.get(cacheKey);
    const wp = (obj, x = 0, y = 0, z = 0) => obj.localToWorld(V(x, y, z));
    const J = {
      hips: wp(this.hips), spine: wp(this.spine), neck: wp(this.neck), chest: wp(this.spine, 0, 0.36, 0),
      knee: wp(this.legs[0].knee),
      arms: this.arms.map((arm) => ({ side: arm.side, S: wp(arm.shoulder), E: wp(arm.elbow), W: wp(arm.elbow, 0, -0.258, 0) })),
      legs: this.legs.map((leg) => ({ side: leg.side, H: wp(leg.hip), K: wp(leg.knee), A: wp(leg.knee, 0, -0.4, 0) })),
    };
    const P = anatomy(J, l, c, b, !this.shirtless);
    const m = sculpt(P, this.detail === 'high' ? 0.0095 : 0.014, 0.03);
    const n = m.pos.length / 3;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
    const shorts = new Float32Array(n), shirt = new Float32Array(n), sock = new Float32Array(n);
    const boneD = new Float32Array(11);
    const waistY = J.hips.y + 0.1, shoulderY = J.neck.y - 0.08;
    const clamp01 = (t) => Math.max(0, Math.min(1, t));
    for (let v = 0; v < n; v++) {
      const x = m.pos[v * 3], y = m.pos[v * 3 + 1], z = m.pos[v * 3 + 2];
      boneD.fill(1e9);
      let best = null, bd = 1e9;
      for (const p of P) {
        if (p.sub) continue;
        const d = dist(p, x, y, z);
        if (d < boneD[p.bone]) boneD[p.bone] = d;
        if (d < bd) { bd = d; best = p; }
      }
      let b1 = 0, b2 = 1;
      for (let k = 0; k < 11; k++) {
        if (boneD[k] < boneD[b1]) { b2 = b1; b1 = k; } else if (k !== b1 && boneD[k] < boneD[b2]) b2 = k;
      }
      if (b1 === b2) b2 = (b1 + 1) % 11;
      const w2 = Math.exp(-(boneD[b2] - boneD[b1]) / 0.02);
      si[v * 4] = b1; si[v * 4 + 1] = b2;
      sw[v * 4] = 1 / (1 + w2); sw[v * 4 + 1] = w2 / (1 + w2);
      // clothing masks with straight, slightly soft hems
      const r = best.region;
      if (r === 'pelvis' || r === 'torso') shorts[v] = clamp01((waistY - y) / 0.012 + 0.5);
      if (r === 'thigh') shorts[v] = clamp01((y - J.knee.y - 0.29) / 0.012 + 0.5);
      if (r === 'shin') sock[v] = clamp01((0.12 - y) / 0.01 + 0.5);
      if (r === 'torso' || r === 'pelvis') {
        const ax = Math.abs(x);
        const neckline = shoulderY - 0.01 - (ax < 0.1 ? 0.07 * Math.cos((ax / 0.1) * Math.PI / 2) : 0);
        let w = clamp01((neckline - y) / 0.012 + 0.5);
        if (y > J.chest.y - 0.07) w *= clamp01((0.115 + 0.035 * b - ax) / 0.012 + 0.5);
        shirt[v] = y < waistY ? 0 : w;
      }
    }
    const data = { m, si, sw, shorts, shirt, sock };
    bodyCache.set(cacheKey, data);
    return data;
  }

  // geometry with this character's clothes and skin colours
  dressed({ m, si, sw, shorts, shirt, sock }) {
    const n = m.ao.length;
    const col = new Float32Array(n * 3);
    const { skin, shorts: sc, shirt: tc, sock: kc } = this.colors;
    for (let v = 0; v < n; v++) {
      let r = skin.r, g = skin.g, bl = skin.b;
      const mixc = (cc, t) => { r += (cc.r - r) * t; g += (cc.g - g) * t; bl += (cc.b - bl) * t; };
      if (!this.shirtless && shirt[v] > 0) mixc(tc, shirt[v]);
      if (shorts[v] > 0) mixc(sc, shorts[v]);
      if (sock[v] > 0) mixc(kc, sock[v]);
      const ao = m.ao[v];
      col[v * 3] = r * ao; col[v * 3 + 1] = g * ao; col[v * 3 + 2] = bl * ao;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(m.pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(m.nrm, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    geo.setIndex(m.idx);
    return geo;
  }

  resetJoints() {
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.spine.rotation.set(0, 0, 0);
    this.neck.rotation.set(0, 0, 0);
    this.legs.forEach((lg) => { lg.hip.rotation.set(0, 0, lg.side * 0.04); lg.knee.rotation.set(0, 0, 0); });
    this.arms.forEach((a) => { a.shoulder.rotation.set(0, 0, a.side * 0.2); a.elbow.rotation.set(0, 0, 0); });
  }

  // Sets a pose; p (0..1) is the progress of the exercise movement
  setPose(name, p = 0) {
    this.pose = name;
    this.poseT = p;
  }

  update(dt, speed = 0) {
    this.time += dt;
    this.resetJoints();
    const p = this.poseT;
    const [L, R] = this.legs; // L = -x side
    const [AL, AR] = this.arms;
    switch (this.pose) {
      case 'walk':
      case 'idle': {
        if (speed > 0.1) {
          this.walkPhase += dt * speed * 2.2;
          const s = Math.sin(this.walkPhase);
          const amp = Math.min(1, speed / 4) * 0.7;
          L.hip.rotation.x = s * amp;
          R.hip.rotation.x = -s * amp;
          L.knee.rotation.x = Math.max(0, -s) * amp * 1.4;
          R.knee.rotation.x = Math.max(0, s) * amp * 1.4;
          AL.shoulder.rotation.x = -s * amp * 0.8;
          AR.shoulder.rotation.x = s * amp * 0.8;
          AL.elbow.rotation.x = -0.4;
          AR.elbow.rotation.x = -0.4;
          this.body.position.y = Math.abs(Math.cos(this.walkPhase)) * 0.05;
          this.spine.rotation.x = 0.05;
        } else {
          const br = Math.sin(this.time * 2) * 0.02;
          this.spine.rotation.x = br;
          AL.shoulder.rotation.z = -0.18;
          AR.shoulder.rotation.z = 0.18;
          AL.elbow.rotation.x = -0.15;
          AR.elbow.rotation.x = -0.15;
        }
        break;
      }
      case 'flex': {
        // bodybuilder pose (double biceps)
        const f = 0.8 + Math.sin(this.time * 6) * 0.05;
        AL.shoulder.rotation.z = -1.5;
        AR.shoulder.rotation.z = 1.5;
        AL.elbow.rotation.z = -1.9 * f;
        AR.elbow.rotation.z = 1.9 * f;
        L.hip.rotation.z = -0.15;
        R.hip.rotation.z = 0.15;
        break;
      }
      case 'squat': {
        const a = 1.25 * p, b = 2.3 * p, c = b - a;
        L.hip.rotation.x = R.hip.rotation.x = -a;
        L.knee.rotation.x = R.knee.rotation.x = b;
        const hipH = 0.45 * Math.cos(a) + 0.45 * Math.cos(c);
        this.body.position.y = hipH - 0.9;
        this.body.position.z = -(0.45 * Math.sin(a) - 0.45 * Math.sin(c));
        this.spine.rotation.x = 0.7 * p;
        this.neck.rotation.x = -0.5 * p;
        // hands on the bar behind the neck
        AL.shoulder.rotation.z = -1.9;
        AR.shoulder.rotation.z = 1.9;
        AL.elbow.rotation.z = -1.9;
        AR.elbow.rotation.z = 1.9;
        break;
      }
      case 'bench': {
        // lying on the bench: body rotated 90 degrees (head towards -z)
        this.body.rotation.x = -Math.PI / 2;
        this.body.position.set(0, 0.68, 1.05);
        L.hip.rotation.x = R.hip.rotation.x = 0.25;
        L.knee.rotation.x = R.knee.rotation.x = 1.3;
        L.hip.rotation.z = -0.3;
        R.hip.rotation.z = 0.3;
        // p = 1 arms extended, p = 0 bar on the chest
        const q = 1 - p;
        AL.shoulder.rotation.x = AR.shoulder.rotation.x = -Math.PI / 2 + q * 0.2;
        AL.shoulder.rotation.z = -q * 1.1;
        AR.shoulder.rotation.z = q * 1.1;
        AL.elbow.rotation.z = q * 1.9;
        AR.elbow.rotation.z = -q * 1.9;
        break;
      }
      case 'lat': {
        // seated, pulls the bar to the chest
        L.hip.rotation.x = R.hip.rotation.x = -Math.PI / 2;
        L.knee.rotation.x = R.knee.rotation.x = Math.PI / 2;
        this.body.position.y = -0.45;
        this.spine.rotation.x = -0.12 * p;
        const up = 2.9 - p * 1.3;
        AL.shoulder.rotation.z = -up;
        AR.shoulder.rotation.z = up;
        AL.elbow.rotation.z = -p * 1.6;
        AR.elbow.rotation.z = p * 1.6;
        break;
      }
      case 'sleep': {
        this.body.rotation.x = -Math.PI / 2;
        this.body.position.set(0, 0.2, 0.9);
        AL.shoulder.rotation.z = -0.2;
        AR.shoulder.rotation.z = 0.2;
        this.spine.rotation.x = Math.sin(this.time * 1.2) * 0.02;
        break;
      }
      case 'count': {
        // counting banknotes at the desk
        AL.shoulder.rotation.x = AR.shoulder.rotation.x = -0.9;
        AL.elbow.rotation.x = -0.7 - Math.max(0, Math.sin(this.time * 18)) * 0.4 * p;
        AR.elbow.rotation.x = -0.7;
        this.spine.rotation.x = 0.2;
        this.neck.rotation.x = 0.3;
        break;
      }
      default:
        break;
    }
  }
}
