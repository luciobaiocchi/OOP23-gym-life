import * as THREE from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import modelData from '../models/male_body.glb';

// Human characters based on the "Male Body" model by Alexander Antipov
// (https://sketchfab.com/3d-models/male-body-15a422001834483c9750ce6117d59cc1, CC BY 4.0).
// The model has no rig: here it gets a skeleton and automatic skin weights,
// muscles that grow region by region with the stats, and clothes, shoes and
// a buzz cut painted as vertex colours.

const V = (x, y, z) => new THREE.Vector3(x, y, z);

// ---------------------------------------------------------------- MODEL LOADING (embedded .glb)
function loadGlb(bytes) {
  const buf = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const dv = new DataView(buf);
  const jsonLen = dv.getUint32(12, true);
  const json = JSON.parse(new TextDecoder().decode(new Uint8Array(buf, 20, jsonLen)));
  const bin = 20 + jsonLen + 8;
  const prim = json.meshes[0].primitives[0];
  const read = (idx, Type, size) => {
    const a = json.accessors[idx], bv = json.bufferViews[a.bufferView];
    return new Type(buf.slice(bin + (bv.byteOffset || 0) + (a.byteOffset || 0), bin + (bv.byteOffset || 0) + (a.byteOffset || 0) + a.count * size * Type.BYTES_PER_ELEMENT));
  };
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.BufferAttribute(read(prim.attributes.POSITION, Float32Array, 3), 3));
  const ia = json.accessors[prim.indices];
  const IndexType = ia.componentType === 5125 ? Uint32Array : Uint16Array;
  geo.setIndex(new THREE.BufferAttribute(read(prim.indices, IndexType, 1), 1));
  geo.scale(0.01, 0.01, 0.01); // centimetres -> metres
  // weld the split vertices so the low-poly body shades smoothly
  const merged = mergeVertices(geo, 1e-4);
  merged.computeVertexNormals();
  return merged;
}

// Joint positions measured on the model (metres, bind pose = the model's A pose)
const FIT = {
  hips: V(0, 0.95, 0), spine: V(0, 1.03, 0), neck: V(0, 1.5, -0.01),
  arm: { S: V(0.17, 1.4, -0.035), E: V(0.365, 1.14, -0.035), W: V(0.455, 0.96, 0.06), T: V(0.525, 0.85, 0.13) },
  leg: { H: V(0.1, 0.9, 0), K: V(0.137, 0.48, -0.024), A: V(0.176, 0.09, -0.04), T: V(0.2, 0.02, 0.13) },
};
const mirror = (v, s) => V(v.x * s, v.y, v.z);

// Capsules used to compute the skin weights: [bone, a, b, radius]
function weightCapsules() {
  const C = [
    [0, V(0, 0.84, 0), V(0, 1.0, -0.01), 0.13],
    [1, V(0, 1.0, 0), V(0, 1.45, -0.01), 0.14],
    [2, V(0, 1.47, 0), V(0, 1.74, 0.01), 0.085],
  ];
  [-1, 1].forEach((s, i) => {
    const L = FIT.leg, A = FIT.arm;
    const hip = 3 + i * 2, sh = 7 + i * 2;
    C.push([hip, mirror(L.H, s), mirror(L.K, s), 0.075]);
    C.push([hip + 1, mirror(L.K, s), mirror(L.A, s), 0.05], [hip + 1, mirror(L.A, s), mirror(L.T, s), 0.04]);
    C.push([sh, mirror(A.S, s), mirror(A.E, s), 0.05]);
    C.push([sh + 1, mirror(A.E, s), mirror(A.W, s), 0.04], [sh + 1, mirror(A.W, s), mirror(A.T, s), 0.035]);
  });
  return C;
}

function segDist(p, a, b, r) {
  const ab = b.clone().sub(a), ap = p.clone().sub(a);
  const t = Math.max(0, Math.min(1, ap.dot(ab) / ab.lengthSq()));
  return ap.sub(ab.multiplyScalar(t)).length() - r;
}

const smooth = (a, b, x) => {
  const t = Math.max(0, Math.min(1, (x - a) / (b - a)));
  return t * t * (3 - 2 * t);
};

