const express = require("express");
const {
  obtenerTodosLosViajes,
  modificarPresupuesto,
  eliminarViaje,
  crearViaje,
} = require("../controllers/viajesControlles");

const router = express.Router();

router.get("/viajes", obtenerTodosLosViajes);

router.put("/viajes/:id", modificarPresupuesto);

router.delete("/viajes/:id", eliminarViaje);

router.post("/viajes", crearViaje);

module.exports = router;
