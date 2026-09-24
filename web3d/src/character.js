import * as THREE from 'three';

// Human characters. The body is one smooth skinned mesh generated from a
// signed distance field (muscles are blended shapes), polygonised with
// surface nets and bound to a skeleton; the head is a finer sculpted mesh.
// Muscles grow with the stats; joints are animated by poses.

// ---------------------------------------------------------------- SDF HELPERS
const smin = (a, b, k) => {
  const h = Math.max(k - Math.abs(a - b), 0) / k;
  return Math.min(a, b) - h * h * k * 0.25;
};

// primitives are plain objects to keep evaluation fast
function ellipsoid(c, r, extra = {}) { return { t: 0, cx: c.x, cy: c.y, cz: c.z, rx: r[0], ry: r[1], rz: r[2], ...extra }; }
function cone(a, b, ra, rb, extra = {}) {
  const bx = b.x - a.x, by = b.y - a.y, bz = b.z - a.z;
  return { t: 1, ax: a.x, ay: a.y, az: a.z, bx, by, bz, l2: bx * bx + by * by + bz * bz, ra, rb, ...extra };
}

function primDist(p, x, y, z) {
  if (p.t === 0) {
    const dx = (x - p.cx) / p.rx, dy = (y - p.cy) / p.ry, dz = (z - p.cz) / p.rz;
    const k0 = Math.sqrt(dx * dx + dy * dy + dz * dz);
    return (k0 - 1) * Math.min(p.rx, p.ry, p.rz);
  }
  // capsule with linearly varying radius
  const px = x - p.ax, py = y - p.ay, pz = z - p.az;
  const h = Math.max(0, Math.min(1, (px * p.bx + py * p.by + pz * p.bz) / p.l2));
  const qx = px - p.bx * h, qy = py - p.by * h, qz = pz - p.bz * h;
  return Math.sqrt(qx * qx + qy * qy + qz * qz) - (p.ra + (p.rb - p.ra) * h);
}

function fieldOf(prims) {
  return (x, y, z) => {
    let d = 1e9;
    for (let i = 0; i < prims.length; i++) {
      const p = prims[i];
      const pd = primDist(p, x, y, z);
      if (p.sub) d = -smin(-d, pd, p.k || 0.01); // smooth subtraction
      else d = smin(d, pd, p.k || 0.04);
    }
    return d;
  };
}

