
       var x=document.getElementById("login");
       var y=document.getElementById("register");
       var z=document.getElementById("btn");

       function register(){
          x.style.left="-400px";
          y.style.left="50px";
          z.style.left="110px";
       }
       function signin(){
          x.style.left="50px";
          y.style.left="450px";
          z.style.left="0";
        }

function validate(){
   var username=document.getElementById("username");
   if(username.value==""){
     alert("no blank values allowed!");
   } else{

   }
}