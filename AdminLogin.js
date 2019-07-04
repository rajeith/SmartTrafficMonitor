
function validate(){
var username = document.getElementById("login-username").value;
var password = document.getElementById("login-password").value;
if ( username == "admin" && password == "admin"){
alert ("Login successfully");
window.location = "Menu.html"; // Redirecting to other page.
return false;
}
else{
alert("Login failed");
}
}
