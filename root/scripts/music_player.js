let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#auto');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');

let timer;
let autoplay = 0;

let index_no = 0;
let isPlayingSong = false;

//create a audio Element
let track = document.createElement('audio');
class Song {
  constructor(name, path, img, singer) {
    this.name = name;
    this.path = path;
    this.img = img;
    this.singer = singer;
  }
}

//All songs list
let songs = [
  new Song("Four Seasons",
    "videos/Four seasons- Vivaldi.mp3",
    "images/pomodoro_img/four seasons.jpg",
    "Vivaldi"),
  new Song("Fur Elise",
    "videos/Fur Elise- Beethoven.mp3",
    "images/pomodoro_img/fur elise.jpg",
    "Beethoven"),
  new Song("Classical Play",
    "videos/Mozart.mp3",
    "images/pomodoro_img/mozart1.jpg",
    "Mozart"),
  new Song("Piano Play",
    "videos/Piano Music- Marc Robillard.mp3",
    "images/pomodoro_img/piano1.jpg",
    "Marc Robillard"),
  new Song("Ambient Music",
    "videos/ambient music.mp3",
    "images/pomodoro_img/ambient music.jpg",
    "DJ"),
  new Song("Rain Sounds",
    "videos/Rain Sound.mp3",
    "images/pomodoro_img/rain.jpg",
    "The Sky"),
  new Song("The Girl I Met",
    "videos/Kudasai - the girl i haven't met.mp3",
    "images/pomodoro_img/kudasai.gif",
    "Kudasai"),
  new Song("Ocean Waves",
    "videos/Ocean Wave.mp3",
    "images/pomodoro_img/ocean.jpg",
    "Ocean"),
  new Song("Sorry I Like You",
    "videos/Burbank - sorry i like you.mp3",
    "images/pomodoro_img/burbank.jpg",
    "Burbank"),
  new Song("Lo-fi Song",
    "videos/Lo-Fi Hiphop Beats Study Timer.mp3",
    "images/pomodoro_img/lofi1.png",
    "DJ"),
  new Song("Chill Guitar",
    "videos/Chill Guitar.mp3",
    "images/pomodoro_img/chill guitar.jpg",
    "Unknown"),
  new Song("Piano Music",
    "videos/Piano Music.mp3",
    "images/pomodoro_img/piano2.jpg",
    "Unknown"),
  new Song("Lofi Song",
    "videos/Lo-fi song.mp3",
    "images/pomodoro_img/lofi2.jpg",
    "DJ"),
  new Song("Classical Music",
    "videos/Classical music.mp3",
    "images/pomodoro_img/classical music.jpg",
    "Haydn")
];

// All functions

// load the track
function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = songs[index_no].path;
  title.innerHTML = songs[index_no].name;
  track_image.src = songs[index_no].img;
  artist.innerHTML = songs[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = songs.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);

//mute sound
function mute_sound() {
  track.volume = 0;
  volume.value = 0;
  volume_show.innerHTML = 0;
}

// checking.. the song is playing or not
const justplay = () => isPlayingSong ? pausesong() : playsong();

// reset song slider
const reset_slider = () => slider.value = 0;

// play song
function playsong() {
  track.play();
  isPlayingSong = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

//pause song
function pausesong() {
  track.pause();
  isPlayingSong = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

// next song
function next_song() {
  if (index_no < songs.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

// previous song
function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();

  } else {
    index_no = songs.length;
    load_track(index_no);
    playsong();
  }
}

// change volume
function changeVolume() {
  volume_show.innerHTML = recent_volume.value;
  track.volume = recent_volume.value / 100;
}

// change slider position 
function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

// autoplay function
function autoplay_switch() {
  if (autoplay == 1) {
    autoplay = 0;
    auto_play.style.background = "rgba(75, 158, 111,0.5)";
  } else {
    autoplay = 1;
    auto_play.style.background = "rgb(62, 145, 98)";
  }
}

function range_slider() {
  let position = 0;

  // update slider position
  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  // function will run when the song is over
  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}