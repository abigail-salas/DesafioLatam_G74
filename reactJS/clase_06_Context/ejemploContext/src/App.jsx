import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";

import CounterProvider from "./context/CounterContext";
import InfoProvider from "./context/InfoMFContext";

function App() {
  return (
    <>
      <h1>Utilizando Context</h1>

      <CounterProvider>
        <Increment />
        <Decrement />
      </CounterProvider>

      <InfoProvider>
        <Component1 />
        <Component2 />
      </InfoProvider>
    </>
  );
}

export default App;
