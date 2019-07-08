import React from "react";

/**

    ============================================================
    @PROPS
    
        @isPassword : Boolean  ( Booleano si el input es de tipo password )
        @labelName : String (Nombre del label del component}
        @reset :  Boolean { Booleano indicador si el form ya se envió y para limpiar los campos}


    ============================================================
    @PROPS_EVENTS

        @eventResetForm  # NO PARAMS
            Evento Mando al Form para setear su valor de Completed a FALSE

        @newCita 
            Params (e : Elemnto Input)
            Accede al state del Form y actualiza sus valores


*/

export default class Field extends React.Component {
    state = {
        value: ""
    };


    // Evento a la escucha de un cambio en el componente
    componentDidUpdate() {
        const isFormSubmitted = this.props.reset;
        if (isFormSubmitted) {
            console.log("Completado");
            this.props.eventResetForm();
            this.setState({ value: "" });
        }
    }

    // Evento a la escucha de un tipeo en el input
    handleChange = e => {
        this.setState({ value: e.target.value });
        this.props.newCita(e);
    };

    render() {
        return (
            <div>
                <label>{this.props.labelName}</label>
                <input
                    type={this.props.isPassword ? "password" : "text"}
                    placeholder={`Ingrese su ${this.props.labelName}`}
                    name={this.props.labelName}
                    onChange={this.handleChange}
                    value={this.state.value}
                />
            </div>
        );
    }
}
