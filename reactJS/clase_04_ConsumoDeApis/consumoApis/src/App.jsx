import ConsumoApis from "./components/ConsumoApis";
import EjemploUseEffect from "./components/EjemploUseEffect";
import EjemploUseRef from "./components/EjemploUseRef";

function App() {
  return (
    <>
      <h1>Utilizando UseEffect</h1>
      <EjemploUseEffect />

      <h1>Consumo de APIS</h1>
      <ConsumoApis />

      <h1>Utilizando UseRef</h1>
      <EjemploUseRef />
    </>
  );
}

export default App;
