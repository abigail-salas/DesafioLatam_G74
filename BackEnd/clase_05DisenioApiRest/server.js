const express = require("express");
const medicamentosRoutes = require("./routes/medicamentosRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use(medicamentosRoutes);

app.listen(port, () => {
  console.log(`Server levantado en el puerto ${port}`);
});
