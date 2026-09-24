# Gym Life 3D

A 3D version of **Gym Life** that runs in the browser on any computer (Windows, macOS, Linux, Chromebook) and on phones and tablets.

## How to play

### [Play online: luciobaiocchi.github.io/OOP23-gym-life](https://luciobaiocchi.github.io/OOP23-gym-life/)

Or, **with nothing to install**, open `index.html` in a modern browser (Chrome, Edge, Firefox, Safari). It also works offline by double-clicking the file.

### Goal
Get **legs, chest and back to 100** before you run out of days.
It's game over if **energy** or **mood** drop to 0.

| Place | What you can do |
|---|---|
| Home | Sleep (next day, full energy, autosave), eat from the fridge, watch TV, pose in the mirror |
| Gym | Gym radio (R switches station), talk to your gym bro, and train: squat (legs), bench press (chest), lat pulldown (back). Every exercise is a minigame; gains depend on how well you play and on the load you pick |
| Supermarket | Buy burgers, broccoli and steak (same values as the Java version) |
| Bank | Work by counting banknotes, or invest in the plane game |
| City | Random encounters when you leave a building (robber, gym bro, ice cream truck...) |

### Controls
| Key | Action |
|---|---|
| WASD / arrows | Move (hold Shift to run) |
| E / Space / Enter | Interact |
| Mouse drag, wheel | Rotate camera, zoom |
| 1 2 3 | Eat from your inventory |
| M | Music on/off |
| R | Switch the gym radio station |
| G | Graphics quality: low / medium / high |
| H | Help |

On touch devices a virtual joystick and an **E** button appear.

## Technology

- **Engine: [Three.js](https://threejs.org/) (WebGL).** Runs in any browser without plugins or installs, including older PCs with integrated graphics.
- **Graphics:** physically based materials, ACES tone mapping, a physical sky that also lights the scene, soft shadows and, on high quality, ambient occlusion. All textures (asphalt, brick, plaster, wood, marble, grass...) are generated procedurally at startup, so there are no image files to download.
- **Characters:** each body is a single smooth skinned mesh generated from a signed distance field (muscles are blended shapes, polygonised with surface nets) and bound to a skeleton, with a sculpted head, eyes and hair. The body is rebuilt as the muscles grow.
- **Living city:** cars drive on the right, stop at red lights and for anyone in front of them; pedestrians walk on the sidewalks, wait for the green light and never walk through walls, cars, other people or the player.
- **Music: Web Audio API.** A *procedural* soundtrack synthesised in real time (drums, bass, pads, arpeggios, melody), with a different track for the menu, city, home, supermarket, bank, win and game over, plus sound effects.
- **Gym radio:** *Drift Phonk* (808 cowbells and distorted bass), *Hardstyle Pump* (distorted kick and supersaws at 150 BPM), *Gym Rap* (trap with 808s and triplet hi-hats) and *Euro Gym*. An air horn at the start of each workout and gym bro one-liners ("Light weight baby!", "Yeah buddy!") through the browser's speech synthesis.
- **Performance:** three quality levels. If the game runs below ~28 FPS it steps down on its own (no ambient occlusion, then no shadows and a lower resolution). Press **G** to choose manually.

## Publishing (GitHub Pages)

The [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) workflow rebuilds the game and publishes it as a static site
on every push to `main` that touches `web3d/` (it can also be started by hand from *Actions → Run workflow*).

One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Development

```bash
cd web3d
npm install
npm run dev     # local server on http://localhost:8080 with automatic rebuilds
npm run build   # regenerates game.js (single bundle, already committed)
```

Source layout in `src/`:

| File | Contents |
|---|---|
| `main.js` | Renderer, sky and lighting, game loop, input, camera, interaction logic |
| `state.js` | Model: stats, food, encounters, difficulty |
| `world.js` | City (buildings, traffic, pedestrians) and interiors, collisions |
| `textures.js` | Procedural textures |
| `character.js` | Character with poses/animations and growing muscles |
| `minigames.js` | Gym and bank minigames |
| `audio.js` | Music sequencer, gym radio and sound effects |
| `ui.js` | HUD, dialogs, notifications |
