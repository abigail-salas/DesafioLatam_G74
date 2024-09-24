import React, { useState } from "react";

function MyImput() {
  const [nombre, setNombre] = useState("");

  return (
    <div className="input-btn">
      <input type="text" onChange={(e) => setNombre(e.target.value)} />

      <h4>Entrada: {nombre} </h4>
    </div>
  );
}

export default MyImput;
