// Home TV: gym legend videos (Ronnie Coleman, Chris Bumstead, Zyzz) played
// through YouTube's official embed player. Add or change videos by ID
// (the part after "watch?v=" in a YouTube link).

export const TV_VIDEOS = ['GMEMKMAb5w4', 'UiOL7kTTeWc', 'uNN62f55EV0', 'fOrbukJb8QM', '140_IDTZZAc'];

export const embedUrl = (id) => `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
export const thumbUrl = (id) => `https://i.ytimg.com/vi/${id}/mqdefault.jpg`;
