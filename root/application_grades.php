<?php
require_once("dbConfig.php");
$con= dbConfig::connect();
?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />

  <link rel="stylesheet" href="styles/app_grades.css" />
  
  <link rel="stylesheet" href="styles/app_navigation.css" />
  <link rel="stylesheet" href="styles/cardInformation.css" />

  <link href="dependencies/fontawesome/css/all.css" rel="stylesheet" />
  <!-- Simple css to remove the watermark from the hosting website -->
  <link rel="stylesheet" href="styles/removewatermark.css">
  <!-- Simple css to remove the watermark from the hosting website -->
  <title>Grades</title>
</head>

<body>
  <div id="mask"> </div>

  <div id="header"></div>

  <div id="container">
    <!-- side navigation menu -->
    <div id="sidebar"></div>
    <main>

      <div id="box_1" class="card">

        <div class="information">
          <div class="icon"><i class="fa fa-info" aria-hidden="true"></i></div>
          <div class="contents">
            <h2>
             In this box you can save your grades and your rated assignments. Select and choose your grade for each subject.
            </h2>
          </div>
        </div>

        <h1>Grades</h1>
        <input id="subjects" type="text" placeholder="Subjects" />
        <ul class="scroll">
          <li>
            <span><i class="fa fa-trash"></i></span>Internet<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <span><i class="fa fa-trash"></i></span>Signals and Systems<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <span><i class="fa fa-trash"></i></span>OOP<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <span><i class="fa fa-trash"></i></span>Electronics<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <span><i class="fa fa-trash"></i></span>Database<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
          <li>
            <span><i class="fa fa-trash"></i></span>Mathematics<select id="grades">
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </select>
          </li>
        </ul>
      </div>

      <div id="box_2" class="card">

        <div class="information">
          <div class="icon"><i class="fa fa-info" aria-hidden="true"></i></div>
          <div class="contents">
            <h2>
              This is Upload Literature. Here you can save all your university literature organizing the files by the subject and the importance it has.
            </h2>
          </div>
        </div>
        <div>
          <h1 id="shtoLiterature">Upload literature</h1>
          <select class="objects" id="lendet" >
            <option>Subject</option>
            <option value="Database">Database</option>
            <option value="OOP">OOP</option>
            <option value="Mathematics">Mathematics</option>
            <option value="SignalsandSystems">Signals and Systems</option>
            <option value="Electronics">Electronics</option>
            <option value="Internet">Internet</option>
          </select>
          <select  id="lloji" class="objects">
            <option>Type</option>
            <option value="Lectures">Lectures</option>
            <option value="Excercises">Excercises</option>
            <option value="Books">Books</option>
            <option value="Exams">Exams</option>
            <option value="Others">Others</option>
          </select>
          <input type="file"  id="file" multiple/>
        </div>
        <button  id="shtoButton">Add Literature</button>
        </form>
      </div>
      <div id="box_3"class="card">
        <div class="information">
          <div class="icon"><i class="fa fa-info" aria-hidden="true"></i></div>
          <div class="contents">
            <h2>
             This is your literature you have upload sorted and organized by the subject you have choosen. Here you can see what subject, type, name and data your literature is.
            </h2>
          </div>
        </div>
        <h1>Show literature</h1>
        <select id="selectLiteraturen">
          <option value="Mathematics">Mathematics</option>
          <option value="Electronics">Electronics</option>
          <option value="SignalsandSystems">Signals and Systems</option>
          <option value="Internet">Internet</option>
          <option value="Database">Database</option>
          <option value="OOP">OOP</option>
        </select>
        
        <div class="table scrollbar">
          <table id="tabela" cellpadding="4" cellspacing="5">
          </table>
        </div>
        
      </div>


  </div>

  </main>
  <script src="scripts/jquery.js"></script>
  <script src="scripts/navigation.js"></script>
  <script src="scripts/load.js"></script>
  <script src="scripts/cardInformation.js" ></script>
  <script src="scripts/main.js"></script>
  <script src="scripts/grades.js"></script>
</body>


<!--JAVASCRIPT-->

<script type="text/javascript">
//Click on X to delete subjects
$("ul").on("click", "span", function () {
  //this=span
  $(this)
    .parent()
    .fadeOut(500, function () {
      //this=li
      $(this).remove();
    });
});

$("input").keypress(function (event) {
  if (event.which === 13) {
    if ($(this).val() === "") {
      alert("No blank values allowed");
    } else if ($(this).val() !== "") {
      //grabbiing subjects text from input
      var notat = $(this).val();
      //me e fshi qka kena shkru n input
      $(this).val("");
      //create a new li and add to ul4
      // jo me "" po me ''
      $("ul").append(
        "<li><span><i class='fas fa-trash'></i></span> " +
          notat +
          "<select id='grades'><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option></select></li>"
      );
    }
  }
});

