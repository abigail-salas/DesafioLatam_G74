const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  user: "",
  password: "1234",
  database: "plan_de_viajes",
  allowExitOnIdle: true,
});

const obtenerViajes = async () => {
  const result = await pool.query("SELECT * FROM viajes");
  // console.log(result.rows);

  return result.rows;
};

obtenerViajes();

const agregarViaje = async (destino, presupuesto) => {
  const consulta = "INSERT INTO viajes (destino, presupuesto) VALUES ($1, $2)";
  const values = [destino, presupuesto];

  const result = await pool.query(consulta, values);

  console.log("Viaje agregado", result.rowCount);
};

// agregarViaje("Chile", 123456);

module.exports = { obtenerViajes, agregarViaje };
