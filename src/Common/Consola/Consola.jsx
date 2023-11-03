import React, { useState, useEffect } from "react";
import "./Consola.css";
import { useNavigate } from "react-router-dom";
import encendidoGif from "../../../Gif/encendidoGif.gif";

export const Consola = () => {
  // Estado para controlar el encendido de la consola
  const [encendidoActivado, setEncendidoActivado] = useState(false);

  // Estado para controlar el LED rojo
  const [ledRojo, setLedRojo] = useState(false);

  // Estado para controlar la visibilidad del GIF
  const [gifVisible, setGifVisible] = useState(false);

  // Lista de juegos disponibles
  const [juegos, setJuegos] = useState([
    "Super Mario Land",
    "Tetris",
    "The Legend of Zelda",
    "Pokemon Rojo / Azul",
    "Pokemon Amarillo",
    "Donkey Kong",
    "Wario Land 2",
    "Metroid II",
    "Mega Man V"
  ]);

  // Indice del juego seleccionado
  const [indiceJuego, setIndiceJuego] = useState(0);

  // Hook de navegacion
  const navigate = useNavigate();

  // Funcion que maneja los clics en los botones
  const handleClick = (tipo) => {
    if (tipo === "Encendido") {
      if (encendidoActivado) {
        // Apaga la consola
        setEncendidoActivado(false);
        setLedRojo(false);
        setGifVisible(false);
      } else {
        // Enciende la consola
        setEncendidoActivado(true);
        setLedRojo(true);
        setGifVisible(true);

        // Despues de un tiempo, apaga el GIF
        setTimeout(() => {
          setGifVisible(false);
        }, 2300);
      }
    } else if (tipo === "Arriba") {
      // Selecciona el juego anterior
      setIndiceJuego((prevIndice) =>
        prevIndice === 0 ? juegos.length - 1 : prevIndice - 1
      );
    } else if (tipo === "Abajo") {
      // Selecciona el juego siguiente
      setIndiceJuego((prevIndice) =>
        prevIndice === juegos.length - 1 ? 0 : prevIndice + 1
      );
    }
  };

  // Efecto que cambia el juego seleccionado cada 5 segundos si la consola esta encendida
  useEffect(() => {
    const interval = setInterval(() => {
      if (encendidoActivado) {
        setIndiceJuego((prevIndice) =>
          prevIndice === juegos.length - 1 ? 0 : prevIndice + 1
        );
      }
    }, 5000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, [encendidoActivado, juegos]);

  // Renderizado del componente
  return (
    <div className="paginaEntera">
      {/* Seccion del boton de encendido */}
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

      {/* Seccion del cuerpo de la consola */}
      <div className="cuerpoConsola">
        {/* Borde superior */}
        <div className="bordeArriba">
          <div className="onOff">
            <div className="off">OFF ●</div>
            <div className="on">● ON</div>
          </div>
        </div>

        {/* Parte de la pantalla */}
        <div className="partePantalla">
          <div className="pantallaExterior">
            <div className="margenTop"></div>

            {/* Parte central de la pantalla */}
            <div className="pantallaCentral">
              <div className="margenIzq">
                <div className="vacio8"></div>

                {/* Zona del LED */}
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

                {/* Zona de POWER */}
                <div className="zonaPower">
                  <div className="power">POWER</div>
                </div>
              </div>

              {/* Pantalla de juegos */}
              <div className="pantalla">
                {ledRojo && gifVisible && (
                  <img
                    id="encendidoGif"
                    className="encendidoGif"
                    src={encendidoGif}
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

        {/* Parte central de la consola */}
        <div className="parteCentral">
          {/* Parte del logo de Nintendo */}
          <div className="parteLogo">
            <div className="vacio3"></div>
            <div className="logo">
              <div className="logoNintendo">Nintendo˚</div>
            </div>
            <div className="vacio1"></div>
          </div>

          {/* Botonera de la consola */}
          <div className="parteBotonera">
            {/* Parte de la cruceta */}
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
                  {" "}
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

            {/* Parte de los botones A y B */}
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
                  <div className="A" onClick={() => handleClick("A")}></div>
                  <div className="letraA">A</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Parte inferior de la consola */}
        <div className="parteBaja">
          <div className="vacio2"></div>

          {/* Parte del boton SELECT */}
          <div className="parteSelect">
            <div className="botonSelect">
              <div
                className="select"
                onClick={() => handleClick("Select")}
              ></div>
              <div className="letraSelect">SELECT</div>
            </div>
          </div>

          {/* Parte del boton START */}
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
