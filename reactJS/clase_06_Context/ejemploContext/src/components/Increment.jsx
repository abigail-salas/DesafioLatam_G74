import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Increment() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h4>Increment {counter}</h4>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
}

export default Increment;
