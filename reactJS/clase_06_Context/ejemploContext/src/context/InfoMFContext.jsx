import { createContext, useState } from "react";

export const InfoContext = createContext();

const infoMasculino = ["Lautaro", "Ignacio", "Matias", "Federico", "Raul"];
const infoFemenino = ["Sandra", "Bianca", "Ayelen", "Karla", "Andrea"];

const InfoProvider = ({ children }) => {
  const [info, setInfo] = useState(infoMasculino);

  const toggleInfo = () => {
    setInfo((cambio) =>
      cambio === infoMasculino ? infoFemenino : infoMasculino
    );
  };

  return (
    <InfoContext.Provider value={{ info, toggleInfo }}>
      {children}
    </InfoContext.Provider>
  );
};

export default InfoProvider;
