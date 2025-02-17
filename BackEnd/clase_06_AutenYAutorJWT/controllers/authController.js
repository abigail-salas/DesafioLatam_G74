const pool = require("../config/db");
const jwt = require("jsonwebtoken");

const verificarCredenciales = async (email, password) => {
  const consulta = "SELECT * FROM usuarios WHERE email = $1 AND password = $2";

  const values = [email, password];

  const { rowCount } = await pool.query(consulta, values);

  if (!rowCount) throw { code: 404, message: "Credenciales incorrectos" };
};

const generarToken = (email) => {
  return jwt.sign({ email }, "clave_secreta");
};

module.exports = { verificarCredenciales, generarToken };