// ---------------------------------------------------------------- SURFACE NETS
function surfaceNets(f, min, max, h) {
  const nx = Math.ceil((max.x - min.x) / h) + 1;
  const ny = Math.ceil((max.y - min.y) / h) + 1;
  const nz = Math.ceil((max.z - min.z) / h) + 1;
  const vals = new Float32Array(nx * ny * nz);
  const id = (i, j, k) => i + nx * (j + ny * k);
  for (let k = 0; k < nz; k++) {
    for (let j = 0; j < ny; j++) {
      for (let i = 0; i < nx; i++) vals[id(i, j, k)] = f(min.x + i * h, min.y + j * h, min.z + k * h);
    }
  }
  const cid = (i, j, k) => i + (nx - 1) * (j + (ny - 1) * k);
  const vmap = new Int32Array((nx - 1) * (ny - 1) * (nz - 1)).fill(-1);
  const pos = [];
  const corners = [[0, 0, 0], [1, 0, 0], [0, 1, 0], [1, 1, 0], [0, 0, 1], [1, 0, 1], [0, 1, 1], [1, 1, 1]];
  const edges = [[0, 1], [2, 3], [4, 5], [6, 7], [0, 2], [1, 3], [4, 6], [5, 7], [0, 4], [1, 5], [2, 6], [3, 7]];
  const cv = new Float32Array(8);
  for (let k = 0; k < nz - 1; k++) {
    for (let j = 0; j < ny - 1; j++) {
      for (let i = 0; i < nx - 1; i++) {
        let mask = 0;
        for (let c = 0; c < 8; c++) {
          const [a, b, d] = corners[c];
          cv[c] = vals[id(i + a, j + b, k + d)];
          if (cv[c] < 0) mask |= 1 << c;
        }
        if (mask === 0 || mask === 255) continue;
        let sx = 0, sy = 0, sz = 0, n = 0;
        for (const [a, b] of edges) {
          if ((cv[a] < 0) === (cv[b] < 0)) continue;
          const t = cv[a] / (cv[a] - cv[b]);
          const A = corners[a], B = corners[b];
          sx += A[0] + (B[0] - A[0]) * t;
          sy += A[1] + (B[1] - A[1]) * t;
          sz += A[2] + (B[2] - A[2]) * t;
          n++;
        }
        vmap[cid(i, j, k)] = pos.length / 3;
        pos.push(min.x + (i + sx / n) * h, min.y + (j + sy / n) * h, min.z + (k + sz / n) * h);
      }
    }
  }
  const idx = [];
  const quad = (a, b, c, d, flip) => {
    if (a < 0 || b < 0 || c < 0 || d < 0) return;
    if (flip) idx.push(a, c, b, a, d, c); else idx.push(a, b, c, a, c, d);
  };
  for (let k = 1; k < nz - 1; k++) {
    for (let j = 1; j < ny - 1; j++) {
      for (let i = 1; i < nx - 1; i++) {
        const v0 = vals[id(i, j, k)] < 0;
        if (v0 !== (vals[id(i + 1, j, k)] < 0)) {
          quad(vmap[cid(i, j - 1, k - 1)], vmap[cid(i, j, k - 1)], vmap[cid(i, j, k)], vmap[cid(i, j - 1, k)], !v0);
        }
        if (v0 !== (vals[id(i, j + 1, k)] < 0)) {
          quad(vmap[cid(i - 1, j, k - 1)], vmap[cid(i - 1, j, k)], vmap[cid(i, j, k)], vmap[cid(i, j, k - 1)], !v0);
        }
        if (v0 !== (vals[id(i, j, k + 1)] < 0)) {
          quad(vmap[cid(i - 1, j - 1, k)], vmap[cid(i, j - 1, k)], vmap[cid(i, j, k)], vmap[cid(i - 1, j, k)], !v0);
        }
      }
    }
  }
  // smooth normals from the field gradient
  const nrm = new Float32Array(pos.length);
  const e = h * 0.5;
  for (let v = 0; v < pos.length; v += 3) {
    const x = pos[v], y = pos[v + 1], z = pos[v + 2];
    let gx = f(x + e, y, z) - f(x - e, y, z);
    let gy = f(x, y + e, z) - f(x, y - e, z);
    let gz = f(x, y, z + e) - f(x, y, z - e);
    const l = Math.hypot(gx, gy, gz) || 1;
    nrm[v] = gx / l; nrm[v + 1] = gy / l; nrm[v + 2] = gz / l;
  }
  // make triangle winding agree with the normals
  for (let t = 0; t < idx.length; t += 3) {
    const a = idx[t] * 3, b = idx[t + 1] * 3, c = idx[t + 2] * 3;
    const ux = pos[b] - pos[a], uy = pos[b + 1] - pos[a + 1], uz = pos[b + 2] - pos[a + 2];
    const wx = pos[c] - pos[a], wy = pos[c + 1] - pos[a + 1], wz = pos[c + 2] - pos[a + 2];
    const fx = uy * wz - uz * wy, fy = uz * wx - ux * wz, fz = ux * wy - uy * wx;
    const dot = fx * (nrm[a] + nrm[b] + nrm[c]) + fy * (nrm[a + 1] + nrm[b + 1] + nrm[c + 1]) + fz * (nrm[a + 2] + nrm[b + 2] + nrm[c + 2]);
    if (dot < 0) { const tmp = idx[t + 1]; idx[t + 1] = idx[t + 2]; idx[t + 2] = tmp; }
  }
  return { pos: new Float32Array(pos), nrm, idx };
}

