// Gym radio station that plays a Spotify playlist through Spotify's official
// embed player: the music streams from Spotify, nothing is copied into the game.

// compact player on small screens
const COMPACT = () => matchMedia('(max-width: 640px), (max-height: 500px)').matches;

export const PLAYLIST_ID = '5GgdFifP9IKcXhZu21OG5n';

export class SpotifyStation {
  constructor() {
    this.box = document.getElementById('spotify');
    this.controller = null;
    this.frame = null;
    this.visible = false;
  }

  // creates the player the first time it is needed
  ensure() {
    if (this.controller || this.frame) return;
    const slot = document.createElement('div');
    this.box.appendChild(slot);
    const fallback = () => {
      if (this.controller || this.frame) return;
      // plain embed if the iFrame API could not load
      const f = document.createElement('iframe');
      f.src = `https://open.spotify.com/embed/playlist/${PLAYLIST_ID}?utm_source=generator&theme=0`;
      f.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      f.loading = 'lazy';
      slot.replaceWith(f);
      this.frame = f;
    };
    window.onSpotifyIframeApiReady = (api) => {
      api.createController(slot, { uri: `spotify:playlist:${PLAYLIST_ID}`, width: '100%', height: COMPACT() ? 80 : 152 }, (c) => {
        this.controller = c;
      });
    };
    const script = document.createElement('script');
    script.src = 'https://open.spotify.com/embed/iframe-api/v1';
    script.async = true;
    script.onerror = fallback;
    document.head.appendChild(script);
    setTimeout(fallback, 6000);
  }

  show() {
    this.ensure();
    this.visible = true;
    this.box.classList.remove('hidden');
    if (this.controller && this.wasPlaying) this.controller.resume();
  }

  // hides the widget and pauses the music (when leaving the gym or switching station)
  hide() {
    if (!this.visible) return;
    this.visible = false;
    this.box.classList.add('hidden');
    if (this.controller) {
      this.wasPlaying = true;
      this.controller.pause();
    }
  }
}
