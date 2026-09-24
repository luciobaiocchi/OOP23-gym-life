// Game model: stats, inventory, days and random encounters.
// Values come from the Java version (StatsConstants, FoodType, EncountersConstants, GameDifficulty).

export const MAX_STAT = 100;

export const DIFFICULTIES = {
  easy: { label: 'Easy', days: 40 },
  medium: { label: 'Normal', days: 30 },
  hard: { label: 'Hard', days: 20 },
};

export const FOODS = {
  hamburger: { name: 'Burger', cost: 15, stamina: 5, happiness: 10, mass: -5 },
  broccoli: { name: 'Broccoli', cost: 5, stamina: 10, happiness: -10, mass: 5 },
  meat: { name: 'Steak', cost: 10, stamina: 5, happiness: 5, mass: -5 },
};

// Workout costs
export const WORKOUT_STAMINA = 35;
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
    this.difficulty = difficulty;
    this.days = DIFFICULTIES[difficulty].days;
    this.totalDays = this.days;
    this.money = 20;
    this.stamina = 100;
    this.happiness = 70;
    this.legs = 1;
    this.chest = 1;
    this.back = 1;
    this.inventory = { hamburger: 0, broccoli: 0, meat: 0 };
    this.listeners = new Set();
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
      if (k === 'money') this.money = Math.max(0, this.money + v);
      else if (k === 'mass') {
        // generic mass is split across the three muscle groups
        const part = v / 3;
        this.legs = clamp(this.legs + part, 0, MAX_STAT);
        this.chest = clamp(this.chest + part, 0, MAX_STAT);
        this.back = clamp(this.back + part, 0, MAX_STAT);
      } else if (k in this) this[k] = clamp(this[k] + v, 0, MAX_STAT);
    }
    this.emit();
  }

  buy(foodId) {
    const f = FOODS[foodId];
    if (this.money < f.cost) return false;
    this.money -= f.cost;
    this.inventory[foodId] += 1;
    this.emit();
    return true;
  }

  eat(foodId) {
    if (this.inventory[foodId] <= 0) return false;
    const f = FOODS[foodId];
    this.inventory[foodId] -= 1;
    this.apply({ stamina: f.stamina, happiness: f.happiness, mass: f.mass });
    return true;
  }

  sleep() {
    this.days -= 1;
    this.stamina = 100;
    this.happiness = clamp(this.happiness - 3, 0, MAX_STAT);
    this.emit();
  }

  canWorkout() {
    return this.stamina >= WORKOUT_STAMINA;
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
