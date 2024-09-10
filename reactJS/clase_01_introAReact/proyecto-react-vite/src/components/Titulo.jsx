import React from "react";
import Banner from "./Banner";

const nombre = "Desafio Latam";

function Titulo() {
  return (
    <div>
      <h3>Titulo</h3>
      <Banner />

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, minima.
        Dolores dolore, eaque nihil praesentium dignissimos fuga sapiente beatae
        eligendi iusto aliquid atque optio reiciendis omnis deleniti repellat
        accusamus vero?
      </p>

      {/* Utilizamos una variable dentro de unas etiquetas */}
      <h4>El nombre de la empresa es {nombre}</h4>
    </div>
  );
}

export default Titulo;
