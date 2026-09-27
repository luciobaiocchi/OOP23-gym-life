import { test, expect } from '@playwright/test';

async function boot(page) {
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.route(/https:\/\/(?!127\.0\.0\.1)/, route => route.abort());
  await page.goto('/');
  await page.waitForFunction(() => window.__gym);
  await page.getByRole('button', { name: /Normal/ }).click();
  await expect(page.locator('#hud')).toBeVisible();
  return errors;
}
async function travel(page, place) {
  await page.evaluate(id => __gym.travel(id), place);
  await expect.poll(() => page.evaluate(() => __gym.mode)).toBe('play');
  await expect(page.locator('#fade')).not.toHaveClass(/on/);
}
// Advance a session's own simulation; rewards still flow through the production
// completion callback. This avoids tests tied to GPU speed or random target positions.
async function perfectGym(page, exercise) {
  return page.evaluate(ex => {
    __gym.state.stamina = 100;
    __gym.startWorkout(ex, 1);
    const session = __gym.minigame;
    for (let i = 0; i < 146; i++) session.update(1 / 60);
    for (let rep = 0; rep < 8; rep++) {
      const zone = document.querySelector('[data-zone]');
      const center = parseFloat(zone.style.left) + parseFloat(zone.style.width) / 2;
      if (ex === 'squat') session.key(' ');
      let n = 0;
      while (Math.abs(parseFloat(document.querySelector('[data-needle]').style.left || '0') - center) > 1.1 && n++ < 320) session.update(1 / 120);
      if (ex === 'squat') session.release(' ');
      else if (ex === 'bench') session.key(' ');
      else session.key(document.querySelector('[data-word]').textContent.includes('LEFT') ? 'a' : 'd');
      for (let i = 0; i < 110 && __gym.minigame; i++) session.update(1 / 120);
    }
    return { mode: __gym.mode, best: __gym.state.career.best[ex], xp: __gym.state.career.xp, pose: __gym.player.pose, energy: __gym.state.stamina };
  }, exercise);
}

test('new game, keyboard movement, jump, interaction, waypoint, save and resume', async ({ page }) => {
  const errors = await boot(page);
  await page.keyboard.down('s'); await page.waitForTimeout(300); await page.keyboard.up('s');
  await expect(page.locator('#prompt')).toContainText('Go outside');
  await page.evaluate(() => { window.savedRandom = Math.random; Math.random = () => 0.99; });
  await page.keyboard.press('e');
  await expect.poll(() => page.evaluate(() => __gym.place.name)).toBe('city');
  await page.waitForTimeout(1100);
  await page.evaluate(() => { Math.random = window.savedRandom; });
  await page.keyboard.press('Space');
  await page.waitForTimeout(80);
  expect(await page.evaluate(() => __gym.player.root.position.y)).toBeGreaterThan(0.1);
  await page.waitForTimeout(650);
  await page.keyboard.press('j');
  await expect(page.locator('.journalbox')).toBeVisible();
  await page.getByRole('button', { name: 'Sports park ↗' }).click();
  await expect(page.locator('#map-waypoint')).toContainText('Sports park');
  await travel(page, 'park');
  await page.evaluate(() => { __gym.state.completeActivity('basket', 0.9); __gym.saveGame(); });
  const xp = await page.evaluate(() => __gym.state.career.xp);
  await page.reload();
  await page.getByRole('button', { name: /Continue/ }).click();
  expect(await page.evaluate(() => __gym.place.name)).toBe('park');
  expect(await page.evaluate(() => __gym.state.career.xp)).toBe(xp);
  expect(errors).toEqual([]);
});

test('all gym workouts complete with accurate scoring and restored equipment', async ({ page }) => {
  const errors = await boot(page);
  await travel(page, 'gym');
  for (const exercise of ['squat', 'bench', 'lat']) {
    const result = await perfectGym(page, exercise);
    expect(result.mode).toBe('busy');
    expect(result.best).toBeGreaterThan(0.9);
    expect(result.energy).toBeGreaterThan(0);
    await page.getByRole('button', { name: 'Continue' }).click();
  }
  const equipment = await page.evaluate(() => ({ parent: __gym.place.squat.barbell.parent === __gym.place.squat.group, bar: __gym.place.bench.barbell.position.y, stack: __gym.place.lat.weights.position.y, quests: __gym.state.career.completed }));
  expect(equipment.parent).toBe(true);
  expect(equipment.bar).toBe(1.4);
  expect(equipment.stack).toBe(0);
  expect(equipment.quests).toContain('balanced');
  expect(errors).toEqual([]);
});

test('squat hold actually bends the skeleton; pause freezes it and cancel restores rack', async ({ page }) => {
  const errors = await boot(page);
  await travel(page, 'gym');
  await page.evaluate(() => __gym.startWorkout('squat', 0));
  await page.waitForTimeout(2600);
  await page.keyboard.down('Space'); await page.waitForTimeout(650);
  expect(await page.evaluate(() => __gym.player.poseT)).toBeGreaterThan(0.2);
  expect(await page.evaluate(() => __gym.player.legs[0].knee.rotation.x)).toBeGreaterThan(0.3);
  await page.keyboard.press('Escape');
  const pose = await page.evaluate(() => __gym.player.poseT);
  await page.waitForTimeout(300);
  expect(await page.evaluate(() => __gym.player.poseT)).toBe(pose);
  await page.keyboard.up('Space');
  await page.getByRole('button', { name: /Stop session/ }).click();
  expect(await page.evaluate(() => __gym.place.squat.barbell.parent === __gym.place.squat.group)).toBe(true);
  expect(await page.evaluate(() => __gym.state.career.sessions)).toBe(0);
  expect(await page.evaluate(() => __gym.state.stamina)).toBe(76);
  expect(errors).toEqual([]);
});

