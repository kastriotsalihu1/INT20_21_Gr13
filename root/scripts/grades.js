// check off specific todos by clicking
$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
 });
 //Click on X to delete Todo
 $("ul").on("click","span",function(event){
   //this=span
   $(this).parent().fadeOut(500,function(){
     //this=li
     $(this).remove();
   });
   event.stopPropagation();/* mos mu ekzekutu line-throughi i cili pasi spani osht brenda li(event bubbling) bohet line-through*/
 });

 $("#math").on("click",function(event){
   $(this).parent(),remove();
 })

 $("input").keypress(function(event){
   if(event.which===13){
     //grabbiing new todo text from input
     var todoText=($(this).val());
     //me e fshi qka kena shkru n input
     $(this).val("");
     //create a new li and add to ul4
     // jo me "" po me ''
     $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "<select id='grades'><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option></select></li>")
   }
 });
 /*me e shfaq ose me e fade away ikonen e lapsit*/
 $(".fa-pencil-alt").click(function(){
   $("input").fadeToggle();
 })
 $("ul").on("click", "select", function(){
  $(this).toggleClass("completed");
 });
 
 var pooFiles=[{lenda:"POO",emriiFile:"Java",lloji:"Liber"},{lenda:"POO",emriiFile:"Programimi i Orientuar ne Objekte",  lloji:"Afate"}];
 var matFiles = [{lenda: "Matematike", emriiFile: "Matematika diskrete", lloji: "Ligjerata"}, {lenda: "Matematike", emriiFile: "Detyra", lloji: "Ushtrime"}];
 var SinjaleSistemeFiles=[{lenda: "SinjaleDheSisteme", emriiFile:"Serite Furie", lloji:"Afate"},
{lenda:"SinjaleDheSisteme",emriiFile:"Hyrje ne Sinjale", lloji:"Ligjerata"},
{lenda:"SinjaleDheSisteme",emriiFile:"Signals and systems", lloji:"Tjeter"}]
var elektronikaFiles=[{lenda:"Elektronike",emriiFile:"Amplifikatoret",lloji:"Liber"}];
var databazeFiles=[{lenda:"Databaze",emriiFile:"Tabelat relacionale",lloji:"Afate"}];
var internetFiles=[{lenda:"Internet",emriiFile:"Hyrje ne internet",lloji:"Liber"}];
$("#shtoButton").click(
  function(){
    var lenda =$('#lendet').find(":selected").val();
    var lloji =$('#lloji').find(":selected").val();  
    var emri  = $("#file")[0].files[0].name;
    const materiali = {
      lenda: lenda,
      emriiFile:  emri,
      lloji: lloji
    }
    if(lenda === "Matematike"){
      matFiles.push(materiali);
    }else if(lenda === "SinjaledheSisteme"){
      SinjaleSistemeFiles.push(materiali);
    }else if(lenda === "POO"){
      pooFiles.push(materiali);
    }else if(lenda=="Elektronike"){
      elektronikaFiles.push(materiali);
    }else if(lenda=="Databaze"){
      databazeFiles.push(materiali);
    }else if(lenda=="Internet"){
      internetFiles.push(materiali);
    }
    $("#lendet option:selected").prop("selected", false);
    $("#lloji option:selected").prop("selected", false);
    $("#file").val(null);
    shfaqMaterialin(lenda);
  }
);

function shfaqMaterialin(lenda){
  var shfaqLenda =$('#selectLiteraturen').find(":selected").val();
  if(lenda!=shfaqLenda){
    $('#selectLiteraturen option').each(function() {
      if($(this).val() == lenda) {
          $(this).prop("selected", true);
      }
  });
  }
  if(lenda==="Matematike"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    matFiles.forEach((matfile) => {
      const tr = document.createElement('tr');
      for(const key in matfile){
        const td = document.createElement('td');     
        td.innerText = matfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
  }else if(lenda==="SinjaledheSisteme"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    SinjaleSistemeFiles.forEach((ssfile) => {
      const tr = document.createElement('tr');
      for(const key in ssfile){
        const td = document.createElement('td');     
        td.innerText = ssfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    })
  }else if(lenda==="POO"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    pooFiles.forEach((poofile) => {
      const tr = document.createElement('tr');
      for(const key in poofile){
        const td = document.createElement('td');     
        td.innerText = poofile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    })
  }else if(lenda==="Databaze"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    databazeFiles.forEach((databazefile) => {
      const tr = document.createElement('tr');
      for(const key in databazefile){
        const td = document.createElement('td');     
        td.innerText = databazefile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    })
  }else if(lenda==="Elektronike"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    elektronikaFiles.forEach((elektronikefile) => {
      const tr = document.createElement('tr');
      for(const key in elektronikefile){
        const td = document.createElement('td');     
        td.innerText = elektronikefile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    })
  }else if(lenda==="Internet"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    internetFiles.forEach((internetfile) => {
      const tr = document.createElement('tr');
      for(const key in internetfile){
        const td = document.createElement('td');     
        td.innerText = internetfile[key];
        td.classList.add("tdstyle");
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    })
  }

}
function getHeader(){
  const tr = '<tr class="thstyle"><th>Lenda</th><th>Emri i file</th><th>Lloji</th></tr>';
  return tr;
}
$("#selectLiteraturen").click(
  function(){
    var lenda =$('#selectLiteraturen').find(":selected").val();
    shfaqMaterialin(lenda);
    console.log(lenda);
  }
)

const openModalButtons=document.querySelectorAll('[data-modal-target]');
const closeModalButtons=document.querySelectorAll('[data-close-button]');
const overlay=document.getElementById('overlay');

openModalButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    const modal=document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
})

closeModalButtons.forEach(button=>{
  button.addEventListener('click',()=>{
    const modal=button.closest('.modal')
    closeModal(modal)
  })
})


 function openModal(model){
   if(modal==null)
     reutrn 
   modal.classList.add('active')
 }

 function closeModal(model){
  if(modal==null)return 
  modal.classList.remove('active')
  
}




 
 
