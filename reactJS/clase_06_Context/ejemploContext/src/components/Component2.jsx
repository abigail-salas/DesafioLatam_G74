import React, { useContext } from "react";
import { InfoContext } from "../context/InfoMFContext";
import BotonCambio from "./BotonCambio";

function Component2() {
  const { info } = useContext(InfoContext);
  return (
    <div>
      <h2>Component2</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nesciunt
        dolorem veniam repellendus illo, ratione perspiciatis tempore commodi
        ullam voluptas!
      </p>

      <hr />

      <p>{info.join(", ")}</p>

      <BotonCambio />
    </div>
  );
}

export default Component2;
