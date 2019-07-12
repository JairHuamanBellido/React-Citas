import React, { Fragment } from "react";

/**
    @Props

        @Cita : Objeto  (Objeto Cita)
 */

export default class Cita extends React.Component {
    render() {
        const Cita = this.props.Cita;   
        const key = parseInt(this.props.index) + 1;
        return (
            <Fragment>
                <div className="CITAC-container">
                    <div className="Index-Cita">
                        <p>{key}</p>
                    </div>
                    <div className="Details-Cita">
                        <p className="Cita-Nombre">{Cita.Nombre}</p>
                        <p className="Cita-Fecha">{Cita.Fecha}</p>
                    </div>
                </div>
            </Fragment>
        );
    }
}
