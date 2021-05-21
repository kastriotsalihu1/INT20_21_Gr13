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

var jsonSongs ='<?php ?>';

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;

//create a audio Element
let track = document.createElement('audio');



function getSongs(){

  fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
      .then(response => response.json())
      .then(data => {
        songs = data;
        console.log(songs);
        return songs;
      })
      .catch(err => console.error(err));
}
// console.log(getSongs(), 'asdasd')

// All functions
// function load the track

      function load_track(index_no) {

        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs[index_no].artist);
              clearInterval(timer);
              reset_slider();
              track.src = songs[index_no].audio;
              artist.innerHTML = songs[index_no].artist;
              title.innerHTML = songs[index_no].title;
              track_image.src = songs[index_no].pic;
              track.load();

              timer = setInterval(range_slider, 1000);
              total.innerHTML = Object.keys(songs).length;
              present.innerHTML = index_no + 1;

            })
            .catch(err => console.error(err));
      }

      load_track(index_no);


//mute sound function
      function mute_sound() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              track.volume = 0;
              volume.value = 0;
              volume_show.innerHTML = 0;

            })
            .catch(err => console.error(err));
      }


// checking.. the song is playing or not
      function justplay() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              if (Playing_song == false) {
                playsong();

              } else {
                pausesong();
              }

            })
            .catch(err => console.error(err));
      }


// reset song slider
      function reset_slider() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              slider.value = 0;

            })
            .catch(err => console.error(err));
      }

// play song
function playsong() {
  fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
      .then(response => response.json())
      .then(data => {
        songs = data;
        console.log(songs);
        track.play();
        Playing_song = true;
        play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';

      })
      .catch(err => console.error(err));
}

//pause song
      function pausesong()
      {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              track.pause();
              Playing_song = false;
              play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';

            })
            .catch(err => console.error(err));
      }


// next song
      function next_song() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);

              if (index_no < Object.keys(songs).length - 1) {
                index_no += 1;
                load_track(index_no);
                playsong();
              } else {
                index_no = 0;
                load_track(index_no);
                playsong();

              }

            })
            .catch(err => console.error(err));
      }


// previous song
      function previous_song() {

        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              if (index_no > 0) {
                index_no -= 1;
                load_track(index_no);
                playsong();

              } else {
                index_no = Object.keys(songs).length;
                load_track(index_no);
                playsong();
              }

            })
            .catch(err => console.error(err));
      }


// change volume
      function volume_change() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              volume_show.innerHTML = recent_volume.value;
              track.volume = recent_volume.value / 100;

            })
            .catch(err => console.error(err));
      }

// change slider position
      function change_duration() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              slider_position = track.duration * (slider.value / 100);
              track.currentTime = slider_position;

            })
            .catch(err => console.error(err));
      }

// autoplay function
      function autoplay_switch() {
        fetch('http://localhost/INT20_21_Gr13/root/fetchSongs.php')
            .then(response => response.json())
            .then(data => {
              songs = data;
              console.log(songs);
              if (autoplay == 1) {
                autoplay = 0;
                auto_play.style.background = "rgba(75, 158, 111,0.5)";
              } else {
                autoplay = 1;
                auto_play.style.background = "rgb(62, 145, 98)";
              }

            })
            .catch(err => console.error(err));
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