// ---------------------------------------------------------------- SHARED BASE DATA
let base = null;
function buildBase() {
  if (base) return base;
  const geo = loadGlb(modelData);
  const pos = geo.attributes.position, nrm = geo.attributes.normal;
  const n = pos.count;
  const caps = weightCapsules();
  const si = new Uint16Array(n * 4), sw = new Float32Array(n * 4);
  const boneW = new Float32Array(n * 11); // full weights, used for the muscle regions
  const d = new Float32Array(11);
  const p = V(0, 0, 0);
  for (let v = 0; v < n; v++) {
    p.fromBufferAttribute(pos, v);
    d.fill(1e9);
    for (const [bone, a, b, r] of caps) d[bone] = Math.min(d[bone], segDist(p, a, b, r));
    let b1 = 0, b2 = 1;
    for (let k = 0; k < 11; k++) {
      if (d[k] < d[b1]) { b2 = b1; b1 = k; } else if (k !== b1 && d[k] < d[b2]) b2 = k;
    }
    if (b1 === b2) b2 = (b1 + 1) % 11;
    const w2 = Math.exp(-(d[b2] - d[b1]) / 0.025);
    si[v * 4] = b1; si[v * 4 + 1] = b2;
    sw[v * 4] = 1 / (1 + w2); sw[v * 4 + 1] = w2 / (1 + w2);
    boneW[v * 11 + b1] += sw[v * 4];
    boneW[v * 11 + b2] += sw[v * 4 + 1];
  }

  // clothing and hair masks (0..1) from the bind-pose shape
  const shorts = new Float32Array(n), shirt = new Float32Array(n), shoe = new Float32Array(n), sole = new Float32Array(n);
  const sock = new Float32Array(n), hair = new Float32Array(n);
  for (let v = 0; v < n; v++) {
    const x = pos.getX(v), y = pos.getY(v), z = pos.getZ(v), ax = Math.abs(x);
    const W = (k) => boneW[v * 11 + k];
    const legW = W(3) + W(5), torsoW = W(0) + W(1), armW = W(7) + W(8) + W(9) + W(10);
    // shorts: pelvis and upper thighs, hem 25 cm above the knee
    shorts[v] = smooth(0.705, 0.715, y) * smooth(1.035, 1.025, y) * (1 - Math.min(1, armW * 1.5));
    // tank top: torso between the waistband and a scooped neckline, open at the armholes
    const neckline = 1.43 - (ax < 0.1 ? 0.07 * Math.cos((ax / 0.1) * Math.PI / 2) : 0);
    shirt[v] = torsoW * smooth(1.02, 1.035, y) * smooth(neckline + 0.008, neckline - 0.008, y) * smooth(0.19, 0.175, ax) * (1 - armW);
    // sneakers and socks
    shoe[v] = smooth(0.1, 0.09, y);
    sole[v] = smooth(0.028, 0.02, y);
    sock[v] = smooth(0.14, 0.13, y) * (1 - shoe[v]);
    // buzz cut: high on the forehead, low on the nape, not on the face or ears
    const hairline = 1.625 + (Math.max(-0.08, Math.min(0.1, z)) + 0.08) / 0.18 * 0.11;
    hair[v] = W(2) * smooth(hairline - 0.004, hairline + 0.004, y) * (ax > 0.07 && y < 1.72 ? 0 : 1);
  }
  base = { geo, n, si, sw, boneW, shorts, shirt, shoe, sole, sock, hair, nrm0: nrm.array.slice() };
  return base;
}

