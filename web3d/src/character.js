import * as THREE from 'three';

// Personaggio low-poly costruito con primitive: i muscoli crescono con le statistiche.

const skinMat = new THREE.MeshLambertMaterial({ color: 0xe0a57a });
const shirtMat = new THREE.MeshLambertMaterial({ color: 0xd8342c });
const shortsMat = new THREE.MeshLambertMaterial({ color: 0x23324a });
const shoeMat = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
const hairMat = new THREE.MeshLambertMaterial({ color: 0x2a1a10 });
const eyeMat = new THREE.MeshBasicMaterial({ color: 0x111111 });

function part(geo, mat, y = 0) {
  const m = new THREE.Mesh(geo, mat);
  m.position.y = y;
  m.castShadow = true;
  return m;
}

function pivot(parent, x, y, z) {
  const g = new THREE.Group();
  g.position.set(x, y, z);
  parent.add(g);
  return g;
}

export class Character {
  constructor(opts = {}) {
    this.root = new THREE.Group();
    this.body = new THREE.Group(); // spostato/ruotato dalle pose
    this.root.add(this.body);
    const shirt = opts.shirt ? new THREE.MeshLambertMaterial({ color: opts.shirt }) : shirtMat;
    const skin = opts.skin ? new THREE.MeshLambertMaterial({ color: opts.skin }) : skinMat;

    const HIP_Y = 0.95;
    this.hips = pivot(this.body, 0, HIP_Y, 0);
    this.hips.add(part(new THREE.BoxGeometry(0.42, 0.2, 0.26), shortsMat, 0.02));

    // Gambe
    this.legs = [-1, 1].map((side) => {
      const hip = pivot(this.hips, side * 0.12, -0.05, 0);
      const thigh = part(new THREE.CapsuleGeometry(0.09, 0.3, 4, 8), shortsMat, -0.22);
      hip.add(thigh);
      const knee = pivot(hip, 0, -0.45, 0);
      const shin = part(new THREE.CapsuleGeometry(0.07, 0.3, 4, 8), skin, -0.2);
      knee.add(shin);
      const foot = part(new THREE.BoxGeometry(0.12, 0.08, 0.26), shoeMat, -0.44);
      foot.position.z = 0.05;
      knee.add(foot);
      return { hip, knee, thigh, shin };
    });

    // Busto
    this.spine = pivot(this.hips, 0, 0.08, 0);
    this.torso = part(new THREE.CylinderGeometry(0.24, 0.18, 0.55, 8), shirt, 0.28);
    this.spine.add(this.torso);
    this.chestMesh = part(new THREE.BoxGeometry(0.4, 0.2, 0.12), skin, 0.42);
    this.chestMesh.position.z = 0.1;
    this.chestMesh.scale.set(1, 1, 0.3);
    this.spine.add(this.chestMesh);
    this.neck = pivot(this.spine, 0, 0.58, 0);
    this.neck.add(part(new THREE.CylinderGeometry(0.06, 0.07, 0.1, 6), skin, 0.03));
    const head = part(new THREE.SphereGeometry(0.13, 12, 10), skin, 0.18);
    head.scale.set(1, 1.1, 1);
    this.neck.add(head);
    const hair = part(new THREE.SphereGeometry(0.135, 12, 6, 0, Math.PI * 2, 0, Math.PI / 2.2), hairMat, 0.2);
    this.neck.add(hair);
    [-1, 1].forEach((s) => {
      const eye = new THREE.Mesh(new THREE.SphereGeometry(0.018, 6, 4), eyeMat);
      eye.position.set(s * 0.045, 0.2, 0.12);
      this.neck.add(eye);
    });

    // Braccia (lato +x = sinistra del personaggio, che guarda verso +z)
    this.arms = [-1, 1].map((side) => {
      const shoulder = pivot(this.spine, side * 0.3, 0.5, 0);
      shoulder.add(part(new THREE.SphereGeometry(0.085, 8, 6), shirt, 0));
      const upper = part(new THREE.CapsuleGeometry(0.065, 0.22, 4, 8), skin, -0.16);
      shoulder.add(upper);
      const elbow = pivot(shoulder, 0, -0.32, 0);
      const fore = part(new THREE.CapsuleGeometry(0.055, 0.22, 4, 8), skin, -0.14);
      elbow.add(fore);
      const hand = part(new THREE.SphereGeometry(0.055, 6, 5), skin, -0.3);
      elbow.add(hand);
      return { side, shoulder, elbow, upper, fore, hand };
    });

    this.walkPhase = 0;
    this.pose = 'idle';
    this.poseT = 0;
    this.time = 0;
    this.setMuscles(1, 1, 1);
  }

  // Valori 0..100 per gambe, petto, schiena
  setMuscles(legs, chest, back) {
    const l = legs / 100, c = chest / 100, b = back / 100;
    this.legs.forEach(({ thigh, shin }) => {
      thigh.scale.set(1 + l * 0.9, 1, 1 + l * 0.9);
      shin.scale.set(1 + l * 0.6, 1, 1 + l * 0.6);
    });
    this.legs[0].hip.position.x = -0.12 - l * 0.04;
    this.legs[1].hip.position.x = 0.12 + l * 0.04;
    const w = 1 + b * 0.8;
    this.torso.scale.set(w, 1, 1 + (b + c) * 0.35);
    this.chestMesh.scale.set(1 + b * 0.5, 1 + c * 0.3, 0.3 + c * 2.2);
    this.chestMesh.position.z = 0.1 + c * 0.05;
    const arm = 1 + (c + b) * 0.55;
    this.arms.forEach((a) => {
      a.shoulder.position.x = a.side * (0.3 + b * 0.18);
      a.upper.scale.set(arm, 1, arm);
      a.fore.scale.set(1 + (c + b) * 0.3, 1, 1 + (c + b) * 0.3);
      a.shoulder.children[0].scale.setScalar(1 + (c + b) * 0.5);
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

  // Imposta una posa; p (0..1) indica il punto del movimento per gli esercizi
  setPose(name, p = 0) {
    this.pose = name;
    this.poseT = p;
  }

  update(dt, speed = 0) {
    this.time += dt;
    this.resetJoints();
    const p = this.poseT;
    const [L, R] = this.legs; // L = lato -x
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
        // posa da bodybuilder (doppio bicipite)
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
        // mani sul bilanciere dietro al collo
        AL.shoulder.rotation.z = -1.9;
        AR.shoulder.rotation.z = 1.9;
        AL.elbow.rotation.z = -1.9;
        AR.elbow.rotation.z = 1.9;
        break;
      }
      case 'bench': {
        // sdraiato sulla panca: il corpo è ruotato di 90° (testa verso -z)
        this.body.rotation.x = -Math.PI / 2;
        this.body.position.set(0, 0.68, 1.05);
        L.hip.rotation.x = R.hip.rotation.x = 0.25;
        L.knee.rotation.x = R.knee.rotation.x = 1.3;
        L.hip.rotation.z = -0.3;
        R.hip.rotation.z = 0.3;
        // p = 1 braccia distese, p = 0 bilanciere al petto
        const q = 1 - p;
        AL.shoulder.rotation.x = AR.shoulder.rotation.x = -Math.PI / 2 + q * 0.2;
        AL.shoulder.rotation.z = -q * 1.1;
        AR.shoulder.rotation.z = q * 1.1;
        AL.elbow.rotation.z = q * 1.9;
        AR.elbow.rotation.z = -q * 1.9;
        break;
      }
      case 'lat': {
        // seduto, tira la sbarra verso il petto
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
        // conta banconote alla scrivania
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
