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
 
 var pooFiles=[];
 var matFiles = [{lenda: " Matematike", emriiFile: " Matematika diskrete", lloji: " Ligjerata"}, {lenda: " Matematike", emriiFile: " Detyra", lloji: " Ushtrimet"}];
$("#shtoButton").click(
  function(){
    var lenda =$('#lendet').find(":selected").val();
    var lloji =$('#lloji').find(":selected").val();  
    var emri  = $("#file")[0].files[0].name;
    if(lenda === "Matematike"){
      const materiali = {
        lenda: lenda,
        emriiFile:  emri,
        lloji: lloji
      }
      matFiles.push(materiali);
    }
    shfaqMaterialin(lenda);
   
  }
);


var SinjaleSistemeFiles=[{lenda: " SinjaleDheSisteme", emriiFile:" Serite Furie", lloji:" Detyra"},
{lenda:" SinjaleDheSisteme",emriiFile:" Hyrje ne Sinjale", lloji:" Ligjerata 1"},
{lenda:" SinjaleDheSisteme",emriiFile:" Signals and systems", lloji:" Libra Anglisht"}]

function shfaqMaterialin(lenda){
  if(lenda==="Matematike"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();
    matFiles.forEach((matfile) => {
      const tr = document.createElement('tr');
      for(const key in matfile){
        const td = document.createElement('td');     
        td.innerText = matfile[key];
        tr.appendChild(td);
      }
      tabela.appendChild(tr);
    });
    

  }else if(lenda==="ss"){
    const tabela = document.getElementById("tabela");
    tabela.innerHTML = "";
    tabela.innerHTML = getHeader();

    SinjaleSistemeFiles.forEach((ssfile) => {
      const tr = document.createElement('tr');
      for(const key in ssfile){
        const td = document.createElement('td');     
        td.innerText = ssfile[key];
        tr.appendChild(td);
        
      }
      tabela.appendChild(tr);
    });
  }
}
function getHeader(){
  const tr = '<tr><th>Lenda</th><th>Emri i file</th><th>Lloji</th></tr>';
  return tr;
}
$("#selectLiteraturen").click(
  function(){
    var lenda =$('#selectLiteraturen').find(":selected").val();
    shfaqMaterialin(lenda);
    console.log(lenda);
  }
)







 
 
