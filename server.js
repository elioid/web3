import express from "express"

const app = express();
app.use(express.static("public"));
app.listen(4080, console.log("http://localhost:4080"));


//QUITAR DESPUÉS
import fs from "fs" //FILE SYSTEM
app.use(express.json());

app.post("/increment", async (req, res) => {
    const data = JSON.parse(await fs.promises.readFile("counter.json", "utf8")); // data = {counter:5}
    data.counter++;
    await fs.promises.writeFile("counter.json", JSON.stringify(data)); //sobreescribir archivo
    res.json({ newVal: data.counter }); // valor para el frontend
});

// leer y obtener valor actual
app.get("/getcounter", async (req, res) => {
    const data = JSON.parse(await fs.promises.readFile("counter.json", "utf8"));
    res.json({ value: data.counter });
});