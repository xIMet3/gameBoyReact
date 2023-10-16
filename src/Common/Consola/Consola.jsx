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
          <div className="margenBot">
            <div className="vacio7"></div>
            <div className="logoGameBoy">GAME BOY</div>
            <div className="logoPocket">
              <div className="pocket">pocket</div>
            </div>
          </div>
        </div>
      </div>
      <div className="parteCentral">
        <div className="parteLogo">
          <div className="vacio3"></div>
          <div className="logo">
            <div className="logoNintendo">Nintendo˚</div>
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
        <div className="parteStart">
          <div className="botonStart">
            <div className="start"></div>
            <div className="letraStart">START</div>
          </div>
        </div>
        <div className="parteAltavoz">
          <div className="altavoz">
            <div className="cuadriculaAltavoz">
              {/* Fila 1 */}
              <div className="punto0"></div>
              <div className="punto0"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              {/* Fila 2 */}
              <div className="punto0"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              {/* Fila 3 */}
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              {/* Fila 4 */}
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              {/* Fila 5 */}
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              {/* Fila 6 */}
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto0"></div>
              {/* Fila 7 */}
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto2"></div>
              <div className="punto1"></div>
              <div className="punto0"></div>
              <div className="punto0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
