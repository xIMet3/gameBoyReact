import React, { useState, useEffect } from "react";
import "./Consola.css";
import { useNavigate } from "react-router-dom";
import encendidoGif from "../../../Gif/encendidoGif.gif";
import superMarioWorldGif from "../../../Gif/superMarioWorld.gif";
import tetrisGif from "../../../Gif/tetris.gif";
import zeldaGif from "../../../Gif/zelda.gif";

export const Consola = () => {
  const [encendidoActivado, setEncendidoActivado] = useState(false);
  const [ledRojo, setLedRojo] = useState(false);
  const [gifVisible, setGifVisible] = useState(false);
  const [juegos, setJuegos] = useState([
    "Super Mario World",
    "Tetris",
    "The Legend of Zelda",
    // Agrega los demás juegos aquí
  ]);
  const [indiceJuego, setIndiceJuego] = useState(0);
  const [juegosVisible, setJuegosVisible] = useState(true);
  const navigate = useNavigate();

  const gifs = {
    "Super Mario World": superMarioWorldGif,
    Tetris: tetrisGif,
    "The Legend of Zelda": zeldaGif,
    // Añade más juegos y GIFs aquí
  };

  const [gifJuego, setGifJuego] = useState(null);

  const handleClick = (tipo) => {
    if (tipo === "Encendido") {
      if (encendidoActivado) {
        setEncendidoActivado(false);
        setLedRojo(false);
        setGifJuego(null); // Agregado: Reiniciar gifJuego a null
        setGifVisible(false);
        setJuegosVisible(true);
      } else {
        setEncendidoActivado(true);
        setLedRojo(true);
        setGifJuego(encendidoGif); // Agregado: Cambiar a encendidoGif
        setGifVisible(true);
        setJuegosVisible(false);
        setTimeout(() => {
          setGifVisible(false);
          setJuegosVisible(true);
        }, 10000);
      }
    } else if (tipo === "Arriba") {
      setIndiceJuego((prevIndice) =>
        prevIndice === 0 ? juegos.length - 1 : prevIndice - 1
      );
    } else if (tipo === "Abajo") {
      setIndiceJuego((prevIndice) =>
        prevIndice === juegos.length - 1 ? 0 : prevIndice + 1
      );
    }
    console.log(encendidoActivado);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (encendidoActivado) {
        setIndiceJuego((prevIndice) =>
          prevIndice === juegos.length - 1 ? 0 : prevIndice + 1
        );
      }
    }, 95000);

    return () => clearInterval(interval);
  }, [encendidoActivado, juegos]);

  const reproducirGif = () => {
    setGifVisible(true);
    setJuegosVisible(false);

    setTimeout(() => {
      setGifVisible(false);
      setJuegosVisible(true);
    }, 2300);
  };

  const handleClickA = () => {
    if (ledRojo && !gifVisible) {
      const juegoSeleccionado = juegos[indiceJuego];
      const gifJuego = gifs[juegoSeleccionado];

      if (gifJuego) {
        setGifJuego(gifJuego);
        reproducirGif();
      }
    }
  };

  const handleClickB = () => {
    setGifVisible(false);
  };

  return (
    <div className="paginaEntera">
      <div className="parteBotonEncendido">
        <div className="vacio9"></div>
        <div className="botonEncendido">
          <div
            className={`encendido${
              encendidoActivado ? " encendido-hover" : ""
            }`}
            onClick={() => handleClick("Encendido")}
          ></div>
        </div>
      </div>

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
              <div className="margenIzq">
                <div className="vacio8"></div>
                <div className="zonaLed">
                  <div className="parteLed">
                    <div
                      className={`led${ledRojo ? " rojo-brillante" : ""}`}
                    ></div>
                  </div>
                  <div className="parteConexion">
                    <div className="conexion">) ) )</div>
                  </div>
                </div>
                <div className="zonaPower">
                  <div className="power">POWER</div>
                </div>
              </div>

              <div className="pantalla">
                {ledRojo && gifVisible && gifJuego && (
                  <img
                    id="encendidoGif"
                    className="encendidoGif"
                    src={gifJuego}
                    alt="Encendido GIF"
                  />
                )}

                {ledRojo &&
                  !gifVisible &&
                  juegos.map((juego, index) => (
                    <div
                      key={index}
                      className={`juego ${
                        index === indiceJuego ? "seleccionado" : ""
                      }`}
                    >
                      {index === indiceJuego && "‣ "}
                      <span className={index === indiceJuego ? "negrita" : ""}>
                        {juego}
                      </span>
                    </div>
                  ))}
              </div>

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
                  <div
                    className="boton arriba"
                    onClick={() => handleClick("Arriba")}
                  >
                    <div className="triangulo"></div>
                  </div>
                </div>
                <div className="fila">
                  ◦
                  <div
                    className="boton izquierda"
                    onClick={() => handleClick("Izquierda")}
                  >
                    <div className="triangulo"></div>
                  </div>
                  <div className="boton centro">
                    <div className="circulo"></div>
                  </div>
                  <div
                    className="boton derecha"
                    onClick={() => handleClick("Derecha")}
                  >
                    <div className="triangulo"></div>
                  </div>
                  ◦
                </div>
                <div className="fila2">
                  <div
                    className="boton abajo"
                    onClick={() => handleClick("Abajo")}
                  >
                    <div className="triangulo"></div>
                  </div>
                  ◦
                </div>
              </div>
            </div>

            <div className="botoneraAYB">
              <div className="vacio4"></div>
              <div className="botoneraB">
                <div className="vacio5"></div>
                <div className="botonB">
                  <div className="B" onClick={() => handleClick("B")}></div>
                  <div className="letraB">B</div>
                </div>
              </div>
              <div className="botoneraA">
                <div className="vacio6"></div>
                <div className="botonA">
                  <div className="A" onClick={handleClickA}></div>
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
              <div
                className="select"
                onClick={() => handleClick("Select")}
              ></div>
              <div className="letraSelect">SELECT</div>
            </div>
          </div>

          <div className="parteStart">
            <div className="botonStart">
              <div className="start" onClick={() => handleClick("Start")}></div>
              <div className="letraStart">START</div>
            </div>
          </div>

          {/* Parte del altavoz */}
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
    </div>
  );
};
