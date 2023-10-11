import React from "react";
import './Consola.css';

export const Consola = () => {
    return (
        <div className="cuerpoConsola">
            <div className="bordeArriba">
                <div className="onOff">
                    <div className="off">
                        OFF ●
                    </div>
                    <div className="on">
                    ● ON
                    </div>

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
                <div className="parteCruceta"></div>
                <div className="parteLogo"></div>
                <div className="parteBotonera"></div>
            </div>
            <div className="parteBaja">
                <div className="vacio1"></div>
                <div className="parteSelect"></div>
                <div className="parteStart"></div>
                <div className="parteAltavoz"></div>
            </div>

        </div>

    )
}