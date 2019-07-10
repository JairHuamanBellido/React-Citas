import React, { Fragment } from "react";
import Cita from "./cita";
import "./listCitas.css";
/**
    @Props

        @citas : ARRAY  (Lista de todas las citas)
 */

export default class ListCitas extends React.Component {
    render() {
        const citas = this.props.citas;
        let listas = citas.map((cita, index) => (
            <Cita key={index} Cita={cita} />
        ));
        return (
            <Fragment>
                <div className="ListCitasC-container">
                    <div className="listCitas-container">
                        <header>
                            <h2>Lista de Citas</h2>
                        </header>
                        <ul>{listas}</ul>
                        <div className="blur-mask" />
                    </div>
                </div>
            </Fragment>
        );
    }
}
