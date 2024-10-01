import Tareas from "./component/Tareas";
import TareasConObjetos from "./component/TareasConObjetos";

function App() {
  return (
    <>
      <h1>Probando Renderizacion</h1>

      <div>
        <h2>Tareas</h2>
        <Tareas />
      </div>

      <div>
        <h2>Tareas Con Objetos</h2>
        <TareasConObjetos />
      </div>
    </>
  );
}

export default App;
