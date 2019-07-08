import React from "react";

export default class Cita extends React.Component {
    render() {
        const Cita = this.props.Cita;
        return (
            <div>
                
                <h1>{Cita.Nombre}</h1>
                
            </div>
        );
    }
}
