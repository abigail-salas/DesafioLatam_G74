import React, { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

function Decrement() {
  const { counter, setCounter } = useContext(CounterContext);

  return (
    <div>
      <h4>Decrement {counter}</h4>
      <button onClick={() => setCounter(counter - 1)}>-</button>
    </div>
  );
}

export default Decrement;
