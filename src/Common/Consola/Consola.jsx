import React, { useState, useEffect } from "react";
import "./Consola.css";
import { useNavigate } from "react-router-dom";
import encendidoGif from "../../../Gif/encendidoGif.gif";
import superMarioWorldGif from "../../../Gif/superMarioWorld.gif";
import tetrisGif from "../../../Gif/tetris.gif";
import zeldaGif from "../../../Gif/zelda.gif";
import pokemonRojoGif from "../../../Gif/pokemonRojo.gif";
import pokemonAzulGif from "../../../Gif/pokemonAzul.gif";
import pokemonAmarilloGif from "../../../Gif/pokemonAmarillo.gif";
import donkeyKongGif from "../../../Gif/donkey-kong.gif"
import superMetroidGif from "../../../Gif/metroid-super.gif"

export const Consola = () => {
  // Definicion de estados usando el hook useState
  const [encendidoActivado, setEncendidoActivado] = useState(false);
  const [ledRojo, setLedRojo] = useState(false);
  const [gifVisible, setGifVisible] = useState(false);
  const [juegos, setJuegos] = useState([
    "Super Mario World",
    "Tetris",
    "The Legend of Zelda",
    "Pokemon Rojo",
    "Pokemon Azul",
    "Pokemon Amarillo",
    "Donkey Kong",
    "Super Metroid",
  ]);
  const [indiceJuego, setIndiceJuego] = useState(0);
  const [juegosVisible, setJuegosVisible] = useState(true);
  const navigate = useNavigate(); // Inicializa el hook de navegacion

  // Objeto que mapea nombres de juegos a rutas de archivos de imagen
  const gifs = {
    "Super Mario World": superMarioWorldGif,
    "Tetris": tetrisGif,
    "The Legend of Zelda": zeldaGif,
    "Pokemon Rojo": pokemonRojoGif,
    "Pokemon Azul": pokemonAzulGif,
    "Pokemon Amarillo": pokemonAmarilloGif,
    "Donkey Kong": donkeyKongGif,
    "Super Metroid": superMetroidGif,
  };

  // Estado para el gif del juego actual
  const [gifJuego, setGifJuego] = useState(null);

  // Funcion que maneja los clics en botones
  const handleClick = (tipo) => {
    if (tipo === "Encendido") {
      if (encendidoActivado) {
        setEncendidoActivado(false);
        setLedRojo(false);
        setGifJuego(null); //Reiniciar gifJuego a null
        setGifVisible(false);
        setJuegosVisible(true);
      } else {
        setEncendidoActivado(true);
        setLedRojo(true);
        setGifJuego(encendidoGif); //Cambiar a encendidoGif
        setGifVisible(true);
        setJuegosVisible(false);
        setTimeout(() => {
          setGifVisible(false);
          setJuegosVisible(true);
        }, 2300);
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

  // Efecto que actualiza el juego actual cada 95 segundos si la consola esta encendida
  useEffect(() => {
    const interval = setInterval(() => {
      if (encendidoActivado) {
        setIndiceJuego((prevIndice) =>
          prevIndice === juegos.length - 1 ? 0 : prevIndice + 1
        );
      }
    }, 95000);
    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [encendidoActivado, juegos]);

  // Funcion que reproduce el gif del juego actual
  const reproducirGif = () => {
    setGifVisible(true);
    setJuegosVisible(false);

    setTimeout(() => {
      setGifVisible(false);
      setJuegosVisible(true);
    }, 16000);
  };

  // Maneja el clic en el boton "A"
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

  return (
    <div className="paginaEntera">
      {/* Boton de encendido */}
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
        {/* Consola entera */}
      <div className="cuerpoConsola">
        <div className="bordeArriba">
          <div className="onOff">
            <div className="off">OFF ●</div>
            <div className="on">● ON</div>
          </div>
        </div>
            {/* Zona pantalla */}
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
          {/* Parte central con el logo y las botoneras */}
        <div className="parteCentral">
          <div className="parteLogo">
            <div className="vacio3"></div>
            <div className="logo">
              <div className="logoNintendo">Nintendo˚</div>
            </div>
            <div className="vacio1"></div>
          </div>

          <div className="parteBotonera">
            {/* Cruceta */}
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
              {/* Botonera A y B */}
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
          {/* Parte baja con Select, Start y altavoz */}
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
