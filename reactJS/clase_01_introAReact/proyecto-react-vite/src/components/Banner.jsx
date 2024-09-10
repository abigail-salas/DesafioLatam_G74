import React from "react";

function Banner() {
  /* + Crear una variable con estilos dentro */
  const estilos = { color: "#62afb5", fontSize: "40px" };

  return (
    /* Aplicar css mediante clases. Atributo className ↓↓↓↓ */
    <div className="banner-css">
      {/* Agregar css mediante estilos en linea ↓↓↓↓ */}
      <h3 style={{ fontFamily: "fantasy" }}>Esto es un banner</h3>

      <img
        src="https://images.unsplash.com/photo-1710781944947-7cd4a381499f?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        width="500px"
        height="300px"
      />

      {/* + Agregar css mediante una variable ↓↓↓↓ */}
      <p style={estilos}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
        obcaecati.
      </p>
    </div>
  );
}

export default Banner;
