const {
  obtenerViajes,
  agregarViaje,
  actualizarPresupuesto,
  borrarViajes,
} = require("../queries/viajesQueries");

const obtenerTodosLosViajes = async (req, res) => {
  try {
    const viajes = await obtenerViajes();
    res.json(viajes);
  } catch (error) {
    res
      .status(500)
      .send(`Error al obtener los viajes. Error: ${error.message}`);
  }
};

const crearViaje = async (req, res) => {
  try {
    const { destino, presupuesto } = req.body;

    await agregarViaje(destino, presupuesto);
    res.send("Viaje creado");
  } catch (error) {
    res.status(500).send(`Error al crear los viajes. Error: ${error.message}`);
  }
};

const modificarPresupuesto = async (req, res) => {
  try {
    const { id } = req.params;
    const { presupuesto } = req.query;

    await actualizarPresupuesto(presupuesto, id);
    res.send("Presupuesto actualizado");
  } catch (error) {
    res
      .status(500)
      .send(`Error al actualizar los presupuestos. Error: ${error.message}`);
  }
};

const eliminarViaje = async (req, res) => {
  try {
    const { id } = req.params;
    await borrarViajes(id);

    res.send("Viaje eliminado");
  } catch (error) {
    res.status(500).send(`Error al eliminar el viaje. Error: ${error.message}`);
  }
};

module.exports = {
  obtenerTodosLosViajes,
  crearViaje,
  modificarPresupuesto,
  eliminarViaje,
};
