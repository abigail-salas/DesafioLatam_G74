import React, { useContext } from "react";
import { InfoContext } from "../context/InfoMFContext";

function BotonCambio() {
  const { toggleInfo } = useContext(InfoContext);

  return (
    <div>
      <button onClick={toggleInfo}>Cambio</button>
    </div>
  );
}

export default BotonCambio;
