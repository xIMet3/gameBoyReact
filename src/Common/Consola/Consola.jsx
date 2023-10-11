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

        </div>

    )
}