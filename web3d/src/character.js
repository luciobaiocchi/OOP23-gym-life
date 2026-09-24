import * as THREE from 'three';

// Human character built from smooth primitives, with PBR materials.
// Muscles grow with the stats; joints are animated by poses.

const cache = new Map();
function std(color, roughness = 0.6, metalness = 0) {
  const k = `${color}-${roughness}-${metalness}`;
  if (!cache.has(k)) cache.set(k, new THREE.MeshStandardMaterial({ color, roughness, metalness }));
  return cache.get(k);
}

function part(geo, mat, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.set(x, y, z);
  m.castShadow = true;
  m.receiveShadow = true;
  return m;
}

function pivot(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

// Tapered limb: a lathe profile gives a rounded, organic shape
function limbGeo(rTop, rBottom, len, bulge = 0.15) {
  const pts = [];
  const n = 10;
  for (let i = 0; i <= n; i++) {
    const t = i / n;
    const r = rTop + (rBottom - rTop) * t + Math.sin(t * Math.PI) * bulge * Math.max(rTop, rBottom);
    const cap = Math.sin(Math.min(1, Math.min(t, 1 - t) * 6) * Math.PI / 2);
    pts.push(new THREE.Vector2(Math.max(0.001, r * (0.35 + 0.65 * cap)), -t * len));
  }
  return new THREE.LatheGeometry(pts, 18);
}

// Torso with a V taper: waist -> chest -> shoulders -> neck
function torsoGeo() {
  const prof = [[0.001, 0], [0.15, 0], [0.155, 0.08], [0.16, 0.2], [0.19, 0.32], [0.215, 0.42], [0.2, 0.5], [0.15, 0.56], [0.07, 0.6], [0.001, 0.61]];
  return new THREE.LatheGeometry(prof.map(([r, y]) => new THREE.Vector2(r, y)), 24);
}

export class Character {
  constructor(opts = {}) {
    this.root = new THREE.Group();
    this.body = new THREE.Group(); // moved/rotated by the poses
    this.root.add(this.body);
    const skin = std(opts.skin || 0xd9a07c, 0.55);
    const shirt = std(opts.shirt || 0xb3261e, 0.85);
    const shorts = std(opts.shorts || 0x1f2733, 0.9);
    const shoe = std(0xeeeeee, 0.5);
    const sole = std(0x2a2a2a, 0.8);
    const hair = std(opts.hair || 0x2a1a10, 0.9);
    const eyeWhite = std(0xf4f1ea, 0.3);
    const iris = std(0x2b1d12, 0.2);

    const HIP_Y = 0.95;
    this.hips = pivot(this.body, 0, HIP_Y, 0);
    const pelvis = part(new THREE.SphereGeometry(0.19, 20, 14), shorts, 0, 0.02, 0);
    pelvis.scale.set(1.1, 0.75, 0.8);
    this.hips.add(pelvis);

    // Legs
    this.legs = [-1, 1].map((side) => {
      const hip = pivot(this.hips, side * 0.11, -0.05, 0);
      const thigh = part(limbGeo(0.1, 0.07, 0.45, 0.2), skin);
      hip.add(thigh);
      const shortLeg = part(limbGeo(0.112, 0.1, 0.24, 0.1), shorts);
      hip.add(shortLeg);
      const knee = pivot(hip, 0, -0.45, 0);
      const shin = part(limbGeo(0.066, 0.045, 0.42, 0.25), skin);
      knee.add(shin);
      const calf = part(new THREE.SphereGeometry(0.055, 14, 10), skin, 0, -0.13, -0.03);
      calf.scale.set(1, 1.8, 1);
      knee.add(calf);
      const foot = part(new THREE.CapsuleGeometry(0.055, 0.16, 6, 12), shoe, 0, -0.44, 0.05);
      foot.rotation.x = Math.PI / 2;
      foot.scale.set(1.15, 1, 0.8);
      knee.add(foot);
      const soleM = part(new THREE.BoxGeometry(0.12, 0.025, 0.27), sole, 0, -0.475, 0.05);
      knee.add(soleM);
      return { hip, knee, thigh, shin, calf, shortLeg };
    });

    // Torso
    this.spine = pivot(this.hips, 0, 0.08, 0);
    this.torso = part(torsoGeo(), shirt);
    this.spine.add(this.torso);
    this.pecs = [-1, 1].map((sd) => {
      const pec = part(new THREE.SphereGeometry(0.1, 16, 12), shirt, sd * 0.085, 0.4, 0.12);
      pec.scale.set(1.2, 0.8, 0.5);
      this.spine.add(pec);
      return pec;
    });
    this.traps = part(new THREE.SphereGeometry(0.13, 16, 10), skin, 0, 0.55, -0.02);
    this.traps.scale.set(1.4, 0.5, 0.8);
    this.spine.add(this.traps);

    // Head
    this.neck = pivot(this.spine, 0, 0.58, 0);
    this.neck.add(part(new THREE.CylinderGeometry(0.055, 0.065, 0.12, 14), skin, 0, 0.04, 0));
    const head = part(new THREE.SphereGeometry(0.105, 24, 18), skin, 0, 0.18, 0.005);
    head.scale.set(0.95, 1.18, 1.05);
    this.neck.add(head);
    const jaw = part(new THREE.SphereGeometry(0.08, 18, 12), skin, 0, 0.115, 0.03);
    jaw.scale.set(1.05, 0.75, 1);
    this.neck.add(jaw);
    const nose = part(new THREE.ConeGeometry(0.018, 0.05, 10), skin, 0, 0.17, 0.115);
    nose.rotation.x = Math.PI / 2 + 0.3;
    this.neck.add(nose);
    [-1, 1].forEach((sd) => {
      const ear = part(new THREE.SphereGeometry(0.025, 10, 8), skin, sd * 0.1, 0.18, -0.005);
      ear.scale.set(0.5, 1.2, 0.9);
      this.neck.add(ear);
      const eye = part(new THREE.SphereGeometry(0.016, 12, 10), eyeWhite, sd * 0.038, 0.195, 0.093);
      this.neck.add(eye);
      const pupil = part(new THREE.SphereGeometry(0.008, 10, 8), iris, sd * 0.038, 0.195, 0.107);
      this.neck.add(pupil);
      const brow = part(new THREE.BoxGeometry(0.04, 0.008, 0.012), hair, sd * 0.038, 0.222, 0.1);
      brow.rotation.z = -sd * 0.12;
      this.neck.add(brow);
    });
    const hairCap = part(new THREE.SphereGeometry(0.11, 24, 12, 0, Math.PI * 2, 0, Math.PI / 2.1), hair, 0, 0.2, -0.004);
    hairCap.scale.set(0.98, 1.1, 1.08);
    this.neck.add(hairCap);

    // Arms (the +x side is the character's left: it faces +z)
    this.arms = [-1, 1].map((side) => {
      const shoulder = pivot(this.spine, side * 0.26, 0.49, 0);
      const delt = part(new THREE.SphereGeometry(0.075, 16, 12), skin, side * 0.015, -0.02, 0);
      delt.scale.set(1, 1.1, 1);
      shoulder.add(delt);
      const upper = part(limbGeo(0.062, 0.048, 0.31, 0.12), skin);
      shoulder.add(upper);
      const biceps = part(new THREE.SphereGeometry(0.045, 14, 10), skin, 0, -0.15, 0.025);
      biceps.scale.set(1, 1.7, 1);
      shoulder.add(biceps);
      const elbow = pivot(shoulder, 0, -0.31, 0);
      const fore = part(limbGeo(0.05, 0.034, 0.26, 0.2), skin);
      elbow.add(fore);
      const hand = part(new THREE.SphereGeometry(0.042, 14, 10), skin, 0, -0.3, 0.005);
      hand.scale.set(0.75, 1.15, 1);
      elbow.add(hand);
      return { side, shoulder, elbow, upper, fore, hand, delt, biceps };
    });

    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseT = 0;
    this.time = 0;
    this.setMuscles(1, 1, 1);
  }

  // 0..100 values for legs, chest and back
  setMuscles(legs, chest, back) {
    const l = legs / 100, c = chest / 100, b = back / 100;
    this.legs.forEach(({ thigh, shin, calf, shortLeg, hip }, i) => {
      thigh.scale.set(1 + l * 0.75, 1, 1 + l * 0.75);
      shortLeg.scale.set(1 + l * 0.7, 1, 1 + l * 0.7);
      shin.scale.set(1 + l * 0.35, 1, 1 + l * 0.35);
      calf.scale.set(1 + l * 0.8, 1.8 + l * 0.4, 1 + l * 0.9);
      hip.position.x = (i ? 1 : -1) * (0.11 + l * 0.035);
    });
    this.torso.scale.set(1 + b * 0.55, 1, 1 + (b + c) * 0.18);
    this.pecs.forEach((pec, i) => {
      pec.scale.set(1.2 + c * 0.6, 0.8 + c * 0.35, 0.5 + c * 1.1);
      pec.position.set((i ? 1 : -1) * (0.085 + b * 0.035 + c * 0.02), 0.4, 0.12 + c * 0.02);
    });
    this.traps.scale.set(1.4 + b * 0.8, 0.5 + b * 0.5, 0.8 + b * 0.4);
    const arm = (c + b) / 2;
    this.arms.forEach((a) => {
      a.shoulder.position.x = a.side * (0.26 + b * 0.12);
      a.upper.scale.set(1 + arm * 0.6, 1, 1 + arm * 0.6);
      a.biceps.scale.set(1 + arm * 0.9, 1.7 + arm * 0.4, 1 + arm * 1.1);
      a.fore.scale.set(1 + arm * 0.4, 1, 1 + arm * 0.4);
      a.delt.scale.setScalar(1 + arm * 0.7);
    });
  }

  resetJoints() {
    this.body.position.set(0, 0, 0);
    this.body.rotation.set(0, 0, 0);
    this.spine.rotation.set(0, 0, 0);
    this.neck.rotation.set(0, 0, 0);
    this.legs.forEach((l) => { l.hip.rotation.set(0, 0, 0); l.knee.rotation.set(0, 0, 0); });
    this.arms.forEach((a) => { a.shoulder.rotation.set(0, 0, 0); a.elbow.rotation.set(0, 0, 0); });
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
