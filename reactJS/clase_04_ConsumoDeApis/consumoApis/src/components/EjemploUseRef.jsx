import React, { useRef } from "react";

function EjemploUseRef() {
  const dropRef = useRef(null);

  const openDrop = () => {
    dropRef.current.style.display = "block";
  };

  const closeDrop = () => {
    dropRef.current.style.display = "none";
  };

  return (
    <div>
      <button onClick={openDrop}>Abrir Dropdown</button>
      <button onClick={closeDrop}>Cerrar Dropdown</button>

      <div ref={dropRef}>Soy el contenido del Dropdown</div>
    </div>
  );
}

export default EjemploUseRef;
