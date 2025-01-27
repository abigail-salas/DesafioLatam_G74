const express = require("express");
const { obtenerViajes, agregarViaje } = require("./consultas");

const app = express();

app.use(express.json());

app.get("/viajes", async (req, res) => {
  const viajes = await obtenerViajes();
  res.json(viajes);
});

app.post("/viajes", async (req, res) => {
  const { destino, presupuesto } = req.body;

  await agregarViaje(destino, presupuesto);

  res.send("Viaje agregado con exito");
});

app.listen(3000, () => {
  console.log("Servidor levantado en el puerto 3000");
});
