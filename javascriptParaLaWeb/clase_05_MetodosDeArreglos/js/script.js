/* --------------- METODOS DE ARREGLOS --------------- */

let num = [1, 2, 3, 4, 5, 6, 7, 8];

/* AGREGAR ELEMENTOS */

//METODO array.push(parametro) ==> AGREGA UN ELEMENTO AL FINAL DEL ARRAY
num.push("metodo push");
// queda en ---> [1, 2, 3, 4, 5, 6, 7, 8, 'metodo push']

//METODO array.unshift(parametro) ==> AGREGA UN ELEMENTO AL INICIO DEL ARRAY
num.unshift("metodo unshift");
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5, 6, 7, 8, 'metodo push']

/* ELIMINAR ELEMENTOS */

//METODO array.pop() ==> ELIMINA UN ELEMENTO AL FINAL DEL ARRAY
let eliminadoPop = num.pop();
// queda en ---> ['metodo unshift', 1, 2, 3, 4, 5, 6, 7, 8]
eliminadoPop; // devuelve ---> 'metodo push'

//METODO array.shift() ==> ELIMINA EL PRIMER ELEMENTO DEL ARRAY
let eliminadoShift = num.shift();
// queda en ---> [1, 2, 3, 4, 5, 6, 7, 8]
eliminadoShift; // devuelve ---> 'metodo unshift'

//METODO array.splice(posicion, cantidadDeElemntosABorrar) ==> ELIMINA DIFERENTES ELEMENTOS DEL ARRAY
let eliminadosSplice = num.splice(2, 3);
// queda en ---> [1, 2, 6, 7, 8]
eliminadosSplice; // devuelve ---> [3, 4, 5]

/* BUSCAR SU POSICION */

//METODO array.findIndex(function)  ===> VERIFICA LA POSICION DEL ELEMENTO DEL ARRAY MEDIANTE UNA FUNCION Y NOS DEVUELVE SU INDICE
// SI NO ENCUENTRA COINCIDENCIAS DEVUELVE -1
let indexFind = num.findIndex((e) => e === 8);
indexFind; // devuelve ---> 4

//METODO array.indexOf(parametro) ===> VERIFICA LA POSICION DEL ELEMENTO DEL ARRAY Y NOS DEVUELVE SU INDICE
let ofIndex = num.indexOf(6);
ofIndex; // devuelve ---> 2

/* --------------- DOM + METODOS --------------- */

const listaDeInvitados = document.querySelector("#invitados");
const invitadosInput = document.querySelector("#nuevo-invitado");
const btnInvitado = document.querySelector("#agregar-invitado");

const invitados = [];

btnInvitado.addEventListener("click", () => {
  const nuevoInvitado = invitadosInput.value;

  invitados.push(nuevoInvitado);

  invitadosInput.value = "";

  let html = "";

  for (const element of invitados) {
    html += `<li>${element}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});

/* ARREGLO DE OBJETOS */

const listaDeItems = document.querySelector("#items");
const itemsInput = document.querySelector("#nuevo-item");
const btnItems = document.querySelector("#agregar-item");

const items = [
  { id: 100, nombre: "Jhonny Deep" },
  { id: 200, nombre: "Brad Pitt" },
  { id: 300, nombre: "Leonardo DiCaprio" },
  { id: 400, nombre: "Morgan Freeman" },
];

btnItems.addEventListener("click", () => {
  const nuevoId = items[items.length - 1].id + 100;

  const nuevoItem = { id: nuevoId, nombre: itemsInput.value };

  items.push(nuevoItem);

  itemsInput.value = "";

  render();
});

function render() {
  let html = "";

  for (const element of items) {
    console.log(element, "<--- element");
    html += `<li>${element.nombre} ID:${element.id}
    <button onclick="borrar(${element.id})">X</button>
      </li>`;
  }

  listaDeItems.innerHTML = html;
}

function borrar(id) {
  const index = items.findIndex((e) => e.id === id);

  items.splice(index, 1);

  render();
}
