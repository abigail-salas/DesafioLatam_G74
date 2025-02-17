const express = require("express");
const verificarToken = require("../middlewares/authMiddleware");
const {
  deleteEvento,
  getEventos,
} = require("../controllers/vidaSanaControllers");

const router = express.Router();

// Ruta para obtener todos los eventos

router.get("/eventos", verificarToken, async (req, res) => {
  try {
    const eventos = await getEventos();
    res.json(eventos);
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ message: error.message || "Error al obtener los eventos" });
  }
});

// Ruta para eliminar un evento
router.delete("/eventos/:id", verificarToken, async (req, res) => {
  try {
    const { id } = req.params;
    const email = req.user.email;

    await deleteEvento(id);

    res.send(`El usuario ${email} ha eliminado el evento con ID ${id}`);
  } catch (error) {
    res
      .status(error.code || 500)
      .send({ message: error.message || "Error al eliminar el evento" });
  }
});

module.exports = router;
