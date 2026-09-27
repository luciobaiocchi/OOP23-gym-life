import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Merge only explicitly static scenery, by material and spatial cell. Small cells
// preserve frustum culling; animated props, characters and markers stay independent.
export function batchStatic(root) {
  root.updateMatrixWorld(true);
  const groups = new Map();
  const inverse = root.matrixWorld.clone().invert();
  let before = 0, after = 0;
  function visit(o) {
    if (o.userData.dynamic || o.isSkinnedMesh) return;
    if (o.isMesh && !Array.isArray(o.material) && !o.material.transparent) {
      const center = new THREE.Vector3().setFromMatrixPosition(o.matrixWorld);
      const signature = Object.keys(o.geometry.attributes).sort().join(',');
      const key = [Math.floor(center.x / 24), Math.floor(center.z / 24), o.material.uuid, o.castShadow, o.receiveShadow, o.renderOrder, signature].join(':');
      if (!groups.has(key)) groups.set(key, []);
      groups.get(key).push(o);
      before++;
    }
    for (const child of o.children) visit(child);
  }
  visit(root);
  for (const meshes of groups.values()) {
    if (meshes.length < 2) { after++; continue; }
    const geometries = meshes.map(m => {
      const g = m.geometry.index ? m.geometry.toNonIndexed() : m.geometry.clone();
      return g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse, m.matrixWorld));
    });
    const geo = mergeGeometries(geometries);
    geometries.forEach(g => g.dispose());
    if (!geo) { after += meshes.length; continue; }
    const first = meshes[0];
    const batch = new THREE.Mesh(geo, first.material);
    batch.castShadow = first.castShadow;
    batch.receiveShadow = first.receiveShadow;
    batch.renderOrder = first.renderOrder;
    batch.name = 'Static scenery batch';
    geo.computeBoundingSphere();
    batch.updateMatrix();
    batch.matrixAutoUpdate = false;
    root.add(batch);
    for (const mesh of meshes) { mesh.removeFromParent(); mesh.geometry.dispose(); }
    after++;
  }
  return { before, after };
}
