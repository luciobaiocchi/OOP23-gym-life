/*
 * Gym Life (2D) - browser port of the original Java/Swing game.
 * Same rules, maps and sprites as the Java version: the images, font and maps
 * are loaded from ../src/main/resources, the logic mirrors the model classes.
 */
(function () {
  'use strict';

  var RES = '../src/main/resources/';
  var $ = function (sel, root) { return (root || document).querySelector(sel); };
  var el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html !== undefined) e.innerHTML = html;
    return e;
  };
  var img = function (path) { return RES + 'images/' + path; };

  // ---------------------------------------------------------------- CONSTANTS (from the Java code)
  var MAP_X = 8, MAP_Y = 6;
  var MAX_STATS = 100, MAX_MASS = 300, LEVEL_1 = 33, LEVEL_2 = 66;
  var GYM_STAMINA_CONSUMPTION = -55;
  var START_POS = { x: 6, y: 2 };
  var GAME_DIFFICULTY = { EASY: 40, MEDIUM: 30, HARD: 20 };

  // maps/*.txt (8 x 6 cell ids)
  var MAPS = {
    house: { pos: { x: 6, y: 2 }, cells: '1 2 3 0 0 0 12 0|4 5 6 0 11 0 0 0|0 7 0 0 0 0 0 13|0 0 0 0 37 38 0 0|48 14 49 0 0 0 0 0|8 9 10 0 0 39 0 0' },
    gym: { pos: { x: 1, y: 3 }, cells: '28 29 28 28 26 26 26 35|26 30 26 26 26 26 34 33|26 26 26 26 26 26 26 36|27 26 26 26 26 26 26 26|26 26 26 26 26 32 26 26|26 26 35 26 26 31 26 36' },
    shop: { pos: { x: 6, y: 4 }, cells: '17 18 17 19 17 20 17 25|15 21 15 22 15 23 15 24|40 41 42 40 41 42 15 40|15 15 15 15 15 15 15 15|43 44 45 46 15 15 15 42|15 15 15 15 15 47 16 15' },
  };

  // CellImpl: id -> [name, collision, interaction]
  var CELLS = {
    0: ['house_floor', false], 1: ['house_bed01', true], 2: ['house_bed02', true], 3: ['house_bed03', true],
    4: ['house_bed04', true], 5: ['house_bed05', true], 6: ['house_bed06', true], 7: ['house_bed_interact', false, 'sleep'],
    8: ['house_kitchen01', true], 9: ['house_kitchen02', true], 10: ['house_kitchen03', true], 11: ['house_table', true],
    12: ['house_weights', false], 13: ['house_exit', false, 'exit'], 14: ['house_meat_interact', false, 'eat:MEAT'],
    48: ['house_hamburger_interact', false, 'eat:HAMBURGER'], 49: ['house_broccoli_interact', false, 'eat:BROCCOLI'],
    37: ['house_couch01', true], 38: ['house_couch02', true], 39: ['house_tv', true],
    15: ['shop_floor', false], 16: ['shop_exit', false, 'exit'], 17: ['shop_fridge', true], 18: ['shop_hamburger', true],
    19: ['shop_broccoli', true], 20: ['shop_meat', true], 21: ['shop_hamburger_interact', false, 'buy:HAMBURGER'],
    22: ['shop_broccoli_interact', false, 'buy:BROCCOLI'], 23: ['shop_meat_interact', false, 'buy:MEAT'],
    24: ['shop_money', false, 'bank'], 25: ['shop_atm', true], 40: ['shop_shelf01', true], 41: ['shop_shelf02', true],
    42: ['shop_shelf03', true], 43: ['shop_groceries01', true], 44: ['shop_groceries02', true], 45: ['shop_groceries03', true],
    46: ['shop_groceries04', true], 47: ['shop_checkout', true],
    26: ['gym_floor', false], 27: ['gym_exit', false, 'exit'], 28: ['gym_bench', true], 29: ['gym_chest', true],
    30: ['gym_chest_interact', false, 'minigame:BENCH_PRESS'], 31: ['gym_lat', true],
    32: ['gym_back_interact', false, 'minigame:LAT_MACHINE'], 33: ['gym_squat', true],
    34: ['gym_legs_interact', false, 'minigame:SQUAT'], 35: ['gym_weights01', true], 36: ['gym_weights02', true],
  };

  // FoodType(cost, stamina, happiness, mass)
  var FOOD = {
    HAMBURGER: { cost: 15, perks: { STAMINA: 5, HAPPINESS: 10, MASS: -5 } },
    BROCCOLI: { cost: 5, perks: { STAMINA: 10, HAPPINESS: -10, MASS: 5 } },
    MEAT: { cost: 10, perks: { STAMINA: 5, HAPPINESS: 5, MASS: -5 } },
  };

  // EncountersConstants
  var VH = 30, H = 20, M = 10, L = 5, VL = 2;
  var ENCOUNTERS = [
    { name: 'MONEY_BAG', desc: 'You find a bag of money on the ground. Do you take it?', accept: { MONEY: VH, HAPPINESS: L, STAMINA: -L }, deny: { HAPPINESS: -L } },
    { name: 'ROBBER', desc: 'A robber tries to steal your wallet. Do you fight back?', accept: { MASS: L, STAMINA: -H }, deny: { MONEY: -H, HAPPINESS: -M } },
    { name: 'PUSHER', desc: 'A pusher offers you some steroids. Do you accept?', accept: { MASS: M, HAPPINESS: -M, MONEY: -H }, deny: { HAPPINESS: L } },
    { name: 'GYM_BRO', desc: 'You see your gym bro walking by. You owe him some money. Do you stop to say hi?', accept: { HAPPINESS: L, STAMINA: M, MONEY: -L }, deny: { HAPPINESS: -M } },
    { name: 'ICE_CREAM', desc: 'An ice cream truck is parked outside the gym. Do you buy one?', accept: { MASS: -VL, HAPPINESS: H }, deny: { HAPPINESS: -L, STAMINA: M } },
  ];

  // MinigameDifficulty(requiredReps, experienceGained, reactionTime, touchForLift, maxMistakes, progress)
  var MG_DIFF = {
    EASY: { reps: 1, exp: 5, reaction: 3000, touch: 3, mistakes: 3, progress: 34 },
    MEDIUM: { reps: 3, exp: 10, reaction: 2000, touch: 5, mistakes: 1, progress: 20 },
    HARD: { reps: 7, exp: 20, reaction: 1000, touch: 10, mistakes: 0, progress: 10 },
  };
  var MG_TYPE = {
    BENCH_PRESS: { stat: 'CHEST_MASS', name: 'Bench Press', desc: 'Press the button as fast as you can!', sprites: 'bench_press' },
    SQUAT: { stat: 'LEG_MASS', name: 'Squat', desc: '', sprites: 'squat' },
    LAT_MACHINE: { stat: 'BACK_MASS', name: 'Lat Machine', desc: 'Press the buttons in order!', sprites: 'lat_pulldown' },
  };
  var COLORS = { Red: 'rgb(255,0,0)', Green: 'rgb(0,255,0)', Blue: 'rgb(0,0,255)', Yellow: 'rgb(255,255,0)', Orange: 'rgb(255,165,0)', Purple: 'rgb(128,0,128)', Pink: 'rgb(255,192,203)' };

  // ---------------------------------------------------------------- MODEL
  var game = null;
  var scores = { BENCH_PRESS: {}, SQUAT: {}, LAT_MACHINE: {} }; // best times (ms), top 5 per difficulty
  try { scores = JSON.parse(localStorage.getItem('gymlife2d.scores')) || scores; } catch (e) { /* no storage */ }

  function counter(value, limit) { return { v: Math.max(0, value), limit: limit }; }

  function newGame(difficulty) {
    game = {
      stats: {
        HAPPINESS: counter(MAX_STATS / 2, MAX_STATS),
        STAMINA: counter(MAX_STATS, MAX_STATS),
        LEG_MASS: counter(1, MAX_STATS), CHEST_MASS: counter(1, MAX_STATS), BACK_MASS: counter(1, MAX_STATS),
      },
      days: GAME_DIFFICULTY[difficulty],
      money: MAX_STATS, // the Java controller starts with 50 and then sets it to 100
      food: { HAMBURGER: 0, BROCCOLI: 0, MEAT: 0 },
      map: 'house',
      pos: { x: START_POS.x, y: START_POS.y },
      dir: 'down',
      scenario: 'INDOOR_MAP',
      encounter: null,
      foodToBuy: 'HAMBURGER',
      minigame: null,
      planeThresholds: [],
    };
  }

  function mass() { var s = game.stats; return s.LEG_MASS.v + s.CHEST_MASS.v + s.BACK_MASS.v; }
  function isMax(type) { return type === 'MASS' ? mass() >= MAX_MASS : game.stats[type].v >= game.stats[type].limit; }
  function getStat(type) { return type === 'MASS' ? mass() : game.stats[type].v; }

  // StatsManager.multiIncrementStat
  function addStat(type, value) {
    if (type === 'MONEY') { game.money = Math.max(0, game.money + value); return; }
    if (type === 'MASS') { ['LEG_MASS', 'CHEST_MASS', 'BACK_MASS'].forEach(function (t) { addStat(t, value); }); return; }
    var c = game.stats[type];
    c.v = Math.min(c.limit, Math.max(0, c.v + value));
  }

  function isGameOver() {
    if (game.days === 0) return true;
    return ['HAPPINESS', 'STAMINA', 'LEG_MASS', 'CHEST_MASS', 'BACK_MASS'].some(function (t) { return game.stats[t].v === 0; }) || mass() === 0;
  }
  function isWin() { return mass() >= MAX_MASS; }
  function playerLevel() { return mass() < MAX_MASS ? Math.floor(mass() / 75) + 1 : 4; }
  function cellAt(x, y) { return CELLS[MAPS[game.map].grid[y][x]] || ['house_floor', false]; }

  Object.keys(MAPS).forEach(function (k) {
    MAPS[k].grid = MAPS[k].cells.split('|').map(function (row) { return row.split(' ').map(Number); });
  });

  // ---------------------------------------------------------------- VIEW SETUP
  var frame = $('#frame'), scene = $('#scene'), side = $('#side');
  var views = {};
  function view(name, cls) {
    var v = el('div', 'view ' + (cls || ''));
    v.style.display = 'none';
    scene.appendChild(v);
    views[name] = v;
    return v;
  }
  function show(name) {
    Object.keys(views).forEach(function (k) { views[k].style.display = k === name ? '' : 'none'; });
  }

  // Scenario switch: like MainView's focus listener, checks game over / win first
  function changeScenario(s) {
    game.scenario = s;
    refresh();
  }
  function refresh() {
    if (game && game.scenario !== 'GAME_OVER' && game.scenario !== 'GAME_WON') {
      if (isGameOver()) game.scenario = 'GAME_OVER';
      if (isWin()) game.scenario = 'GAME_WON';
    }
    var s = game.scenario;
    var map = { INDOOR_MAP: 'map', MAIN_MAP: 'travel', SLEEPING: 'sleep', ENCOUNTER: 'choice', BUY_FOOD: 'choice', MINIGAME_GYM: 'minigame', MINIGAME_BANK: 'bank', GAME_OVER: 'gameover', GAME_WON: 'win' };
    show(map[s]);
    ({
      INDOOR_MAP: drawMap, MAIN_MAP: showTravel, SLEEPING: startSleep, ENCOUNTER: showEncounter, BUY_FOOD: showBuyFood,
      MINIGAME_GYM: showMinigameMenu, MINIGAME_BANK: showBank, GAME_OVER: function () {}, GAME_WON: function () {},
    })[s]();
    updateSide();
    $('#touch').classList.toggle('hidden', s !== 'INDOOR_MAP');
  }

  // ---------------------------------------------------------------- DIFFICULTY MENU (new game)
  function difficultyMenu(title, onPick, onHover) {
    var box = el('div', 'difficulty');
    box.appendChild(el('div', 'title', title));
    var desc = el('div', 'desc', 'Select the difficulty level of the game');
    box.appendChild(desc);
    var row = el('div', 'diff-buttons');
    [['EASY', 'rgb(0,255,0)'], ['MEDIUM', 'rgb(255,255,0)'], ['HARD', 'rgb(255,0,0)']].forEach(function (d) {
      var b = el('button', 'diff', d[0]);
      b.style.background = d[1];
      b.onclick = function () { onPick(d[0]); };
      if (onHover) b.onmouseenter = b.onfocus = function () { desc.innerHTML = onHover(d[0]); };
      row.appendChild(b);
    });
    box.appendChild(row);
    return { box: box, desc: desc };
  }

  function startScreen() {
    var start = $('#start');
    start.innerHTML = '';
    var m = difficultyMenu('New Game', function (d) {
      newGame(d);
      start.style.display = 'none';
      frame.style.display = '';
      buildMap();
      changeScenario('INDOOR_MAP');
    });
    start.appendChild(m.box);
    var links = el('div', 'links', '<a href="../web3d/index.html" id="to3d">Play the 3D version</a>');
    start.appendChild(links);
    start.style.display = '';
    frame.style.display = 'none';
  }

  // ---------------------------------------------------------------- MAP VIEW
  var mapView = view('map', 'mapview');
  var grid = el('div', 'grid');
  var character = el('img', 'character');
  mapView.appendChild(grid);
  mapView.appendChild(character);
  var cellImgs = [];
  for (var i = 0; i < MAP_X * MAP_Y; i++) { var c = el('img', 'cell'); grid.appendChild(c); cellImgs.push(c); }

  function buildMap() {
    for (var y = 0; y < MAP_Y; y++) {
      for (var x = 0; x < MAP_X; x++) cellImgs[y * MAP_X + x].src = img('cells/' + cellAt(x, y)[0] + '.png');
    }
  }
  function drawMap() {
    buildMap();
    character.src = img('character/level' + playerLevel() + '_' + game.dir + '.png');
    character.style.left = (game.pos.x * 100 / MAP_X) + '%';
    character.style.top = (game.pos.y * 100 / MAP_Y) + '%';
  }

  var DIRS = { w: ['up', 0, -1], a: ['left', -1, 0], s: ['down', 0, 1], d: ['right', 1, 0] };
  function move(key) {
    var d = DIRS[key];
    var nx = game.pos.x + d[1], ny = game.pos.y + d[2];
    if (nx >= 0 && nx < MAP_X && ny >= 0 && ny < MAP_Y && !cellAt(nx, ny)[1]) game.pos = { x: nx, y: ny };
    game.dir = d[0];
    drawMap();
  }

  // interaction on the current cell (E)
  function interact() {
    var action = cellAt(game.pos.x, game.pos.y)[2];
    if (!action) return;
    var parts = action.split(':');
    switch (parts[0]) {
      case 'exit': changeScenario('MAIN_MAP'); break;
      case 'sleep': changeScenario('SLEEPING'); addStat('STAMINA', MAX_STATS); game.days--; break;
      case 'eat':
        if (game.food[parts[1]] > 0) {
          game.food[parts[1]]--;
          var perks = FOOD[parts[1]].perks;
          Object.keys(perks).forEach(function (k) { addStat(k, perks[k]); });
        }
        refresh();
        break;
      case 'buy': game.foodToBuy = parts[1]; changeScenario('BUY_FOOD'); break;
      case 'minigame': startMinigameType(parts[1]); changeScenario('MINIGAME_GYM'); break;
      case 'bank': changeScenario('MINIGAME_BANK'); break;
      default: break;
    }
  }

  // ---------------------------------------------------------------- FAST TRAVEL (city map)
  var travelView = view('travel', 'travel');
  var travelImg = el('img', 'travel-map');
  var travelButtons = el('div', 'travel-buttons');
  travelView.appendChild(travelImg);
  travelView.appendChild(travelButtons);
  ['Gym', 'House', 'Shop'].forEach(function (name) {
    var b = el('button', '', name);
    var loc = name.toLowerCase();
    var here = function () { return game.map === 'house' ? 'house' : game.map; };
    b.onmouseenter = function () { if (loc !== here()) travelImg.src = img('fastTravelMap/' + here() + '_to_' + loc + '.png'); };
    b.onmouseleave = function () { travelImg.src = img('fastTravelMap/current_' + here() + '.png'); };
    b.onclick = function () {
      game.map = loc;
      game.pos = { x: MAPS[loc].pos.x, y: MAPS[loc].pos.y };
      // MapManager.changeMap: the encounter chance is 1, so an encounter always happens
      game.encounter = ENCOUNTERS[pickEncounter()];
      changeScenario('ENCOUNTER');
    };
    travelButtons.appendChild(b);
  });
  function showTravel() { travelImg.src = img('fastTravelMap/current_' + game.map + '.png'); }
  // EncountersFactory: <0.2 money bag, <0.4 robber, <0.6 pusher, <0.8 gym bro, else ice cream
  function pickEncounter() { return Math.min(4, Math.floor(Math.random() * 5)); }

  // ---------------------------------------------------------------- SLEEP
  var sleepView = view('sleep', 'full-image');
  var sleepImg = el('img');
  sleepView.appendChild(sleepImg);
  function startSleep() {
    var i = 0;
    sleepImg.src = img('sleeping/sprite_0.png');
    var t = setInterval(function () {
      i++;
      if (i < 4) sleepImg.src = img('sleeping/sprite_' + i + '.png');
      else { clearInterval(t); changeScenario('INDOOR_MAP'); }
    }, 500);
  }

  // ---------------------------------------------------------------- CHOICE PANEL (encounters, buying food)
  var choiceView = view('choice', 'choice');
  var choiceInfo = el('div', 'choice-info');
  var choiceImg = el('img', 'choice-img');
  var choiceDesc = el('div', 'choice-desc');
  var choiceButtons = el('div', 'choice-buttons');
  var acceptBtn = el('button', 'accept'), declineBtn = el('button', 'decline');
  choiceInfo.appendChild(choiceImg);
  choiceInfo.appendChild(choiceDesc);
  choiceButtons.appendChild(acceptBtn);
  choiceButtons.appendChild(declineBtn);
  choiceView.appendChild(choiceInfo);
  choiceView.appendChild(choiceButtons);

  var mapStr = function (m) { return '{' + Object.keys(m).map(function (k) { return k + '=' + m[k]; }).join(', ') + '}'; };

  function showEncounter() {
    var e = game.encounter;
    choiceImg.src = img('randomEncounters/' + e.name.toLowerCase() + '.png');
    choiceDesc.innerHTML = 'RANDOM ENCOUNTER<br>' + e.desc;
    acceptBtn.innerHTML = 'ACCEPT<br>' + mapStr(e.accept);
    declineBtn.innerHTML = 'DECLINE<br>' + mapStr(e.deny);
    acceptBtn.onclick = function () { resolveEncounter(e.accept); };
    declineBtn.onclick = function () { resolveEncounter(e.deny); };
  }
  function resolveEncounter(delta) {
    Object.keys(delta).forEach(function (k) { addStat(k, delta[k]); });
    changeScenario('INDOOR_MAP');
  }

  function showBuyFood() {
    var f = FOOD[game.foodToBuy];
    choiceImg.src = img('icons/' + game.foodToBuy.toLowerCase() + '.png');
    var d = 'PRICE : ' + f.cost + '$<br>';
    Object.keys(f.perks).forEach(function (k) { d += k + ' : ' + f.perks[k] + '<br>'; });
    choiceDesc.innerHTML = d;
    acceptBtn.innerHTML = 'Buy this food';
    declineBtn.innerHTML = "Don't buy this food";
    acceptBtn.onclick = function () {
      if (game.money > f.cost) {
        addStat('MONEY', -f.cost);
        game.food[game.foodToBuy]++;
        changeScenario('INDOOR_MAP');
      }
    };
    declineBtn.onclick = function () { changeScenario('INDOOR_MAP'); };
  }

  // ---------------------------------------------------------------- GYM MINIGAMES
  var mgView = view('minigame', 'minigame');
  var STATES = { NOT_STARTED: 'Press a button to start!', PRESSED_START: '', RUNNING: '', VALID_PRESS: '', INVALID_PRESS: 'Ah! You made a mistake!', REP_REACHED: 'You made a rep!', ENDED_WON: 'YOU WON!', ENDED_LOST: 'YOU LOST!' };

  function startMinigameType(type) {
    game.minigame = { type: type, state: 'NOT_STARTED', interactions: 0, mistakes: 0, reps: 0, start: 0, time: 0, lastPress: 0, sequence: [], difficulty: null };
  }

  function showMinigameMenu() {
    mgView.innerHTML = '';
    var m = difficultyMenu('Minigame', function (d) {
      game.minigame.difficulty = d;
      startMinigameView();
    }, function (d) {
      var x = MG_DIFF[d];
      return 'Reps for complete: ' + x.reps + '<br>Experience gained: ' + x.exp + '<br>Reaction time: ' + x.reaction
        + '<br>Touch for lift: ' + x.touch + '<br>Max mistakes: ' + x.mistakes + '<br>';
    });
    m.box.classList.add('mg-menu');
    mgView.appendChild(m.box);
  }

  // Minigame view shared by the three exercises (MinigameView.java)
  function startMinigameView() {
    var mg = game.minigame;
    var diff = MG_DIFF[mg.difficulty];
    var type = MG_TYPE[mg.type];
    mgView.innerHTML = '';
    var stage = el('div', 'mg-stage');
    var bg = el('img', 'mg-bg');
    bg.src = img('minigame/background.png');
    var hero = el('img', 'mg-hero');
    hero.src = img('minigame/' + type.sprites + '/sprite_0.png');
    var timer = el('div', 'mg-timer', '00:00');
    var order = el('div', 'mg-order', STATES.NOT_STARTED);
    var bar = el('div', 'mg-bar');
    var fill = el('div', 'mg-fill');
    bar.appendChild(fill);
    stage.appendChild(bg);
    stage.appendChild(hero);
    stage.appendChild(timer);
    stage.appendChild(order);
    mgView.appendChild(stage);
    mgView.appendChild(bar);

    var progress = 0, timerId = null, busy = false;
    var setProgress = function (v, bgColor) {
      progress = Math.max(0, Math.min(100, v));
      fill.style.height = progress + '%';
      var fg = progress < 33 ? 'rgb(72,253,0)' : progress < 66 ? 'rgb(248,255,0)' : 'rgb(255,0,0)';
      var back = progress < 33 ? 'rgb(29,110,12)' : progress < 66 ? 'rgb(118,119,34)' : 'rgb(142,25,25)';
      fill.style.background = fg;
      bar.style.background = bgColor || back;
    };
    setProgress(0);
    var setState = function (s) {
      mg.state = s;
      order.style.color = 'yellow';
      order.textContent = STATES[s];
    };
    var startTimer = function () {
      mg.start = performance.now();
      timerId = setInterval(function () {
        var ms = performance.now() - mg.start;
        timer.textContent = pad(Math.floor(ms / 1000)) + ':' + pad(Math.floor((ms % 1000) / 10));
      }, 30);
    };
    // lifting animation: sprites 3 -> 0, one per second, controls disabled
    var animate = function (done) {
      busy = true;
      var s = 3;
      var t = setInterval(function () {
        hero.src = img('minigame/' + type.sprites + '/sprite_' + s + '.png');
        s--;
        if (s < 0) { clearInterval(t); busy = false; mg.lastPress = performance.now(); if (done) done(); }
      }, 1000);
    };
    var end = function (won) {
      clearInterval(timerId);
      mg.time = Math.round(performance.now() - mg.start);
      setState(won ? 'ENDED_WON' : 'ENDED_LOST');
      setTimeout(function () { showMinigameEnd(); }, 300);
    };
    // Minigame.validPress / invalidPress / repReached
    var valid = function () {
      mg.interactions++;
      setState('VALID_PRESS');
      setProgress(progress + diff.progress);
      order.textContent = type.desc;
      if (mg.interactions === diff.touch) {
        mg.reps++;
        mg.interactions = 0;
        setState('REP_REACHED');
        setProgress(0, 'rgb(72,253,0)');
        if (mg.reps === diff.reps) { end(true); return 'end'; }
        return 'rep';
      }
      return 'ok';
    };
    var invalid = function () {
      mg.mistakes++;
      mg.interactions = 0;
      setState('INVALID_PRESS');
      setProgress(0, 'rgb(255,0,0)');
      if (mg.mistakes > diff.mistakes) { end(false); return 'end'; }
      return 'bad';
    };
    var intime = function () { return performance.now() - mg.lastPress < diff.reaction; };

    if (mg.type === 'BENCH_PRESS') {
      // one button that jumps around: press it quickly, touchForLift times per rep
      var btn = el('button', 'mg-btn bench', 'START');
      btn.style.left = '40%';
      btn.style.top = '40%';
      stage.appendChild(btn);
      var wait = function () {
        btn.disabled = true; btn.style.background = 'red'; btn.textContent = 'WAIT...';
        animate(function () { btn.disabled = false; btn.style.background = 'rgb(0,255,0)'; btn.textContent = 'Press me!'; });
      };
      btn.onclick = function () {
        if (busy || mg.state === 'ENDED_WON' || mg.state === 'ENDED_LOST') return;
        if (mg.state === 'NOT_STARTED') {
          setState('PRESSED_START'); startTimer(); mg.interactions = 1; wait();
        } else {
          var r = intime() ? valid() : invalid();
          mg.lastPress = performance.now();
          if (r === 'rep' || r === 'bad') wait();
        }
        // new random position, away from the character
        var x, y;
        do { x = Math.random() * 70; y = Math.random() * 78; } while (x > 30 && x < 62 && y > 25 && y < 80);
        btn.style.left = x + '%';
        btn.style.top = y + '%';
      };
    } else if (mg.type === 'SQUAT') {
      // "Press the <colour> button!" written in a different colour; three coloured buttons
      var row = el('div', 'squat-buttons');
      var buttons = [0, 1, 2].map(function () {
        var b = el('button', 'mg-btn squat', 'Start!');
        b.style.background = COLORS.Green;
        row.appendChild(b);
        return b;
      });
      stage.appendChild(row);
      var names = Object.keys(COLORS);
      var newSequence = function () {
        var pick = names.slice().sort(function () { return Math.random() - 0.5; }).slice(0, 3);
        mg.sequence = pick; // [target, colour of the text, third]
        var shuffled = pick.slice().sort(function () { return Math.random() - 0.5; });
        buttons.forEach(function (b, k) { b.style.background = COLORS[shuffled[k]]; b.dataset.color = shuffled[k]; b.textContent = '?'; });
      };
      var prompt = function (delay) {
        setTimeout(function () {
          order.style.color = COLORS[mg.sequence[1]];
          order.textContent = 'Press the ' + mg.sequence[0] + ' button!';
        }, delay);
      };
      var disable = function (v) { buttons.forEach(function (b) { b.disabled = v; }); };
      buttons.forEach(function (b) {
        b.onclick = function () {
          if (busy || mg.state === 'ENDED_WON' || mg.state === 'ENDED_LOST') return;
          if (mg.state === 'NOT_STARTED') {
            setState('PRESSED_START'); startTimer(); newSequence();
            disable(true); animate(function () { disable(false); }); prompt(0);
            return;
          }
          var ok = b.dataset.color === mg.sequence[0] && intime();
          var r = ok ? valid() : invalid();
          mg.lastPress = performance.now();
          if (r === 'end') return;
          newSequence();
          if (r === 'rep' || r === 'bad') { disable(true); animate(function () { disable(false); }); prompt(3500); } else prompt(0);
        };
      });
    } else {
      // Lat machine: memorise the sequence flashed on the four buttons, then repeat it
      var pads = [1, 2, 3, 4].map(function (n) {
        var b = el('button', 'mg-btn lat lat' + n, String(n));
        stage.appendChild(b);
        return b;
      });
      var newSeq = function () { mg.sequence = []; for (var k = 0; k < diff.touch; k++) mg.sequence.push(1 + Math.floor(Math.random() * 4)); };
      var flash = function () {
        busy = true;
        pads.forEach(function (b) { b.disabled = true; b.style.background = '#404040'; });
        var k = 0;
        var step = function () {
          if (k >= mg.sequence.length) { pads.forEach(function (b) { b.disabled = false; }); busy = false; return; }
          var b = pads[mg.sequence[k] - 1];
          b.style.background = 'magenta';
          setTimeout(function () { b.style.background = '#404040'; k++; setTimeout(step, 500); }, 500);
        };
        step();
      };
      var lift = function () {
        pads.forEach(function (b) { b.disabled = true; b.style.background = '#404040'; });
        animate(function () { flash(); });
      };
      pads.forEach(function (b, n) {
        b.onclick = function () {
          if (busy || mg.state === 'ENDED_WON' || mg.state === 'ENDED_LOST') return;
          if (mg.state === 'NOT_STARTED') {
            setState('PRESSED_START'); startTimer(); newSeq(); lift();
            return;
          }
          var ok = mg.sequence[mg.interactions] === n + 1;
          var r = ok ? valid() : invalid();
          if (r === 'end') return;
          if (r === 'rep' || r === 'bad') { newSeq(); lift(); }
        };
      });
    }
  }

  function showMinigameEnd() {
    var mg = game.minigame;
    mgView.innerHTML = '';
    var box = el('div', 'mg-end');
    var label = el('div', 'mg-end-label', STATES[mg.state]);
    label.style.color = mg.state === 'ENDED_WON' ? 'rgb(0,255,0)' : 'red';
    var btn = el('button', 'mg-end-btn', 'return to the gym');
    btn.onclick = function () {
      // Controller.setMinigameResult
      var won = mg.state === 'ENDED_WON';
      var list = scores[mg.type][mg.difficulty] || [];
      list.push(mg.time);
      scores[mg.type][mg.difficulty] = list.sort(function (a, b) { return a - b; }).slice(0, 5);
      try { localStorage.setItem('gymlife2d.scores', JSON.stringify(scores)); } catch (e) { /* no storage */ }
      addStat(MG_TYPE[mg.type].stat, won ? MG_DIFF[mg.difficulty].exp : -10);
      addStat('STAMINA', GYM_STAMINA_CONSUMPTION);
      changeScenario('INDOOR_MAP');
    };
    box.appendChild(label);
    box.appendChild(btn);
    mgView.appendChild(box);
  }

  // ---------------------------------------------------------------- BANK: PLANE GAME
  var bankView = view('bank', 'bank');
  bankView.innerHTML = '<img class="sky" src="' + img('sky/sky.jpg') + '"><img class="plane" src="' + img('airplane/airplane.png') + '">'
    + '<button class="info">INFO</button><input class="box" type="text" inputmode="numeric" placeholder="bet">'
    + '<button class="play" disabled>PLAY</button><button class="restart">RESTART</button><button class="leave">EXIT (Q)</button>'
    + '<div class="money"></div><div class="multi"></div>';
  var bk = {
    plane: $('.plane', bankView), box: $('.box', bankView), play: $('.play', bankView), restart: $('.restart', bankView),
    info: $('.info', bankView), money: $('.money', bankView), multi: $('.multi', bankView), leave: $('.leave', bankView),
  };
  var plane = { threshold: 0, multiplier: 0.9, started: false, bet: 0, entered: false, timer: null, bob: null };
  function newThreshold() {
    plane.threshold = Math.round((0.9 + Math.random() * 5) * 1000) / 1000;
    plane.multiplier = 0.9;
  }
  newThreshold();
  function fmt(n) { return (Math.round(n * 100) / 100).toFixed(2); }
  function showBank() {
    bk.money.textContent = '';
    bk.multi.textContent = '';
    bk.box.value = '';
    bk.box.readOnly = false;
    bk.play.disabled = true;
    bk.play.textContent = 'PLAY';
    bk.plane.style.display = 'none';
    plane.entered = false;
    setTimeout(function () { bk.box.focus(); }, 50);
  }
  function planeTo(left, top, ms) {
    bk.plane.style.transition = 'left ' + ms + 'ms linear, top 300ms ease-in-out';
    bk.plane.style.left = left + '%';
    if (top !== undefined) bk.plane.style.top = top + '%';
  }
  bk.box.onkeydown = function (e) {
    if (e.key === 'q' || e.key === 'Q') { e.preventDefault(); leaveBank(); return; }
    if (e.key === '-') { e.preventDefault(); return; }
    if (e.key !== 'Enter') return;
    bk.multi.style.color = 'black';
    bk.money.style.color = 'black';
    var v = parseInt(bk.box.value, 10);
    if (isNaN(v)) { bk.money.textContent = 'Enter a valid number.'; return; }
    if (v <= game.money && v !== 0) {
      plane.bet = v;
      bk.money.textContent = 'Balance: ' + fmt(game.money) + '$';
      bk.multi.textContent = fmt(0.9) + 'x   ' + fmt(v) + '$';
      if (!plane.entered) {
        plane.entered = true;
        bk.plane.style.display = '';
        bk.plane.style.transition = 'none';
        bk.plane.style.left = '-25%';
        bk.plane.style.top = '25%';
        requestAnimationFrame(function () { planeTo(37.5, 25, 1200); });
        setTimeout(function () { bk.play.disabled = false; }, 1200);
      }
    } else {
      bk.money.textContent = 'Are you broke man?';
    }
  };
  bk.play.onclick = function () {
    if (!plane.started) {
      plane.started = true;
      bk.play.textContent = 'STOP';
      bk.box.readOnly = true;
      bk.restart.disabled = true;
      addStat('MONEY', -plane.bet);
      updateSide();
      var t = 0;
      plane.bob = setInterval(function () { bk.plane.style.top = (25 + 3 * Math.sin(t++ * 0.12 * 2)) + '%'; }, 60);
      // PlaneGameModelImpl: +0.001 per step until the random threshold
      plane.timer = setInterval(function () {
        for (var k = 0; k < 2; k++) {
          plane.multiplier = Math.round((plane.multiplier + 0.001) * 1000) / 1000;
          if (plane.multiplier >= plane.threshold) break;
        }
        bk.multi.textContent = fmt(plane.multiplier) + 'x   ' + fmt(plane.multiplier * plane.bet) + '$';
        if (plane.multiplier >= plane.threshold) { crash(); }
      }, 8);
    } else {
      stopPlane(true);
    }
  };
  function crash() {
    stopPlane(false);
  }
  function stopPlane(cashOut) {
    clearInterval(plane.timer);
    clearInterval(plane.bob);
    plane.started = false;
    game.planeThresholds.push(plane.threshold);
    bk.restart.disabled = false;
    bk.play.disabled = true;
    planeTo(110, undefined, 500);
    if (cashOut) {
      addStat('MONEY', Math.round(plane.multiplier * plane.bet));
      bk.multi.style.color = plane.multiplier < 1 ? 'red' : 'rgb(20,100,0)';
    } else {
      bk.multi.style.color = 'red';
    }
    updateSide();
  }
  bk.restart.onclick = function () {
    newThreshold();
    showBank();
    bk.money.textContent = 'Balance: ' + fmt(game.money) + '$';
    bk.multi.textContent = fmt(0.9) + 'x   ' + fmt(0) + '$';
  };
  bk.info.onclick = function () {
    alert(game.planeThresholds.map(function (f, k) { return 'Bet ' + (k + 1) + ' thresholds was: ' + f.toFixed(6); }).join('\n') || 'No bets yet.');
  };
  bk.leave.onclick = leaveBank;
  function leaveBank() {
    if (plane.started) stopPlane(true);
    changeScenario('INDOOR_MAP');
  }

  // ---------------------------------------------------------------- GAME OVER / WIN
  var over = view('gameover', 'end-screen');
  over.appendChild(el('div', 'end-text lose', 'Game Over'));
  over.appendChild(el('button', 'end-menu', 'New game')).onclick = startScreen;
  var won = view('win', 'end-screen');
  won.appendChild(el('div', 'end-text win', 'You won the game!'));
  won.appendChild(el('button', 'end-menu', 'New game')).onclick = startScreen;

  // ---------------------------------------------------------------- SIDE STATS PANEL
  var detailed = false;
  var scorePage = 'buttons', scoreDiff = 'EASY';
  function statBox(icon, value, max) {
    return '<div class="stat"><img src="' + img('icons/' + icon) + '"' + (max ? ' class="max"' : '') + '><span>' + value + '</span></div>';
  }
  function updateSide() {
    if (!game) return;
    var h = getStat('HAPPINESS');
    var row1 = detailed
      ? statBox('legs.png', isMax('LEG_MASS') ? 'MAX' : getStat('LEG_MASS'), isMax('LEG_MASS'))
        + statBox('push.png', isMax('CHEST_MASS') ? 'MAX' : getStat('CHEST_MASS'), isMax('CHEST_MASS'))
        + statBox('pull.png', isMax('BACK_MASS') ? 'MAX' : getStat('BACK_MASS'), isMax('BACK_MASS'))
      : statBox(h < LEVEL_1 ? 'sad.png' : h < LEVEL_2 ? 'mid.png' : 'happy.png', isMax('HAPPINESS') ? 'MAX' : h, isMax('HAPPINESS'))
        + statBox('stamina.png', isMax('STAMINA') ? 'MAX' : getStat('STAMINA'), isMax('STAMINA'))
        + statBox('mass.png', isMax('MASS') ? 'MAX' : mass(), isMax('MASS'));
    var row2 = statBox('meat.png', game.food.MEAT) + statBox('hamburger.png', game.food.HAMBURGER) + statBox('broccoli.png', game.food.BROCCOLI);
    var row3 = '<div class="stat"><img src="' + img('icons/money.png') + '"><span>' + game.money + '</span></div>'
      + '<div class="stat days"><b>DAYS<br>LEFT</b><span>' + game.days + '</span></div>';
    var row4;
    if (scorePage === 'buttons') {
      row4 = '<div class="score-buttons">'
        + '<img data-mg="BENCH_PRESS" src="' + img('icons/push.png') + '" title="Bench press scores">'
        + '<img data-mg="SQUAT" src="' + img('icons/legs.png') + '" title="Squat scores">'
        + '<img data-mg="LAT_MACHINE" src="' + img('icons/pull.png') + '" title="Lat machine scores"></div>';
    } else {
      var list = scores[scorePage][scoreDiff] || [];
      row4 = '<div class="score-table"><div class="tabs">'
        + ['EASY', 'MEDIUM', 'HARD'].map(function (d) {
          return '<button data-d="' + d + '"' + (d === scoreDiff ? ' disabled' : '') + ' class="' + d.toLowerCase() + '">' + d[0] + d.slice(1).toLowerCase() + '</button>';
        }).join('') + '</div><div class="times">'
        + (list.length ? list.map(function (s) { return '<div>' + String(Math.floor(s / 1000)).padStart(3, ' ') + ':' + pad(s % 1000) + ' secs</div>'; }).join('') : '<div>No scores yet</div>')
        + '</div><button class="back">back</button></div>';
    }
    side.innerHTML = '<div class="panel p1">' + row1 + '</div><div class="panel p2">' + row2 + '</div><div class="panel p3">' + row3 + '</div><div class="panel p4">' + row4 + '</div>';
    var p1 = $('.p1', side);
    p1.onmouseenter = function () { detailed = true; updateSide(); };
    p1.onmouseleave = function () { detailed = false; updateSide(); };
    p1.onclick = function () { detailed = !detailed; updateSide(); }; // touch screens
    side.querySelectorAll('[data-mg]').forEach(function (b) { b.onclick = function () { scorePage = b.dataset.mg; updateSide(); }; });
    side.querySelectorAll('[data-d]').forEach(function (b) { b.onclick = function () { scoreDiff = b.dataset.d; updateSide(); }; });
    var back = $('.back', side);
    if (back) back.onclick = function () { scorePage = 'buttons'; updateSide(); };
  }
  function pad(n) { n = String(n); return n.length < 2 ? '0' + n : n; }

  // ---------------------------------------------------------------- INPUT
  window.addEventListener('keydown', function (e) {
    if (!game || e.target === bk.box) return;
    if (game.scenario !== 'INDOOR_MAP') return;
    var k = e.key.toLowerCase();
    var arrows = { arrowup: 'w', arrowleft: 'a', arrowdown: 's', arrowright: 'd' };
    if (arrows[k]) { k = arrows[k]; e.preventDefault(); }
    if (DIRS[k]) move(k);
    else if (k === 'e') interact();
  });
  // on-screen controls for touch screens
  $('#touch').querySelectorAll('[data-k]').forEach(function (b) {
    b.addEventListener('pointerdown', function (e) {
      e.preventDefault();
      if (!game || game.scenario !== 'INDOOR_MAP') return;
      if (b.dataset.k === 'e') interact(); else move(b.dataset.k);
    });
  });

  // keep the 16:9 frame fitted to the window
  function fit() {
    var w = window.innerWidth, h = window.innerHeight;
    var fw = Math.min(w, h * 16 / 9), fh = fw * 9 / 16;
    document.documentElement.style.setProperty('--fw', fw + 'px');
    document.documentElement.style.setProperty('--fh', fh + 'px');
  }
  window.addEventListener('resize', fit);
  fit();

  if (matchMedia('(pointer: coarse)').matches) document.body.classList.add('touch');
  window.__gym2d = { get game() { return game; }, newGame: newGame, changeScenario: changeScenario, interact: interact, move: move };
  startScreen();
})();
