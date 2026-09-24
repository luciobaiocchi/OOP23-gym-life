// Modello di gioco: statistiche, inventario, giorni, imprevisti.
// Valori ripresi dalla versione Java (StatsConstants, FoodType, EncountersConstants, GameDifficulty).

export const MAX_STAT = 100;

export const DIFFICULTIES = {
  easy: { label: 'Facile', days: 40 },
  medium: { label: 'Normale', days: 30 },
  hard: { label: 'Difficile', days: 20 },
};

export const FOODS = {
  hamburger: { name: 'Hamburger', icon: '🍔', cost: 15, stamina: 5, happiness: 10, mass: -5 },
  broccoli: { name: 'Broccoli', icon: '🥦', cost: 5, stamina: 10, happiness: -10, mass: 5 },
  meat: { name: 'Bistecca', icon: '🥩', cost: 10, stamina: 5, happiness: 5, mass: -5 },
};

// Costi degli allenamenti
export const WORKOUT_STAMINA = 35;
export const WORKOUT_HAPPINESS = 4;

const VL = 2, L = 5, M = 10, H = 20, VH = 30;

export const ENCOUNTERS = [
  {
    id: 'moneybag', title: 'Borsa di soldi', icon: '💰', weight: 0.2,
    text: 'Trovi una borsa piena di soldi per terra. La prendi?',
    accept: { money: VH, happiness: L, stamina: -L },
    deny: { happiness: -L },
  },
  {
    id: 'robber', title: 'Rapinatore', icon: '🦹', weight: 0.2,
    text: 'Un rapinatore prova a rubarti il portafoglio. Reagisci?',
    accept: { mass: L, stamina: -H },
    deny: { money: -H, happiness: -M },
  },
  {
    id: 'pusher', title: 'Spacciatore', icon: '💉', weight: 0.2,
    text: 'Un tizio losco ti offre degli steroidi. Accetti?',
    accept: { mass: M, happiness: -M, money: -H },
    deny: { happiness: L },
  },
  {
    id: 'gymbro', title: 'Gym bro', icon: '🤜', weight: 0.2,
    text: 'Passa il tuo gym bro. Gli devi dei soldi... ti fermi a salutarlo?',
    accept: { happiness: L, stamina: M, money: -L },
    deny: { happiness: -M },
  },
  {
    id: 'icecream', title: 'Camioncino dei gelati', icon: '🍦', weight: 0.2,
    text: 'C\'è un camioncino dei gelati qui fuori. Ne compri uno?',
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

  // Applica una mappa di variazioni {money, stamina, happiness, mass, legs, chest, back}
  apply(delta) {
    for (const [k, v] of Object.entries(delta)) {
      if (k === 'money') this.money = Math.max(0, this.money + v);
      else if (k === 'mass') {
        // la massa generica si divide sui tre gruppi muscolari
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

  // score in [0,1]: gain proporzionale al completamento del minigioco
  workout(group, score) {
    const gain = Math.round(4 + score * 14);
    this.apply({ [group]: gain, stamina: -WORKOUT_STAMINA, happiness: score > 0.5 ? WORKOUT_HAPPINESS : -WORKOUT_HAPPINESS });
    return gain;
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
    if (this.days <= 0) return 'Hai finito i giorni a disposizione!';
    if (this.stamina <= 0) return 'Sei crollato dalla stanchezza!';
    if (this.happiness <= 0) return 'Sei troppo depresso per continuare...';
    return null;
  }
}
