import React, { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div>
      <button
        className="contador-btn"
        onClick={() => setCuenta((cuenta) => (cuenta += 2))}
      >
        Cuenta: {cuenta}
      </button>
    </div>
  );
}

export default Contador;
