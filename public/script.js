const label = document.getElementById("counterValue");
const button = document.getElementById("buttonCounter");

async function cargarCounter() {
    const response = await fetch("/getcounter");
    const data = await response.json();
    label.textContent = data.value;
}

button.addEventListener("click", async()=>{
    const response = await fetch("/increment", { method: "POST" });
    const data = await response.json();
    label.textContent = data.newVal;
});

cargarCounter();