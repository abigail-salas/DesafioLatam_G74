/* ------------ DIFERENCIA ENTRE LAS VARIABLES Y SU ALCANCE ------------ */

/* VAR */
//Se puede repetir su declaracion
var prueba = "aquí se declara";
console.log(prueba);

var prueba = "aqui tambien se declara y esto puede romper todo";
console.log(prueba);

/* LET */
//Se declara una sola vez y después puede CAMBIAR SU VALOR pero NO SE PUEDE VOLVER A DECLARAR

let intento = "aca declaro let";
console.log(intento);

//let intento = "otro" // ----> tira un error

intento = "cambio su valor";
console.log(intento);

/* CONST */
//son valores constantes, valores fijos que no pueden cambiar su valor

const fijo = "este valor no se puede cambiar";

console.log(fijo);

//fijo = "hola"; ----> devuelve un error

/* SU ALCANCE */

let variableGlobal = "existo en todas partes";

if (true) {
  let dentroDelBloque = "Solo existo dentro del bloque";
  console.log(dentroDelBloque, "<--- variable LOCAL dentro del bloque");

  // Se puede llamar variables globales en diferentes entornos o bloque de codigo
  console.log(variableGlobal, "<--- variable global DENTRO DEL BLOQUE");
}

console.log(variableGlobal, "<--- variable global FUERA DEL BLOQUE");

// Las variables locales no existen fuera de su entorno o bloque de codigo
// console.log(dentroDelBloque, "<--- variable LOCAL FUERA del bloque");

/* ------------ FUNCIONES ------------ */
//Es una maquina perfecta donde uno le va a dar instrucciones y la misma se va a repetir cada vez que uno la llame/ejecute

function pintarRojo() {
  let elemento = document.querySelector("body");
  elemento.style.background = "rgb(53, 6, 6)";
}

const tamanioTitulo = () => {
  let elemento = document.querySelector("h1");
  elemento.style.fontSize = "60px";
};

function pintarLetras() {
  let elemento = document.querySelector("#parrafo");
  elemento.style.color = "rgb(16, 171, 158)";
}

/* Utilizando parametros */

function pintarFondoTitulo(color) {
  let elemento = document.querySelector("h1");
  elemento.style.backgroundColor = color;
}

/* Utilizando más de un parametro */

function pintarFondo(color, tag) {
  let elemento = document.querySelector(tag);
  elemento.style.backgroundColor = color;
}

/* Orden de los parametros */

function presentacion(nombreCompleto, edad, ciudad, vocacion) {
  console.log(
    `Hola! Soy ${nombreCompleto}, tengo ${edad} años de edad. Me dedico a ${vocacion} en la ciudad de ${ciudad}`
  );
}

presentacion(25, "Santiago", "pintar", "Paula Garcia"); // devuelve ====> Hola! Soy 25, tengo Santiago años de edad. Me dedico a Paula Garcia en la ciudad de pintar

presentacion("Paula Garcia", 25, "Santiago", "pintar"); // devuelve ====> Hola! Soy Paula Garcia, tengo 25 años de edad. Me dedico a pintar en la ciudad de Santiago

/* valores por defecto */

function saludo(maniana, tarde = "BUENAS TARDES", noche = "BUENAS NOCHES") {
  console.log(`El saludo a la mañana es: ${maniana}`);
  console.log(`El saludo a la tarde es: ${tarde}`);
  console.log(`El saludo a la noche es: ${noche}`);
}

/* RETORNO DE FUNCIONES */

function suma(a, b) {
  // console.log(a + b);
  return a + b;
}

suma(10, 10);

console.log(`Soy la funcion suma y devuelvo ${suma(100, 10)}`);

/* return con ARROW FUNCTION */

/* const resta = (a, b) => {
  return a - b;
}; 

console.log(`Soy la funcion resta y devuelvo ${resta(100, 10)}`);*/

// Siempre y cuando el código esté EN LA MISMA LINEA, tanto las llaves como el return están implicitos en la funcion

const resta = (a, b) => a - b;

console.log(`Soy la funcion resta y devuelvo ${resta(100, 30)}`);
