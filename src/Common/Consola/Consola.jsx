import React from "react";
import "./Consola.css";

export const Consola = () => {
  return (
    <div className="cuerpoConsola">
      <div className="bordeArriba">
        <div className="onOff">
          <div className="off">OFF ●</div>
          <div className="on">● ON</div>
        </div>
      </div>
      <div className="partePantalla">
        <div className="pantallaExterior">
          <div className="margenTop"></div>
          <div className="pantallaCentral">
            <div className="margenIzq"></div>
            <div className="pantalla"></div>
            <div className="margenDer"></div>
          </div>
          <div className="margenBot"></div>
        </div>
      </div>
      <div className="parteCentral">
        <div className="parteLogo">
          <div className="vacio3"></div>
          <div className="logo"></div>
          <div className="vacio1"></div>
        </div>
        <div className="parteBotonera">
          <div className="parteCruceta">
            <div className="cruceta">
              ◦
              <div className="fila">
                <div className="boton arriba"></div>
              </div>
              <div className="fila">
                {" "}
                ◦<div className="boton izquierda"></div>
                <div className="boton centro">⚫</div>
                <div className="boton derecha"></div>◦
              </div>
              <div className="fila2">
                <div className="boton abajo"></div>◦
              </div>
            </div>
          </div>
          <div className="botoneraAYB">
            <div className="vacio4"></div>
          </div>
        </div>
      </div>
      <div className="parteBaja">
        <div className="vacio2"></div>
        <div className="parteSelect"></div>
        <div className="parteStart"></div>
        <div className="parteAltavoz"></div>
      </div>
    </div>
  );
};
