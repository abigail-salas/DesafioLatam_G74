const express = require("express");
const {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
} = require("../controllers/medicamentosController");

const router = express.Router();

// Ruta para Obtener medicamentos con limites
router.get("/medicamentos", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentos(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error al obtener los medicamentos",
    });
  }
});

// Ruta para Obtener medicamentos ordenados
router.get("/medicamentos/orden", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosOrdenados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error al obtener los medicamentos ordenados",
    });
  }
});

// Ruta para Obtener medicamentos paginados
router.get("/medicamentos/paginacion", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPaginados(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error al obtener los medicamentos paginados",
    });
  }
});

// obtener medicamentos por filtro (stock, precio)
router.get("/medicamentos/filtro", async (req, res) => {
  try {
    const medicamentos = await obtenerMedicamentosPorFiltro(req.query);

    res.json(medicamentos);
  } catch (error) {
    res.status(500).json({
      error: error.message,
      message: "Error al obtener los medicamentos por filtro",
    });
  }
});

module.exports = router;
