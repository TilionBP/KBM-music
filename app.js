const songs = [
  {
    title: "Inspiring Corporate",
    artist: "Ashot-Danielyan-Composer",
    url: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ashot_Danielyan_Composer/Inspiring_Corporate/Ashot_Danielyan_Composer_-_Inspiring_Corporate.mp3"
  },
  {
    title: "Dreams",
    artist: "Benjamin Tissot (Bensound)",
    url: "https://www.bensound.com/bensound-music/bensound-dreams.mp3"
  },
  {
    title: "Sunny",
    artist: "Benjamin Tissot (Bensound)",
    url: "https://www.bensound.com/bensound-music/bensound-sunny.mp3"
  },
  {
    title: "Energy",
    artist: "Benjamin Tissot (Bensound)",
    url: "https://www.bensound.com/bensound-music/bensound-energy.mp3"
  },
  {
    title: "Epic",
    artist: "Benjamin Tissot (Bensound)",
    url: "https://www.bensound.com/bensound-music/bensound-epic.mp3"
  }
];

const audio = new Audio();
let currentSongIndex = 0;

function loadSong(index) {
  const song = songs[index];
  audio.src = song.url;
  document.getElementById("song-title").textContent = song.title;
  document.getElementById("song-artist").textContent = song.artist;
}

function playPause() {
  if (audio.paused) {
    audio.play();
    document.getElementById("play-btn").textContent = "⏸ Pause";
  } else {
    audio.pause();
    document.getElementById("play-btn").textContent = "▶ Play";
  }
}

function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
  audio.play();
}

// cargar la primera canción
window.onload = function() {
  loadSong(currentSongIndex);
};
