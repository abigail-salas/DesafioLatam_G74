const express = require("express");
const fs = require("fs");

const app = express();

app.listen(3000, console.log("Servidor levantado en el puerto 3000"));

app.get("/", (req, res) => {
  res.send("Primera pantalla");
});

app.get("/home", (req, res) => {
  res.send("Pantalla dentro de HOME");
});

app.get("/fav", (req, res) => {
  res.send("Pantalla de los FAVORITOS");
});

app.get("/productos", (req, res) => {
  const productos = JSON.parse(fs.readFileSync("./productos.json", "utf-8"));

  res.json(productos);
});

app.use(express.json());

app.post("/productos", (req, res) => {
  const nuevoProducto = req.body;

  const productos = JSON.parse(fs.readFileSync("./productos.json", "utf-8"));

  productos.push(nuevoProducto);

  fs.writeFileSync("./productos.json", JSON.stringify(productos));

  res.send("Producto agregado");
});
