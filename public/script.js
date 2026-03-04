const label = document.getElementById("counterValue");
const button = document.getElementById("buttonCounter");

// función para poner counter con num actual
async function cargarCounter() {
    const response = await fetch("/getcounter"); //llamar servidor
    const data = await response.json(); // obtener respuesta (valor actual)
    label.textContent = data.value; //poner en etiqueta
}

// función para aumentar cickeando botón
button.addEventListener("click", async()=>{
    const response = await fetch("/increment", { method: "POST" }); //hacer post con metodo
    const data = await response.json(); //obtener respuesta del newValue de json
    label.textContent = data.newVal; // poner en etiqueta
});

cargarCounter();