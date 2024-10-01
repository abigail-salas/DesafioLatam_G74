import React, { useState } from "react";
import { tareasConObjetos } from "../utils/TareasIniciales";

function TareasConObjetos() {
  const [nombreTarea, setNombreTarea] = useState("");
  const [listaTareas, setListaTareas] = useState(tareasConObjetos);
  const [idTareas, setIdTareas] = useState(
    tareasConObjetos[tareasConObjetos.length - 1].id
  );

  /* -------- Funcion para enviar el formulario -------- */

  function handleSubmit(e) {
    e.preventDefault();

    /* Generar un nuevo id */

    const nuevoId = idTareas + 1;

    /* Agregar Tarea */
    setListaTareas([
      ...listaTareas,
      {
        id: nuevoId,
        nombre: nombreTarea,
        completada: false,
      },
    ]);

    /* Actualizar el id */
    setIdTareas(nuevoId);

    /* Vaciar el formulario */
    setNombreTarea("");
  }

  /* -------- Funcion para renderizar el input -------- */

  function mostrarInput(e) {
    setNombreTarea(e.target.value);
  }

  /* -------- Funcion para completar la tarea -------- */

  function completar(comun) {
    const nuevasTareas = [...listaTareas];

    /* Buscar una coincidencia única */

    let encontrado = nuevasTareas.findIndex((obj) => obj.id === comun.id);

    nuevasTareas[encontrado].completada = true;

    setListaTareas(nuevasTareas);
  }

  /* -------- Funcion para elimiar una tarea -------- */

  function eliminar(comun) {
    /* filtrar el arreglo de tareas para excluir la tarea con el ID dado */
    const nuevasTareas = listaTareas.filter((obj) => obj.id !== comun.id);

    /* Actualizamos el setter */
    setListaTareas(nuevasTareas);
  }

  /* -------- Funcion mapeo de items -------- */

  const mapeoTareas = listaTareas.map((t) => (
    <li
      key={t.id}
      style={t.completada === true ? { textDecoration: "line-through" } : {}}
    >
      {t.nombre}
      {t.completada === false ? (
        <button onClick={() => completar(t)}>Completar</button>
      ) : (
        ""
      )}

      <button onClick={() => eliminar(t)}>Borrar</button>
    </li>
  ));

  console.log(listaTareas, "<--- TAREAS");

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={mostrarInput} value={nombreTarea} />
        <button>Agregar Tarea</button>
      </form>

      <ul>{mapeoTareas}</ul>
    </div>
  );
}

export default TareasConObjetos;
