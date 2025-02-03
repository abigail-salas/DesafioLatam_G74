const pool = require("../config/config");

const obtenerViajes = async () => {
  const consulta = "SELECT * FROM viajes";
  const result = await pool.query(consulta);
  // console.log(result.rows);

  return result.rows;
};

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";
  const values = [destino, presupuesto];

  const result = await pool.query(consulta, values);

  console.log("Viaje agregado", result.rowCount);
};

const actualizarPresupuesto = async (presupuesto, id) => {
  const consulta = "UPDATE viajes SET presupuesto = $1 WHERE id = $2";
  const values = [presupuesto, id];

  await pool.query(consulta, values);
};

const borrarViajes = async (id) => {
  const consulta = "DELETE FROM viajes WHERE id = $1";
  const values = [id];

  await pool.query(consulta, values);
};

module.exports = {
  obtenerViajes,
  agregarViaje,
  actualizarPresupuesto,
  borrarViajes,
};
