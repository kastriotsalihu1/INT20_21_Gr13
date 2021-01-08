let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume= document.querySelector('#volume');
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
let Playing_song = false;
 
//create a audio Element
let track = document.createElement('audio');


 
//All songs list
let All_song = [
    {
      name: "Four Seasons",
      path: "videos/Four seasons- Vivaldi.mp3",
      img: "images/pomodoro_img/four seasons.jpg",
      singer: "Vivaldi"
    },
    {
      name: "Fur Elise",
      path: "videos/Fur Elise- Beethoven.mp3",
      img: "images/pomodoro_img/fur elise.jpg",
      singer: "Beethoven"
    },
    {
      name: "Classical Play",
      path: "videos/Mozart.mp3",
      img: "images/pomodoro_img/mozart1.jpg",
      singer: "Mozart"
    },
    {
      name: "Piano Play",
      path: "videos/Piano Music- Marc Robillard.mp3",
      img: "images/pomodoro_img/piano1.jpg",
      singer: "Marc Robillard"
    },
    {
      name: "Ambient Music",
      path: "videos/ambient music.mp3",
      img: "images/pomodoro_img/ambient music.jpg",
      singer: "DJ"
    },
    {
      name: "Rain Sounds",
      path: "videos/Rain Sound.mp3",
      img: "images/pomodoro_img/rain.jpg",
      singer: "The Sky"
    },
    {
      name: "The Girl I Met",
      path: "videos/Kudasai - the girl i haven't met.mp3",
      img: "images/pomodoro_img/kudasai.gif",
      singer: "Kudasai"
    },
    {
      name: "Ocean Waves",
      path: "videos/Ocean Wave.mp3",
      img: "images/pomodoro_img/ocean.jpg",
      singer: "Ocean"
    },
    {
      name: "Sorry I Like You",
      path: "videos/Burbank - sorry i like you.mp3",
      img: "images/pomodoro_img/burbank.jpg",
      singer: "Burbank"
    },
    {
      name: "Lo-fi Song",
      path: "videos/Lo-Fi Hiphop Beats Study Timer.mp3",
      img: "images/pomodoro_img/lofi1.png",
      singer: "DJ"
    },
    {
      name: "Chill Guitar",
      path: "videos/Chill Guitar.mp3",
      img: "images/pomodoro_img/chill guitar.jpg",
      singer: "Unknown"
    },
    {
      name: "Piano Music",
      path: "videos/Piano Music.mp3",
      img: "images/pomodoro_img/piano2.jpg",
      singer: "Unknown"
    },
    {
      name: "Lofi Song",
      path: "videos/Lo-fi song.mp3",
      img: "images/pomodoro_img/lofi2.jpg",
      singer: "DJ"
    },
    {
      name: "Classical Music",
      path: "videos/Classical music.mp3",
      img: "images/pomodoro_img/classical music.jpg",
      singer: "Haydn"
    }
 ];

 

 // function load the track
function load_track(index_no){
    clearInterval(timer);
    reset_slider();
 
    track.src = All_song[index_no].path;
    title.innerHTML = All_song[index_no].name;  
    track_image.src = All_song[index_no].img;
    artist.innerHTML = All_song[index_no].singer;
    track.load();
 
    timer = setInterval(range_slider ,1000);
    total.innerHTML = All_song.length;
    present.innerHTML = index_no + 1;
}
 
load_track(index_no);

