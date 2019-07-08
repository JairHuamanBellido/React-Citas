import React from "react";
import Cita from "./cita";
export default class ListCitas extends React.Component {
    render() {
        const citas = this.props.citas;
        let listas = citas.map((cita,index) => 
            <Cita key={index} Cita={cita} />
        );
        return (<ul>{listas}</ul>);
    }
}
