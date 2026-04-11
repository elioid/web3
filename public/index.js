//const buttonSubmit = document.getElementById("botonLogin");
const form = document.getElementById("loginForm");
const email = document.getElementById("userEmail");
const password = document.getElementById("userPassword");

//buttonSubmit.addEventListener("click",evento);
form.addEventListener("submit", verificarDatosCuenta);

async function verificarDatosCuenta(e){
    e.preventDefault();

    if (!email.value || !password.value) {
        alert("Por favor ingresa correo y contraseña");
        return;
    }

    try{
        const response = await fetch('/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email: email.value, password: password.value})
        });
        
        const data = await response.json();

        if(data.isLogin === true){
            alert(`¡Inicio de sesión exitoso! Bienvenido.`);
            window.location.href = "/home.html";
        } else{
            alert("Correo o contraseña incorrectos");
        }
    } catch(error){ alert("Error de conexión con el servidor. Inténtalo más tarde."); }
}