test('basketball and boxing complete, medals persist and idle rounds time out', async ({ page }) => {
  const errors = await boot(page);
  await travel(page, 'park');
  const basket = await page.evaluate(() => {
    __gym.startSport('basket', 0);
    const m = __gym.minigame;
    for (let i = 0; i < 290; i++) m.update(1 / 120);
    for (let shot = 0; shot < 5; shot++) {
      const zone = document.querySelector('[data-zone]');
      const center = parseFloat(zone.style.left) + parseFloat(zone.style.width) / 2;
      m.key(' ');
      let n = 0;
      while (parseFloat(document.querySelector('[data-needle]').style.left || 0) < center && n++ < 220) m.update(1 / 120);
      m.release(' ');
      for (let i = 0; i < 194 && __gym.minigame; i++) m.update(1 / 120);
    }
    return { best: __gym.state.career.best.basket, medals: __gym.state.career.medals.basket, pos: __gym.place.basket.ball.position.toArray() };
  });
  expect(basket.best).toBeGreaterThan(0.9);
  expect(basket.medals).toEqual([0]);
  expect(basket.pos).toEqual([-10, 0.4, -7]);
  await page.getByRole('button', { name: 'Continue' }).click();
  const boxing = await page.evaluate(() => {
    __gym.startSport('boxing', 0);
    let n = 0;
    while (__gym.minigame && n++ < 4000) {
      const needle = parseFloat(document.querySelector('[data-needle]').style.left || 0);
      if (needle >= 64 && needle <= 72) {
        const word = document.querySelector('[data-word]').textContent;
        __gym.minigame.key(word.includes('JAB') ? 'a' : word.includes('CROSS') ? 'd' : 's');
      }
      __gym.minigame?.update(1 / 60);
    }
    return { best: __gym.state.career.best.boxing, mode: __gym.mode };
  });
  expect(boxing.mode).toBe('busy');
  expect(boxing.best).toBeGreaterThan(0.9);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.evaluate(() => {
    __gym.startSport('basket', 0);
    let n = 0;
    while (__gym.minigame && n++ < 5000) __gym.minigame.update(1 / 60);
  });
  expect(await page.evaluate(() => __gym.mode)).toBe('busy');
  expect(await page.evaluate(() => __gym.state.career.sessions)).toBe(3);
  expect(errors).toEqual([]);
});

test('circuit checkpoints, pause, completion and recovery cannot pay twice', async ({ page }) => {
  const errors = await boot(page);
  await travel(page, 'park');
  await page.evaluate(() => __gym.startSport('run', 0));
  await page.keyboard.press('Escape');
  await expect(page.locator('#pause')).toBeVisible();
  const time = await page.evaluate(() => __gym.race.countdown);
  await page.waitForTimeout(200);
  expect(await page.evaluate(() => __gym.race.countdown)).toBe(time);
  await page.keyboard.press('Escape');
  await expect.poll(() => page.evaluate(() => __gym.race.countdown), { timeout: 8000 }).toBeLessThanOrEqual(0);
  const route = [[-19,16],[-19,0],[-19,-19],[0,-19],[19,-19],[19,0],[19,16],[0,16]];
  for (let i = 0; i < route.length; i++) {
    await page.evaluate(([x,z]) => __gym.pos.set(x,0,z), route[i]);
    await expect.poll(() => page.evaluate(() => __gym.race?.checkpoint ?? 8)).toBe(i + 1);
  }
  await expect(page.locator('#panel')).toContainText('SESSION COMPLETE');
  expect(await page.evaluate(() => __gym.state.career.best.run)).toBe(1);
  await page.getByRole('button', { name: 'Continue' }).click();
  await page.evaluate(() => { __gym.pos.set(1.5,0,8); __gym.interact(); });
  const energy = await page.evaluate(() => __gym.state.stamina);
  await page.getByRole('button', { name: 'Back to it' }).click();
  await page.evaluate(() => __gym.interact());
  expect(await page.evaluate(() => __gym.state.stamina)).toBe(energy);
  expect(errors).toEqual([]);
});

test('mobile portrait supports held touch inputs and pause without clipped controls', async ({ browser }) => {
  const context = await browser.newContext({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const errors = await boot(page);
  await expect(page.locator('#touch')).toBeVisible();
  await travel(page, 'park');
  await page.evaluate(() => __gym.startSport('basket', 0));
  await page.waitForTimeout(2600);
  const button = page.locator('[data-shoot]');
  const box = await button.boundingBox();
  expect(box.x).toBeGreaterThanOrEqual(0);
  expect(box.y + box.height).toBeLessThanOrEqual(844);
  const cdp = await context.newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: box.x + box.width / 2, y: box.y + box.height / 2 }] });
  await page.waitForTimeout(600);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await expect(page.locator('[data-word]')).toHaveText(/BUCKET|SWISH|OFF THE RIM/);
  await page.locator('#btn-pause').click();
  await expect(page.locator('#pause')).toBeVisible();
  await page.getByRole('button', { name: /Stop session/ }).click();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBe(390);
  expect(errors).toEqual([]);
  await context.close();
});

test('all render quality modes and batched city render without runtime errors', async ({ page }) => {
  const errors = await boot(page);
  await travel(page, 'city');
  const batches = await page.evaluate(() => __gym.place.batching);
  expect(batches.after).toBeLessThan(batches.before * 0.5);
  await page.locator('#btn-quality').click();
  await page.waitForTimeout(800);
  expect(await page.evaluate(() => __gym.quality)).toBe('high');
  await page.locator('#btn-quality').click();
  expect(await page.evaluate(() => __gym.quality)).toBe('low');
  expect(errors).toEqual([]);
});
