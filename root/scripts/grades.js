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
 
 $("input").keypress(function(event){
   if(event.which===13){
     //grabbiing new todo text from input
     var todoText=($(this).val());
     //me e fshi qka kena shkru n input
     $(this).val("");
     //create a new li and add to ul4
     // jo me "" po me ''
     $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "<select><option >6</option><option >7</option><option >8</option><option >9</option><option >10</option></select></li>")
   }
 });
 
 
 /*me e shfaq ose me e fade away ikonen e lapsit*/
 $(".fa-pencil-alt").click(function(){
   $("input").fadeToggle();
 })
 
 $("ul").on("click", "select", function(){
  $(this).toggleClass("completed");
 });
 
 
 

 