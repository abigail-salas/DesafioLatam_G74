import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import Registro from "./views/Registro";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div style={{ backgroundColor: "#3C3C3B", color: "white" }}>
      <Navigation />
      <h1> React Router DOM</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
