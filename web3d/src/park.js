import * as THREE from 'three';
import { Place, box, cyl, sphere, plane, mat, textSign } from './world.js';
import { batchStatic } from './optimization.js';

export const RUN_ROUTE = [[-19, 16], [-19, 0], [-19, -19], [0, -19], [19, -19], [19, 0], [19, 16], [0, 16]];
export const SHOT_SPOTS = [[-10, -7], [-14, -8], [-6, -8], [-13, -5], [-7, -3]];
export function buildPark() {
  const p = new Place('park', 'city');
  p.bounds = { x1: -24, x2: 24, z1: -24, z2: 24 };
  p.spawn = { x: 0, z: 19, rot: Math.PI };
  p.camDist = 9;
  const s = p.scene, scenery = new THREE.Group();
  s.add(scenery);
  s.background = new THREE.Color(0xb7cbd0);
  s.fog = new THREE.Fog(0xb7cbd0, 48, 115);
  s.add(new THREE.HemisphereLight(0xd5eeff, 0x756244, 1.25));
  const sun = new THREE.DirectionalLight(0xffd8ad, 2.8);
  sun.position.set(-18, 32, 12);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  Object.assign(sun.shadow.camera, { left: -30, right: 30, top: 30, bottom: -30 });
  sun.shadow.normalBias = 0.04;
  s.add(sun);
  const dark = mat(0x172f32), mint = mat(0xb7efb0), white = mat(0xf0e8d2), orange = mat(0xe08c5a);
  plane(180, 180, mat(0x637a5a), 0, 0, 0, scenery);
  box(48, 0.1, 48, mat(0x859078), 0, -0.01, 0, scenery, false);
  // A continuous track with a clear route, safe from city traffic.
  for (const x of [-19, 19]) plane(4, 40, orange, x, 0.06, -1.5, scenery);
  for (const z of [-19, 16]) plane(40, 4, orange, 0, 0.061, z, scenery);
  for (const x of [-20, -18, 18, 20]) plane(0.06, 37, white, x, 0.07, -1.5, scenery);
  for (const z of [-20, -18, 15, 17]) plane(40, 0.06, white, 0, 0.071, z, scenery);
  // Painted basketball half court.
  plane(16, 19, mat(0x31625f), -9, 0.08, -6.5, scenery);
  plane(5.5, 7, mat(0xc87951), -10, 0.09, -12.5, scenery);
  for (const x of [-17, -1]) plane(0.08, 19, white, x, 0.10, -6.5, scenery);
  for (const z of [-16, 3]) plane(16, 0.08, white, -9, 0.10, z, scenery);
  for (const x of [-12.75, -7.25]) plane(0.07, 7, white, x, 0.10, -12.5, scenery);
  plane(5.5, 0.07, white, -10, 0.10, -9, scenery);
  const line = new THREE.Mesh(new THREE.RingGeometry(6.8, 6.88, 64, 1, 0, Math.PI), white);
  line.rotation.x = -Math.PI / 2; line.position.set(-10, 0.105, -14); scenery.add(line);
  const circle = new THREE.Mesh(new THREE.RingGeometry(1.8, 1.87, 40), white);
  circle.rotation.x = -Math.PI / 2; circle.position.set(-10, 0.11, -9); scenery.add(circle);
  box(0.18, 3.8, 0.18, dark, -10, 1.9, -16.5, scenery);
  box(0.15, 0.15, 1.5, dark, -10, 3.4, -15.85, scenery);
  box(2.5, 1.45, 0.12, white, -10, 3.6, -15.2, scenery);
  box(0.8, 0.52, 0.02, dark, -10, 3.45, -15.12, scenery, false);
  box(0.65, 0.40, 0.02, white, -10, 3.45, -15.10, scenery, false);
  const rim = new THREE.Mesh(new THREE.TorusGeometry(0.45, 0.04, 8, 28), orange);
  rim.rotation.x = Math.PI / 2; rim.position.set(-10, 3.05, -14.65); scenery.add(rim);
  for (let i = 0; i < 10; i++) {
    const angle = i / 10 * Math.PI * 2;
    cyl(0.008, 0.008, 0.55, white, -10 + Math.cos(angle) * 0.34, 2.8, -14.65 + Math.sin(angle) * 0.34, scenery, 5);
  }
  p.solid(-10, -16.5, 0.3, 0.3, 4);
  const ball = sphere(0.25, mat(0xe28b37, { roughness: 0.85 }), -10, 0.4, -7, s, 20);
  const seamMat = mat(0x302a23);
  for (const rotation of [[0, 0, 0], [Math.PI / 2, 0, 0], [0, Math.PI / 2, 0]]) {
    const seam = new THREE.Mesh(new THREE.TorusGeometry(0.251, 0.008, 4, 24), seamMat);
    seam.rotation.set(...rotation); ball.add(seam);
  }
  p.basket = { ball, hoop: new THREE.Vector3(-10, 3.05, -14.65) };
  p.interact(-9, 5, 'Basketball · five-shot challenge', 'sport', 'basket', 2.3);
  // Open-air boxing station, with an articulated hanging bag.
  plane(9, 9, mat(0x354350), 9, 0.08, -10, scenery);
  for (const x of [6, 12]) { box(0.14, 4, 0.14, dark, x, 2, -12, scenery); p.solid(x, -12, 0.25, 0.25, 4); }
  box(6.2, 0.14, 0.14, dark, 9, 4, -12, scenery);
  const bagPivot = new THREE.Group(); bagPivot.position.set(9, 3.85, -12); s.add(bagPivot);
  cyl(0.02, 0.02, 0.6, dark, 0, -0.3, 0, bagPivot, 6);
  cyl(0.42, 0.42, 1.65, mat(0xac5545), 0, -1.4, 0, bagPivot, 20);
  cyl(0.425, 0.425, 0.18, white, 0, -1.1, 0, bagPivot, 20);
  p.boxing = { bag: bagPivot };
  p.interact(9, -6, 'Boxing · rhythm challenge', 'sport', 'boxing', 2.2);
  // Pavilion, free recovery and a physical challenge board.
  box(10, 0.15, 6, dark, 8, 3.5, 9, scenery);
  for (const x of [3.5, 12.5]) for (const z of [6.5, 11.5]) {
    box(0.13, 3.5, 0.13, dark, x, 1.75, z, scenery); p.solid(x, z, 0.2, 0.2, 4);
  }
  box(5, 0.2, 0.8, mat(0xc99360), 8, 0.6, 11, scenery);
  p.solid(8, 11, 5, 0.8, 1);
  p.interact(8, 9.5, 'Take a breather · daily recovery', 'rest', null, 1.8);
  cyl(0.27, 0.3, 1.1, dark, 2, 0.55, 9, scenery);
  p.interact(1.5, 8, 'Drinking fountain · recover 12 energy', 'water', null, 1.4);
  const sign = textSign('RIVERSIDE ATHLETIC CLUB', 10, 1.1, '#123b36', '#d9fba3', 'bold 64px sans-serif', true);
  sign.position.set(1, 4.7, -22); scenery.add(sign);
  const board = textSign('STREET → CLUB → PRO', 5, 0.9, '#16292f', '#d9fba3', 'bold 72px sans-serif');
  board.position.set(-7, 2.3, 10); scenery.add(board);
  [-9, -5].forEach(x => box(0.1, 2.7, 0.1, dark, x, 1.35, 10, scenery));
  p.interact(-7, 11.5, 'Challenge board · your career', 'journal', null, 1.8);
  p.interact(-15, 16, 'Park circuit · checkpoint race', 'sport', 'run', 2);
  p.interact(0, 22, 'Return to the city', 'exit', null, 1.8);
  const exit = textSign('← CITY', 3, 0.65, '#16292f', '#d9fba3'); exit.position.set(0, 2.6, 23); exit.rotation.y = Math.PI; scenery.add(exit);
  // Border shrubs and a modest distant skyline: no network assets.
  for (let i = 0; i < 18; i++) {
    const x = -55 + i * 6;
    box(4, 8 + i % 4 * 3, 5, mat([0x879394, 0x8c918b, 0xa0a198][i % 3]), x, 4 + i % 4 * 1.5, -50 - i % 3 * 5, scenery);
  }
  for (let i = 0; i < 16; i++) {
    const a = i / 16 * Math.PI * 2;
    const x = Math.cos(a) * 31, z = Math.sin(a) * 31;
    cyl(0.13, 0.22, 3, mat(0x78614b), x, 1.5, z, scenery, 7);
    sphere(2.4, mat(0x4b725d), x, 4.3, z, scenery, 9);
  }
  p.batching = batchStatic(scenery);
  // Reused checkpoint mesh. No objects are allocated during a running race.
  const gate = new THREE.Group();
  const ringMat = mat(0xb7ef83, { basic: true, transparent: true, opacity: 0.85, depthWrite: false });
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.25, 0.075, 8, 36), ringMat);
  ring.position.y = 1.5; gate.add(ring);
  const pad = new THREE.Mesh(new THREE.RingGeometry(1.25, 1.45, 36), ringMat);
  pad.rotation.x = -Math.PI / 2; pad.position.y = 0.12; gate.add(pad);
  gate.visible = false; s.add(gate); p.runGate = gate;
  p.updaters.push((dt, t) => { if (gate.visible) { ring.rotation.y += dt * 0.8; ring.position.y = 1.5 + Math.sin(t * 3) * 0.1; } });
  return p;
}
