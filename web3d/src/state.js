import { ACTIVITIES, LEAGUES, QUESTS, SECRETS, freshCareer, restoreCareer, levelFor, questProgress } from './progression.js';

// Game model: stats, inventory, days and random encounters.
// Browser edition balance; the original Java and 2D rules are unchanged.

export const MAX_STAT = 100;

export const DIFFICULTIES = {
  easy: { label: 'Easy', days: 40 },
  medium: { label: 'Normal', days: 30 },
  hard: { label: 'Hard', days: 20 },
};

export const FOODS = {
  hamburger: { name: 'Burger', cost: 15, stamina: 22, happiness: 12, mass: 0 },
  broccoli: { name: 'Broccoli', cost: 5, stamina: 15, happiness: 0, mass: 0 },
  meat: { name: 'Steak', cost: 10, stamina: 28, happiness: 4, mass: 1 },
};

// Workout costs
export const WORKOUT_STAMINA = 24;
export const WORKOUT_HAPPINESS = 4;

const VL = 2, L = 5, M = 10, H = 20, VH = 30;

export const ENCOUNTERS = [
  {
    id: 'moneybag', title: 'A bag of money', weight: 0.2,
    text: 'You find a bag full of money lying on the ground. Do you take it?',
    accept: { money: VH, happiness: L, stamina: -L },
    deny: { happiness: -L },
  },
  {
    id: 'robber', title: 'Robber', weight: 0.2,
    text: 'A robber tries to steal your wallet. Do you fight back?',
    accept: { mass: L, stamina: -H },
    deny: { money: -H, happiness: -M },
  },
  {
    id: 'pusher', title: 'Shady dealer', weight: 0.2,
    text: 'A shady guy offers you some steroids. Do you accept?',
    accept: { mass: M, happiness: -M, money: -H },
    deny: { happiness: L },
  },
  {
    id: 'gymbro', title: 'Your gym bro', weight: 0.2,
    text: 'Your gym bro is walking by. You owe him some money... do you stop to say hi?',
    accept: { happiness: L, stamina: M, money: -L },
    deny: { happiness: -M },
  },
  {
    id: 'icecream', title: 'Ice cream truck', weight: 0.2,
    text: 'There is an ice cream truck parked nearby. Do you buy one?',
    accept: { mass: -VL, happiness: H },
    deny: { happiness: -L, stamina: M },
  },
];

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

export class GameState {
  constructor(difficulty = 'medium') {
    difficulty = Object.hasOwn(DIFFICULTIES, difficulty) ? difficulty : 'medium';
    this.difficulty = difficulty;
    this.days = DIFFICULTIES[difficulty].days;
    this.totalDays = this.days;
    this.money = 40;
    this.stamina = 100;
    this.happiness = 70;
    this.legs = 1;
    this.chest = 1;
    this.back = 1;
    this.inventory = { hamburger: 1, broccoli: 1, meat: 1 };
    this.career = freshCareer();
    this.listeners = new Set();
  }

  get day() { return this.totalDays - this.days + 1; }
  get level() { return levelFor(this.career.xp); }
  get workoutCost() { return WORKOUT_STAMINA - Math.min(4, this.level - 1); }

  static fromSave(raw) {
    const s = new GameState(raw?.difficulty);
    if (!raw || typeof raw !== 'object') return s;
    const number = (v, fallback, max) => Number.isFinite(v) ? clamp(v, 0, max) : fallback;
    for (const k of ['stamina', 'happiness', 'legs', 'chest', 'back']) s[k] = number(raw[k], s[k], 100);
    s.money = number(raw.money, s.money, 1000000);
    s.days = Math.floor(number(raw.days, s.days, s.totalDays));
    for (const id of Object.keys(FOODS)) s.inventory[id] = Math.floor(number(raw.inventory?.[id], 0, 999));
    s.career = restoreCareer(raw.career);
    return s;
  }

  recover(id) {
    const gains = { water: { stamina: 12 }, rest: { stamina: 18, happiness: 10 }, bro: { happiness: 8 }, tv: { happiness: 10 } };
    if (!Object.hasOwn(gains, id) || this.career.recovery[id] === this.day) return null;
    this.career.recovery[id] = this.day;
    this.apply(gains[id]);
    return gains[id];
  }

  claimQuests() {
    const rewards = [];
    for (const q of QUESTS) {
      if (!this.career.completed.includes(q.id) && questProgress(this.career, q) >= q.target) {
        this.career.completed.push(q.id);
        this.career.xp += q.xp;
        this.money += q.money;
        rewards.push(q);
      }
    }
    return rewards;
  }

