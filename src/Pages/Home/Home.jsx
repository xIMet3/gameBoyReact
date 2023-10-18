import React, { useState } from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";
import { Consola } from "../../Common/Consola/Consola";

export const Home = () => {
  const [encendidoActivado, setEncendidoActivado] = useState(false);

  const handleChangeView = () => {
    setEncendidoActivado(!encendidoActivado);
  };

  return (
    <div className="vistaCompleta">
      {encendidoActivado ? (
        <Encendido />
      ) : (
        <div className="consolaEntera">
          <Consola handleChangeView={handleChangeView} />
        </div>
      )}
    </div>
  );
};
