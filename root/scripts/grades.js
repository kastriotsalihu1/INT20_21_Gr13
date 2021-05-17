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

// $("#shtoLiteraturen").on("submit",function (event) {
//     event.preventDefault();
//     alert("test");
//     var emri = $("#file")[0].files[0].name;
//     var lenda = $("#lendet").find(":selected").val();
//     var lloji = $("#lloji").find(":selected").val();

//     console.log(emri);
//     console.log(lenda);
//     console.log(lloji);

   
//     const materiali = {
//       lenda: lenda,
//       emriiFile: emri,
//       lloji: lloji,
//       myDate: myDate,
//     };
  
/*
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
*/
//   $("#lendet option:selected").prop("selected", false);
//   $("#lloji option:selected").prop("selected", false);
//   //shfaqMaterialin(lenda);
//   $("#file").val(null);
// });

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

<script
  src="https://code.jquery.com/jquery-3.6.0.js"
  integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
  crossorigin="anonymous"></script>
