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
          <div className="logo">
            <div className="logoNintendo">Nintendoº</div>
          </div>
          <div className="vacio1"></div>
        </div>
        <div className="parteBotonera">
          <div className="parteCruceta">
            <div className="cruceta">
              ◦
              <div className="fila">
                <div className="boton arriba">
                  <div className="triangulo"></div>
                </div>
              </div>
              <div className="fila">
                {" "}
                ◦
                <div className="boton izquierda">
                  <div className="triangulo"></div>
                </div>
                <div className="boton centro">
                  <div className="circulo"></div>
                </div>
                <div className="boton derecha">
                  <div className="triangulo"></div>
                </div>
                ◦
              </div>
              <div className="fila2">
                <div className="boton abajo">
                  <div className="triangulo"></div>
                </div>
                ◦
              </div>
            </div>
          </div>
          <div className="botoneraAYB">
            <div className="vacio4"></div>
            <div className="botoneraB">
              <div className="vacio5">vacio</div>
              <div class="botonB">
                <div className="B"></div>
                <div className="letraB">B</div>
              </div>
            </div>
            <div className="botoneraA">
              <div className="vacio6">vacio</div>
              <div className="botonA">
                <div className="A"></div>
                <div className="letraA">A</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="parteBaja">
        <div className="vacio2"></div>
        <div className="parteSelect">
          <div className="botonSelect">
            <div className="select"></div>
            <div className="letraSelect">SELECT</div>
          </div>
        </div>
        <div className="parteStart"></div>
        <div className="parteAltavoz"></div>
      </div>
    </div>
  );
};
