<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="stylesheet" href="styles/app_navigation.css" />
  <link rel="stylesheet" href="styles/music_player.css" />
  <link rel="stylesheet" href="styles/app_pomodoro.css" />
  <link rel="stylesheet" href="styles/cardInformation.css" />
  <!-- <link rel="stylesheet" href="../root/Bootstrap/css/bootstrap.min.css"> -->

  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css" />
  <!-- Simple css to remove the watermark from the hosting website -->

  <link href="dependencies/fontawesome/css/all.css" rel="stylesheet" />
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

  <title>Pomodoro | Music</title>
</head>

<body>
<?php include 'application_header.php'; ?>

<div id="container">
  <!-- side navigation menu -->
  <?php include 'application_sidebar.php'; ?>
  <div id="mask"></div>

    <main>
      <div class="card music">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>
              This is your music player. Swipe left or right to change the
              song. Turn autoplay for the playlist to be ongoing. You can
              change the volume and skip parts of a song too.
              <button>Submit</button>
            </h2>
          </div>
        </div>
        <div class="main">
          <p id="logo"><i class="fa fa-music"></i>Music</p>

          <!--- left part --->
          <div class="left">
            <!--- song img --->
            <img id="track_image" />
            <div class="volume">
              <p id="volume_show">90</p>
              <i class="fa fa-volume-up" aria-hidden="true" onclick="mute_sound()" id="volume_icon"></i>
              <input type="range" min="0" max="100" value="90" onchange="volume_change()" id="volume" />
            </div>
          </div>
          <!--- right part --->
          <div class="right">
            <div class="show_song_no">
              <p id="present">1</p>
              <p>/</p>
              <p id="total">14</p>
            </div>

            <!--- song title & artist name --->
            <p id="title"></p>
            <p id="artist"></p>

            <!--- middle part --->
            <div class="middle">
              <button onclick="previous_song()" id="pre">
                <i class="fa fa-step-backward" aria-hidden="true"></i>
              </button>
              <button onclick="justplay()" id="play">
                <i class="fa fa-play" aria-hidden="true"></i>
              </button>
              <button onclick="next_song()" id="next">
                <i class="fa fa-step-forward" aria-hidden="true"></i>
              </button>
            </div>

            <!--- song duration part --->
            <div class="duration">
              <input type="range" min="0" max="100" value="0" id="duration_slider" onchange="change_duration()" />
            </div>
            <button id="auto" onclick="autoplay_switch()">
              Auto play
              <i class="fa fa-circle-o-notch" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="card" id="musicForm">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>
              Form to help you upload a song to the page and then listen to it whenever you're logged in.
            </h2>
          </div>
        </div>
        <h2 class="cardtitle">UPLOAD SONG</h2>
        <form action="music.php" method="POST" enctype="multipart/form-data">
          <input type="text" placeholder="TITLE" name="title">
          <input type="text" placeholder="ARTIST" name="artist">
          <input type="file" id="file1" name="audio">
          <label for="file1" id="audiolabel">Choose Audio</label>
          <input type="file" id="file2" name="pic" accept="image/*">
          <label for="file2" id="piclabel">Choose Picture</label>
          <input type="submit" value="Add to playlist" name="addsong">

        </form>
      </div>
      <div class="card" id="pomodoro">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>
              This is a Pomodoro. Think of it as a timer, specific one that
              lasts 25 minutes. After each cycle of 25 minutes you have a 5
              minute break.
            </h2>
          </div>
        </div>
        <h2 class="cardtitle">POMODORO</h2>
        <!-- <p id="work" class="label">Work:</p>
          <p id="break" class="label">Break:</p>
          <p id="cycles" class="label">Cycles:</p> -->

        <div id="counter" class="timer">
          <p id="break" class="hidden">
            <span id="break_minutes">00</span>:<span id="break_seconds">00</span>
          </p>
          <p id="timer">
            <span id="work_minutes">00</span>:<span id="work_seconds">05</span>
          </p>
          <p id="cycle">3</p>
        </div>
        <div id="btn_container">
          <button id="start">Start</button>
          <button id="stop">Pause</button>
          <button id="reset">Reset</button>
        </div>
      </div>
      <div id="trees" class="card">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>
              This is your garden. You plant a tree for each 4 cycles of
              pomodoro studying!
            </h2>
          </div>
        </div>
        <h2 class="cardtitle">Garden</h2>
        <div id="canvascontainer">
          <canvas id="canvas"> </canvas>
        </div>
      </div>
      <div class="card" id="searchMusic">
        <div class="information">
          <div class="icon">
            <i class="fa fa-info" aria-hidden="true"></i>
          </div>
          <div class="contents">
            <h2>
              Enter the title of a song and see its lyrics,image, even the whole video.
            </h2>
          </div>
        </div>
        <h2 class="cardtitle">SEARCH SONGS</h2>
        <form id="songs">
          <div>
            <input type="text" name="name" id="name" placeholder="Write song title">
          </div>
          <button type="submit" >Search</button>
        </form>
       
              <h3>Results</h3>
            
              <table id="nita">
              </table>
           
      </div>
    </main>
  </div>
  <script>
  
    document.getElementById('songs').addEventListener('submit', loadSongs);

    function loadSongs(e) {
      e.preventDefault();
      var name = document.getElementById('name').value;
      console.log(name);
      const data = null;
      var search = name.replace(" ", "%20");
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.addEventListener("readystatechange", function() {
        if (this.readyState === this.DONE) {
          // console.log(this.responseText);
          var songs = JSON.parse(this.responseText)
          // var SONGS = songs.response.hits[];

          console.log(songs);
          var song = songs.response.hits;

          var output = '';
          //
          console.log(title);
          for (var i = 0; i < 5; i++) {
            output += '<tr><td style=" margin-left:5px; color:white;text-align:left; font-weight:600";max-width:50px;word-wrap:break-word;>' + song[i].result.title + '</td> ' +
              '<td style="color:white; margin-left:5px; text-align:left; font-weight:600";max-width:50px;word-wrap:break-word;><a href = "' + song[i].result.url + '">Lyrics' + '</a></td>' +
              '<td ><img src = "' + song[i].result.header_image_thumbnail_url + '" width="30" ></td></tr>'
          }

          //;

          var ul = document.querySelector('#nita');

          ul.innerHTML = output;


        }
      });

      xhr.open("GET", "https://genius.p.rapidapi.com/search?q=" + search);
      xhr.setRequestHeader("x-rapidapi-key", "df03cbc84dmsh93a5aced899e6f3p10314ajsn31d6528265f8");
      xhr.setRequestHeader("x-rapidapi-host", "genius.p.rapidapi.com");

      xhr.send(data);

    }
  </script>

  <script src="scripts/jquery.js"></script>
  <script src="scripts/navigation.js"></script>
  <!-- <script src="scripts/load.js"></script> -->
  <script src="scripts/pomodoro_main.js"></script>
  <script src="scripts/trees.js"></script>
  <script src="scripts/music_player.js"></script>
  <script src="scripts/cardInformation.js"></script>
  <script src="scripts/main.js"></script>







</body>

</html>

