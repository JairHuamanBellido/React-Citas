import React, { Fragment } from "react";

/**
    @Props

        @Cita : Objeto  (Objeto Cita)
 */

export default class Cita extends React.Component {
    render() {
        const Cita = this.props.Cita;
        return (
            <Fragment>
                <div className="CITAC-container">
                    <p className="Cita-Nombre">{Cita.Nombre}</p>
                    <p className="Cita-Fecha">{Cita.Fecha}</p>
                </div>
            </Fragment>
        );
    }
}
