import React from "react";
import Titulo from "./components/Titulo";
import Propiedades from "./components/Propiedades";

function App() {
  return (
    <>
      <h1>HOLA REACT</h1>

      <Titulo />

      <Propiedades title="Mouse" price="$4500" prueba="Desafio" />
      <Propiedades title="Gabinete" price="$10000" prueba="Latam" />
      <Propiedades title="Monitor" price="$8500" prueba="2024" />
    </>
  );
}

export default App;
