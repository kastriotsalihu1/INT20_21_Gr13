
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
   var username=document.getElementById("username").value;
     if(username==""||fpassword==""){
     alert("No blank values allowed!");
    } 
    if(username.length<5){
      alert("**Username length must be atleast 5 characters");
     } 
   var password=document.getElementById("fpassword").value;
    if(password.length < 8||password.length> 15){
     alert("**Password length must be atleast 8 characters and not exceed 15 characters");
    }
}

