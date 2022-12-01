let user = document.getElementById("user")
let pass = document.getElementById("pass")
let login = document.getElementById("login") 

login.addEventListener("onClick", ()=> validateMail())
    
document.getElementById("message").style.display = "none";

function validateMail(e) {
    e.preventDefault()
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(user.value)){
        alert("Es valida");
       } else {
        document.getElementById("message").innerHTML = ("Usuario no valido")
        document.getElementById("message").style.display = "block";
        //alert("Usuario no valido");
       }
}