function boundsOf(prims, pad) {
  const min = new THREE.Vector3(Infinity, Infinity, Infinity), max = new THREE.Vector3(-Infinity, -Infinity, -Infinity);
  for (const p of prims) {
    if (p.sub) continue;
    if (p.t === 0) {
      min.min(new THREE.Vector3(p.cx - p.rx, p.cy - p.ry, p.cz - p.rz));
      max.max(new THREE.Vector3(p.cx + p.rx, p.cy + p.ry, p.cz + p.rz));
    } else {
      const r = Math.max(p.ra, p.rb);
      for (const [x, y, z] of [[p.ax, p.ay, p.az], [p.ax + p.bx, p.ay + p.by, p.az + p.bz]]) {
        min.min(new THREE.Vector3(x - r, y - r, z - r));
        max.max(new THREE.Vector3(x + r, y + r, z + r));
      }
    }
  }
  return { min: min.subScalar(pad), max: max.addScalar(pad) };
}

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------------------------------------------------------------- HEAD (shared)
let headGeo = null;
let hairGeo = null;
function buildHead() {
  if (headGeo) return;
  const head = [
    ellipsoid(V(0, 0.19, -0.008), [0.077, 0.098, 0.094]),
    ellipsoid(V(0, 0.137, 0.028), [0.063, 0.068, 0.07], { k: 0.04 }),
    ellipsoid(V(0, 0.09, 0.066), [0.03, 0.022, 0.022], { k: 0.035 }),
    ellipsoid(V(-0.045, 0.165, 0.058), [0.028, 0.022, 0.026], { k: 0.03 }),
    ellipsoid(V(0.045, 0.165, 0.058), [0.028, 0.022, 0.026], { k: 0.03 }),
    ellipsoid(V(0, 0.208, 0.074), [0.058, 0.014, 0.02], { k: 0.025 }),
    cone(V(0, 0.192, 0.086), V(0, 0.152, 0.106), 0.009, 0.015, { k: 0.02 }),
    ellipsoid(V(0, 0.148, 0.1), [0.022, 0.011, 0.012], { k: 0.012 }),
    ellipsoid(V(-0.079, 0.172, -0.004), [0.012, 0.029, 0.019], { k: 0.012 }),
    ellipsoid(V(0.079, 0.172, -0.004), [0.012, 0.029, 0.019], { k: 0.012 }),
    ellipsoid(V(0, 0.122, 0.091), [0.022, 0.007, 0.01], { k: 0.012 }),
    cone(V(0, 0.0, -0.005), V(0, 0.13, -0.01), 0.052, 0.05, { k: 0.04 }),
    // eye sockets
    ellipsoid(V(-0.033, 0.188, 0.092), [0.02, 0.013, 0.014], { sub: true, k: 0.012 }),
    ellipsoid(V(0.033, 0.188, 0.092), [0.02, 0.013, 0.014], { sub: true, k: 0.012 }),
  ];
  const hb = boundsOf(head, 0.02);
  const hf = fieldOf(head);
  const h = surfaceNets(hf, hb.min, hb.max, 0.0055);
  headGeo = new THREE.BufferGeometry();
  headGeo.setAttribute('position', new THREE.BufferAttribute(h.pos, 3));
  headGeo.setAttribute('normal', new THREE.BufferAttribute(h.nrm, 3));
  headGeo.setIndex(h.idx);

  // short hair: slightly larger skull, cut along the hairline
  const shell = ellipsoid(V(0, 0.196, -0.012), [0.083, 0.104, 0.101]);
  const hairF = (x, y, z) => {
    let d = primDist(shell, x, y, z);
    d = Math.max(d, (0.176 + 0.62 * z) - y); // hairline: high on the forehead, low on the nape
    if (Math.abs(x) > 0.066) d = Math.max(d, 0.2 - y); // above the ears
    return d;
  };
  const hn = surfaceNets(hairF, V(-0.1, 0.08, -0.13), V(0.1, 0.32, 0.11), 0.006);
  hairGeo = new THREE.BufferGeometry();
  hairGeo.setAttribute('position', new THREE.BufferAttribute(hn.pos, 3));
  hairGeo.setAttribute('normal', new THREE.BufferAttribute(hn.nrm, 3));
  hairGeo.setIndex(hn.idx);
}

