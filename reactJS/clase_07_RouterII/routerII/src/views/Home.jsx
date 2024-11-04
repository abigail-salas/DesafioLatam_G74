import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  const irAlPersonaje = () => {
    navigate(`/personajes/${id}`);
  };

  return (
    <div>
      <h3>Home</h3>

      <input
        type="number"
        value={id}
        onChange={({ target }) => setId(target.value)}
      />

      <button onClick={irAlPersonaje}>Buscar</button>
    </div>
  );
}

export default Home;
