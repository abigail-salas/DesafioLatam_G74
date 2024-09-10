import React from "react";

function Propiedades({ title, price, prueba }) {
  let estilos = { backgroundColor: "#C4B9A5", color: "#725A2C" };

  /* Ejmplo de destructure */
  /*   let usuario = { id: 2, nombre: "Javier", pais: "Chile" };
  console.log(usuario.nombre, "<---- OBJETO NORMAL");

  let { id, pais } = usuario;
  console.log(id, "<--- APLICANDO DESTRUCTURE");
  console.log(pais, "<--- APLICANDO DESTRUCTURE"); */

  /* return (
    <div>
      <h1>Titulo: {props.title}</h1>
      <h3>Precio: {props.price}</h3>
    </div>
  ); */

  return (
    <div style={estilos}>
      <h1>Titulo: {title}</h1>
      <h3>Precio: {price}</h3>
      <p>Mostrando cualquier dato {prueba}</p>
    </div>
  );
}

export default Propiedades;
