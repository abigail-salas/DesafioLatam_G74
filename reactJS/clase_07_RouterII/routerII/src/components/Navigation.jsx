import React from "react";

import { NavLink } from "react-router-dom";

function Navigation() {
  const activeClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div>
      <NavLink className={activeClass} to={"/"}>
        Home
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/personajes"}>
        Personajes
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/admin"}>
        admin
      </NavLink>
      {" - "}
      <NavLink className={activeClass} to={"/login"}>
        login
      </NavLink>
    </div>
  );
}

export default Navigation;