// Muscle growth: every vertex moves along its normal by an amount depending on
// the region it belongs to and on the level (0..1) of legs, chest and back.
const posCache = new Map();
function grownPositions(l, c, b) {
  const key = `${l}-${c}-${b}`;
  if (posCache.has(key)) return posCache.get(key);
  const B = buildBase();
  const { geo, n, boneW, nrm0 } = B;
  const src = geo.attributes.position.array;
  const out = new Float32Array(src.length);
  const a = Math.min(1, (c + b) / 2 * 1.15);
  for (let v = 0; v < n; v++) {
    const x = src[v * 3], y = src[v * 3 + 1], z = src[v * 3 + 2], ax = Math.abs(x), sx = Math.sign(x) || 1;
    const nx = nrm0[v * 3], ny = nrm0[v * 3 + 1], nz = nrm0[v * 3 + 2];
    const W = (k) => boneW[v * 11 + k];
    let push = 0, side = 0;
    // legs: quads (front and outer sweep), hamstrings, glutes, calves
    const thigh = W(3) + W(5);
    push += thigh * l * (0.03 + 0.012 * Math.max(0, nz) + 0.01 * Math.max(0, nx * sx)) * smooth(0.5, 0.58, y);
    push += W(0) * l * 0.015 * Math.max(0, -nz) * smooth(1.0, 0.9, y);
    const shin = W(4) + W(6);
    push += shin * l * 0.022 * Math.max(0, -nz + 0.2) * smooth(0.18, 0.3, y) * smooth(0.46, 0.38, y);
    // chest: pectorals on the upper front of the torso
    const torso = W(1);
    push += torso * c * 0.035 * Math.max(0, nz) * smooth(1.2, 1.26, y) * smooth(1.46, 1.4, y) * smooth(0.2, 0.14, ax);
    // abs: a little volume on the belly
    push += torso * c * 0.008 * Math.max(0, nz) * smooth(1.02, 1.08, y) * smooth(1.24, 1.18, y);
    // back: lats (also pushed sideways for the V taper), upper back and traps
    const lats = torso * smooth(1.08, 1.2, y) * smooth(1.44, 1.36, y) * smooth(0.06, 0.12, ax);
    push += lats * b * 0.02 * Math.max(0, -nz + 0.3);
    side += lats * b * 0.045;
    push += torso * b * 0.03 * Math.max(0, -nz) * smooth(1.2, 1.3, y) * smooth(1.5, 1.44, y);
    push += (torso + W(2)) * b * 0.035 * smooth(1.4, 1.46, y) * smooth(1.56, 1.5, y) * smooth(0.18, 0.1, ax) * Math.max(0, ny + 0.3 - nz * 0.5);
    // arms: deltoids near the shoulder joint, biceps/triceps, forearms
    const shoulder = W(7) + W(9), fore = W(8) + W(10);
    const dS = Math.hypot(ax - 0.17, y - 1.4, z + 0.035);
    push += shoulder * a * (0.035 * smooth(0.16, 0.06, dS) + 0.028 * smooth(0.05, 0.12, dS));
    push += fore * a * 0.014 * smooth(0.98, 1.06, y);
    const k = push + (side > 0 ? 0 : 0);
    out[v * 3] = x + nx * k + sx * side;
    out[v * 3 + 1] = y + ny * k;
    out[v * 3 + 2] = z + nz * k;
  }
  const attr = new THREE.BufferAttribute(out, 3);
  // normals of the grown body
  const g = new THREE.BufferGeometry();
  g.setAttribute('position', attr);
  g.setIndex(geo.index);
  g.computeVertexNormals();
  const res = { position: attr, normal: g.attributes.normal };
  posCache.set(key, res);
  return res;
}

const bodyMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55 });

// ---------------------------------------------------------------- CHARACTER
const BONES = 11;