  completeActivity(id, score, tier = 0) {
    if (!ACTIVITIES.includes(id) || !Number.isFinite(score)) return null;
    score = clamp(score, 0, 1);
    tier = [0, 1, 2].includes(tier) ? tier : 0;
    const before = this.level;
    const c = this.career;
    const outdoor = ['basket', 'boxing', 'run'].includes(id);
    const personalBest = !(id in c.best) || score > c.best[id];
    c.best[id] = Math.max(c.best[id] || 0, score);
    c.sessions++;
    if (outdoor) c.outdoor++; else c.workouts++;
    const xp = Math.round(12 + score * 38 + tier * 6);
    c.xp += xp;
    let medal = false;
    let prize = outdoor ? Math.round(score * 12) : 0;
    if (outdoor && before >= LEAGUES[tier].level && score >= LEAGUES[tier].target) {
      c.medals[id] ||= [];
      if (!c.medals[id].includes(tier)) {
        c.medals[id].push(tier);
        prize += LEAGUES[tier].bonus;
        medal = true;
      }
    }
    if (c.daily.day !== this.day) c.daily = { day: this.day, sessions: 0, claimed: false };
    c.daily.sessions++;
    let daily = false;
    if (c.daily.sessions >= 3 && !c.daily.claimed) {
      c.daily.claimed = daily = true;
      c.xp += 60;
      prize += 25;
    }
    this.money += prize;
    const quests = this.claimQuests();
    this.emit();
    return { xp, prize, medal, daily, personalBest, quests, levelUp: this.level > before };
  }

  collectSecret(id) {
    if (!SECRETS.some(s => s.id === id) || this.career.secrets.includes(id)) return null;
    this.career.secrets.push(id);
    this.career.xp += 40;
    this.money += 15;
    const quests = this.claimQuests();
    this.emit();
    return quests;
  }

  get mass() {
    return this.legs + this.chest + this.back;
  }

  onChange(fn) {
    this.listeners.add(fn);
  }

  emit() {
    this.listeners.forEach((fn) => fn(this));
  }

  // Applies a map of changes {money, stamina, happiness, mass, legs, chest, back}
  apply(delta) {
    for (const [k, v] of Object.entries(delta)) {
      if (!Number.isFinite(v)) continue;
      if (k === 'money') this.money = Math.max(0, this.money + v);
      else if (k === 'mass') {
        // generic mass is split across the three muscle groups
        const part = v / 3;
        this.legs = clamp(this.legs + part, 0, MAX_STAT);
        this.chest = clamp(this.chest + part, 0, MAX_STAT);
        this.back = clamp(this.back + part, 0, MAX_STAT);
      } else if (['stamina', 'happiness', 'legs', 'chest', 'back'].includes(k) && Number.isFinite(v)) this[k] = clamp(this[k] + v, 0, MAX_STAT);
    }
    this.emit();
  }

  buy(foodId) {
    if (!Object.hasOwn(FOODS, foodId)) return false;
    const f = FOODS[foodId];
    if (!f || this.money < f.cost || this.inventory[foodId] >= 999) return false;
    this.money -= f.cost;
    this.inventory[foodId] += 1;
    this.emit();
    return true;
  }

  eat(foodId) {
    if (!Object.hasOwn(FOODS, foodId) || !this.inventory[foodId]) return false;
    const f = FOODS[foodId];
    this.inventory[foodId] -= 1;
    this.apply({ stamina: f.stamina, happiness: f.happiness, mass: f.mass });
    return true;
  }

  sleep() {
    this.days = Math.max(0, this.days - 1);
    this.career.daily = { day: this.day, sessions: 0, claimed: false };
    this.stamina = 100;
    this.happiness = clamp(this.happiness - 3, 0, MAX_STAT);
    this.emit();
  }

  canWorkout() {
    return this.stamina > this.workoutCost;
  }

  randomEncounter() {
    const r = Math.random();
    let acc = 0;
    for (const e of ENCOUNTERS) {
      acc += e.weight;
      if (r < acc) return e;
    }
    return ENCOUNTERS[ENCOUNTERS.length - 1];
  }

  isWin() {
    return this.legs >= MAX_STAT && this.chest >= MAX_STAT && this.back >= MAX_STAT;
  }

  gameOverReason() {
    if (this.days <= 0) return 'You ran out of days.';
    if (this.stamina <= 0) return 'You collapsed from exhaustion.';
    if (this.happiness <= 0) return 'You are too down to keep going.';
    return null;
  }
}
