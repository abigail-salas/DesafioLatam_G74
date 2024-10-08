import React, { useEffect, useState } from "react";

function EjemploUseEffect() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState("");

  //Ciclo de vida:
  /*  * Montaje
   * Actualizacion
   * Desmontaje */

  useEffect(() => {
    // document.title = `Clickeaste ${contador} veces seguidas`;
    // console.log(contador, "<--- contador dentro de useEffect");
    // console.log(nombre, "<--- nombre dentro de useEffect");
  }, [nombre]);

  /* Sintaxis:
    useEffect(callback, dependencia)

    * Si al hook no le mando ninguna dependencia, el mismo se ejecutara en cualquier tipo de interaccion que tenga el usuario con la pagina

    * Si le mando una dependencia vacia ([]) solo se ejecutara al inicio y nada más

    * Si le mando 1 o más dependencias ([contador] o [contador, nombre]) el hook se ejecutara cada vez que el usuario interactue con ese estado en especifico
    */

  return (
    <div>
      <p>Clickeaste {contador} veces</p>

      <button onClick={() => setContador(contador + 1)}>Contador</button>

      <input
        type="text"
        name={nombre}
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <button>otro</button>
    </div>
  );
}

export default EjemploUseEffect;
