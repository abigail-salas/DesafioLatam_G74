const format = require("pg-format");
const pool = require("../config/config");

// Obtener medicamentos con limites
const obtenerMedicamentos = async ({ limit = 10 }) => {
  const consulta = "SELECT * FROM medicamentos LIMIT $1";

  const { rows: medicamentos } = await pool.query(consulta, [limit]);

  return medicamentos;
};

// Obtener medicamentos ordenados
const obtenerMedicamentosOrdenados = async ({
  limit = 10,
  order_by = "id_ASC",
}) => {
  const [campo, direccion] = order_by.split("_");

  const query = format(
    "SELECT * FROM medicamentos ORDER BY %s %s LIMIT %s",
    campo,
    direccion,
    limit
  );

  const { rows: medicamentos } = await pool.query(query);

  return medicamentos;
};

// Obtener medicamentos paginados
const obtenerMedicamentosPaginados = async ({ limit = 10, pages = 1 }) => {
  const offset = (pages - 1) * limit; // calcula cuantos registros saltarse para mostrar la pagina correcta

  const consulta = format(
    "SELECT * FROM medicamentos LIMIT %s OFFSET %s",
    limit,
    offset
  );

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

// obtener medicamentos por filtro (stock, precio)
const obtenerMedicamentosPorFiltro = async ({ precio_max, stock_min }) => {
  let filtros = [];

  if (precio_max) filtros.push(`precio <= ${precio_max}`);

  if (stock_min) filtros.push(`stock >= ${stock_min}`);

  let consulta = "SELECT * FROM medicamentos";

  if (filtros.length > 0) {
    consulta += ` WHERE ${filtros.join(" AND ")}`;
  }

  const { rows: medicamentos } = await pool.query(consulta);

  return medicamentos;
};

module.exports = {
  obtenerMedicamentos,
  obtenerMedicamentosOrdenados,
  obtenerMedicamentosPaginados,
  obtenerMedicamentosPorFiltro,
};
