/* ------- CONDICIONALES ------- */

/* let edad = Number(prompt("Decime tu edad"));

if (edad <= 17) {
  alert("No podés entrar a esta página");
} */

/* --------- OPERADORES DE ASIGNACION --------- */
let x = 24;
x = 25;

/* --------- OPERADORES DE COMPARACION --------- */
/* DE IGUALDAD SIMPLE */ // ------> SOLO compara el VALOR ingresado
12 == 12; // devuelve ---> true
"17" == 17; // devuelve ---> true
"hola" == "Hola"; // devuelve ---> false
"hola" == "hola"; // devuelve ---> true

/* DE IGUALDAD ESTRICTA */ // ------> compara el VALOR ingresado y EL TIPO DE DATO
12 === 12; // devuelve ---> true
"17" === 17; // devuelve ---> false
"hola" === "Hola"; // devuelve ---> false

/* DE DESIGUALDAD SIMPLE */
45 != 45; // devuelve ---> false
"HOLA" != "hola"; // devuelve ---> true
"45" != 45; // devuelve ---> false

/* DE DESIGUALDAD ESTRICTA */
45 !== "45"; // devuelve ---> true
"HOLA" !== "hola"; // devuelve ---> true
45 !== 45; // devuelve ---> false

/* --------- IF / ELSE --------- */

// let pedazosDeTorta = Number(prompt("Cuántas porciones de torta hay?"));
// let invitados = Number(prompt("Cuántos invitados hay?"));
// let cantidadDePorcionesPorInvitado = pedazosDeTorta / invitados;

// console.log(cantidadDePorcionesPorInvitado, "<--- cantidad");

// if (cantidadDePorcionesPorInvitado >= 1) {
//   alert(
//     `Hay suficiente porciones para cada invitado. A cada uno le corresponde ${cantidadDePorcionesPorInvitado} porciones`
//   );
// } else {
//   alert("Faltan porciones de torta para todos los invitados");
// }

/* --------- IF / ELSE IF / ELSE --------- */

// let color = prompt("Decime un color");

// if (color == "rojo") {
//   alert("Los errores de consola estan en rojo");
// } else if (color == "amarillo") {
//   alert("Las advertencias salen en amarillo");
// } else if (color == "verde") {
//   alert("Todo OK si salen mensajes en verde");
// } else {
//   alert("Tu color no corresponde a ningun tipo de mensaje de consola");
// }

// alert("sali del condicional");

/* if (true) {
  alert("Los errores de consola estan en rojo");
}

if (true) {
  alert("Las advertencias salen en amarillo");
}

if (true) {
  alert("Todo OK si salen mensajes en verde");
} else {
  alert("Tu color no corresponde a ningun tipo de mensaje de consola");
} */

/* --------- CONDICIONALES + DOM --------- */

const handleSecret = () => {
  let entrada = document.querySelector("#input-secret").value;
  let parrafo = document.querySelector("#secret-result");

  let contraseña = "Desafio Latam";

  if (entrada == contraseña) {
    parrafo.innerHTML = "Lograste descubrir la contraseña";
  } else {
    parrafo.innerHTML = `"${entrada}" no es la contraseña correcta`;
  }
};

/* --------- EJERCICIOS --------s- */

/* let grados = prompt("Cuántos grados hace en tu ciudad?");

if (grados > 30) {
  console.log("Uff que calor hace!!");
} */
