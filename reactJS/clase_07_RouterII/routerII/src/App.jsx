import Navigation from "./components/Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Personajes from "./views/Personajes";
import Admin from "./views/Admin";
import Login from "./views/Login";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <div className="app">
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="/personajes/:id" element={<Personajes />} />

        <Route
          path="/admin"
          element={user ? <Admin /> : <Navigate to="/login" />}
        />

        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
