const pool = require("../config/db");

const getEventos = async () => {
  const { rows: eventos } = await pool.query("SELECT * FROM eventos");
  return eventos;
};

const deleteEvento = async (id) => {
  const consulta = "DELETE FROM eventos WHERE id = $1";
  const values = [id];
  const { rowCount } = await pool.query(consulta, values);
  if (!rowCount)
    throw { code: 404, message: "No se encontró ningún evento con este ID" };
};

module.exports = { getEventos, deleteEvento };
