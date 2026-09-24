Email dei componenti:

andrea.decarli2@studio.unibo.it
luca.camillini@studio.unibo.it
lucio.baiocchi@studio.unibo.it
mattia.morri6@studio.unibo.it


Il gruppo si pone come obiettivo quello di realizzare un videogioco che simula la vita di un bodybuilder.
L’obiettivo del giocatore è di raggiungere il livello massimo per ogni gruppo muscolare (gambe, petto, schiena). Per fare ciò dovrà bilanciare le tre statistiche che portano alla vittoria o sconfitta: stamina, umore e massa. Il guadagno monetario, con il quale il giocatore comprerà gli alimenti e gli esercizi in palestra, sono gestiti da minigiochi. Avrà a disposizione un inventario, dove tenere gli alimenti.


FUNZIONALITÀ MINIMALI RITENUTE OBBLIGATORIE:
- implementazione di 3 mappe dei rispettivi edifici + mappe generale della città
- implementazione minigiochi
- inventario con alimenti consumabili e gestione denaro
- oggetti interagibili all’interno degli edifici
- gestione statistiche personaggio
- game over
- gestione grafica totale

Funzionalità opzionali:
- salvataggio partite terminate
- aggiunta imprevisti che modificano statistiche
- scelta del livello di difficoltà a inizio gioco
- incremento statistiche proporzionale al completamento del minigioco

“Challenge” principali:
- implementazione grafica mappa generale e sottomappe
- collaborazione dei vari componenti del gruppo
- rispetto del paradigma MVC

Suddivisione del lavoro:

De Carli Andrea: creazione di tutte le 4 mappe e gestione oggetti interagibili all’interno di esse

Camillini Luca: creazione minigiochi interattivi relativi alla palestra e gestione del game over

Morri Mattia: creazione minigioco banca e inventario con annessa gestione di quest’ultimo

Baiocchi Lucio: creazione personaggio principale con relativo movimento e bilanciamento delle statistiche

GYM LIFE 3D:
Play online: https://luciobaiocchi.github.io/OOP23-gym-life/

The `web3d/` folder contains a 3D version of the game with music, playable in the browser on any computer:
use the link above or open `web3d/index.html`. Details in `web3d/README.md`.
The site is published automatically to GitHub Pages on every push to `main` that changes `web3d/`.
