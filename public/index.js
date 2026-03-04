//const buttonSubmit = document.getElementById("botonLogin");
const form = document.getElementById("loginForm");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

//buttonSubmit.addEventListener("click",evento);
form.addEventListener("submit", verificarDatosCuenta);

// clase usuarios
class User {
    constructor(userEmail, userPassword){
        this.userEmail = userEmail;
        this.userPassword = userPassword;
    }
}

let arrUsers = [];
arrUsers.push(new User("a@gmail.com", "aaa"))

function verificarDatosCuenta(e){
    console.log("El código JS cargó correctamente :)");

    if(email.value == "" || password.value == ""){
        e.preventDefault();
        alert("Debes completar todos los campos");
        return;
    }

    let encontrado = false;
    for(let i = 0; i < arrUsers.length; i++){
        if(email.value == arrUsers[i]["userEmail"]){
            if(password.value != arrUsers[i]["userPassword"]){
                e.preventDefault();
                alert("Contraseña incorrecta");
                return;
            }
            encontrado = true;
            break;
        }
    }

    if(!encontrado){
        e.preventDefault();
        alert("Usuario no encontrado");
    }
}