function validate() {

var username = document.getElementById ("username").nodeValue
var password = document.getElementById ("password").nodeValue

if (username == 'usradmin' & password == 'pwdadmin')
{
    alert("Hello! I am an alert box!!");
}
else
{
    alert("Login Failed")
}
}