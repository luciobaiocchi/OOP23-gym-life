# Gym Life 3D 🏋️🎵

Versione 3D di **Gym Life**, giocabile nel browser su qualsiasi PC (Windows, macOS, Linux, Chromebook) e anche da smartphone/tablet.

## Come giocare

### 🎮 [Gioca online → luciobaiocchi.github.io/OOP23-gym-life](https://luciobaiocchi.github.io/OOP23-gym-life/)

Oppure, **senza installare nulla**, apri `index.html` con un browser moderno (Chrome, Edge, Firefox, Safari): funziona anche offline, con doppio clic sul file.

### Obiettivo
Porta **gambe, petto e schiena a 100** prima che finiscano i giorni.
Game over se **energia** o **umore** arrivano a 0.

| Luogo | Cosa fare |
|---|---|
| 🏠 Casa | Dormi (nuovo giorno, energia piena, salvataggio automatico), mangia dal frigo, guarda la TV, mettiti in posa allo specchio |
| 🏋️ Palestra | Squat (gambe), panca piana (petto), lat machine (schiena): ogni esercizio è un minigioco, il guadagno dipende da quanto giochi bene e dal carico scelto |
| 🛒 Supermercato | Compra hamburger, broccoli e bistecche (stessi valori della versione Java) |
| 🏦 Banca | Lavora contando banconote oppure investi nel gioco dell'aereo |
| 🌆 Città | Uscendo dagli edifici possono capitare imprevisti (rapinatore, gym bro, gelati...) |

### Comandi
| Tasto | Azione |
|---|---|
| WASD / frecce | Muoviti (Shift per correre) |
| E / Spazio / Invio | Interagisci |
| Trascina il mouse · rotella | Ruota visuale · zoom |
| 1 2 3 | Mangia dall'inventario |
| M | Musica on/off |
| G | Qualità grafica alta / prestazioni |
| H | Aiuto |

Su dispositivi touch compaiono un joystick virtuale e il tasto **E**.

## Tecnologia

- **Motore grafico: [Three.js](https://threejs.org/) (WebGL).** Scelto perché gira in qualsiasi browser senza plugin né installazioni, anche su PC datati e grafiche integrate. Tutti i modelli sono low-poly generati via codice: niente asset da scaricare.
- **Musica: Web Audio API.** Colonna sonora *procedurale* sintetizzata in tempo reale (batteria, basso, pad, arpeggi, melodia), con un brano diverso per menu, città, casa, palestra, allenamento, supermercato, banca, vittoria e game over, e dissolvenze tra un brano e l'altro. Più effetti sonori.
- **Prestazioni:** se il gioco rileva meno di ~28 FPS passa da solo alla modalità "prestazioni" (niente ombre, risoluzione ridotta). Si può cambiare con **G**.

## Pubblicazione (GitHub Pages)

Il workflow [`.github/workflows/pages.yml`](../.github/workflows/pages.yml) ricompila il gioco e lo pubblica come sito statico
a ogni push su `main` che tocca `web3d/` (si può anche lanciare a mano da *Actions → Run workflow*).

Configurazione da fare una sola volta: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

## Sviluppo

```bash
cd web3d
npm install
npm run dev     # server locale su http://localhost:8080 con ricompilazione automatica
npm run build   # rigenera game.js (bundle unico, già incluso nel repository)
```

Struttura del codice in `src/`:

| File | Contenuto |
|---|---|
| `main.js` | Renderer, loop di gioco, input, telecamera, logica delle interazioni |
| `state.js` | Modello: statistiche, cibo, imprevisti, difficoltà |
| `world.js` | Costruzione di città e interni |
| `character.js` | Personaggio con pose/animazioni e muscoli che crescono |
| `minigames.js` | Minigiochi di palestra e banca |
| `audio.js` | Sequencer musicale ed effetti sonori |
| `ui.js` | HUD, finestre di dialogo, notifiche |
