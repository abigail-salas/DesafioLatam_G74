const express = require("express");
const viajesRoutes = require("./routes/viajesRoutes");

const app = express();
const port = 3000;

app.use(express.json());

app.use(viajesRoutes);

app.listen(port, () => {
  console.log(`Server levantado en el puerto ${port}`);
});
