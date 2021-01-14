
       var x=document.getElementById("login");
       var y=document.getElementById("register");
       var z=document.getElementById("btn");

       function register(){
          x.style.left="-400px";
          y.style.left="45px";
          z.style.left="110px";
       }
       function signin(){
          x.style.left="45px";
          y.style.left="450px";
          z.style.left="0";
        }

function validatelogin(){
   var username=document.getElementById("username").value;
     if(username==""||password==""){
     alert("No blank values allowed!");
    } 
    if(username.length<5){
      alert("**Username length must be atleast 5 characters");
     } 
   var password=document.getElementById("password").value;
    if(password.length < 8||password.length> 15){
     alert("**Password length must be atleast 8 characters and not exceed 15 characters");
    }
}

function validatesignup(){
  var name=document.getElementById("name").value;
  var fpassword=document.getElementById("fpassword").value;
  var email=document.getElementById("email").value;
    if(name==""||fpassword==""){
    alert("No blank values allowed!");
   } 
   if(name.length<5){
     alert("**Username length must be atleast 5 characters");
    } 
    if(email.indexOf("@") == -1 || email.length < 6){
      alert("Please Enter valid Email");
    }
  
   if(fpassword.length < 8||fpassword.length> 15){
    alert("**Password length must be atleast 8 characters and not exceed 15 characters");
   }
}


