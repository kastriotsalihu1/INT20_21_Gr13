import * as literatureService from "./services/literatureService.js";


// document.getElementById('shtoLiteraturen').addEventListener('submit', postName);

function postName(e) {
  var emri = $("#file")[0].files[0].name;
  var lenda = $("#lendet").find(":selected").val();
  var lloji = $("#lloji").find(":selected").val();

  var requestBody = `file=${emri}&lenda=${lenda}&lloji=${lloji}`;

  e.preventDefault();
  literatureService.addSubject(requestBody)
    .then(response => {
      console.log(response);
    })
    .catch(err => console.log(err))
}


// document.getElementById("shtoLiteraturen").addEventListener("submit", (e) => {
//   e.preventDefault();
//   console.log(e);
//   literatureService.uploadLiterature()
//     .then(response => {
//       console.log(response);
//     })
//     .catch(err => console.log(err))
// })