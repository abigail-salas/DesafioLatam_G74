// 2+3
// 5
// 3*5
// 15
// 3+5
// 8
// 3*4+8-2
// 18
// 5*(5+6)
// 55

/* -------------- VALORES PRIMITIVOS -------------- */

/* Números */
(3 + 2) * 3 + 1; // ----> devuelve 16;
3 + 2 * 3 + 1; // ----> devuelve 10;

/* String */
("Hola, cómo estás?");
("234");

/* Boolean */
true;
false;

/* Funcion para saber el tipo de dato ingresado. SIEMPRE LO DEVUELVE COMO UN STRING */
typeof 234; // ----> devuelve 'number'
typeof "hola"; // ----> devuelve 'string'
typeof false; // ----> devuelve 'boolean'
typeof "false"; // ----> devuelve 'string'

/* -------------- MENSAJE DE CONSOLA -------------- */
// console.log("Probando un mensaje");

/* -------------- ALERTAS -------------- */
// alert("Soy una alerta");
// confirm("Acepta los terminos y condiciones");
// prompt("Decime como te llamas");

/* -------------- VARIABLES -------------- */
let numero = 123;
// console.log(numero);

let nombre = "Juan"; // Declarando la variable
// console.log(nombre, "<---- nombre con el primer valor");

nombre = "Alberto"; // Modificando el valor de la variable
// console.log(nombre, "<---- nombre con el segundo valor");

/* -------------- CONCATENACION -------------- */
// let nombreCompleto = prompt("Decime tu nombre completo");
// alert("Hola " + nombreCompleto);

/* El prompt SIEMPRE DEVUELVE UN TIPO DE DATO STRING */

/* Ejemplo que concatena los numeros ↓↓↓↓ */
// let primerNum = prompt("Decime un numero positivo");
// let segNum = prompt("Decime otro numero positivo");
// let resultado = primerNum + segNum;
// alert("La suma de tus numero es " + resultado);

/* Transformamos el tipo de dato (prompt) para que quede una suma matematica en vez de una concatenacion */
// let primerNum = Number(prompt("Decime un numero positivo"));
// let segNum = Number(prompt("Decime otro numero positivo"));
// let resultado = primerNum + segNum;
// alert("La suma de tus numero es " + resultado);

/* Otra forma de tener el mismo resultado ↓↓↓↓ */
// let primerNum = prompt("Decime un numero positivo");
// let segNum = prompt("Decime otro numero positivo");
// let resultado = Number(primerNum) + Number(segNum);
// alert("La suma de tus numero es " + resultado);

/* -------------- TEMPLATE LITERAL -------------- */

let edad = 23;
let apellido = "Cortez";
let primerNombre = "Javier";

/* concatenacion ↓↓↓↓ */
// console.log(
//   "Hola, mi nombre es " +
//     primerNombre +
//     " y mi apellido es " +
//     apellido +
//     ". Tengo " +
//     edad +
//     " años de edad."
// );

/* template literal ↓↓↓↓ */
// console.log(
//   `Hola, mi nombre es ${primerNombre} y mi apellido es ${apellido}. Tengo ${edad} años de edad`
// );

/* -------------- DOM (Document Object Model) -------------- */

let elemento = document.querySelector("p");
console.log(elemento);

let menu = document.querySelector(".navbar");
let cardSection = document.querySelector("#card-section");
let footer = document.querySelector("footer");

/* -------------- MANIPULAR EL DOM -------------- */

/* Cambiar o agregar texto */
// menu.innerHTML = "Modificando el menú desde javascript";
// cardSection.innerHTML = "<p>soy un parrafo</p>";

/* Cambiar o agregar ESTILOS */
// elemento.style.backgroundColor = "red";
// menu.style.color = "#03563f";
// cardSection.style.fontFamily = "Fantasy";
// footer.style.fontSize = "40px";

/* -------------- ARROW FUNCTION -------------- */

const cambiarTexto = () => {
  menu.innerHTML = "Modificando el menú desde javascript";
  cardSection.innerHTML = "<p>soy un parrafo</p>";
};

const cambiarEstilos = () => {
  elemento.style.backgroundColor = "red";
  menu.style.color = "#03563f";
  cardSection.style.fontFamily = "Fantasy";
  footer.style.fontSize = "40px";
};

const darkMode = () => {
  let body = document.querySelector("body");
  body.style.backgroundColor = "black";
  body.style.color = "white";
};

const suma = () => {
  let numero = document.querySelector("#numerito");

  //   console.log(numero.innerHTML, "<---- contenido del tag p");

  let contenido = Number(numero.innerHTML);

  //   console.log(typeof contenido, "<--- tipo de dato");

  contenido = contenido + 1;

  //   console.log(contenido, "<--- soy la suma");

  numero.innerHTML = contenido;
};
