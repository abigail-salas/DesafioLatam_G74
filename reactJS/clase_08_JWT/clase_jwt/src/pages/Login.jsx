import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();

        //Aqui se guarda el token
        localStorage.setItem("token", data.token);

        alert("Inicio de sesion exitoso");
        console.log("Inicio de sesion exitoso");
      } else {
        alert("Error al iniciar sesion");
        console.log("Error al iniciar sesion");
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        placeholder="Email"
      />

      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        placeholder="Password"
      />

      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