const matCache = new Map();
function std(color, roughness = 0.6, extra = {}) {
  const k = `${color}-${roughness}-${JSON.stringify(extra)}`;
  if (!matCache.has(k)) matCache.set(k, new THREE.MeshStandardMaterial({ color, roughness, ...extra }));
  return matCache.get(k);
}
const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.62 });

// ---------------------------------------------------------------- BODY
const bodyCache = new Map();
const tmpC = new THREE.Color();

// Joint layout (bind pose). Feet on the ground, facing +z; +x is the character's left.
const BIND = { shoulderZ: 0.32, hipZ: 0.06 };

export class Character {
  constructor(opts = {}) {
    buildHead();
    this.colors = {
      skin: new THREE.Color(opts.skin || 0xd9a07c),
      shirt: new THREE.Color(opts.shirt || 0xb3261e),
      shorts: new THREE.Color(opts.shorts || 0x1f2733),
      shoe: new THREE.Color(opts.shoe || 0xe9e9e9),
      sock: new THREE.Color(0xf4f4f4),
    };
    this.colorKey = [opts.skin, opts.shirt, opts.shorts].join('-');
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
    this.neck = bone(this.spine, 0, 0.545, 0);
    this.arms = [-1, 1].map((side) => {
      const shoulder = bone(this.spine, side * 0.2, 0.49, 0);
      const elbow = bone(shoulder, 0, -0.3, 0);
      return { side, shoulder, elbow };
    });
    this.bones = [this.hips, this.spine, this.neck, ...this.legs.flatMap((l) => [l.hip, l.knee]), ...this.arms.flatMap((a) => [a.shoulder, a.elbow])];

    // head, eyes and hair follow the neck bone rigidly
    const skinMat = std(this.colors.skin.getHex(), 0.55);
    const headMesh = new THREE.Mesh(headGeo, skinMat);
    headMesh.castShadow = true;
    this.neck.add(headMesh);
    const hair = new THREE.Mesh(hairGeo, std(opts.hair || 0x2a1a10, 0.85));
    hair.castShadow = true;
    this.neck.add(hair);
    const white = std(0xf1eee8, 0.25), iris = std(opts.eyes || 0x3b2a1a, 0.15), browMat = std(opts.hair || 0x2a1a10, 0.9);
    [-1, 1].forEach((sd) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.0125, 14, 10), white);
      eye.position.set(sd * 0.033, 0.188, 0.083);
      this.neck.add(eye);
      const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.0062, 10, 8), iris);
      pupil.position.set(sd * 0.033, 0.188, 0.0945);
      this.neck.add(pupil);
      const brow = new THREE.Mesh(new THREE.BoxGeometry(0.036, 0.006, 0.01), browMat);
      brow.position.set(sd * 0.034, 0.212, 0.09);
      brow.rotation.z = -sd * 0.1;
      this.neck.add(brow);
    });

    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseT = 0;
    this.time = 0;
    this.mesh = null;
    this.muscleKey = '';
    this.setMuscles(opts.muscles ? opts.muscles[0] : 1, opts.muscles ? opts.muscles[1] : 1, opts.muscles ? opts.muscles[2] : 1);
  }

  // puts the bones in the bind pose
  bindPose() {
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.bones.forEach((b) => b.rotation.set(0, 0, 0));
    this.arms.forEach((a) => { a.shoulder.rotation.z = a.side * BIND.shoulderZ; });
    this.legs.forEach((l) => { l.hip.rotation.z = l.side * BIND.hipZ; });
  }

  // 0..100 values for legs, chest and back (rounded so the mesh is rebuilt only on visible changes)
  setMuscles(legs, chest, back) {
    const q = (v) => Math.round(Math.max(0, Math.min(100, v)) / 5) * 5;
    const key = `${q(legs)}-${q(chest)}-${q(back)}`;
    if (key === this.muscleKey) return;
    this.muscleKey = key;
    const geo = this.buildBody(q(legs) / 100, q(chest) / 100, q(back) / 100, key);
    if (!this.mesh) {
      this.bindPose();
      const savedRoot = [this.root.position.clone(), this.root.rotation.clone(), this.root.scale.clone()];
      this.root.position.set(0, 0, 0);
      this.root.rotation.set(0, 0, 0);
      this.root.scale.set(1, 1, 1);
      this.root.updateMatrixWorld(true);
      this.mesh = new THREE.SkinnedMesh(geo, bodyMat);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
      this.mesh.frustumCulled = false;
      this.body.add(this.mesh);
      this.mesh.updateMatrixWorld(true);
      this.mesh.bind(new THREE.Skeleton(this.bones));
      [this.root.position, this.root.rotation, this.root.scale].forEach((v, i) => v.copy(savedRoot[i]));
    } else {
      this.mesh.geometry = geo;
      // joints moved: recompute the bind matrices of the skeleton
      this.bindPose();
      const saved = [this.root.position.clone(), this.root.rotation.clone(), this.root.scale.clone()];
      this.root.position.set(0, 0, 0);
      this.root.rotation.set(0, 0, 0);
      this.root.scale.set(1, 1, 1);
      this.root.updateMatrixWorld(true);
      this.mesh.skeleton.calculateInverses();
      [this.root.position, this.root.rotation, this.root.scale].forEach((v, i) => v.copy(saved[i]));
      this.root.updateMatrixWorld(true);
    }
  }

  // shoulders and hips get wider with the muscles
  placeJoints(l, b) {
    this.arms.forEach((arm) => { arm.shoulder.position.x = arm.side * (0.19 + 0.075 * b); });
    this.legs.forEach((leg) => { leg.hip.position.x = leg.side * (0.095 + 0.02 * l); });
  }

  buildBody(l, c, b, key) {
    this.placeJoints(l, b);
    const cacheKey = key + '|' + this.colorKey;
    if (bodyCache.has(cacheKey)) return bodyCache.get(cacheKey);
    // joint positions in the bind pose
    this.bindPose();
    const saved = [this.root.position.clone(), this.root.rotation.clone(), this.root.scale.clone()];
    this.root.position.set(0, 0, 0);
    this.root.rotation.set(0, 0, 0);
    this.root.scale.set(1, 1, 1);
    this.root.updateMatrixWorld(true);
    const wp = (obj, x = 0, y = 0, z = 0) => obj.localToWorld(V(x, y, z));
    const J = {
      hips: wp(this.hips), spine: wp(this.spine), neck: wp(this.neck), chest: wp(this.spine, 0, 0.36, 0),
      knee: wp(this.legs[0].knee),
    };
    const a = (c + b) / 2;
    const BONE = { hips: 0, spine: 1, neck: 2 };
    const P = [];
    const add = (prim, bone, region) => { prim.bone = bone; prim.region = region; P.push(prim); };

    // torso
    add(ellipsoid(V(0, J.hips.y + 0.02, -0.005), [0.145, 0.11, 0.1], { k: 0.05 }), BONE.hips, 'shorts');
    add(ellipsoid(V(0, J.spine.y + 0.1, 0.005), [0.13 + 0.01 * b, 0.13, 0.095 + 0.01 * c], { k: 0.07 }), BONE.spine, 'waist');
    add(ellipsoid(V(0, J.chest.y, 0.0), [0.16 + 0.06 * b, 0.165 + 0.01 * b, 0.1 + 0.03 * c], { k: 0.07 }), BONE.spine, 'shirt');
    [-1, 1].forEach((s) => {
      // pectorals: wide and flat, sloping up towards the shoulders
      add(cone(V(s * 0.03, J.chest.y + 0.03, 0.055 + 0.03 * c), V(s * (0.13 + 0.04 * b), J.chest.y + 0.075, 0.03 + 0.02 * c), 0.05 + 0.02 * c, 0.035 + 0.015 * c, { k: 0.05 }), BONE.spine, 'shirt');
      add(ellipsoid(V(s * (0.11 + 0.06 * b), J.chest.y - 0.03, -0.035), [0.05 + 0.045 * b, 0.13, 0.055 + 0.02 * b], { k: 0.06 }), BONE.spine, 'shirt');
    });
    add(ellipsoid(V(0, J.neck.y - 0.01, -0.025), [0.11 + 0.07 * b, 0.05 + 0.035 * b, 0.065 + 0.02 * b], { k: 0.06 }), BONE.spine, 'skin');
    add(cone(V(0, J.neck.y - 0.04, -0.005), V(0, J.neck.y + 0.1, 0.0), 0.064 + 0.03 * b, 0.054 + 0.01 * b, { k: 0.05 }), BONE.neck, 'skin');

    // legs
    this.legs.forEach((leg, i) => {
      const hb = 3 + i * 2;
      const H = wp(leg.hip), K = wp(leg.knee), A = wp(leg.knee, 0, -0.42, 0), T = wp(leg.knee, 0, -0.44, 0.13);
      add(cone(V(H.x, H.y - 0.02, H.z), K, 0.08 + 0.045 * l, 0.052 + 0.015 * l, { k: 0.05 }), hb, 'thigh');
      const mid = H.clone().lerp(K, 0.45);
      add(ellipsoid(V(mid.x + leg.side * 0.01, mid.y - 0.02, mid.z + 0.03), [0.058 + 0.03 * l, 0.14, 0.055 + 0.035 * l], { k: 0.04 }), hb, 'thigh');
      add(cone(K, A, 0.052 + 0.01 * l, 0.034, { k: 0.03 }), hb + 1, 'shin');
      const calf = K.clone().lerp(A, 0.3);
      add(ellipsoid(V(calf.x, calf.y, calf.z - 0.025), [0.045 + 0.02 * l, 0.085, 0.045 + 0.02 * l], { k: 0.03 }), hb + 1, 'shin');
      add(cone(V(A.x, A.y - 0.005, A.z - 0.02), V(T.x, T.y + 0.012, T.z), 0.045, 0.04, { k: 0.02 }), hb + 1, 'shoe');
    });

    // arms
    this.arms.forEach((arm, i) => {
      const ab = 7 + i * 2;
      const S = wp(arm.shoulder), E = wp(arm.elbow), W = wp(arm.elbow, 0, -0.26, 0), Hd = wp(arm.elbow, 0, -0.35, 0.01);
      add(ellipsoid(V(S.x + arm.side * 0.012, S.y - 0.01, S.z), [0.058 + 0.04 * a, 0.066 + 0.03 * a, 0.058 + 0.035 * a], { k: 0.05 }), ab, 'skin');
      add(cone(S, E, 0.048 + 0.03 * a, 0.038 + 0.012 * a, { k: 0.03 }), ab, 'skin');
      const bic = S.clone().lerp(E, 0.55);
      add(ellipsoid(V(bic.x, bic.y, bic.z + 0.018), [0.036 + 0.025 * a, 0.07, 0.034 + 0.028 * a], { k: 0.025 }), ab, 'skin');
      add(ellipsoid(V(bic.x, bic.y + 0.03, bic.z - 0.02), [0.034 + 0.022 * a, 0.08, 0.032 + 0.02 * a], { k: 0.025 }), ab, 'skin');
      add(cone(E, W, 0.044 + 0.018 * a, 0.029, { k: 0.03 }), ab + 1, 'skin');
      add(cone(W, Hd, 0.03, 0.027, { k: 0.02 }), ab + 1, 'skin');
      add(ellipsoid(V(W.x - arm.side * -0.018, W.y - 0.035, W.z + 0.018), [0.012, 0.028, 0.012], { k: 0.012 }), ab + 1, 'skin');
    });

    // localToWorld updates parent matrices, so the root is restored only now
    [this.root.position, this.root.rotation, this.root.scale].forEach((v, i) => v.copy(saved[i]));
    this.root.updateMatrixWorld(true);

    const bounds = boundsOf(P, 0.03);
    const f = fieldOf(P);
    const mesh = surfaceNets(f, bounds.min, bounds.max, 0.017);

    // skin weights (two nearest bones) and clothing colours
    const n = mesh.pos.length / 3;
    const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4), col = new Float32Array(n * 3);
    const boneD = new Float32Array(11);
    const shoulderY = J.neck.y - 0.08, waistY = J.hips.y + 0.1;
    for (let v = 0; v < n; v++) {
      const x = mesh.pos[v * 3], y = mesh.pos[v * 3 + 1], z = mesh.pos[v * 3 + 2];
      boneD.fill(1e9);
      let best = null, bd = 1e9;
      for (const p of P) {
        const d = primDist(p, x, y, z);
        if (d < boneD[p.bone]) boneD[p.bone] = d;
        if (d < bd) { bd = d; best = p; }
      }
      let b1 = 0, b2 = 1;
      for (let k = 0; k < 11; k++) {
        if (boneD[k] < boneD[b1]) { b2 = b1; b1 = k; } else if (k !== b1 && boneD[k] < boneD[b2]) b2 = k;
      }
      if (b1 === b2) b2 = (b1 + 1) % 11;
      const w1 = 1, w2 = Math.exp(-(boneD[b2] - boneD[b1]) / 0.02);
      si[v * 4] = b1; si[v * 4 + 1] = b2;
      sw[v * 4] = w1 / (w1 + w2); sw[v * 4 + 1] = w2 / (w1 + w2);
      // clothing: straight hems with a soft one-cell transition
      const C = this.colors;
      const mix = (c1, c2, t) => tmpC.copy(c1).lerp(c2, Math.max(0, Math.min(1, t)));
      let cc;
      switch (best.region) {
        case 'waist': cc = mix(C.shorts, C.shirt, (y - waistY) / 0.02 + 0.5); break;
        case 'shorts': cc = mix(C.shorts, C.shirt, (y - waistY) / 0.02 + 0.5); break;
        case 'thigh': cc = mix(C.skin, C.shorts, (y - J.knee.y - 0.2) / 0.02 + 0.5); break;
        case 'shin': cc = mix(C.sock, C.skin, (y - 0.14) / 0.02 + 0.5); break;
        case 'shirt':
        case 'skin': {
          if (best.bone !== BONE.spine) { cc = C.skin; break; }
          // tank top: scooped neckline and wide armholes
          const ax = Math.abs(x);
          const neckline = shoulderY - 0.01 - (ax < 0.1 ? 0.07 * Math.cos((ax / 0.1) * Math.PI / 2) : 0);
          const armX = 0.11 + 0.035 * b;
          let wShirt = Math.min(1, Math.max(0, (neckline - y) / 0.015 + 0.5));
          if (y > J.chest.y - 0.07) wShirt *= Math.min(1, Math.max(0, (armX - ax) / 0.015 + 0.5));
          if (y < waistY) wShirt = 1;
          cc = mix(C.skin, C.shirt, wShirt);
          break;
        }
        default: cc = C[best.region] || C.skin;
      }
      col[v * 3] = cc.r; col[v * 3 + 1] = cc.g; col[v * 3 + 2] = cc.b;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(mesh.pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(mesh.nrm, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('skinIndex', new THREE.Uint16BufferAttribute(si, 4));
    geo.setAttribute('skinWeight', new THREE.BufferAttribute(sw, 4));
    geo.setIndex(mesh.idx);
    bodyCache.set(cacheKey, geo);
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
