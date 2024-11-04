import React, { useEffect, useState } from "react";

function Profile() {
  const [user, setUser] = useState();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem("token");

      if (token) {
        try {
          const response = await fetch("http://localhost:5000/api/auth/me", {
            method: "GET",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();

            setUser(data.user);

            alert("Autorizado");
            console.log("Autorizado");
          } else {
            alert("No Autorizado");
            console.log("No Autorizado");
          }
        } catch (error) {
          console.error("Error", error);
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <div>
      {user ? <p>Bienvenido, {user.email}</p> : <p>No estás autenticado</p>}
    </div>
  );
}

export default Profile;
