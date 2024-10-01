import React, { useState } from "react";

function Tareas() {
  const colores = ["red", "green", "blue", "violet", "yellow"];
  let mapeoColores = colores.map((c) => (
    <li key={c} style={{ color: c }}>
      {c}
    </li>
  ));

  /* Ejemplo Spread Operator */
  /* let a = [1, 2, 3, 4, 5];
  a.push("a", "e", "i");
  console.log(a, "<--- Arreglo original modificado");

  //let b = [...a, "o", "u"];
  let b = [...a];
  b.push("o", "u");
  console.log(a, "<---- Arreglo ORIGINAL");
  console.log(b, "COPIA del arreglo"); */

  const arrayTareas = ["Estudiar", "Pasear", "Limpiar"];
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(arrayTareas);

  /* -------- Funcion para enviar el formulario -------- */

  function hadleSubmit(e) {
    e.preventDefault();

    /* Agregar Tarea */
    setListaTareas([...listaTareas, nombreTarea]);

    /* Vaciar el formulario */
    setNombreTarea("");
  }

  /* -------- Funcion para renderizar el input -------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* -------- Funcion mapeo de items -------- */

  const mapeoTareas = listaTareas.map((t) => <li key={t}>{t}</li>);

  return (
    <div>
      <ol>{mapeoColores}</ol>

      <form onSubmit={hadleSubmit}>
        <input type="text" onChange={mostrarInput} value={nombreTarea} />
        <button>Agregar Tarea</button>
      </form>

      <ul>{mapeoTareas}</ul>
    </div>
  );
}

export default Tareas;
