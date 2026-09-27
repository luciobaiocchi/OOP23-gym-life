# Gym Life 3D · Street to Legend

A browser-only 3D life and sports game built with Three.js. Train, explore Oakside, compete at Riverside Athletic Club and grow from rookie to city legend. This edition changes only `web3d/`; the Java and original 2D games keep their own rules.

**[Play online](https://luciobaiocchi.github.io/OOP23-gym-life/)** · Or open `index.html` directly, including offline. The model, scenery and procedural soundtrack are bundled locally. Spotify and YouTube are optional online features.

## What’s new

- **Animated, skill-based workouts:** hold and release to control squat depth; time the bench press with the moving bar; alternate lat pulls on the beat. The skeleton, barbell, cable and weight stack follow the exercise. Eight reps, perfect windows, combo feedback and personal records replace the old colour quiz and key-mashing.
- **Riverside Sports Park:** enter through the marked sign by the city fountain in the southeast. Basketball has five shooting positions and animated ball trajectories. Boxing combines jabs, crosses and dodging the swinging bag. The running circuit takes you through eight checkpoints on a traffic-free track.
- **Career:** earn XP, climb ten levels, complete six missions and a daily three-session challenge. Street, Club (level 3) and Pro (level 5) leagues award permanent medals and first-win prizes. Better levels reduce gym energy costs and improve sprint speed.
- **Player movement:** acceleration, directional turning, a leaning sprint animation, rechargeable sprint breath, jumping and a smooth sprint camera. Collision movement uses small steps to avoid walking through thin objects.
- **More interactions:** free daily water and bench recovery, four unlockable outfits at the home mirror, three hidden golden dumbbells with permanent rewards, highlighted interaction markers and a map with destination pins.
- **Fairer progression:** useful food, starter supplies, lower workout costs, fewer interruptions and positive practice rewards. Training preserves at least one energy point. Sprint breath is separate from daily energy.
- **Save anywhere:** progress, location, career, records, collectibles and daily recovery are saved after actions and when leaving the page. Original saves migrate automatically. Escape pauses an active session; abandoning it restores the equipment and does not refund the energy already spent.
- **Browser performance:** spatially grouped static scenery, lazy interior/park construction, cached HUD updates and a map drawn at 10 Hz. High-quality postprocessing is allocated only when selected. Automatic quality adjustment measures real frame time, and background tabs pause simulation and rendering.

## Goal and controls

Reach **100 legs, chest and back** within 40 / 30 / 20 days on Easy / Normal / Hard. Running out of days, energy or mood ends the run. Train, eat, recover and sleep to balance your days; outdoor sports also improve your muscles.

| Input | Action |
|---|---|
| WASD / arrows | Move relative to the camera |
| Shift | Sprint; release it to recover breath |
| Space | Jump while exploring; action/hold during a minigame |
| E / Enter | Use the highlighted interaction |
| Drag / mouse wheel | Rotate / zoom the camera |
| J | Career, missions, records and destination pins |
| Esc | Pause/resume a session, or close supported dialogs |
| 1 / 2 / 3 | Eat a burger / broccoli / steak |
| M / R | Toggle music / switch gym radio station |
| G / H | Cycle Low, Medium and High quality / help |

On mobile, use the joystick, **E**, **RUN** and jump buttons. Workouts and sports have touch controls, including hold-and-release buttons. A phone in landscape keeps the minigame beside the 3D action.

| Place | Activities |
|---|---|
| Home | Sleep, eat, watch gym legends, pose and change outfit |
| Iron House gym | Squat, bench press, lat pulldown, water and gym bro |
| Riverside park | Basketball, boxing, circuit, recovery bench, fountain and career board |
| Supermarket | Buy food; prices and effects are shown before buying |
| Bank | Banknote job or the original fictional plane investment minigame |
| City | Explore, follow map pins, discover golden dumbbells and random encounters |

## Development and checks

```bash
cd web3d
npm ci
npm run dev          # http://localhost:8080, rebuilds on changes
npm run build        # regenerate the committed standalone game.js
npm test             # model, save migration, progression and reward invariants
npx playwright install chromium
npm run test:browser # desktop/mobile browser integration; requires python3 for the static server
```

`PLAYWRIGHT_CHROMIUM_EXECUTABLE` can point to an existing Chromium executable. The browser suite checks movement, interactions, all gym exercises, actual skeleton animation, basketball, boxing, checkpoints, pause/cancel, save/resume, mobile touch and all rendering quality levels. Some full-session tests advance simulation directly to avoid depending on GPU speed; frame-rate performance must still be measured on the intended device.

| File | Responsibility |
|---|---|
| `src/main.js` | Game loop, player, camera, sessions, travel, saving and controls |
| `src/state.js`, `src/progression.js` | Stats, balance, migration, XP, leagues, missions and rewards |
| `src/training.js`, `src/minigames.js` | Skill sessions and original bank games |
| `src/world.js`, `src/park.js` | City, interiors, park, animated equipment and collisions |
| `src/character.js` | Procedural rig, poses, muscle growth and clothing colours |
| `src/navigation.js`, `src/ui.js` | Cached map, HUD, dialogs and notifications |
| `src/optimization.js`, `src/textures.js` | Static geometry batching and procedural surfaces |
| `src/audio.js`, `src/spotify.js`, `src/tv.js` | Procedural music/effects and optional online players |

## Publishing

The existing [GitHub Pages workflow](../.github/workflows/pages.yml) rebuilds and publishes pushes to `main` that change `web3d/`. The output remains `index.html`, `style.css` and the self-contained `game.js`; no application server or external asset service is required.

## Credits

Character model: [“Male Body”](https://sketchfab.com/3d-models/male-body-15a422001834483c9750ce6117d59cc1) by [Alexander Antipov](https://sketchfab.com/Dessen), [CC BY 4.0](http://creativecommons.org/licenses/by/4.0/). Modified with welded vertices, a procedural skeleton, skin weights, muscle growth, clothing colours and animations. Scenery, textures, interface and procedural audio are generated in the browser.
