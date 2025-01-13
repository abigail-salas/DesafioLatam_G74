const fs = require("fs");
const { saludo, despedida } = require("./funciones");

const tareas = `
1. Ir a pasear al perro
2. Comprar el pan
3. Hacer la comida
4. Llamar a mi madre
`;

fs.writeFileSync("tareas.txt", tareas);

const arrayTareas = [
  { text: "Ir a pasear al perro" },
  { text: "Comprar el pan" },
  { text: "Hacer la comida" },
  { text: "Llamar a mi madre" },
  { text: "Llamar a mi padre" },
];

fs.writeFileSync("arrayTareas.json", JSON.stringify(arrayTareas));

console.log(fs.readFileSync("arrayTareas.json", "utf8"));

saludo("Teresa");

despedida();
