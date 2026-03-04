import express from "express"

const app = express();
app.use(express.static("public"));
app.listen(4080, console.log("http://localhost:4080"));


//QUITAR DESPUÉS
import fs from "fs"
app.use(express.json());

app.post("/increment", async (req, res) => {
    const data = JSON.parse(await fs.promises.readFile("counter.json", "utf8"));
    data.counter++;
    await fs.promises.writeFile("counter.json", JSON.stringify(data, null, 2));
    res.json({ newVal: data.counter });
});

app.get("/getcounter", async (req, res) => {
    const data = JSON.parse(await fs.promises.readFile("counter.json", "utf8"));
    res.json({ value: data.counter });
});