// Progression is deterministic and independent of rendering, so saves can be migrated safely.
export const ACTIVITIES = ['squat', 'bench', 'lat', 'basket', 'boxing', 'run'];
export const RANKS = ['Rookie', 'Regular', 'Contender', 'All-star', 'Local hero', 'City legend'];
export const LEAGUES = [
  { name: 'Street', level: 1, target: 0.50, bonus: 15 },
  { name: 'Club', level: 3, target: 0.65, bonus: 30 },
  { name: 'Pro', level: 5, target: 0.80, bonus: 55 },
];
export const SECRETS = [
  { id: 'legday', x: -35, z: -31, title: 'Never skip leg day', text: 'Someone left a golden dumbbell behind the house. The inscription says: even on Mondays.' },
  { id: 'lightweight', x: 31, z: -27, title: 'Light weight, baby!', text: 'A tiny golden dumbbell. Somehow, you can hear an entire gym cheering.' },
  { id: 'disco', x: -34, z: 32, title: 'The after-hours club', text: 'A golden dumbbell and a note: we are all going to make it. The city has a new legend.' },
];
export const QUESTS = [
  { id: 'first_rep', title: 'Show up', desc: 'Finish your first gym workout.', event: 'workout', target: 1, xp: 45, money: 15, destination: 'gym' },
  { id: 'fresh_air', title: 'Beyond the gym', desc: 'Try basketball, boxing or the park circuit.', event: 'sport', target: 1, xp: 50, money: 20, destination: 'park' },
  { id: 'balanced', title: 'Full body', desc: 'Train squat, bench and lat at least once.', event: 'groups', target: 3, xp: 80, money: 30, destination: 'gym' },
  { id: 'athlete', title: 'All-round athlete', desc: 'Try all three outdoor sports.', event: 'sports', target: 3, xp: 100, money: 40, destination: 'park' },
  { id: 'precision', title: 'In the zone', desc: 'Score 80% or more in any training session.', event: 'precision', target: 1, xp: 60, money: 20, destination: 'park' },
  { id: 'treasure', title: 'Golden hour', desc: 'Find three golden dumbbells around town.', event: 'secret', target: 3, xp: 150, money: 75, destination: 'city' },
];
export const freshCareer = () => ({
  xp: 0, sessions: 0, workouts: 0, outdoor: 0, best: {}, medals: {}, completed: [], secrets: [],
  daily: { day: 1, sessions: 0, claimed: false }, recovery: {}, outfit: 0,
});
export function levelFor(xp) { return Math.min(10, 1 + Math.floor(Math.sqrt(Math.max(0, xp) / 80))); }
export function xpFloor(level) { return 80 * (level - 1) ** 2; }
export function rankFor(level) { return RANKS[Math.min(RANKS.length - 1, Math.floor(level / 2))]; }
export function questProgress(c, q) {
  const values = {
    workout: c.workouts, sport: c.outdoor,
    groups: ['squat', 'bench', 'lat'].filter(id => id in c.best).length,
    sports: ['basket', 'boxing', 'run'].filter(id => id in c.best).length,
    precision: Object.values(c.best).some(v => v >= 0.8) ? 1 : 0,
    secret: c.secrets.length,
  };
  return Math.min(q.target, values[q.event] || 0);
}
const finite = (n, fallback = 0, max = 1e7) => Number.isFinite(n) ? Math.max(0, Math.min(max, n)) : fallback;
export function restoreCareer(raw) {
  const c = freshCareer();
  if (!raw || typeof raw !== 'object') return c;
  for (const k of ['xp', 'sessions', 'workouts', 'outdoor']) c[k] = finite(raw[k]);
  for (const id of ACTIVITIES) if (Number.isFinite(raw.best?.[id])) c.best[id] = finite(raw.best[id], 0, 1);
  for (const id of ['basket', 'boxing', 'run']) {
    c.medals[id] = Array.isArray(raw.medals?.[id]) ? [...new Set(raw.medals[id].filter(n => [0, 1, 2].includes(n)))] : [];
  }
  c.completed = QUESTS.filter(q => Array.isArray(raw.completed) && raw.completed.includes(q.id)).map(q => q.id);
  c.secrets = SECRETS.filter(s => Array.isArray(raw.secrets) && raw.secrets.includes(s.id)).map(s => s.id);
  c.outfit = Math.floor(finite(raw.outfit, 0, 3));
  if (raw.daily && typeof raw.daily === 'object') c.daily = { day: finite(raw.daily.day, 1), sessions: finite(raw.daily.sessions), claimed: raw.daily.claimed === true };
  for (const id of ['water', 'rest', 'bro', 'tv']) c.recovery[id] = finite(raw.recovery?.[id], -1);
  return c;
}
