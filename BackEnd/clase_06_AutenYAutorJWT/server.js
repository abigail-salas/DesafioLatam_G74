const express = require("express");
const authR = require("./routes/authRoutes");
const vidaSanaR = require("./routes/vidaSanaRoutes");

const app = express();

const port = 3000;

app.use(express.json());

app.use(authR);

app.use(vidaSanaR);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