export class Character {
  constructor(opts = {}) {
    const B = buildBase();
    this.shirtless = !!opts.shirtless;
    this.colors = {
      skin: new THREE.Color(opts.skin || 0xd9a07c),
      shirt: new THREE.Color(opts.shirt || 0xb3261e),
      shorts: new THREE.Color(opts.shorts || 0x1f2733),
      hair: new THREE.Color(opts.hair || 0x2a1a10),
      shoe: new THREE.Color(opts.shoe || 0xe8e8e8),
      sole: new THREE.Color(0x2a2a2a),
      sock: new THREE.Color(0xf2f2f2),
    };
    this.root = new THREE.Group();
    this.body = new THREE.Group(); // moved/rotated by the poses
    this.root.add(this.body);

    // skeleton placed on the model's joints; bones rest with limbs hanging straight down
    const bone = (parent, worldPos, parentWorld) => {
      const b = new THREE.Bone();
      b.position.copy(worldPos).sub(parentWorld);
      parent.add(b);
      return b;
    };
    const F = FIT;
    this.hips = bone(this.body, F.hips, V(0, 0, 0));
    this.spine = bone(this.hips, F.spine, F.hips);
    this.neck = bone(this.spine, F.neck, F.spine);
    this.legs = [-1, 1].map((side) => {
      const H = mirror(F.leg.H, side), K = mirror(F.leg.K, side);
      const hip = bone(this.hips, H, F.hips);
      const knee = new THREE.Bone();
      knee.position.set(0, -H.distanceTo(K), 0);
      hip.add(knee);
      return { side, hip, knee };
    });
    this.arms = [-1, 1].map((side) => {
      const S = mirror(F.arm.S, side), E = mirror(F.arm.E, side);
      const shoulder = bone(this.spine, S, F.spine);
      const elbow = new THREE.Bone();
      elbow.position.set(0, -S.distanceTo(E), 0);
      shoulder.add(elbow);
      return { side, shoulder, elbow };
    });
    this.bones = [this.hips, this.spine, this.neck, ...this.legs.flatMap((lg) => [lg.hip, lg.knee]), ...this.arms.flatMap((a) => [a.shoulder, a.elbow])];

    // per-character colours on the shared shape
    const { n } = B;
    const col = new Float32Array(n * 3);
    const C = this.colors;
    const tmp = new THREE.Color();
    for (let v = 0; v < n; v++) {
      tmp.copy(C.skin);
      if (B.hair[v] > 0) tmp.lerp(C.hair, B.hair[v]);
      if (!this.shirtless && B.shirt[v] > 0) tmp.lerp(C.shirt, B.shirt[v]);
      if (B.shorts[v] > 0) tmp.lerp(C.shorts, B.shorts[v]);
      if (B.sock[v] > 0) tmp.lerp(C.sock, B.sock[v]);
      if (B.shoe[v] > 0) tmp.lerp(C.shoe, B.shoe[v]);
      if (B.sole[v] > 0) tmp.lerp(C.sole, B.sole[v]);
      col[v * 3] = tmp.r; col[v * 3 + 1] = tmp.g; col[v * 3 + 2] = tmp.b;
    }
    this.colorAttr = new THREE.BufferAttribute(col, 3);
    this.skinIndex = new THREE.Uint16BufferAttribute(B.si, 4);
    this.skinWeight = new THREE.BufferAttribute(B.sw, 4);

    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseT = 0;
    this.time = 0;
    this.mesh = null;
    this.muscleKey = '';
    const m = opts.muscles || [1, 1, 1];
    this.setMuscles(m[0], m[1], m[2]);
  }

  // bind pose = the model's A pose (limbs rotated from "hanging down" to the measured directions)
  bindPose() {
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.bones.forEach((b) => b.rotation.set(0, 0, 0));
    const down = V(0, -1, 0);
    this.arms.forEach(({ side, shoulder, elbow }) => {
      const S = mirror(FIT.arm.S, side), E = mirror(FIT.arm.E, side), W = mirror(FIT.arm.W, side);
      const up = E.clone().sub(S).normalize();
      shoulder.quaternion.setFromUnitVectors(down, up);
      const fore = W.clone().sub(E).normalize().applyQuaternion(shoulder.quaternion.clone().invert());
      elbow.quaternion.setFromUnitVectors(down, fore);
    });
    this.legs.forEach(({ side, hip, knee }) => {
      const H = mirror(FIT.leg.H, side), K = mirror(FIT.leg.K, side), A = mirror(FIT.leg.A, side);
      hip.quaternion.setFromUnitVectors(down, K.clone().sub(H).normalize());
      const shin = A.clone().sub(K).normalize().applyQuaternion(hip.quaternion.clone().invert());
      knee.quaternion.setFromUnitVectors(down, shin);
    });
  }

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

  // 0..100 values for legs, chest and back (rounded so the shape changes in visible steps)
  setMuscles(legs, chest, back) {
    const q = (v) => Math.round(Math.max(0, Math.min(100, v)) / 5) * 5;
    const key = `${q(legs)}-${q(chest)}-${q(back)}`;
    if (key === this.muscleKey) return;
    this.muscleKey = key;
    const grown = grownPositions(q(legs) / 100, q(chest) / 100, q(back) / 100);
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', grown.position);
    geo.setAttribute('normal', grown.normal);
    geo.setAttribute('color', this.colorAttr);
    geo.setAttribute('skinIndex', this.skinIndex);
    geo.setAttribute('skinWeight', this.skinWeight);
    geo.setIndex(buildBase().geo.index);
    if (!this.mesh) {
      this.mesh = new THREE.SkinnedMesh(geo, bodyMat);
      this.mesh.castShadow = true;
      this.mesh.receiveShadow = true;
      this.mesh.frustumCulled = false;
      this.body.add(this.mesh);
      this.inBind(() => { this.mesh.updateMatrixWorld(true); this.mesh.bind(new THREE.Skeleton(this.bones)); });
    } else {
      this.mesh.geometry = geo;
    }
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
