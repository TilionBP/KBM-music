const player = document.getElementById('player');
const seek = document.getElementById('seek');
const list = document.getElementById('list');
const search = document.getElementById('search');
const playpause = document.getElementById('playpause');
const playicon = document.getElementById('playicon');
const nowtitle = document.getElementById('nowtitle');

const songs = [
  { title: "KBM Intro", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { title: "City Lights", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" },
  { title: "Ocean Drive", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3" },
  { title: "Dreamscape", url: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3" }
];

let current = null;
let playing = false;

function loadSongs(filter=""){
  list.innerHTML = "";
  songs.filter(s=>s.title.toLowerCase().includes(filter.toLowerCase()))
       .forEach((s,i)=>{
         const li = document.createElement("li");
         li.textContent = s.title;
         const b = document.createElement("button");
         b.textContent = "Play";
         b.onclick = ()=>playSong(i);
         li.appendChild(b);
         list.appendChild(li);
       });
}

function playSong(i){
  const song = songs[i];
  player.src = song.url;
  player.play();
  nowtitle.textContent = song.title;
  playing = true;
  playicon.textContent = "⏸️";
}

playpause.onclick = ()=>{
  if(!playing && player.src){
    player.play();
    playing = true;
    playicon.textContent = "⏸️";
  } else {
    player.pause();
    playing = false;
    playicon.textContent = "▶️";
  }
};

seek.addEventListener("input", ()=>{
  if(player.duration){
    player.currentTime = player.duration * (seek.value/100);
  }
});

player.addEventListener("timeupdate", ()=>{
  if(player.duration){
    seek.value = (player.currentTime / player.duration) * 100;
  }
});

search.addEventListener("input", e=>{
  loadSongs(e.target.value);
});

loadSongs();
