import { QUESTS, questProgress } from './progression.js';
export const DESTINATIONS = {
  home: { x: -19, z: -10.6, label: 'Home', icon: 'H', color: '#eabf86' },
  gym: { x: 19, z: -10.6, label: 'Gym', icon: 'G', color: '#c4f58b' },
  shop: { x: -19, z: 11, label: 'Market', icon: '$', color: '#8dc9ed' },
  bank: { x: 19, z: 11, label: 'Bank', icon: 'B', color: '#d7b0f3' },
  park: { x: 30, z: 25, label: 'Sports park', icon: 'P', color: '#8fdec5' },
};
export const PLACE_NAMES = { city: 'Oakside · Downtown', home: 'Home · Recovery', gym: 'Iron House · Training', shop: 'Fresh Market', bank: 'City Bank', park: 'Riverside · Athletic Club' };
export function objective(state) {
  const q = QUESTS.find(q => !state.career.completed.includes(q.id));
  return q ? { title: q.title, desc: q.desc, progress: `${questProgress(state.career, q)}/${q.target}`, destination: q.destination } : { title: 'Become a city legend', desc: 'Chase Pro medals and reach 100 in every muscle.', progress: 'FREE PLAY', destination: 'park' };
}
export class Minimap {
  constructor(canvas) {
    this.canvas = canvas; this.g = canvas.getContext('2d');
    this.base = document.createElement('canvas'); this.base.width = this.base.height = 320;
    this.place = null; this.time = 0;
  }
  draw(dt, place, pos, heading, waypoint, route) {
    this.time += dt;
    if (this.time < 0.1 && this.place === place) return;
    this.time = 0;
    const size = 320, b = place.bounds, scale = 292 / Math.max(b.x2 - b.x1, b.z2 - b.z1);
    const X = x => 160 + x * scale, Y = z => 160 + z * scale;
    if (this.place !== place) {
      this.place = place;
      const g = this.base.getContext('2d');
      g.fillStyle = '#132c2a'; g.fillRect(0, 0, size, size);
      if (place.name === 'city') {
        g.fillStyle = '#3d4b46'; g.fillRect(0, Y(-4), size, 8 * scale); g.fillRect(X(-4), 0, 8 * scale, size);
        g.strokeStyle = '#769282'; g.setLineDash([4, 7]); g.beginPath(); g.moveTo(0, 160); g.lineTo(320, 160); g.moveTo(160, 0); g.lineTo(160, 320); g.stroke(); g.setLineDash([]);
      } else if (place.name === 'park') {
        g.strokeStyle = '#8e715a'; g.lineWidth = 4 * scale; g.strokeRect(X(-19), Y(-19), 38 * scale, 35 * scale);
        g.fillStyle = '#376961'; g.fillRect(X(-17), Y(-16), 16 * scale, 19 * scale);
        g.fillStyle = '#475367'; g.fillRect(X(4.5), Y(-14.5), 9 * scale, 9 * scale);
      }
      g.fillStyle = '#6b8174';
      for (const c of place.colliders) g.fillRect(X(c.x1), Y(c.z1), (c.x2 - c.x1) * scale, (c.z2 - c.z1) * scale);
      g.strokeStyle = '#52665b'; g.lineWidth = 1; g.strokeRect(14, 14, (b.x2 - b.x1) * scale, (b.z2 - b.z1) * scale);
    }
    const g = this.g;
    g.drawImage(this.base, 0, 0);
    const marker = (x, z, label, color, active) => {
      g.beginPath(); g.arc(X(x), Y(z), active ? 14 : 10, 0, Math.PI * 2); g.fillStyle = color; g.fill();
      g.fillStyle = '#102620'; g.font = 'bold 15px system-ui'; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillText(label, X(x), Y(z) + 1);
      if (active) { g.strokeStyle = color; g.lineWidth = 2; g.beginPath(); g.arc(X(x), Y(z), 18, 0, Math.PI * 2); g.stroke(); }
    };
    if (place.name === 'city') for (const [id, d] of Object.entries(DESTINATIONS)) marker(d.x, d.z, d.icon, d.color, waypoint === id);
    else for (const it of place.interactions) if (!it.disabled) marker(it.x, it.z, it.action === 'exit' ? '↗' : it.action === 'sport' ? (it.data === 'basket' ? 'B' : it.data === 'boxing' ? 'X' : 'R') : '·', '#a8c9b2', false);
    if (route) marker(route[0], route[1], '!', '#d5ff87', true);
    g.save(); g.translate(X(pos.x), Y(pos.z)); g.rotate(-heading);
    g.fillStyle = '#fff'; g.strokeStyle = '#0c302b'; g.lineWidth = 3;
    g.beginPath(); g.moveTo(0, 11); g.lineTo(-7, -7); g.lineTo(0, -3); g.lineTo(7, -7); g.closePath(); g.stroke(); g.fill(); g.restore();
    g.fillStyle = '#c0d4c4'; g.font = 'bold 14px system-ui'; g.textAlign = 'left'; g.fillText('N ↑', 20, 28);
  }
}
