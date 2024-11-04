import React from "react";
import { useParams } from "react-router-dom";

function Personajes() {
  const { id } = useParams();

  return (
    <div>
      <h3>Personajes {id}</h3>
    </div>
  );
}

export default Personajes;