var myDate = new Date();
var Data = new Date(2020, 11, 21);
var myPastDate = new Date(2019, 11, 2, 10, 30, 15);

var pooFiles = [
  { lenda: "OOP", emriiFile: "Java", lloji: "Books", myPastDate },
  {
    lenda: "OOP",
    emriiFile: "Programimi i Orientuar ne Objekte",
    lloji: "Exams",
    Data,
  },
];
var matFiles = [
  {
    lenda: "Mathematics",
    emriiFile: "Matematika diskrete",
    lloji: "Lectures",
    myDate,
  },
  { lenda: "Mathematics", emriiFile: "Detyra", lloji: "Excercises", myDate },
];
var SinjaleSistemeFiles = [
  {
    lenda: "SignalsandSystems",
    emriiFile: "Serite Furie",
    lloji: "Exams",
    myDate,
  },
  {
    lenda: "SignalsandSystems",
    emriiFile: "Hyrje ne Sinjale",
    lloji: "Lectures",
    myDate,
  },
  {
    lenda: "SignalsandSystems",
    emriiFile: "Signals and systems",
    lloji: "Tjeter",
    myDate,
  },
];
var elektronikaFiles = [
  { lenda: "Electronics", emriiFile: "Amplifikatoret", lloji: "Books", myDate },
];
var databazeFiles = [
  {
    lenda: "Database",
    emriiFile: "Tabelat relacionale",
    lloji: "Exams",
    myDate,
  },
];
var internetFiles = [
  { lenda: "Internet", emriiFile: "Hyrje ne internet", lloji: "Books", myDate },
];

$("#shtoButton").click(function () {
  for (var i = 0; i < $("#file")[0].files.length; ++i) {
    var emri = $("#file").get(0).files[i].name;
    var lenda = $("#lendet").find(":selected").val();
    var lloji = $("#lloji").find(":selected").val();

    var emp='EH';
    $.ajax({
      url:"application_grades.php",
      method:"post",
      data: emp,
      success:function(res){
        console.log(res);
      }
    })

    const materiali = {
      lenda: lenda,
      emriiFile: emri,
      lloji: lloji,
      myDate: myDate,
    };

  
    if (lenda === "Mathematics") {
      matFiles.push(materiali);
    } else if (lenda === "SignalsandSystems") {
      SinjaleSistemeFiles.push(materiali);
    } else if (lenda === "OOP") {
      pooFiles.push(materiali);
    } else if (lenda === "Electronics") {
      elektronikaFiles.push(materiali);
    } else if (lenda === "Database") {
      databazeFiles.push(materiali);
    } else if (lenda === "Internet") {
      internetFiles.push(materiali);
    }

 
  }
  $("#lendet option:selected").prop("selected", false);
  $("#lloji option:selected").prop("selected", false);
  shfaqMaterialin(lenda);
  $("#file").val(null);

 
});

function shfaqMaterialin(lenda) {
  var shfaqLenda = $("#selectLiteraturen").find(":selected").val();
  if (lenda != shfaqLenda) {
    $("#selectLiteraturen option").each(function () {
      if ($(this).val() == lenda) {
        $(this).prop("selected", true);
      }
    });
  }

  if (lenda === "Mathematics") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    matFiles.forEach((matfile) => {
      const tr = document.createElement("tr");
      for (const key in matfile) {
        const td = document.createElement("td");
        td.innerText = matfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  } else if (lenda === "SignalsandSystems") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    SinjaleSistemeFiles.forEach((ssfile) => {
      const tr = document.createElement("tr");
      for (const key in ssfile) {
        const td = document.createElement("td");
        td.innerText = ssfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  } else if (lenda === "OOP") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    pooFiles.forEach((poofile) => {
      const tr = document.createElement("tr");
      for (const key in poofile) {
        const td = document.createElement("td");
        td.innerText = poofile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  } else if (lenda === "Database") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    databazeFiles.forEach((databazefile) => {
      const tr = document.createElement("tr");
      for (const key in databazefile) {
        const td = document.createElement("td");
        td.innerText = databazefile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  } else if (lenda === "Electronics") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    elektronikaFiles.forEach((elektronikefile) => {
      const tr = document.createElement("tr");
      for (const key in elektronikefile) {
        const td = document.createElement("td");
        td.innerText = elektronikefile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  } else if (lenda === "Internet") {
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    internetFiles.forEach((internetfile) => {
      const tr = document.createElement("tr");
      for (const key in internetfile) {
        const td = document.createElement("td");
        td.innerText = internetfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  }
}
function getHeader() {
  const tr =
    '<tr class="thstyle"><th>Subject</th><th>Filename</th><th>Type</th><th>Data</th></tr>';
  return tr;
}
$("#selectLiteraturen").click(function () {
  var lenda = $("#selectLiteraturen").find(":selected").val();
  shfaqMaterialin(lenda);
});


</script>

</html>